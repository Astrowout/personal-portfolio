<script lang="ts">
    import PageBody from '$lib/components/PageBody/PageBody.svelte';

    export let data;
</script>

<svelte:head>
    <title>Hi 👋 | Wout Vandesompele</title>
</svelte:head>

<PageBody body={data.body} />