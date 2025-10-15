<script>
  let { data } = $props();

  //import products component
  import { Product } from "$lib";

  const products = data.product;
  const tags = data.tags;

</script>

<h1>dit is een test</h1>

<form>
  <label for="tag-select">Kies een tag:</label>
  <select id="tag-select">
    <option value="">Alle tags</option>
    {#each tags as tag}
      <option value={tag}>{tag}</option>
    {/each}
  </select>
</form>

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
    gap: 2em;
  }
</style>
