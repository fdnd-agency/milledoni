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
		background-color: #F6F5F5;
    	display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		justify-items: center;
		place-items: center;
		text-align: center;
		padding: 1.50rem;
		box-sizing: border-box;
		border: 2px solid hsl(47, 100%, 44%);
		border-radius: 1rem;

			a {
				text-decoration: none;
				color: var(--green-main);
				color: hsl(167, 100, 26);

				h3 {
					color: var(--main-text-color);
					color: rgb(130, 130, 130);
					font-size: var(--h3-font-size);
					max-width: 13rem;
				}
			}
		}

		form {
            display: flex;
        }
</style>