import { c as client } from './sanity-DpqZfrM0.js';
import '@sanity/client';
import '@sanity/image-url';

async function load(loadEvent) {
  console.log("Work slug page server running");
  const { params, fetch, parent, url } = loadEvent;
  const parentData = await parent();
  const language = url.searchParams.get("lang") || "en";
  console.log("Parent data in slug:", parentData);
  const projHandle = params.slug.toString();
  const request = `*[_type == 'site-settings'][0] {
            seo,
            analytics
        }
        `;
  const siteHead = await client.fetch(request, params);
  const page_request = `*[_type == 'page' && handle.current == 'work'][0] {
        ...,
        page_layout[]->
    } 
    `;
  const content = await client.fetch(page_request, params);
  const projects_request = `*[_type == 'project' && !(_id in path('drafts.**'))] {
        ...,
        "name": coalesce(name.${language}, name.en),
        "about": coalesce(about.${language}, about.en)[] {
            ...,
            markDefs[] {
                ...,
                _type == "internalLink" => {
                    "page": page-> { 
                        "slug": handle.current,
                        "title": page_title,
                        "_type": _type
                    }
                },
                _type == "link" => {
                    ...
                },
                _type == "mailtoLink" => {
                    ...
                }
            }
        },
        "medium": medium->{
            ...
        },
        "preview_videos": preview_videos[] {
            ...,
            "video_file": video_file.asset->
        },
        "creditsList": creditsList[]-> {
            _type,
            _ref,
            _key,
            "workDone": workDone->name,
            "name": name
        }
    }`;
  return {
    siteHead,
    content,
    projects: await client.fetch(projects_request),
    projHandle
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CQXe3t13.js')).default;
const server_id = "src/routes/work/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/9.DM51-pgq.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/chunks/ru3awRz-.js","_app/immutable/chunks/xbnKh8CZ.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DJXWhR1s.js","_app/immutable/chunks/CsACGoET.js","_app/immutable/chunks/BksHmwdK.js","_app/immutable/chunks/h-UchLzl.js","_app/immutable/chunks/Bn-tTi7H.js","_app/immutable/chunks/mG0KThyr.js"];
const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.Bpb0KmXa.css","_app/immutable/assets/loader.BxSIXnGK.css","_app/immutable/assets/sctn-projects-list.BTlgs0Lp.css","_app/immutable/assets/8.CfrVCup3.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-Dlf4Vr7D.js.map
