<script>
	import Menu from '$lib/components/Menu.svelte';
	import Chat from '$lib/components/Chat.svelte';

	export let data;
	let { search, currentPath, loggedIn } = data;
</script>

<Menu {search} {currentPath} {loggedIn} />

<main class:logged-out={!loggedIn} class:with-chat={loggedIn}>
	{#if loggedIn}
		<Chat />
	{/if}
	<slot />
</main>

<style>
	main.logged-out {
		width: 100vw;
		max-width: none;
	}

	main.with-chat {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 20px;
		align-items: start;
	}
</style>
