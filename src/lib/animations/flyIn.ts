import { quintOut } from "svelte/easing";

const ANIM_DURATION = 1400;

export default {
    duration: ANIM_DURATION,
    easing: quintOut,
    y: 40,
    opacity: 0,
};