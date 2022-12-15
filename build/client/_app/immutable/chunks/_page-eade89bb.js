import{c as o}from"./sanity-e5f0acfa.js";async function n({params:e,fetch:a}){const t=`*[_type == 'page' && handle.current == 'our-work'][0] {
        page_title,
        handle,
        seo,
        page_layout[] {
            ...,
            projects[]->
        }
    } 
        `;return{content:await o.fetch(t,e)}}const l=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{l as _,n as l};
