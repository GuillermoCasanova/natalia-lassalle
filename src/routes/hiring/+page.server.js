/** @type {import('./$types').PageLoad} */
import { client } from '$lib/sanity';

export const csr = false;

export async function load({ params, fetch }) {
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

//export const hydrate = false;
