import { c as client } from './sanity-f213399b.js';
import '@sanity/client';
import '@sanity/image-url';

async function load({ params, fetch }) {
  const request = `*[_type == 'page' && handle.current == 'our-work'][0] {
        page_title,
        handle,
        seo,
        page_layout[] {
            ...,
            projects[]->
        }
    } 
        `;
  const content = await client.fetch(request, params);
  return {
    content
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-109e20f6.js')).default;
const file = '_app/immutable/components/pages/our-work/_page.svelte-90d8034a.js';
const imports = ["_app/immutable/components/pages/our-work/_page.svelte-90d8034a.js","_app/immutable/chunks/index-651331ac.js","_app/immutable/chunks/sanity-e5f0acfa.js","_app/immutable/chunks/MetaTags-496b93b2.js","_app/immutable/chunks/sctn-proj-list-2124862b.js","_app/immutable/chunks/index-17d02649.js","_app/immutable/modules/pages/our-work/_page.js-20ad9ec4.js","_app/immutable/chunks/sanity-e5f0acfa.js","_app/immutable/chunks/_page-eade89bb.js"];
const stylesheets = ["_app/immutable/assets/sctn-proj-list-5b5149af.css"];

export { component, file, imports, index, _page as shared, stylesheets };
//# sourceMappingURL=4-e209c0a6.js.map
