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
            <p><strong>Price:</strong> ${data.product.amount}</p>
        </article>

        <!-- Placeholder for future content -->
        <div class="product-extra">
            <h2> Hier staat content</h2>>
        </div>
    </section>
</main>

<style>

    main {
        margin: 5rem 7rem 0rem 7rem;
    }

    h2 {
        font-size: 4rem;
        font-weight: var(--font-weight-bold);
    }

    .product-info p {
        font-size: 1.1rem;
        font-weight: var(--font-weight-regular);
    }
    .product-grid {
        display: grid;
        grid-template-columns: 5fr 4fr;
        margin-top: 1rem;
        gap: 2rem;
        align-items: start;
    }

    .product-image {
        margin: 0;
    }

    .product-image img {
        width: 100svh;
        height: 70svh;
        border-radius: 0.5rem;
        padding-right: 4rem;
        display: block;
        object-fit: cover;
    }

    .product-info {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-right: 5rem;
    }

    .product-grid .product-extra {
        grid-column: 1 / -1;
        margin-top: 2rem;
    }
</style>
