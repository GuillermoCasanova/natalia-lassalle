import * as server from '../entries/pages/work/_slug_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/work/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.Bm24ZiOD.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/chunks/ru3awRz-.js","_app/immutable/chunks/xbnKh8CZ.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DyEKE_NK.js","_app/immutable/chunks/DJ2DcCb_.js","_app/immutable/chunks/C-3fZacK.js","_app/immutable/chunks/CX_-HvwG.js","_app/immutable/chunks/BdkR6PBR.js","_app/immutable/chunks/mG0KThyr.js"];
export const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.Bpb0KmXa.css","_app/immutable/assets/loader.BxSIXnGK.css","_app/immutable/assets/sctn-projects-list.BTlgs0Lp.css","_app/immutable/assets/8.CfrVCup3.css"];
export const fonts = [];
