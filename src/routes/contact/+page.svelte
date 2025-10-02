<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Contact | Wout Vandesompele</title>
</svelte:head>

<Footer {...data.footer} asPage />
