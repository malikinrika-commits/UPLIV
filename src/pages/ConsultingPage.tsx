import React from 'react';
import {
  CheckCircle2,
} from 'lucide-react';

interface ConsultingPageProps {
  onOpenRequirement: (serviceName?: string) => void;
  onOpenExpert: () => void;
}

export const ConsultingPage: React.FC<ConsultingPageProps> = ({
  onOpenRequirement,
  onOpenExpert
}) => {
  const consultingServices = [
    {
      title: 'Technology Strategy & Roadmapping',
      desc: 'Formulate pragmatic multi-year technology roadmaps aligned with business objectives, capital allocations, and market opportunities.'
    },
    {
      title: 'Enterprise Digital Transformation',
      desc: 'Guide organizational transition from legacy paper or monolithic processes to automated, cloud-enabled digital workflows.'
    },
    {
      title: 'Cloud Strategy & Readiness',
      desc: 'Assess cloud migration feasibility, design multi-cloud landing zones, and optimize Total Cost of Ownership (TCO) across AWS, Azure, and GCP.'
    },
    {
      title: 'Data & Analytics Architecture',
      desc: 'Design scalable enterprise data platforms, data mesh architectures, and governance frameworks that eliminate organizational silos.'
    },
    {
      title: 'AI Strategy & Practical Adoption',
      desc: 'Identify high-ROI enterprise AI use cases, evaluate LLM integration patterns, and implement responsible governance frameworks.'
    },
    {
      title: 'Application Modernization Advisory',
      desc: 'Architect domain-driven decomposition of legacy monolithic applications into modular microservices and event-driven backends.'
    },
    {
      title: 'Enterprise Architecture & Governance',
      desc: 'Establish technical design standards, security best practices, and API governance policies across distributed development teams.'
    },
    {
      title: 'DevOps & Process Optimization',
      desc: 'Streamline continuous integration/continuous deployment (CI/CD) pipelines, reduce deployment lead times, and enhance developer velocity.'
    },
    {
      title: 'Technology & Technical Debt Audits',
      desc: 'Independent architectural evaluations of codebases, security postures, scalability bottlenecks, and legacy software vulnerabilities.'
    },
    {
      title: 'Vendor & Platform Implementation Advisory',
      desc: 'Objective RFP management, technical vendor selection, and implementation oversight for ERP, CRM, and cloud platform investments.'
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Executive Advisory &amp; Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Technology Consulting Aligned With Business Objectives
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We help CIOs, CTOs, and business leaders evaluate, architect, modernize, and implement resilient technology solutions that deliver tangible return on investment.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenExpert}
                className="px-6 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-sky-500/10 cursor-pointer font-display"
              >
                Schedule an Advisory Call
              </button>
              <button
                onClick={() => onOpenRequirement('IT Consulting')}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm border border-slate-700 transition-colors cursor-pointer"
              >
                Submit Consulting RFP
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            Advisory Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
            Strategic Consulting Practices
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-1">
            Pragmatic consulting grounded in engineering reality, not abstract slides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {consultingServices.map((serv) => (
            <div
              key={serv.title}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-base font-bold text-white font-display mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{serv.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                {serv.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                How We Partner
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Pragmatic, Outcome-Driven Advisory
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Unlike traditional management consultancies that deliver bloated slide decks and walk away, UpLiv pairs strategic consultants with senior architects who stay involved through implementation and deployment.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Rapid 2-to-4 week discovery sprints with clear deliverables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vendor-neutral recommendations driven by your technical fit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clear transition path to staff augmentation or turnkey build</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold text-white font-display mb-2">Request an Architecture Assessment</h4>
              <p className="text-xs text-slate-400 mb-6">
                Evaluate your application architecture, cloud costs, or technical debt with an UpLiv principal consultant.
              </p>
              <button
                onClick={onOpenExpert}
                className="w-full py-3 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-lg text-sm transition-colors cursor-pointer font-display"
              >
                Schedule Executive Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
