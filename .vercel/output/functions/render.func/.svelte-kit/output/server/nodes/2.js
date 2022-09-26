import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-a7fc7133.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-a7fc7133.js","_app/immutable/chunks/index-bbeecc85.js","_app/immutable/chunks/PageBody-3b1c4a39.js","_app/immutable/chunks/Link-690f7608.js","_app/immutable/chunks/Button-dcd16f33.js","_app/immutable/chunks/singletons-a7e3ef98.js","_app/immutable/chunks/stores-3d502d52.js"];
export const stylesheets = ["_app/immutable/assets/PageBody-d5c73c14.css"];
