import { a } from './sanity-BzDAjV8D.js';
import '@sanity/client';
import '@sanity/image-url';

async function n({params:n,fetch:e}){return {siteHead:await a.fetch("*[_type == 'site-settings'][0] {\n            seo,\n            analytics\n        }\n        ",n),content:await a.fetch("*[_type == 'page' && handle.current == 'current'][0] {\n        ...,\n        page_layout[]->\n    } \n    ",n)}}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: n
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-xBgEAfzD.js')).default;
const server_id = "src/routes/current/+page.server.js";
const imports = ["_app/immutable/nodes/5.D1mnEFFM.js","_app/immutable/chunks/BxSyJHAB.js","_app/immutable/chunks/MeTQfUFH.js","_app/immutable/chunks/Bb91wZ4N.js","_app/immutable/chunks/lGe4XDVY.js","_app/immutable/chunks/DYc1Bpty.js","_app/immutable/chunks/BaRlx0Q0.js","_app/immutable/chunks/DIn1FZiE.js","_app/immutable/chunks/C-eCjwdF.js","_app/immutable/chunks/DztA5gLl.js","_app/immutable/chunks/CHnXIwll.js"];
const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.Bpb0KmXa.css","_app/immutable/assets/loader.D9AmVt5-.css","_app/immutable/assets/sctn-projects-list.BTlgs0Lp.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-ivNE1WVi.js.map
