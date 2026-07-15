import * as server from '../entries/pages/_lang_lang_/texts/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_lang_/texts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang=lang]/texts/+page.server.js";
export const imports = ["_app/immutable/nodes/9.TSC9ACf5.js","_app/immutable/chunks/BN1vU3J0.js","_app/immutable/chunks/B15YwO2F.js","_app/immutable/chunks/LjZgujQv.js","_app/immutable/chunks/BVM9uSdO.js","_app/immutable/chunks/BG1yAbdN.js","_app/immutable/chunks/9yTcnqk5.js"];
export const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/9.ByD8kY5j.css"];
export const fonts = [];
