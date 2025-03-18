/** @type {import('./$types').PageLoad} */
import { client } from '$lib/sanity';

export async function load(loadEvent) {
    console.log("Work slug page server running");
    const {params, fetch, parent} = loadEvent; 
    const parentData = await parent();
    console.log("Parent data in slug:", parentData);

    const projHandle = params.slug.toString(); 

    const request = `*[_type == 'site-settings'][0] {
            seo,
            analytics
        }
        `;

    const siteHead = await client.fetch(request, params);

    const page_request = `*[_type == 'page' && handle.current == 'work'][0] {
        ...,
        page_layout[]->
    } 
    `;

    const content = await client.fetch(page_request, params);
    

    const projects_request = `*[_type == 'project' && !(_id in path('drafts.**'))] {
        ...,
        about[] {
            ...,
            markDefs[] {
                ...,
                _type == "internalLink" => {
                    "page": page-> { 
                        "slug": handle.current,
                        "title": page_title,
                        "_type": _type
                    }
                },
                _type == "link" => {
                    ...
                },
                _type == "mailtoLink" => {
                    ...
                }
            }
        },
        "medium": medium->{
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
    }`;

    //This is available to child components via STUFF since it is in layout
    return {
        siteHead,
        content,
        projects: await client.fetch(projects_request),
        projHandle
    };
}