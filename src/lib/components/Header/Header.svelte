<script lang="ts">
    import { onMount } from 'svelte';
    import { scale } from 'svelte/transition';
    import { expoOut } from 'svelte/easing';
    
    import Logo from '../Logo/Logo.svelte';
    import Button from '../Button/Button.svelte';

    export let cta;

    let mounted = false;
    let ANIM_DURATION = 800;
    let ANIM_DELAY = 400;

    onMount(() => {
        mounted = true;
	});

    const scaleAnim = {
        delay: ANIM_DELAY,
        duration: ANIM_DURATION,
        easing: expoOut,
    };
</script>

<header class="px-6 sm:px-8 md:px-12 py-5 md:py-8 w-full">
    <div class="2xl:container flex justify-between">
        {#if mounted}
            <span transition:scale={scaleAnim}>
                <Logo />
            </span>
            
            {#if cta}
                <span transition:scale={scaleAnim}>
                    <Button href={cta.slug}>
                        { cta.label }
                    </Button>
                </span>
            {/if}
        {/if}
    </div>
</header>