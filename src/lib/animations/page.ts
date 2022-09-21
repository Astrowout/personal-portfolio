import { expoOut } from "svelte/easing";

const ANIM_DURATION = 300;

export default {
    duration: ANIM_DURATION,
    easing: expoOut,
    start: 0.95,
    opacity: 0,
};