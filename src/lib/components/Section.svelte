<script lang="ts">
	import Heading from './Heading.svelte';
	import PageBody from './PageBody.svelte';

	interface Props {
		compact?: boolean;
		noSpacing?: boolean;
		heading?: any;
		body?: any;
		children?: import('svelte').Snippet;
	}

	let {
		compact = false,
		noSpacing = false,
		heading = null,
		body = null,
		children
	}: Props = $props();
	export const id = '';
	export const __typename = '';
</script>

<section
	class="w-full u-space-x"
	class:u-space-y-sm={compact}
	class:u-space-y={!compact}
	class:u-space-y-none={noSpacing}
>
	<div class="u-container-sm flex flex-col">
		{#if heading}
			<Heading {...heading} />
		{/if}

		{#if children}
			<div class="flex flex-col items-center gap-y-8">
				{@render children?.()}
			</div>
		{:else}
			<div class="flex flex-col gap-y-16">
				<PageBody {body} />
			</div>
		{/if}
	</div>
</section>
