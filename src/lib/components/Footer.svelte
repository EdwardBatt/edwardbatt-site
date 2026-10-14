<script lang="ts">
	import { EMAIL, LINKEDIN_URL } from '$lib/site';
</script>

<footer class="site-footer">
	<div class="wrap footer-grid">
		<div>
			<div class="footer-brand">Edward Batt</div>
			<p>Digital transformation from the business problem to working software: mapping, solution design, custom development, integration, automation and AI.</p>
		</div>
		<nav aria-label="Footer">
			<a href="/services/">Services</a>
			<a href="/work/">Work</a>
			<a href="/insights/">Insights</a>
			<a href="/about/">About</a>
			<a href="/contact/">Contact</a>
		</nav>
		<nav aria-label="Regions">
			<a href="/regions/southeast-asia/">Southeast Asia</a>
			<a href="/regions/middle-east/">Middle East</a>
		</nav>
		<div class="footer-contact">
			<a href={`mailto:${EMAIL}`}>{EMAIL}</a>
			<a href={LINKEDIN_URL} target="_blank" rel="noopener">LinkedIn</a>
		</div>
	</div>
	<div class="wrap footer-base">
		<span>© {new Date().getFullYear()} Edward Batt</span>
		<span>Based in Indonesia, working across Asia-Pacific, the Middle East and Europe</span>
	</div>
</footer>
