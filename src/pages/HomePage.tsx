import React, { useState } from 'react';
import {
  ArrowRight,
  Shield,
  Users,
  Code2,
  Cpu,
  Layers,
  Compass,
  Briefcase,
  UserCheck,
  CheckCircle2,
  TrendingUp,
  Award,
  Shuffle,
  Maximize2,
  Car,
  Factory,
  Pill,
  HeartPulse,
  Landmark,
  ShieldAlert,
  Building2,
  Calculator
} from 'lucide-react';
import { TechnologyNetworkCanvas } from '../components/TechnologyNetworkCanvas';
import { USMapInteractive } from '../components/USMapInteractive';
import {
  CORE_SERVICES,
  WHY_UPLIV,
  PROCESS_STEPS,
  INDUSTRIES,
  TECHNOLOGY_CAPABILITIES
} from '../data/companyData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenRequirement: (serviceName?: string) => void;
  onOpenExpert: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenRequirement,
  onOpenExpert
}) => {
  const [calcModel, setCalcModel] = useState<'staffing' | 'project' | 'consulting'>('staffing');
  const [calcRoleCount, setCalcRoleCount] = useState<number>(3);
  const [calcDuration, setCalcDuration] = useState<string>('6 months');
  const [calcDomain, setCalcDomain] = useState<string>('Full-Stack Software Engineering');

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-5 h-5 text-sky-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-sky-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-sky-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-sky-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-sky-400" />;
      default: return <Code2 className="w-5 h-5 text-sky-400" />;
    }
  };

  const getWhyIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <Shield className="w-5 h-5 text-sky-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'Shuffle': return <Shuffle className="w-5 h-5 text-sky-400" />;
      case 'Award': return <Award className="w-5 h-5 text-sky-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-sky-400" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5 text-sky-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-sky-400" />;
    }
  };

  const getIndustryIcon = (name: string) => {
    switch (name) {
      case 'Car': return <Car className="w-5 h-5 text-sky-400" />;
      case 'Factory': return <Factory className="w-5 h-5 text-sky-400" />;
      case 'Pill': return <Pill className="w-5 h-5 text-sky-400" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-sky-400" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-sky-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-sky-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-sky-400" />;
      default: return <Briefcase className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div className="space-y-24 lg:space-y-32">
      
      <section className="relative pt-8 lg:pt-14 pb-12 overflow-hidden bg-[#E3F2FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>U.S.-Based IT Services &amp; Staffing · New York, USA</span>
              </div>

              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
                Technology Talent.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-sky-800">
                  Strategic Expertise.
                </span>{' '}
                Business Results.
              </h1>

              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                UpLiv LLC helps organizations across the United States solve technology challenges through IT staffing, technical recruiting, consulting, data and AI services, and project-based technology solutions.
              </p>

              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenExpert}
                  className="px-6 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-sky-500/10 flex items-center gap-2 cursor-pointer font-display"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                >
                  Explore Our Services
                </button>
              </div>

              
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs text-slate-400">
                <div>
                  <div className="text-lg font-bold text-white font-display">50 States</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Nationwide U.S. Reach</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white font-display">5-Stage</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Technical Vetting</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white font-display">100% U.S.</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Entity &amp; Governance</div>
                </div>
              </div>
            </div>

            
            <div className="lg:col-span-6">
              <TechnologyNetworkCanvas />
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                Who We Are &amp; How We Deliver
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
                Technology Expertise Built Around Your Business
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                UpLiv LLC combines technology professionals, recruiting expertise, consulting capabilities, and project delivery to help U.S. organizations address their critical technology initiatives.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                We operate across the complete technology lifecycle—from placing high-impact software engineers and enterprise architects to modernizing legacy infrastructure, building resilient data platforms, and implementing artificial intelligence solutions.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group cursor-pointer"
                >
                  <span>Learn About UpLiv</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { title: 'IT Staffing', desc: 'On-demand technical talent' },
                { title: 'Technical Recruiting', desc: 'Vetted direct-hire placements' },
                { title: 'IT Consulting', desc: 'Architecture & modernization' },
                { title: 'Project Services', desc: 'Milestone-based delivery' },
                { title: 'Data & AI', desc: 'Pipelines & machine learning' },
                { title: 'Tech Implementation', desc: 'Enterprise rollout & integration' }
              ].map((pillar) => (
                <div key={pillar.title} className="p-4 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                  <h4 className="text-sm font-semibold text-white font-display">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
            End-to-End Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            Comprehensive IT &amp; Technology Services
          </h2>
          <p className="text-slate-400 text-base">
            From targeted technical talent augmentation to full-scope technology consulting and turnkey project delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-5 group-hover:border-sky-500/50 group-hover:bg-sky-500/10 transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight font-display group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="mt-5 space-y-2 border-t border-slate-800/60 pt-4">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(service.id)}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenRequirement(service.title)}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Request Talent &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
              Differentiating Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
              Why Organizations Work With UpLiv
            </h2>
            <p className="text-slate-400 text-base">
              A trusted U.S. technology services partner committed to technical rigor, flexible collaboration models, and transparent execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_UPLIV.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-950/40 border border-sky-800/40 flex items-center justify-center mb-4">
                  {getWhyIcon(benefit.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
              Enterprise Technology Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
              Technology Capabilities
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              UpLiv engineers and consultants deliver expertise across modern cloud ecosystems, data platforms, distributed systems, and intelligent automation.
            </p>
          </div>

          <button
            onClick={() => onNavigate('technology')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>View Full Capability Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGY_CAPABILITIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-base font-bold text-white font-display mb-1 flex items-center gap-2">
                <span>{cat.name}</span>
              </h3>
              <p className="text-xs text-slate-400 mb-4">{cat.description}</p>

              <div className="space-y-2">
                {cat.skills.slice(0, 3).map((skill) => (
                  <div key={skill.name} className="bg-slate-950/70 border border-slate-800/70 p-2.5 rounded-lg text-xs">
                    <div className="flex justify-between items-center text-slate-200 font-medium">
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-sky-400 font-mono">{skill.level}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {skill.tags.map((t) => (
                        <span key={t} className="text-[10px] text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <USMapInteractive />
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
            Vertical Depth
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            Technology Expertise Across Industries
          </h2>
          <p className="text-slate-400 text-base">
            Domain-informed technology staffing and engineering solutions adapted to your regulatory and operational realities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.slice(0, 6).map((ind) => (
            <div
              key={ind.id}
              className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-800/60 flex items-center justify-center mb-4">
                {getIndustryIcon(ind.iconName)}
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-1">{ind.name}</h3>
              <p className="text-xs text-sky-400/90 font-medium mb-3">{ind.tagline}</p>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{ind.description}</p>

              <div className="border-t border-slate-800/80 pt-3">
                <span className="text-[11px] font-medium text-slate-400 block mb-1.5">Common Challenges Solved:</span>
                <ul className="space-y-1">
                  {ind.challenges.slice(0, 2).map((ch) => (
                    <li key={ch} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                      <span className="text-sky-400 mt-0.5">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate('industries')}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-sky-400 font-semibold text-xs rounded-xl border border-slate-800 transition-colors cursor-pointer"
          >
            Explore All 10+ Enterprise Industries &rarr;
          </button>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-900/60 to-slate-950 border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
              Proven Delivery Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
              Our 4-Step Collaborative Process
            </h2>
            <p className="text-slate-400 text-base">
              A structured lifecycle designed to eliminate technical risk, ensure rapid ramp-up, and maintain ongoing accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between relative group hover:border-sky-500/50 transition-colors"
              >
                <div>
                  <div className="text-3xl font-extrabold text-sky-400/80 font-display mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-1">{step.title}</h3>
                  <p className="text-xs text-sky-300 font-medium mb-3">{step.tagline}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{step.description}</p>
                </div>

                <div className="border-t border-slate-800/80 pt-3 space-y-1">
                  {step.details.map((d) => (
                    <div key={d} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                Client-First Governance
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
                Built Around Client Needs
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                UpLiv focuses on understanding client requirements, maintaining transparent communication, and delivering technology professionals and services aligned with concrete project milestones.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Strict SLA Commitments:</strong> Guaranteed turnaround times for talent submissions and sprint deliverables.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Direct Executive Access:</strong> Regular governance check-ins with senior practice directors in New York.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Risk-Free Evaluation Period:</strong> Initial 2-week talent integration period with guaranteed replacement warranty.
                  </p>
                </div>
              </div>
            </div>

            
            <div className="lg:col-span-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800">
                  U.S. Client Segments Supported
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    '[Add client logo: Fortune 500 Financial Corp]',
                    '[Add client logo: Midwest Industrial OEM]',
                    '[Add client logo: National Healthcare System]',
                    '[Add client logo: East Coast SaaS Platform]'
                  ].map((placeholder, idx) => (
                    <div
                      key={idx}
                      className="border border-dashed border-slate-800 bg-slate-900/50 p-4 rounded-lg flex items-center justify-center text-center text-xs text-slate-400 hover:text-slate-300 transition-colors"
                    >
                      {placeholder}
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 mt-4 text-center">
                  Client identities protected under standard enterprise non-disclosure agreements (NDAs).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Engagement Model &amp; Team Estimator
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Plan your technical resource requirements and receive a customized deployment proposal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
            
            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                1. Select Engagement Model
              </label>
              {[
                { id: 'staffing', name: 'IT Staff Augmentation', desc: 'Vetted contractors embedded in your team' },
                { id: 'project', name: 'Project-Based IT Services', desc: 'Turnkey milestone delivery by an UpLiv squad' },
                { id: 'consulting', name: 'IT Strategy & Consulting', desc: 'Architecture review & modernization roadmap' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setCalcModel(m.id as any)}
                  className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    calcModel === m.id
                      ? 'border-sky-500 bg-sky-950/30 text-white'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-semibold text-sm">{m.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{m.desc}</div>
                </button>
              ))}
            </div>

            
            <div className="space-y-4">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                2. Scope &amp; Technology Domain
              </label>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Primary Domain</label>
                <select
                  value={calcDomain}
                  onChange={(e) => setCalcDomain(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                >
                  <option value="Full-Stack Software Engineering">Full-Stack Software Engineering</option>
                  <option value="Cloud Architecture & DevOps">Cloud Architecture &amp; DevOps</option>
                  <option value="Data Engineering & Analytics">Data Engineering &amp; Analytics</option>
                  <option value="Artificial Intelligence / ML">Artificial Intelligence / ML</option>
                  <option value="Enterprise ERP / CRM Modernization">Enterprise ERP / CRM Modernization</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Engineers / Consultants Required:</span>
                  <span className="font-bold text-white">{calcRoleCount} Professional{calcRoleCount > 1 ? 's' : ''}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={calcRoleCount}
                  onChange={(e) => setCalcRoleCount(parseInt(e.target.value))}
                  className="w-full accent-sky-400 bg-slate-950 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Expected Duration</label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['3 months', '6 months', '12+ months'].map((dur) => (
                    <button
                      key={dur}
                      onClick={() => setCalcDuration(dur)}
                      className={`py-1.5 px-2 rounded-lg border text-center transition-colors ${
                        calcDuration === dur
                          ? 'border-sky-500 bg-sky-950/40 text-sky-200'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {dur}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <span className="text-xs text-sky-400 font-semibold uppercase tracking-wider block mb-2">
                  UpLiv Tailored Profile
                </span>
                <h4 className="text-base font-bold text-white font-display">
                  {calcModel === 'staffing' ? 'Augmented Pod' : calcModel === 'project' ? 'Turnkey Squad' : 'Advisory Retainer'}
                </h4>

                <div className="mt-4 space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span className="text-slate-400">Team Size:</span>
                    <span className="font-bold text-white">{calcRoleCount} Senior Specialist(s)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span className="text-slate-400">Domain Focus:</span>
                    <span className="font-medium text-sky-300 text-right">{calcDomain}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span className="text-slate-400">Onboarding SLA:</span>
                    <span className="font-semibold text-emerald-400">5 - 10 Business Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Time-Zone:</span>
                    <span className="font-medium text-white">EST / CST / PST Synchronized</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-900">
                <button
                  onClick={() => onOpenRequirement(`Custom Estimation: ${calcRoleCount} roles in ${calcDomain} (${calcDuration})`)}
                  className="w-full py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer font-display"
                >
                  Request Detailed Rate Card &amp; Resumes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-950/60 via-slate-900 to-slate-950 border border-sky-900/40 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest block">
              UpLiv LLC · New York, USA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Let's Build Your Next Technology Solution
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you need technology professionals, specialized recruiting, consulting expertise, or project-based IT services, UpLiv LLC can help you build the right approach for your organization.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenExpert}
                className="px-8 py-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2 cursor-pointer font-display"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={() => onOpenRequirement()}
                className="px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm border border-slate-700 transition-colors cursor-pointer"
              >
                Submit Your Requirement
              </button>
            </div>
          </div>

          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>
    </div>
  );
};
