

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CdMZYCPn.js","_app/immutable/chunks/scheduler.DTOClJAy.js","_app/immutable/chunks/index.3e9ivkJs.js","_app/immutable/chunks/entry.CxBxfMo4.js"];
export const stylesheets = [];
export const fonts = [];
