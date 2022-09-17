import { SvelteComponentTyped } from 'svelte';

type Image = {
    url: string;
    width: number;
    height: number;
}

export interface Props {
    class?: string;
    __typename?: string;
    headline?: string;
    image?: Image;
}

export interface Slots {
    default: { slotValue: string };
}

export default class Logo extends SvelteComponentTyped<Props, unknown, Slots> {}