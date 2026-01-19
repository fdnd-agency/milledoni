<script>
    import symbolLogo from "$lib/assets/milledoni-symbol-logo.svg";
    import wordmarkLogo from "$lib/assets/milledoni-wordmark-logo.svg";
</script>

<div>
    <a href="/">
        <span class="symbol-logo">
            <img src={symbolLogo} alt="home" />
        </span> 
        <span class="wordmark-logo">
            <img src={wordmarkLogo} alt="home" />
        </span>             
    </a>
</div>

<style>
    div {
        container-type: inline-size;
        width: 50%;
    }

    a {
        display: inline-flex;
    }
    
    .symbol-logo {
        display: block;
    }

    .wordmark-logo {
        display: none;
    }

    img {
        height: 3.5rem;
    }
    
    @container (width > 350px) {
        .symbol-logo {
            display: none;
        }
    
        .wordmark-logo {
            display: block;
        }
    }
    </style>