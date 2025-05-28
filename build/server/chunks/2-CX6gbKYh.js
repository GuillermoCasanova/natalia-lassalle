import { a } from './sanity-BzDAjV8D.js';
import '@sanity/client';
import '@sanity/image-url';

async function e({params:e,fetch:t}){return {siteHead:await a.fetch("*[_type == 'site-settings'][0] {\n            seo,\n            analytics\n        }\n        ",e),content:await a.fetch("*[_type == 'page-home'][0] {\n        ...,\n        page_layout[]-> {\n            ...,\n            select(_type == \"sctn_hero_header\") => {\n                ...,\n                video[] {\n                    ...,\n                    'video_file': video_file.asset-> { \n                        ..., url, originalFilename\n                        }\n                }, \n                featured_project-> {\n                    handle\n                }\n            }\n        }\n    } \n    ",e)}}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: e
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BxOG-IM7.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.DV6JePzO.js","_app/immutable/chunks/BxSyJHAB.js","_app/immutable/chunks/MeTQfUFH.js","_app/immutable/chunks/DYc1Bpty.js","_app/immutable/chunks/BaRlx0Q0.js","_app/immutable/chunks/DIn1FZiE.js","_app/immutable/chunks/C-eCjwdF.js","_app/immutable/chunks/DztA5gLl.js","_app/immutable/chunks/CHnXIwll.js","_app/immutable/chunks/Bb91wZ4N.js","_app/immutable/chunks/lGe4XDVY.js","_app/immutable/chunks/D815g08u.js"];
const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.Bpb0KmXa.css","_app/immutable/assets/loader.D9AmVt5-.css","_app/immutable/assets/sctn-projects-list.BTlgs0Lp.css","_app/immutable/assets/featured-projects-slideshow.mHtqLJBc.css","_app/immutable/assets/2.6N3M63Q6.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-CX6gbKYh.js.map
