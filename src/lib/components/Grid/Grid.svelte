<script lang="ts">
import PageBody from '../PageBody/PageBody.svelte';

export let body;
export let id;
export let __typename;
</script>

<div class="w-full grid grid-cols-6 gap-6 lg:gap-8 items-start">
    <PageBody body={body} />
</div>