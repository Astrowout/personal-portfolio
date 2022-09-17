<script lang="ts">
import Logo from '../Logo/Logo.svelte';
import Button from '../Button/Button.svelte';

export let cta;
</script>

<header class="px-6 sm:px-8 md:px-12 py-5 md:py-8 z-50 w-full">
    <div class="2xl:container flex justify-between">
        <Logo />

        {#if cta}
            <Button href={cta.slug}>
                { cta.label }
            </Button>
        {/if}
    </div>
</header>