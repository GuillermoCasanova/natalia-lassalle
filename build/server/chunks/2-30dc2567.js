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
const component = async () => (await import('./_page.svelte-3e55d292.js')).default;
const file = '_app/immutable/entry/_page.svelte.c594f0a9.mjs';
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/entry/_page.svelte.c594f0a9.mjs","_app/immutable/chunks/index.b299b763.mjs","_app/immutable/chunks/rich-text.45596a5b.mjs","_app/immutable/chunks/stores.eb849269.mjs","_app/immutable/chunks/singletons.b71ff160.mjs","_app/immutable/chunks/sctn-experience-list.56dc8107.mjs","_app/immutable/chunks/sctn-projects-list.e8c04e88.mjs","_app/immutable/chunks/loader.56194094.mjs","_app/immutable/chunks/loader.svelte_svelte_type_style_lang.ea323b53.mjs","_app/immutable/chunks/sanity.d951c4df.mjs","_app/immutable/chunks/featured-projects-slideshow.d68d6563.mjs"];
const stylesheets = ["_app/immutable/assets/_page.20fb9cb2.css","_app/immutable/assets/rich-text.3d254789.css","_app/immutable/assets/sctn-experience-list.ebd599b8.css","_app/immutable/assets/sctn-projects-list.64439785.css","_app/immutable/assets/loader.b630ed7c.css","_app/immutable/assets/featured-projects-slideshow.e18620e7.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-30dc2567.js.map
