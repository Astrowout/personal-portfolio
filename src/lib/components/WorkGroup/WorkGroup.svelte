<script lang="ts">
import WorkPreview from '../WorkPreview/WorkPreview.svelte';

export let works;
export let id;
export let __typename;
</script>

<div class="w-full grid grid-cols-6 gap-6 lg:gap-8 items-start">
	{#each works as item (item.id)}
		<WorkPreview {...item} />
	{/each}
</div>