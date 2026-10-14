export const symptoms = [
	{
		title: 'Deadlines slip without warning',
		body: 'Nobody can see who is overloaded until a client is already waiting.'
	},
	{
		title: 'Work lives in chat and inboxes',
		body: 'Briefs, approvals and handovers are scattered across WhatsApp, email and spreadsheets.'
	},
	{
		title: 'Software the work runs around',
		body: 'Tools have been bought, but people still retype, chase and copy between them.'
	},
	{
		title: 'AI without a clear place',
		body: 'Everyone agrees AI could help. Nobody is sure where it is safe or worth using.'
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
			'A short call about where time, money and deadlines are being lost. If mapping would not pay for itself, I will say so.',
		receive: ['An honest view of whether this is worth doing', 'A proposed scope and fixed price for mapping']
	},
	{
		id: 'map',
		name: 'Mapping',
		when: 'Typically 1–2 weeks',
		price: 'Fixed price',
		happens:
			'I map how work actually flows today: the people, systems, handovers and decisions, and where each one stalls. Interviews with the people who do the work, not just the managers.',
		receive: [
			'A current-state map of your core processes',
			'Friction points marked: delays, retyping, bottlenecks, risk',
			'A list of the systems involved and how they connect'
		]
	},
	{
		id: 'roadmap',
		name: 'Roadmap',
		when: 'Delivered with the map',
		price: 'Included',
		happens:
			'We decide together what to automate, where AI genuinely helps, and where a person must stay in control of the decision.',
		receive: [
			'Ranked opportunities with expected return and effort',
			'Human checkpoints defined for every automated step',
			'A sequenced 90-day plan you can act on with or without me'
		]
	},
	{
		id: 'build',
		name: 'Implementation',
		when: 'Scoped from the roadmap',
		price: 'Quoted per project',
		happens:
			'I design and build the automated flows, integrations and AI tools myself, then train your team and hand them over.',
		receive: ['Working systems in daily use', 'Training and documentation', 'Everything owned by you']
	},
	{
		id: 'support',
		name: 'Support',
		when: 'Optional, monthly',
		price: 'Retainer',
		happens: 'Refining and extending the systems as the business changes, and keeping adoption on track.',
		receive: ['Regular reviews against the roadmap', 'Changes and new automations as needs grow']
	}
];

export const extras = [
	{
		title: 'Tool selection and vendor procurement',
		body: 'Choosing software, comparing vendors and negotiating the contract, from someone who has run contracts and procurement on major oil, gas and LNG projects.'
	},
	{
		title: 'AI adoption training',
		body: 'Practical workshops so your team uses what has been put in place, and knows where AI should not be trusted.'
	},
	{
		title: 'Systems review',
		body: 'An independent look at your existing systems, integrations and in-house or outsourced developers.'
	},
	{
		title: 'Fractional transformation lead',
		body: 'Ongoing ownership of the programme when you do not have someone in-house to drive it.'
	},
	{
		title: 'Custom platform builds',
		body: 'When off-the-shelf tools do not fit the way you work, I design and build the system.'
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
			'Requests arrived by chat and email, schedules lived in spreadsheets, and overload only became visible when a deadline was missed.',
		did: [
			'Mapped the real operating flow against international agency practice',
			'Designed resource-first scheduling: capacity is checked before work is committed',
			'Built the platform: intake, AI-assisted briefs, scheduling, approvals and an exceptions dashboard',
			'Warnings for impossible deadlines, weekends and holidays let people proceed, with every override logged'
		],
		outcome: 'Pilot running with Client Services and Creative teams',
		outcomeFigure: '6 weeks',
		outcomeLabel: 'to a working pilot'
	},
	{
		id: 'esports',
		kicker: 'Automated operations',
		title: 'Running tournaments without an army of coordinators',
		client: 'GGI esports platform · Iraq',
		problem:
			'Every tournament meant building brackets, fixtures and Discord channels by hand, which capped how many events could run.',
		did: [
			'Automated tournament formats and fixture generation',
			'Discord channels, fixtures and leaderboards created and updated automatically',
			'Registration, results and rankings in one system, in English and Arabic'
		],
		outcome: 'MVP in about three months, full functionality in six',
		outcomeFigure: '5,000+',
		outcomeLabel: 'users registered in the first three months'
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
		body: 'Lead solution and business-model architect for a platform matching brands with creators: AI-assisted ingestion, matching and human review.'
	},
	{
		name: 'Keystone',
		body: 'A tool that keeps AI coding assistants consistent with a project’s decisions and rules. Built and tested with 248 automated tests, and used to build itself.'
	},
	{
		name: 'Support chatbot platform',
		body: 'A chatbot that answers from a company’s own documents and websites, and hands over to a person when it should.'
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
		note: '20 minutes to see whether mapping is worth doing'
	},
	{
		region: 'Mapping and roadmap',
		range: 'Fixed price',
		note: 'Quoted after the discovery call, before any work starts'
	},
	{
		region: 'Implementation and support',
		range: 'Quoted from the roadmap',
		note: 'You decide what to build, and when'
	}
];

export const faqs = [
	{
		q: 'How long does mapping take?',
		a: 'Usually one to two weeks for two or three core processes, depending on how many people and systems are involved. You get the price and timing before anything starts.'
	},
	{
		q: 'Do we need to buy new software?',
		a: 'Often not. Many of the best improvements come from connecting and using what you already have. Where something new is needed, I help you choose and negotiate it.'
	},
	{
		q: 'Will AI make decisions for us?',
		a: 'Only where you decide it should. Every automated step in the roadmap has a defined human checkpoint, and anything consequential stays with a person.'
	},
	{
		q: 'What happens to our data?',
		a: 'It stays yours. I am happy to work under NDA, use your accounts and systems wherever possible, and everything built is handed over to you.'
	},
	{
		q: 'Do you work remotely?',
		a: 'Yes, across Asia-Pacific, the Middle East and Europe. On-site workshops are possible in Indonesia and the region. I work in English, Bahasa Indonesia and Malay.'
	},
	{
		q: 'What if mapping shows nothing worth automating?',
		a: 'Then you have a clear picture of how your business runs and where it can improve, and you will have spent far less than a failed software project.'
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
