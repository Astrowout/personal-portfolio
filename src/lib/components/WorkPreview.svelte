<script lang="ts">
import { onDestroy, onMount } from "svelte";
import Tilt from "vanilla-tilt";

export let title;
export let slug;
export let image;
export let id;
export let __typename;

let tiltContainer;
let mouseContainer;

onMount(() => {
	if (tiltContainer) {
		Tilt.init(tiltContainer, {
			max: 4,
			speed: 500,
			"mouse-event-element": mouseContainer,
		});
	}
});

onDestroy(() => {
	if (tiltContainer && tiltContainer.vanillaTilt) {
		tiltContainer.vanillaTilt.destroy();
	}
})
</script>

<a
	href="/work/{slug}"
	class="group flex flex-col items-center"
	bind:this={mouseContainer}
>
	{#if title}
		<h4
			style="transform: translateZ(-20px);"
		>
			<span class="inline-block relative -z-10 text-center sm:text-lg lg:text-xl text-white rounded-xl u-font-display uppercase px-4 pt-2 pb-4 bg-slate-900 translate-y-4 xl:translate-y-16 transition-transform duration-500 group-hover:translate-y-4">
				{ title }
			</span>
		</h4>
	{/if}

	{#if image}
		<img
			alt={image.alt}
			src={image.url}
			width={image.width}
			height={image.height}
			bind:this={tiltContainer}
			id="tiltContainer"
			style="transform: translateZ(100px);"
			data-tilt-mouse-event-element="#mouseContainer"
			class="object-contain w-full relative z-10 drop-shadow"
		/>
	{/if}
</a>