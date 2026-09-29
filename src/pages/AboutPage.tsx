import React from 'react';
import {
  Target,
  Eye,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenExpert: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenExpert
}) => {
  const values = [
    {
      title: 'Integrity',
      desc: 'Transparent pricing, honest technical assessments, and unwavering commitment to client confidentiality and data security.'
    },
    {
      title: 'Client Focus',
      desc: 'We structure engagements around the unique delivery constraints, timelines, and business models of our enterprise partners.'
    },
    {
      title: 'Accountability',
      desc: 'Taking end-to-end ownership of delivery milestones, candidate performance, and project quality assurance.'
    },
    {
      title: 'Collaboration',
      desc: 'Seamlessly embedding into client engineering workflows, acting as true technical partners rather than distant vendors.'
    },
    {
      title: 'Innovation',
      desc: 'Continually mastering emerging frameworks, cloud architectures, and responsible enterprise AI methodologies.'
    },
    {
      title: 'Professional Excellence',
      desc: 'Upholding strict peer-level technical screening standards to ensure only top-tier technologists represent UpLiv.'
    },
    {
      title: 'Continuous Improvement',
      desc: 'Systematically gathering sprint feedback and operational metrics to elevate talent retention and execution velocity.'
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>About UpLiv LLC · New York, USA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Strategic Technology Partner for U.S. Business
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              UpLiv LLC is a U.S.-based IT staffing, technical recruiting, consulting, and technology services company incorporated in New York, USA, serving organizations nationwide.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
              Corporate Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Who We Are
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                UpLiv LLC supports organizations across the United States with technology professionals, IT staffing, recruiting, consulting, implementation, project management, and professional IT services.
              </p>
              <p>
                Headquartered in New York, our practice bridges the gap between ambitious business goals and the specialized technology capabilities required to achieve them. We operate with an understanding of U.S. corporate governance, legal frameworks, and sprint-driven delivery models.
              </p>
              <p>
                Whether helping a regional financial institution modernize its core processing systems, supplying an industrial manufacturer with data engineering squads, or providing staff augmentation for high-growth tech firms, UpLiv delivers reliable, measurable impact.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">Our Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To empower organizations across the United States with the premier technology talent, architectural strategy, and project execution capabilities required to solve business-critical challenges and drive sustained enterprise value.
              </p>
            </div>

            
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To be the most trusted, agile, and results-driven technology partner for American businesses—recognized for uncompromising technical quality, human-centered recruitment, and flawless project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
              The UpLiv Advantage
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight font-display">
              Our Integrated Approach
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              We do not treat staffing and technology services in isolation. We fuse talent acquisition, strategic advisory, engineering depth, and operational delivery into one cohesive framework.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-950 border border-slate-800/80 p-6 rounded-2xl">
              <div className="text-sky-400 font-bold text-sm uppercase tracking-wider mb-2 font-display">
                01. Talent
              </div>
              <h4 className="text-lg font-bold text-white font-display mb-2">Elite Technologists</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rigorous 5-stage vetting ensures we provide senior architects, engineers, and specialists who integrate seamlessly into your engineering culture.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800/80 p-6 rounded-2xl">
              <div className="text-sky-400 font-bold text-sm uppercase tracking-wider mb-2 font-display">
                02. Technology
              </div>
              <h4 className="text-lg font-bold text-white font-display mb-2">Modern Stack Mastery</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hands-on capability across cloud-native architectures, scalable data warehouses, intelligent AI workflows, and distributed microservices.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800/80 p-6 rounded-2xl">
              <div className="text-sky-400 font-bold text-sm uppercase tracking-wider mb-2 font-display">
                03. Consulting
              </div>
              <h4 className="text-lg font-bold text-white font-display mb-2">Business Alignment</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Advisory rooted in practical ROI, helping leadership optimize technology investments, reduce technical debt, and accelerate time-to-market.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800/80 p-6 rounded-2xl">
              <div className="text-sky-400 font-bold text-sm uppercase tracking-wider mb-2 font-display">
                04. Delivery
              </div>
              <h4 className="text-lg font-bold text-white font-display mb-2">Turnkey Execution</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Predictable milestone management, transparent burndown reporting, and production cutover support with continuous hypercare.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight font-display">
            Our Core Corporate Values
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            These shared commitments guide every client interaction, candidate evaluation, and project delivery milestone at UpLiv LLC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <h3 className="text-base font-bold text-white font-display">{v.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Incorporated in New York, USA</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Nationwide U.S. Service Infrastructure
              </h3>
              <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">
                Operating under standard U.S. commercial statutes, UpLiv LLC offers clients complete peace of mind with respect to intellectual property rights, background screening standards, and domestic contract enforceability.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('us-presence')}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-xl transition-colors cursor-pointer"
              >
                Inspect Regional Hubs
              </button>
              <button
                onClick={onOpenExpert}
                className="px-5 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer font-display"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
