import * as server from '../entries/pages/life/_slug_/_page.server.ts.js';

export const index = 9;
export const component = async () => (await import('../entries/pages/life/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/life/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.54e2e9bf.js","_app/immutable/chunks/index.5f847bdc.js","_app/immutable/chunks/stores.c5d1d5f1.js","_app/immutable/chunks/singletons.9264c112.js","_app/immutable/chunks/Lightbox.d2837370.js","_app/immutable/chunks/PageBody.f8592625.js","_app/immutable/chunks/Link.f4a7bb30.js","_app/immutable/chunks/index.daa6ad79.js","_app/immutable/chunks/Button.b43acb39.js"];
export const stylesheets = ["_app/immutable/assets/Lightbox.3af13f3a.css","_app/immutable/assets/PageBody.0d49c3e0.css"];
export const fonts = [];
