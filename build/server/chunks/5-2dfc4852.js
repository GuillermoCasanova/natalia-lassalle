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
  const page_request = `*[_type == 'page' && handle.current == 'current'][0] {
        ...,
        page_layout[]->
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

const index = 5;
const component = async () => (await import('./_page.svelte-2a0298e7.js')).default;
const file = '_app/immutable/entry/current-page.svelte.497db069.mjs';
const server_id = "src/routes/current/+page.server.js";
const imports = ["_app/immutable/entry/current-page.svelte.497db069.mjs","_app/immutable/chunks/index.b299b763.mjs","_app/immutable/chunks/sanity.d951c4df.mjs","_app/immutable/chunks/rich-text.45596a5b.mjs","_app/immutable/chunks/stores.eb849269.mjs","_app/immutable/chunks/singletons.b71ff160.mjs","_app/immutable/chunks/sctn-experience-list.56dc8107.mjs","_app/immutable/chunks/sctn-projects-list.e8c04e88.mjs","_app/immutable/chunks/loader.56194094.mjs","_app/immutable/chunks/loader.svelte_svelte_type_style_lang.ea323b53.mjs"];
const stylesheets = ["_app/immutable/assets/rich-text.3d254789.css","_app/immutable/assets/sctn-experience-list.ebd599b8.css","_app/immutable/assets/sctn-projects-list.64439785.css","_app/immutable/assets/loader.b630ed7c.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-2dfc4852.js.map
