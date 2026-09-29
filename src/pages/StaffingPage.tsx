import React from 'react';
import {
  Users,
  Code,
  Cloud,
  Database,
  BrainCircuit,
  Lock,
  Server,
  Layers,
  FileCheck
} from 'lucide-react';

interface StaffingPageProps {
  onOpenRequirement: (serviceName?: string) => void;
  onOpenExpert: () => void;
}

export const StaffingPage: React.FC<StaffingPageProps> = ({
  onOpenRequirement,
  onOpenExpert
}) => {
  const models = [
    {
      title: 'Contract Staffing (W2 / C2C)',
      desc: 'Deploy pre-vetted senior technologists for critical project sprints, peak capacity surges, or specialized technical gaps without long-term commitments.'
    },
    {
      title: 'Contract-to-Hire',
      desc: 'Evaluate an engineer\'s technical performance, architectural depth, and cultural alignment within your team before extending a permanent employment offer.'
    },
    {
      title: 'Direct Hire Placement',
      desc: 'Partner with our technical recruiters to identify and secure principal engineers, tech leads, and executive technology leaders for permanent tenure.'
    },
    {
      title: 'Dedicated Team Augmentation (Pods)',
      desc: 'Ramp up a cohesive multidisciplinary engineering pod (e.g. Lead Architect, 3 Full-Stack Engineers, QA Lead) synchronized with your agile cadence.'
    }
  ];

  const techAreas = [
    { name: 'Software Engineering', desc: 'React, Next.js, TypeScript, Java (Spring), Python, Node.js, Go', icon: <Code className="w-5 h-5 text-sky-400" /> },
    { name: 'Cloud & DevOps', desc: 'AWS, Azure, GCP, Terraform, Kubernetes, CI/CD automation', icon: <Cloud className="w-5 h-5 text-sky-400" /> },
    { name: 'Data Engineering & Lakes', desc: 'Snowflake, Databricks, BigQuery, dbt, Apache Airflow, Kafka', icon: <Database className="w-5 h-5 text-sky-400" /> },
    { name: 'Artificial Intelligence & ML', desc: 'Predictive modeling, PyTorch, Generative AI integration, MLOps', icon: <BrainCircuit className="w-5 h-5 text-sky-400" /> },
    { name: 'Cybersecurity & IAM', desc: 'Security engineering, SOC2 readiness, IAM, zero-trust architecture', icon: <Lock className="w-5 h-5 text-sky-400" /> },
    { name: 'Infrastructure & Systems', desc: 'Linux administration, hybrid cloud networking, virtualization', icon: <Server className="w-5 h-5 text-sky-400" /> },
    { name: 'QA & Automated Testing', desc: 'Selenium, Cypress, Playwright, performance & load testing', icon: <FileCheck className="w-5 h-5 text-sky-400" /> },
    { name: 'ERP & CRM Applications', desc: 'Salesforce Core/CPQ, SAP S/4HANA, Workday, MuleSoft integrations', icon: <Layers className="w-5 h-5 text-sky-400" /> },
    { name: 'Project & Product Management', desc: 'Technical Project Managers, Certified Scrum Masters (CSM), Agile Coaches', icon: <Users className="w-5 h-5 text-sky-400" /> }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Dedicated Technology Talent Delivery</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              IT Staff Augmentation for Modern Businesses
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Scale your engineering and product organizations with elite, pre-screened technology professionals. Vetted through rigorous peer technical evaluations and aligned with U.S. time zones.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRequirement('IT Staff Augmentation')}
                className="px-6 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-sky-500/10 cursor-pointer font-display"
              >
                Request IT Staffing Support
              </button>
              <button
                onClick={onOpenExpert}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm border border-slate-700 transition-colors cursor-pointer"
              >
                Consult a Staffing Specialist
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            Flexible Hiring Models
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
            Tailored Staff Augmentation Structures
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-1">
            Choose from multiple contractual frameworks designed to suit your project scope, budget, and long-term talent strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((m) => (
            <div
              key={m.title}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-lg font-bold text-white font-display mb-2">{m.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{m.desc}</p>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-sky-400 font-medium">
                <span>Immediate nationwide availability</span>
                <span className="text-slate-400 font-mono">W2 / C2C Ready</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            Domain Specializations
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
            Technology Areas We Cover
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-1">
            From modern frontend frameworks to mission-critical mainframe and cloud migrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techAreas.map((area) => (
            <div
              key={area.name}
              className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 hover:border-sky-500/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center mb-3">
                {area.icon}
              </div>
              <h4 className="text-base font-bold text-white font-display mb-1">{area.name}</h4>
              <p className="text-xs text-slate-400">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
              Rigorous Quality Assurance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Our 5-Stage Technical Vetting Protocol
            </h2>
            <p className="text-slate-400 text-sm">
              We eliminate hiring friction by ensuring every candidate submitted has already passed rigorous peer evaluations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Resume & Credential Audit', desc: 'Verification of past project deliverables, employment history, and education.' },
              { num: '02', title: 'Technical Screen', desc: 'Direct live coding and architectural assessment with senior practice engineers.' },
              { num: '03', title: 'System Design Deep Dive', desc: 'Evaluation of scalability principles, distributed patterns, and clean code.' },
              { num: '04', title: 'Behavioral & Culture Fit', desc: 'Communication clarity, agile collaboration, and leadership readiness.' },
              { num: '05', title: 'Background & References', desc: 'Comprehensive U.S. background check and supervisor reference verification.' }
            ].map((v) => (
              <div key={v.num} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-sky-400 font-bold font-mono text-sm block mb-1">{v.num}</span>
                <h4 className="text-sm font-semibold text-white font-display mb-1">{v.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onOpenRequirement('IT Staff Augmentation')}
              className="px-8 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-sm transition-colors cursor-pointer font-display"
            >
              Request IT Staffing Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
