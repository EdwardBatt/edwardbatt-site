<script lang="ts">
	import '$lib/site.css';
	import { ArrowUpRight, ArrowRight } from 'lucide-svelte';
	import { SITE_URL, EMAIL, LINKEDIN_URL, bookingHref, BOOKING_URL } from '$lib/site';
	import {
		symptoms,
		extras,
		cases,
		otherWork,
		timeline,
		pricing,
		faqs,
		stages,
		testimonials
	} from '$lib/content';
	import StageExplorer from './StageExplorer.svelte';
	import MappingExample from './MappingExample.svelte';
	import CaseDiagram from './CaseDiagram.svelte';
	import HeroMap from './HeroMap.svelte';

	const bookingLabel = 'Book a free 20-minute call';
	const bookingTarget = BOOKING_URL ? '_blank' : undefined;

	const OG_IMAGE = `${SITE_URL}og.png`;
	const personId = `${SITE_URL}#edward-batt`;
	const serviceId = `${SITE_URL}#service`;
	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': personId,
				name: 'Edward Batt',
				url: SITE_URL,
				image: `${SITE_URL}edward-batt.jpg`,
				email: `mailto:${EMAIL}`,
				jobTitle: 'Digital Transformation Consultant',
				description:
					'Digital transformation consultant with 30+ years in operations, contracts and procurement, and technology leadership as a CTO. Maps business processes and builds automated workflows and practical AI.',
				sameAs: [LINKEDIN_URL],
				knowsLanguage: ['English', 'Indonesian', 'Malay'],
				knowsAbout: [
					'Digital transformation',
					'Business process mapping',
					'Workflow automation',
					'Artificial intelligence',
					'Operations management',
					'Procurement'
				],
				address: { '@type': 'PostalAddress', addressCountry: 'ID' }
			},
			{
				'@type': 'ProfessionalService',
				'@id': serviceId,
				name: 'Edward Batt — Digital Transformation',
				url: SITE_URL,
				image: OG_IMAGE,
				email: EMAIL,
				founder: { '@id': personId },
				areaServed: ['Asia-Pacific', 'Southeast Asia', 'Australia', 'New Zealand', 'Europe', 'United Kingdom'],
				description:
					'Process and systems mapping, workflow automation and practical AI for growing businesses, with people kept in control of the decisions that matter.',
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: 'Digital transformation package',
					itemListElement: [
						...stages.map((st) => ({
							'@type': 'Offer',
							itemOffered: { '@type': 'Service', name: st.name, description: st.happens }
						})),
						...extras.map((x) => ({
							'@type': 'Offer',
							itemOffered: { '@type': 'Service', name: x.title, description: x.body }
						}))
					]
				}
			},
			{
				'@type': 'WebSite',
				url: SITE_URL,
				name: 'Edward Batt',
				publisher: { '@id': personId }
			},
			{
				'@type': 'FAQPage',
				mainEntity: faqs.map((f) => ({
					'@type': 'Question',
					name: f.q,
					acceptedAnswer: { '@type': 'Answer', text: f.a }
				}))
			}
		]
	};
</script>

<svelte:head>
	<title>Edward Batt | Digital Transformation, Workflow Automation &amp; Practical AI</title>
	<meta
		name="description"
		content="I map how your business actually works, then put in automated workflows and AI where they genuinely help. Fixed-price process mapping, roadmap and implementation across Asia-Pacific and Europe."
	/>
	<link rel="canonical" href={SITE_URL} />
	<link rel="preload" href="/fonts/sans-latin.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Edward Batt" />
	<meta property="og:title" content="Find where work gets stuck. Fix it with automation and AI that fits." />
	<meta
		property="og:description"
		content="Process and systems mapping, workflow automation and practical AI, from a former COO and CTO who builds the systems himself."
	/>
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:image" content={OG_IMAGE} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Edward Batt, Digital Transformation: find where work gets stuck, fix it with automation and AI that fits." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={OG_IMAGE} />
	<meta name="author" content="Edward Batt" />
	<meta name="theme-color" content="#f4f6f8" />
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}<\/script>`}
</svelte:head>

<header class="nav">
	<div class="wrap nav-inner">
		<a class="brand" href="#top"><span class="brand-name">Edward Batt</span><span class="brand-sep" aria-hidden="true"></span><span class="brand-role">Digital Transformation</span></a>
		<nav class="nav-links" aria-label="Sections">
			<a href="#how">How it works</a>
			<a href="#example">Example</a>
			<a href="#results">Results</a>
			<a href="#about">About</a>
			<a href="#pricing">Pricing</a>
		</nav>
		<a class="btn" href={bookingHref} target={bookingTarget} rel="noopener">Book a call</a>
	</div>
</header>

<main id="top">
	<!-- Hero -->
	<section class="hero">
		<div class="wrap">
			<div>
				<p class="eyebrow">Process mapping · Automation · Practical AI</p>
				<h1>Find where work gets stuck. <em>Fix it</em> with automation and AI that fits.</h1>
				<p class="lead">
					I map how your business actually runs, across people, systems and handovers, then build
					the automated workflows and AI tools that remove the friction. People stay in control of
					the decisions that matter.
				</p>
				<div class="hero-cta">
					<a class="btn" href={bookingHref} target={bookingTarget} rel="noopener"
						>{bookingLabel}<ArrowRight size={18} aria-hidden="true" /></a
					>
					<a class="btn ghost" href="#how">See how it works</a>
				</div>
				<div class="hero-proof">
					<span><b>30+</b>years running operations</span>
					<span><b>6 wks</b>to a working pilot</span>
					<span><b>EN · ID · MY</b>languages</span>
				</div>
			</div>
			<HeroMap />
		</div>
	</section>

	<!-- Problem -->
	<section class="section" id="problem">
		<div class="wrap">
			<div class="section-head">
				<p class="eyebrow">Sound familiar?</p>
				<h2 class="h2">Busy teams. Slipping delivery.</h2>
			</div>
			<div class="symptoms">
				{#each symptoms as s, i}
					<div class="symptom">
						<span class="n">{String(i + 1).padStart(2, '0')}</span>
						<h3>{s.title}</h3>
						<p>{s.body}</p>
					</div>
				{/each}
			</div>
			<p class="problem-close">
				Most businesses don’t have a technology problem. <span
					>They have a workflow problem that technology is being asked to hide.</span
				>
			</p>
		</div>
	</section>

	<!-- How it works -->
	<section class="section" id="how">
		<div class="wrap">
			<div class="section-head">
				<p class="eyebrow">How it works</p>
				<h2 class="h2">Five stages. You decide after each one.</h2>
				<p class="lead">
					Start with a free conversation. Mapping is a fixed price agreed up front, and the roadmap
					is yours whether or not I build it.
				</p>
			</div>
			<StageExplorer />
			<div class="extras">
				<h3>Also part of the package, when you need it</h3>
				<div class="extras-grid">
					{#each extras as x}
						<div class="extra"><h4>{x.title}</h4><p>{x.body}</p></div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Example -->
	<section class="section" id="example">
		<div class="wrap">
			<MappingExample />
		</div>
	</section>

	<!-- Results -->
	<section class="section" id="results">
		<div class="wrap">
			<div class="section-head">
				<p class="eyebrow">Results</p>
				<h2 class="h2">Mapped, built and running.</h2>
				<p class="lead">
					I design and build the systems myself, so every roadmap is grounded in what can actually
					be delivered.
				</p>
			</div>
			<div class="cases">
				{#each cases as c}
					<article class="case" id={`case-${c.id}`}>
						<div class="case-body">
							<div class="case-kicker">
								<span class="chip ai">{c.kicker}</span>
								{#if c.status}<span class="status">{c.status}</span>{/if}
							</div>
							<h3>{c.title}</h3>
							<p class="client">{c.client}</p>
							<p class="problem">{c.problem}</p>
							<ul>
								{#each c.did as item}<li>{item}</li>{/each}
							</ul>
						</div>
						<div class="case-side">
							<CaseDiagram variant={c.id} />
							<div class="figure">
								<div class="v">{c.outcomeFigure}</div>
								<p class="l">{c.outcomeLabel}</p>
								<p class="o">{c.outcome}</p>
							</div>
						</div>
					</article>
				{/each}
			</div>
			<div class="other">
				{#each otherWork as w}
					<div><h4>{w.name}</h4><p>{w.body}</p></div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section class="section" id="testimonials">
		<div class="wrap">
			<div class="section-head">
				<p class="eyebrow">What clients say</p>
				<h2 class="h2">In their words.</h2>
			</div>
			<div class="quotes">
				{#each testimonials as t}
					<figure class="quote">
						<blockquote><p>{t.quote}</p></blockquote>
						<figcaption><span class="qn">{t.name}</span><span class="qr">{t.role}</span></figcaption>
					</figure>
				{/each}
			</div>
		</div>
	</section>

	<!-- About -->
	<section class="section" id="about">
		<div class="wrap about">
			<div>
				<div class="about-id">
					<img class="portrait" src="/edward-batt.jpg" alt="Edward Batt" width="144" height="144" />
					<p class="eyebrow">About</p>
				</div>
				<h2 class="h2">An operator who builds.</h2>
				<div class="about-body lead">
					<p>
						I’m Edward Batt. For 30+ years I ran operations, contracts and procurement across
						Asia-Pacific, the Middle East, Africa, Australia and South America: oil, gas and LNG, logistics and cold
						chain, mining and infrastructure.
					</p>
					<p>
						Then I moved into technology, as CTO and now leading digital transformation for a
						regional creative agency. That combination is the point: I understand how the work is
						really done, and I can build the system that changes it.
					</p>
				</div>
			</div>
			<ol class="timeline" aria-label="Career">
				{#each timeline as t}
					<li><span class="y">{t.years}</span><span><span class="r">{t.role}</span><br /><span class="o">{t.org}</span></span></li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- Pricing + FAQ -->
	<section class="section" id="pricing">
		<div class="wrap pricing">
			<div>
				<p class="eyebrow">Pricing</p>
				<h2 class="h2">A fixed price before anything starts.</h2>
				<div class="prices">
					{#each pricing as p}
						<div class="price">
							<span class="rg">{p.region}</span>
							<span class="amt">{p.range}</span>
							<span class="nt">{p.note}</span>
						</div>
					{/each}
				</div>
				<p class="small">
					The price depends on how many processes are mapped and how many people and systems they
					involve. You know the full cost before you commit to anything.
				</p>
			</div>
			<div class="faq">
				<p class="eyebrow" style="margin-bottom: 16px">Questions</p>
				{#each faqs as f}
					<details>
						<summary>{f.q}</summary>
						<p>{f.a}</p>
					</details>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact -->
	<section class="section contact" id="contact">
		<div class="wrap contact-grid">
			<div>
				<p class="eyebrow">Next step</p>
				<h2 class="h2">Tell me where work gets stuck.</h2>
				<p class="lead">
					Twenty minutes, no charge. If mapping wouldn’t pay for itself, I’ll tell you.
				</p>
				<div class="hero-cta">
					<a class="btn" href={bookingHref} target={bookingTarget} rel="noopener"
						>{bookingLabel}<ArrowRight size={18} aria-hidden="true" /></a
					>
					<a class="btn ghost" href={LINKEDIN_URL} target="_blank" rel="noopener"
						>LinkedIn<ArrowUpRight size={16} aria-hidden="true" /></a
					>
				</div>
			</div>
			<div class="contact-lines">
				<img class="portrait small" src="/edward-batt.jpg" alt="" width="72" height="72" />
				<div><span class="k">Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
				<div><span class="k">Working with</span>Asia-Pacific and Europe, remote or on site</div>
				<div><span class="k">Based in</span>Indonesia (UTC+7)</div>
			</div>
		</div>
	</section>
</main>

<footer>
	<div class="wrap">
		<span>© {new Date().getFullYear()} Edward Batt</span>
		<span>edwardbatt.com</span>
	</div>
</footer>
