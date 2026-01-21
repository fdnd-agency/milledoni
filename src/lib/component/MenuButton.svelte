<script>
    // Run code only in the browser after Server-Side Rendering, when the component mounts
    import { onMount } from 'svelte';

    // Execute this code after the component is mounted and hydrated in the DOM
    onMount(() => {

        // Check if the Font Loading API is supported by the browser
        if (document.fonts) {
            document.fonts

                // Ask the browser to ensure the font is available (waits for load or cache)
                .load('1em "Material Icons"')

                // Add a class to the document once the font is successfully available
                .then((fonts) => {
                    if (fonts.length > 0) {
                        document.documentElement.classList.add('icons-loaded');
                    }
                });
        }
    });

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
    <button class="hamburger" on:click={toggleMenu}>
        <i class="hamburger-icon material-icons" style="--hamburger-icon: {hamburgerIcon}">menu</i>
        <i class="cross-icon material-icons" style="--cross-icon: {crossIcon}">close</i>
    </button>
    <ul style="--show-menu: {showMenu}">
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

    ul {
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
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        padding: 0;
        margin: 0;
        -webkit-transition: all 0.3s ease;

        @media (min-width: 768px) {
            max-width: 25vw;
        }
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
        font-size: var(--text-font-size-m);
    }

    a:hover {
        opacity: 0.5;
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
    
    .material-icons {
        font-family: 'Material Icons';
        font-style: normal;
        font-size: 1rem;
    }
    
    .hamburger-icon {
        display: var(--hamburger-icon);
    }

    .cross-icon {
        display: var(--cross-icon);
    }

    /* Add class when font has loaded */
    :global(.icons-loaded) .material-icons {
    	font-size: 2rem;
    }
</style>