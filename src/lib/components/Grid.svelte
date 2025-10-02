<script lang="ts">
	import PageBody from './PageBody.svelte';

	interface Props {
		body?: any;
		children?: import('svelte').Snippet;
	}

	let { body = null, children }: Props = $props();
	export const id = '';
	export const __typename = '';
</script>

<div class="w-full grid grid-cols-6 gap-x-6 gap-y-8 items-start">
	{#if children}
		{@render children?.()}
	{:else}
		<PageBody {body} />
	{/if}
</div>
