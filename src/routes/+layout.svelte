<script>
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/component/Header.svelte';
	import "../style.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

{@render children?.()}
