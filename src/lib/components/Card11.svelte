<script>
    export let data;
</script>

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

