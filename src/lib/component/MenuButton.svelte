<script>
    import icon from "$lib/assets/menu-icon.svg";
    let open = false;
</script>


<details>
    <summary>
        <img src={icon} alt="account" />
    </summary>
    <nav>
            <a href="">home</a>
            <a href="">about</a>
            <a href="">spotters</a>
    </nav>
</details>

  <style>

    details {
        z-index: 50;
    }

    summary {
        position: relative;
        z-index: 200;
    }

    img{
        margin: auto;
    }

    summary {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        border-radius: var(--rounding-circle);
        color: var(--text-color-button);
        background-color: var(--accent-color);
        height: 4rem;
        width: 4rem;
    }

    nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--accent-color);
        justify-content: center;
        z-index: 100;

        @media (min-width: 970px) {
            width: fit-content;
            height: auto;
            top: 6rem;
            position: absolute;
        }
    }

    a {
        padding: var(--spacing-m);
        color: var(--text-color-button);
        text-decoration: none;
        text-align: center;
        font-size: var(--text-font-size-l);

        @media (min-width: 970px) {
            color: rgb(145, 145, 145);
            background-color: var(--neutral-color-background-menu);
            border-bottom: 2px solid rgb(203, 203, 203);
            font-size: var(--text-font-size-s);
        }
    }

    @container (width > 350px) {

        summary::marker {
            content: "Menu";
        }

        summary {
            border-radius: var(--rounding-l);
            width: auto;
            height: auto;
            padding: var(--spacing-s) var(--spacing-m) var(--spacing-s) var(--spacing-m);
        }

        img {
            width: 1.5rem;
            height: 1.5rem;
        }
}
  </style>