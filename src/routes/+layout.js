/** @type {import('./$types').LayoutLoad} */

import { client } from '$lib/sanity';
import { getLanguageFromUrl, fetchWithLocale } from '$lib/sanity/locale-client';

export const ssr = true;

export async function load( {url}) {
    const language = getLanguageFromUrl(url);

    const footerRequest = `*[_type == 'footer-settings'][0] {
        ...,
        blocks[] {
            ...,
            select(_type == "footer_link") => {
                ..., 
                'externalLink': externalLink->,
                'internalLink': internalLink->
            }
        }
    }`;
    const request = `*[_type == 'site-settings'][0] {
        seo,
        analytics
    }
    `;

    const mainNavRequest = `*[_type == 'site-settings'][0] {
        main_nav-> {
            ..., 
            items[] {
                ...,
                "text": select(
                    defined(text.${language}) => text.${language},
                    defined(text.en) => text.en,
                    text
                ),
                select(navigationItemUrl.linkType == "internal") => {
                    'navigationItemUrl': navigationItemUrl {
                        ...,
                        internalLink->
                    }
                }
            }
        }
    }`;



    const navigation = await fetchWithLocale(mainNavRequest, language); 
    const footer = await client.fetch(footerRequest); 
    
    return {
        navigation,
        footer,
        pathname: url.pathname
    };
}


