<script>
  import { onMount } from "svelte";

  import holo_bg from "$lib/assets/holo-bg.png";
  import holo_star from "$lib/assets/holostar.png";
</script>

<main id="content">
  <h1>hoi</h1>

  <div class="slider">
    <article style="background-image: url({holo_bg})">
      <div class="glass">
        <img src="" alt="nog niks" />

        <div class="description">
          <h3>Product</h3>
          <p>small description</p>
        </div>
      </div>
    </article>

    <article style="background-image: url({holo_bg})">
      <div class="glass">
        <img src="" alt="nog niks" />

        <div class="description">
          <h3>Product</h3>
          <p>small description</p>
        </div>
      </div>
    </article>

    <article style="background-image: url({holo_bg})">
      <div class="glass">
        <img src="" alt="nog niks" />

        <div class="description">
          <h3>Product</h3>
          <p>small description</p>
        </div>
      </div>
    </article>

    <article style="background-image: url({holo_bg})">
      <div class="glass">
        <img src="" alt="nog niks" />

        <div class="description">
          <h3>Product</h3>
          <p>small description</p>
        </div>
      </div>
    </article>

    <article style="background-image: url({holo_bg})">
      <div class="glass">
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

  .slider {
    display: flex;
    overflow-x: scroll;
    gap: 3vw;
    scroll-snap-type: x mandatory;
  }

  article {
    height: 50vh;
    flex: 0 0 20em;
    border-radius: 0.5em;
    padding: 1em;

    background-size: 250% 250%;
    animation: moveBg 10s linear infinite alternate;



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
      -webkit-backdrop-filter: blur(4.6px);
    }

    img {
      margin: 0 auto;
      width: auto;
      height: 70%;
      transform: scale(0.8);
    }

    .description {
      width: 90%;
      height: 25%;
      padding: 0 1em;
      margin: 1em auto;
      border-radius: 0.5em;
      background-color: rgba(255, 255, 255, 0.485);

      h3 {
      }

      p {
      }
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
