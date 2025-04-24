<script>
    import Card17 from '$lib/components/Card17.svelte';
    import Menu from '$lib/components/menu.svelte';
    export let data;
</script>

<Menu></Menu>

<main>
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
    <h2>Users</h2>
    {#each data.users as user}
        <!-- <ul>
            <li>ID: {user.id}</li>
            <li>NAME: {user.name}</li>
            <li>SAVED PRODUCTS: {user.saved_products}</li>
        </ul>
        <hr> -->
    {/each}

    <h2>Products</h2>
        <main> 
            <Card17 data={data}></Card17>
        </main>


</main>