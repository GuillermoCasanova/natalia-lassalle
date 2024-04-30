/** @type {import('./$types').LayoutLoad} */

import { client } from '$lib/sanity';

export const ssr = true;

export async function load( {url: {pathname}}) {


    const footerRequest = `*[_type == 'footer-settings'][0] {
        ...,
        blocks[] {
            ...,
            select(_type == "footer_link") => {
                ..., 
                'externalLink': externalLink->,
                'internalLink': internalLink->
            }
        }
    }`;
    const request = `*[_type == 'site-settings'][0] {
        seo,
        analytics
    }
    `;

    const mainNavRequest = `*[_type == 'site-settings'][0] {
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
    }`;


    const projects_request  = `*[_type == 'project' && !(_id in path('drafts.**'))][] {
        ...,
        "medium" : medium ->{
            ...
        },
        
        "preview_videos": preview_videos[] {
            ...,
            "video_file": video_file.asset->
        },
        "creditsList": creditsList[]-> {
            ...,
            "workDone": workDone->name 
        }
    }
    `;
    

    const navigation = await client.fetch(mainNavRequest); 
    const footer = await client.fetch(footerRequest); 
    const projects = await client.fetch(projects_request);
    
    return {
        navigation,
        footer,
        projects,
        pathname
    };
}


