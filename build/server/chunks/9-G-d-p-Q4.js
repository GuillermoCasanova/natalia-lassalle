import { a } from './sanity-BzDAjV8D.js';
import '@sanity/client';
import '@sanity/image-url';

async function e(e){console.log("Work slug page server running");const{params:t,fetch:a$1,parent:i,url:s}=e,o=await i(),r=s.searchParams.get("lang")||"en";console.log("Parent data in slug:",o);const c=t.slug.toString(),p=`*[_type == 'project' && !(_id in path('drafts.**'))] {\n        ...,\n        "name": coalesce(name.${r}, name.en),\n        "about": coalesce(about.${r}, about.en)[] {\n            ...,\n            markDefs[] {\n                ...,\n                _type == "internalLink" => {\n                    "page": page-> { \n                        "slug": handle.current,\n                        "title": page_title,\n                        "_type": _type\n                    }\n                },\n                _type == "link" => {\n                    ...\n                },\n                _type == "mailtoLink" => {\n                    ...\n                }\n            }\n        },\n        "medium": medium->{\n            ...\n        },\n        "preview_videos": preview_videos[] {\n            ...,\n            "video_file": video_file.asset->\n        },\n        "creditsList": creditsList[]-> {\n            _type,\n            _ref,\n            _key,\n            "workDone": workDone->name,\n            "name": name\n        }\n    }`;return {siteHead:await a.fetch("*[_type == 'site-settings'][0] {\n            seo,\n            analytics\n        }\n        ",t),content:await a.fetch("*[_type == 'page' && handle.current == 'work'][0] {\n        ...,\n        page_layout[]->\n    } \n    ",t),projects:await a.fetch(p),projHandle:c}}

var _page_server = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: e
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Dc-Vzo6M.js')).default;
const server_id = "src/routes/work/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/9.CTKxinvP.js","_app/immutable/chunks/BxSyJHAB.js","_app/immutable/chunks/MeTQfUFH.js","_app/immutable/chunks/Bb91wZ4N.js","_app/immutable/chunks/lGe4XDVY.js","_app/immutable/chunks/DYc1Bpty.js","_app/immutable/chunks/BaRlx0Q0.js","_app/immutable/chunks/DIn1FZiE.js","_app/immutable/chunks/C-eCjwdF.js","_app/immutable/chunks/DztA5gLl.js","_app/immutable/chunks/CHnXIwll.js"];
const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.Bpb0KmXa.css","_app/immutable/assets/loader.D9AmVt5-.css","_app/immutable/assets/sctn-projects-list.BTlgs0Lp.css","_app/immutable/assets/8.CfrVCup3.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-G-d-p-Q4.js.map
