<script lang="ts">
import { page } from '$app/stores';
export let items = [];
</script>

<div class="fixed w-full inset-x-0 bottom-8 pointer-events-none flex justify-center">
    <nav class="bg-slate-900/90 rounded-xl backdrop-blur-sm shadow-md pointer-events-auto">
        <ul class="flex text-white -mx-3 u-font-display sm:text-lg px-7">
            {#each items as item (item.id)}
                <li>
                    <a href={item.slug || '/'} class="block px-3 py-4 relative opacity-60 transition-opacity duration-300 hover:opacity-100" class:opacity-100={($page.routeId === item.slug) || (!$page.routeId && !item.slug)}>
                        <span>
                            {item.label}
                        </span>

                        {#if ($page.routeId === item.slug) || (!$page.routeId && !item.slug)}
                            <span class="z-10 absolute left-1/2 -translate-x-1/2 bottom-4 w-1 h-1 rounded-full bg-white"></span>
                        {/if}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</div>