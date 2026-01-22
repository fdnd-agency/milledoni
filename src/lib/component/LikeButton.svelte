<script>
	import { enhance } from '$app/forms'; // Prevents the webpage from reloading after interacting with the form
	import LikedIcon from "$lib/assets/liked-icon.svg";
	import UnlikedIcon from "$lib/assets/unliked-icon.svg";

	let { likedProductIds = [], productId } = $props(); // Get liked product IDs array and current product ID from parent component

	let isLiked = $derived(likedProductIds.includes(Number(productId))); // Rerun which productId's take part inside the array of liked product id's without refreshing the page
</script>

{#if isLiked}
	<form method="POST" action="?/unlike" use:enhance>
		<input type="hidden" name="productId" value={productId} />
		<button type="submit">
			<img src={LikedIcon} alt="unlike" />Unlike
		</button>
	</form>
{:else}
	<form method="POST" action="?/like" use:enhance>
		<input type="hidden" name="productId" value={productId} />
		<button type="submit">
			<img src={UnlikedIcon} alt="like" />Like
		</button>
	</form>
{/if}

<style>
	form {
		display: flex;
		justify-items: start;
		align-items: var(--align-items-main);
		gap: var(--spacing-xs);
	}

	button {
		display: flex;
    	align-items: center;
    	padding: 0;
    	gap: var(--spacing-xs);
		font-size: 1rem;
    	border: none;
    	background: none;
	}

	button:hover {
		scale: 1.1;
	}
</style>