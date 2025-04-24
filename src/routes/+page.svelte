<script>
    // import PurpleCard from '$lib/atoms/purpleCard.svelte';
    // import BrownCard from '$lib/atoms/brownCard.svelte';
    // import BlueCard from '$lib/atoms/blueCard.svelte';
    import Card11 from '$lib/components/Card11.svelte';
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
            <Card11 data={data}></Card11>
        </main>


</main>