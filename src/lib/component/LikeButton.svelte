<script>
	// Prevents the webpage from doing a page reload after liking
	import { enhance } from '$app/forms';
	import LikedIcon from "$lib/assets/liked-icon.svg";
	import UnlikedIcon from "$lib/assets/unliked-icon.svg";

	let { likedProductIds = [], productId } = $props();

	// Rerun this line of code once interacted
	// Check whether this product is liked by the user
	let isLiked = $derived(likedProductIds.includes(Number(productId)));
</script>

{#if isLiked}
	<form method="POST" action="?/unlike" use:enhance>
		<input type="hidden" name="productId" value={productId} />
		<button type="submit">
			<img src={LikedIcon} alt="unlike" />
		</button>
	</form>
{:else}
	<form method="POST" action="?/like" use:enhance>
		<input type="hidden" name="productId" value={productId} />
		<button type="submit">
			<img src={UnlikedIcon} alt="like" />
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
		display: grid;
		padding: 0;
		border: none;
		background: none;
	}

	button:hover {
		scale: 1.1;
	}
</style>