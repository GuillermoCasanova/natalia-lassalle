import{c as t}from"./sanity-e5f0acfa.js";async function r({params:e,fetch:n}){const o=`*[_type == 'project' && handle.current == "${e.slug.toString()}"][0] {
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
        `;return{project:await t.fetch(o,e)}}const c=Object.freeze(Object.defineProperty({__proto__:null,load:r},Symbol.toStringTag,{value:"Module"}));export{c as _,r as l};
