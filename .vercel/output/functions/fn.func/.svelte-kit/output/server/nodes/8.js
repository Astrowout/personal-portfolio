import * as server from '../entries/pages/life/_page.server.ts.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/life/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/life/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.18003013.js","_app/immutable/chunks/index.5f847bdc.js","_app/immutable/chunks/Button.b43acb39.js"];
export const stylesheets = ["_app/immutable/assets/app.85755c5e.css"];
export const fonts = [];
