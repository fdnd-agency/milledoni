<script>
	import heartFilled from "$lib/assets/heart-filled.svg";
	import heartEmpty from "$lib/assets/heart-empty.svg";

	export let likes = [];
	export let productId;

	const liked = likes.find(
		(like) => like.product === productId
	);
</script>

{#if liked}
	<button>
        <img src={heartFilled} alt="liked" />
    </button>
{:else}
	<form method="POST">
		<input type="hidden" name="productId" value={productId} />
		<button formaction="?/like">
            <img src={heartEmpty} alt="like" />
        </button>
	</form>
{/if}