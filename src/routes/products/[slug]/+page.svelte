<script>
    export let data;
</script>

<main>
    <h1>Product Details for {data.slug}</h1>
    {#if data.product}
        <h2>{data.product.name}</h2>
        <p>{data.product.description}</p>
        <p>Price: ${data.product.price}</p>
        <img src={data.product.image} alt={data.product.name} />
    {:else}
        <p>Product not found.</p>
    {/if}
</main>