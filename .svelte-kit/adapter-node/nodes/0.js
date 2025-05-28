import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BhgJA_qI.js","_app/immutable/chunks/xbnKh8CZ.js","_app/immutable/chunks/ru3awRz-.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/CsACGoET.js","_app/immutable/chunks/BksHmwdK.js","_app/immutable/chunks/mG0KThyr.js"];
export const stylesheets = ["_app/immutable/assets/loader.BxSIXnGK.css","_app/immutable/assets/0.BZWa7cNy.css"];
export const fonts = [];
