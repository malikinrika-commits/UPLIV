import React from 'react';
interface RecruitingPageProps {
  onOpenRequirement: (serviceName?: string) => void;
  onOpenExpert: () => void;
}

export const RecruitingPage: React.FC<RecruitingPageProps> = ({
  onOpenRequirement,
  onOpenExpert
}) => {
  const recruitmentWorkflow = [
    {
      step: '01',
      title: 'Requirement & Architecture Analysis',
      desc: 'We meet with your engineering leaders to map technical constraints, coding standards, team culture, and business deliverables.'
    },
    {
      step: '02',
      title: 'Targeted Passive Sourcing',
      desc: 'We tap into our proprietary nationwide U.S. network of active and passive technology professionals, avoiding generic job boards.'
    },
    {
      step: '03',
      title: 'Peer-Level Technical Screening',
      desc: 'Candidates undergo live technical evaluations administered by practicing senior engineers to verify claimed competencies.'
    },
    {
      step: '04',
      title: 'Candidate Presentation & Dossier',
      desc: 'You receive short-listed candidate dossiers complete with technical interview feedback, coding sample evaluations, and verified references.'
    },
    {
      step: '05',
      title: 'Interview Coordination & Logistics',
      desc: 'We manage schedule coordination, feedback loops, and interview alignment to minimize friction for your internal team.'
    },
    {
      step: '06',
      title: 'Offer Negotiation & Onboarding',
      desc: 'We assist with offer structuring, compensation benchmarking, background checks, and seamless transition into your organization.'
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Full-Lifecycle Technical Placement</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Technical Recruiting That Connects Businesses With Technology Talent
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Find and hire verified software architects, engineering managers, data leaders, and specialized technology practitioners across the United States.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRequirement('IT Recruiting')}
                className="px-6 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-sky-500/10 cursor-pointer font-display"
              >
                Start a Search Engagement
              </button>
              <button
                onClick={onOpenExpert}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm border border-slate-700 transition-colors cursor-pointer"
              >
                Discuss Hiring Needs
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
            End-to-End Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
            The UpLiv Technical Recruitment Lifecycle
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured for speed, precision, and cultural alignment without burdening your internal team with irrelevant resumes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recruitmentWorkflow.map((item) => (
            <div
              key={item.step}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl font-bold text-sky-400 font-mono mb-2">{item.step}</div>
              <h3 className="text-base font-bold text-white font-display mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
              Flexible Engagement Structures
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Recruitment Models Designed for Your Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl">
              <h3 className="text-base font-bold text-white font-display mb-2">Contingent Search</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Risk-free recruitment where you only pay upon successful hire. Ideal for scaling engineering teams with specialized developers.
              </p>
              <div className="text-xs text-sky-400 font-medium">No upfront retainer fee</div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl">
              <h3 className="text-base font-bold text-white font-display mb-2">Retained Executive Search</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Dedicated search team focused exclusively on confidential or critical leadership placements (VP of Engineering, CTO, Chief Data Officer).
              </p>
              <div className="text-xs text-sky-400 font-medium">Guaranteed placement window</div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl">
              <h3 className="text-base font-bold text-white font-display mb-2">Recruitment Process Outsourcing (RPO)</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Dedicated UpLiv recruiters embedded in your talent acquisition team to handle high-volume technical hiring sprints.
              </p>
              <div className="text-xs text-sky-400 font-medium">Predictable monthly cost model</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
