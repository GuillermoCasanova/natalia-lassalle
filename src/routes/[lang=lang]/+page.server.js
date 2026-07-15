/** @type {import('./$types').PageLoad} */
import { client } from '$lib/server/sanity';
import { getLanguageFromParams, fetchWithLocale } from '$lib/sanity/locale-client';

export function entries() {
	return [{ lang: 'en' }, { lang: 'es' }];
}

export async function load({ params }) {
    const language = getLanguageFromParams(params);

    const request = `*[_type == 'site-settings'][0] {
            seo,
            analytics
        }
        `;

    const siteHead = await client.fetch(request, params);

    const page_request = `*[_type == 'page-home'][0] {
        ...,
        page_layout[]-> {
            ...,
            select(_type == "sctn_hero_header") => {
                ...,
                video[] {
                    ...,
                    'video_file': video_file.asset-> { 
                        ..., url, originalFilename
                        }
                }, 
                featured_project-> {
                    handle
                }
            },
            select(_type == "sctn_rich_text") => {
                ...,
                "text": select(
                    defined(text[language == "${language}"]) => text[language == "${language}"][0].content[] {
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
                    defined(text[language == "en"]) => text[language == "en"][0].content[] {
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
                    defined(text[0]) => text[0].content[] {
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
                )
            },
            _type == "sctn_experience_list" => {
                ...,
                "title": select(
                    defined(title.${language}) => title.${language},
                    defined(title.en) => title.en,
                    title
                )
            }
        }
    } 
    `;

    const content = await fetchWithLocale(page_request, language, params);

    const featuredProjectsQuery = `*[_type == 'project' && defined(handle.current)][0..6]{
        name,
        thumbnail,
        "medium": medium->{
            ...
        },
        "handle": handle.current
    }`;

    const featuredProjects = await client.fetch(featuredProjectsQuery);

    return {
        siteHead,
        content,
        featuredProjects,
        currentLanguage: language
    };
}