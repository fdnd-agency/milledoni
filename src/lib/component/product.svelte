<script>
	import LikeButton from "$lib/component/LikeButton.svelte";

	export let product;
	export let likedProductIds = [];
</script>

<li>
	<a tabindex="-1"  href={`/${product.slug}`}><img class="product-img" loading="lazy" src={product.image} alt="test" width="200" height="200"></a>
	<h3>{product.name}</h3>

	<div>
		<a class="bekijk-product-btn" href={`/${product.slug}`}>Bekijk product
			<img loading="lazy" src="/images/right-arrow.svg" alt="" width="14" height="14" />
		</a>
		<LikeButton productId={product.id} {likedProductIds} />
	</div>
</li>

<style>
	li {
		display: grid;
		grid-template-rows: subgrid;
		grid-row: span 3;
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