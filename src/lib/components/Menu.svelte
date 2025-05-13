<script>
    import { page } from '$app/stores';
    import { Icons } from "$lib/index.js";

    $: currentPath = $page.url.pathname;
</script>

<header>
    <nav>
        <picture>
            <a href="/">
                <Icons name="logo" width="19.6vw" height="auto"></Icons>
            </a>
        </picture>
        <div class="search-wrapper">
            <form class="search-container" role="search" aria-label="Search for a gift">
                <button type="button" class="icon-button" aria-label="Add">
                    <Icons name="plus" width="20px" height="20px"></Icons>
                </button>
            
                <button type="button" class="icon-button" aria-label="Voice Search">
                    <Icons name="mic" width="20px" height="20px"></Icons>
                </button>
            
                <input
                type="search"
                placeholder="I search a gift for a Dreamer"
                aria-label="Search input"
                />
            
                <button type="submit" class="icon-button search-button" aria-label="Search">
                    <Icons name="search" width="20px" height="20px"></Icons>
                </button>
            </form>
        </div>
        <ul>
            <li class:active={currentPath === '/'}>
                <a href="./">
                    <Icons name="home" width="38px" height="39px" color="var(--nav-color)"></Icons>
                    <span>Home</span>
                </a>
            </li>
            <li class:active={currentPath === '/ideas'}>
                <a href="./ideas">
                    <Icons name="light" width="32px" height="33px" color="var(--nav-color)"></Icons>
                    <span>Ideas</span>
                </a>
            </li>
            <li class:active={currentPath === '/lists'}>
                <a href="./lists">
                    <Icons name="list" width="40px" height="40px" color="var(--nav-color)"></Icons>
                    <span>My Lists</span>
                </a>
            </li>
            <li class:active={currentPath === '/profile'}>
                <a href="./profile">
                    <Icons name="profile" width="35px" height="36px" color="var(--nav-color)"></Icons>
                    <span>Profile</span>
                </a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        height: 4.375em;
        width: 100%;
        max-width: 100vw;
        position: fixed;
        overflow: hidden;
        bottom: 0;
        z-index: 9999;

        background-color: var(--bg-color);
        border-top: 1px solid #0000005b;

        picture, .search-wrapper {
            display: none;
        }

        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            gap: 3.5em;
            padding: .6em 0 .6em 0;

            li {
                a{
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    cursor: pointer;

                    --nav-color: var(--icon-color)
                }

                :global(svg) {
                    height: 2em;
                }

                span{
                    font-weight: var(--font-weight-medium);
                    color: var(--txt-color);
                    font-size: var(--font-size-card-details);
                }
            }

            li.active {
                span {
                    font-weight: 600;
                }

                :global(svg){
                    --nav-color: var(--icon-active-color)
                }
            }
        }
    }

    @media (min-width: 1024px) {
        header {
            top: 0;
            position: sticky;
            display: flex;
            align-items: center;
            /* height: 8.625em; */
            height: 7em;
            border-top: unset;
            margin-bottom: 1.5em;
            
            nav {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100vw;
                padding: 0 2.5em 0 2.5em;

                ul {
                    gap: 1em;
                    width: 31.666vw;
                    justify-content: flex-end;

                    li:nth-of-type(1), li:nth-of-type(2) {
                        display: none;
                    }

                    
                    li:nth-of-type(3) {
                        background-color: var(--bg-card-color);
                        box-shadow: 0px 2px 8px 0px #0000001A;
                        padding: .8em 1.6em .8em 1.6em;
                        border-radius: 6.75em;

                        a {
                            flex-direction: row-reverse;
                        }
                    }

                    li:nth-of-type(4) {
                        background-color: var(--bg-card-color);
                        box-shadow: 0px 2px 8px 0px #0000001A;
                        padding: .8em;
                        border-radius: 6.75em;
                        width: 3.24vw;
                        
                        span {
                            display: none;
                        }
                    }
                }
            }
            
            picture {
                display: block;
                width: 31.666vw;
            }

            .search-wrapper {
                padding: 2px; /* Dikte van de border */
                border-radius: 9999px;
                background: linear-gradient(to right, #84C7DF, #CE89B5, #F0B743, #82C7E1);
                display: inline-block;
            }

            .search-container {
                width: 31.666vw;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem 1rem;
                border-radius: 9999px;
                background: white;
                /* background-clip: padding-box;
                border: 2px solid transparent;
                background-origin: border-box;
                position: relative; */

                .icon-button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.25rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--icon-color);
                }

                .search-button {
                    width: 3em;
                    height: 3em;
                    background: black;
                    border-radius: 100%;
                }

                input[type="search"] {
                    border: none;
                    outline: none;
                    flex: 1;
                    font-size: 1rem;
                    color: var(--icon-color);
                    background: transparent;
                }

                input::placeholder {
                    color: var(--txt-ph-color);
                }
            }
        }
    }
</style>