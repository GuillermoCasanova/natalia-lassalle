/** @type {import('./$types').PageLoad} */
import { client } from '$lib/sanity';

export async function load(loadEvent) {
    console.log("Work index page server running");
    const {params, fetch, parent} = loadEvent; 

    const page_request = `*[_type == 'page' && handle.current == 'work'][0] {
        ...,
        page_layout[]-> {
            ...,
            _type == "sctn_rich_text" => {
                ...,
                "text": text[] {
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
                }
            }
        }
    }`; 

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

    return {
        content: await client.fetch(page_request, params),
        projects: await client.fetch(projects_request)
    };
}