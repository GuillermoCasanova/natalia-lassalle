import { c as client } from './sanity-ec4a4075.js';
import '@sanity/client';
import '@sanity/image-url';

async function load(loadEvent) {
  console.log("Work index page server running");
  const { params, fetch, parent } = loadEvent;
  const page_request = `*[_type == 'page' && handle.current == 'work'][0] {
        ...,
        page_layout[]-> {
            ...,
            _type == "sctn_rich_text" => {
                ...,
                "text": text[] {
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
                }
            }
        }
    }`;
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
    content: await client.fetch(page_request, params),
    projects: await client.fetch(projects_request)
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
const component = async () => (await import('./_page.svelte-3fc08310.js')).default;
const file = '_app/immutable/entry/work-page.svelte.ac46e221.mjs';
const server_id = "src/routes/work/+page.server.js";
const imports = ["_app/immutable/entry/work-page.svelte.ac46e221.mjs","_app/immutable/chunks/index.b299b763.mjs","_app/immutable/chunks/sanity.d951c4df.mjs","_app/immutable/chunks/rich-text.45596a5b.mjs","_app/immutable/chunks/sctn-experience-list.56dc8107.mjs","_app/immutable/chunks/sctn-projects-list.091e7f50.mjs","_app/immutable/chunks/loader.c08fc5c8.mjs","_app/immutable/chunks/loader.svelte_svelte_type_style_lang.f388cf5c.mjs","_app/immutable/chunks/singletons.6d29df05.mjs","_app/immutable/chunks/stores.1d5fd5af.mjs"];
const stylesheets = ["_app/immutable/assets/_page.76430f9b.css","_app/immutable/assets/rich-text.3d254789.css","_app/immutable/assets/sctn-experience-list.ebd599b8.css","_app/immutable/assets/sctn-projects-list.64439785.css","_app/immutable/assets/loader.b630ed7c.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-b58da64b.js.map
