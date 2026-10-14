import { cases } from './content';

/* ---------- Case studies: full pages ---------- */
export type CasePage = {
	slug: string;
	id: string; // matches cases[].id and the diagram variant
	title: string;
	description: string;
	role: string;
	sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
	stack?: string;
};

export const casePages: CasePage[] = [
	{
		slug: 'agency-operations-platform',
		id: 'agency',
		role: 'Digital transformation lead: process mapping, solution architecture, full development and deployment',
		title: 'An operations platform for a creative agency: from scattered requests to a six-week pilot',
		description:
			'How a regional creative agency went from requests in chat and schedules in spreadsheets to a working operations platform: AI-assisted briefs and deliverables, automated hand-offs, resource-first scheduling, document control and audit.',
		sections: [
			{
				heading: 'The situation',
				paragraphs: [
					'A regional creative and marketing agency working across Iraq, Egypt and Dubai had grown faster than its operating model. Client requests arrived by WhatsApp, email and phone. Schedules lived in spreadsheets that only one or two people understood. Nobody could see who was overloaded until a deadline had already slipped.',
					'The agency had looked at off-the-shelf project tools, but every one of them assumed a workflow the agency did not actually follow. The real question was not which tool to buy. It was how work really moved from a client request to a delivered piece, and where it was getting stuck.'
				]
			},
			{
				heading: 'What I did',
				paragraphs: [
					'I started by mapping the real operating flow, interviewing the people who did the work rather than only the managers, and comparing what I found against established international agency practice. That produced a future-state model the agency could agree on before any software was built.',
					'Then I designed and built the platform around that model.'
				],
				bullets: [
					'Intake: every request becomes one record, however it arrives',
					'AI-assisted briefs: the brief is drafted from the request, and the AI proposes deliverables from the agency’s deliverables catalogue; a person completes and approves both',
					'Automated workflow end to end: once an item is approved it is forwarded automatically to the people who need it for their own tasks, with no manual hand-off',
					'Resource-first scheduling: capacity is checked before work is committed, not after, with SLAs and time tracking against each job',
					'Document control: automatic versioning, filing and archiving of every deliverable, so the current version is never in doubt',
					'Role-based access control and a full audit trail across the platform',
					'Approvals, production workflow, resource tracking and finance export in one place',
					'An exceptions dashboard: alerts focus attention on the issues that threaten delivery or a client relationship',
					'A non-blocking model: warnings for impossible deadlines, weekends and holidays let people proceed, and every override is logged'
				]
			},
			{
				heading: 'The result',
				paragraphs: [
					'A working pilot was running with the Client Services and Creative teams about six weeks after mapping began. Teams create and schedule projects through the new workflow, with AI assisting the routine parts and people keeping the decisions.',
					'The platform was built multi-tenant and role-based from the start, so it can serve other agencies without being rebuilt.',
					'The visualisation on this page shows one selected workflow, a request moving through intake, brief, capacity check and approval, and does not represent the complete platform.'
				]
			}
		],
		stack: 'React and TypeScript; Supabase (PostgreSQL with row-level security, Edge Functions, Realtime, Storage); database tests, unit and end-to-end tests with CI; Vercel. English and Arabic.'
	},
	{
		slug: 'ggi-esports-platform',
		id: 'esports',
		role: 'CTO: solution architect and lead developer',
		title: 'GGI: running esports tournaments without an army of coordinators',
		description:
			'How an esports platform for gamers in Iraq automated tournament engines up to 4,000+ competitors, two-way Discord sync, promotion plans and leaderboards, reached MVP in about three months and 5,000 users in its first three.',
		sections: [
			{
				heading: 'The situation',
				paragraphs: [
					'GGI set out to give gamers in Iraq a proper competitive platform. The problem with running tournaments is that almost all of the work is coordination: choosing a format, building brackets, publishing fixtures, creating Discord channels, chasing results, updating standings and promoting the event. Done by hand, that caps how many events can run and how reliable they are.'
				]
			},
			{
				heading: 'What I did',
				paragraphs: [
					'As CTO at ESTAZ I was lead developer and solution architect. The design principle was simple: anything a coordinator does more than once should be done by the system.'
				],
				bullets: [
					'Smart tournament engines that cater for everything from small community events to tournaments with 4,000+ competitors: format selection, multi-stage structures, brackets, fixtures and advancement generated by the system',
					'Two-way synchronisation with Discord: channels, fixtures, results and announcements kept in step between the platform and the community’s Discord server',
					'Automatic generation of social media plans to promote each tournament',
					'Registration, teams and clans, referees, results, rankings and notifications in one system, in English and Arabic',
					'Role-based access for players, team admins, organisers, referees and site administrators, with an admin console and CMS'
				]
			},
			{
				heading: 'The result',
				paragraphs: [
					'Concept to a working MVP in about three months, full functionality within six, and more than 5,000 users registered in the first three months. Tournaments run with a fraction of the manual coordination they needed before.',
					'The visualisation on this page shows one selected workflow, a single-elimination bracket with Discord channels and results, and does not represent the complete platform.'
				]
			}
		],
		stack: 'SvelteKit and TypeScript; Supabase (PostgreSQL, row-level security, Edge Functions); Discord bot with a Redis-backed job queue; TrueSkill ratings; English and Arabic with right-to-left layout; Vercel.'
	},
	{
		slug: 'keystone-ai-development-context',
		id: 'keystone',
		role: 'Designed, built and tested the tool; used it to manage its own development',
		title: 'Keystone: keeping AI-assisted software projects from drifting',
		description:
			'A command-line tool that keeps requirements, decisions, rules and lessons in the repository and compiles exactly the context an AI coding agent needs for each task, deterministically. 248 automated tests.',
		sections: [
			{
				heading: 'The problem',
				paragraphs: [
					'AI coding assistants make a developer much faster on any single task. On a real project, over weeks and months, they cause a different problem: they do not remember the decisions, rules and hard-won lessons that came before. Each session starts fresh. The result is code that drifts away from the architecture, repeats mistakes that were already fixed, and quietly breaks rules nobody wrote down.',
					'The context that keeps a project consistent usually lives in people’s heads, chat histories and scattered documents. None of that is available to the agent when it starts work.'
				]
			},
			{
				heading: 'What I built',
				paragraphs: [
					'Keystone keeps that context in the repository itself, in structured files that are validated against a schema, and compiles it into a task brief for the AI agent. The same inputs always produce the same output, byte for byte, so the brief can be reviewed and trusted.'
				],
				bullets: [
					'Requirements, architecture decisions, tasks, rules, learnings and known traps stored as structured, schema-validated files in the repo',
					'A command-line workflow: initialise, start a task, compile its context, review, close',
					'Deterministic indexing and compilation, so the output is identical on every run and in every environment',
					'A three-role review gate that must pass before a task can be closed',
					'248 automated tests covering the schema, the compiler and the commands'
				]
			},
			{
				heading: 'Why it matters for clients',
				paragraphs: [
					'I use AI assistance in my own development work, and this is how I keep that fast without letting it get sloppy. It is also the clearest evidence I can offer of how I engineer: schemas, tests, deterministic behaviour and a review step before anything is called done.',
					'Keystone was used to manage its own development from the first commit.'
				]
			}
		],
		stack: 'Node.js and TypeScript command-line tool; JSON Schema validation; YAML; architecture decision records; 248 automated tests.'
	},
	{
		slug: 'ai-invoice-matching',
		id: 'ap',
		role: 'Designed and built the prototype end to end',
		title: 'AI that matches invoices but cannot approve its own payments',
		description:
			'A working prototype of an accounts payable workflow where AI reads and matches invoices, fixed rules enforce approval limits outside the AI, and anything over the limit waits for a named person.',
		sections: [
			{
				heading: 'The question',
				paragraphs: [
					'AI can read an invoice and match it to a purchase order quickly and accurately. The reason finance teams hesitate is not accuracy. It is control: what stops the AI, or someone talking to it, from approving a payment it should not?',
					'I built this prototype to show one answer to that question, so that clients can see the control model working before they trust it with real money.'
				]
			},
			{
				heading: 'How it works',
				paragraphs: ['The design separates what the AI is good at from what it must never be allowed to decide.'],
				bullets: [
					'The AI reads the invoice and matches it against the purchase order',
					'Approval limits are checked by fixed rules that run outside the AI, so no prompt or conversation can change them',
					'Anything within the limit is posted; anything over it stops and waits for a named approver to sign',
					'The approver’s authority is itself signed and verifiable, not a setting the AI can read and reinterpret',
					'Every step is written to an audit trail, with personal data hashed rather than stored in the clear'
				]
			},
			{
				heading: 'Why it matters',
				paragraphs: [
					'The same pattern applies to any consequential decision you might want AI to help with: the AI prepares, a rule decides whether a person is needed, and the person decides. It is how I design every AI step in a client roadmap.'
				]
			}
		],
		stack: 'Node and TypeScript with no runtime dependencies, Ed25519-signed authority, SQLite audit ledger, Anthropic API with an offline deterministic fallback for testing'
	}
];

export const caseFor = (slug: string) => {
	const p = casePages.find((c) => c.slug === slug);
	const c = p && cases.find((x) => x.id === p.id);
	return p && c ? { page: p, summary: c } : undefined;
};

/* ---------- Regions ---------- */
export type Region = {
	slug: string;
	name: string;
	title: string;
	description: string;
	intro: string[];
	why: { heading: string; body: string }[];
	markets: string;
};

export const regions: Region[] = [
	{
		slug: 'southeast-asia',
		name: 'Southeast Asia',
		title: 'Digital transformation consultant for Southeast Asia',
		description:
			'Digital transformation for businesses in Indonesia, Malaysia, Singapore and the wider region: process mapping, solution design and hands-on build of custom software, integrations, automation and AI, delivered in English, Bahasa Indonesia and Malay from the same time zone.',
		intro: [
			'I am based in Indonesia and have lived and worked in the region for most of three decades, running operations in logistics and cold chain, oilfield services and energy projects. I work in English, Bahasa Indonesia and Malay, and I am in your time zone.',
			'That matters for this kind of work. Mapping a process means talking to the people who do the job, not only the managers, and that conversation goes better in their own language and during their own working day.'
		],
		why: [
			{
				heading: 'Interviews in the language people actually use',
				body: 'Warehouse staff, sales admin and finance teams describe their work differently in Bahasa than they do in a translated meeting. The map is only as good as those conversations.'
			},
			{
				heading: 'Experience of how business runs here',
				body: 'Director of Operations for Indonesian companies in cold-chain import and export and in oilfield optimisation; project support for a 200,000-barrel-a-day production facility. I know the realities of permits, customs, family-owned structures and relationship-led decisions.'
			},
			{
				heading: 'On site when it helps',
				body: 'Workshops in Jakarta and across Java are straightforward. Singapore, Kuala Lumpur and the rest of the region are a short flight.'
			},
			{
				heading: 'Tools that fit regional reality',
				body: 'WhatsApp is often the real system of record. Solutions are designed around how your people already communicate, not against it.'
			}
		],
		markets: 'Indonesia, Malaysia, Singapore, the Philippines, Thailand and Vietnam.'
	},
	{
		slug: 'middle-east',
		name: 'Middle East',
		title: 'Digital transformation consultant for the Middle East and Gulf',
		description:
			'Digital transformation for agencies and businesses in the UAE, Iraq, Egypt and the Gulf: process mapping, solution design and hands-on build of custom platforms, integrations, automation and AI, in English and Arabic, with references in the region.',
		intro: [
			'My most recent and most relevant work is in the Middle East: leading digital transformation for a regional creative agency across Iraq, Egypt and Dubai, building an esports platform that reached 5,000 users in Iraq, and delivering a tournament platform for an event in the UAE.',
			'Before that I spent years in Dubai in executive operations and in contracts and procurement for onshore oil and gas development in Iraq.'
		],
		why: [
			{
				heading: 'Bilingual delivery',
				body: 'The systems I have built for the region run in English and Arabic, including right-to-left interfaces. Solutions account for bilingual teams and clients from the start.'
			},
			{
				heading: 'Agency and media operations',
				body: 'Intake, briefs, scheduling, approvals and capacity are the problems I am solving right now for a regional agency. If you run one, the mapping starts from a known baseline.'
			},
			{
				heading: 'Procurement and contracts background',
				body: 'Senior contracts and procurement roles in Dubai and Iraq mean I can help choose and negotiate vendors, not only recommend them.'
			},
			{
				heading: 'Working hours that overlap',
				body: 'Indonesia is four hours ahead of the Gulf, so the whole Gulf working day falls inside mine.'
			}
		],
		markets: 'United Arab Emirates, Saudi Arabia, Qatar, Iraq, Egypt and Jordan.'
	}
];

/* ---------- Insights ---------- */
export type Article = {
	slug: string;
	title: string;
	description: string;
	date: string; // ISO
	minutes: number;
	html: string;
};

export const articles: Article[] = [
	{
		slug: 'map-the-process-before-you-automate-it',
		title: 'Map the process before you automate it',
		description:
			'Most automation projects fail at the first step: nobody wrote down how the work is actually done. Here is how to map a business process in a week, and what to look for.',
		date: '2026-10-13',
		minutes: 6,
		html: `
<p>Every automation project I have been asked to rescue failed in the same place. Somebody bought or built a system for how they believed the work was done. The people doing the work had a different process, usually for good reasons, and carried on doing it their way around the new tool.</p>
<p>Mapping the process first is how you avoid that. It is not a long exercise. For two or three core processes in a business of 20 to 150 people, a week is usually enough.</p>
<h2>Talk to the people who do the work</h2>
<p>Managers describe the process as it was designed. The people doing it describe the process as it is. You need the second one. Sit with the sales administrator, the warehouse supervisor, the finance clerk. Ask them to walk you through one real example from last week, start to finish, including the workarounds. The workarounds are the map.</p>
<h2>Follow one real item end to end</h2>
<p>Pick one quote, one order, one client brief, and trace it from the moment it arrived to the moment it was closed. Write down every handover, every system it touched, every time somebody retyped something, and every time it waited. The waits are usually longer than the work.</p>
<h2>Mark four things</h2>
<ul>
<li><strong>Retyping.</strong> Every time information moves from one place to another by hand. Each one is a delay and a source of errors.</li>
<li><strong>Bottlenecks.</strong> Steps that depend on one person, especially one who travels or is often in meetings.</li>
<li><strong>Dark periods.</strong> Stretches where nobody can see where the item is or who has it.</li>
<li><strong>Decisions.</strong> Points where a person makes a judgement. These are the steps you will want to keep human, and design the automation around.</li>
</ul>
<h2>Count before you design</h2>
<p>A quote-to-invoice process I mapped recently had seven steps, five friction points and four retypes of the same customer details. Once that is written down, the roadmap almost writes itself: capture the enquiry once, generate everything else from that one record, and keep the sales manager’s approval as the single human decision. The numbers also give you a before-and-after measure, which is how you know the automation worked.</p>
<h2>Only then choose the tools</h2>
<p>With the map in hand, the tool question becomes much smaller. Often the answer is to connect what you already have. Where something new is needed, you now know exactly what it must do, which makes vendor conversations short.</p>
<p>If you want a second pair of eyes on your map, or would rather someone did the mapping with your team, that is the first stage of how I work.</p>`
	},
	{
		slug: 'where-ai-saves-time-and-where-it-should-not-decide',
		title: 'Where AI saves time in a 50-person company, and where it should not decide',
		description:
			'A practical list of the tasks where AI reliably pays off in a mid-sized business, the ones where it does not, and the rule I use to decide which decisions stay with a person.',
		date: '2026-10-13',
		minutes: 7,
		html: `
<p>Most of the AI advice aimed at business owners is either breathless or vague. Here is what I have seen actually pay off in businesses of roughly 20 to 150 people, and a simple rule for where to stop.</p>
<h2>Where it reliably pays off</h2>
<ul>
<li><strong>Drafting from structured information.</strong> A brief from a client request, a quote from a price list, a status update from a project record. The AI drafts, a person checks and sends. This is the single biggest time saver I see.</li>
<li><strong>Reading documents.</strong> Pulling the fields out of invoices, purchase orders, shipping documents and application forms. It is fast and, with a check step, accurate enough.</li>
<li><strong>Triage.</strong> Sorting incoming enquiries, support requests or applications into categories and routing them to the right person.</li>
<li><strong>First-line answers.</strong> A chatbot that answers from your own documents and hands over to a person when it is unsure. The handover is the important part.</li>
<li><strong>Summarising.</strong> Long email threads, meeting recordings and reports into something a busy person will actually read.</li>
</ul>
<h2>Where it usually does not</h2>
<ul>
<li>Replacing a process that was never defined. AI will cheerfully automate the confusion.</li>
<li>Tasks that are already quick for a person and happen rarely.</li>
<li>Anything where the cost of an occasional wrong answer is high and nobody is checking.</li>
</ul>
<h2>The rule: AI prepares, a rule decides, a person approves</h2>
<p>For any consequential step, I design it in three parts. The AI prepares the work: the match, the draft, the classification. A fixed rule, written in plain code outside the AI, decides whether a person needs to look: amount over a limit, confidence below a threshold, a new customer, an exception of any kind. And a named person approves anything the rule sends to them.</p>
<p>The rule is the piece most people skip. It is what stops the AI, or someone talking to it, from approving something it should not. I built a working accounts-payable prototype to show this: the AI matches invoices to purchase orders, but it cannot approve a payment above its delegated limit no matter what it is told.</p>
<h2>How to start</h2>
<p>Map your core processes first. Mark the decision points. Then pick one task from the first list above that sits between two of those decision points, automate that, and measure it. One working, measured automation does more for adoption than any amount of strategy.</p>`
	},
	{
		slug: 'why-agencies-lose-a-day-a-week',
		title: 'Why agencies lose a day a week to coordination, and what fixes it',
		description:
			'The four places creative and marketing agencies lose time, from a transformation lead’s view of the work, and the operating model that gets it back.',
		date: '2026-10-13',
		minutes: 6,
		html: `
<p>I lead digital transformation for a regional creative agency. Before building anything, I mapped how work actually moved through it. The pattern I found will be familiar to anyone who has run an agency, and the fixes are more about operating model than software.</p>
<h2>Where the day goes</h2>
<ul>
<li><strong>Intake.</strong> Requests arrive by chat, email and phone. Somebody has to notice them, understand them, and turn them into a brief. That somebody is usually a senior person.</li>
<li><strong>Scheduling against capacity nobody can see.</strong> Work is committed to clients before anyone checks whether the designer is free. Overload shows up as a missed deadline.</li>
<li><strong>Approvals in the wrong place.</strong> Internal and client approvals happen in message threads. Finding the current version, and who approved what, takes real time.</li>
<li><strong>Status reporting by hand.</strong> Account managers assemble updates from memory and messages, because the information is not in one place.</li>
</ul>
<h2>The operating model that fixes it</h2>
<p><strong>One record per request.</strong> However it arrives, it becomes a single item with an owner, a brief and a status. AI can draft the brief from the request; a person completes it.</p>
<p><strong>Resource-first scheduling.</strong> Check capacity before committing. If it does not fit, the system says so, and a person decides whether to proceed anyway. The decision is logged, which changes behaviour on its own.</p>
<p><strong>Exceptions, not dashboards.</strong> Nobody reads a dashboard of everything. People act on a short list of the things that are about to go wrong: a deadline that cannot be met, an approval waiting too long, a designer at 140 percent.</p>
<p><strong>Non-blocking rules.</strong> Hard stops get worked around. Warnings that let people proceed, with the override recorded, get respected.</p>
<h2>What it took</h2>
<p>About six weeks from mapping to a working pilot with the Client Services and Creative teams. The software mattered, but it was built to the mapped operating model, not the other way around. That order is the whole point.</p>`
	}
];

export const articleFor = (slug: string) => articles.find((a) => a.slug === slug);
