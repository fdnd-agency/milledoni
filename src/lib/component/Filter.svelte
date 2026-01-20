<script>
  let { tags } = $props();
  import { onMount } from "svelte";
  import image from "$lib/assets/filter-bg.svg";

  onMount(() => {
    const filterButton = document.querySelector(".filter-button");
    const detailsElements = document.querySelectorAll("details");
    const form = document.querySelector(".form-wrapper");

    // enhachment to close filter by standard when js is enabled
    form.classList.remove("initial-hidden");

    // open filter on click 
    filterButton.addEventListener("click", () => {
      form.classList.toggle("open");
    });


    // details closed on mobile
    const toggleDetails = () => {
      detailsElements.forEach((detail) => {
        if (window.innerWidth >= 970) {
          detail.setAttribute("open", "");
        } else {
          detail.removeAttribute("open");
        }
      });
    };
    toggleDetails();

    window.addEventListener("resize", toggleDetails);

    return () => {
      window.removeEventListener("resize", toggleDetails);
    };
  });
</script>

<svelte:head>
  <script>
    // prevents cls by turning the filter of on loading before css loads in
    document.documentElement.classList.add("js-enabled");
  </script>
</svelte:head>

<button class="button filter-button">Filter</button>

<div class="form-wrapper initial-hidden">
  <form>
    <fieldset>
      <details open>
        <summary>De persoon</summary>
        <select id="tag-select">
          <option value="">Alle tags</option>
          {#each tags as tag}
            <option value={tag}>{tag}</option>
          {/each}
        </select>

        <select name="">
          <option value="">Test</option>
        </select>
      </details>
    </fieldset>

    <fieldset>
      <details open>
        <summary>Deze persoon is</summary>
        <select>
          <option value="">Alle tags</option>
          {#each tags as tag}
            <option value={tag}>{tag}</option>
          {/each}
        </select>

        <select name="">
          <option value="">Test</option>
        </select>

        <select name="" >
          <option value="">Test</option>
        </select>
      </details>
    </fieldset>

    <fieldset>
      <details open>
        <summary>Stijl & voorkeuren</summary>
        <select>
          <option value="">Alle tags</option>
          {#each tags as tag}
            <option value={tag}>{tag}</option>
          {/each}
        </select>

        <select name="" >
          <option value="">Test</option>
        </select>

        <select name="" >
          <option value="">Test</option>
        </select>

        <select name="">
          <option value="">Test</option>
        </select>
      </details>
    </fieldset>
  </form>

  <img class="svg" src={image} alt="" />
</div>

<style>
  :global {
    .form-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;

      width: 85%;
      position: relative;
      padding: 1em;
      background-color: var(--accent-color);
      border-radius: 15px;
      z-index: 2;

      @media screen and (min-width: 900px) {
        width: 60%;
        padding: 2em;
      }
    }
    
    .js-enabled .form-wrapper.initial-hidden {
      display: none;
    }

    .js-enabled .form-wrapper:not(.initial-hidden) {
      display: none;
      transition:opacity 0.3s ease, display 0.3s ease allow-discrete;
    }

    .js-enabled .form-wrapper.open {
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @starting-style {
      .js-enabled .form-wrapper.open {
        opacity: 0;
      }
    }
  }

  .form-wrapper form {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;

    gap: 1.5em;
    width: 100%;
    height: 100%;
    margin: auto;

    position: relative;
    z-index: 2;

    padding: 1em;
    border: 5px solid var(--accent-color);
    border-radius: 15px;
    background-color: var(--neutral-color-background-cards);

    @media screen and (min-width: 970px) {
      flex-direction: row;
    }
  }

  fieldset {
    display: flex;
    flex-direction: column;

    flex: 1 1 0;
    gap: 0.5em;
    padding: 0 0 1em 0;
    margin: 0;

    border: none;
    border-bottom: 2px solid var(--accent-color);

    @media (min-width: 970px) {
      border: none;
    }
  }

  summary {
    color: var(--accent-color);
    font-family: "Parkisans";
    font-weight: bold;
  }

  select {
    font-family: inherit;
    width: 100%;
    margin: 0.3rem 0;
    border-radius: 5px;
    border: 2px solid var(--neutral-color-background-cards);
    color: var(--text-color);
    background-color: var(--neutral-color-background);
    padding: 5px;
  }

  .svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    z-index: 1;
  }

</style>
