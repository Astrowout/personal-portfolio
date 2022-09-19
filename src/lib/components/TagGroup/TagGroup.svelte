
<script lang="ts">
import Tag from "../Tag/Tag.svelte";

export let tags;
export let __typename;
</script>

<div class="flex w-full justify-center flex-wrap">
    {#each tags as tag (tag)}
        <Tag class="m-2">
            { tag }
        </Tag>
     {/each}
</div>