<script lang="ts">
import Hero from '../Hero/Hero.svelte';
import Section from '../Section/Section.svelte';

const components = {
    "Hero": Hero,
    "Section": Section,
};

export let body;
</script>

{#if body && !!body.length}
    {#each body as component (component.id)}
        <svelte:component this={components[component.__typename]} {...component} />
    {/each}
{/if}