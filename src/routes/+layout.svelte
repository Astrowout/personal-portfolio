<script lang="ts">
import { spring } from 'svelte/motion';
import { page } from '$app/stores';

import inView from "$lib/helpers/in-viewport";

import "../styles/app.css";

import Header from '$lib/components/Header/Header.svelte';
import Footer from '$lib/components/Footer/Footer.svelte';
import Navigation from '$lib/components/Navigation/Navigation.svelte';

export let data;

$: isContactPage = $page.routeId === "contact";

let scrollEnd = false;

let coords = spring({ x: 0, y: 0 }, {
    stiffness: 0.1,
    damping: 0.5,
});
let size = spring(10);

const updateCoords = (e) => {
    if (e.clientX > 0 && e.clientY > 0) {
        coords.set({ x: e.clientX, y: e.clientY });
    }
}

const handleBottom = () => {
    scrollEnd = true;
}
const handleScrollUp = () => {
    scrollEnd = false;
}
</script>

<svelte:window
    on:mousemove={updateCoords}
    on:mousedown="{() => size.set(20)}"
	on:mouseup="{() => size.set(10)}"
/>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<Header cta={data.mainCta} />

<main
    class="bg-stone-100 shadow-xl relative overflow-hidden z-0 pointer-events-auto transition-all duration-500 rounded-b-[40px] min-h-screen"
    class:scale-x-95={scrollEnd}
    class:bg-white={scrollEnd}
>
    <div class:scale-x-105={scrollEnd} class="transition-transform duration-500">
        <slot></slot>
    
        <img
            src="/globe.svg"
            alt="globe background"
            class="absolute bottom-0 w-full rotate-12 -translate-x-1/3 -z-10 pointer-events-none"
        />
    </div>
</main>

{#if !isContactPage}
    <Footer {...data.footer} />

    <div
        use:inView={{ bottom: -40 }}
        on:enter={handleBottom}
        on:exit={handleScrollUp}
    />
{/if}

<Navigation items={data.navigation} />

<svg
    class="pointer-events-none fixed inset-0 w-full h-full z-10 hidden lg:block"
>
	<circle
        cx={$coords.x}
        cy={$coords.y}
        r={$size}
        class="stroke-stone-300 stroke-2 fill-transparent"
    />
</svg>