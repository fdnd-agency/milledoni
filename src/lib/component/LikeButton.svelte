<script>
	// Prevents the webpage from doing a page reload after liking
	import { enhance } from '$app/forms';
	import heartFilled from "$lib/assets/heart-filled.svg";
	import heartEmpty from "$lib/assets/heart-empty.svg";

	export let likedProductIds = [];
	export let productId;

	// Check whether this product is liked by the user
	let isLiked = likedProductIds.includes(Number(productId));
</script>

<form method="POST" action="?/like" use:enhance={() => {isLiked = !isLiked;}}>
	<input type="hidden" name="productId" value={productId} />
	<button type="submit">
		<img src={isLiked ? heartFilled : heartEmpty} alt="like" />
	</button>
</form>