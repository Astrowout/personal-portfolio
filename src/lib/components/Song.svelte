<script lang="ts">
export let spotifySongId = "";
export let id;
export let __typename;
</script>

<iframe
    title="Spotify music player"
    style="border-radius:12px"
    class="shadow-lg max-w-sm"
    src={`https://open.spotify.com/embed/track/${spotifySongId}`}
    width="100%"
    height="80"
    frameBorder="0"
    allowfullscreen={false}
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
/>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-slate-200 opacity-100 w-40 h-40 absolute -right-7 bottom-0 -z-10">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
</svg>     
  