<script lang="ts">
	import { Map, BarChart3, CalendarDays } from 'lucide-svelte';
	import { SITE_URL, EMAIL, bookingHref, BOOKING_URL } from '$lib/site';
	import { symptoms, stages, extras, cases, testimonials, pricing } from '$lib/content';
	import { casePages, articles } from '$lib/pages';
	import Seo from '$lib/components/Seo.svelte';
	import HeroMap from '$lib/components/HeroMap.svelte';
	import CaseDiagram from '$lib/components/CaseDiagram.svelte';
	import Cta from '$lib/components/Cta.svelte';

	const bookingTarget = BOOKING_URL ? '_blank' : undefined;
	const service = {
		'@type': 'ProfessionalService',
		'@id': `${SITE_URL}#service`,
		name: 'Edward Batt — Digital Transformation',
		url: SITE_URL,
		email: EMAIL,
		founder: { '@id': `${SITE_URL}#edward-batt` },
		areaServed: ['Asia-Pacific', 'Southeast Asia', 'Australia', 'New Zealand', 'Europe', 'United Kingdom', 'Middle East'],
		description:
			'Process and systems mapping, workflow automation and practical AI for growing businesses, with people kept in control of the decisions that matter.',
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Digital transformation package',
			itemListElement: [...stages, ...extras].map((s: any) => ({
				'@type': 'Offer',
				itemOffered: { '@type': 'Service', name: s.name ?? s.title, description: s.happens ?? s.body }
			}))
		}
	};
	const slugFor = (id: string) => casePages.find((p) => p.id === id)?.slug ?? '';
</script>

<Seo
	title="Edward Batt | Digital Transformation, Workflow Automation & Practical AI"
	description="I map how your business actually works, then put in automated workflows and AI where they genuinely help. Fixed-price process mapping, roadmap and implementation across Asia-Pacific, the Middle East and Europe."
	path="/"
	jsonld={[service]}
/>

<section class="hero">
	<div class="wrap">
		<h1>Find where work gets stuck. Fix it with automation and AI that fits.</h1>
		<p class="lead">
			Process and systems mapping, workflow automation and practical AI for growing businesses, with
			people kept in control of the decisions that matter.
		</p>
		<div class="hero-cta">
			<a class="btn" href={bookingHref} target={bookingTarget} rel="noopener">Book a free 20-minute call</a>
			<a class="btn ghost" href="/services/">See how it works</a>
		</div>
	</div>
</section>

<section class="band" aria-label="What a mapped process looks like">
	<div class="wrap band-inner">
		<div>
			<p class="eyebrow">Process mapping</p>
			<h2>See the friction before you buy the software.</h2>
			<p>
				I map how your business actually runs, across people, systems and handovers, then build the
				automated workflows and AI tools that remove the friction.
			</p>
			<div class="band-stats">
				<div><b>30+</b><span>years running operations</span></div>
				<div><b>6 weeks</b><span>from mapping to a working pilot</span></div>
				<div><b>3</b><span>working languages</span></div>
			</div>
		</div>
		<HeroMap />
	</div>
</section>
<div class="wrap quick">
	<div class="quick-inner">
		<strong>Quick links</strong>
		<a href="/services/"><Map aria-hidden="true" />How it works</a>
		<a href="/work/"><BarChart3 aria-hidden="true" />Results</a>
		<a href={bookingHref} target={bookingTarget} rel="noopener"><CalendarDays aria-hidden="true" />Book a call</a>
	</div>
</div>

<section class="section" id="problem">
	<div class="wrap">
		<div class="section-head center"><h2 class="h2">Busy teams. Slipping delivery.</h2></div>
		<div class="symptoms">
			{#each symptoms as s}
				<div class="symptom"><h3>{s.title}</h3><p>{s.body}</p></div>
			{/each}
		</div>
		<p class="problem-close">
			Most businesses don’t have a technology problem. They have a workflow problem that technology is
			being asked to hide.
		</p>
	</div>
</section>

<section class="section alt" id="how">
	<div class="wrap">
		<div class="section-head center">
			<h2 class="h2">Five stages. You decide after each one.</h2>
			<p class="lead">Start with a free conversation. Mapping is a fixed price agreed up front, and the roadmap is yours whether or not I build it.</p>
		</div>
		<ol class="stage-strip">
			{#each stages as s, i}
				<li>
					<span class="num">{String(i + 1).padStart(2, '0')}</span>
					<h3>{s.name}</h3>
					<p>{s.happens}</p>
					<span class="meta">{s.price}</span>
				</li>
			{/each}
		</ol>
		<p class="center-link"><a class="btn ghost" href="/services/">The full package, in detail</a></p>
	</div>
</section>

<section class="section" id="results">
	<div class="wrap">
		<div class="section-head center">
			<h2 class="h2">Mapped, built and running.</h2>
			<p class="lead">I design and build the systems myself, so every roadmap is grounded in what can actually be delivered.</p>
		</div>
		<div class="teasers">
			{#each cases as c}
				<a class="teaser" href={`/work/${slugFor(c.id)}/`}>
					<div class="teaser-diagram"><CaseDiagram variant={c.id} /></div>
					<div class="teaser-body">
						<span class="chip ai">{c.kicker}</span>
						<h3>{c.title}</h3>
						<div class="figure"><div class="v">{c.outcomeFigure}</div><p class="l">{c.outcomeLabel}</p></div>
						<span class="more">Read the case study</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="section alt" id="testimonials">
	<div class="wrap">
		<div class="section-head center"><h2 class="h2">What clients say.</h2></div>
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

<section class="section" id="insights">
	<div class="wrap">
		<div class="section-head center"><h2 class="h2">Insights.</h2></div>
		<div class="article-grid">
			{#each articles.slice(0, 3) as a}
				<a class="article-card" href={`/insights/${a.slug}/`}>
					<h3>{a.title}</h3>
					<p>{a.description}</p>
					<span class="meta">{a.minutes} min read</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="section alt" id="pricing">
	<div class="wrap pricing">
		<div>
			<h2 class="h2">A fixed price before anything starts.</h2>
			<div class="prices">
				{#each pricing as p}
					<div class="price"><span class="rg">{p.region}</span><span class="amt">{p.range}</span><span class="nt">{p.note}</span></div>
				{/each}
			</div>
		</div>
		<div>
			<p class="lead">The price depends on how many processes are mapped and how many people and systems they involve. You know the full cost before you commit to anything.</p>
			<p class="lead"><a href="/services/#questions">Common questions</a> about how it works, your data, and what happens if mapping finds nothing worth automating.</p>
		</div>
	</div>
</section>

<Cta />
