<script lang="ts">
import { page } from '$app/stores';
import { inview } from 'svelte-inview';

import WorkPreview from './WorkPreview.svelte';
import Button from './Button.svelte';

export let works;
export let showCta = false;
export let id;
export let __typename;

let isInView = false;

const handleEnter = () => {
	isInView = true;
}

const handleLeave = ({ detail }) => {
	if (detail.scrollDirection.vertical === "down") {
		isInView = false;
	}
}
</script>

<div class="flex flex-col items-center">
	<div
		use:inview={{ rootMargin: "0px 0px -180px 0px", threshold: 0.2 }}
		on:enter={handleEnter}
		on:leave={handleLeave}
		class="w-full grid md:grid-cols-2 gap-6 lg:gap-8 items-start"
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
		<Button
			href="/work"
			class="mt-16 text-center"
		>
			{$page.data.t['generic.allWork']}
		</Button>
	{/if}
</div>