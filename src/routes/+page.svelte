<script>
    import { Card11 } from "$lib/index.js";
    import { Icons } from "$lib/index.js";
    export let data;
</script>

<main>
    <section class="main-content">
        <article class="chat-box">
            <Chat />
        </article>

        <article class="product-card_container">
            <button class="filter-button">
                <Icons name="filter" width="47px" height="47px"></Icons>
                FILTER
            </button>
            <Card11 {data}></Card11>
        </article>
    </section>
</main>

<style>
    .main-content {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 20px;
    }

    .product-card_container {
        background-color: var(--bg-cs-color);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }

    .filter-button {
        background-color: var(--bg-cs-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        width: fit-content;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 10px 0 0 10px;
    }
</style>
