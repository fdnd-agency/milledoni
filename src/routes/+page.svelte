<script>
    import { Card11 } from "$lib/index.js";
    import { Icons } from "$lib/index.js";

    export let data;
    let { products, search, loggedIn } = data;
    let filteredProducts = [...products];
    let selectedTags = [];
    let shuffling = false;

    // Shuffle function (Fisher-Yates)
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function randomizeProducts() {
        shuffling = true; 
        filteredProducts = shuffle([...filteredProducts]);
        setTimeout(() => {
            shuffling = false; 
        }, 400);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('searchupdate', (e) => {
        const q = e.detail.toLowerCase();
        filteredProducts = products.filter(product =>
          product.name.toLowerCase().includes(q)
        );
      });
    }
</script>

<main>
    <section class="main-content">
        <article class={`product-card_container ${!loggedIn ? 'full-width' : ''}`}>
            <button class="filter-button" on:click={randomizeProducts}>
                <Icons name="filter" width="47px" height="47px"></Icons>
                FILTER
            </button>
            <Card11 data={{ products: filteredProducts }} shuffling={shuffling} />
        </article>
    </section>
</main>

<style>
    .full-width {
		width: 100vw;
		max-width: none;
	}

    .main-content {
        max-width: 65.28vw;
        width: 65.28vw;
        display: grid;
        /* grid-template-columns: 1fr 2fr; */
        gap: 20px;
    }

    .product-card_container {
        background-color: var(--bg-cs-color);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }

    .filter-button {
        background-color: var(--bg-cs-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        width: fit-content;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 10px 0 0 10px;
    }
</style>