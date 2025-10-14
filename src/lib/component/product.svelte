<script>
    let { product } = $props()
</script>

<li>
	<a href="/">
		<img loading="lazy" src="{product.image}" alt="test" width="200px" height="200px">
		<h3>{product.name}</h3>
		Bekijk product
	</a>
	<form action="post" method="get" class="like-and-safe-form">
        <div class="like-form">
            <input type="button" name="like" id="likeBtn"/>
            <label for="like">like</label>
        </div>
        <div class="safe-form">
            <input type="button" name="safe" id="safeBtn"/>
            <label for="safe">safe</label>
        </div>
    </form>
</li>

<style>
	li{
		background-color: var(--item-main-background-color);
		background-color: #dedede;
    	display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		justify-items: center;
		place-items: center;
		width: 80%;
		height: 100%;
		text-align: center;

			a {
				text-decoration: none;
				color: var(--green-main);
				color: hsl(167, 100, 26);

				h3 {
					color: var(--main-text-color);
					color: rgb(130, 130, 130);
					font-size: var(--h3-font-size);
				}
			}
		}

		form {
            display: flex;
        }
</style>