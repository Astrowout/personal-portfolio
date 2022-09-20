<script lang="ts">
import Heading from '../Heading/Heading.svelte';
import LogoLine from '../LogoLine/LogoLine.svelte';
import LinkGroup from '../LinkGroup/LinkGroup.svelte';

const year = new Date().getFullYear();

export let heading;
export let body;
export let credits;
export let __typename;
</script>

<footer class="u-space-x pt-24 md:pt-36 pb-36 footer:sticky bottom-0 w-full -z-10 pointer-events-auto overflow-hidden">
    <div class="u-container-sm flex flex-col items-center">
        {#if heading}
            <Heading {...heading} />
        {/if}

        <div class="pb-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12 w-full">
            {#each body as group (group.id)}
                <LinkGroup {...group} />
            {/each}
        </div>
        
        <LogoLine class="py-4" />

        <p class="text-stone-300 text-center">
            © {year} wv.com | {credits}
        </p>
    </div>
</footer>