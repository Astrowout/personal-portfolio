<script lang="ts">
	import PageBody from './PageBody.svelte';

	export let body = null;
	export const id = '';
	export const __typename = '';
</script>

<div class="w-full grid grid-cols-6 gap-x-6 gap-y-8 items-start">
	{#if $$slots.default}
		<slot />
	{:else}
		<PageBody {body} />
	{/if}
</div>
