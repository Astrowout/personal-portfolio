<script lang="ts">
	import type { ActionData } from './$types.js';

	import '../../styles/app.css';

	import AuthForm from '$lib/components/AuthForm.svelte';
	import InfiniteGrid from '$lib/components/InfiniteGrid.svelte';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Lifescroll</title>
</svelte:head>

<main
	class="bg-slate-950 w-full h-screen mx-auto max-w-screen-2xl p-4 flex items-center justify-center"
>
	{#if form?.success}
		<InfiniteGrid>test</InfiniteGrid>
	{:else}
		<AuthForm title="This page is private 🤫" />
	{/if}
</main>
