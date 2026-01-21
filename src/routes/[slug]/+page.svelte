<script>
  let { data } = $props();

  import { Product } from "$lib";
  import { Filter } from "$lib";

  import cheeseImg from "$lib/assets/kaas.jpg";
  import starImg from "$lib/assets/star.jpg";
  
  const product = data.product;
  const cleanTags = data.cleanTags;

  const productImages = [
    { src: product.image, alt: `${product.name} - hoofdafbeelding` },
    { src: cheeseImg, alt: `${product.name} - detail weergave` },
    { src: starImg, alt: `${product.name} - alternatieve weergave` }
  ];

  let mainImageSrc = $state(productImages[0].src);
  let mainImageAlt = $state(productImages[0].alt);

  function changeImage(image) {
    mainImageSrc = image.src;
    mainImageAlt = image.alt;
  }
</script>

<div class="product-wrapper">
  <aside>
    <img class="main-img" src={mainImageSrc} alt={mainImageAlt} />
    <div class="carousel">
      {#each productImages as image}
        <button onclick={() => changeImage(image)}>
          <img class="display-img" src={image.src} alt={image.alt} />
        </button>
      {/each}
    </div>
  </aside>

  <section>
    <h1>{product.name}</h1>
    <span>€{product.amount}</span>

    <main>
      <p>{product.description}</p>

      <p><b>Tags:</b> {cleanTags.join(", ")}</p>

      {#if product.spotter}
      <p><b>Gespot door:</b> <span>{product.spotter}</span></p>
      {/if}
      

      <h2>Vind je kado</h2>

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

  aside, section {
    margin: 0 auto;
  }

  aside {
    display: flex;
    flex-direction: row-reverse;
    height: 55vh;
    width: 40%;
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

    button {
      height: 31%;
      padding: 0;
      border: 2px solid transparent;
      background: none;
      cursor: pointer;
    }

    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      background-position: 50% 50%;
      display: block;
    }
  }

  section {
    width: 60%;
  }

 
</style>