<script>
    let { data } = $props()

    //import products component
    import { Product } from '$lib'

    const products = data.product
    
    
</script>

<h1>dit is een test</h1>

<ul>
    {#each products as product}
        <Product {product}/>
    {/each}
</ul>