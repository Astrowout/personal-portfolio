<script lang="ts">
export let number;
export let description;

let className = "";
export { className as class };
</script>

<div class="flex flex-col {className}">
    <p class="u-font-display text-4xl lg:text-5xl text-slate-900">
        {number}
    </p>

    <p class="lg:text-lg prose prose-slate">
        {@html description.html}
    </p>
</div>