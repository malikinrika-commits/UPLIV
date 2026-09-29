import React from 'react';
import { CORE_SERVICES } from '../data/companyData';
import {
  Users,
  UserCheck,
  Compass,
  Briefcase,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onOpenRequirement: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenRequirement
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-6 h-6 text-sky-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-sky-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-sky-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-sky-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-sky-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-sky-400" />;
      default: return <Users className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Full-Spectrum Technology Delivery</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              IT Services &amp; Solutions
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              UpLiv LLC delivers agile IT staffing, specialized technical recruiting, strategic technology consulting, data and AI implementations, and turnkey project execution for U.S. enterprises.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {CORE_SERVICES.map((s, index) => (
            <div
              key={s.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 lg:p-10 hover:border-slate-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    {getIcon(s.iconName)}
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono">PRACTICE 0{index + 1}</span>
                    <h2 className="text-2xl font-bold text-white font-display mt-0.5">{s.title}</h2>
                  </div>
                  <p className="text-sky-300 text-xs font-medium">{s.tagline}</p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{s.fullDesc}</p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <button
                      onClick={() => onNavigate(s.id)}
                      className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer font-display flex items-center gap-1.5"
                    >
                      <span>Deep Dive Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenRequirement(s.title)}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      Request Support
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950/80 p-6 rounded-xl border border-slate-800/80">
                  <div>
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                      Core Offerings &amp; Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                        Engagement Models
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {s.engagementModels.map((m) => (
                          <span key={m} className="text-[11px] text-sky-300 bg-sky-950/50 border border-sky-800/60 px-2 py-0.5 rounded">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                        Key Technology Areas
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {s.technologies.map((t) => (
                          <span key={t} className="text-[11px] text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-900">
                      <span className="text-[11px] text-slate-400 block font-medium">Ideal For:</span>
                      <p className="text-xs text-slate-400 mt-0.5">{s.targetAudience}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 sm:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white font-display">
              Engagement Models At A Glance
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select the structure that aligns best with your delivery timelines, governance, and resource constraints.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Model</th>
                  <th className="py-3 px-4">Primary Benefit</th>
                  <th className="py-3 px-4">Billing Structure</th>
                  <th className="py-3 px-4">Ramp-Up SLA</th>
                  <th className="py-3 px-4">Governance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr>
                  <td className="py-3 px-4 font-bold text-white">Staff Augmentation</td>
                  <td className="py-3 px-4">Rapidly fill critical technical gaps</td>
                  <td className="py-3 px-4">Hourly / Weekly (W2 / C2C)</td>
                  <td className="py-3 px-4 text-emerald-400 font-medium">3 - 7 Business Days</td>
                  <td className="py-3 px-4">Client Managed Sprint</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-white">Technical Recruiting</td>
                  <td className="py-3 px-4">Permanent high-caliber technical hires</td>
                  <td className="py-3 px-4">Contingency / Retained Search</td>
                  <td className="py-3 px-4 text-emerald-400 font-medium">10 - 20 Business Days</td>
                  <td className="py-3 px-4">Client HR &amp; Hiring Team</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-white">Project-Based Delivery</td>
                  <td className="py-3 px-4">Guaranteed milestone deliverables</td>
                  <td className="py-3 px-4">Fixed-Fee / Milestone SOW</td>
                  <td className="py-3 px-4 text-emerald-400 font-medium">2 Weeks Initiation</td>
                  <td className="py-3 px-4">UpLiv Dedicated Delivery Pod</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-white">IT Consulting Retainer</td>
                  <td className="py-3 px-4">Executive technical advisory &amp; roadmapping</td>
                  <td className="py-3 px-4">Monthly Advisory Retainer</td>
                  <td className="py-3 px-4 text-emerald-400 font-medium">Immediate</td>
                  <td className="py-3 px-4">Joint Steering Committee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
