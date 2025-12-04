<script>
	import clock from '$lib/assets/clock.png';
    import background from '$lib/assets/gear-background.jpg';
    import steam from '$lib/assets/steam.png';
    import gear1 from '$lib/assets/gear1.png';
    import gear2 from '$lib/assets/gear2.png';
    import gear3 from '$lib/assets/gear3.png';
    import gear4 from '$lib/assets/gear4.png';
    import gear5 from '$lib/assets/gear5.png';
</script>

<main style="background-image: url({background})">
    <!-- Center item: clock -->
    <img alt="pendulum clock" class="clock" width="300px" height="300px" src={clock} />
    <!-- Gear items -->
    <img class="gear1" width="280px" height="280px" src={gear1} />
    <img class="gear2" width="200px" height="200px" src={gear2} />
    <img class="gear3" width="260px" height="260px" src={gear3} />
    <img class="gear4" width="180px" height="180px" src={gear4} />
    <img class="gear5" width="120px" height="120px" src={gear5} />

    <!-- Steam items -->
    <img class="steam1" width="495px" height="248px" src={steam} />
    <img class="steam2" width="495px" height="248px" src={steam} />
</main>

<style>
    main {
        margin:0;
        height: 100%;
        width: 100%;
        background-color: hsla(0, 0%, 0%, 0.400);
        position: fixed;
        background-size: cover;
        background-position: center;
        background-blend-mode: overlay; 
    }

    .clock {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .gear1 {
        position: fixed;
        right: -26%;
        top: 15%;
    }

    .gear2 {
        position: fixed;
        left: 50%;
        transform: translate(-50%);
        bottom: -10%;
    }

    .gear3 {
        position: fixed;
        top: -6%;
        left: -24%;
    }

    .gear4 {
        position: fixed;
        top: 60%;
        left: 40%;
        transform: translate(-60%, -40%);
    }

    .gear5 {
        position: fixed;
        left: 60%;
        transform: translate(-40%);
        bottom: -6%;
    }

    .steam1 {
        position: fixed;
        z-index: 1000;
        bottom: -3%;
        left: -50%;
        opacity: 55%;
    }

    .steam2 {
        position: fixed;
        z-index: 1000;
        top: 0;
        right: -70%;
        opacity: 55%;
    }
</style>