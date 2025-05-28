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
  const page_request = `*[_type == 'page' && handle.current == 'contact'][0] {
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
                                "title": page_title
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

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BmJ4zmUj.js')).default;
const server_id = "src/routes/contact/+page.server.js";
const imports = ["_app/immutable/nodes/4.Bj85O3C4.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/chunks/ru3awRz-.js","_app/immutable/chunks/xbnKh8CZ.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DyEKE_NK.js","_app/immutable/chunks/DJ2DcCb_.js","_app/immutable/chunks/C-3fZacK.js","_app/immutable/chunks/CX_-HvwG.js","_app/immutable/chunks/BmDOIz9y.js"];
const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/sctn-experience-list.Bpb0KmXa.css","_app/immutable/assets/featured-projects-slideshow.mHtqLJBc.css","_app/immutable/assets/3.Cussjxze.css","_app/immutable/assets/loader.BxSIXnGK.css","_app/immutable/assets/sctn-projects-list.BTlgs0Lp.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-CLjkZU-3.js.map
