<script lang="ts">
import Footer from "$lib/components/Footer.svelte";

export let data;
</script>

<svelte:head>
    <title>Contact | Wout Vandesompele</title>
</svelte:head>

<Footer {...data.footer} asPage />