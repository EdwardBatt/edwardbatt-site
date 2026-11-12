<script lang="ts">
	import { EMAIL } from '$lib/site';
	import { openCookieSettings } from '$lib/consent';
	import Seo from '$lib/components/Seo.svelte';
</script>

<!-- DRAFT wording for Edward's review. Not legal sign-off. -->

<Seo
	title="Privacy | Edward Batt"
	description="How edwardbatt.com uses Google Analytics, what it collects, and how to change your cookie choice."
	path="/privacy/"
/>

<section class="page-head">
	<div class="wrap">
		<h1>Privacy</h1>
		<p class="lead">This site collects as little as it can. This page says what that is.</p>
	</div>
</section>

<section class="section">
	<div class="wrap prose">
		<h2>Google Analytics</h2>
		<p>
			I use Google Analytics, a service from Google, to understand how visitors use this site:
			which pages are read, how people arrive (for example from a search engine or a link), and
			roughly where they are in the world. This helps me see which pages are useful.
		</p>
		<p>
			With your consent, Google Analytics sets cookies in your browser (named <code>_ga</code> and
			<code>_ga_</code> followed by an ID) and collects information such as the pages you visit, the
			time spent on them, your browser and device type, your approximate location derived from
			your IP address, and the referring site. I do not use this data for advertising, and
			advertising features are switched off.
		</p>
		<h2>Cookies are only set with your consent</h2>
		<p>
			When you first visit, a banner asks whether you allow analytics cookies. Until you accept,
			no analytics cookies are set. The Google tag still loads, and Google may receive limited,
			cookieless signals (for example, that a page was viewed) without identifiers stored on your
			device. Your choice is remembered in your browser’s local storage, not in a cookie.
		</p>
		<h2>Changing your mind</h2>
		<p>
			You can withdraw or give consent at any time through
			<button type="button" class="inline-link link-button" onclick={openCookieSettings}>Cookie settings</button>,
			also linked in the footer of every page. Choosing Reject stops analytics cookies being used
			and removes the ones already set by this site. You can also clear cookies in your browser
			settings, or install Google’s
			<a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">opt-out browser add-on</a>.
		</p>
		<p>
			How Google handles this data is described in
			<a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">How Google uses information from sites that use its services</a>.
		</p>
		<h2>Contact</h2>
		<p>
			If you email me, I use your message and address only to reply. For any question about your
			data, write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
		</p>
	</div>
</section>
