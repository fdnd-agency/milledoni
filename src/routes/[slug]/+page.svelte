<script>
  let { data } = $props();

  import { Product } from "$lib";
  import { Filter } from "$lib";

  const product = data.product;
  const tags = data.tags;
</script>

<h1>{product.name}</h1>