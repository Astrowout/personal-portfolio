<script lang="ts">
	import PageBody from '$lib/components/PageBody.svelte';

	export let data;
</script>

<svelte:head>
	<title>Work | Wout Vandesompele</title>
</svelte:head>

<PageBody body={data.body} />
