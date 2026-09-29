import express from 'express';
import { config as loadEnv } from 'dotenv';
import rateLimit from 'express-rate-limit';
import multer from 'multer';
import nodemailer from 'nodemailer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(projectRoot, '.env');
loadEnv({ path: envPath });
const port = Number(process.env.PORT || 4001);
const recipient = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
const allowedOrigins = new Set([
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://malikinrika-commits.github.io',
  ...(process.env.CORS_ORIGINS || '').split(',').map((origin) => origin.trim()).filter(Boolean),
]);

const applicationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many applications were submitted. Please try again later.' },
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many contact requests were submitted. Please try again later.' },
});

const allowedResumeTypes = new Map([
  ['.pdf', 'application/pdf'],
  ['.doc', 'application/msword'],
  ['.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
]);

const uploadResume = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024, files: 1, fields: 12 },
  fileFilter: (_req, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase();
    if (allowedResumeTypes.get(extension) !== file.mimetype) {
      callback(new Error('Resume must be a PDF, DOC, or DOCX file.'));
      return;
    }
    callback(null, true);
  },
});

const cleanText = (value, maxLength) =>
  (typeof value === 'string' ? value : '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .trim()
    .slice(0, maxLength);

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isValidOptionalUrl = (value) => {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
};

const createMailer = () => {
  loadEnv({ path: envPath });
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const host = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE.toLowerCase() === 'true'
    : smtpPort === 465;
  if (!user || !pass || !host || !recipient || !Number.isInteger(smtpPort)) return null;

  return {
    user,
    transporter: nodemailer.createTransport({
      host,
      port: smtpPort,
      secure,
      requireTLS: !secure,
      family: 4,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 30000,
      auth: {
        user,
        pass,
      },
    }),
  };
};

app.use((req, res, next) => {
  const origin = req.get('Origin');
  res.vary('Origin');

  if (origin && allowedOrigins.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');
  }

  if (req.method === 'OPTIONS') {
    return res.sendStatus(origin && !allowedOrigins.has(origin) ? 403 : 204);
  }

  next();
});

app.use(express.json({ limit: '20kb' }));

app.get('/api/health', (_req, res) => {
  loadEnv({ path: envPath });
  res.json({
    ok: true,
    emailConfigured: Boolean(
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && recipient,
    ),
  });
});

app.post('/api/applications', applicationLimiter, uploadResume.single('resume'), async (req, res) => {
  const body = req.body || {};
  const firstName = cleanText(body.firstName, 100);
  const lastName = cleanText(body.lastName, 100);
  const email = cleanText(body.email, 254);
  const phone = cleanText(body.phone, 40);
  const linkedin = cleanText(body.linkedin, 500);
  const github = cleanText(body.github, 500);
  const note = cleanText(body.note, 5000);
  const jobTitle = cleanText(body.jobTitle, 200) || 'General Talent Pool';

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'First name, last name, and email are required.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Enter a valid email address.' });
  }
  if (!isValidOptionalUrl(linkedin) || !isValidOptionalUrl(github)) {
    return res.status(400).json({ error: 'LinkedIn and portfolio links must be valid http(s) URLs.' });
  }
  if (!req.file) {
    return res.status(400).json({ error: 'Please attach your resume (PDF, DOC, or DOCX; up to 8 MB).' });
  }

  const mailer = createMailer();
  if (!mailer) {
    console.error('SMTP_USER and SMTP_PASS must be configured before accepting applications.');
    return res.status(503).json({ error: 'Application email is not configured yet. Please try again later.' });
  }

  const resumeName = path.basename(req.file.originalname.replace(/\\/g, '/'))
    .replace(/[\r\n\u0000]/g, '_')
    .slice(0, 150) || 'resume';

  try {
    await mailer.transporter.sendMail({
      from: `UpLiv Careers <${mailer.user}>`,
      to: recipient,
      replyTo: email,
      subject: `Job application: ${jobTitle} — ${firstName} ${lastName}`,
      text: [
        'New UpLiv job application',
        '',
        `Position: ${jobTitle}`,
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `LinkedIn: ${linkedin || 'Not provided'}`,
        `GitHub / Portfolio: ${github || 'Not provided'}`,
        '',
        'Note:',
        note || 'Not provided',
      ].join('\n'),
      attachments: [{
        filename: resumeName,
        content: req.file.buffer,
        contentType: req.file.mimetype,
      }],
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Failed to send job application email:', error);
    return res.status(502).json({ error: 'We could not send your application right now. Please try again later.' });
  }
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  const body = req.body || {};
  const firstName = cleanText(body.firstName, 100);
  const lastName = cleanText(body.lastName, 100);
  const company = cleanText(body.company, 200);
  const email = cleanText(body.email, 254);
  const phone = cleanText(body.phone, 40);
  const inquiryType = cleanText(body.inquiryType, 150) || 'General Inquiry';
  const message = cleanText(body.message, 5000);

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'First name, last name, email, and message are required.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Enter a valid email address.' });
  }

  const mailer = createMailer();
  if (!mailer) {
    console.error('SMTP_USER and SMTP_PASS must be configured before accepting contact queries.');
    return res.status(503).json({ error: 'Contact email is not configured yet. Please try again later.' });
  }

  try {
    await mailer.transporter.sendMail({
      from: `UpLiv Website Contact <${mailer.user}>`,
      to: recipient,
      replyTo: email,
      subject: `Contact Query: ${inquiryType} — ${firstName} ${lastName}`,
      text: [
        'New website contact query',
        '',
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Company: ${company || 'Not provided'}`,
        `Phone: ${phone || 'Not provided'}`,
        `Inquiry type: ${inquiryType}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Failed to send contact query email:', error);
    return res.status(502).json({ error: 'We could not send your inquiry right now. Please try again later.' });
  }
});

app.use((error, _req, res, _next) => {
  if (error instanceof multer.MulterError) {
    const message = error.code === 'LIMIT_FILE_SIZE'
      ? 'Resume must be 8 MB or smaller.'
      : 'Please attach one valid resume file.';
    return res.status(400).json({ error: message });
  }
  if (error) {
    return res.status(400).json({ error: error.message || 'Invalid application submission.' });
  }
});

app.use(express.static(path.join(projectRoot, 'dist')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(projectRoot, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`UpLiv application server listening on port ${port}`);
});