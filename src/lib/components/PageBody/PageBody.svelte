<script lang="ts">
import Hero from '../Hero/Hero.svelte';
import Section from '../Section/Section.svelte';
import TagGroup from '../TagGroup/TagGroup.svelte';
import Divider from '../Divider/Divider.svelte';
import Grid from '../Grid/Grid.svelte';
import Card from '../Card/Card.svelte';

const components = {
    "Hero": Hero,
    "Section": Section,
    "TagGroup": TagGroup,
    "Divider": Divider,
    "Grid": Grid,
    "Card": Card,
};

export let body;
</script>

{#if body && !!body.length}
    {#each body as component (component.id)} 
        {#if components[component.__typename]}
            <svelte:component this={components[component.__typename]} {...component} />
        {/if}
    {/each}
{/if}