
<script lang="ts">
import Tag from "../Tag/Tag.svelte";

export let tags;
export let id;
export let __typename;
</script>

<div class="flex w-full justify-center flex-wrap -m-1.5 lg:-m-2">
    {#each tags as tag (tag.id)}
        <Tag class="m-1.5 lg:m-2">
            { tag.label }
        </Tag>
     {/each}
</div>