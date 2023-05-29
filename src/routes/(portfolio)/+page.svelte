<script lang="ts">
	import PageBody from '$lib/components/PageBody.svelte';

	export let data;
</script>

<svelte:head>
	<title>Hi 👋 | Wout Vandesompele</title>
</svelte:head>

<h1 class="sr-only">About me</h1>

<PageBody body={data.body} />
