<script lang="ts">
	import { onMount } from 'svelte';
	import { Menu, X, ArrowUpRight } from 'lucide-svelte';
	import {
		capabilities,
		earlierExperience,
		primaryWork,
		recentExperience,
	} from '$lib/content';
	import MaestroSystem from './MaestroSystem.svelte';
	import SidegigSystem from './SidegigSystem.svelte';
	import GgiSystem from './GgiSystem.svelte';
	import SolomonSystem from './SolomonSystem.svelte';
	import KeystoneSystem from './KeystoneSystem.svelte';
	import '$lib/portfolio.css';
	import { SITE_URL } from '$lib/site';

	const email = 'edward@reaptor.io';
	const navigation = [
		{ id: 'work', label: 'Selected work' },
		{ id: 'capabilities', label: 'Approach' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'about', label: 'About' },
	];
	const method = [
		{
			name: 'Understand',
			output: 'Operating reality',
			detail: 'People, workflows, constraints and commercial context.',
			evidence: 'Map the operating problem before choosing the technology.',
		},
		{
			name: 'Redesign',
			output: 'A better operating model',
			detail: 'Responsibilities, handoffs and decisions shaped around the problem.',
			evidence: 'Make responsibilities and decision flows explicit.',
		},
		{
			name: 'Architect',
			output: 'A coherent architecture',
			detail: 'Roles, information, interfaces and control boundaries.',
			evidence: 'Connect business logic, information and system behaviour.',
		},
		{
			name: 'Build',
			output: 'A working system',
			detail: 'The operating model translated into usable software.',
			evidence: 'Turn the architecture into a product people can use.',
		},
		{
			name: 'Adopt',
			output: 'Adoption in practice',
			detail: 'Real teams, operational feedback and continuous improvement.',
			evidence: 'Bring the system into the work and learn from its use.',
		},
	];
	let phase = $state(0);
	let menuOpen = $state(false);
	let activeSection = $state('');
	let menuButton: HTMLButtonElement;
	function closeMenu(restoreFocus = false) {
		menuOpen = false;
		if (restoreFocus) menuButton?.focus();
	}
	function navigate(id: string) {
		menuOpen = false;
		window.setTimeout(() => document.getElementById(id)?.focus({ preventScroll: true }), 0);
	}
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) if (entry.isIntersecting) activeSection = entry.target.id;
			},
			{ rootMargin: '-15% 0px -60% 0px' },
		);
		for (const id of [...navigation.map((item) => item.id), 'contact']) {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		}
		const outside = (event: PointerEvent) => {
			if (
				menuOpen &&
				event.target instanceof Element &&
				!event.target.closest('.portfolio-nav-shell')
			)
				closeMenu();
		};
		document.addEventListener('pointerdown', outside);
		return () => {
			observer.disconnect();
			document.removeEventListener('pointerdown', outside);
		};
	});
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Edward Batt',
		url: SITE_URL,
		jobTitle: 'AI and Digital Transformation Leader',
		description:
			'Technology, transformation and operations executive combining international leadership, systems architecture and hands-on development.',
		email: `mailto:${email}`,
		telephone: '+62 812 9435 2999',
		address: { '@type': 'PostalAddress', addressLocality: 'Jakarta Region', addressCountry: 'ID' },
		knowsAbout: [
			'AI transformation',
			'Intelligent systems',
			'Technology strategy',
			'Systems architecture',
			'Product architecture',
			'Enterprise operations',
		],
	};
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape' && menuOpen) closeMenu(true);
	}}
/>
<svelte:head>
	<title>Edward Batt | AI Transformation, Intelligent Systems &amp; Technology Strategy</title>
	<meta
		name="description"
		content="Edward Batt combines 30+ years of international operating experience with technology strategy, systems architecture and hands-on AI-enabled development. Explore the work behind Reaptor."
	/>
	<link rel="canonical" href={SITE_URL} />
	<link
		rel="preload"
		href="/fonts/sans-latin.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<meta property="og:type" content="website" /><meta property="og:site_name" content="Reaptor" />
	<meta property="og:title" content="Edward Batt | AI Transformation & Intelligent Systems" />
	<meta
		property="og:description"
		content="Operational understanding. Technology strategy. Systems architecture. Working systems. The professional portfolio of Edward Batt."
	/>
	<meta property="og:url" content={SITE_URL} />
	<meta name="twitter:card" content="summary" /><meta
		name="twitter:title"
		content="Edward Batt | AI Transformation & Intelligent Systems"
	/>
	<meta
		name="twitter:description"
		content="Technology, transformation and operations. Explore Edward Batt’s work at Reaptor."
	/>
	<meta name="theme-color" content="#ffffff" />
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}<\/script>`}
</svelte:head>

<div class="portfolio-site">
	<a class="portfolio-skip" href="#portfolio-content">Skip to content</a>
	<header class="portfolio-nav-shell">
		<nav class="portfolio-nav portfolio-wrap" aria-label="Primary navigation">
			<a
				class="portfolio-wordmark"
				href="#top"
				aria-label="Reaptor — Edward Batt"
				onclick={() => navigate('top')}>REAPTOR</a
			>
			<div class="portfolio-nav-links">
				{#each navigation as item}<a
						href={`#${item.id}`}
						aria-current={activeSection === item.id ? 'location' : undefined}
						onclick={() => navigate(item.id)}>{item.label}</a
					>{/each}
			</div>
			<a class="portfolio-nav-contact" href="#contact" onclick={() => navigate('contact')}
				>Contact Edward<ArrowUpRight size={16} aria-hidden="true" /></a
			>
			<button
				class="portfolio-menu-toggle"
				type="button"
				bind:this={menuButton}
				aria-expanded={menuOpen}
				aria-controls="portfolio-mobile-nav"
				onclick={() => (menuOpen = !menuOpen)}
				>{menuOpen ? 'Close' : 'Menu'}{#if menuOpen}<X size={20} aria-hidden="true" />{:else}<Menu
						size={20}
						aria-hidden="true"
					/>{/if}</button
			>
		</nav>
		<div class="portfolio-mobile-nav portfolio-wrap" id="portfolio-mobile-nav" hidden={!menuOpen}>
			{#each [...navigation, { id: 'research', label: 'Intelligent systems' }, { id: 'contact', label: 'Contact Edward' }] as item}<a
					href={`#${item.id}`}
					onclick={() => navigate(item.id)}>{item.label}</a
				>{/each}
		</div>
	</header>

	<main id="portfolio-content" tabindex="-1">
		<section
			class="portfolio-hero portfolio-wrap"
			id="top"
			tabindex="-1"
			aria-labelledby="hero-title"
		>
			<div class="hero-composition">
				<div class="hero-identity">
					<h1 id="hero-title">Edward<br />Batt</h1>
					<p class="hero-summary">
						I connect operational understanding, technology strategy and hands-on delivery to build
						systems that work.
					</p>
				</div>
				<div class="hero-positioning">
					<p class="hero-profession">AI transformation.<br />Intelligent systems.</p>
					<p class="hero-disciplines">
						Technology strategy<br />Systems &amp; product architecture<br />Enterprise operations
					</p>
					<div class="hero-actions">
						<a class="portfolio-button" href="#work" onclick={() => navigate('work')}
							>See the work</a
						><a class="portfolio-text-link" href="#contact" onclick={() => navigate('contact')}
							>Contact Edward<ArrowUpRight size={18} aria-hidden="true" /></a
						>
					</div>
				</div>
			</div>
			<div class="hero-method">
				<p class="hero-method-heading">From operating reality to working systems.</p>
				<div class="method-selector" role="group" aria-label="Explore the working method">
					{#each method as item, index}<button
							type="button"
							aria-pressed={phase === index}
							onclick={() => (phase = index)}>{item.name}<span aria-hidden="true"></span></button
						>{/each}
				</div>
				<p class="method-response" aria-live="polite">
					<strong>{method[phase].output}</strong><span>{method[phase].detail}</span>
				</p>
			</div>
			<div class="hero-footnote">
				<p>30+ years of international business, technology and operational experience</p>
				<p>Jakarta Region, Indonesia</p>
			</div>
		</section>

		<section
			class="portfolio-maestro portfolio-section"
			id="work"
			tabindex="-1"
			aria-labelledby="maestro-title"
		>
			<div class="portfolio-wrap">
				<header class="maestro-heading">
					<div>
						<p class="project-context">Selected work / Operational transformation</p>
						<h2 id="maestro-title">Maestro</h2>
						<p class="project-statement">
							Making agency operations<br class="desktop-break" /> visible and manageable.
						</p>
					</div>
					<div class="project-introduction">
						<p>
							From fragmented work to a shared operational platform for a branding and marketing
							agency across Iraq and Egypt.
						</p>
						<p class="project-status">Operational pilot achieved in approximately six weeks.</p>
					</div>
				</header>
				<MaestroSystem />
				<div class="project-evidence">
					<div>
						<h3>Edward’s contribution</h3>
						<p>
							Operational discovery, workflow redesign and translation of the future operating model
							into a working platform. Lead architect and developer.
						</p>
					</div>
					<div>
						<h3>Pilot evidence</h3>
						<p>
							Client Services and Creative teams could create and schedule projects through the new
							workflow.
						</p>
					</div>
					<div class="project-stack">
						<span>Technical foundation</span>
						<p>React / Supabase / PostgreSQL / Vercel</p>
					</div>
				</div>
				<details class="portfolio-disclosure">
					<summary>The operating problem and response<span aria-hidden="true">+</span></summary>
					<div class="disclosure-columns">
						<div>
							<h3>The problem</h3>
							<p>{primaryWork[0].problem}</p>
						</div>
						<div>
							<h3>The response</h3>
							<p>{primaryWork[0].approach}</p>
						</div>
						<div>
							<h3>System capabilities</h3>
							<ul>
								{#each primaryWork[0].solution as item}<li>{item}</li>{/each}
							</ul>
						</div>
					</div>
				</details>
			</div>
		</section>

		<section
			class="portfolio-sidegig portfolio-section"
			id="sidegig"
			tabindex="-1"
			aria-labelledby="sidegig-title"
		>
			<div class="portfolio-wrap project-split">
				<div class="project-narrative">
					<p class="project-context">Commissioned commercial platform</p>
					<h2 id="sidegig-title">Sidegig</h2>
					<p class="project-statement">The business model<br />is part of the architecture.</p>
					<p class="project-body">
						A platform connecting brands with influencers and creators. I designed the commercial
						model and the technical solution as one connected system.
					</p>
					<div class="role-note">
						<h3>Lead solution / technical architect</h3>
						<p>Primary business-model architect</p>
					</div>
					<p class="project-body">
						LLM-assisted ingestion, algorithmic matching and workflow automation support
						recommendations while keeping human decisions explicit.
					</p>
					<p class="maturity-note">
						Commissioned architecture engagement. No commercial outcomes are claimed.
					</p>
				</div>
				<SidegigSystem />
			</div>
		</section>

		<section
			class="portfolio-ggi portfolio-section"
			id="ggi"
			tabindex="-1"
			aria-labelledby="ggi-title"
		>
			<div class="portfolio-wrap project-split project-split-reverse">
				<div class="project-narrative">
					<p class="project-context">Product architecture &amp; delivery / ESTAZ</p>
					<h2 id="ggi-title">GGI</h2>
					<p class="project-statement">The competition runs<br />on the system.</p>
					<p class="project-body">
						An esports tournament platform for gamers in Iraq, replacing manually coordinated
						competition operations with an automated operating model.
					</p>
					<div class="role-note">
						<h3>CTO at ESTAZ</h3>
						<p>Lead developer / solution architect</p>
					</div>
					<p class="project-body">
						Tournament formats, fixtures, Discord channels and leaderboards connect the organising
						work to the participant experience.
					</p>
					<div class="delivery-evidence">
						<h3>Delivery evidence</h3>
						<p>
							MVP in approximately three months; full functionality in approximately six months.
						</p>
						<p>More than 5,000 users registered during the first three months.</p>
					</div>
				</div>
				<GgiSystem />
			</div>
		</section>

		<section
			class="portfolio-approach portfolio-section"
			id="capabilities"
			tabindex="-1"
			aria-labelledby="approach-title"
		>
			<div class="portfolio-wrap">
				<header class="approach-heading">
					<h2 id="approach-title">The complete problem.<br />Not just one part of it.</h2>
					<p>
						Executive operating experience, architectural thinking and hands-on development belong
						in the same conversation.
					</p>
				</header>
				<ol class="approach-sequence">
					{#each method as item}<li>
							<h3>{item.name}</h3>
							<p class="approach-output">{item.output}</p>
							<p>{item.evidence}</p>
						</li>{/each}
				</ol>
				<details class="portfolio-disclosure">
					<summary>Capabilities behind the work<span aria-hidden="true">+</span></summary>
					<div class="capability-detail">
						{#each capabilities as capability}<div>
								<h3>{capability.name}</h3>
								<p>{capability.purpose}</p>
								<ul>
									{#each capability.items as item}<li>{item}</li>{/each}
								</ul>
							</div>{/each}
					</div>
				</details>
			</div>
		</section>

		<section
			class="portfolio-research portfolio-section"
			id="research"
			tabindex="-1"
			aria-labelledby="research-title"
		>
			<div class="portfolio-wrap">
				<header class="research-heading">
					<h2 id="research-title">Designing the systems<br />around intelligence.</h2>
					<p>
						Independent R&amp;D into digital workforces and reliable context for AI-assisted
						development.
					</p>
				</header>
				<article class="research-project solomon-project">
					<div class="research-narrative">
						<p class="project-context">Independent R&amp;D / Operating-system concept</p>
						<h3>SolomonOS</h3>
						<p class="research-statement">A workforce needs<br />an operating model.</p>
						<p>
							SolomonOS is a Digital Workforce Operating System for creating and operating
							AI-powered digital employees. Each digital employee has a defined organisational role,
							persistent knowledge, specialised skills, behavioural rules and controlled access to
							the capabilities required to perform its work.
						</p>
						<p>
							Its proprietary engines coordinate cognition, knowledge, skills, authority and
							collaboration while preserving organisational context and human oversight. The
							architecture is LLM-independent, separating the digital employee and its operating
							environment from the underlying language model.
						</p>
						<p class="maturity-note">Work in progress.</p>
					</div>
					<SolomonSystem />
				</article>
				<article class="research-project keystone-project">
					<div class="research-narrative keystone-intro">
						<p class="project-context">Independent R&amp;D / Knowledge &amp; context</p>
						<h3>Keystone</h3>
						<p class="research-statement">Context is an<br />architecture problem.</p>
					</div>
					<div class="keystone-signals">
						<div class="keystone-target">
							<h4>Target</h4>
							<p class="keystone-target-value">−80% context tokens</p>
							<p class="keystone-validation-status">Live-project validation pending</p>
						</div>
						<div class="keystone-self-application">
							<h4>Built with Keystone</h4>
							<p>
								Early Keystone context structures were used in the development of Keystone itself.
							</p>
						</div>
					</div>
					<div class="keystone-copy">
						<p>
							AI-assisted development loses coherence when decisions, constraints and working
							knowledge are scattered, repeatedly reconstructed, or pushed back through the model as
							expensive context.
						</p>
						<p>
							Keystone is a work-in-progress repo-native context system designed to make project
							knowledge structured, persistent and inspectable through deterministic artifacts,
							indexing, validation and relationships.
						</p>
						<p>
							The target is an 80% reduction in context-token usage while preserving the information
							needed for effective AI-assisted development. This target will be measured and
							validated against a live software project rather than treated as an assumed benefit.
						</p>
						<p>
							Keystone is already helping build Keystone. Early versions of its own context
							architecture were used during Keystone's development, allowing the project to
							progressively manage specifications, decisions, tasks and implementation context using
							the system it was creating.
						</p>
						<p class="maturity-note">
							Independent R&amp;D. Once the architecture and token-reduction target have been
							validated in real project use, the intention is to release Keystone under an
							appropriate licence.
						</p>
					</div>
					<KeystoneSystem />
				</article>
				<details class="portfolio-disclosure earlier-research">
					<summary>Earlier explorations<span aria-hidden="true">+</span></summary>
					<div class="disclosure-columns">
						<div>
							<h3>Reaptor chatbot platform</h3>
							<p class="maturity-note">Earlier independent product R&amp;D / Parked</p>
							<p>
								Knowledge ingestion, configurable LLM assistants, knowledge bases and embeddable
								deployment. This earlier no-code product is separate from Reaptor’s current identity
								as my professional practice.
							</p>
						</div>
						<div>
							<h3>Valsyg</h3>
							<p class="maturity-note">Supporting infrastructure exploration</p>
							<p>
								Independent R&amp;D into Solana validator infrastructure and blockchain operations.
							</p>
						</div>
					</div>
				</details>
			</div>
		</section>

		<section
			class="portfolio-experience portfolio-section"
			id="experience"
			tabindex="-1"
			aria-labelledby="experience-title"
		>
			<div class="portfolio-wrap experience-composition">
				<header>
					<p class="project-context">Experience</p>
					<h2 id="experience-title">Depth behind<br />the work.</h2>
					<p class="section-introduction">
						Decades of responsibility for organisations, operations and technology across
						international environments.
					</p>
				</header>
				<div class="experience-register">
					{#each recentExperience as role}<article>
							<p class="experience-period">{role.period}</p>
							<div>
								<h3>{role.organisation}</h3>
								<p class="experience-role">{role.role}</p>
								{#if role.location}<p class="experience-location">{role.location}</p>{/if}
							</div>
						</article>{/each}
				</div>
				<div class="earlier-experience">
					<p>
						Earlier leadership spans COO and operations roles, contracts, procurement, supply chain,
						energy, infrastructure and Defence.
					</p>
					<details class="portfolio-disclosure">
						<summary>Earlier international experience<span aria-hidden="true">+</span></summary>
						<div class="earlier-register">
							{#each earlierExperience as role}<article>
									<p>{role[0]}</p>
									<div>
										<h3>{role[1]}</h3>
										<p>{role[2]} / {role[3]}</p>
									</div>
								</article>{/each}
						</div>
					</details>
				</div>
			</div>
		</section>

		<section
			class="portfolio-about portfolio-section"
			id="about"
			tabindex="-1"
			aria-labelledby="about-title"
		>
			<div class="portfolio-wrap about-composition">
				<div>
					<p class="project-context">About Edward</p>
					<h2 id="about-title">A consistent thread.<br />An expanding toolkit.</h2>
					<div class="career-thread" aria-label="Career thread">
						<span>Complex organisations</span><span>Operational problems</span><span
							>Technology &amp; systems</span
						><span>Intelligent transformation</span>
					</div>
				</div>
				<div class="about-prose">
					<p>My career has centred on making complex organisations work better.</p>
					<p>
						Across executive operations, CTO and COO roles, consulting, contracts, procurement and
						technology ventures, the recurring question has been how people, processes and
						technology can work together more effectively.
					</p>
					<p>
						AI extends that thread. I bring the operating context, shape the system and work through
						the practical details of building it and bringing it into use.
					</p>
					<p class="about-geography">
						International experience across APAC, the Middle East, Africa, Australia and Latin
						America.
					</p>
				</div>
			</div>
		</section>

		<section
			class="portfolio-contact portfolio-section"
			id="contact"
			tabindex="-1"
			aria-labelledby="contact-title"
		>
			<div class="portfolio-wrap">
				<div class="contact-composition">
					<div>
						<h2 id="contact-title">Let’s talk about<br />what comes next.</h2>
						<p>
							Senior permanent leadership opportunities and selective transformation / technology
							advisory engagements.
						</p>
						<a class="contact-email" href={`mailto:${email}`}
							>{email}<ArrowUpRight aria-hidden="true" size={28} /></a
						>
					</div>
					<address>
						<p class="contact-name">Edward Batt</p>
						<p>Jakarta Region, Indonesia</p>
						<a href="tel:+6281294352999">+62 812 9435 2999</a>
					</address>
				</div>
				<footer class="portfolio-footer">
					<a class="portfolio-wordmark" href="#top" onclick={() => navigate('top')}>REAPTOR</a>
					<p>AI transformation / Intelligent systems / Technology strategy</p>
					<p>© {new Date().getFullYear()} Edward Batt</p>
				</footer>
			</div>
		</section>
	</main>
</div>
