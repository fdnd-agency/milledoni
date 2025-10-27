<script>
    let { product } = $props()
</script>

<li>
	<div>
		<a tabindex="-1" href="/"><img loading="lazy" src="{product.image}" alt="test" width="200" height="200"></a>
		<h3>{product.name}</h3>
		<a class="bekijk-product-btn" href="/">Bekijk product
			<img loading="lazy" src="/images/right-arrow.svg" alt="" width="14" height="14" />
		</a>
	</div>
	<form action="post" method="get">
        <button id="likeBtn" type="submit"><img src="/images/heart-icon.svg" alt="" width="30" height="30" /></button>
        <label for="likeBtn">like</label>
 	</form>
</li>

<style>
	li{
		background-color: var(--item-main-background-color);
		background-color: #F6F5F5;
    	display: flex;
		gap: 1rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		justify-items: center;
		place-items: center;
		text-align: left;
		border: 2px solid hsl(47, 100%, 44%);
		border-radius: 1rem;
		padding: 1.50rem;
        box-sizing: border-box;

			div {
				text-decoration: none;
				color: var(--green-main);
				color: hsl(167, 100%, 26%);
				color: hsl(167, 100%, 26%);
				width: 100%;
				height: 100%;
			}

			a {
				font-family: "Parkisans";
				text-decoration: none;
				color: hsl(167, 100%, 26%);
				display: flex;
				align-items: center;
				gap: 2px;
			}

			a:hover {
				font-size: 1.1rem;
			}

			.bekijk-product-btn {
				height: 1.5rem;
			}

			h3 {
				color: var(--main-text-color);
				color: #212121;
				font-size: var(--h3-font-size);
				max-width: 13rem;
				height: 2.5rem;
			}

			img {
				border-radius: 1rem;
			}

			img:hover {
				scale: 1.02;
			}

			form {
				justify-items: start;
				align-items: center;
				display: flex;
				gap: 5px;
				width: 100%;
			}

			form, button {
				cursor: pointer;
			}

			button {
				background-color: #00000000;
				border: none;
				padding: 0;
				display: grid;
			}

			button:hover {
				scale: 1.1;
			}
		}
</style>