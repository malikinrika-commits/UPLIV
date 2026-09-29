import React, { useState } from 'react';
import { INDUSTRIES } from '../data/companyData';
import {
  Car,
  Factory,
  Pill,
  HeartPulse,
  Landmark,
  ShieldAlert,
  Building2,
  ShoppingCart,
  Truck,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface IndustriesPageProps {
  onOpenRequirement: (serviceName?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onOpenRequirement
}) => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>(INDUSTRIES[0].id);

  const getIndustryIcon = (name: string) => {
    switch (name) {
      case 'Car': return <Car className="w-5 h-5 text-sky-400" />;
      case 'Factory': return <Factory className="w-5 h-5 text-sky-400" />;
      case 'Pill': return <Pill className="w-5 h-5 text-sky-400" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-sky-400" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-sky-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-sky-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-sky-400" />;
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5 text-sky-400" />;
      case 'Truck': return <Truck className="w-5 h-5 text-sky-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-sky-400" />;
      default: return <Building2 className="w-5 h-5 text-sky-400" />;
    }
  };

  const activeIndustry = INDUSTRIES.find((i) => i.id === activeIndustryId) || INDUSTRIES[0];

  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Industry-Specific Engineering &amp; Staffing</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Technology Solutions Tailored to Industry Demands
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every vertical operates under distinct regulatory mandates, architectural requirements, and legacy dependencies. UpLiv delivers domain-informed IT consulting and technical staffing aligned with your sector.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 space-y-2 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-2 block">
              Select Enterprise Sector
            </span>
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeIndustryId === ind.id
                    ? 'bg-sky-500/10 border border-sky-500/30 text-white font-semibold'
                    : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="shrink-0">{getIndustryIcon(ind.iconName)}</div>
                <div className="text-xs truncate">{ind.name}</div>
              </button>
            ))}
          </div>

          
          <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
                  {getIndustryIcon(activeIndustry.iconName)}
                  <span>Practice Spotlight</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {activeIndustry.name}
                </h2>
                <p className="text-xs sm:text-sm text-sky-300 mt-1 font-medium">{activeIndustry.tagline}</p>
              </div>

              <button
                onClick={() => onOpenRequirement(`Staffing/Consulting for ${activeIndustry.name}`)}
                className="px-5 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer shrink-0 font-display"
              >
                Request Domain Talent
              </button>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeIndustry.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-xl">
                <h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-3">
                  Critical Industry Challenges
                </h4>
                <ul className="space-y-2">
                  {activeIndustry.challenges.map((c) => (
                    <li key={c} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-rose-400 mt-0.5">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-xl">
                <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                  UpLiv Tailored Solutions
                </h4>
                <ul className="space-y-2">
                  {activeIndustry.solutions.map((s) => (
                    <li key={s} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-6">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Key Technology Stacks Deployed in {activeIndustry.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {activeIndustry.keyTechnologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-slate-300 bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
