<script lang="ts">
	import { Map, BarChart3, CalendarDays } from 'lucide-svelte';
	import { SITE_URL, EMAIL, bookingHref, BOOKING_URL } from '$lib/site';
	import { symptoms, stages, extras, capabilities, cases, testimonials, pricing } from '$lib/content';
	import { casePages, articles } from '$lib/pages';
	import Seo from '$lib/components/Seo.svelte';
	import HeroMap from '$lib/components/HeroMap.svelte';
	import CaseViz from '$lib/viz/CaseViz.svelte';
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
			'End-to-end digital transformation: process and systems mapping, solution design and architecture, custom software development, systems integration, workflow automation and AI implementation, designed and built by one person who has run operations for 30 years.',
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Digital transformation services',
			itemListElement: [...stages, ...extras].map((s: any) => ({
				'@type': 'Offer',
				itemOffered: { '@type': 'Service', name: s.name ?? s.title, description: s.happens ?? s.body }
			}))
		}
	};
	const slugFor = (id: string) => casePages.find((p) => p.id === id)?.slug ?? '';
	const featured = cases.slice(0, 3);
</script>

<Seo
	title="Edward Batt | Digital Transformation: from business problem to working software"
	description="End-to-end digital transformation. I map how your business operates, find the inefficiencies, and design and build the solution: custom software, systems integration, automation or AI. 30+ years running operations, hands-on engineering. Asia-Pacific, the Middle East and Europe."
	path="/"
	jsonld={[service]}
/>

<section class="hero">
	<div class="wrap">
		<h1>Digital transformation, from the business problem to working software.</h1>
		<p class="lead">
			I map how your business actually operates, find where it loses time and money, and design and
			build the solution myself: custom software, systems integration, automation, AI, or whichever
			combination fits the problem.
		</p>
		<div class="hero-cta">
			<a class="btn" href={bookingHref} target={bookingTarget} rel="noopener">Let’s discuss your business challenges</a>
			<a class="btn ghost" href="/services/">How I work</a>
		</div>
	</div>
</section>

<section class="band" aria-label="From understanding the business to a working system">
	<div class="wrap band-inner band-stacked">
		<div class="band-copy">
			<div>
				<p class="eyebrow">One person, the whole journey</p>
				<h2>Understand the operation. Then build what changes it.</h2>
			</div>
			<div>
				<p>
					Thirty years running operations, contracts and procurement, then a decade designing and
					building software. I do both halves of digital transformation: the analysis that most
					consultants stop at, and the engineering that most developers start without.
				</p>
				<div class="band-stats">
					<div><b>30+</b><span>years of international operations and executive experience</span></div>
					<div><b>6 weeks</b><span>from mapping to a working pilot platform</span></div>
					<div><b>3</b><span>working languages</span></div>
				</div>
			</div>
		</div>
		<HeroMap />
	</div>
</section>
<div class="wrap quick">
	<div class="quick-inner">
		<strong>Quick links</strong>
		<a href="/services/"><Map aria-hidden="true" />How I work</a>
		<a href="/work/"><BarChart3 aria-hidden="true" />Results</a>
		<a href={bookingHref} target={bookingTarget} rel="noopener"><CalendarDays aria-hidden="true" />Book a call</a>
	</div>
</div>

<section class="section" id="problem">
	<div class="wrap">
		<div class="section-head center"><h2 class="h2">Where it usually starts.</h2></div>
		<div class="symptoms">
			{#each symptoms as s}
				<div class="symptom"><h3>{s.title}</h3><p>{s.body}</p></div>
			{/each}
		</div>
		<p class="problem-close">
			These are rarely technology problems. They are operating problems that need the right
			technology, chosen and built to fit the business rather than the other way around.
		</p>
	</div>
</section>

<section class="section alt" id="how">
	<div class="wrap">
		<div class="section-head center">
			<h2 class="h2">The full lifecycle, or the part you need.</h2>
			<p class="lead">From discovery to a deployed system in five stages. Start at the beginning, or come in where you already know what you need built.</p>
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
		<p class="center-link"><a class="btn ghost" href="/services/">Services, in detail</a></p>
	</div>
</section>

<section class="section" id="results">
	<div class="wrap">
		<div class="section-head center">
			<h2 class="h2">Mapped, built and running.</h2>
			<p class="lead">Operational requirements turned into working systems. I designed and built each of these myself.</p>
		</div>
		<div class="teasers">
			{#each featured as c}
				<article class="teaser">
					<div class="teaser-body">
						<div>
							<span class="chip ai">{c.kicker}</span>
							<h3><a href={`/work/${slugFor(c.id)}/`}>{c.title}</a></h3>
							<p>{c.problem}</p>
						</div>
						<p class="teaser-outcome">{c.outcome}<br /><a class="more" href={`/work/${slugFor(c.id)}/`}>Read the case study</a></p>
					</div>
					<CaseViz variant={c.id} />
				</article>
			{/each}
		</div>
		<p class="center-link"><a class="btn ghost" href="/work/">All work</a></p>
	</div>
</section>

<section class="section alt" id="capabilities">
	<div class="wrap">
		<div class="section-head center">
			<h2 class="h2">How I build.</h2>
			<p class="lead">Hands-on engineering, not recommendations. The technology is chosen to fit the problem.</p>
		</div>
		<div class="symptoms">
			{#each capabilities as c}
				<div class="symptom"><h3>{c.title}</h3><p>{c.body}</p></div>
			{/each}
		</div>
	</div>
</section>

<section class="section" id="testimonials">
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

<section class="section alt" id="insights">
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

<section class="section" id="pricing">
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
			<p class="lead">Every engagement is scoped and priced before it starts, whether that is a mapping exercise, a custom build, an integration or a technical review. You know the full cost before you commit.</p>
			<p class="lead"><a href="/services/#questions">Common questions</a> about how I work, your data and code, and whether you have to start with mapping.</p>
		</div>
	</div>
</section>

<Cta />
