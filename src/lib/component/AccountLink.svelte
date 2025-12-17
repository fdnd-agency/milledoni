<script>
    import icon from "$lib/assets/account-icon.svg";
</script>

<div class="account-container">
    <a href="/" aria-label="jouw profiel">
        <div class="symbol-account">
            <img class="svg" src={icon} alt="account" />
        </div>
    </a>
</div>

<style>
    .account-container {
        container-type: inline-size;
        width: 25%;
        text-align: right;
    }

    a {
        display: inline-flex;
        text-decoration: none;
    }
    
    img {
        margin: auto;
    }

    .symbol-account {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        border-radius: var(--rounding-circle);
        color: var(--text-color-button);
        background-color: var(--neutral-color-background-icons);
        height: 4rem;
        width: 4rem;
    }

    @container (width > 350px) {

        .symbol-account::after {
            content: "Account";
        }

        .symbol-account {
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

    @container (width > 450px) {

        .symbol-account::after {
            content: "Mijn Account";
        }
    }
</style>