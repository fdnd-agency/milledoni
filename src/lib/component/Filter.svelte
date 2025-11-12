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

      <select name="" id="tag slect">
        <option value="">Test</option>
      </select>
    </fieldset>

    <!--  using details to open or close filter options  -->
    <fieldset>
      <details open>
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

      <select name="" id="tag slect">
        <option value="">Test</option>
      </select>

      <select name="" id="tag slect">
        <option value="">Test</option>
      </select>

      <select name="" id="tag slect">
        <option value="">Test</option>
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

      <select name="" id="tag slect">
        <option value="">Test</option>
      </select>
    </fieldset>
  </form>

  <img class="svg" src={image} alt="" />
</div>

<style>
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
    height: auto;
    position: relative;

    background-color: #20a687;
    border-radius: 15px;

    transition: all 0.3s ease-out allow-discrete;

    z-index: 2;

    @media screen and (min-width: 1030px) {
      width: 60%;
      padding: 2em;
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

      @media screen and (min-width: 1075px) {
        flex-direction: row;
      }

      fieldset {
        display: flex;
        flex-direction: column;

        width: 20%;
        gap: 0.5em;
        border: none;
        padding: 0;
        margin: 0;
      }

      @supports selector(::details-content) {
        details[open]::details-content {
          padding: 1rem;
          background-color: rebeccapurple;
          display: none;
        }

        @media (min-width: 60em) {
          details[open]::details-content {
            display: block;
          }
        }
      }

      label {
        color: #20a687;
        font-weight: bold;
      }

      select {
        font-family: inherit;
        width: 100%;

        border-radius: 5px;
        border: 2px solid lightgray;
        color: #1d1d1b;
        background-color: #fff;
        padding: 5px;
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
