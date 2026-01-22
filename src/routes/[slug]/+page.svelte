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
    { src: starImg, alt: `${product.name} - alternatieve weergave` },
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
    <img class="main-img desktop-only" src={mainImageSrc} alt={mainImageAlt} />
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
    <span class="price">€{product.amount}</span>

    <main>
      <p>{product.description}</p>

      <p><b>Tags:</b> {cleanTags.join(", ")}</p>

      {#if product.spotter}
        <p>
          <b>Gespot door:</b>
          <span class="spotter-name">{product.spotter}</span>
        </p>
      {/if}

      <h2>Vind je kado</h2>
      {#if product.shop_name}
        <a href={product.url}>{product.shop_name} &gt;</a>
        {:else}
        <p>Geen winkels gevonden!</p>
      {/if}
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

    @media (min-width: 990px) {
      flex-direction: row;
    }
  }

  section {
    width: 90%;
    @media (min-width: 990px) {
      width: 60%;
    }
    h1 {
      margin-top: 0;
    }

    .price {
      font-weight: bold;
      font-size: 120%;
    }
  }

  aside,
  section {
    margin: 0 auto;
  }

  aside {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 1em;

    @media (min-width: 990px) {
      position: sticky;
      top: 15vh;
      flex-flow: row-reverse;
      width: 40%;
      height: 55vh;
    }

    .main-img {
      height: 100%;
      aspect-ratio: 8/10;
      object-fit: cover;
      background-position: 50% 50%;
    }

    .desktop-only {
      display: none;

      @media (min-width: 990px) {
        display: block;
      }
    }
  }

  .carousel {
    display: flex;
    gap: 1em;
    overflow-x: auto;
    scroll-snap-type: x mandatory;

    @media (min-width: 990px) {
      flex-direction: column;
      overflow-x: visible;
      scroll-snap-type: none;
    }

    button {
      flex-shrink: 0;
      width: 80%;
      padding: 0;
      border: 2px solid transparent;
      background: none;
      cursor: pointer;
      scroll-snap-align: center;

      @media (min-width: 600px) {
        width: 60%;
      }

      @media (min-width: 990px) {
        height: 30%;
        width: auto;
      }
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
</style>
