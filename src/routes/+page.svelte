<script>
  import { onMount } from "svelte";
  import gsap from "gsap";

  import cityimg from "$lib/assets/nightcity.png";

  // timelines
  let glitch;
  let border;

  let content;
  let svgPath;
  let svgElement;

  onMount(() => {
    const pathLength = svgPath.getTotalLength();
    svgPath.style.strokeDasharray = pathLength;
    svgPath.style.strokeDashoffset = pathLength;

    glitch = gsap.timeline({ paused: true });

    glitch
      .to(
        content,
        {
          duration: 0.1,
          opacity: 0.7,
          x: -5,
          filter: "saturate(200%)",
        },
        0
      )
      .to(
        content,
        {
          duration: 0.1,
          x: 5,
          filter: "hue-rotate(90deg)",
        },
        0.3
      )

      //https://gsap.com/docs/v3/GSAP/UtilityMethods/random()/
      .to(
        content,
        {
          duration: 0.15,
          x: () => gsap.utils.random(-20, 20),
          y: () => gsap.utils.random(-20, 20),
          repeat: 10,
          ease: "rough({strength:2, points:20, template:none})",
        },
        0.55
      )

      .to(
        content,
        {
          duration: 0.15,
          x: () => gsap.utils.random(-40, 40),
          y: () => gsap.utils.random(-40, 40),
          repeat: 5,
          ease: "rough({strength:1, points:30, template:none})",
        },
        0.7
      )

      // content uitknippen voor glitch animatie
      .to(content, { duration: 0.1, clipPath: "inset(0 0 50% 0)" }, 0.7)
      .to(content, { duration: 0.1, clipPath: "inset(50% 0 0 0)" }, 0.75)

      .to(
        content,
        {
          height: 0,
          duration: 0.25,
          opacity: 0,
          filter: "none",
          ease: "power3.out",
        },
        1
      );

    border = gsap.timeline({ paused: true });

    border
      .to(svgPath, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      })

      .to(svgPath, {
        scale: 1.5,
        stroke: "#c5003c",
        transformOrigin: "center center",
        duration: 0.5,
        ease: "power2.inOut",
      })

      .to(svgPath, {
        scale: 1.5,
        stroke: "#f3e600",
        duration: 0.4,
        ease: "power3.inOut",
      })

      .to(svgPath, {
        scale: 1,
        stroke: "#55ead4",
        duration: 0.5,
        ease: "power3.inOut",
      })

      .to(svgPath, {
        scale: 1.5,
        stroke: "#f3e600",
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut",
      });
  });

  function cyberAnimation() {
    glitch.restart();

    //https://gsap.com/docs/v3/GSAP/Timeline/vars/#onComplete
    //animatie afspelen als eerste is voltooid
    glitch.eventCallback("onComplete", () => {
      border.restart();
    });
  }
</script>

<nav>
  <ul>
    <!--  op klik/enter de animaties afspelen-->
    <li class="skiplink">
      <a href="#skipto" type="button" on:click={cyberAnimation}>Skip to content</a>
    </li>
    <li><a href="/">Home</a></li>
    <li><a href="/">Details</a></li>
    <li><a href="/">About</a></li>
    <li><a href="/">Test</a></li>
  </ul>
</nav>

<p>
  Een skiplink animatie. refresh om de content weer in te laden en te animeren
  <br/>
  Skip link bevind zich in de nav als eerste item  
</p>

<main id="content">
  <!-- content weg glitchen -->
  <div class="glitch" bind:this={content}>
    <img src={cityimg} alt="night city skyline" />
    <div>
      <h1>Cyberpunk theme</h1>
      <p>
        l Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vel
        exercitationem sit tempora commodi repudiandae fugiat esse adipisci
        sequi nemo, omnis voluptatibus dolorem ullam perspiciatis consequuntur
        deserunt eius expedita odit!
        <!-- was te lui voor een nieuwe p -->
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur
        quibusdam fuga temporibus ipsa id facilis cupiditate sed, asperiores repudiandae.
      </p>
    </div>
  </div>

  <!-- SVG stays visible -->
  <svg
    id="skip-to"
    bind:this={svgElement}
    width="320"
    height="55"
    viewBox="0 0 960 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0V83.2435L18 110V167.5H960V26.5L937 0H0Z" fill="#880425" />

    <path
      bind:this={svgPath}
      d="M0 0V83.2435L18 110V167.5H960V26.5L937 0H0Z"
      fill="none"
      stroke-width="4"
      stroke="#55ead4"
      opacity="0"
    />

    <!-- https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/text -->
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="yellow"
      font-size="48"
    >
      MAIN CONTENT
    </text>
  </svg>

  

  <article class="main-content">
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio maxime,
      adipisci magnam animi dolor eveniet facere esse totam laborum beatae,
      accusantium magni enim, velit excepturi minus laboriosam ipsum. Fuga,
      iure.
    </p>

    <!-- waarom wdurrt dit zo lang -->
    <button on:click={window.location.reload()}>Refresh Page</button>
    <p><i>refresh kan ff duren :/</i></p>
 

  </article>
</main>

<style>
  nav {
    width: 100%;
    position: sticky;
    z-index: 2;
    top: 0;
    left: 0;
    background-color: #000;

    ul {
      position: relative;
      padding: 1em 0;
      display: flex;
      justify-content: space-around;
      background-color: transparent;
      list-style: none;
      border: #c5003c 3px solid;

      li {
        a {
          text-decoration: none;
          color: #f3e600;
          font-weight: 500;
        }
      }

      .skiplink a {
        position: absolute;
        left: 5vw;
        top: 10;
        transform: translateY(-500px);
        transition: all 0.3s ease-out;

        &:focus {
          transform: translateY(0px);
        }
      }
    }
  }

  h1 {
    font-size: 35px;
    color: #f3e600;
    text-transform: uppercase;
  }

  main {
    width: 80vw;
    margin: 10vh auto;

    .glitch {
      width: 100%;

      height: 100vh;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      gap: 3em;
      margin: 10vh 0;
    }

    img {
      width: 400px;
      height: 400px;
      object-fit: cover;
      background-position: 50% 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 500px;
    }
  }

  svg {
    display: block;
    margin-top: 2rem;
  }

  .main-content {
    margin: 1em 0;
    background-color: #880425;
    padding: 1em 3em;

    p {
      color: #f3e600;
    }

    button {
      background-color: #000;
      color: #f3e600;
      border: none;
      padding: 1em 2em;
    }
    
    i{
      color: #55ead4;
    }
  }
</style>
