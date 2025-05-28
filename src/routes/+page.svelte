<script>
  import { Card11 } from "$lib/index.js";
  import { Icons } from "$lib/index.js";
  export let data;

  let { products, tags, search, loggedIn } = data;
  let selectedTags = [];
  let filteredProducts = [...products];

  if (typeof window !== "undefined") {
    if (!loggedIn) {
      window.addEventListener("searchupdate", (e) => {
        const q = e.detail.toLowerCase();
        filteredProducts = products.filter((product) =>
          product.name.toLowerCase().includes(q)
        );
      });
    } else {
      window.addEventListener("updateFilters", (e) => {
        selectedTags = e.detail.map((tag) => tag.toLowerCase());

        if (selectedTags.length === 0) {
          filteredProducts = [...products];
          return;
        }

        filteredProducts = products
          .map((product) => {
            const rawTags = product.tags ?? "";
            const productTags = rawTags.split(",").map((t) =>
              t
                .trim()
                .toLowerCase()
                .replace(/^'+|'+$/g, "")
            );

            const matchCount = selectedTags.reduce(
              (count, tag) => (productTags.includes(tag) ? count + 1 : count),
              0
            );

            return { ...product, matchCount };
          })
          .filter((p) => p.matchCount > 0)
          .sort((a, b) => b.matchCount - a.matchCount);
      });
    }
  }
</script>

<section class="main-content">
  <article class={`product-card_container ${!loggedIn ? "full-width" : ""}`}>
    <button class="filter-button">
      <Icons name="filter" width="47px" height="47px"></Icons>
      FILTER
    </button>
    <Card11 data={{ products: filteredProducts }} />
  </article>
</section>

<style>
  .full-width {
    width: 100vw;
    max-width: none;
  }

  @media (min-width: 1024px) {
  .main-content {
    max-width: 65.28vw;
    width: 65.28vw;
    display: grid;
    gap: 20px;
  }
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
