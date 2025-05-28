import * as server from '../entries/pages/texts/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/texts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/texts/+page.server.js";
export const imports = ["_app/immutable/nodes/7.B0xoa3V4.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/chunks/ru3awRz-.js","_app/immutable/chunks/xbnKh8CZ.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DJXWhR1s.js","_app/immutable/chunks/CsACGoET.js","_app/immutable/chunks/BksHmwdK.js"];
export const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/7.ByD8kY5j.css"];
export const fonts = [];
