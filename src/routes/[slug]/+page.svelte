<script>
  let { data } = $props();

  import { Product } from "$lib";
  import { Filter } from "$lib";
  import { onMount } from "svelte";
  
  const product = data.product;
  const cleanTags = data.cleanTags;

  onMount(() => {
    const mainImg = document.querySelector(".main-img");
    const smallImg = document.querySelectorAll(".display-img");

    smallImg.forEach(function (smallImages) {
      smallImages.addEventListener("change", showbigImg);
    });

    function showbigImg(event) {
      const mainImg = this.smallImg;

      mainImg.alt = smallImg.alt;
    }
  });
</script>

<div class="product-wrapper">
  <aside>
    <img class="main-img" src={product.image} alt="test" />
    <div class="carousel">
      <img class="display-img" src={product.image} alt="test122112" />
      <img class="display-img" src={product.image} alt="test2" />
      <img class="display-img" src={product.image} alt="test3" />
    </div>
  </aside>

  <section>
    <h1>{product.name}</h1>
    <span>€{product.amount}</span>

    <main>
      <p>{product.description}</p>
      <p>{product.tags}</p>
      <span>{product.spotter}</span>

      <h2>Vind je kado</h2>
      <ul>
        {#each cleanTags as tag}
          <li>{tag}</li>
        {/each}
      </ul>
    </main>
  </section>
</div>

<style>
  .product-wrapper {
    width: 90vw;
    margin: 5vh auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3em;

    @media (min-width:990px) {
      flex-direction: row;
    }
  }

  section {
    h1 {
      margin: 0;
    }
  }

  aside,section{
    margin: 0 auto;
  }

  aside {
    display: flex;
    flex-direction: row-reverse;
    height: 55vh;
    gap: 1em;

    @media (min-width:990px) {
      position: sticky;
      top: 15vh;
    }
 
    .main-img {
      height: 100%;
      aspect-ratio: 8/10;
      object-fit: cover;
      background-position: 50% 50%;
    }
  }

  .carousel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;

    img {
      height: 31%;
      aspect-ratio: 1/1;
      object-fit: cover;
      background-position: 50% 50%;
    }
  }

  section {
    width: 70%;
  }
</style>
