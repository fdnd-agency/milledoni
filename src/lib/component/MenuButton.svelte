<script>
    import icon from "$lib/assets/menu-icon.svg";
    let open = false;
</script>

<nav>
    <label for="menu-toggle"><img src={icon} alt="account" /></label>
    <input type="checkbox" id="menu-toggle"/>
    <ul id="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Spotters</a></li>
    </ul>
</nav>

  <style>

    nav {
        container-type: inline-size;
        width: 25%;
        z-index: 50;
    }

    label {
        position: relative;
        z-index: 200;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        border-radius: var(--rounding-circle);
        color: var(--text-color-button);
        background-color: var(--accent-color);
        height: 4rem;
        width: 4rem;
    }

    img{
        margin: auto;
    }

    #menu-toggle {
        display: none;
    }

    #menu-toggle:checked + #menu {
        max-width: 100vw;
    }

    ul {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--accent-color);
        justify-content: center;
        z-index: 100;
        overflow: hidden;
        max-width: 0;
        padding: 0;
        margin: 0;
        -webkit-transition: all 0.3s ease;
        width: 100vw;
        height: 100vh;
    }

    li {
        text-align: center;
        padding: var(--spacing-s);
    }

    a {
        padding: var(--spacing-m);
        color: var(--text-color-button);
        text-decoration: none;
        text-align: center;
        font-size: var(--text-font-size-l);
    }

    /* details {
        container-type: inline-size;
        width: 100%;
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
} */
  </style>