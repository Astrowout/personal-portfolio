<script lang="ts">
import PageBody from '../PageBody/PageBody.svelte';

export let title;
export let body;
export let images;
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

<div class="rounded-xl shadow-xl shadow-stone-400/10 border-2 border-slate-200 bg-slate-50 px-5 pt-4 pb-6 md:px-7 md:pt-5 md:pb-9 {colClass}">
	{#if title}
		<h4
			class="text-xl text-slate-400 mb-6 font-medium"
		>
			{ title }
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

	{#if body && body.length}
		<div class="flex flex-col gap-y-4">
			<PageBody body={body} />
		</div>
	{/if}
</div>