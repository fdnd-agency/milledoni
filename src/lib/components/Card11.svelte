<script>
	export let data;
	export let selectedTags = [];

	$: filteredProducts = selectedTags.length === 0
		? data.products
		: data.products.filter(product => {
			const productTags = typeof product.tags === 'string'
				? product.tags.split(',').map(t => t.trim().toLowerCase().replace(/^'+|'+$/g, ''))
				: [];

			return productTags.some(tag => selectedTags.includes(tag));
		});
</script>

<div class="product-list">
	{#each filteredProducts as product}
		<a href="{product.url}" class="product-card" target="_blank" rel="noopener noreferrer">
			<img src="{product.image}" alt="{product.name}" class="product-image">
			<article class="product-info">
				<h2 class="product-title">{product.name}</h2>
			</article>
		</a>
	{/each}
</div>


<style>
    .product-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 15px;
        padding: 10px 20px 20px 20px;
        height: 100vh;
        overflow-y: auto;
    }

    .product-card {
        display: block;
        height: 23rem;
        text-decoration: none;
        border: 1px solid #ddd;
        padding: 0.2rem 0.2rem 0.4rem 0.2rem;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: var(--bg-card-color);
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .product-image {
        width: 100%;
        height: 70%;
        object-fit: cover;
    }

    .product-info {
        padding: 15px;
        text-align: center;
    }

    .product-title {
        margin: 0;
        font-size: 1.2rem;
        color: var(--icon-color);
        text-align: left;
        max-width: 25ch;
    }

    /* .product-amount {
        margin: 10px 0 0;
        font-size: 1rem;
        color: #555;
    } */
</style>

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