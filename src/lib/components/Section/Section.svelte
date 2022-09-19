<script lang="ts">
import Heading from '../Heading/Heading.svelte';
import PageBody from '../PageBody/PageBody.svelte';

export let heading;
export let body;
export let id;
export let __typename;
</script>

<section class="u-space-x py-16 md:py-24 w-full">
    <div class="u-container-sm flex flex-col items-center">
        {#if heading}
            <Heading {...heading} />
        {/if}

        <PageBody body={body} />
    </div>
</section>