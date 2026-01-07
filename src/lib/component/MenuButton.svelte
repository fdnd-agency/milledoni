<script>
	let showMenu = 'translateX(100%)'
	let crossIcon = 'none'
	let hamburgerIcon = 'block'
    
	let toggleMenu = () => {
		if ( showMenu == 'translateX(100%)' ) {
			showMenu = 'translateX(0)'
			hamburgerIcon = 'none'
			crossIcon = 'block'
		} 
        else {
			showMenu = 'translateX(100%)'
			hamburgerIcon = 'block'
			crossIcon = 'none'
		}
	}
</script>

<nav>
    <ul class="menu" style="--show-menu: {showMenu}">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Spotters</a></li>
    </ul>
    <button class="hamburger" on:click={toggleMenu}>
        <i class="hamburger-icon material-icons" style="--hamburger-icon: {hamburgerIcon}">menu</i>
        <i class="cross-icon material-icons" style="--cross-icon: {crossIcon}">close</i>
    </button>
</nav>

<style>

    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/materialicons/v145/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
    }

    .material-icons {
        font-family: 'Material Icons';
        font-style: normal;
        font-size: 2rem;
    }

    nav {
        z-index: 50;
        text-align: right;
    }

    button {
        display: grid;
        position: relative;
        z-index: 200;
        align-items: center;
        gap: 0.6rem;
        border-radius: var(--rounding-circle);
        color: var(--text-color-button);
        background-color: var(--accent-color);
        height: 4rem;
        width: 4rem;
        border: none;
    }

    .hamburger {
        position: fixed;
        z-index: 100;
        top: 1rem;
        right: 1rem;
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