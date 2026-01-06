<script>
  let { data } = $props();

  import { Product } from "$lib";
  import { Filter } from "$lib";

  const product = data.product;
  const tags = data.tags;
</script>

<h1>{product.name}</h1>
<span>{product.amount}</span>
<p>{product.description}</p>
<p>{product.tags}</p>
<span>{product.spotter}</span>

<h2>Vind je kado</h2>
<p>{product.tags}</p>