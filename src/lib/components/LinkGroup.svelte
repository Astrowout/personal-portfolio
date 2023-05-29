<script lang="ts">
	import { inview } from 'svelte-inview';

	import Link from './Link.svelte';

	export let title = '';
	export let links = [];
	export const id = '';
	export const __typename = '';

	let isInView = false;

	const handleEnter = () => {
		isInView = true;
	};

	const handleLeave = ({ detail }) => {
		if (detail.scrollDirection.vertical === 'down') {
			isInView = false;
		}
	};
</script>

<div
	class="flex flex-col gap-y-4"
	use:inview={{
		rootMargin: '0px 0px -180px 0px',
		unobserveOnEnter: true
	}}
	on:enter={handleEnter}
	on:leave={handleLeave}
>
	{#if title}
		<h4 class="text-xl md:text-2xl text-slate-400 u-anim-start" class:u-anim-end={isInView}>
			{title}
		</h4>
	{/if}

	{#if links && !!links.length}
		<ul class="flex flex-col gap-y-2">
			{#each links as link, index (link.url)}
				<li
					class="u-anim-start"
					class:u-anim-end={isInView}
					style="transition-delay: {isInView ? (index + 1) * 80 : 0}ms;"
				>
					<Link {...link} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
