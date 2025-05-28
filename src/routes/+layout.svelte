<script>
  import Menu from "$lib/components/Menu.svelte";
  import Chat from "$lib/components/Chat.svelte";

  export let data;
  let { search, currentPath, loggedIn, tags } = data;
</script>

<Menu {search} {currentPath} {loggedIn} />

<main class:logged-out={!loggedIn} class:with-chat={loggedIn && currentPath === "/"}> <!-- Disabled chat on all other pages -->
  {#if loggedIn && currentPath === "/"} <!-- Disabled chat on all other pages -->
    <Chat
      {tags}
      on:updateFilters={(e) =>
        window.dispatchEvent(
          new CustomEvent("updateFilters", { detail: e.detail })
        )}
    />
  {/if}
  <slot />
</main>

<style>
  main.logged-out {
    width: 100vw;
    max-width: none;
  }

  @media (min-width: 1024px) {
    main.with-chat {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 20px;
      align-items: start;
    }
  }
</style>
