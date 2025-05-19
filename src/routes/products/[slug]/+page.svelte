<script>
    import Menu from "$lib/components/menu.svelte";

    export let data;
</script>

<Menu/>

<main>

    <section class="product-grid">
        <figure class="product-image">
            <img src={data.product.image} alt={data.product.name} />
        </figure>

        <article class="product-info">
            <h2>{data.product.name}</h2>
            <p>{data.product.description}</p>
            <p><strong>Price:</strong> ${data.product.price}</p>
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

    h2 {
        font-size: var(--font-size-card-title);
        font-weight: var(--font-weight-bold);
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
