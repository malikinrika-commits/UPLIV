import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ImplementationPageProps {
  onOpenRequirement: (serviceName?: string) => void;
  onOpenExpert: () => void;
}

export const ImplementationPage: React.FC<ImplementationPageProps> = ({
  onOpenRequirement,
  onOpenExpert
}) => {
  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Enterprise Software &amp; Platform Deployment</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Technology Implementation Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Bridge the gap between technology licenses and operational adoption. UpLiv provides end-to-end configuration, system integration, data migration, and user enablement for enterprise software platforms.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRequirement('Technology Implementation')}
                className="px-6 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-sky-500/10 cursor-pointer font-display"
              >
                Discuss Implementation Needs
              </button>
              <button
                onClick={onOpenExpert}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm border border-slate-700 transition-colors cursor-pointer"
              >
                Talk to an Implementation Specialist
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white font-display mb-3">Enterprise SaaS &amp; ERP</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Configuration, workflow rules, custom object architecture, and data pipelines for Salesforce, SAP, and Workday.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Custom apex / plugin engineering</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Single sign-on &amp; Okta / Azure AD integration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Role-based access &amp; permission sets</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white font-display mb-3">Cloud Platform Deployments</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Infrastructure as Code (Terraform) landing zones, VPC peering, container orchestration, and security baseline controls.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Multi-region AWS/Azure/GCP topologies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Kubernetes (EKS/AKS/GKE) cluster buildouts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Automated zero-downtime deployment pipelines</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white font-display mb-3">Legacy Cutover &amp; Hypercare</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Meticulously planned migration runbooks, data reconciliation audits, rollback contingencies, and 24/7 hypercare support.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Weekend cutover execution management</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Post-launch triage &amp; defect remediation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Comprehensive runbook &amp; staff enablement</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
