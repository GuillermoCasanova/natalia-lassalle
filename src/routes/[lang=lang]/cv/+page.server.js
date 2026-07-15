/** @type {import('./$types').PageServerLoad} */
import { queries, getLanguageFromParams, fetchWithLocale } from '$lib/sanity/locale-client';
import { client } from '$lib/server/sanity';

export function entries() {
	return [{ lang: 'en' }, { lang: 'es' }];
}

export async function load({ params }) {
    const language = getLanguageFromParams(params);
    
    // Site settings query (not localized)
    const siteSettingsQuery = `*[_type == 'site-settings'][0] {
        seo,
        analytics
    }`;

    // Use localized query for cv page
    const pageQuery = `*[_type == 'page' && handle.current == 'cv'][0] {
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