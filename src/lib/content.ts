export type CaseStudy = {
	name: string;
	type: string;
	role?: string;
	context: string;
	problem?: string;
	approach: string;
	solution: string[];
	outcome: string;
	technology?: string;
};

export const primaryWork: CaseStudy[] = [
	{
		name: 'Maestro',
		type: 'Enterprise operational transformation',
		context: 'A regional branding and marketing agency operating across Iraq, Egypt and Dubai.',
		problem: 'Operational workflows lacked consistency and visibility. The real operating model needed to be understood and remapped before meaningful digital transformation could occur.',
		approach: 'Reviewed operating flows, identified process and visibility gaps, remapped workflows against international agency practices, and translated the future-state model into a working platform.',
		solution: ['Project intake, scheduling and approvals', 'Production workflow and resource tracking', 'Role-based, multi-tenant operations', 'LLM-assisted workflows and exception reporting', 'Alerts, traceability and activity logging'],
		outcome: 'An operational pilot was achieved in approximately six weeks. Client Services and Creative teams were able to create and schedule projects through the new workflow.',
		technology: 'React · Supabase / PostgreSQL · Vercel',
	},
	{
		name: 'Sidegig',
		type: 'Commissioned commercial engagement',
		role: 'Lead Solution Architect and Business Model Architect',
		context: 'An enterprise platform connecting brands with influencers and content creators.',
		approach: 'Designed both the underlying business model and the technical solution, connecting commercial mechanics with the operating workflow.',
		solution: ['LLM-assisted ingestion', 'Creator and brand matching concepts', 'Workflow automation', 'Human review and decision points'],
		outcome: 'Commissioned solution and business-model architecture; no commercial results are claimed.',
	},
	{
		name: 'GGI Esports Platform',
		type: 'Product architecture and delivery',
		role: 'Lead Developer / Solution Architect while CTO at ESTAZ',
		context: 'A tournament platform for gamers in Iraq.',
		approach: 'Architected and delivered an automated tournament operating model, reducing the manual coordination required to run competitions.',
		solution: ['Automatic tournament-format generation', 'Discord and automatic channel integration', 'Fixture generation', 'Leaderboards'],
		outcome: 'MVP delivered in approximately three months, with full functionality in approximately six months. More than 5,000 users registered during the first three months.',
	},
];

export const researchWork = [
	{ name: 'SolomonOS', type: 'Independent R&D', description: 'SolomonOS is a Digital Workforce Operating System for creating and operating AI-powered digital employees. Each digital employee has a defined organisational role, persistent knowledge, specialised skills, behavioural rules and controlled access to the capabilities required to perform its work.\n\nIts proprietary engines coordinate cognition, knowledge, skills, authority and collaboration while preserving organisational context and human oversight. The architecture is LLM-independent, separating the digital employee and its operating environment from the underlying language model.' },
	{ name: 'Keystone', type: 'Independent R&D', description: "AI-assisted development loses coherence when decisions, constraints and working knowledge are scattered, repeatedly reconstructed, or pushed back through the model as expensive context.\n\nKeystone is a work-in-progress repo-native context system designed to make project knowledge structured, persistent and inspectable through deterministic artifacts, indexing, validation and relationships.\n\nThe target is an 80% reduction in context-token usage while preserving the information needed for effective AI-assisted development. This target will be measured and validated against a live software project rather than treated as an assumed benefit.\n\nKeystone is already helping build Keystone. Early versions of its own context architecture were used during Keystone's development, allowing the project to progressively manage specifications, decisions, tasks and implementation context using the system it was creating.\n\nIndependent R&D. Once the architecture and token-reduction target have been validated in real project use, the intention is to release Keystone under an appropriate licence." },
	{ name: 'Reaptor', type: 'Independent product development · Parked', description: 'Originally explored an LLM-powered no-code chatbot platform with knowledge ingestion, configurable assistants, knowledge bases and embeddable deployment. The product is now parked while Reaptor becomes the umbrella identity for Edward’s technology and transformation practice.' },
	{ name: 'Valsyg', type: 'Independent R&D', description: 'An exploration of Solana validator infrastructure and blockchain operations.' },
];

export const capabilities = [
	{ name: 'Transformation & Advisory', purpose: 'Determine what needs to change, where technology adds value and how adoption can work in practice.', items: ['Digital transformation', 'AI adoption', 'Operating-model design', 'Process redesign', 'Enterprise discovery', 'Use-case prioritisation', 'Executive advisory', 'Change and adoption'] },
	{ name: 'Solutions & Product', purpose: 'Turn operating requirements into a coherent product, system and delivery plan.', items: ['Product strategy', 'Solution architecture', 'Requirements analysis', 'Workflow design', 'MVP definition', 'Implementation roadmaps', 'Systems integration', 'Human-in-the-loop design'] },
	{ name: 'AI & Automation', purpose: 'Apply intelligent systems where they improve work, knowledge, decisions or control.', items: ['Generative AI and LLM workflows', 'Agentic-system concepts', 'Workflow automation', 'Intelligent decision support', 'Knowledge and context systems', 'AI-enabled operational tooling'] },
	{ name: 'Business & Operations', purpose: 'Ground transformation in commercial reality and the way organisations actually operate.', items: ['Executive operations', 'Supply chain', 'Procurement', 'Contracts', 'Project operations', 'Commercial analysis', 'Cross-functional transformation'] },
];

export const recentExperience = [
	{ period: '2026–Present', role: 'Traffic Manager & Digital Transformation Lead', organisation: 'EGI', location: 'Iraq / Egypt / Dubai — Remote' },
	{ period: '2023–2026', role: 'Chief Technology Officer', organisation: 'ESTAZ' },
	{ period: '2021–2022', role: 'Independent Consultant', organisation: 'Business & Technology' },
	{ period: '2016–2020', role: 'Principal / Owner', organisation: 'Köenigsys MSS', location: 'Indonesia' },
];

export const earlierExperience = [
	['2015–2016', 'COO', 'Ichor Holdings LLC', 'Dubai / Mozambique'],
	['2013–2016', 'COO', '3Lysium Holdings LLC', 'Dubai / Mozambique'],
	['2011–2013', 'Senior Contracts & Procurement Manager', 'Unaoil Group', 'Dubai / Monaco / Iraq'],
	['2008–2010', 'Senior Contracts & Procurement Manager', 'Woodside Energy — Browse LNG', 'Australia'],
	['2009–2011', 'Director Operations', 'PT Cipta Trikreasi Indonesia', 'Indonesia'],
	['2010–2011', 'Operations Manager', 'Joint Oilfield Service Solutions', 'Brazil'],
	['2009–2011', 'Director Operations', 'PT Niaga Gema Teknologi', 'Indonesia'],
	['1997–2000', 'Project Support Manager', 'Santa Fe / Devon', 'Indonesia'],
	['1994–1996', 'Chief Logistics & Operations Officer', 'Indochina Goldfields', 'Indonesia'],
	['1986–1994', 'Australian Defence Force', 'Army', 'Australia'],
] as const;
