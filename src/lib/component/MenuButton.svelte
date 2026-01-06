<script>
	let showMenu = 'translateX(100%)'
	let crossIcon = 'none'
	let hamburgerIcon = 'block'
	let toggleMenu = () => {
		if ( showMenu == 'translateX(100%)' ) {
			showMenu = 'translateX(0)'
			hamburgerIcon = 'none'
			crossIcon = 'block'
		} else {
			showMenu = 'translateX(100%)'
			hamburgerIcon = 'block'
			crossIcon = 'none'
		}
	}
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</svelte:head>

<ul class="menu" style="--show-menu: {showMenu}">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Spotters</a></li>
</ul>

<button class="hamburger" on:click={toggleMenu}>
    <i class="hamburger-icon material-icons" style="--hamburger-icon: {hamburgerIcon}">menu</i>
    <i class="cross-icon material-icons" style="--cross-icon: {crossIcon}">close</i>
</button>

<style>
    .hamburger {
        position: fixed;
        z-index: 100;
        top: 1rem;
        right: 1rem;
        padding: 4px;
        /* border: black solid 1px; */
        background: white;
        cursor: pointer;
    }
    
.hamburger-icon {
  display: var(--hamburger-icon);
}
.cross-icon {
  display: var(--cross-icon);
}
.menu {
    display: flex;
    flex-direction: column;
    position: fixed;

    transform: var(--show-menu);
    transition: transform 0.2s;

    top: 0;
    right: 0;

    background-color: var(--accent-color);
    justify-content: center;
    z-index: 100;

    list-style: none;
    padding-top: 4rem;
    width: 50vw;
    height: 100vh;

    overflow: hidden;
        padding: 0;
        margin: 0;
        -webkit-transition: all 0.3s ease;
}

 /* ul {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
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
    } */

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

</style>




<!-- <script>
    import icon from "$lib/assets/menu-icon.svg";
    let open = false;
</script>

<nav>
    <label for="menu-toggle"><img src={icon} alt="menu" /></label>
    <input type="checkbox" id="menu-toggle"/>
    <ul id="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Spotters</a></li>
    </ul>
</nav>

  <style>

    nav {
        z-index: 50;
        text-align: right;
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

        @media (min-width: 768px) {
            max-width: 50vw;
        }

        @media (min-width: 1024px) {
            max-width: 40vw;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
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

    @media (min-width: 768px) {
        label::after {
        content: "Menu";
    }

    label {
        display: inline-flex;
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
  </style> -->