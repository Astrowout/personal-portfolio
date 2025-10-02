<script lang="ts">
	import PageBody from '$lib/components/PageBody.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Work | Wout Vandesompele</title>
</svelte:head>

<PageBody body={data.body} />
