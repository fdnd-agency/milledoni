<script>
  let { data } = $props();
  import image from "$lib/assets/filter-bg.svg";

  //import products component
  import { Product } from "$lib";
  import { Filter } from "$lib";

  const products = data.product;
  const tags = data.tags;
</script>

<Filter {tags} />

<ul>
  {#each products as product}
    <Product {product} />
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 2em;
  }
</style>
