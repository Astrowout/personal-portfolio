<script lang="ts">
import { onMount } from 'svelte';
import { slide } from 'svelte/transition';
import { expoOut } from 'svelte/easing';

import Link from '$lib/components/Link/Link.svelte';

export let title = "";
export let links = [];
export let id;
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

<div class="flex flex-col gap-y-4">
    {#if title && mounted}
        <h4
            class="u-font-display uppercase text-md sm:text-lg md:text-xl text-slate-400"
            in:slide={lineAnim}
        >
            { title }
        </h4>
    {/if}
    
    {#if links && !!links.length}
        <ul
            class="flex flex-col gap-y-2"
        >
            {#each links as link (link.url)}
                <li>
                    <Link {...link} />
                </li>
            {/each}
        </ul>
    {/if}
</div>