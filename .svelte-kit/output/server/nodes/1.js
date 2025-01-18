

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CjwpvZu7.js","_app/immutable/chunks/scheduler.Cv9TUz2p.js","_app/immutable/chunks/index.C8AfICH1.js","_app/immutable/chunks/entry.CljA9LH4.js"];
export const stylesheets = [];
export const fonts = [];
