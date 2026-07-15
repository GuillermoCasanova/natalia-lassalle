/** @type {import('./$types').LayoutServerLoad} */

import { client } from '$lib/server/sanity';
import { getLanguageFromParams, fetchWithLocale } from '$lib/sanity/locale-client';

export const prerender = true;
export const ssr = true;

export async function load({ params, url }) {
	const language = getLanguageFromParams(params);

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
                "navigationItemUrl": navigationItemUrl {
                    ...,
                    select(linkType == "internal") => {
                        "internalLink": internalLink->
                    }
                }
            }
        }
    }`;

	const contactModalRequest = `*[_type == 'modal' && handle.current == "contact-modal"][0] {
        ...
    }`;

	const [navigation, footer, contactModal] = await Promise.all([
		fetchWithLocale(mainNavRequest, language),
		client.fetch(footerRequest),
		client.fetch(contactModalRequest)
	]);

	return {
		navigation: navigation ?? { main_nav: { items: [] } },
		footer,
		contactModal,
		pathname: url.pathname,
		currentLanguage: language
	};
}
