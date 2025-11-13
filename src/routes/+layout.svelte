<script>
	
	import { Header } from '$lib';
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/style.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

{@render children?.()}
