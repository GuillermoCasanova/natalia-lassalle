

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B-YpzftY.js","_app/immutable/chunks/51MzpQD9.js","_app/immutable/chunks/Dl5N7h7s.js"];
export const stylesheets = [];
export const fonts = [];
