<script lang="ts">
import "../styles/app.css";

import Header from '../components/Header/Header.svelte';
import Footer from '../components/Footer/Footer.svelte';
import Navigation from '../components/Navigation/Navigation.svelte';

export let data;
</script>

<Header />

<main class="pt-32">
    <slot></slot>

    <Navigation items={data.navigation} />
</main>

<Footer />