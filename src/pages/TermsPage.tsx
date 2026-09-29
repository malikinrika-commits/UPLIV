import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-slate-300">
      <div>
        <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
          Corporate Legal Agreement
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-slate-500 mt-2 font-mono">
          Effective Date: January 1, 2026 · UpLiv LLC
        </p>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-xs sm:text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website located at <strong>https://up-liv.com/</strong>, operated by UpLiv LLC (&quot;UpLiv,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), incorporated in New York, USA, you agree to be bound by these Terms and Conditions (&quot;Terms&quot;) and all applicable laws and regulations in the United States. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">2. Services Description</h2>
          <p>
            UpLiv LLC provides IT staffing, technical recruiting, technology consulting, data &amp; AI services, and project-based technology solutions to organizations throughout the United States. Detailed commercial terms, rates, deliverable milestones, and service level agreements (SLAs) are governed by separately executed Master Services Agreements (MSAs) and Statements of Work (SOWs).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">3. Intellectual Property Rights</h2>
          <p>
            All content, layout, design, graphics, trademarks, logos, and software on this website are the property of UpLiv LLC or its content licensors and are protected by United States and international copyright and trademark laws. Client project deliverables and code created under specific SOW agreements are owned in accordance with the terms of the applicable client contract.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">4. User Submissions &amp; Confidentiality</h2>
          <p>
            Information submitted to UpLiv LLC through inquiry forms, requirement submissions, or resume uploads is treated in accordance with our Privacy Policy. Both UpLiv and prospective clients typically execute mutual Non-Disclosure Agreements (NDAs) prior to exchanging proprietary technical specifications or architectural documentation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">5. Limitation of Liability</h2>
          <p>
            In no event shall UpLiv LLC, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to use this website or any information provided herein.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white font-display">6. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the <strong>State of New York, USA</strong>, without regard to its conflict of law principles. Any legal action or proceeding arising out of or related to these Terms or the website shall be brought exclusively in the state or federal courts located within the State of New York.
          </p>
        </section>

        <section className="space-y-2 pt-4 border-t border-slate-800">
          <h2 className="text-base font-bold text-white font-display">7. Contact Information</h2>
          <p>Inquiries regarding these Terms &amp; Conditions should be directed to:</p>
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
