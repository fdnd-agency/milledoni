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
    }

    .symbol-account {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: var(--rounding-circle);
        color: white;
        background-color: var(--accent-color);
        padding: var(--spacing-s) var(--spacing-m) var(--spacing-s) var(--spacing-m);
    }

    @container (width > 350px) {

        .symbol-account::after {
            content: "account";
        }

        .symbol-account {
            border-radius: var(--rounding-l);
        }
    }
</style>