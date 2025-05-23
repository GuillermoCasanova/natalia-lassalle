import{c as t}from"./sanity.d951c4df.mjs";const r=!0;async function s({url:{pathname:e}}){const n=`*[_type == 'footer-settings'][0] {
        ...,
        blocks[] {
            ...,
            select(_type == "footer_link") => {
                ..., 
                'externalLink': externalLink->,
                'internalLink': internalLink->
            }
        }
    }`,i=`*[_type == 'site-settings'][0] {
        main_nav-> {
            ..., 
            items[] {
                ...,
                select(navigationItemUrl.linkType == "internal") => {
                    'navigationItemUrl': navigationItemUrl {
                        ...,
                        internalLink->
                    }
                }
            }
        }
    }`,a=await t.fetch(i),o=await t.fetch(n);return{navigation:a,footer:o,pathname:e}}const c=Object.freeze(Object.defineProperty({__proto__:null,load:s,ssr:r},Symbol.toStringTag,{value:"Module"}));export{c as _,s as l,r as s};
