<script lang="ts">
    import Music from '$lib/components/Music/Music.svelte';
    import PageBody from '$lib/components/PageBody/PageBody.svelte';

    export let data;
</script>

<svelte:head>
    <title>Hi 👋 | Wout Vandesompele</title>
</svelte:head>

<PageBody body={data.body} />

<Music spotifyId={data.spotifySongId}></Music>