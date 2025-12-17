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
        background-color: black;
    }

    summary::marker {
        content: url("/src/lib/assets/menu-icon.svg") / "menu";
    }
  </style>