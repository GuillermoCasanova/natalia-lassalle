import { c as client } from './sanity-f213399b.js';
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
        page_layout[] {
                ...,
                select(_type == "page_featured_work_list")=> {
                    ...,
                    'projects': projects[]-> {
                        name, 
                        overview,
                        handle, 
                        work_done,
                        seo,
                        'brand_video': brand_video.asset-> { 
                            ..., url, originalFilename
                            }
                    }
                },
                select(_type == "page_brand_statement") => {
                    ...,
                    'video_file': video_file.asset-> { 
                    ..., url, originalFilename
                    }
                    
                },
                select(_type == "page_team")=> {
                    ...,
                    'team_members': team_members[]-> 
                },
            }
    } 
    `;
  const content = await client.fetch(page_request, params);
  return {
    siteHead,
    content
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-1e968ac8.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-daf7e59a.js';
const imports = ["_app/immutable/components/pages/_page.svelte-daf7e59a.js","_app/immutable/chunks/index-651331ac.js","_app/immutable/chunks/MetaTags-496b93b2.js","_app/immutable/chunks/sanity-e5f0acfa.js","_app/immutable/chunks/IntersectionObserver-dd1b6104.js","_app/immutable/chunks/modal-trigger-8c77d267.js","_app/immutable/chunks/sctn-featured-work-f228ee81.js","_app/immutable/chunks/index-17d02649.js","_app/immutable/modules/pages/_page.js-5401ee4d.js","_app/immutable/chunks/sanity-e5f0acfa.js","_app/immutable/chunks/_page-fb6a3ea8.js"];
const stylesheets = ["_app/immutable/assets/_page-b5aff80b.css","_app/immutable/assets/sctn-featured-work-e858e4f6.css"];

export { component, file, imports, index, _page as shared, stylesheets };
//# sourceMappingURL=2-2faf9c87.js.map
