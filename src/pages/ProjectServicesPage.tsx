import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ProjectServicesPageProps {
  onOpenRequirement: (serviceName?: string) => void;
  onOpenExpert: () => void;
}

export const ProjectServicesPage: React.FC<ProjectServicesPageProps> = ({
  onOpenRequirement,
  onOpenExpert
}) => {
  const projectLifecycle = [
    { step: '01', title: 'Discover', desc: 'Scope definition, technical architecture review, stakeholder alignment, and risk evaluation.' },
    { step: '02', title: 'Plan', desc: 'Milestone roadmapping, backlog grooming, sprint cadence setup, and team composition.' },
    { step: '03', title: 'Build', desc: 'Iterative agile development with bi-weekly demo sprints, continuous code reviews, and CI/CD pipelines.' },
    { step: '04', title: 'Test', desc: 'Automated regression, security scanning, performance load testing, and User Acceptance Testing (UAT).' },
    { step: '05', title: 'Deploy', desc: 'Blue/green or canary production cutover, telemetry monitoring, and zero-downtime execution.' },
    { step: '06', title: 'Support', desc: 'Post-launch hypercare, knowledge transfer, SLA governance, and optional managed maintenance.' }
  ];

  const projectCapabilities = [
    { title: 'Custom Application Development', desc: 'Full-stack cloud-native software engineering built for performance, security, and enterprise scalability.' },
    { title: 'Application Modernization', desc: 'Migrating legacy monoliths into distributed microservices and containerized environments with zero business disruption.' },
    { title: 'Cloud & Infrastructure Migration', desc: 'Turnkey migration of data centers and legacy workloads to AWS, Microsoft Azure, or Google Cloud.' },
    { title: 'Enterprise Data Migration', desc: 'Complex relational and unstructured data cleansing, extraction, transformation, and schema migration.' },
    { title: 'System & API Integration', desc: 'Connecting disconnected enterprise applications via event brokers (Kafka) and API gateways (MuleSoft, Kong).' },
    { title: 'ERP & CRM Implementations', desc: 'Customization, workflow automation, and rollout management for Salesforce, SAP, and Workday.' },
    { title: 'Data Engineering Pipelines', desc: 'Building resilient modern data warehouses on Snowflake, Databricks, and BigQuery.' },
    { title: 'Automated QA & Continuous Testing', desc: 'Building comprehensive automated end-to-end testing suites to accelerate release velocity.' },
    { title: 'DevOps & GitOps Automation', desc: 'Infrastructure-as-Code (Terraform) and automated CI/CD deployment pipelines.' },
    { title: 'Enterprise Project Management', desc: 'PMP and Agile certified project directors ensuring budget, timeline, and scope governance.' }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Turnkey Enterprise Project Delivery</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Project-Based Technology Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              UpLiv executes defined enterprise technology initiatives through dedicated multidisciplinary delivery squads. We take ownership from initial discovery to production deployment and hypercare.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRequirement('Project-Based IT Services')}
                className="px-6 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-sky-500/10 cursor-pointer font-display"
              >
                Discuss Your Project Initiative
              </button>
              <button
                onClick={onOpenExpert}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm border border-slate-700 transition-colors cursor-pointer"
              >
                Request SOW Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
            Execution Rigor
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
            The 6-Phase Project Delivery Lifecycle
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Discover &rarr; Plan &rarr; Build &rarr; Test &rarr; Deploy &rarr; Support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectLifecycle.map((p) => (
            <div
              key={p.step}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl font-bold text-sky-400 font-mono mb-2">{p.step}</div>
              <h3 className="text-lg font-bold text-white font-display mb-2">{p.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            Turnkey Practices
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
            Scope &amp; Delivery Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectCapabilities.map((item) => (
            <div
              key={item.title}
              className="bg-slate-950 border border-slate-800/80 rounded-xl p-6 hover:border-sky-500/40 transition-colors"
            >
              <h3 className="text-base font-bold text-white font-display mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{item.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
