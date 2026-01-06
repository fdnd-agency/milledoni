<script>
  let { data } = $props();

  import { Product } from "$lib";
  import { Filter } from "$lib";

  const product = data.product;
  const cleanTags = data.cleanTags;
</script>
<a href="/">Terug naar home</a>

<h1>{product.name}</h1>
<span>€{product.amount}</span>

<main>
  <p>{product.description}</p>
  <p>{product.tags}</p>
  <span>{product.spotter}</span>

  <h2>Vind je kado</h2>
  <ul>
  {#each cleanTags as tag}
    <li>{tag}</li>
  {/each}
  </ul>

</main>

<style>

</style>
