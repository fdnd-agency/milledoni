<script>
    import symbolLogo from "$lib/assets/milledoni-symbol-logo.svg";
    import wordmarkLogo from "$lib/assets/milledoni-wordmark-logo.svg";
</script>

<div class="logo-container">
    <a href="/" class="logo-link">
        <div class="symbol-logo">
            <img class="svg" src={symbolLogo} alt="home" />
        </div> 
        <div class="wordmark">
            <img class="svg" src={wordmarkLogo} alt="home" />
        </div>             
    </a>
</div>

<style>
    .logo-container {
        container-type: inline-size;
        width: 100%;
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
    
    @container (width > 350px) {
        .symbol-logo {
            display: none;
        }
    
        .wordmark {
            display: block;
        }
    }
    </style>