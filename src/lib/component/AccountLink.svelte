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
        width: 100%;
    }

    a {
        display: inline-flex;
        text-decoration: none;
    }

    .symbol-account {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        border-radius: var(--rounding-circle);
        color: white;
        background-color: var(--accent-color);
        padding: var(--spacing-s);
    }

    @container (width > 350px) {

        .symbol-account::after {
            content: "account";
            text-transform: uppercase;
        }

        .symbol-account {
            border-radius: var(--rounding-l);
            padding: var(--spacing-s) var(--spacing-m) var(--spacing-s) var(--spacing-m);
        }
    }
</style>