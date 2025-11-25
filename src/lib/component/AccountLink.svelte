<div class="account-container">
    <a href="/" aria-label="jouw profiel">
        <div class="symbol-account">
            <svg width="60" height="60" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.6025 18.5225C44.7202 18.5225 48.0586 21.8608 48.0586 25.9785C48.0585 30.0962 44.7202 33.4345 40.6025 33.4346C36.4848 33.4346 33.1466 30.0962 33.1465 25.9785C33.1465 21.8607 36.4848 18.5225 40.6025 18.5225Z" stroke="white" stroke-width="4"/>
                <path d="M57.7687 51.9908H23.5532V44.9505C24.3398 43.0731 28.7445 39.3184 40.0711 39.3184C51.3976 39.3184 56.5889 43.0731 57.7687 44.9505V51.9908Z" stroke="white" stroke-width="4"/>
            </svg>
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