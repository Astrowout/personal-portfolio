<script lang="ts">
	import Link from './Link.svelte';
	import Button from './Button.svelte';

	export let title;
	export let role;
	export let time;
	export let link;
	export let cta;
	export let isLast = false;
	export const id = '';
	export const __typename = '';

	let className = '';
	export { className as class };
</script>

<div
	class="flex flex-col items-start pb-6 border-b border-b-slate-200 {className}"
	class:border-none={isLast}
	class:pb-0={isLast}
>
	{#if time}
		<p class="text-slate-600 text-xs bg-slate-200 rounded-md py-1 px-2">
			{time}
		</p>
	{/if}

	<p class="font-bold text-lg mt-2 md:text-xl text-slate-900">
		{title}
	</p>

	{#if role}
		<p class="text-lg mt-1 text-slate-600">
			{role}
		</p>
	{/if}

	{#if link}
		<Link {...link} class="mt-3 text-slate-400" />
	{/if}

	{#if cta}
		<Button href={cta.url} target="_blank" rel="noopener noreferrer" class="mt-3">
			{cta.label}
		</Button>
	{/if}
</div>
