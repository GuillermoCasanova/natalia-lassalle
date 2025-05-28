import { a } from './sanity-BzDAjV8D.js';
import '@sanity/client';
import '@sanity/image-url';

async function t({params:t,fetch:e}){return {siteHead:await a.fetch("*[_type == 'site-settings'][0] {\n            seo,\n            analytics\n        }\n        ",t),content:await a.fetch('*[_type == \'page\' && handle.current == \'cv\'][0] {\n        ...,\n        page_layout[]-> {\n            ...,\n            _type == "sctn_rich_text" => {\n                ...,\n                "text": text[] {\n                    ...,\n                    markDefs[] {\n                        ...,\n                        _type == "internalLink" => {\n                            "page": page-> { \n                                "slug": handle.current,\n                                "title": page_title\n                            }\n                        },\n                        _type == "link" => {\n                            ...\n                        },\n                        _type == "mailtoLink" => {\n                            ...\n                        }\n                    }\n                }\n            }\n        }\n    } \n    ',t)}}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: t
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D4atiVlA.js')).default;
const server_id = "src/routes/cv/+page.server.js";
const imports = ["_app/immutable/nodes/6.DGE3y_T1.js","_app/immutable/chunks/BxSyJHAB.js","_app/immutable/chunks/MeTQfUFH.js","_app/immutable/chunks/Bb91wZ4N.js","_app/immutable/chunks/lGe4XDVY.js","_app/immutable/chunks/DYc1Bpty.js","_app/immutable/chunks/BaRlx0Q0.js","_app/immutable/chunks/DIn1FZiE.js","_app/immutable/chunks/C-eCjwdF.js","_app/immutable/chunks/D815g08u.js"];
const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.Bpb0KmXa.css","_app/immutable/assets/featured-projects-slideshow.mHtqLJBc.css","_app/immutable/assets/3.Cussjxze.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-BhupvjJW.js.map
