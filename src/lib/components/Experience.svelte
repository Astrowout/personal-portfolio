<script lang="ts">
	import Link from './Link.svelte';
	import Button from './Button.svelte';

	export const id = '';
	export const __typename = '';

	interface Props {
		title: any;
		role: any;
		time: any;
		link: any;
		cta: any;
		isLast?: boolean;
		class?: string;
	}

	let {
		title,
		role,
		time,
		link,
		cta,
		isLast = false,
		class: className = ''
	}: Props = $props();
	
</script>

<div
	class="flex flex-col items-start pb-6 border-b border-b-slate-200 {className}"
	class:border-none={isLast}
	class:pb-0={isLast}
>
	{#if time}
		<p class="text-slate-600 text-sm bg-slate-200 rounded-md py-0.5 px-1.5">
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
