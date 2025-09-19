/** @type {import('./$types').PageServerLoad} */
import { client } from '$lib/sanity';

export async function load({ params, url }) {
    // Get language from query param, route param, or default to 'en'
    const language = url.searchParams.get('lang') || 'en';
    
    console.log('=== WORK PAGE SERVER DEBUG ===');
    console.log('URL:', url.toString());
    console.log('Search params:', Object.fromEntries(url.searchParams));
    console.log('Language detected:', language);
    console.log('================================');

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
                            ...,
                        },
                        _type == "mailtoLink" => {
                            ...,
                        }
                    }
                }
            }
        }
    }`; 

    const projects_request = `*[_type == 'project' && !(_id in path('drafts.**'))] {
        ...,
        "name_en": name.en,
        "name_es": name.es,
        "about_en": about.en[] {
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
                    ...,
                },
                _type == "mailtoLink" => {
                    ...,
                }
            }
        },
        "about_es": about.es[] {
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
                    ...,
                },
                _type == "mailtoLink" => {
                    ...,
                }
            }
        },
        "medium": medium->{
            ...,
        },
        "preview_videos": preview_videos[] {
            ...,
            "video_file": video_file.asset->
        },
        "creditsList": creditsList[]-> {
          _type,
            _ref,
            _key,
            "workDone": workDone->name,
            "name": name
        }
    }`;

    const projectsData = await client.fetch(projects_request);
    
    console.log('=== SERVER PROJECTS DEBUG ===');
    console.log('Projects fetched:', projectsData);
    console.log('Number of projects:', projectsData?.length);
    console.log('First project structure:', projectsData?.[0]);
    console.log('================================');
    
    return {
        content: await client.fetch(page_request, params),
        projects: projectsData,
        currentLanguage: language
    };
}