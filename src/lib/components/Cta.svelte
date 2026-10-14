<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import { EMAIL, LINKEDIN_URL, bookingHref, BOOKING_URL } from '$lib/site';
	let { title = 'Tell me where work gets stuck.', lead = 'Twenty minutes, no charge. If mapping wouldn’t pay for itself, I’ll tell you.' } = $props();
	const bookingTarget = BOOKING_URL ? '_blank' : undefined;
</script>

<section class="section contact" id="contact">
	<div class="wrap contact-grid">
		<div>
			<h2 class="h2">{title}</h2>
			<p class="lead">{lead}</p>
			<div class="hero-cta">
				<a class="btn" href={bookingHref} target={bookingTarget} rel="noopener">Book a free 20-minute call</a>
				<a class="btn ghost" href={LINKEDIN_URL} target="_blank" rel="noopener">LinkedIn<ArrowUpRight aria-hidden="true" /></a>
			</div>
		</div>
		<div class="contact-lines">
			<img class="portrait small" src="/edward-batt.jpg" alt="" width="72" height="72" />
			<div><span class="k">Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
			<div><span class="k">Working with</span>Asia-Pacific, the Middle East and Europe, remote or on site</div>
			<div><span class="k">Based in</span>Indonesia (UTC+7)</div>
		</div>
	</div>
</section>
