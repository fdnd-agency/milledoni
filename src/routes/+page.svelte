<script>
  let { data } = $props();
  import image from "$lib/assets/filter-bg.svg";

  //import products component
  import { Product } from "$lib";

  const products = data.product;
  const tags = data.tags;
</script>

<h1>Filter test</h1>

<div class="form-wrapper">
  `

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

<ul>
  {#each products as product}
    <Product {product} />
  {/each}
</ul>

<style>
  .form-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: auto;
    width: 90%;
    position: relative;

    background-color: #20a687;
    border-radius: 15px;

    z-index: 2;
    padding: 1em;

    @media screen and (min-width: 1030px){
        width: 60%;
        padding: 3em;
      }
    

    form {
      display: flex;
      flex-flow: column wrap;
      justify-content: space-evenly;
        
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

      @media screen and (min-width: 1030px){
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

      select {
        font-family: inherit;
        width: 100%;

        border-radius: 5px;
        border: 2px solid lightgray;
        color: #1d1d1b;
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

  ul {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    gap: 2em;
  }
</style>
