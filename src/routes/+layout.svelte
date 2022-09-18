<script lang="ts">
import { tweened, spring } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

import inView from "$lib/helpers/in-viewport";

import "../styles/app.css";

import Header from '$lib/components/Header/Header.svelte';
import Footer from '$lib/components/Footer/Footer.svelte';
import Navigation from '$lib/components/Navigation/Navigation.svelte';

export let data;

const ANIM_DURATION = 600;

let roundness = tweened(40, {
	duration: ANIM_DURATION,
	easing: cubicOut,
});
let scaleX = tweened(1, {
	duration: ANIM_DURATION,
	easing: cubicOut,
});
let scaleXReverse = tweened(1, {
	duration: ANIM_DURATION,
	easing: cubicOut,
});

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

const handleFooterVisible = () => {
    $roundness = 80;
    $scaleX = 0.95;
    $scaleXReverse = 1.05;
}
const handleFooterInvisible = () => {
    $roundness = 40;
    $scaleX = 1;
    $scaleXReverse = 1;
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
    class="bg-stone-100 shadow-2xl relative overflow-hidden z-0 pointer-events-auto"
    style="border-bottom-left-radius: {$roundness}px; border-bottom-right-radius: {$roundness}px; transform: scaleX({$scaleX});"
    on:introend="{() => console.log("gedaan")}"
>
    <div style="transform: scaleX({$scaleXReverse});">
        <slot></slot>
    
        <img
            src="/globe.svg"
            alt="globe background"
            class="absolute bottom-0 w-full rotate-12 -translate-x-1/3 -z-10 pointer-events-none"
        />
    </div>
</main>

<Footer {...data.footer} />

<div
    use:inView={{ bottom: -40 }}
    on:enter={handleFooterVisible}
    on:exit={handleFooterInvisible}
/>

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