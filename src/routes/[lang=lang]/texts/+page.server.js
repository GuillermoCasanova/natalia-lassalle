/** @type {import('./$types').PageServerLoad} */
import { queries, getLanguageFromParams, fetchWithLocale } from '$lib/sanity/locale-client';
import { client } from '$lib/server/sanity';

export function entries() {
	return [{ lang: 'en' }, { lang: 'es' }];
}

export async function load({ params }) {
    const language = getLanguageFromParams(params);

    // Posts query with localization
    const postsQuery = `*[_type == 'post' && !(_id in path('drafts.**'))][] {
        ...,
        "title": select(
            defined(title.${language}) && title.${language} != "" => title.${language},
            defined(title.en) && title.en != "" => title.en,
            title
        ),
        "content": select(
            defined(content[language == "${language}"]) && count(content[language == "${language}"][0].content) > 0 => content[language == "${language}"][0].content[] {
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
            defined(content[language == "en"]) && count(content[language == "en"][0].content) > 0 => content[language == "en"][0].content[] {
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
            defined(content[0]) => content[0].content[] {
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
        ),
        authors[]->
    }`;

    // Fetch data with automatic language selection using centralized query
    const [content, posts] = await Promise.all([
        fetchWithLocale(queries.texts(language), language, params),
        fetchWithLocale(postsQuery, language, params)
    ]);

    return {
        content,
        currentLanguage: language,
        posts
    };
}