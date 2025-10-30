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
	<form action="/" method="post">
		<button id="likeBtn" type="submit" aria-label="Like">
		  <svg width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#212121">
			<path d="M10.5,8v2C9.122,10,8,11.121,8,12.5H6C6,10.019,8.019,8,10.5,8z" />
			<path d="M21.5,5c-2.116,0-4.093,0.881-5.5,2.406C14.593,5.881,12.616,5,10.5,5C6.364,5,3,8.333,3,12.5C3,21.542,16,27,16,27s13-5.458,13-14.5C29,8.333,25.636,5,21.5,5z M16,24.797C13.378,23.521,5,18.938,5,12.5C5,9.467,7.467,7,10.5,7c1.55,0,2.982,0.626,4.03,1.762l0.735,0.797h1.47l0.735-0.797C18.518,7.626,19.95,7,21.5,7c3.033,0,5.5,2.467,5.5,5.5C27,18.938,18.622,23.521,16,24.797z" />
		  </svg>
		</button>
		<label for="likeBtn">like</label>
	</form>
</li>

<style>
	li{
		background-color: var(--background-cards-color);
    	display: flex;
		gap: var(--gap-m);
		flex-direction: column;
		justify-content: center;
		align-items: center;
		justify-items: center;
		place-items: center;
		text-align: left;
		border: 2px solid var(--accent-color-main);
		border-radius: var(--border-radius-m);
		padding: 1.50rem;
        box-sizing: border-box;
		width: 16rem;
		height: 100%;

			/* Link: bekijk product */
			a {
				text-decoration: none;
				display: flex;
				align-items: center;
				gap: var(--gap-s);
				color: var(--green-main);
			}

			a:hover {
				font-size: 1.1rem;
			}

			.bekijk-product-btn {
				height: 1.5rem;
			}

			h3 {
				font-size: clamp(--h3-font-size);
				height: 2.5rem;
				color: var(--main-text-color);
			}

			img {
				border-radius: var(--border-radius-m);
			}

			img:hover {
				scale: 1.02;
			}

			/* Like button */
			form {
				display: flex;
				justify-items: start;
				align-items: center;
				gap: var(--gap-s);
				width: 100%;
			}

			button {
				display: grid;
				padding: 0;
				border: none;
				background: none;
			}

			button:hover {
				scale: 1.1;
			}
		}

		/* Masonry outline */
		li:nth-child(even) {
            margin-top: 2rem;
        }
</style>