import React from 'react';
export const TeamPage: React.FC = () => {
  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Executive &amp; Technical Governance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Our Leadership
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              UpLiv LLC is steered by seasoned enterprise technology leaders and staffing executives based in New York, dedicated to quality, technical rigor, and client partnership across the United States.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
            Executive Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
            Executive Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              role: 'Executive Leadership',
              focus: 'Corporate Strategy, Enterprise Governance & Client Alliances',
              placeholder: '[Add team member photo: Executive Leadership]'
            },
            {
              role: 'Practice Leadership — Technology Services',
              focus: 'Cloud Architecture, Software Delivery & Data Practices',
              placeholder: '[Add team member photo: Leadership Team]'
            },
            {
              role: 'Practice Leadership — IT Staffing & Recruiting',
              focus: 'Talent Acquisition, Vetting Protocols & Talent Community',
              placeholder: '[Add team member photo: Leadership Team]'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-full aspect-[4/3] rounded-xl border border-dashed border-slate-700 bg-slate-950 flex items-center justify-center p-4 text-center text-xs text-slate-400 mb-6">
                  {item.placeholder}
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-1">{item.role}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.focus}</p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-800/80 text-[11px] text-slate-500">
                UpLiv LLC · New York, USA
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white font-display mb-3">
              Technical Practice Directors
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Our technical practice leads oversee peer vetting, code evaluations, architectural feasibility, and engineering deliverables across cloud, data, and software engineering pods.
            </p>
            <div className="space-y-3">
              {[
                { practice: 'Cloud & Distributed Systems Practice', lead: '[Add team member photo: Technical Leadership]' },
                { practice: 'Data Engineering & Enterprise AI Practice', lead: '[Add team member photo: Technical Leadership]' }
              ].map((p, i) => (
                <div key={i} className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">{p.practice}</span>
                  <span className="text-[11px] text-slate-500 font-mono">{p.lead}</span>
                </div>
              ))}
            </div>
          </div>

          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white font-display mb-3">
              Strategic Advisory Council
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              A consultative board providing domain insights across healthcare, automotive, financial services, and legal compliance to ensure our staffing and consulting solutions align with regulatory changes.
            </p>
            <div className="p-6 border border-dashed border-slate-800 bg-slate-950 rounded-xl text-center text-xs text-slate-400">
              [Add team member photo: Advisory Board]
              <p className="text-[11px] text-slate-500 mt-2">
                Advisory council bios and sector profiles updated on corporate registry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
