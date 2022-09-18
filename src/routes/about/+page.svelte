<script lang="ts">
    import Music from '$lib/components/Music/Music.svelte';

    export let data;
</script>

<svelte:head>
    <title>About | Wout Vandesompele</title>
</svelte:head>

<h1>Welcome to about</h1>

<Music spotifyId={data.spotifySongId}></Music>