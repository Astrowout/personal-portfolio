<script lang="ts">
	import { page } from '$app/stores';

	export const data = null;
	export const form = null;
</script>

<section class="u-space-x u-space-y h-full">
	<div class="u-container-sm flex flex-col gap-y-1 justify-center items-center">
		<h1 class="text-4xl sm:text-5xl u-font-display text-slate-900">
			{$page.status}
		</h1>

		<p class="text-xl text-slate-400">
			{$page.error?.message}
		</p>
	</div>
</section>
