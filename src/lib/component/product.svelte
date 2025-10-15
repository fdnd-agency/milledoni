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
		border: 2px solid hsl(47, 100%, 44%);
		border-radius: 1rem;

			a {
				text-decoration: none;
				color: var(--green-main);
				color: hsl(167, 100%, 26%);
				color: hsl(167, 100%, 26%);
				width: 100%;
				height: 100%;
				padding: 1.50rem;
				box-sizing: border-box;

				img {
					border-radius: 1rem;
				}

				h3 {
					color: var(--main-text-color);
					color: #212121;
					font-size: var(--h3-font-size);
					max-width: 13rem;
				}
			}
		}

		a {
			font-family: "Parkisans";
		}

		form, input, label {
			cursor: pointer;
		}

		form {
            display: flex;
			width: 100%;
			padding: 1.50rem;
			padding-top: 0;
			box-sizing: border-box;
			gap: 1rem;
        }

		.like-form, .safe-form {
			width: 45%;
			height: 2rem;
			border: 2px solid hsl(167, 100%, 26%);
			color: hsl(167, 100%, 26%);
			justify-items: center;
			align-items: center;
			display: flex;
			gap: 10px;
			padding: 1rem;
			box-sizing: border-box;
			border-radius: 0.5rem;
		}

		input {
			background-color: hsl(167, 100%, 26%);
			border: none;
		}
</style>