/** @type {import('./$types').PageLoad} */
import { client } from '$lib/sanity';

export async function load({ params, fetch }) {
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
                    'team_members': team_members[]-> {
                        ...
                    } 
                },
            }
    } 
    `;

    const projects_request  = `*[_type == 'project'][] {
        ...,
        "medium" : medium ->{
            ...
        },
        "preview_videos": preview_videos[] {
            ...,
            "video_file": video_file.asset->
        }
    }
    `;

    const content = await client.fetch(page_request, params);

    const projects = await client.fetch(projects_request, params);

    //This is available to child components via STUFF since it is in layout
    return {
        siteHead,
        content,
        projects
    };
}