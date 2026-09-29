import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-slate-300">
      <div>
        <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
          Legal &amp; Data Protection
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 mt-2 font-mono">
          Last Updated: January 1, 2026 · UpLiv LLC
        </p>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-xs sm:text-sm leading-relaxed">
        <p>
          UpLiv LLC (&quot;UpLiv,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), incorporated in New York, USA, and operating the domain <strong>https://up-liv.com/</strong>, is committed to safeguarding the privacy and security of individuals who visit our website, submit technology requirements, or interact with our IT staffing and consulting services in the United States.
        </p>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">1. Information We Collect</h2>
          <p>We may collect information directly from you or automatically during your interaction with our website, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li><strong>Contact and Professional Information:</strong> Name, business email address, phone number, company name, job title, and service preferences provided via our inquiry forms.</li>
            <li><strong>Candidate Application Data:</strong> Resumes, employment history, LinkedIn URLs, portfolios, technical skill self-assessments, and work authorization status submitted for staffing or career consideration.</li>
            <li><strong>Technical and Device Information:</strong> IP address, browser type, operating system, and navigation telemetry collected to ensure website security and optimal rendering.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">2. How We Use Information</h2>
          <p>UpLiv LLC uses collected information strictly for legitimate commercial and professional purposes, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Evaluating and responding to your technology requirements, RFQs, and consultation inquiries.</li>
            <li>Matching qualified candidates with client IT staffing, contract-to-hire, and direct placement opportunities.</li>
            <li>Fulfilling contractual obligations under executed Master Services Agreements (MSAs) and Statements of Work (SOWs).</li>
            <li>Preventing fraudulent inquiries, cyber threats, and unauthorized use of our platforms.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">3. Information Sharing &amp; Disclosure</h2>
          <p>
            UpLiv LLC does not sell, rent, or lease personal or corporate contact data to third-party data brokers or marketing affiliates. We disclose information only under the following limited conditions:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li><strong>Prospective Clients &amp; Employers:</strong> For candidates submitting resumes, profiles are shared with vetted client hiring teams only with candidate awareness.</li>
            <li><strong>Authorized Service Providers:</strong> Trusted enterprise vendors (cloud hosting, CRM, background check providers) bound by strict confidentiality and data protection agreements.</li>
            <li><strong>Legal Compliance:</strong> When required by federal or state law, subpoena, or valid legal process in the United States.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">4. Data Security &amp; Retention</h2>
          <p>
            We implement administrative, technical, and physical safeguards designed to protect personal and business information against unauthorized access, destruction, loss, or alteration. Data is retained only for as long as necessary to fulfill the purposes outlined in this policy or to comply with statutory legal requirements under New York and U.S. law.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">5. Cookies &amp; Tracking Technologies</h2>
          <p>
            Our website uses standard functional session cookies and analytics tools to facilitate navigation and understand user traffic patterns. You may modify your browser settings to reject cookies, though certain interactive features may have reduced functionality.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">6. Your Privacy Rights</h2>
          <p>
            Subject to applicable state and federal laws (including CCPA/CPRA where applicable), you have the right to request access to, correction of, or deletion of your personal information held by UpLiv LLC.
          </p>
        </section>

        <section className="space-y-2 pt-4 border-t border-slate-800">
          <h2 className="text-base font-bold text-white font-display">7. Contact Information</h2>
          <p>For questions or requests concerning this Privacy Policy, please contact our corporate office:</p>
          <div className="bg-slate-950 p-4 rounded-xl space-y-1 text-xs text-slate-400">
            <p className="text-white font-semibold">UpLiv LLC</p>
            <p>Incorporated in New York, USA</p>
            <p>Domain: https://up-liv.com/</p>
            <p>Email: {COMPANY_INFO.email}</p>
          </div>
        </section>
      </div>
    </div>
  );
};
