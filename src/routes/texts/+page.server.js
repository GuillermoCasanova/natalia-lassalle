/** @type {import('./$types').PageServerLoad} */
import { queries, getLanguageFromUrl, fetchWithLocale } from '$lib/sanity/locale-client';
import { client } from '$lib/sanity';

export async function load(loadEvent) {
    const {params, fetch, parent, url} = loadEvent; 
    const parentData = await parent(); 

    // Get language from URL parameter (e.g., ?lang=es)
    const language = getLanguageFromUrl(url);

    // Use localized query for texts page
    const pageQuery = `*[_type == 'page' && handle.current == 'texts'][0] {
        ...,
        page_layout[]-> {
            ...,
            _type == "sctn_rich_text" => {
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
    }`;

    // Posts query (not localized for now, but could be added later)
    const postsQuery = `*[_type == 'post' && !(_id in path('drafts.**'))][] {
        ...,
        authors[]->
    }`;

    // Fetch data with automatic language selection
    const [content, posts] = await Promise.all([
        fetchWithLocale(pageQuery, language, params),
        client.fetch(postsQuery)
    ]);

    return {
        content,
        currentLanguage: language,
        streamed: {
            posts
        }
    };
}