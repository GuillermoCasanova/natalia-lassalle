import { c as client } from './sanity-ec4a4075.js';
import '@sanity/client';
import '@sanity/image-url';

async function load({ params, fetch }) {
  const request = `*[_type == 'site-settings'][0] {
            seo,
            analytics
        }
        `;
  const siteHead = await client.fetch(request, params);
  const page_request = `*[_type == 'page' && handle.current == 'about'][0] {
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

const index = 3;
const component = async () => (await import('./_page.svelte-21ca0cdf.js')).default;
const file = '_app/immutable/entry/about-page.svelte.73f4aa77.mjs';
const server_id = "src/routes/about/+page.server.js";
const imports = ["_app/immutable/entry/about-page.svelte.73f4aa77.mjs","_app/immutable/chunks/index.b299b763.mjs","_app/immutable/chunks/rich-text.45596a5b.mjs","_app/immutable/chunks/stores.eb849269.mjs","_app/immutable/chunks/singletons.b71ff160.mjs","_app/immutable/chunks/sctn-experience-list.56dc8107.mjs","_app/immutable/chunks/featured-projects-slideshow.d68d6563.mjs","_app/immutable/chunks/sanity.d951c4df.mjs"];
const stylesheets = ["_app/immutable/assets/_page.dbd02a19.css","_app/immutable/assets/rich-text.3d254789.css","_app/immutable/assets/sctn-experience-list.ebd599b8.css","_app/immutable/assets/featured-projects-slideshow.e18620e7.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-614d0f4d.js.map
