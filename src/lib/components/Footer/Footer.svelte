<script lang="ts">
import Heading from '$lib/components/Heading/Heading.svelte';
import LogoLine from '$lib/components/LogoLine/LogoLine.svelte';
import LinkGroup from '$lib/components/LinkGroup/LinkGroup.svelte';

const year = new Date().getFullYear();

export let heading;
export let body;
export let credits;
export let __typename;
</script>

<footer class="px-4 sm:px-8 pt-20 pb-36 sticky bottom-0 w-full -z-10">
    <div class="max-w-screen-xl mx-auto flex flex-col items-center">
        {#if heading}
            <Heading {...heading} />
        {/if}

        <div class="pb-16 grid md:grid-cols-3 gap-x-24 gap-y-12">
            {#each body as group (group.id)}
                <LinkGroup {...group} />
            {/each}
        </div>
        
        <LogoLine class="py-8" />

        <p class="text-slate-400 text-center">
            © {year} wv.com | {credits}
        </p>
    </div>
</footer>