<script lang="ts">
import { fly } from 'svelte/transition';

import { inView } from "$lib/actions";
import { flyIn } from "$lib/animations";

import Link from '../Link/Link.svelte';

export let title = "";
export let links = [];
export let id;
export let __typename;

let isInView = false;
const ANIM_DELAY = 200;
</script>

<div
    use:inView
    on:enter={() => isInView = true}
    class="flex flex-col gap-y-4"
>
    {#if title && isInView}
        <h4
            class="text-xl text-slate-400"
            in:fly={{
                ...flyIn,
                delay: ANIM_DELAY,
            }}
        >
            { title }
        </h4>
    {/if}
    
    {#if links && !!links.length && isInView}
        <ul
            class="flex flex-col gap-y-2"
        >
            {#each links as link, index (link.url)}
                <li
                    in:fly={{
                        ...flyIn,
                        delay: ANIM_DELAY + (index * 100),
                    }}
                >
                    <Link {...link} />
                </li>
            {/each}
        </ul>
    {/if}
</div>