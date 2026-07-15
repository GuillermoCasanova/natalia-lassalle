/**
 * Sanity Locale Client - Automatically handles language selection based on URL parameters
 * This creates a scalable solution that doesn't require rewriting queries
 */

import { createClient } from '@sanity/client';
import { sanityConfig as baseConfig } from '$lib/server/sanity.js';

/**
 * Create a Sanity client with automatic locale handling
 * @param {string} language - The target language (e.g., 'en', 'es')
 * @returns {Object} Configured Sanity client
 */
export function createLocaleClient(language = 'en') {
    return createClient({
        ...baseConfig,
        // Add locale-specific configuration
        perspective: 'published',
        stega: {
            enabled: false
        }
    });
}

/**
 * Build a GROQ query that automatically selects the correct language
 * @param {string} baseQuery - The base GROQ query
 * @param {string} language - The target language
 * @param {Array<string>} availableLanguages - Available languages (default: ['en', 'es'])
 * @returns {string} Query with automatic language selection
 */
export function buildLocalizedQuery(baseQuery, language = 'en', availableLanguages = ['en', 'es']) {
    // Create a fallback chain: target language -> English -> first available
    const fallbackChain = [language, 'en', ...availableLanguages.filter(lang => lang !== language && lang !== 'en')];
    
    // Build select statements for each language in the fallback chain
    /** @param {string} field */
    const buildSelectStatement = (field, isArray = false) => {
        if (fallbackChain.length === 1) {
            return `${field}.${fallbackChain[0]}${isArray ? '[]' : ''}`;
        }
        
        const conditions = fallbackChain.map((lang, index) => {
            const condition = `defined(${field}.${lang}) && ${field}.${lang} != ""`;
            const value = `${field}.${lang}${isArray ? '[]' : ''}`;
            return `${condition} => ${value}`;
        }).join(',\n            ');
        
        return `select(\n            ${conditions}\n        )`;
    };

    return `${baseQuery} {
        ...,
        // Automatically select the correct language with fallback
        "name": ${buildSelectStatement('name')},
        "about": select(
            defined(about[language == "${language}"]) && count(about[language == "${language}"][0].content) > 0 => about[language == "${language}"][0].content[] {
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
            defined(about[language == "en"]) && count(about[language == "en"][0].content) > 0 => about[language == "en"][0].content[] {
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
            defined(about[0]) => about[0].content[] {
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
        "medium": medium->{
            ...,
            "title": ${buildSelectStatement('title')}
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
}

/**
 * Build a page query with automatic language selection
 * @param {string} language - The target language
 * @returns {string} Page query with language selection
 */
export function buildPageQuery(language = 'en') {
    return `*[_type == 'page' && handle.current == 'work'][0] {
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
            }
        }
    }`;
}

/**
 * Fetch data with automatic language selection
 * @param {string} query - The GROQ query
 * @param {string} language - The target language
 * @param {Object} params - Query parameters
 * @returns {Promise<any>} Fetched data
 */
export async function fetchWithLocale(query, language = 'en', params = {}) {
    const localeClient = createLocaleClient(language);
    return await /** @type {any} */ (localeClient).fetch(query, params);
}

/**
 * Get language from route params with fallback
 * @param {{ lang?: string }} params
 * @returns {string}
 */
export function getLanguageFromParams(params) {
    return params?.lang || 'en';
}

/**
 * Get language from URL with fallback
 * @param {URL} url
 * @returns {string}
 */
export function getLanguageFromUrl(url) {
    return url.searchParams.get('lang') || 'en';
}

/**
 * Pre-built queries for common use cases
 */
export const queries = {
    /**
     * Get projects with automatic language selection
     * @param {string} language - The target language
     * @returns {string} GROQ query
     */
    projects: (language = 'en') => buildLocalizedQuery(
        `*[_type == 'project' && !(_id in path('drafts.**'))]`,
        language
    ),

    /**
     * Get page content with automatic language selection
     * @param {string} language - The target language
     * @returns {string} GROQ query
     */
    page: (language = 'en') => buildPageQuery(language),

    /**
     * Get a specific project by slug with automatic language selection
     * @param {string} slug - The project slug
     * @param {string} language - The target language
     * @returns {string} GROQ query
     */
    projectBySlug: (slug, language = 'en') => buildLocalizedQuery(
        `*[_type == 'project' && handle.current == '${slug}'][0]`,
        language
    ),

    /**
     * Get texts page with automatic language selection
     * @param {string} language - The target language
     * @returns {string} GROQ query
     */
    texts: (language = 'en') => buildTextsQuery(language)
};

/**
 * Build a texts page query with automatic language selection
 * @param {string} language - The target language
 * @returns {string} Texts page query with language selection
 */
export function buildTextsQuery(language = 'en') {
    return `*[_type == 'page' && handle.current == 'texts'][0] {
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
}
