<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Plyr from 'plyr';

	import 'plyr/dist/plyr.css';

	interface Props {
		src?: string;
		alt?: string;
	}

	let { src = '', alt = '' }: Props = $props();
	let videoEl = $state(null);
	let player = null;

	onMount(() => {
		if (videoEl && !player) {
			player = new Plyr(videoEl, {
				controls: ['play-large', 'play', 'progress', 'mute', 'volume', 'fullscreen']
			});
		}
	});

	onDestroy(() => {
		if (player) {
			player.destroy();
			player = null;
		}
	});
</script>

<video playsinline controls bind:this={videoEl} title={alt} {alt} class="w-full">
	<source {src} type="video/mp4" />

	<track kind="captions" label="English captions" default />
</video>
