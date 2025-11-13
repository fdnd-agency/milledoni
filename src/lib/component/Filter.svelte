<script>
  import { onMount } from "svelte";
  let { tags } = $props();
  import image from "$lib/assets/filter-bg.svg";

  onMount(() => {
    const detailsElements = document.querySelectorAll("details"); // get details

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

<div class="toggle-filter button">
  <input class="checker" type="checkbox" id="filter-toggle" value="Filter" />
  <label for="filter-toggle">Filter</label>
</div>

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
  /* This CSS doesn't yet include variables since it is based of older dev branch -> will be included very soon!! */

  /* adding this to general css */
  .button {
    margin-top: 1em;
    border-radius: 3em;
    padding: 3em 1em;
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

  .toggle-filter {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  input[type="checkbox"] {
    opacity: 0;
    appearance: none;
    border: none;
    position: absolute;

    inset: 0;
    width: 100%;
    height: 100%;

    cursor: pointer;
    margin: 0;
  }

  /*quick fix wilol soolve later in general styling*/
   input[type="checkbox"]:focus + label {
    outline: 2px solid #ff0; 
    outline-offset: 2px;
  }

  .toggle-filter:has(.checker:checked) + .form-wrapper {
    display: none;
    margin: 0;
    padding: 0;
    height: 0;
    opacity: 0;

    form {
      opacity: 0;
      height: 0;
    }
  }

  .form-wrapper {
    display: flex;
    opacity: 1;
    align-items: center;
    justify-content: center;

    width: 90%;
    position: relative;
    padding: 1em;

    background-color: #20a687;
    border-radius: 15px;

    transition: all 0.3s ease-out allow-discrete;

    z-index: 2;

    @media screen and (min-width: 900px) {
      width: 60%;
      padding: 2em;
    }
  }

  form {
    opacity: 1;
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
    border: 5px solid #20a687;
    border-radius: 15px;
    background-color: #fff;

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
    border-bottom: 2px solid #20a687;

    @media (min-width: 970px) {
      border: none;
    }
  }

  /* This will be styled in general style.css */
  details {
    font-family: "Parkisans";
  }

  summary {
    color: #20a687;
    font-family: "Parkisans";
    font-weight: bold;
  }

  /* will look into this further */

  /* summary:first-of-type {
    list-style-type: none;
  }

  details summary::after {
    content: "▾"; 
    transition: transform 0.2s ease;
  }

  details[open] summary::after {
    transform: rotate(180deg);
  } */

  select {
    font-family: inherit;
    width: 100%;
    margin: 0.3rem 0;
    border-radius: 5px;
    border: 2px solid lightgray;
    color: #1d1d1b;
    background-color: #fff;
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
