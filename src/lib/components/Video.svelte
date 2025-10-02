<script lang="ts">
	interface Props {
		src?: string;
		alt?: string;
	}

	let { src = '', alt = '' }: Props = $props();
</script>

<video playsinline controls title={alt} class="w-full">
	<source {src} type="video/mp4" />

	<track kind="captions" label="English captions" default />
</video>
