<script lang="ts">
import { page } from '$app/stores';
</script>
  
<section class="u-space-x h-full mt-20">
    <div class="u-container-sm flex flex-col gap-y-1 justify-center items-center">
        <h1 class="text-3xl sm:text-4xl u-font-display text-slate-900">
            {$page.status}
        </h1>
    
        <p class="text-lg text-slate-400">
            {$page.error?.message}
        </p>
    </div>
</section>