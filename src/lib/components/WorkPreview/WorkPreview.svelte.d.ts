import { SvelteComponentTyped } from 'svelte';

type Image = {
    url: string;
    alt: string;
    width: number;
    height: number;
}

export interface Props {
    class?: string;
    cols: string;
    title: string;
    slug: string;
    image: Image;
}

export interface Slots {
    default: { slotValue: string };
}

export default class Component extends SvelteComponentTyped<Props, unknown, Slots> {}