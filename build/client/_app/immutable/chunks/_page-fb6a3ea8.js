import{c as t}from"./sanity-e5f0acfa.js";async function r({params:e,fetch:_}){const a=`*[_type == 'site-settings'][0] {
            seo,
            analytics
        }
        `,o=await t.fetch(a,e),s=`*[_type == 'page-home'][0] {
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
    `,n=await t.fetch(s,e);return{siteHead:o,content:n}}const l=Object.freeze(Object.defineProperty({__proto__:null,load:r},Symbol.toStringTag,{value:"Module"}));export{l as _,r as l};
