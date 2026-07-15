import * as server from '../entries/pages/_lang_lang_/work/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_lang_/work/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang=lang]/work/+page.server.js";
export const imports = ["_app/immutable/nodes/10.ZeCgSPvh.js","_app/immutable/chunks/51MzpQD9.js","_app/immutable/chunks/Dl5N7h7s.js","_app/immutable/chunks/C_dnFU0J.js","_app/immutable/chunks/Bp2flmz_.js","_app/immutable/chunks/DgGq1Ceh.js","_app/immutable/chunks/B-ncWjc5.js","_app/immutable/chunks/lGe4XDVY.js","_app/immutable/chunks/CjNgRIVy.js","_app/immutable/chunks/DwMTlWtJ.js","_app/immutable/chunks/BGtGyvSo.js"];
export const stylesheets = ["_app/immutable/assets/image.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.jBeL1uzF.css","_app/immutable/assets/loader.D9AmVt5-.css","_app/immutable/assets/sctn-projects-list.H0dkXX4o.css","_app/immutable/assets/10.CfrVCup3.css"];
export const fonts = [];
