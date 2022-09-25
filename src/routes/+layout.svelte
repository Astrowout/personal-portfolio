<script lang="ts">
import { inview } from 'svelte-inview';
import { spring } from 'svelte/motion';
import { fly } from "svelte/transition";
import { page } from '$app/stores';

import { pageAnim } from '$lib/animations';
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import Navigation from '$lib/components/Navigation.svelte';

import "../styles/app.css";

export let data;

$: isContactPage = $page.routeId === "contact";
let isInView = false;

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

const handleInview = ({ detail }) => {
    isInView = detail.inView;
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
    class="flex flex-col flex-grow relative bg-stone-100 shadow-xl overflow-hidden z-0 pointer-events-auto transition-all duration-500 rounded-b-[40px]"
    class:scale-[96%]={isInView}
    class:pb-16={!isContactPage}
>
    {#key data.pathname}
        <div
            class="flex flex-col flex-grow"
            in:fly={{
                ...pageAnim,
                delay: pageAnim.duration,
            }}
            out:fly={{
                ...pageAnim,
            }}
        >
            <slot />
        </div>
    {/key}

    <img
        src="/globe.svg"
        alt="globe background"
        class="absolute left-0 bottom-0 w-full rotate-12 -translate-x-1/3 -z-10 pointer-events-none"
    />
</main>

{#if !isContactPage}
    <div
        use:inview
        class="hidden footer:block w-px h-px"
        on:change={handleInview}
    />

    <Footer {...data.footer} />
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