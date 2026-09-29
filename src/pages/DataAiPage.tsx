import React from 'react';
import {
  Database,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Workflow
} from 'lucide-react';

interface DataAiPageProps {
  onOpenRequirement: (serviceName?: string) => void;
  onOpenExpert: () => void;
}

export const DataAiPage: React.FC<DataAiPageProps> = ({
  onOpenRequirement,
  onOpenExpert
}) => {
  return (
    <div className="space-y-20 lg:space-y-28 py-6">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Modern Data Architecture &amp; Enterprise AI</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Data &amp; AI Services for the Next Generation of Business
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Transform fragmented enterprise data into scalable intelligence assets. UpLiv engineers high-throughput data pipelines, cloud warehouses, executive analytics, and pragmatic AI applications.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRequirement('Data & AI Services')}
                className="px-6 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-sky-500/10 cursor-pointer font-display"
              >
                Discuss Data &amp; AI Initiatives
              </button>
              <button
                onClick={onOpenExpert}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm border border-slate-700 transition-colors cursor-pointer"
              >
                Talk to a Data Architect
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display mb-3">Data Engineering</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building reliable, automated data ingestion and transformation backbones that feed downstream analytics and machine learning systems.
            </p>
            <ul className="space-y-2.5 border-t border-slate-800/80 pt-5">
              {[
                'Batch & Streaming Data Pipelines (Apache Spark, Kafka, Flink)',
                'Cloud Data Warehousing (Snowflake, Databricks, BigQuery, Redshift)',
                'Modular Data Modeling & Transformation (dbt, SQL)',
                'Workflow Orchestration (Apache Airflow, Prefect)',
                'Automated Data Quality & Schema Governance'
              ].map((item) => (
                <li key={item} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display mb-3">Analytics &amp; Business Intelligence</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering decision-makers with intuitive, real-time dashboards, KPI tracking, and diagnostic telemetry from unified data sources.
            </p>
            <ul className="space-y-2.5 border-t border-slate-800/80 pt-5">
              {[
                'Executive & Operational Dashboards (Power BI, Tableau, Looker)',
                'Self-Service Analytics Platforms for Business Teams',
                'Semantic Layer Modeling & Single-Source-of-Truth Architecture',
                'Automated Financial & Supply Chain Telemetry Reporting',
                'Historical Trend & Variance Analysis'
              ].map((item) => (
                <li key={item} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display mb-3">Artificial Intelligence</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Deploying pragmatic machine learning models, intelligent workflow automation, and enterprise Retrieval-Augmented Generation (RAG) systems.
            </p>
            <ul className="space-y-2.5 border-t border-slate-800/80 pt-5">
              {[
                'Predictive Modeling & Statistical Forecasting Systems',
                'Enterprise RAG & Private Knowledge Search Integration',
                'Document Intelligence & Automated Data Extraction',
                'Natural Language Processing (NLP) & Sentiment Classification',
                'Production MLOps Pipelines & Model Monitoring'
              ].map((item) => (
                <li key={item} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
              <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display mb-3">Practical AI Implementation</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              We help organizations avoid exaggerated AI hype, focusing strictly on high-feasibility, high-ROI use cases grounded in verified corporate data.
            </p>
            <ul className="space-y-2.5 border-t border-slate-800/80 pt-5">
              {[
                'AI Opportunity & Technical Feasibility Assessment',
                'Data Readiness & Security Governance Safeguards',
                'Rapid 4-Week Proof-of-Concept (POC) Deployment',
                'Integration with Existing ERP/CRM Corporate Systems',
                'Hallucination Mitigation & Human-in-the-Loop Safeguards'
              ].map((item) => (
                <li key={item} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
