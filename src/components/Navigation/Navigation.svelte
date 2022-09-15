<script lang="ts">
    export let items = [];
</script>

<div class="fixed w-full inset-x-0 bottom-8 pointer-events-none flex justify-center">
    <nav class="px-6 rounded-xl bg-primary/80 backdrop-blur-sm shadow-xl pointer-events-auto">
        <ul class="flex text-white -mx-3">
            {#each items as item (item.id)}
                <li>
                    <a href={item.slug || '/'} class="block px-3 py-4">
                        <span>
                            {item.label}
                        </span>
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</div>