<script>
    export let data;
</script>

<main>
    <h1>Product Details for {data.slug}</h1>
    {#if data.product && data.product.length > 0}
        <h2>{data.product[0].name}</h2>
        <p>{data.product[0].description}</p>
        <p>Price: ${data.product[0].price}</p>
        <img src={data.product[0].image} alt={data.product[0].name} />
    {:else}
        <p>Product not found.</p>
    {/if}
</main>