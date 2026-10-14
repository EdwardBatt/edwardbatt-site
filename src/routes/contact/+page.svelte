<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import { EMAIL, LINKEDIN_URL, bookingHref, BOOKING_URL } from '$lib/site';
	import Seo from '$lib/components/Seo.svelte';
	const bookingTarget = BOOKING_URL ? '_blank' : undefined;
</script>

<Seo
	title="Contact Edward Batt: book a free discovery call"
	description="Book a free 20-minute discovery call, or email edward@edwardbatt.com. Working with businesses across Asia-Pacific, the Middle East and Europe, remote or on site."
	path="/contact/"
/>

<section class="page-head">
	<div class="wrap">
		<h1>Tell me where work gets stuck.</h1>
		<p class="lead">Twenty minutes, no charge. If mapping wouldn’t pay for itself, I’ll tell you.</p>
	</div>
</section>

<section class="section">
	<div class="wrap contact-page">
		<div>
			<h2>Book a call</h2>
			<p>Pick a time that suits you. We’ll talk about where time, money and deadlines are being lost, and whether mapping is worth doing.</p>
			<a class="btn" href={bookingHref} target={bookingTarget} rel="noopener">Book a free 20-minute call</a>
		</div>
		<div>
			<h2>Or write to me</h2>
			<p>Tell me what you do and where the friction is. I reply within one working day.</p>
			<p class="big-link"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
			<p><a href={LINKEDIN_URL} target="_blank" rel="noopener" class="inline-link">LinkedIn <ArrowUpRight aria-hidden="true" /></a></p>
		</div>
		<div>
			<h2>Where and when</h2>
			<p>Based in Indonesia (UTC+7). I work remotely with clients across Asia-Pacific, the Middle East and Europe, and on site in Indonesia and the region when it helps.</p>
			<p>Languages: English, Bahasa Indonesia, Malay.</p>
		</div>
	</div>
</section>
