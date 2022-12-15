import{c as n}from"./sanity-e5f0acfa.js";async function o({params:e,fetch:a}){const t=`*[_type == 'page' && handle.current == 'hiring'][0] {
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
        `;return{content:await n.fetch(t,e)}}const p=Object.freeze(Object.defineProperty({__proto__:null,load:o},Symbol.toStringTag,{value:"Module"}));export{p as _,o as l};
