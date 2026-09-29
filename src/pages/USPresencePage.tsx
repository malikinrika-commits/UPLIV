import React from 'react';
import { USMapInteractive } from '../components/USMapInteractive';
import { ShieldCheck, Building, Clock } from 'lucide-react';
import { U_S_PRESENCE_HUBS } from '../data/companyData';

export const USPresencePage: React.FC = () => {
  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Incorporated in New York, USA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Nationwide U.S. Presence &amp; Infrastructure
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              UpLiv LLC is a U.S. technology services and staffing company serving organizations across all 50 states. We operate with complete commercial and statutory compliance under U.S. law.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <USMapInteractive />
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">New York Corporate Base</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Our primary executive, legal, compliance, and accounts management operations are centered in New York, USA.
            </p>
            <div className="text-xs text-sky-400 font-mono">Incorporated in New York, USA</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">Time Zone Synchronized</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Engineers and consultants collaborate within your operating hours across Eastern (EST), Central (CST), Mountain (MST), and Pacific (PST).
            </p>
            <div className="text-xs text-emerald-400 font-mono">Zero Communication Lag</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">Strict Legal &amp; W2 / C2C</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Full adherence to U.S. Department of Labor guidelines, employment eligibility verification, background checks, and IP assignment clauses.
            </p>
            <div className="text-xs text-purple-400 font-mono">100% Client-Owned IP</div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white font-display mb-6">
            Key Regional Delivery Corridors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {U_S_PRESENCE_HUBS.map((hub) => (
              <div key={hub.city} className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-white">{hub.city}</span>
                  {hub.isHQ && <span className="text-[10px] text-amber-300 font-bold">HQ</span>}
                </div>
                <p className="text-xs text-sky-400 font-medium">{hub.role}</p>
                <p className="text-[11px] text-slate-500 mt-2">Serving: {hub.state} &amp; surrounding areas</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
