import { SvelteComponentTyped } from 'svelte';

type Image = {
    url: string;
    alt: string;
    width: number;
    height: number;
}

export interface Props {
    class?: string;
    title: string;
    image: Image;
    progress: number;
}

export interface Slots {
    default: { slotValue: string };
}

export default class Component extends SvelteComponentTyped<Props, unknown, Slots> {}