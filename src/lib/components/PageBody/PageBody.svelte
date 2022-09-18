<script lang="ts">
import Hero from '$lib/components/Hero/Hero.svelte';

const components = {
    "Hero": Hero,
};

export let body;
</script>

{#if body && !!body.length}
    {#each body as component (component.id)}
        <svelte:component this={components[component.__typename]} {...component} />
    {/each}
{/if}