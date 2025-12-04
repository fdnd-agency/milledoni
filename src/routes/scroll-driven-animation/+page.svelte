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
    <img class="gear2" width="200px" height="200px" src={gear2} />
    <img class="gear3" width="260px" height="260px" src={gear3} />
</main>

<style>
    main {
        margin:0;
        height: 100%;
        width: 100%;
        background-color: rgb(190, 190, 190);
        position: fixed;
    }

    .clock {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .gear1 {
        position: fixed;
        right: -6rem;
        top:15vh;
    }

    .gear2 {
        position: fixed;
        left: 50%;
        transform: translate(-50%);
        bottom: -6rem;
    }

    .gear3 {
        position: fixed;
        top: -6rem;
        left: -4rem;
    }
</style>