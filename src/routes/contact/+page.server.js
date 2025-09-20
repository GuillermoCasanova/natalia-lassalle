/** @type {import('./$types').PageServerLoad} */
import { queries, getLanguageFromUrl, fetchWithLocale } from '$lib/sanity/locale-client';
import { client } from '$lib/sanity';

export async function load({ params, url }) {
    // Get language from URL parameter (e.g., ?lang=es)
    const language = getLanguageFromUrl(url);
    
    // Site settings query (not localized)
    const siteSettingsQuery = `*[_type == 'site-settings'][0] {
        seo,
        analytics
    }`;

    // Use localized query for contact page
    const pageQuery = `*[_type == 'page' && handle.current == 'contact'][0] {
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

    // Fetch data with automatic language selection
    const [siteHead, content] = await Promise.all([
        client.fetch(siteSettingsQuery, params),
        fetchWithLocale(pageQuery, language, params)
    ]);

    return {
        siteHead,
        content,
        currentLanguage: language
    };
}