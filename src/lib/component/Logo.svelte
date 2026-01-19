<script>
    import symbolLogo from "$lib/assets/milledoni-symbol-logo.svg";
    import wordmarkLogo from "$lib/assets/milledoni-wordmark-logo.svg";
</script>

<div class="logo-container">
    <a href="/" class="logo-link">
        <span class="symbol-logo">
            <img src={symbolLogo} alt="home" />
        </span> 
        <span class="wordmark">
            <img src={wordmarkLogo} alt="home" />
        </span>             
    </a>
</div>

<style>
    .logo-container {
        container-type: inline-size;
        width: 50%;
    }

    .logo-link {
        display: inline-flex;
    }
    
    .symbol-logo {
        display: block;
    }

    .wordmark {
        display: none;
    }

    img {
        height: 3.5rem;
    }
    
    @container (width > 350px) {
        .symbol-logo {
            display: none;
        }
    
        .wordmark {
            display: block;
        }
    }
    </style>