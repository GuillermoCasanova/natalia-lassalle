import * as server from '../entries/pages/current/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/current/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/current/+page.server.js";
export const imports = ["_app/immutable/nodes/5.C1Sw5wnQ.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/chunks/ru3awRz-.js","_app/immutable/chunks/xbnKh8CZ.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DyEKE_NK.js","_app/immutable/chunks/DJ2DcCb_.js","_app/immutable/chunks/C-3fZacK.js","_app/immutable/chunks/CX_-HvwG.js","_app/immutable/chunks/BdkR6PBR.js","_app/immutable/chunks/mG0KThyr.js"];
export const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.Bpb0KmXa.css","_app/immutable/assets/loader.BxSIXnGK.css","_app/immutable/assets/sctn-projects-list.BTlgs0Lp.css"];
export const fonts = [];
