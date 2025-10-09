<script>
    let { product } = $props()
</script>

<li>
	<a href="/">
		<img loading="lazy" src="{product.image}" alt="test" width="200px" height="200px">
		<h3>{product.name}</h3>
		<p>Bekijk product</p>
	</a>
</li>