import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DRDnJVn2.js","_app/immutable/chunks/scheduler.Cv9TUz2p.js","_app/immutable/chunks/index.C8AfICH1.js"];
export const stylesheets = ["_app/immutable/assets/2.DjA9f1RN.css"];
export const fonts = [];
