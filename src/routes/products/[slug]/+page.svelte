<script>
    import Menu from "$lib/components/menu.svelte";

    export let data;
</script>

<Menu />

<main>
    {#if data.product}
        <section class="product-grid">
            <figure class="product-image">
                <img src={data.product.image} alt={data.product.name} />
            </figure>

            <article class="product-info">
                <h2>{data.product.name}</h2>
                <p>{data.product.description}</p>
                <p>Price: ${data.product.amount}</p>
            </article>

            <div class="product-extra">
                <h2>Hier staat content</h2>
            </div>
        </section>
    {:else}
        <section class="product-grid">
            <figure class="product-image skeleton-box"></figure>

            <article class="product-info">
                <h2 class="skeleton-text skeleton-title visually-hidden">
                    Loading title
                </h2>
                <p class="skeleton-text"></p>
                <p class="skeleton-text skeleton-price"></p>
            </article>

            <div class="product-extra">
                <h2 class="skeleton-text skeleton-title visually-hidden">
                    Loading title
                </h2>
            </div>
        </section>
    {/if}
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

    .product-info p:nth-child(3) {
        font-size: 2rem;
        font-weight: var(--font-weight-bold);
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

    .skeleton-box,
    .skeleton-text {
        background-color: #eee;
        border-radius: 4px;
        position: relative;
        overflow: hidden;
    }

    .skeleton-box::after,
    .skeleton-text::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
        );
        animation: shimmer 1.5s infinite;
    }

    .skeleton-box {
        width: 100%;
        aspect-ratio: 4 / 3;
        margin-bottom: 1rem;
    }

    .skeleton-title {
        height: 2rem;
        width: 70%;
        margin-bottom: 1rem;
    }

    .skeleton-text {
        height: 1rem;
        width: 100%;
        margin-bottom: 0.5rem;
    }

    .skeleton-price {
        width: 40%;
    }

    @keyframes shimmer {
        100% {
            left: 100%;
        }
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
        border: 0;
    }
</style>
