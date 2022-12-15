import { c as client } from './sanity-f213399b.js';
import '@sanity/client';
import '@sanity/image-url';

async function load({ params, fetch }) {
  const request = `*[_type == 'page' && handle.current == 'hiring'][0] {
        page_title,
        handle,
        seo,
        page_layout[] {
                ...,
                select(_type == "page_featured_work_list")=> {
                    ...,
                    'projects': projects[]-> {
                        name, 
                        overview,
                        handle, 
                        work_done
                    }
                },
                _type == "sctn_jobs_list" => {
                    job_posts[] {
                      ...,
                      description[] {
                        ...,
                        _type == "block" => {
                           ..., 
                           markDefs[] {
                              ...,
                             _type == "internalLink"=>{
                               page->  {
                                handle, 
                                _type,
                                page_title,
                                name
                               }
                           
                             }
                           }
                           
                         }
                      }                  
                        
                    }
                    
                }
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

const index = 3;
const component = async () => (await import('./_page.svelte-f1618dec.js')).default;
const file = '_app/immutable/components/pages/hiring/_page.svelte-2fdd5e0d.js';
const imports = ["_app/immutable/components/pages/hiring/_page.svelte-2fdd5e0d.js","_app/immutable/chunks/index-651331ac.js","_app/immutable/chunks/sanity-e5f0acfa.js","_app/immutable/chunks/MetaTags-496b93b2.js","_app/immutable/chunks/sctn-proj-list-2124862b.js","_app/immutable/chunks/sctn-featured-work-f228ee81.js","_app/immutable/chunks/IntersectionObserver-dd1b6104.js","_app/immutable/chunks/index-17d02649.js","_app/immutable/modules/pages/hiring/_page.js-071340c8.js","_app/immutable/chunks/sanity-e5f0acfa.js","_app/immutable/chunks/_page-ac8b427c.js"];
const stylesheets = ["_app/immutable/assets/_page-47db28fc.css","_app/immutable/assets/sctn-proj-list-5b5149af.css","_app/immutable/assets/sctn-featured-work-e858e4f6.css"];

export { component, file, imports, index, _page as shared, stylesheets };
//# sourceMappingURL=3-1cecca12.js.map
