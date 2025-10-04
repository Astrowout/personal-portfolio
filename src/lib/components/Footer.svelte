<script lang="ts">
	import Heading from './Heading.svelte';
	import LogoLine from './LogoLine.svelte';
	import LinkGroup from './LinkGroup.svelte';

	const year = new Date().getFullYear();

	interface Props {
		asPage?: boolean;
		heading: any;
		body: any;
		credits: any;
	}

	let {
		asPage = false,
		heading,
		body,
		credits
	}: Props = $props();
	export const __typename = '';
</script>

<svelte:element
	this={asPage ? 'section' : 'footer'}
	class="u-space-x flex flex-col z-10 grow overflow-hidden pb-36 {asPage
		? 'pt-8'
		: 'pt-20 footer:sticky bottom-0 w-full -z-10'}"
>
	<div class="u-container-sm w-full flex flex-col grow justify-between">
		<div>
			{#if heading}
				<Heading {...heading} />
			{/if}

			<div class="pb-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12 w-full">
				{#each body as group (group.id)}
					<LinkGroup {...group} />
				{/each}
			</div>
		</div>

		<div>
			<LogoLine class="py-4" />
			
			<p class="text-stone-300 text-center">
				© {year} astrowout.space | {credits}
			</p>
		</div>
	</div>
</svelte:element>
