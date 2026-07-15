import * as server from '../entries/pages/_lang_lang_/contact/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_lang_/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang=lang]/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/6.DTL3JyCi.js","_app/immutable/chunks/BN1vU3J0.js","_app/immutable/chunks/B15YwO2F.js","_app/immutable/chunks/BG1yAbdN.js","_app/immutable/chunks/9yTcnqk5.js","_app/immutable/chunks/LjZgujQv.js","_app/immutable/chunks/BVM9uSdO.js","_app/immutable/chunks/Eb_1zgvg.js","_app/immutable/chunks/enFbGR-6.js"];
export const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.jBeL1uzF.css","_app/immutable/assets/featured-projects-slideshow.mHtqLJBc.css","_app/immutable/assets/5.Cussjxze.css","_app/immutable/assets/loader.D9AmVt5-.css","_app/immutable/assets/sctn-projects-list.luaACjOo.css"];
export const fonts = [];
