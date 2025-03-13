/** @type {import('./$types').PageLoad} */
import { client } from '$lib/sanity';

export async function load(loadEvent) {

    const {params, fetch, parent} = loadEvent; 

    const parentData = await parent(); 

    const page_request = `*[_type == 'page' && handle.current == 'work'][0] {
        ...,
        page_layout[]-> {
              ...,
            _type == "sctn_rich_text" => {
                ...,
                about[] {
                    ...,
                    markDefs[] {
                        ...,
                        _type == "internalLink" => {
                            "page": page-> { 
                                "slug": handle.current,
                                "title": page_title
                            }
                        },
                        _type == "link" => {
                            ...
                        },
                        _type == "mailtoLink" => {
                            ...
                        }
                    }
                }
            }
        }
    } 
    `;

    const content = await client.fetch(page_request, params);

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

    //This is available to child components via STUFF since it is in layout
    return {
        content,
        streamed: {
            projects: await client.fetch(projects_request)
        }
    };
}