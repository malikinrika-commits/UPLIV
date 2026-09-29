import React from 'react';
interface PartnershipsPageProps {
  onOpenRequirement: () => void;
}

export const PartnershipsPage: React.FC<PartnershipsPageProps> = ({
  onOpenRequirement
}) => {
  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Technology Alliances &amp; Standards</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Partnerships &amp; Industry Standards
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              UpLiv LLC works with modern cloud ecosystems, enterprise platform providers, and independent software vendors to deliver resilient, architecturally certified solutions across the United States.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
            Ecosystem Alignments
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
            Technology Partners
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Our engineers and practice teams build upon verified cloud and enterprise vendor frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white font-display mb-2">Cloud Platforms</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Expertise across hyperscale cloud providers covering infrastructure, serverless architectures, and managed container runtimes.
            </p>
            <div className="border border-dashed border-slate-700 bg-slate-950/80 rounded-xl p-6 text-center text-xs text-slate-400">
              [Add technology partner: Cloud Platforms]
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white font-display mb-2">Enterprise Software</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Implementation, custom integration, and staff augmentation supporting major enterprise ERP, CRM, and workflow solutions.
            </p>
            <div className="border border-dashed border-slate-700 bg-slate-950/80 rounded-xl p-6 text-center text-xs text-slate-400">
              [Add technology partner: Enterprise Software]
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white font-display mb-2">AI &amp; Data Platforms</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Modern data lakehouse and machine learning operations platforms for reliable enterprise data pipelines and analytics.
            </p>
            <div className="border border-dashed border-slate-700 bg-slate-950/80 rounded-xl p-6 text-center text-xs text-slate-400">
              [Add technology partner: AI Platforms]
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
            Technical Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
            Industry Standards &amp; Certifications
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Our talent pool maintains active professional certifications across security, cloud architecture, and agile delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white font-display mb-2">Security &amp; Compliance Standards</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Practicing engineers trained in enterprise security postures, SOC 2 compliance readiness, HIPAA controls, and data protection best practices.
            </p>
            <div className="border border-dashed border-slate-700 bg-slate-950/80 rounded-xl p-6 text-center text-xs text-slate-400">
              [Add industry certification: Security Standards]
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white font-display mb-2">Cloud &amp; Architecture Certifications</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Staff and consultants holding professional certifications including AWS Certified Solutions Architect, Azure Solutions Architect Expert, and Google Cloud Professional Cloud Architect.
            </p>
            <div className="border border-dashed border-slate-700 bg-slate-950/80 rounded-xl p-6 text-center text-xs text-slate-400">
              [Add industry certification: Cloud Certifications]
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-white font-display">Partner With UpLiv</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Are you a software vendor, cloud technology provider, or technology platform looking for an agile U.S. delivery partner? We collaborate with vendors to provide specialized implementation and technical staffing services.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenRequirement}
                className="px-6 py-3 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer font-display"
              >
                Inquire About Channel Alliances
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
