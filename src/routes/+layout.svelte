<script lang="ts">
	import '$lib/site.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<Nav />
<main id="top">
	{@render children()}
</main>
<Footer />
