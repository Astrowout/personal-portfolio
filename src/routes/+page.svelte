<script lang="ts">
	import PageBody from '$lib/components/PageBody.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Hi 👋 | Wout Vandesompele</title>
</svelte:head>

<h1 class="sr-only">Welcome to my digital space</h1>

<PageBody body={data.body} />
