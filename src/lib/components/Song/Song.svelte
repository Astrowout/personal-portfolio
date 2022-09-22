<script lang="ts">
export let spotifySongId = "";
</script>

<iframe
    title="Spotify music player"
    style="border-radius:12px"
    class="shadow-lg"
    src={`https://open.spotify.com/embed/track/${spotifySongId}`}
    width="100%"
    height="80"
    frameBorder="0"
    allowfullscreen={false}
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
/>