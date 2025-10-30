<script>
  let { data } = $props();
  import image from "$lib/assets/filter-bg.svg";

  //import products component
  import { Product } from "$lib";
  import { Filter } from "$lib";

  const products = data.product;
  const tags = data.tags;
</script>

<section class="filters">
  <h1>i'm looking for a gift for... <br /><span>my uncle</span></h1>

  <svg
    width="349"
    height="408"
    viewBox="0 0 349 408"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.04"
      d="M62.8525 317.739C71.3364 317.107 80.0484 319.389 87.0376 324.93C94.1263 330.551 98.8025 339.015 99.9958 349.511C102.073 367.786 100.382 383.563 92.6174 394.423C84.1186 406.309 70.4719 409.647 55.6279 407.293C41.2098 405.007 32.7039 395.014 28.56 384.607C24.5696 374.586 24.0842 363.155 25.9691 354.272C29.4793 332.038 45.7003 319.017 62.8525 317.739ZM74.5864 340.357C71.9004 338.228 68.2931 337.145 64.3465 337.439C56.716 338.008 47.7032 343.888 45.6303 357.523L45.5817 357.842L45.5116 358.159C44.323 363.553 44.6212 371.127 47.101 377.355C49.4767 383.321 53.2629 386.911 58.7774 387.786C68.8491 389.383 73.6405 386.794 76.3539 382.999C79.8014 378.177 82.0966 368.517 80.1876 351.724C79.528 345.922 77.1729 342.408 74.5864 340.357ZM130.909 223.133L123.575 299.745H82.1186V279.988H105.444L111.066 221.267L130.909 223.133ZM215.7 229.321L211.65 248.665L185.239 243.232L189.289 223.888L215.7 229.321ZM68.6027 201.411L56.7656 217.306L35.8362 201.995L47.6732 186.099L68.6027 201.411ZM349 72.7017L213.955 167.533L202.432 151.413L337.476 56.582L349 72.7017ZM233.367 43.5406L170.081 135.408L153.619 124.268L216.905 32.4005L233.367 43.5406ZM132.464 34.0955L105.554 116.579L86.5889 110.5L113.498 28.0161L132.464 34.0955ZM36.1691 112.118L16.4446 114.96L0 2.84193L19.7245 0L36.1691 112.118Z"
      fill="black"
    />
  </svg>

  <svg
    width="213"
    height="250"
    viewBox="0 0 213 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.04"
      d="M174.64 194.693C169.462 194.306 164.145 195.704 159.88 199.099C155.553 202.543 152.699 207.73 151.971 214.161C150.703 225.359 151.735 235.026 156.474 241.681C161.661 248.964 169.99 251.009 179.049 249.567C187.849 248.166 193.04 242.043 195.569 235.666C198.005 229.525 198.301 222.522 197.151 217.078C195.008 203.455 185.108 195.476 174.64 194.693ZM167.479 208.552C169.118 207.248 171.32 206.584 173.728 206.764C178.385 207.113 183.886 210.716 185.151 219.07L185.181 219.266L185.224 219.46C185.949 222.765 185.767 227.406 184.254 231.222C182.804 234.878 180.493 237.078 177.127 237.614C170.98 238.592 168.056 237.006 166.4 234.681C164.296 231.726 162.895 225.807 164.06 215.517C164.463 211.962 165.9 209.809 167.479 208.552ZM133.104 136.724L137.581 183.667H162.882V171.561H148.646L145.215 135.581L133.104 136.724ZM81.3547 140.516L83.827 152.368L99.946 149.039L97.4737 137.187L81.3547 140.516ZM171.131 123.413L178.355 133.153L191.129 123.772L183.904 114.031L171.131 123.413ZM-1.52588e-05 44.5476L82.4198 102.655L89.4529 92.7778L7.03305 34.6704L-1.52588e-05 44.5476ZM70.5723 26.6793L109.197 82.9709L119.244 76.1449L80.6194 19.8533L70.5723 26.6793ZM132.156 20.8918L148.579 71.4332L160.153 67.7081L143.73 17.1667L132.156 20.8918ZM190.925 68.7L202.964 70.4413L213 1.74138L200.962 0L190.925 68.7Z"
      fill="black"
    />
  </svg>

  <form action="">
    <input type="search" placeholder="search a gift for a dreamer" />

    <svg
      width="50"
      height="50"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      ><path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.48 4h4l.5.5v2.03h.52l.5.5V8l-.5.5h-.52v3l-.5.5H9.36l-2.5 2.76L6 14.4V12H3.5l-.5-.64V8.5h-.5L2 8v-.97l.5-.5H3V4.36L3.53 4h4V2.86A1 1 0 0 1 7 2a1 1 0 0 1 2 0 1 1 0 0 1-.52.83V4zM12 8V5H4v5.86l2.5.14H7v2.19l1.8-2.04.35-.15H12V8zm-2.12.51a2.71 2.71 0 0 1-1.37.74v-.01a2.71 2.71 0 0 1-2.42-.74l-.7.71c.34.34.745.608 1.19.79.45.188.932.286 1.42.29a3.7 3.7 0 0 0 2.58-1.07l-.7-.71zM6.49 6.5h-1v1h1v-1zm3 0h1v1h-1v-1z"
      /></svg
    >
    <input type="submit" />
  </form>

  <p>1.000+ producten</p>
</section>

<Filter {tags} />

<main>
  <ul>
    {#each products as product}
      <Product {product} />
    {/each}
  </ul>
</main>

<style>
  main {
    display: grid;
    justify-content: center;
  }

  ul {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 2em;
    max-width: 80rem;
    padding: 0;
    margin-top: 4rem;
    padding-inline: 1rem;

    @media (min-width: 912px) {
            padding-inline: 2rem;
        }
  }

  .filters {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    text-align: center;
    overflow: hidden;

    > svg {
      position: absolute;
      z-index: -1;

      &:nth-of-type(1) {
        left: 5em;
        top: 2em;
      }

      &:nth-of-type(2) {
        right: 5em;
        bottom: 0;
        display: none;

        @media (min-width: 650px) {
          display: block;
        }
      }
    }

    h1 {
      font-size: var(--h1-font-size);
      padding-inline: 1em;
      /* margin-top: 3em; */

      span {
        color: var(--accent-color-main);
      }
    }

    form {
      display: grid;
      row-gap: 1em;
      grid-template-columns: 4fr 1fr;
      grid-template-rows: 3fr 2fr;
      border-radius: 3em;
      padding: 0.15em;
      width: 18em;

      svg {
        width: 2.5em;
        margin-left: -3em;
        pointer-events: none;
        grid-column: 3;
        grid-row: 1;
      }
    }

    input:first-of-type {
      border: none;
      padding-left: 1.5em;
      width: 100%;
      /* max-width: 80%; */
      padding-right: 4em;
      border: 2px solid transparent;
      border-radius: 3em;
      background:
        linear-gradient(white, white) padding-box,
        linear-gradient(45deg, red, purple, gold, blue);
      grid-column: 1/-1;
      grid-row: 1;
    }

    input:nth-of-type(2) {
      grid-column: span 2;
      justify-self: center;
      padding-inline: 2em;
      border-radius: 3em;
      border: none;
      background-color: var(--item-main-background-color);
      &:hover {
        background-color: var(--background-icon-color);
      }
    }

    input[type="search"]::-webkit-search-cancel-button {
      position: relative;
      transform: translateX(0.5em);
    }

    button {
      margin-top: 1em;
      border-radius: 3em;
      border: none;
      background-color: var(--green-main-hover);
      padding-block: 1em;
      padding-inline: 3em;
      cursor: pointer;
      color: var(--background-color);

      &:hover {
        background-color: var(--green-secondary);
        /* color: var(--background-icon-color); */
      }
    }

    p {
      color: var(--chat-text-color);
      margin: 0;
    }
  }
</style>
