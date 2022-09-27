<script lang="ts">
import { page } from '$app/stores';
import { inview } from 'svelte-inview';

import WorkPreview from './WorkPreview.svelte';
import Button from './Button.svelte';

export let works;
export let showCta = false;
export let id = "";
export let __typename = "";

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
		use:inview={{
			rootMargin: "0px 0px -200px 0px",
			unobserveOnEnter: true,
		}}
		on:enter={handleEnter}
		on:leave={handleLeave}
		class="w-full grid lg:grid-cols-2 gap-x-6 gap-y-10 items-start"
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