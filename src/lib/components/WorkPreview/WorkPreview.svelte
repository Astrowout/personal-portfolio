<script lang="ts">
import "vanilla-tilt";

export let title;
export let slug;
export let image;
export let cols;
export let id;
export let __typename;

let colClass = "col-span-6";

$: switch (cols) {
	case "full":
		colClass = "col-span-6";
		break;
	case "half":
		colClass = "col-span-6 md:col-span-3";
		break;
	case "third":
		colClass = "col-span-6 md:col-span-3 lg:col-span-2";
		break;
	case "two_thirds":
		colClass = "col-span-6 lg:col-span-4";
		break;

	default:
		break;
}
</script>

<a
	href="/work/{slug}"
	class="group flex flex-col items-center {colClass}"
	id="mouseContainer"
>
	{#if title}
		<h4
			class="inline-block text-center text-lg sm:text-xl lg:text-2xl text-white rounded-xl u-font-display uppercase px-4 pt-2 pb-4 bg-slate-900 translate-y-3 lg:translate-y-16 transition duration-500 group-hover:translate-y-3"
		>
			{ title }
		</h4>
	{/if}

	{#if image}
		<img
			alt={image.alt}
			src={image.url}
			width={image.width}
			height={image.height}
			data-tilt
			data-tilt-max="4"
			data-tilt-speed="500"
			data-tilt-scale="1.03"
			data-tilt-mouse-event-element="#mouseContainer"
			class="object-contain w-full relative z-10"
		/>
	{/if}
</a>