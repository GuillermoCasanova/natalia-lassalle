import { c as client } from './sanity-DpqZfrM0.js';
import '@sanity/client';
import '@sanity/image-url';

async function load({ params, fetch }) {
  const request = `*[_type == 'site-settings'][0] {
            seo,
            analytics
        }
        `;
  const siteHead = await client.fetch(request, params);
  const page_request = `*[_type == 'page-home'][0] {
        ...,
        page_layout[]-> {
            ...,
            select(_type == "sctn_hero_header") => {
                ...,
                video[] {
                    ...,
                    'video_file': video_file.asset-> { 
                        ..., url, originalFilename
                        }
                }, 
                featured_project-> {
                    handle
                }
            }
        }
    } 
    `;
  const content = await client.fetch(page_request, params);
  return {
    siteHead,
    content
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Ctz0XSiI.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.NbT6FiL2.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/chunks/ru3awRz-.js","_app/immutable/chunks/xbnKh8CZ.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DyEKE_NK.js","_app/immutable/chunks/DJ2DcCb_.js","_app/immutable/chunks/C-3fZacK.js","_app/immutable/chunks/CX_-HvwG.js","_app/immutable/chunks/BdkR6PBR.js","_app/immutable/chunks/mG0KThyr.js","_app/immutable/chunks/BmDOIz9y.js"];
const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.Bpb0KmXa.css","_app/immutable/assets/loader.BxSIXnGK.css","_app/immutable/assets/sctn-projects-list.BTlgs0Lp.css","_app/immutable/assets/featured-projects-slideshow.mHtqLJBc.css","_app/immutable/assets/2.6N3M63Q6.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-DasE9vY3.js.map
