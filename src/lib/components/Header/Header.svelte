<script lang="ts">
import { onMount } from 'svelte';

import Logo from '../Logo/Logo.svelte';
import Button from '../Button/Button.svelte';

export let cta;

let mounted = false;

onMount(() => {
    mounted = true;
});
</script>

<header class="u-space-x py-5 md:py-8 w-full bg-stone-100 relative z-10 pointer-events-auto">
    <div class="u-container flex justify-between">
        <span
            class="transition duration-700 ease-out delay-200"
            class:scale-0={!mounted}
            class:scale-100={mounted}
        >
            <Logo />
        </span>
        
        {#if cta}
            <span
                class:scale-0={!mounted}
                class:scale-100={mounted}
                class="flex transition duration-700 ease-out delay-300"
            >
                <Button href={cta.slug}>
                    { cta.label }
                </Button>
            </span>
        {/if}
    </div>
</header>