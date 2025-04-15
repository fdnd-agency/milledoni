<script>
    export let data;
</script>

<main>
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
    <h2>Users</h2>
    {#each data.users as user}
        <ul>
            <li>ID: {user.id}</li>
            <li>NAME: {user.name}</li>
            <li>SAVED PRODUCTS: {user.saved_products}</li>
        </ul>
        <hr>
    {/each}

    <h2>Products</h2>
    {#each data.products as product}
    <ul>
        <li>SORT: {product.sort}</li>
        <li>ID: {product.id}</li>
        <li>IMAGE: <img src="{product.image}" alt=""></li>
        <li>SHOP URL: <a href="{product.shop_url}">{product.shop_url}</a></li>
        <li>DESCRIPTION: {product.description}</li>
        <li>TAGS: {product.tags}</li>
        <li>NAME: {product.name}</li>
        <li>SPOTTER: {product.spotter}</li>
        <li>SHOP_NAME: {product.shop_name}</li>
        <li>SLUG: {product.slug}</li>
        <li>URL: {product.url}</li>
        <li>AMOUNT: {product.amount}</li>
    </ul>
    <hr>
{/each}

</main>