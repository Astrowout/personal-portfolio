<script lang="ts">
	import { page } from '$app/stores';

	import BackLink from '$lib/components/BackLink.svelte';
	import Card from '$lib/components/Card.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import TagGroup from '$lib/components/TagGroup.svelte';
	import Section from '$lib/components/Section.svelte';
	import Button from '$lib/components/Button.svelte';
	import Text from '$lib/components/Text.svelte';
	import Video from '$lib/components/Video.svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.previewTitle} | Wout Vandesompele</title>
</svelte:head>

<Section compact>
	<h1
		class="max-w-5xl text-2xl leading-snug sm:text-4xl sm:leading-snug text-center lg:text-5xl lg:leading-snug text-slate-900"
	>
		{data.title}
	</h1>

	{#if data.url}
		<Button href={data.url} target="_blank" rel="noopener noreferrer" class="self-center">
			{$page.data.t['work.liveSite']}
		</Button>
	{/if}
</Section>

<Section noSpacing>
	<Grid>
		{#if data.description}
			<Card title={$page.data.t['work.description']} cols="half">
				<Text content={data.description} />
			</Card>
		{/if}

		{#if data.tags && data.tags.length}
			<TagGroup tags={data.tags} class="col-span-6 lg:col-span-3" />
		{/if}
	</Grid>
</Section>

{#if (data.images && data.images.length) || data.video}
	<Section noSpacing>
		<Grid>
			<div class="col-span-6 prose max-w-full">
				{#if data.images && data.images.length}
					{#each data.images as image (image.id)}
						<Lightbox {image} />
					{/each}
				{/if}
			</div>

			{#if data.video}
				<Video src={data.video.url} alt={data.video.alt} />
			{/if}
		</Grid>
	</Section>
{/if}

<BackLink href="/work" class="mx-auto">
	{$page.data.t['work.back']}
</BackLink>
