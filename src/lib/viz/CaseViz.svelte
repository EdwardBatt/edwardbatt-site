<script lang="ts">
	import AgencyViz from './AgencyViz.svelte';
	import EsportsViz from './EsportsViz.svelte';
	import InvoiceViz from './InvoiceViz.svelte';
	import KeystoneViz from './KeystoneViz.svelte';
	let { variant }: { variant: string } = $props();
</script>

{#if variant === 'agency'}<AgencyViz />
{:else if variant === 'esports'}<EsportsViz />
{:else if variant === 'ap'}<InvoiceViz />
{:else if variant === 'keystone'}<KeystoneViz />
{/if}
