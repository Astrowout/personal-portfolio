import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-ad5e0461.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-ad5e0461.js","_app/immutable/chunks/index-bbeecc85.js","_app/immutable/chunks/Link-690f7608.js","_app/immutable/chunks/Button-dcd16f33.js","_app/immutable/chunks/stores-3d502d52.js","_app/immutable/chunks/singletons-a7e3ef98.js","_app/immutable/chunks/Footer-d0c30593.js"];
export const stylesheets = ["_app/immutable/assets/_layout-cf1d5e8a.css"];
