import * as server from '../entries/pages/_lang_lang_/texts/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_lang_/texts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang=lang]/texts/+page.server.js";
export const imports = ["_app/immutable/nodes/9.FOMDRIvs.js","_app/immutable/chunks/51MzpQD9.js","_app/immutable/chunks/Dl5N7h7s.js","_app/immutable/chunks/DgGq1Ceh.js","_app/immutable/chunks/B-ncWjc5.js","_app/immutable/chunks/C_dnFU0J.js","_app/immutable/chunks/Bp2flmz_.js","_app/immutable/chunks/lGe4XDVY.js"];
export const stylesheets = ["_app/immutable/assets/image.DiPaT0Bv.css","_app/immutable/assets/9.ByD8kY5j.css"];
export const fonts = [];
