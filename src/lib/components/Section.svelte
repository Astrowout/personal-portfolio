<script lang="ts">
import Heading from './Heading.svelte';
import PageBody from './PageBody.svelte';

export let compact = false;
export let heading;
export let body;
export let id;
export let __typename;
</script>

<section class="w-full u-space-x {compact ? 'u-space-y-sm' : 'u-space-y'}">
    <div class="u-container-sm flex flex-col">
        {#if heading}
            <Heading {...heading} />
        {/if}

        <div class="flex flex-col gap-y-16">
            <PageBody body={body} />
        </div>
    </div>
</section>