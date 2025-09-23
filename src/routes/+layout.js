/** @type {import('./$types').LayoutLoad} */

import { client } from '$lib/sanity';
import { getLanguageFromUrl, fetchWithLocale } from '$lib/sanity/locale-client';
import { currentLanguage } from "$lib/stores/language";

export const ssr = true;

export async function load( {url, depends}) {
    // Tell SvelteKit to re-run this load function when search params change
    depends('layout:language');
    
    const language = getLanguageFromUrl(url);
    
    console.log('=== LAYOUT LOAD DEBUG ===');
    console.log('URL:', url.toString());
    console.log('Language detected:', language);
    console.log('========================');

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

    const mainNavRequest = `*[_type == 'site-settings'][0] {
        main_nav-> {
            ..., 
            items[] {
                ...,
                "text": select(
                    defined(text.${language}) && text.${language} != null => text.${language},
                    defined(text.en) => text.en,
                    "Untitled"
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
    
    console.log('Navigation items:', navigation.main_nav?.items);
    console.log('========================');
    
    return {
        navigation,
        footer,
        pathname: url.pathname,
        currentLanguage: language,
        // Add search params to force re-run
        searchParams: Object.fromEntries(url.searchParams)
    };
}


