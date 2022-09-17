<script lang="ts">
import "../styles/app.css";

import Header from '$lib/components/Header/Header.svelte';
import Footer from '$lib/components/Footer/Footer.svelte';
import Navigation from '$lib/components/Navigation/Navigation.svelte';

export let data;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<Header cta={data.mainCta} />

<main>
    <slot></slot>

    <Navigation items={data.navigation} />
</main>

<Footer />