<script lang="ts">
import Heading from './Heading.svelte';
import PageBody from './PageBody.svelte';

export let compact = false;
export let noSpacing = false;
export let heading = null;
export let body = null;
export let id = "";
export let __typename = "";
</script>

<section
    class="w-full u-space-x {compact ? 'u-space-y-sm' : 'u-space-y'}"
    class:u-space-y-none={noSpacing}
>
    <div class="u-container-sm flex flex-col">
        {#if heading}
            <Heading {...heading} />
        {/if}

        {#if $$slots.default}
            <div class="flex flex-col items-center gap-y-8">
                <slot></slot>
            </div>
        {:else}
            <div class="flex flex-col gap-y-16">
                <PageBody body={body} />
            </div>
        {/if}
    </div>
</section>