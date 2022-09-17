import { SvelteComponentTyped } from 'svelte';

export interface Props {
    class?: string;
    title?: string;
    spotifyId: string;
}

export interface Slots {
    default: { slotValue: string };
}

export default class Logo extends SvelteComponentTyped<Props, unknown, Slots> {}