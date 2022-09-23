<script lang="ts">
export let title;
export let role;
export let time;
let className = "";
export { className as class };
</script>


<div class="flex flex-col {className}">
    <p class="u-font-display text-4xl lg:text-5xl text-slate-900">
        {title}
    </p>

    <p class="lg:text-lg prose prose-slate">
        {role}
    </p>

    <p class="lg:text-lg prose prose-slate">
        {time}
    </p>
</div>