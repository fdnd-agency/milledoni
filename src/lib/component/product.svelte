<script>
    let { product } = $props()
</script>

<!-- HTML structure for each card -->
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
	/* Styling and inner placement for each card */
	li{
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

			/* Placement of the 'bekijk product' link */
			a {
				font-family: "Parkisans";
				font-weight: bold;
				text-decoration: none;
				display: flex;
				align-items: center;
				gap: 2px;
				color: hsl(167, 100%, 25%);
			}

			/* Increases the size of the element while hovering */
			a:hover {
				font-size: 1.1rem;
			}

			/* Added an height so all the elements stay in place while hovering, which causes the element to increase */
			.bekijk-product-btn {
				height: 1.5rem;
			}

			/* Styling of the product title */
			h3 {
				font-size: 1.2rem, 3vw, 2rem;
				max-width: 13rem;
				height: 2.5rem;
				color: #212121;
			}

			/* rounding the corners of the img */
			img {
				border-radius: 1rem;
			}

			/* Increases the size of the element while hovering */
			img:hover {
				scale: 1.02;
			}

			/* Placement like button */
			form {
				display: flex;
				justify-items: start;
				align-items: center;
				gap: 5px;
				width: 100%;
			}

			/* While hovering letting the user know it's clickable */
			form, button {
				cursor: pointer;
			}

			/* Like button */
			button {
				display: grid;
				padding: 0;
				border: none;
				background-color: #00000000;
			}

			/* Increases the size of the element while hovering */
			button:hover {
				scale: 1.1;
			}
		}
</style>