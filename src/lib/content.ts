export const symptoms = [
	{
		title: 'Growth has outrun the systems',
		body: 'Work still runs on spreadsheets, chat threads and one or two people who know how everything fits together.'
	},
	{
		title: 'Software that does not fit',
		body: 'Tools have been bought, but people retype, chase and copy between them because none of them match how the business actually works.'
	},
	{
		title: 'Systems that do not talk to each other',
		body: 'Sales, operations and finance each have their own system. Nobody has one picture, and every handover is manual.'
	},
	{
		title: 'AI without a clear place',
		body: 'Everyone agrees AI could help. Nobody is sure where it is safe, worth using, or how to keep people in control.'
	}
];

export type Stage = {
	id: string;
	name: string;
	when: string;
	price: string;
	happens: string;
	receive: string[];
};

export const stages: Stage[] = [
	{
		id: 'discover',
		name: 'Discovery',
		when: '20 minutes',
		price: 'Free',
		happens:
			'A conversation about your business, where it is losing time and money, and what you are trying to achieve. If I do not think I can help, I will say so.',
		receive: ['A clear view of whether this is worth pursuing', 'A proposed scope and fixed price for the next step']
	},
	{
		id: 'map',
		name: 'Mapping and analysis',
		when: 'Typically 1–2 weeks',
		price: 'Fixed price',
		happens:
			'I map how work actually flows today across people, systems, handovers and decisions, and where each one stalls. I talk to the people who do the work, not only the managers, and I look at the systems and data you already have.',
		receive: [
			'A current-state map of your core processes and systems',
			'Inefficiencies, risks and opportunities identified and ranked',
			'A clear view of what is worth fixing, and what is not'
		]
	},
	{
		id: 'design',
		name: 'Solution design',
		when: 'Delivered with the map',
		price: 'Included',
		happens:
			'I design the solution that fits the problem: a custom application, an existing platform configured properly, integration between the systems you already have, automation, AI, or a combination. The technology is chosen to fit the business, not the other way around.',
		receive: [
			'A solution design and architecture you can take to anyone',
			'Expected return and effort for each part',
			'A sequenced plan, with human checkpoints defined for every automated or AI-assisted step'
		]
	},
	{
		id: 'build',
		name: 'Build and integrate',
		when: 'Scoped from the design',
		price: 'Quoted per project',
		happens:
			'I build it myself: custom software, integrations, automated workflows and AI components, with automated tests and proper deployment. I also configure and connect existing platforms where they are the right answer.',
		receive: ['Working software in daily use', 'Documentation, training and full handover', 'Everything owned by you, including the code']
	},
	{
		id: 'support',
		name: 'Deploy and improve',
		when: 'Optional, monthly',
		price: 'Retainer',
		happens:
			'Deployment into production, then measured improvement: refining what was built, extending it as the business changes, and keeping adoption on track.',
		receive: ['Production deployment and monitoring', 'Regular reviews against the plan', 'Changes and new capabilities as needs grow']
	}
];

/** Engagements that can be taken on their own, without the full lifecycle. */
export const extras = [
	{
		title: 'Custom software development',
		body: 'Web applications and platforms designed and built from your requirements, with tests, documentation and deployment. Engaged on its own or as part of a wider programme.'
	},
	{
		title: 'Systems integration',
		body: 'Connecting the systems you already run so data moves between them without retyping: ERP, CRM, finance, messaging and the tools your team lives in.'
	},
	{
		title: 'Technical review and architecture',
		body: 'An independent assessment of an existing system, codebase or architecture, or the design of a new one, with findings your leadership can act on.'
	},
	{
		title: 'AI implementation',
		body: 'AI put to work on specific tasks, such as reading documents, drafting, matching and classification, with rules and human checkpoints around every consequential decision.'
	},
	{
		title: 'Platform selection and procurement',
		body: 'Choosing between build and buy, comparing vendors and negotiating the contract, from someone who has run contracts and procurement on major energy projects.'
	},
	{
		title: 'Hands-on technical leadership',
		body: 'Fractional CTO or transformation lead: owning the technical direction and delivery when you do not have that person in-house.'
	}
];

/** How I build: capability areas shown without a wall of logos. */
export const capabilities = [
	{
		title: 'Web applications and platforms',
		body: 'Multi-tenant, role-based applications in TypeScript with React or Svelte, built to be used daily by real teams, in English and Arabic where needed.'
	},
	{
		title: 'Architecture and databases',
		body: 'PostgreSQL schema design, row-level security, migrations and database tests. Systems designed so they can grow without being rebuilt.'
	},
	{
		title: 'Integrations and automation',
		body: 'APIs, webhooks, background job queues and bots that connect existing systems and remove manual handovers.'
	},
	{
		title: 'AI with controls',
		body: 'Large language models for reading, drafting, matching and classification, with deterministic rules and human approval outside the model.'
	},
	{
		title: 'Cloud and delivery',
		body: 'Serverless and edge deployment, CI pipelines, automated end-to-end testing and monitoring, so what ships keeps working.'
	},
	{
		title: 'Existing platforms',
		body: 'When an off-the-shelf tool is the right answer, I configure it properly, connect it to the rest of your systems and make sure people use it.'
	}
];

/** Illustrative mapping example: quote-to-cash in a 40-person distribution company. */
export type FlowStep = {
	label: string;
	who: string;
	tag?: 'friction' | 'auto' | 'ai' | 'human';
	note?: string;
};

export const exampleBefore: FlowStep[] = [
	{ label: 'Enquiry arrives', who: 'WhatsApp, email or phone', tag: 'friction', note: 'Three channels, no single record' },
	{ label: 'Details retyped', who: 'Sales admin → spreadsheet', tag: 'friction', note: 'First retype' },
	{ label: 'Quote prepared', who: 'Sales manager only', tag: 'friction', note: 'Bottleneck: one person, often travelling' },
	{ label: 'Order confirmed', who: 'Phone call, then retyped', tag: 'friction', note: 'Second retype' },
	{ label: 'Delivery paperwork', who: 'Warehouse, typed again', tag: 'friction', note: 'Third retype' },
	{ label: 'Invoice raised', who: 'Finance, from scratch', tag: 'friction', note: 'Fourth retype; errors found here' },
	{ label: 'Payment chased', who: 'Finance, by hand', tag: 'friction', note: 'No reminders, no visibility' }
];

export const exampleAfter: FlowStep[] = [
	{ label: 'Enquiry captured', who: 'One shared inbox and web form', tag: 'auto', note: 'Every enquiry becomes one record' },
	{ label: 'Quote drafted', who: 'AI drafts from price list', tag: 'ai', note: 'Pricing rules applied consistently' },
	{ label: 'Quote approved', who: 'Sales manager, one click', tag: 'human', note: 'A person still decides' },
	{ label: 'Order and paperwork', who: 'Generated from the same record', tag: 'auto', note: 'Nothing retyped' },
	{ label: 'Invoice issued', who: 'Automatically on delivery', tag: 'auto', note: 'Finance reviews exceptions only' },
	{ label: 'Reminders sent', who: 'Automated, escalates to a person', tag: 'human', note: 'Overdue accounts flagged' }
];

export type CaseStudy = {
	id: string;
	kicker: string;
	title: string;
	client: string;
	problem: string;
	did: string[];
	outcome: string;
	outcomeFigure: string;
	outcomeLabel: string;
	status?: string;
};

export const cases: CaseStudy[] = [
	{
		id: 'agency',
		kicker: 'Operations platform',
		title: 'A creative agency that could not see its own workload',
		client: 'Regional creative and marketing agency · Iraq, Egypt and Dubai',
		problem:
			'Requests arrived by chat and email, schedules lived in spreadsheets, and overload only became visible when a deadline was missed. Off-the-shelf tools assumed a workflow the agency did not follow.',
		did: [
			'Mapped the real operating flow against international agency practice',
			'Intake from any channel into one record; AI drafts the brief and proposes deliverables from the agency’s deliverables catalogue, with a person completing and approving',
			'End-to-end automated workflow: approved items are forwarded automatically to the people who need them for their own tasks',
			'Resource-first scheduling with capacity checked before commitment, SLAs, time tracking and an exceptions dashboard',
			'Document control with automatic versioning, filing and archiving; role-based access and a full audit trail',
			'Multi-tenant, English and Arabic, with automated database and end-to-end tests'
		],
		outcome: 'Pilot running with Client Services and Creative teams',
		outcomeFigure: '6 weeks',
		outcomeLabel: 'from mapping to a working pilot'
	},
	{
		id: 'esports',
		kicker: 'Automated operations',
		title: 'Running tournaments without an army of coordinators',
		client: 'GGI esports platform · Iraq',
		problem:
			'Running tournaments is mostly coordination: formats, fixtures, Discord channels, results, promotion. Done by hand, that capped how many events could run and how reliable they were.',
		did: [
			'Lead developer and solution architect as CTO',
			'Tournament engines that scale from small community events to 4,000+ competitors: formats, fixtures, brackets and advancement generated by the system',
			'Two-way Discord integration: channels, fixtures and results synchronised between the platform and Discord',
			'Automatic generation of social media plans to promote each tournament',
			'Registration, teams, referees, results and rankings in one system, in English and Arabic'
		],
		outcome: 'MVP in about three months, full functionality in six',
		outcomeFigure: '5,000+',
		outcomeLabel: 'users registered in the first three months'
	},
	{
		id: 'keystone',
		kicker: 'Engineering tooling',
		title: 'Keeping AI-assisted software projects from drifting',
		client: 'Keystone · own project, open to clients',
		problem:
			'AI coding assistants are fast, but on a real project they forget the decisions, rules and lessons that came before, and the codebase drifts. The context that keeps a project consistent lives in people’s heads and chat histories.',
		did: [
			'Designed a system that keeps requirements, decisions, tasks, rules and learnings in the repository itself',
			'Built a command-line tool that compiles exactly the context an AI agent needs for each task, deterministically',
			'A three-role review gate before any task can be closed',
			'248 automated tests; used to manage its own development'
		],
		outcome: 'Eight working commands, deterministic output, used to manage its own development',
		outcomeFigure: '248',
		outcomeLabel: 'automated tests, byte-identical output on every run'
	},
	{
		id: 'ap',
		kicker: 'AI with controls',
		title: 'AI that matches invoices but cannot approve its own payments',
		client: 'Accounts payable workflow · working prototype',
		problem:
			'AI can read and match invoices quickly, but businesses rightly worry about it approving payments it should not.',
		did: [
			'AI reads the invoice and matches it against the purchase order',
			'Approval limits are checked by fixed rules outside the AI, so it cannot be talked past them',
			'Anything over the limit stops and waits for a named person to sign off',
			'Every step is recorded in an audit trail'
		],
		outcome: 'A working prototype that shows how AI can be used in finance safely',
		outcomeFigure: '0',
		outcomeLabel: 'payments the AI can approve beyond its delegated limit',
		status: 'Working prototype'
	}
];

export const otherWork = [
	{
		name: 'Creator marketplace',
		body: 'Lead solution and business-model architect for SideGig, a platform matching brands with creators: briefs, proposals and payments, with AI-assisted ingestion and matching and human review.'
	},
	{
		name: 'Technical review for a game studio',
		body: 'Reviewed the architecture and backend of a mobile game project for MBC Group, identified the risks the team had not flagged, and worked with their developers to resolve them.'
	},
	{
		name: 'Support chatbot platform',
		body: 'A chatbot that answers from a company’s own documents and websites, and hands over to a person when it should. Built with a document-ingestion pipeline and vector search.'
	},
	{
		name: 'Tournament site on existing tools',
		body: 'A registration, bracket and leaderboard site for an esports event in the UAE, built quickly and cheaply on Google Sheets and Apps Script because that was the right fit.'
	}
];

export const timeline = [
	{ years: '2026–now', role: 'Digital Transformation Lead', org: 'Regional creative agency (Iraq, Egypt, Dubai)' },
	{ years: '2023–2026', role: 'Chief Technology Officer', org: 'ESTAZ' },
	{ years: '2021–2022', role: 'Independent consultant', org: 'Business and technology' },
	{ years: '2016–2020', role: 'Principal', org: 'Köenigsys MSS, embedded and automation systems (Indonesia)' },
	{ years: '2013–2016', role: 'Chief Operations Officer', org: '3Lysium and Ichor Holdings (Dubai, Mozambique)' },
	{ years: '2011–2013', role: 'Senior Contracts & Procurement Manager', org: 'Unaoil (Dubai, Monaco, Iraq)' },
	{ years: '2010–2011', role: 'Operations Manager', org: 'Joint Oilfield Service Solutions (Brazil)' },
	{ years: '2005–2010', role: 'Senior Contracts & Procurement Manager', org: 'Woodside Energy, Browse LNG (Australia)' },
	{ years: '2000–2005', role: 'Director of Operations', org: 'PT Cipta Trikreasi and PT Niaga Gema Teknologi (Indonesia)' },
	{ years: '1997–2000', role: 'Project Support Manager', org: 'Santa Fe Energy / Devon Energy (Indonesia)' },
	{ years: '1994–1996', role: 'Chief Logistics & Operations Officer', org: 'Indochina Goldfields (Indonesia)' },
	{ years: '1986–1994', role: 'Australian Army', org: 'Including RAAF School of Languages, Indonesian linguist' }
];

export const pricing = [
	{
		region: 'Discovery call',
		range: 'Free',
		note: '20 minutes to talk through your business challenges'
	},
	{
		region: 'Mapping and solution design',
		range: 'Fixed price',
		note: 'Quoted after the discovery call, before any work starts'
	},
	{
		region: 'Build, integration or review',
		range: 'Quoted per project',
		note: 'With or without the mapping stage. You decide what to build, and when'
	}
];

export const faqs = [
	{
		q: 'Do I have to start with mapping?',
		a: 'No. If you already know what you need built, reviewed or integrated, we start there. Mapping is where I start when the problem is not yet clear, because it is the cheapest way to avoid building the wrong thing.'
	},
	{
		q: 'Do you build it yourself, or hand it to a team?',
		a: 'I design and build it myself. You deal with the person who understood the problem, designed the solution and wrote the code, not an account manager.'
	},
	{
		q: 'Do we need to buy new software?',
		a: 'Often not. Many of the best improvements come from connecting and properly using what you already have. Where something new is needed, I help you choose between building and buying, and negotiate it.'
	},
	{
		q: 'Will AI make decisions for us?',
		a: 'Only where you decide it should. Every automated or AI-assisted step has a defined human checkpoint, and anything consequential stays with a person.'
	},
	{
		q: 'What happens to our data and code?',
		a: 'They stay yours. I work under NDA where needed, use your accounts and systems wherever possible, and everything built is handed over to you with documentation.'
	},
	{
		q: 'Do you work remotely?',
		a: 'Yes, across Asia-Pacific, the Middle East and Europe. On-site work is possible in Indonesia and the region. I work in English, Bahasa Indonesia and Malay.'
	}
];

export const testimonials = [
	{
		quote:
			'As CTO, Edward took GGI, our esports tournament platform for gamers in Iraq, from concept to a working MVP in about three months and full functionality within six. He automated the parts that used to take hours of manual coordination: tournament formats, fixtures, Discord channels and leaderboards. More than 5,000 players registered in the first three months. Edward combines hands-on development with a clear understanding of how operations actually run.',
		name: 'Jahan Bybordi',
		role: 'COO, ESTAZ'
	},
	{
		quote:
			'We brought Edward in to assist with a game development project and act as an advisor to identify technical problems we couldn’t get to the bottom of. He reviewed the architecture and backend, identified the risks our team hadn’t flagged, and explained them in terms our leadership could act on. More importantly, he guided us through resolving the issues with our development team rather than just handing over a report. His mix of technical depth and operational experience gave us clarity and confidence at a point where we needed both.',
		name: 'Naji Ghaziri',
		role: 'Mobile Gaming Product Leader, MBC Group'
	},
	{
		quote:
			'Edward led both the business model and the solution architecture for SideGig, our platform matching brands with creators. He translated our commercial model into clear workflows and a technical design, bringing in AI-assisted ingestion and matching while keeping people in control of the decisions that matter. He understood the business as well as the technology, which meant the platform was designed around how the business actually needs to work.',
		name: 'Ralph Bejjani',
		role: 'CEO, SideGig'
	}
];
