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
  </style>