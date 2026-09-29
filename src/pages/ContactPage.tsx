import React, { useState } from 'react';
import { Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { apiUrl } from '../lib/api';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'Enterprise IT Staffing',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields (Name, Email, Message)');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your inquiry. Please try again.');
      }

      setIsSubmitted(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to send your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Direct Enterprise Engagement</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Let's Connect
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Reach our corporate advisory and staffing leadership. Whether you are planning a technical project, seeking specialized engineers, or evaluating strategic consulting, our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-10">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Inquiry Sent Successfully</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, {formData.firstName}. Your contact query has been sent to UpLiv. We will respond within 1 business day.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      company: '',
                      email: '',
                      phone: '',
                      inquiryType: 'Enterprise IT Staffing',
                      message: ''
                    });
                  }}
                  className="mt-4 px-6 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-lg text-xs transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-white font-display mb-1">
                  Send Us a Direct Message
                </h2>
                <p className="text-xs text-slate-400 mb-6">
                  Complete the form below and an UpLiv client director will get back to you promptly.
                </p>

                {error && (
                  <div className="mb-4 p-3 bg-rose-950/60 border border-rose-800 text-rose-300 text-xs rounded-xl">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                        placeholder="Sarah"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                        placeholder="Jenkins"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Company / Organization</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Business Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                        placeholder="sarah@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Inquiry Type</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                      >
                        <option value="Enterprise IT Staffing">Enterprise IT Staffing</option>
                        <option value="Technical Direct Hire Recruiting">Technical Direct Hire Recruiting</option>
                        <option value="Strategic IT Consulting">Strategic IT Consulting</option>
                        <option value="Project-Based IT Services">Project-Based IT Services</option>
                        <option value="Data & AI Solutions">Data &amp; AI Solutions</option>
                        <option value="Technology Implementation">Technology Implementation</option>
                        <option value="Careers / Recruiter Inquiry">Careers / Recruiter Inquiry</option>
                        <option value="Partnership / General">Partnership / General</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Message / Project Summary *</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-sky-500 resize-none"
                      placeholder="Please describe your technology requirements, project goals, or candidate profile needs..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer disabled:opacity-50 font-display"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white font-display border-b border-slate-800 pb-3">
                Corporate Credentials
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Legal Incorporation</span>
                    <p className="text-white font-semibold mt-0.5">UpLiv LLC</p>
                    <p className="text-slate-300 text-xs">Incorporated in New York, USA</p>
                    <p className="text-slate-400 text-xs mt-1">
                      Serving clients across the United States. Incorporated in New York, USA.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Direct Inquiries</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sky-400 hover:underline font-semibold mt-0.5 block">
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-slate-400 text-xs">Monitored 24/7 by client operations</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Domain &amp; Web</span>
                    <a href="https://up-liv.com/" target="_blank" rel="noopener noreferrer" className="text-slate-200 font-semibold mt-0.5 block">
                      https://up-liv.com/
                    </a>
                    <span className="text-slate-400 text-xs">Official corporate domain</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                U.S. Enterprise Notice
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                UpLiv LLC executes work under standard U.S. MSA, NDA, and SOW contract frameworks. All client code, architectural artifacts, and intellectual property remain 100% client-owned.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
