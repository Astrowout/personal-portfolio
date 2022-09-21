<script lang="ts">
import { fly } from 'svelte/transition';

import { inView } from "$lib/actions";
import { flyIn } from "$lib/animations";

export let subtitle = "";
export let title = "";
export let __typename;

let isInView = false;
</script>

<div
    use:inView
    on:enter={() => isInView = true}
    class="mb-12 md:mb-16 flex flex-col text-center items-center"
>
    {#if title && isInView}
        <h2
            class="u-font-display uppercase text-3xl sm:text-4xl text-slate-900"
            in:fly={{
                ...flyIn,
                delay: 100,
            }}
        >
            { title }
        </h2>
    {/if}
    
    {#if subtitle && isInView}
        <h3
            class="order-first font-serif uppercase text-3xl sm:text-4xl text-slate-400"
            in:fly={flyIn}
        >
            { subtitle }
        </h3>
    {/if}
</div>