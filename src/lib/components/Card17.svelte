<script>
    import PurpleCard from "$lib/atoms/purpleCard.svelte";
    // import BrownCard from '$lib/atoms/brownCard.svelte';
    // import BlueCard from '$lib/atoms/blueCard.svelte';

    export let data;
</script>

<div class="product-list">
    {#each data.products as product}
        <a
            href="/"
            class="product-card"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div class="product-card_wrapper">
                <PurpleCard></PurpleCard>
            </div>

            <article class="product-info">
                <p>{product.slug}</p>
            </article>
        </a>
    {/each}
</div>

<!-- OLD CODE -->
<!-- {#each data.products as product}
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
{/each} -->

<style>
    .product-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    .product-card {
        display: block;
        width: 17rem;
        height: 20rem;
        text-decoration: none;
        border: 1px solid #ddd;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: #882B7D;
        transition:
            transform 0.2s,
            box-shadow 0.2s;
    }

    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .product-info {
        padding: 15px;
        text-align: center;
        z-index: 1;
    }

    .product-card_wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .product-card_wrapper > :global(svg), 
    .product-card_wrapper > :global(div) {
        width: 100%;
        height: 100%;
    }

    /* .product-amount {
        margin: 10px 0 0;
        font-size: 1rem;
        color: #555;
    } */
</style>
