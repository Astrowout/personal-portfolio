<script lang="ts">
import { onMount } from 'svelte';
import { scale } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
import { page } from '$app/stores';

export let items = [];

let mounted = false;

const dotAnim = {
    duration: 300,
    ease: quintOut,
    start: 0,
};

$: getIsActive = (slug) => {
    return ($page.routeId === slug) || (!$page.routeId && !slug);
}

onMount(() => {
    mounted = true;
});
</script>

<div class="fixed w-full z-50 inset-x-0 bottom-6 sm:bottom-8 pointer-events-none flex justify-center">
    <nav
        class="bg-slate-900/90 rounded-xl backdrop-blur-sm shadow-md pointer-events-auto transition ease-out delay-1000 duration-300"
        class:opacity-0={!mounted}
        class:translate-y-12={!mounted}
        class:opacity-100={mounted}
        class:translate-y-0={mounted}
    >
        <ul class="flex text-white -mx-3 u-font-display sm:text-lg px-7">
            {#each items as item (item.id)}
                <li>
                    <a
                        href={item.slug || '/'}
                        class="block px-3 py-4 relative transition-opacity duration-300 hover:opacity-100"
                        class:opacity-60={!getIsActive(item.slug)}
                        class:opacity-100={getIsActive(item.slug)}
                    >
                        <span>
                            {item.label}
                        </span>

                        {#if ($page.routeId === item.slug) || (!$page.routeId && !item.slug)}
                            <span
                                class="z-10 absolute left-1/2 -translate-x-1/2 bottom-4 w-1 h-1 rounded-full bg-white transition"
                                transition:scale={dotAnim}
                            ></span>
                        {/if}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</div>