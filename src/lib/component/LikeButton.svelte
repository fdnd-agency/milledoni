<script>
	// Prevents the webpage from doing a page reload after liking
	import { enhance } from '$app/forms';
	import LikedIcon from "$lib/assets/liked-icon.svg";
	import UnlikedIcon from "$lib/assets/unliked-icon.svg";

	export let likedProductIds = [];
	export let productId;

	// Check whether this product is liked by the user
	let isLiked = likedProductIds.includes(Number(productId));
</script>

<form method="POST" action="?/like" use:enhance={() => {isLiked = !isLiked;}}>
	<input type="hidden" name="productId" value={productId} />
	<button type="submit">
		<img src={isLiked ? LikedIcon : UnlikedIcon} alt="like" />
	</button>
</form>

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