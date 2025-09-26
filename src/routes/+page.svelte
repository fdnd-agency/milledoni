<script>
    export let data
    const products = data.product
    //producten meegeven aan de page
</script>

<h1>dit is een test</h1>

<ul>
    {#each products as product}
        <li>{product.name}</li>
    {/each}
</ul>