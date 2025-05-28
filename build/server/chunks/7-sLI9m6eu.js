import { c as client } from './sanity-DpqZfrM0.js';
import '@sanity/client';
import '@sanity/image-url';

async function load(loadEvent) {
  const { params, fetch, parent } = loadEvent;
  await parent();
  const page_request = `*[_type == 'page' && handle.current == 'texts'][0] {
        ...,
        page_layout[]->
    } 
    `;
  const posts_request = `*[_type == 'post'  && !(_id in path('drafts.**'))][] {
        ...,
        authors[]->
    } 
    `;
  const content = await client.fetch(page_request, params);
  return {
    content,
    streamed: {
      posts: await client.fetch(posts_request)
    }
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DshDViyX.js')).default;
const server_id = "src/routes/texts/+page.server.js";
const imports = ["_app/immutable/nodes/7.EnuCiGw3.js","_app/immutable/chunks/TOP8TKJg.js","_app/immutable/chunks/ru3awRz-.js","_app/immutable/chunks/xbnKh8CZ.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DyEKE_NK.js","_app/immutable/chunks/DJ2DcCb_.js","_app/immutable/chunks/C-3fZacK.js"];
const stylesheets = ["_app/immutable/assets/rich-text.DiPaT0Bv.css","_app/immutable/assets/7.ByD8kY5j.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-sLI9m6eu.js.map
