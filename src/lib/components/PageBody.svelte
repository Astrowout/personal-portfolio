<script lang="ts">
import Hero from './Hero.svelte';
import Section from './Section.svelte';
import TagGroup from './TagGroup.svelte';
import Divider from './Divider.svelte';
import Grid from './Grid.svelte';
import Card from './Card.svelte';
import Text from './Text.svelte';
import Expertise from './Expertise.svelte';
import WorkGroup from './WorkGroup.svelte';
import Song from './Song.svelte';
import Stat from './Stat.svelte';
import ExperienceGroup from './ExperienceGroup.svelte';

const components = {
    "Hero": Hero,
    "Section": Section,
    "TagGroup": TagGroup,
    "Divider": Divider,
    "Grid": Grid,
    "Card": Card,
    "Text": Text,
    "Expertise": Expertise,
    "WorkGroup": WorkGroup,
    "Song": Song,
    "Stat": Stat,
    "ExperienceGroup": ExperienceGroup,
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