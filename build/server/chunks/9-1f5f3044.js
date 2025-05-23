import { c as client } from './sanity-ec4a4075.js';
import '@sanity/client';
import '@sanity/image-url';

async function load(loadEvent) {
  console.log("Work slug page server running");
  const { params, fetch, parent } = loadEvent;
  const parentData = await parent();
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
        about[] {
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
            ...,
            "workDone": workDone->name 
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
const component = async () => (await import('./_page.svelte-04d242ca.js')).default;
const file = '_app/immutable/entry/work-_slug_-page.svelte.d2ab4104.mjs';
const server_id = "src/routes/work/[slug]/+page.server.js";
const imports = ["_app/immutable/entry/work-_slug_-page.svelte.d2ab4104.mjs","_app/immutable/chunks/index.b299b763.mjs","_app/immutable/chunks/sanity.d951c4df.mjs","_app/immutable/chunks/rich-text.45596a5b.mjs","_app/immutable/chunks/sctn-experience-list.56dc8107.mjs","_app/immutable/chunks/sctn-projects-list.e8c04e88.mjs","_app/immutable/chunks/loader.56194094.mjs","_app/immutable/chunks/loader.svelte_svelte_type_style_lang.ea323b53.mjs","_app/immutable/chunks/singletons.b71ff160.mjs","_app/immutable/chunks/stores.eb849269.mjs"];
const stylesheets = ["_app/immutable/assets/_page.76430f9b.css","_app/immutable/assets/rich-text.3d254789.css","_app/immutable/assets/sctn-experience-list.ebd599b8.css","_app/immutable/assets/sctn-projects-list.64439785.css","_app/immutable/assets/loader.b630ed7c.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-1f5f3044.js.map
