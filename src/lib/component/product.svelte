<script>
    let { product } = $props()
</script>

<li>
	<a tabindex="-1" href="/"><img class="product-img" loading="lazy" src="{product.image}" alt="test" width="200" height="200"></a>
	<h3>{product.name}</h3>
	<a class="bekijk-product-btn" href="/">Bekijk product
		<img loading="lazy" src="/images/right-arrow.svg" alt="" width="14" height="14" />
	</a>
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
	li {
		display: grid;
		grid-template-rows: subgrid;
		grid-row: span 4;
		background-color: var(--neutral-color-background-cards);
		gap: var(--spacing-xs);
		place-items: baseline;
		text-align: var(--text-align-main);
		border: 2px solid var(--primary-color);
		border-radius: var(--rounding-m);
		padding: var(--spacing-m);
        box-sizing: var(--inner-spacing);
		overflow: hidden;

			a {
				display: flex;
				align-items: var(--align-items-main);
				gap: var(--spacing-xs);
				width: 100%;
				text-decoration: none;
				color: var(--accent-color);
			}

			a:hover {
				font-size: 1.1rem;
			}

			.product-img {
				width: 100%;
				object-fit: cover;
			}

			.bekijk-product-btn {
				height: 1.5rem;
			}

			h3 {
				hyphens: auto;
				width:100%;
				height: 2.3em;
				color: var(--text-color);
				display: -webkit-box;
  				-webkit-line-clamp: 2;
  				-webkit-box-orient: vertical; 
				text-overflow: ellipsis;
				overflow: hidden;
  				word-wrap: break-word;
			}

			img {
				border-radius: var(--rounding-m);
			}

			img:hover {
				scale: 1.02;
			}

			/* Like button */
			form {
				display: flex;
				justify-items: start;
				align-items: var(--align-items-main);
				gap: var(--spacing-xs);
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

		/* @media (min-width: 880px) {
			li:nth-child(3n + 2) {
  				margin-top: 2rem;
			}
        }

		@media (min-width: 1136px) {
			li:nth-child(3n + 2) {
  				margin-top: 0;
			}

			li:nth-child(even) {
            	margin-top: 2rem;
        	}
        } */

		@media (prefers-color-scheme: dark){
			svg{
				fill: var(--text-color);
			}
		}
</style>