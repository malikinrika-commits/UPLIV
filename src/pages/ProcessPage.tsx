import React from 'react';
import { PROCESS_STEPS } from '../data/companyData';
import { CheckCircle2 } from 'lucide-react';

interface ProcessPageProps {
  onOpenRequirement: () => void;
  onOpenExpert: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenRequirement, onOpenExpert }) => {
  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Structured Execution Protocol</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Our Collaborative Process
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every client engagement follows a proven, transparent delivery framework engineered to minimize technical risk, eliminate communication friction, and maintain sprint predictability.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-10 hover:border-slate-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <div className="text-4xl font-extrabold text-sky-400 font-mono mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display mb-1">{step.title}</h3>
                  <p className="text-xs text-sky-300 font-medium mb-4">{step.tagline}</p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>

                <div className="lg:col-span-8 bg-slate-950/80 border border-slate-800/80 p-6 rounded-xl">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
                    Stage Deliverables &amp; Governance Activities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-white font-display">
              Ready to Experience the UpLiv Delivery Framework?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Schedule an introductory briefing with our New York technical delivery practice leads.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <button
                onClick={onOpenExpert}
                className="px-6 py-3 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer font-display"
              >
                Talk to an Expert
              </button>
              <button
                onClick={onOpenRequirement}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl text-xs transition-colors cursor-pointer"
              >
                Submit Your Requirement
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
