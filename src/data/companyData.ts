export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tagline: string;
  iconName: string;
  features: string[];
  engagementModels: string[];
  technologies: string[];
  targetAudience: string;
}

export interface TechnologyCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: { name: string; level: 'Primary' | 'Advanced' | 'Enterprise'; tags: string[] }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  challenges: string[];
  solutions: string[];
  keyTechnologies: string[];
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract (C2C / W2)' | 'Contract-to-Hire' | 'Contract (W2 / C2C)';
  experience: string;
  description: string;
  keySkills: string[];
  postedDate: string;
}

export type CareerOpening = JobPosting;

export const COMPANY_INFO = {
  name: 'UpLiv LLC',
  legalName: 'UpLiv LLC',
  domain: 'https://up-liv.com/',
  tagline: 'Technology Talent. Strategic Expertise. Business Results.',
  incorporation: 'Incorporated in New York, USA',
  headquarters: 'New York, USA',
  presenceDescription: 'Nationwide U.S. service capability supporting enterprises, mid-market businesses, and federal/state initiatives across all 50 states.',
  email: 'contact@up-liv.com',
  phone: '+1 (800) 555-UPLIV',
  businessHours: 'Monday - Friday: 8:00 AM - 7:00 PM EST',
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'it-staffing',
    title: 'IT Staff Augmentation',
    tagline: 'Precision technology talent deployed on demand to scale your engineering teams.',
    shortDesc: 'Provide skilled technology professionals to support short-term, long-term, or specialized staffing requirements.',
    fullDesc: 'UpLiv LLC provides vetted, senior-level technology talent to bridge critical skill gaps, accelerate delivery timelines, and scale enterprise teams. Whether you require niche architects, seasoned full-stack engineers, or entire scrum teams, our rapid talent onboarding model ensures seamless technical and cultural alignment.',
    iconName: 'Users',
    features: [
      'Contract Staffing (W2 & C2C)',
      'Contract-to-Hire Flexibility',
      'Direct Hire Technical Placement',
      'Dedicated Agile Pods & Team Augmentation',
      'Rigorous 5-Stage Technical Vetting',
      'Time-zone Aligned U.S. Delivery'
    ],
    engagementModels: ['Staff Augmentation', 'Contract-to-Hire', 'Direct Placement', 'Dedicated Team'],
    technologies: ['React/Next.js', 'Java/Spring Boot', 'Python/Django', 'Node.js', 'AWS/Azure/GCP', 'DevOps & Kubernetes'],
    targetAudience: 'Enterprises & growth businesses experiencing technical bandwidth constraints or specialized skill shortages.'
  },
  {
    id: 'it-recruiting',
    title: 'IT Recruiting',
    tagline: 'Technical recruiting that connects businesses with exceptional technology talent.',
    shortDesc: 'Identify and recruit qualified technology professionals aligned with technical requirements, organizational needs, and business goals.',
    fullDesc: 'Our technical recruiting practice is led by recruiters with hands-on technology backgrounds. We evaluate candidates not just on resume keywords, but on architectural depth, problem-solving agility, system design competence, and organizational leadership fit.',
    iconName: 'UserCheck',
    features: [
      'In-Depth Requirement & Architectural Analysis',
      'Proactive Passive Candidate Sourcing Across the U.S.',
      'Rigorous Peer-Level Technical Screening',
      'Candidate Qualification & Background Verification',
      'End-to-End Interview Coordination & Feedback Loops',
      'Offer Negotiation & Onboarding Transition Support'
    ],
    engagementModels: ['Contingency Search', 'Retained Executive Search', 'Recruitment Process Outsourcing (RPO)'],
    technologies: ['Enterprise Architects', 'Engineering Managers', 'Principal Engineers', 'Data Engineers', 'Cloud Specialists'],
    targetAudience: 'Hiring managers, CTOs, and HR leaders looking for high-caliber, thoroughly pre-screened technical hires.'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    tagline: 'Technology consulting aligned with high-impact business objectives.',
    shortDesc: 'Provide technology consulting to help organizations evaluate, plan, modernize, and implement technology solutions.',
    fullDesc: 'UpLiv LLC partners with executive leaders to translate business objectives into pragmatic technology roadmaps. We guide digital transformation, enterprise modernization, cloud migration strategies, and technical governance to maximize return on technology investment.',
    iconName: 'Compass',
    features: [
      'Technology Strategy & Architecture Advisory',
      'Enterprise Digital Transformation Roadmaps',
      'Legacy Application Modernization Planning',
      'Cloud Readiness & Total Cost of Ownership (TCO) Optimization',
      'IT Governance, Risk & Technical Debt Audits',
      'Vendor & Tool Evaluation Advisory'
    ],
    engagementModels: ['Advisory Retainer', 'Fixed-Scope Discovery & Roadmap', 'Fractional Enterprise Architecture'],
    technologies: ['Microservices Architecture', 'Enterprise Integration', 'Cloud Native Platforms', 'Security Governance'],
    targetAudience: 'CIOs, CTOs, and business executives driving architectural modernization or digital transformation.'
  },
  {
    id: 'project-services',
    title: 'Project-Based IT Services',
    tagline: 'End-to-end delivery of defined enterprise technology initiatives.',
    shortDesc: 'Support defined technology initiatives through project-based teams and professional delivery capabilities.',
    fullDesc: 'From greenfield software development to complex cloud transitions, UpLiv delivers turnkey and milestone-based project solutions. Our multidisciplinary squads take ownership of execution from initial discovery through production deployment and hypercare support.',
    iconName: 'Briefcase',
    features: [
      'End-to-End Custom Application Development',
      'Cloud & Data Center Migration Services',
      'Enterprise System & API Integration',
      'ERP & CRM Customization and Rollouts',
      'Automated Quality Assurance & Continuous Testing',
      'DevOps CI/CD Automation & Infrastructure-as-Code'
    ],
    engagementModels: ['Milestone-Based Fixed Price', 'Time & Materials Managed Delivery', 'Build-Operate-Transfer (BOT)'],
    technologies: ['Full-Stack Cloud Native', 'Kafka/Event Streaming', 'Snowflake/Databricks', 'Docker/K8s', 'Terraform'],
    targetAudience: 'Organizations seeking reliable delivery partners to execute critical technology initiatives within scope and budget.'
  },
  {
    id: 'data-ai',
    title: 'Data & AI Services',
    tagline: 'Engineering the data foundations and intelligent systems for modern enterprise.',
    shortDesc: 'Support organizations with data engineering, analytics, AI, automation, and modern intelligence initiatives.',
    fullDesc: 'UpLiv enables organizations to unlock enterprise intelligence through robust data engineering pipelines, modern analytical warehouses, and pragmatic artificial intelligence solutions. We help clients move from raw data silos to automated, predictive decision-making.',
    iconName: 'Cpu',
    features: [
      'Modern Data Architecture & Pipeline Engineering (ETL/ELT)',
      'Enterprise Cloud Data Warehousing (Snowflake, BigQuery, Redshift)',
      'Business Intelligence, Executive Dashboards & Analytics',
      'Machine Learning Models & Predictive Analytics Systems',
      'Generative AI Integration & Enterprise Retrieval-Augmented Generation (RAG)',
      'Intelligent Automation & AI Strategy Implementation'
    ],
    engagementModels: ['Data Platform Sprint', 'AI Pilot & POC', 'Enterprise Data Architecture Advisory', 'Ongoing Pipeline Management'],
    technologies: ['Python', 'PySpark', 'dbt', 'Snowflake', 'Databricks', 'TensorFlow/PyTorch', 'OpenAI/Gemini/Bedrock APIs', 'PowerBI/Tableau'],
    targetAudience: 'Data leaders, CDOs, and innovation heads aiming to harness data assets and deploy enterprise AI responsibly.'
  },
  {
    id: 'implementation',
    title: 'Technology Implementation',
    tagline: 'Seamless deployment and integration across complex enterprise environments.',
    shortDesc: 'Help organizations implement and integrate technology solutions across their business environment.',
    fullDesc: 'Adopting new enterprise software requires flawless execution. UpLiv provides certified implementation architects who manage data migration, configuration, customization, third-party system connectors, and end-user enablement to guarantee high adoption and zero downtime.',
    iconName: 'Layers',
    features: [
      'Enterprise Platform Implementation & Configuration',
      'Multi-System API Integration & Middleware Engineering',
      'Legacy Data Cleansing, Mapping & Migration',
      'Production Deployment & Cutover Management',
      'User Acceptance Testing (UAT) Orchestration',
      'Post-Launch Hypercare Support & Knowledge Transfer'
    ],
    engagementModels: ['Implementation Package', 'Phased Rollout', 'Hybrid Team Integration'],
    technologies: ['Salesforce', 'ServiceNow', 'SAP/Workday Connectors', 'MuleSoft/Boomi', 'AWS/Azure Hybrid'],
    targetAudience: 'Enterprises deploying or consolidating enterprise platforms seeking experienced implementation architects.'
  }
];

export const WHY_UPLIV = [
  {
    id: 'us-focus',
    title: 'U.S. Market Focus',
    description: 'Incorporated in New York with nationwide operational capability, ensuring legal compliance, time-zone synchronization, and deep familiarity with U.S. corporate standards.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'tech-expertise',
    title: 'Technology Expertise',
    description: 'Hands-on capabilities spanning modern software engineering, cloud ecosystems, advanced data pipelines, AI/ML, and mission-critical enterprise systems.',
    iconName: 'Code2'
  },
  {
    id: 'flexible-models',
    title: 'Flexible Engagement Models',
    description: 'Adaptable partnership structures tailored to your operational constraints: staff augmentation, specialized recruiting, consulting retainers, or milestone delivery.',
    iconName: 'Shuffle'
  },
  {
    id: 'vetted-talent',
    title: 'Experienced Professionals',
    description: 'Access to senior and principal technology leaders pre-vetted through strict peer-level technical evaluations and thorough reference assessments.',
    iconName: 'Award'
  },
  {
    id: 'business-aligned',
    title: 'Business-Focused Approach',
    description: 'We do not push technology for its own sake. Every recommendation and resource allocation directly maps to quantifiable business outcomes and ROI.',
    iconName: 'TrendingUp'
  },
  {
    id: 'scalable-support',
    title: 'Scalable Support',
    description: 'Elastic capacity that flexes seamlessly as your business priorities shift, supporting rapid ramp-ups for urgent projects or strategic long-term scaling.',
    iconName: 'Maximize2'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand',
    tagline: 'Deep dive into objectives and constraints',
    description: 'We conduct a thorough discovery session to understand your business objectives, technical architecture, team dynamics, timeline, and delivery model requirements.',
    details: [
      'Architectural & technical scope review',
      'Skill level & cultural alignment definition',
      'Budget, timeline & compliance assessment'
    ]
  },
  {
    step: '02',
    title: 'Identify',
    tagline: 'Precision matching of talent and strategy',
    description: 'We match your needs against our vetted nationwide talent pool and technical delivery frameworks, curating the exact professionals or project strategy needed.',
    details: [
      'Multi-stage technical screening & peer code audits',
      'Engagement model tailoring (Augmentation vs. Project)',
      'Transparent candidate portfolios and rate structures'
    ]
  },
  {
    step: '03',
    title: 'Deliver',
    tagline: 'Flawless execution and onboarding',
    description: 'We execute rapid onboarding and project initiation, integrating professionals directly into your team workflows or mobilizing dedicated delivery pods.',
    details: [
      'Structured onboarding and tooling setup',
      'Agile sprint alignment and milestone tracking',
      'Bi-weekly progress and SLA health checks'
    ]
  },
  {
    step: '04',
    title: 'Support',
    tagline: 'Ongoing partnership and governance',
    description: 'We provide continuous relationship governance, performance monitoring, and scaling support as your corporate technology roadmap evolves.',
    details: [
      'Proactive performance reviews and skill upscaling',
      'Elastic team scaling up or down with notice',
      'Strategic executive advisory and roadmap reviews'
    ]
  }
];

export const TECHNOLOGY_CAPABILITIES: TechnologyCategory[] = [
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    description: 'Multi-cloud architectures, resilient infrastructure, and automated cloud operations.',
    icon: 'Cloud',
    skills: [
      { name: 'Amazon Web Services (AWS)', level: 'Enterprise', tags: ['EC2', 'EKS', 'Lambda', 'S3', 'RDS'] },
      { name: 'Microsoft Azure', level: 'Enterprise', tags: ['AKS', 'Azure DevOps', 'CosmosDB', 'App Services'] },
      { name: 'Google Cloud Platform (GCP)', level: 'Advanced', tags: ['GKE', 'BigQuery', 'Cloud Run', 'Vertex AI'] },
      { name: 'Infrastructure as Code (IaC)', level: 'Enterprise', tags: ['Terraform', 'Terragrunt', 'CloudFormation'] },
      { name: 'Hybrid & Private Cloud', level: 'Advanced', tags: ['VMware', 'OpenShift', 'Direct Connect'] }
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data Engineering & Analytics',
    description: 'Scalable data pipelines, enterprise warehouses, and real-time business intelligence.',
    icon: 'Database',
    skills: [
      { name: 'Data Warehousing & Lakes', level: 'Enterprise', tags: ['Snowflake', 'Databricks', 'BigQuery', 'Amazon Redshift'] },
      { name: 'Data Pipeline Engineering', level: 'Enterprise', tags: ['Apache Spark', 'dbt', 'Airflow', 'Kafka', 'NiFi'] },
      { name: 'Business Intelligence & BI', level: 'Enterprise', tags: ['Power BI', 'Tableau', 'Looker', 'Superset'] },
      { name: 'Data Governance & Quality', level: 'Advanced', tags: ['Collibra', 'Great Expectations', 'Monte Carlo'] },
      { name: 'NoSQL & Real-time Stores', level: 'Advanced', tags: ['MongoDB', 'Cassandra', 'PostgreSQL', 'Redis'] }
    ]
  },
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & ML',
    description: 'Practical AI systems, machine learning engineering, and generative automation.',
    icon: 'BrainCircuit',
    skills: [
      { name: 'Machine Learning Engineering', level: 'Advanced', tags: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'XGBoost'] },
      { name: 'Generative AI & LLM Systems', level: 'Advanced', tags: ['Retrieval Augmented Generation (RAG)', 'Vector DBs', 'LangChain', 'LlamaIndex'] },
      { name: 'Intelligent Automation', level: 'Enterprise', tags: ['Document Intelligence', 'Computer Vision', 'NLP Pipelines'] },
      { name: 'MLOps & Model Governance', level: 'Advanced', tags: ['MLflow', 'Kubeflow', 'AWS SageMaker', 'Weights & Biases'] }
    ]
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    description: 'Modern full-stack, distributed backend systems, and high-performance web applications.',
    icon: 'Code',
    skills: [
      { name: 'Frontend Engineering', level: 'Enterprise', tags: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS'] },
      { name: 'Backend Engineering', level: 'Enterprise', tags: ['Java (Spring Boot)', 'Python (FastAPI)', 'Node.js', 'Go', '.NET Core'] },
      { name: 'API & Microservices Architecture', level: 'Enterprise', tags: ['RESTful APIs', 'GraphQL', 'gRPC', 'Event-Driven Systems'] },
      { name: 'Mobile App Engineering', level: 'Advanced', tags: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)'] }
    ]
  },
  {
    id: 'devops-security',
    name: 'DevOps & Cybersecurity',
    description: 'Continuous delivery pipelines, container orchestration, and security compliance.',
    icon: 'Shield',
    skills: [
      { name: 'Container Orchestration', level: 'Enterprise', tags: ['Kubernetes', 'Docker', 'Helm', 'Istio Service Mesh'] },
      { name: 'CI/CD Automation', level: 'Enterprise', tags: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD'] },
      { name: 'DevSecOps & Code Analysis', level: 'Advanced', tags: ['SonarQube', 'Snyk', 'Trivy', 'HashiCorp Vault'] },
      { name: 'Security & Compliance Audits', level: 'Advanced', tags: ['SOC2 Readiness', 'HIPAA Alignment', 'IAM Architecture'] }
    ]
  },
  {
    id: 'enterprise-apps',
    name: 'Enterprise Tech & ERP / CRM',
    description: 'Integration and customization of mission-critical corporate enterprise software.',
    icon: 'Briefcase',
    skills: [
      { name: 'CRM Solutions', level: 'Enterprise', tags: ['Salesforce (Core, Service, CPQ)', 'HubSpot Enterprise', 'Dynamics 365'] },
      { name: 'ERP Platforms', level: 'Advanced', tags: ['SAP S/4HANA', 'Oracle NetSuite', 'Workday Integration'] },
      { name: 'Enterprise Integration', level: 'Enterprise', tags: ['MuleSoft', 'Boomi', 'Apache Camel', 'Kafka Connect'] },
      { name: 'QA Automation', level: 'Enterprise', tags: ['Selenium', 'Cypress', 'Playwright', 'Postman'] }
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'automotive',
    name: 'Automotive & Mobility',
    tagline: 'Engineering next-generation connected systems and supply chain applications.',
    description: 'UpLiv supports automotive OEMs, tier-1 suppliers, and fleet mobility organizations with specialized software engineers, embedded specialists, and data engineers.',
    iconName: 'Car',
    challenges: [
      'Modernizing dealer management and legacy inventory systems',
      'Integrating telemetry and connected fleet data streams',
      'Scaling supply chain visibility across multi-tier supplier networks'
    ],
    solutions: [
      'Specialized engineering pods for fleet management software',
      'Real-time IoT telemetry pipelines built on AWS/Azure',
      'Contract software engineers experienced in automotive protocols'
    ],
    keyTechnologies: ['AWS IoT', 'Python', 'C++', 'Kafka', 'React Native', 'Kubernetes']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    tagline: 'Smart factory data, ERP integration, and operational efficiency.',
    description: 'We deliver technology professionals and project delivery squads to help industrial manufacturers connect plant floor operations with corporate enterprise systems.',
    iconName: 'Factory',
    challenges: [
      'Connecting legacy OT systems with cloud data lakes',
      'Bridging technical skill gaps for ERP migrations',
      'Implementing automated quality inspection and predictive maintenance'
    ],
    solutions: [
      'Enterprise data pipelines linking SCADA/MES with modern cloud analytics',
      'Senior ERP technical analysts and integration specialists',
      'Full-stack engineering teams for custom manufacturing portals'
    ],
    keyTechnologies: ['SAP', 'Snowflake', 'Azure IoT', 'Python', 'Docker', 'PowerBI']
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical & Life Sciences',
    tagline: 'Secure data management and compliant technology staffing.',
    description: 'UpLiv supplies pharmaceutical, biotech, and clinical research organizations with senior data scientists, bioinformatic analysts, and regulatory-aware systems engineers.',
    iconName: 'Pill',
    challenges: [
      'Accelerating clinical trial data ingestion and reporting workflows',
      'Maintaining stringent data governance and audit trails',
      'Sourcing niche biostatistics and health informatics developers'
    ],
    solutions: [
      'Staff augmentation with vetted data engineers and analysts',
      'High-throughput data pipelines for assay and study analytics',
      'Cloud modernization for laboratory information systems (LIMS)'
    ],
    keyTechnologies: ['Python', 'R', 'AWS HealthLake', 'PostgreSQL', 'Snowflake', 'Terraform']
  },
  {
    id: 'healthcare',
    name: 'Healthcare & HealthTech',
    tagline: 'Patient-centric applications and modern health data interoperability.',
    description: 'We help health systems, payer organizations, and HealthTech innovators build resilient, interoperable digital health experiences.',
    iconName: 'HeartPulse',
    challenges: [
      'Interoperability between legacy EHR systems and modern portals',
      'Strict security and privacy requirements for sensitive health data',
      'High demand for experienced FHIR/HL7 technical specialists'
    ],
    solutions: [
      'Engineers skilled in FHIR, HL7, and SMART-on-FHIR standards',
      'Cloud migration of patient engagement and scheduling portals',
      'Secure microservices architecture adhering to healthcare industry standards'
    ],
    keyTechnologies: ['FHIR/HL7', 'TypeScript', 'Node.js', 'Azure Health Data Services', 'Docker']
  },
  {
    id: 'banking',
    name: 'Banking & Financial Services',
    tagline: 'High-throughput transactional systems, data platforms, and compliance.',
    description: 'We support financial institutions, fintechs, and asset managers with elite software engineers, cloud architects, and risk analytics talent.',
    iconName: 'Landmark',
    challenges: [
      'Migrating core legacy banking systems to modern cloud architectures',
      'Real-time fraud detection and risk telemetry processing',
      'Sourcing senior Java, Golang, and cloud data specialists'
    ],
    solutions: [
      'Agile pods for fintech payment gateways and digital banking portals',
      'Event-driven transaction pipelines using Apache Kafka and Apache Flink',
      'Rigorous background-checked technical staff augmentation'
    ],
    keyTechnologies: ['Java (Spring Boot)', 'Go', 'Kafka', 'AWS', 'Kubernetes', 'PostgreSQL']
  },
  {
    id: 'insurance',
    name: 'Insurance & InsurTech',
    tagline: 'Modernizing policy administration, underwriting data, and claim portals.',
    description: 'UpLiv provides insurers with technical consulting and engineering talent to automate claims processing, modernize underwriting, and digitize customer journeys.',
    iconName: 'ShieldAlert',
    challenges: [
      'Legacy policy administration platforms hindering agile product rollouts',
      'Manual, paper-intensive claims intake and adjudication cycles',
      'Integrating third-party risk scoring and telematics datasets'
    ],
    solutions: [
      'Core modernization teams to build headless APIs around legacy systems',
      'Automated document extraction and claims workflow orchestration',
      'Full-stack engineers building intuitive policyholder self-service portals'
    ],
    keyTechnologies: ['React', 'Python', 'AWS', 'Salesforce Financial Services Cloud', 'GraphQL']
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    tagline: 'Reliable technology staffing and professional IT project support.',
    description: 'We assist state, local, and public sector organizations with qualified IT contractors, project managers, and systems modernization specialists.',
    iconName: 'Building2',
    challenges: [
      'Public portal accessibility and legacy mainframe transitions',
      'Strict procurement guidelines and predictable milestone delivery',
      'Attracting skilled developers to public sector modernization programs'
    ],
    solutions: [
      'Vetted U.S. citizen and resident IT professionals for public initiatives',
      'Milestone-driven project management and systems integration',
      'Accessible web and mobile application engineering (WCAG/Section 508)'
    ],
    keyTechnologies: ['Java', '.NET Core', 'Azure Government', 'React', 'SQL Server']
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    tagline: 'Scalable omnichannel architectures and headless commerce platforms.',
    description: 'UpLiv helps retail brands deliver frictionless digital shopping experiences, real-time inventory visibility, and high-concurrency peak season stability.',
    iconName: 'ShoppingBag',
    challenges: [
      'System slowdowns during peak holiday and flash-sale events',
      'Disjointed in-store and online inventory synchronization',
      'Modernizing from monolithic commerce suites to headless setups'
    ],
    solutions: [
      'Scalable cloud-native headless commerce architectures',
      'Real-time inventory microservices and order orchestration',
      'Senior frontend engineers specializing in Next.js and high-speed web apps'
    ],
    keyTechnologies: ['Next.js', 'Node.js', 'Shopify Plus / Commercelayer', 'Redis', 'AWS']
  },
  {
    id: 'logistics',
    name: 'Logistics & Transportation',
    tagline: 'Route optimization, fleet telemetry, and warehouse automation systems.',
    description: 'We partner with 3PLs, carriers, and supply chain operators to build real-time shipment visibility platforms and automated dispatch tools.',
    iconName: 'Truck',
    challenges: [
      'Fragmented tracking across partner carrier networks',
      'High latency in automated dispatching and dynamic re-routing',
      'Integrating warehouse management systems (WMS) with ERPs'
    ],
    solutions: [
      'Real-time tracking and GPS telemetry processing engines',
      'WMS / TMS integration specialists and API engineers',
      'Custom dispatcher and driver mobile application development'
    ],
    keyTechnologies: ['Go', 'Python', 'React Native', 'Kafka', 'Google Maps APIs', 'PostgreSQL']
  }
];

export const CAREER_OPENINGS: JobPosting[] = [
  {
    id: 'job-1',
    title: 'Senior Full Stack Engineer (React / Node / TypeScript)',
    department: 'Software Engineering',
    location: 'Remote (USA)',
    type: 'Full-time',
    experience: '6+ Years',
    description: 'We are seeking an experienced Full Stack Engineer to build high-performance web applications for enterprise clients. You will work on scalable microservices, interactive React dashboards, and cloud deployment pipelines.',
    keySkills: ['React', 'TypeScript', 'Node.js', 'REST/GraphQL', 'AWS or Azure', 'PostgreSQL'],
    postedDate: 'Updated This Week'
  },
  {
    id: 'job-2',
    title: 'Lead Cloud & DevOps Architect',
    department: 'Cloud & Infrastructure',
    location: 'Remote (USA) / Hybrid New York, NY',
    type: 'Full-time',
    experience: '8+ Years',
    description: 'Design and deploy robust multi-cloud environments, container orchestration platforms (Kubernetes), and Infrastructure-as-Code frameworks for clients undergoing digital transformation.',
    keySkills: ['AWS / Azure', 'Terraform', 'Kubernetes (EKS/AKS)', 'CI/CD Pipelines', 'Security Compliance'],
    postedDate: 'Updated This Week'
  },
  {
    id: 'job-3',
    title: 'Senior Data Engineer (Snowflake / Python / dbt)',
    department: 'Data & AI',
    location: 'Remote (USA)',
    type: 'Contract (W2 / C2C)',
    experience: '5+ Years',
    description: 'Build modern data ingestion pipelines, design dimensional warehouse models on Snowflake, and collaborate with business intelligence analysts to deliver high-velocity business insights.',
    keySkills: ['Snowflake', 'Python', 'dbt', 'SQL', 'Airflow', 'Data Modeling'],
    postedDate: 'Updated This Week'
  },
  {
    id: 'job-4',
    title: 'Enterprise Technical Recruiter',
    department: 'Talent Acquisition',
    location: 'New York, NY (Hybrid) / Remote (USA)',
    type: 'Full-time',
    experience: '4+ Years',
    description: 'Partner with account executives and engineering managers to identify, screen, and place top-tier software engineers, cloud architects, and data professionals across the United States.',
    keySkills: ['Technical Sourcing', 'Candidate Screening', 'ATS Systems', 'Salary Negotiation', 'U.S. IT Market'],
    postedDate: 'Updated This Week'
  },
  {
    id: 'job-5',
    title: 'Senior Java Backend Engineer (Spring Boot / Microservices)',
    department: 'Software Engineering',
    location: 'Remote (USA)',
    type: 'Contract-to-Hire',
    experience: '7+ Years',
    description: 'Deliver high-throughput event-driven microservices for enterprise banking and healthcare systems. Experience with Kafka and distributed transaction handling is strongly preferred.',
    keySkills: ['Java 17/21', 'Spring Boot', 'Kafka', 'Microservices', 'Docker', 'Relational DBs'],
    postedDate: 'Updated This Week'
  }
];

export const U_S_PRESENCE_HUBS = [
  { city: 'New York, NY', role: 'Corporate Headquarters & Executive Leadership', state: 'NY', lat: 40.7128, lng: -74.0060, isHQ: true },
  { city: 'Boston, MA', role: 'Life Sciences & Biotech Delivery Hub', state: 'MA', lat: 42.3601, lng: -71.0589, isHQ: false },
  { city: 'Chicago, IL', role: 'Manufacturing & Industrial IT Practice Hub', state: 'IL', lat: 41.8781, lng: -87.6298, isHQ: false },
  { city: 'Atlanta, GA', role: 'Fintech & Supply Chain Delivery Hub', state: 'GA', lat: 33.7490, lng: -84.3880, isHQ: false },
  { city: 'Dallas / Austin, TX', role: 'Enterprise Cloud & Energy IT Hub', state: 'TX', lat: 32.7767, lng: -96.7970, isHQ: false },
  { city: 'Denver, CO', role: 'Telecom & Aerospace Engineering Hub', state: 'CO', lat: 39.7392, lng: -104.9903, isHQ: false },
  { city: 'San Francisco, CA', role: 'AI & Next-Gen Software Architecture Hub', state: 'CA', lat: 37.7749, lng: -122.4194, isHQ: false },
  { city: 'Seattle, WA', role: 'Cloud Infrastructure & E-Commerce Systems Hub', state: 'WA', lat: 47.6062, lng: -122.3321, isHQ: false }
];
