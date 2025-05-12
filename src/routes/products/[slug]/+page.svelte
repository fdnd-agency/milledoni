<script>
    export let data;
</script>

<main>
    <h1>Product Details for {data.slug}</h1>

    <section class="product-grid">
        <figure class="product-image">
            <img src={data.product[0].image} alt={data.product[0].name} />
        </figure>

        <article class="product-info">
            <h2>{data.product[0].name}</h2>
            <p>{data.product[0].description}</p>
            <p><strong>Price:</strong> ${data.product[0].price}</p>
        </article>

        <!-- Placeholder for future content -->
        <div class="product-extra">
            <!-- Future content like reviews, specs, etc. goes here -->
        </div>
    </section>
</main>

<style>

    main {
        margin: 3rem;
    }

    h1 {
        margin-bottom: 3rem;
    }
    .product-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-top: 1rem;
        align-items: start;
    }

    .product-image {
        margin: 0;
    }

    .product-image img {
        width: 90%;
        height: 35rem;
        border-radius: 0.5rem;
        display: block;
    }

    .product-info {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .product-grid .product-extra {
        grid-column: 1 / -1;
        margin-top: 2rem;
    }
</style>
