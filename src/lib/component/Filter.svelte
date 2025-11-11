<script>
  let { tags } = $props();

  import image from "$lib/assets/filter-bg.svg";
</script>

<div class="toggle-filter button">
  <input class="checker" type="checkbox" id="filter-toggle" value="Filter" />
  <label for="filter-toggle">Filter</label>
</div>

<div class="form-wrapper">
  <form>
    <fieldset>
      <label for="tag-select">De persoon</label>
      <select id="tag-select">
        <option value="">Alle tags</option>
        {#each tags as tag}
          <option value={tag}>{tag}</option>
        {/each}
      </select>
    </fieldset>

    <!--  using details to open or close filter options  -->
    <fieldset>
      <details>
        <summary>De persoon</summary>
        <select id="tag-select">
          <option value="">Alle tags</option>
          {#each tags as tag}
            <option value={tag}>{tag}</option>
          {/each}
        </select>
      </details>
    </fieldset>

    <fieldset>
      <label for="tag-select">De persoon</label>
      <select id="tag-select">
        <option value="">Alle tags</option>
        {#each tags as tag}
          <option value={tag}>{tag}</option>
        {/each}
      </select>
    </fieldset>

    <fieldset>
      <label for="tag-select">Deze persoon is</label>
      <select id="tag-select">
        <option value="">Alle tags</option>
        {#each tags as tag}
          <option value={tag}>{tag}</option>
        {/each}
      </select>
    </fieldset>

    <fieldset>
      <label for="tag-select">Stijl & voorkeuren</label>
      <select id="tag-select">
        <option value="">Alle tags</option>
        {#each tags as tag}
          <option value={tag}>{tag}</option>
        {/each}
      </select>
    </fieldset>
  </form>

  <img class="svg" src={image} alt="" />
</div>

<style>
  button,
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
    appearance: none;
    border: none;
    position: absolute;
    inset: 0; 
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    margin: 0;
  }

  .toggle-filter:has(.checker:checked) + .form-wrapper {
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
    opacity: 1;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 3em 3em 3em;
    width: 90%;
    position: relative;

    background-color: #20a687;
    border-radius: 15px;

    transition: all 0.3s ease-out;

    z-index: 2;
    padding: 1em;

    @media screen and (min-width: 1030px) {
      width: 60%;
      padding: 3em;
    }

    form {
      opacity: 1;
      display: flex;
      flex-flow: column wrap;
      justify-content: space-evenly;

      gap: 1.5em;
      width: 100%;
      height: 80%;
      margin: auto;

      /* relative for z-index */
      position: relative;
      z-index: 2;

      padding: 1em;

      border: 5px solid #20a687;
      border-radius: 15px;

      background-color: #fff;
      height: auto;

      margin: auto;

      @media screen and (min-width: 1075px) {
        flex-direction: row;
      }

      fieldset {
        display: flex;
        flex-direction: column;

        gap: 0.5em;

        border: none;
        padding: 0;
        margin: 0;
      }

      label {
        color: #20a687;
        font-weight: bold;
      }

      details {
        width: max-content;
      }

      details summary {
        list-style: none;
        cursor: pointer;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em 0;
      }

      details summary::marker {
        display: none;
      }

      details summary::after {
        content: "▶";
        transition: transform 0.2s ease;
        font-size: 0.9em;
        margin-left: 1em;
      }

      details[open] summary::after {
        transform: rotate(90deg);
      }

      select {
        font-family: inherit;
        width: 100%;

        border-radius: 5px;
        border: 2px solid lightgray;
        color: #1d1d1b;
        background-color: #fff;
        padding: 5px;

        /* option {
          &::checked {
          }
        } */
      }
    }
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
