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

<style>
	a {
		text-decoration: none;
	}

	li{
		background-color: #f6f5f5;
    	display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		justify-items: center;
		place-items: center;
		width: 80%;
		height: 100%;
		text-align: center;

			h3{
				color: var(--main-text-color);
				font-size: var(--h3-font-size);
			}
				
			p{
				color: var(--green-main);
			}
		}
</style>