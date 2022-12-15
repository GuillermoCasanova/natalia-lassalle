import { c as client } from './sanity-f213399b.js';
import '@sanity/client';
import '@sanity/image-url';

async function load({ params, fetch }) {
  const projHandle = params.slug.toString();
  const request = `*[_type == 'project' && handle.current == "${projHandle}"][0] {
            _id, 
            work_done,
            seo,
            name,
            handle,
            project_layout[] {
                ...,
                select(_type == "project_video_break") => {
                    ...,
                    'video_file': video_file.asset-> { 
                    ..., url, originalFilename
                    },
                    'video_poster': video_poster.asset-> { 
                    url, originalFilename
                    }
                }
            }
        }
        `;
  const project = await client.fetch(request, params);
  return {
    project
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
const component = async () => (await import('./_page.svelte-732145c3.js')).default;
const file = '_app/immutable/components/pages/our-work/_slug_/_page.svelte-ba4203de.js';
const imports = ["_app/immutable/components/pages/our-work/_slug_/_page.svelte-ba4203de.js","_app/immutable/chunks/index-651331ac.js","_app/immutable/chunks/sanity-e5f0acfa.js","_app/immutable/chunks/IntersectionObserver-dd1b6104.js","_app/immutable/chunks/index-17d02649.js","_app/immutable/modules/pages/our-work/_slug_/_page.js-0ba3bd12.js","_app/immutable/chunks/sanity-e5f0acfa.js","_app/immutable/chunks/_page-892df30d.js"];
const stylesheets = ["_app/immutable/assets/_page-5a8ea804.css"];

export { component, file, imports, index, _page as shared, stylesheets };
//# sourceMappingURL=5-cfc9a3e0.js.map
