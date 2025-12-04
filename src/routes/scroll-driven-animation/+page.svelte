<script>
	import clock from '$lib/assets/clock.png';
    import gear1 from '$lib/assets/gear1.png';
    import gear2 from '$lib/assets/gear2.png';
    import gear3 from '$lib/assets/gear3.png';
    import gear4 from '$lib/assets/gear4.png';
    import gear5 from '$lib/assets/gear5.png';
    import background from '$lib/assets/gear-background.jpg';
</script>

<main>
    <!-- Center item: clock -->
    <img alt="pendulum clock" class="clock" width="300px" height="300px" src={clock} />

    <!-- Gear items -->
    <img class="gear1" width="280px" height="280px" src={gear1} />
</main>

<style>
    main {
        margin:0;
        height: 100vh;
        width: 100vw;
        background-color: rgb(190, 190, 190);
        z-index: auto;
    }

    .clock {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .gear1 {
        position: fixed;
        right: -6rem;
        top:15vh;
    }
</style>