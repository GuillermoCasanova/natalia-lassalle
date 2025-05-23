import { c as client } from './sanity-ec4a4075.js';
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
const component = async () => (await import('./_page.svelte-7abe09c8.js')).default;
const file = '_app/immutable/entry/texts-page.svelte.10a595ec.mjs';
const server_id = "src/routes/texts/+page.server.js";
const imports = ["_app/immutable/entry/texts-page.svelte.10a595ec.mjs","_app/immutable/chunks/index.b299b763.mjs","_app/immutable/chunks/rich-text.45596a5b.mjs","_app/immutable/chunks/sanity.d951c4df.mjs"];
const stylesheets = ["_app/immutable/assets/_page.b13ae3e8.css","_app/immutable/assets/rich-text.3d254789.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-7a1592cd.js.map
