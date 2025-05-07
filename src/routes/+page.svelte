<script>
    import Card17 from '$lib/components/Card17.svelte';
    import Menu from '$lib/components/menu.svelte';
    export let data;
</script>

<Menu></Menu>

<main>
    <!-- <h2>Users</h2>
    {#each data.users as user}
        <ul>
            <li>ID: {user.id}</li>
            <li>NAME: {user.name}</li>
            <li>SAVED PRODUCTS: {user.saved_products}</li>
        </ul>
        <hr>
    {/each} -->

    <section class="main-content">

        <article class="chat-box">
            <h2>Chat</h2>
            <p>Chat content goes here...</p>
        </article>

        <article class="product-card_container"> 
            <Card17 data={data}></Card17>
        </article>

    </section>


</main>

<style>
    
    .main-content {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 20px;
    }

    .chat-box {
        background-color: #f9f9f9; /* Optional: Add a background color */
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
    }

    .product-card_container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

</style>