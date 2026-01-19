<script>
  let { tags } = $props();
  import { onMount } from "svelte";
  import image from "$lib/assets/filter-bg.svg";

  onMount(() => {
    const filterButton = document.querySelector(".filter-button");
    const detailsElements = document.querySelectorAll("details"); // get details
    const form = document.querySelector(".form-wrapper")

    // standard form close when js is supported/enabled

    form.classList.add("enhance")

    filterButton.addEventListener("click", () => {
      form.classList.toggle("open");
    });

    const toggleDetails = () => {
      detailsElements.forEach((detail) => {
        if (window.innerWidth >= 970) {
          // set width on which the open attribute will be changed
          detail.setAttribute("open", "");
        } else {
          detail.removeAttribute("open"); // close details standard
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

<button class="button filter-button">Filter</button>

<div class="form-wrapper">
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

        <select name="" id="tag slect">
          <option value="">Test</option>
        </select>
      </details>
    </fieldset>

    <fieldset>
      <details open>
        <summary>Deze persoon is</summary>
        <select id="tag-select">
          <option value="">Alle tags</option>
          {#each tags as tag}
            <option value={tag}>{tag}</option>
          {/each}
        </select>

        <select name="" id="tag slect">
          <option value="">Test</option>
        </select>

        <select name="" id="tag slect">
          <option value="">Test</option>
        </select>
      </details>
    </fieldset>

    <fieldset>
      <details open>
        <summary>Stijl & voorkeuren</summary>
        <select id="tag-select">
          <option value="">Alle tags</option>
          {#each tags as tag}
            <option value={tag}>{tag}</option>
          {/each}
        </select>

        <select name="" id="tag slect">
          <option value="">Test</option>
        </select>

        <select name="" id="tag slect">
          <option value="">Test</option>
        </select>

        <select name="" id="tag slect">
          <option value="">Test</option>
        </select>
      </details>
    </fieldset>
  </form>

  <img class="svg" src={image} alt="" />
</div>

<style>
 /* https://dev.to/kevinbism/css-animation-with-display-none-4pan */  

  :global{
    .form-wrapper {
      display: none;
      opacity: 1;
     
      width: 90%;
      position: relative;
      padding: 1em;
      background-color: var(--accent-color);
      border-radius: 15px;
      transition: opacity .3s ease, display .3s ease allow-discrete;
      z-index: 2;
  
      @media screen and (min-width: 900px) {
        width: 60%;
        padding: 2em;
      }
  
      &.open{
        opacity: 1;
        
        display: flex;
        align-items: center;
        justify-content: center;
      }
  
    }
  
    @starting-style{
      .form-wrapper.open{
        opacity: 0; 
      }
    }
  
  }
  
  
      /* https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@starting-style */

  
    .form-wrapper form {
      display: flex;
      flex-flow: column wrap;
      justify-content: space-evenly;
  
      gap: 1.5em;
      width: 100%;
      height: 100%;
      margin: auto;
  
      /* relative for z-index */
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
  
    /* This will be styled in general style.css */
    details {
      font-family: "Parkisans";
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
