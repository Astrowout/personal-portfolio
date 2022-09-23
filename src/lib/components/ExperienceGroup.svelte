<script lang="ts">
import Experience from './Experience.svelte';

export let experiences;
export let id;
export let __typename;
</script>

{#each experiences as item (item.id)}
	<Experience {...item} />
{/each}