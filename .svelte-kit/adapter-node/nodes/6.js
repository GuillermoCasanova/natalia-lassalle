import * as server from '../entries/pages/cv/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cv/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/cv/+page.server.js";
export const imports = ["_app/immutable/nodes/6.CEx_dNkg.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/chunks/ru3awRz-.js","_app/immutable/chunks/xbnKh8CZ.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DJXWhR1s.js","_app/immutable/chunks/CsACGoET.js","_app/immutable/chunks/BksHmwdK.js","_app/immutable/chunks/h-UchLzl.js","_app/immutable/chunks/Vm9gJOqz.js"];
export const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.Bpb0KmXa.css","_app/immutable/assets/featured-projects-slideshow.mHtqLJBc.css","_app/immutable/assets/3.Cussjxze.css"];
export const fonts = [];
