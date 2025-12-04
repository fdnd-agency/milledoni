<script>
	import clock from '$lib/assets/clock.png';
    import background from '$lib/assets/gear-background.jpg';
    import steam from '$lib/assets/steam.png';
    import gear1 from '$lib/assets/gear1.png';
    import gear2 from '$lib/assets/gear2.png';
    import gear3 from '$lib/assets/gear3.png';
    import gear4 from '$lib/assets/gear4.png';
    import gear5 from '$lib/assets/gear5.png';

    import { gsap } from "gsap";
    import { onMount } from 'svelte';

    // Animations
    onMount(() => {
        gsap.to(".gear1", {
            duration: 3,
            rotation: 360,
        });
    });
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
        background-blend-mode: overlay; 
    }

    .clock {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        /* tablet */
        @media (min-width: 426px) {
            width: 25rem;
            height: 25rem;
        }

        /* laptop small */
        @media (min-width: 769px) {
            width: 30rem;
            height: 30rem;
        }

        /* laptop medium */
        @media (min-width: 1025px) {
            width: 40rem;
            height: 40rem;
        }
    }

    .gear1 {
        position: fixed;
        left: 44%;
        top: 15%;

        /* tablet */
        @media (min-width: 426px) {
            width: 20rem;
            height: 20rem;
            left: 50%;
        }

        /* laptop small */
        @media (min-width: 769px) {
            width: 25rem;
            height: 25rem;
            left: 50%;
            top: 5%;
        }

        /* laptop medium */
        @media (min-width: 1025px) {
            width: 30rem;
            height: 30rem;
        }
    }

    .gear2 {
        position: fixed;
        left: 50%;
        transform: translate(-50%);
        bottom: -10%;

        /* tablet */
        @media (min-width: 426px) {
            width: 15rem;
            height: 15rem;
        }

        /* laptop medium */
        @media (min-width: 769px) {
            width: 16rem;
            height: 16rem;
            /* bottom: -25%; */
            left: 60%;
            transform: translate(-40%);
        }

        /* laptop small */
        @media (min-width: 1025px) {
            width: 20rem;
            height: 20rem;
            bottom: -15%;
        }
    }

    .gear3 {
        position: fixed;
        top: -6%;
        left: -24%;

        /* tablet */
        @media (min-width: 426px) {
            width: 18rem;
            height: 18rem;
            left: -14%;
        }

        /* laptop small */
        @media (min-width: 769px) {
            left: -7%;
            width: 20rem;
            height: 20rem;
        }

        /* laptop medium */
        @media (min-width: 1025px) {
            width: 32rem;
            height: 32rem;
            top: -10%;
            left: -14%;
        }
    }

    .gear4 {
        position: fixed;
        top: 60%;
        left: 40%;
        transform: translate(-60%, -40%);

        /* tablet */
        @media (min-width: 426px) {
            width: 15rem;
            height: 15rem;
            left: 30%;
            transform: translate(-70%, -40%);
        }

        /* laptop small */
        @media (min-width: 769px) {
            width: 17rem;
            height: 17rem;
            left: 35%;
            transform: translate(-65%, -40%);
        }

        /* laptop medium */
        @media (min-width: 1025px) {
            width: 20rem;
            height: 20rem;
        }
    }

    .gear5 {
        position: fixed;
        left: 60%;
        transform: translate(-40%);
        bottom: -6%;

        /* tablet */
        @media (min-width: 426px) {
            width: 8rem;
            height: 8rem;
        }

        /* laptop small */
        @media (min-width: 769px) {
            width: 10rem;
            height: 10rem;
            left: 70%;
        }

        /* laptop medium */
        @media (min-width: 1025px) {
            width: 14rem;
            height: 14rem;
            bottom: -10%;
        }
    }

    .steam1 {
        position: fixed;
        z-index: 1000;
        bottom: -3%;
        left: -50%;
        opacity: 55%;

        /* tablet */
        @media (min-width: 426px) {
            scale: 160%;
            left: -10%;
        }

        /* laptop small */
        @media (min-width: 769px) {
            scale: 200%;
        }

        /* laptop medium */
        @media (min-width: 1025px) {
            scale: 250%;
            left: -10%;
        }
    }

    .steam2 {
        position: fixed;
        z-index: 1000;
        top: 0;
        right: -70%;
        opacity: 55%;

        /* tablet */
        @media (min-width: 426px) {
            scale: 160%;
            right: -60%;
        }

        /* laptop small */
        @media (min-width: 769px) {
            scale: 200%;
        }

        /* laptop medium */
        @media (min-width: 1025px) {
            scale: 250%;
            right: -10%;
        }
    }
</style>