<script>
    import icon from "$lib/assets/menu-icon.svg";
</script>

<details>
    <summary>
        <img class="svg" src={icon} alt="account" />
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

    nav {
        z-index: 100;
    }

    img{
        margin: auto;
    }

    summary::marker {
        content: url("/src/lib/assets/menu-icon.svg") / "menu";
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
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--accent-color);
        justify-content: center;
    }

    a {
        padding: var(--spacing-m);
        color: var(--text-color-button);
        text-decoration: none;
        text-align: center;
    }
  </style>