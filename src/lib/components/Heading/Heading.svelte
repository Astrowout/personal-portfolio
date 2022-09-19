<script lang="ts">
import { onMount } from 'svelte';
import { fly } from 'svelte/transition';
import { expoOut } from 'svelte/easing';

export let subtitle = "";
export let title = "";
export let __typename;

let mounted = false;
let ANIM_DURATION = 1400;
let ANIM_DELAY = 600;

// TODO: animate on viewport visibility
onMount(() => {
    mounted = true;
});

const lineAnim = {
    delay: ANIM_DELAY,
    duration: ANIM_DURATION,
    easing: expoOut,
};
</script>

<div class="mb-16 flex flex-col text-center items-center">
    {#if title && mounted}
        <h2
            class="u-font-display uppercase text-2xl sm:text-3xl md:text-4xl text-slate-900"
            in:fly={lineAnim}
        >
            { title }
        </h2>
    {/if}
    
    {#if subtitle && mounted}
        <h3
            class="order-first font-serif uppercase text-2xl sm:text-3xl md:text-4xl text-slate-400"
            in:fly={{
                ...lineAnim,
                delay: ANIM_DELAY + 100,
            }}
        >
            { subtitle }
        </h3>
    {/if}
</div>