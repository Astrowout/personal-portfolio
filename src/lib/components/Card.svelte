<script lang="ts">
	import { inview } from 'svelte-inview';

	import PageBody from './PageBody.svelte';

	export let title;
	export let body = null;
	export let images = [];
	export let cols;
	export const id = '';
	export const __typename = '';

	let colClass = 'col-span-6';
	let isInView = false;
	const gridClass = cols === 'full' ? 'grid lg:grid-cols-2 gap-8' : 'flex flex-col gap-y-8';

	$: switch (cols) {
		case 'full':
			colClass = 'col-span-6';
			break;
		case 'half':
			colClass = 'col-span-6 lg:col-span-3';
			break;
		case 'third':
			colClass = 'col-span-6 lg:col-span-3 xl:col-span-2';
			break;
		case 'two_thirds':
			colClass = 'col-span-6 xl:col-span-4';
			break;

		default:
			break;
	}

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
	use:inview={{
		rootMargin: '0px 0px -180px 0px',
		threshold: 0.1,
		unobserveOnEnter: true
	}}
	on:enter={handleEnter}
	on:leave={handleLeave}
	class:u-anim-end={isInView}
	class="u-anim-start relative overflow-hidden rounded-xl shadow-xl shadow-stone-400/10 border-2 border-slate-200 bg-slate-50 px-5 pt-4 pb-6 md:px-7 md:pt-5 md:pb-10 {colClass}"
>
	{#if title}
		<h4 class="text-xl md:text-2xl text-slate-400 mb-6 u-font-display">
			{title}
		</h4>
	{/if}

	{#if images && images.length}
		<div class="flex flex-wrap items-start -mx-4 -my-2">
			{#each images as image (image.url)}
				<img
					alt={image.alt}
					title={image.alt}
					src={image.url}
					width={image.width}
					height={image.height}
					class="object-contain w-auto h-8 mx-4 my-2"
				/>
			{/each}
		</div>
	{/if}

	<div class={gridClass}>
		{#if $$slots.default}
			<slot />
		{:else if body && body.length}
			<PageBody {body} />
		{/if}
	</div>
</div>
