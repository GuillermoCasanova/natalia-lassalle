import * as server from '../entries/pages/_lang_lang_/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_lang_/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang=lang]/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.Csijw5fi.js","_app/immutable/chunks/51MzpQD9.js","_app/immutable/chunks/Dl5N7h7s.js","_app/immutable/chunks/Bp2flmz_.js","_app/immutable/chunks/DgGq1Ceh.js","_app/immutable/chunks/B-ncWjc5.js","_app/immutable/chunks/BGtGyvSo.js"];
export const stylesheets = ["_app/immutable/assets/loader.D9AmVt5-.css","_app/immutable/assets/2.B-F_AOcI.css"];
export const fonts = [];
