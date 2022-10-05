<script lang="ts">
export let image = null;
</script>

<a
	href={image.url}
	target="_blank"
	rel="noopener noreferrer"
	class="w-full"
>
	<img
		alt={image.alt}
		src={image.url}
		width={image.width}
		height={image.height}
		class="object-contain w-full rounded-xl shadow"
	/>
</a>