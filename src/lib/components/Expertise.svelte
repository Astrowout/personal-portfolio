<script lang="ts">
import Progress from './Progress.svelte';

export let title;
export let image;
export let progress;
export let id;
export let __typename;
</script>

<div class="flex flex-col lg:flex-row lg:items-center justify-between -mx-3 -my-1.5">
	<div class="flex items-center gap-x-4 mx-3 my-1.5 w-40 xl:w-56">
		{#if image}
			<img
				alt={image.alt}
				title={image.alt}
				src={image.url}
				width={image.width}
				height={image.height}
				class="object-contain w-10 h-10"
			/>
		{/if}

		{#if title}
			<p class="text-lg font-medium text-slate-900">
				{ title }
			</p>
		{/if}
	</div>

	{#if progress}
		<Progress value={progress} class="mx-3 my-1.5 translate-y-1" />
	{/if}
</div>