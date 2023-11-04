<script lang="ts">
	import type { Config } from '@sveltejs/adapter-vercel';
	import type { ActionData } from './$types.js';

	import '../../styles/app.css';

	import AuthForm from '$lib/components/AuthForm.svelte';
	import InfiniteGrid from '$lib/components/InfiniteGrid.svelte';

	export const config: Config = {
		runtime: 'edge'
	};

	export let form: ActionData;
</script>

<svelte:head>
	<title>My Life ✌️</title>
</svelte:head>

<main
	class="w-full h-screen mx-auto max-w-screen-2xl p-4 flex items-center justify-center"
>
	{#if form?.success}
		<InfiniteGrid>test</InfiniteGrid>
	{:else}
		<AuthForm title="This page is private 🤫" />
	{/if}
</main>
