<script lang="ts">
	import { onMount } from 'svelte';

	export let headline;
	export let image;
	export const id = '';
	export const __typename = '';

	let loaded = false;

	const preloadImage = () => {
		const img = new Image();
		img.src = image.url;
		img.onload = () => {
			loaded = true;
		};
	};

	onMount(() => {
		preloadImage();
	});
</script>

<svelte:head>
	<script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
</svelte:head>

<div class="u-space-x py-8 lg:py-4 w-full">
	<div class="u-container-sm grid md:grid-cols-2 items-center gap-y-6 gap-x-12">
		<div
			class="u-prose u-max-w-prose transition duration-1000 ease-out delay-300"
			class:opacity-0={!loaded}
			class:translate-y-12={!loaded}
			class:opacity-100={loaded}
			class:translate-x-0={loaded}
		>
			{@html headline.html}
		</div>

		{#if image}
			<div
				class="transition duration-500 ease-out relative image"
				class:opacity-0={!loaded}
				class:opacity-100={loaded}
			>
				<img
					alt={image.alt}
					title={image.alt}
					src={image.url}
					width={image.width}
					height={image.height}
					class="object-cover rounded-lg absolute z-0 inset-0 w-full h-full blur-md opacity-50 overflow-hidden translate-y-6 md:translate-y-12 translate-x-6 md:translate-x-12 reflection ease-out duration-500 transition"
				/>

				<img
					alt={image.alt}
					title={image.alt}
					src={image.url}
					width={image.width}
					height={image.height}
					class="object-cover rounded-lg relative z-10"
				/>
			</div>
		{/if}
	</div>
</div>

<style>
	.image {
		transform: scale(0.8) perspective(320px) rotateY(-6deg);
	}
	
	.image:hover {
		transform: scale(0.9) perspective(320px) rotateY(0deg);
	}

	.image:hover .reflection {
		opacity: 0.3;
		transform: translate3d(8px, 8px, 0);
	}
  </style>
