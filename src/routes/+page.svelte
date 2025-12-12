<script>
  import { onMount } from "svelte";

  import holo_bg from "$lib/assets/holo-bg.png";
  import holo_star from "$lib/assets/holostar.png";
</script>

<main id="content">
  <h1>Holographic carousel</h1>
  <p>
    Met gebruik van css scrollbuttons, acnhor positioning, scroll-marker-group
    en sibling count
  </p>

  <div class="slider">
    <article style="background-image: url({holo_bg})">
      <div class="glass">
        <!-- super lazy fix voor flexbox  op mobiel -->
        <br />
        <img src={holo_star} alt="nog niks" />

        <div class="description">
          <h3>Holo ster</h3>
          <p>een mooie holograpische ster</p>
        </div>
      </div>
    </article>

    <article style="background-image: url({holo_bg})">
      <div class="glass">
        <!-- super lazy fix voor flexbox op mobiel -->
        <br />

        <img src={holo_star} alt="nog niks" />

        <div class="description">
          <h3>Holo ster</h3>
          <p>een mooie holograpische ster</p>
        </div>
      </div>
    </article>

    <article style="background-image: url({holo_bg})">
      <div class="glass">
        <!-- super lazy fix voor flexbox  op mobiel -->
        <br />

        <img src={holo_star} alt="nog niks" />

        <div class="description">
          <h3>Holo ster</h3>
          <p>een mooie holograpische ster</p>
        </div>
      </div>
    </article>

    <article style="background-image: url({holo_bg})">
      <div class="glass">
        <!-- super lazy fix voor flexbox  op mobiel -->
        <br />

        <img src={holo_star} alt="nog niks" />

        <div class="description">
          <h3>Holo ster</h3>
          <p>een mooie holograpische ster</p>
        </div>
      </div>
    </article>

    <article style="background-image: url({holo_bg})">
      <div class="glass">
        <!-- super lazy fix voor flexbox  op mobiel -->
        <br />

        <img src={holo_star} alt="nog niks" />

        <div class="description">
          <h3>Holo ster</h3>
          <p>een mooie holograpische ster</p>
        </div>
      </div>
    </article>

    <article style="background-image: url({holo_bg})">
      <div class="glass">
        <!-- super lazy fix voor flexbox  op mobiel -->
        <br />

        <img src={holo_star} alt="nog niks" />

        <div class="description">
          <h3>Holo ster</h3>
          <p>een mooie holograpische ster</p>
        </div>
      </div>
    </article>

    <article style="background-image: url({holo_bg})">
      <div class="glass">
        <!-- super lazy fix voor flexbox  op mobiel -->
        <br />

        <img src={holo_star} alt="nog niks" />

        <div class="description">
          <h3>Holo ster</h3>
          <p>een mooie holograpische ster</p>
        </div>
      </div>
    </article>

    <article style="background-image: url({holo_bg})">
      <div class="glass">
        <!-- super lazy fix voor flexbox  op mobiel -->
        <br />

        <img src={holo_star} alt="nog niks" />

        <div class="description">
          <h3>Holo ster</h3>
          <p>een mooie holograpische ster</p>
        </div>
      </div>
    </article>
  </div>
</main>

<style>
  * {
    box-sizing: border-box !important;
  }

  main {
    width: 80vw;
    margin: 10vh auto;
  }

  .slider {
    display: flex;
    overflow-x: auto;
    margin: 10vh 0;
    gap: 5vw;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    anchor-name: --holocarousel;
    padding-right: 8vw;
    position: relative;

    scroll-marker-group: after;

    &::scroll-marker-group {
      display: flex;
      gap: 10px;

      position: absolute;
      position-anchor: --holocarousel;

      justify-self: anchor-center;
      bottom: 5vh;
    }

    ::scroll-marker:target-current {
      opacity: 1;
    }
  }

  article {
    height: 35em;
    flex: 0 1 25em;
    border-radius: 0.5em;
    padding: 1em;

    background-size: calc(250% + sibling-index() * 20%)calc(250% + sibling-index() * 20%);
    animation: moveBg linear infinite alternate;
    animation-duration: calc(15s + sibling-index() * 1.5s);

    scroll-snap-align: start;
    scroll-snap-stop: always;

    &::scroll-marker {
      content: "";
      width: 20px;
      height: 20px;
      background: linear-gradient(#a381f3, #6a94ea);
      opacity: 0.3;
      border-radius: 50%;
    }

    .glass {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 100%;
      background: rgba(255, 255, 255, 0.189);
      border-radius: 0.5em;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(4.6px);
    }

    img {
      margin: 0 auto;
      width: auto;
      height: 50%;
      transform: scale(0.8);

      @media (min-width: 480px) {
        height: 70%;
      }
    }

    .description {
      width: 90%;
      height: 25%;
      padding: 0 1em;
      margin: 1em auto;
      border-radius: 0.5em;
      background-color: rgba(255, 255, 255, 0.485);

    }
  }

  .slider::-webkit-scrollbar {
    opacity: 0.1;
  }

  /* scroll buttons */
  /* tijdelijk onderaan voor beter overzicht */
  .slider::scroll-button(*) {
    position: absolute;
    content: "<";
    border: 2px solid black;
    background: linear-gradient(#a381f3, #627fb3);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999;
    position-area: left center;
    position-anchor: --holocarousel;

    @media (min-width: 1100px) {
      font-size: 3rem;
      width: 50px;
      height: 50px;
    }
  }

  .slider::scroll-button(right) {
    content: ">";
    position-area: right center;
  }

  .slider::scroll-button(*):disabled {
    opacity: 0.2;
    cursor: auto;
  }

  /* deze twee verpesten anders de slider om een of andere reden */
  .slider::scroll-button(block-start) {
    display: none;
  }

  .slider::scroll-button(block-end) {
    display: none;
  }

  /* had ff geen tijd voor andere oplossing.... */
  @media (min-width: 480px) {
    br {
      display: none;
    }
  }

  @keyframes moveBg {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
</style>
