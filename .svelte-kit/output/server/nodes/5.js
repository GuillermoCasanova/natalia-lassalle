import * as server from '../entries/pages/current/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/current/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/current/+page.server.js";
export const imports = ["_app/immutable/nodes/5.D1mnEFFM.js","_app/immutable/chunks/BxSyJHAB.js","_app/immutable/chunks/MeTQfUFH.js","_app/immutable/chunks/Bb91wZ4N.js","_app/immutable/chunks/lGe4XDVY.js","_app/immutable/chunks/DYc1Bpty.js","_app/immutable/chunks/BaRlx0Q0.js","_app/immutable/chunks/DIn1FZiE.js","_app/immutable/chunks/C-eCjwdF.js","_app/immutable/chunks/DztA5gLl.js","_app/immutable/chunks/CHnXIwll.js"];
export const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.Bpb0KmXa.css","_app/immutable/assets/loader.D9AmVt5-.css","_app/immutable/assets/sctn-projects-list.BTlgs0Lp.css"];
export const fonts = [];
