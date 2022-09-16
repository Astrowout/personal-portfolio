<script lang="ts">
    import Music from '../components/Music/Music.svelte';

    export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Music spotifyId={data.spotifySongId}></Music>