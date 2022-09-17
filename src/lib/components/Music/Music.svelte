<script lang="ts">
export let title = "Current mood";
export let spotifyId = "";
</script>

<div class="flex flex-col gap-y-2">
    <h2 class="u-font-display text-4xl text-rose-500">
        { title }
    </h2>

    <iframe
        title="Spotify music player"
        style="border-radius:12px"
        src={`https://open.spotify.com/embed/track/${spotifyId}`}
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
    />
</div>