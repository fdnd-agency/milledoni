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
        border-radius: var(--rounding-circle);
        color: white;
        background-color: var(--accent-color);
        padding-right: none;
    }

    @container (width > 350px) {

        .symbol-account::after {
            content: "account";
        }

        .symbol-account {
            border-radius: var(--rounding-l);
            padding-left: 1rem;
            padding-right: 2rem;
        }
    }
</style>