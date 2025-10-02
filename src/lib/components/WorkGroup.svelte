<script lang="ts">
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';

	import WorkPreview from './WorkPreview.svelte';
	import Button from './Button.svelte';

	interface Props {
		works: any;
		showCta?: boolean;
	}

	let { works, showCta = false }: Props = $props();
	export const id = '';
	export const __typename = '';

	let isInView = $state(false);

	const handleEnter = () => {
		isInView = true;
	};

	const handleLeave = ({ detail }) => {
		if (detail.scrollDirection.vertical === 'down') {
			isInView = false;
		}
	};
</script>

<div class="flex flex-col items-center">
	<div
		use:inview={{
			rootMargin: '0px 0px -200px 0px',
			unobserveOnEnter: true
		}}
		onenter={handleEnter}
		onleave={handleLeave}
		class="w-full grid lg:grid-cols-2 gap-x-10 gap-y-12 items-start"
	>
		{#each works as item, index (item.id)}
			<div
				class="u-anim-start"
				class:u-anim-end={isInView}
				style="transition-delay: {isInView ? index * 120 : 0}ms;"
			>
				<WorkPreview {...item} />
			</div>
		{/each}
	</div>

	{#if showCta}
		<Button href="/work" class="mt-16 text-center">
			{$page.data.t['generic.allWork']}
		</Button>
	{/if}
</div>
