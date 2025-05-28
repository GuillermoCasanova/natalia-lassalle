import * as server from '../entries/pages/texts/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/texts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/texts/+page.server.js";
export const imports = ["_app/immutable/nodes/7.z4IoNyXz.js","_app/immutable/chunks/BxSyJHAB.js","_app/immutable/chunks/MeTQfUFH.js","_app/immutable/chunks/DYc1Bpty.js","_app/immutable/chunks/BaRlx0Q0.js","_app/immutable/chunks/DIn1FZiE.js","_app/immutable/chunks/Bb91wZ4N.js","_app/immutable/chunks/lGe4XDVY.js"];
export const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/7.ByD8kY5j.css"];
export const fonts = [];
