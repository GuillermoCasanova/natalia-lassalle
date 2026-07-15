import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

export const languages = [
	{ code: 'en', name: 'English', flag: '🇺🇸' },
	{ code: 'es', name: 'Español', flag: '🇪🇸' }
];

export const currentLanguage = writable('en');

/**
 * @param {string} lang
 */
export function initializeLanguageFromParams(lang) {
	if (browser) {
		currentLanguage.set(lang);
	}
}

/** @deprecated Use initializeLanguageFromParams */
export function initializeLanguageFromUrl() {
	if (browser) {
		const url = new URL(window.location.href);
		const segments = url.pathname.split('/').filter(Boolean);
		const language = segments[0] === 'es' ? 'es' : 'en';
		currentLanguage.set(language);
	}
}

/**
 * Build a localized path from a route segment path.
 * @param {string} path - e.g. '/work', '/work/foo', 'about'
 * @param {string} language
 * @returns {string}
 */
export function localizedPath(path, language) {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	const stripped = normalized.replace(/^\/(en|es)(?=\/|$)/, '') || '/';

	if (stripped === '/') {
		return `/${language}`;
	}

	return `/${language}${stripped.startsWith('/') ? stripped : `/${stripped}`}`;
}

/**
 * Swap the language segment in the current pathname.
 * @param {string} pathname
 * @param {string} language
 * @returns {string}
 */
export function switchLanguagePath(pathname, language) {
	const segments = pathname.split('/').filter(Boolean);

	if (segments.length > 0 && languages.some((lang) => lang.code === segments[0])) {
		segments[0] = language;
	} else {
		segments.unshift(language);
	}

	return `/${segments.join('/')}`;
}

/** @deprecated Use localizedPath instead */
export function addLanguageToUrl(url, language) {
	return localizedPath(url, language);
}

export const languageInfo = derived(currentLanguage, ($currentLanguage) => ({
	current: $currentLanguage,
	isEnglish: $currentLanguage === 'en',
	isSpanish: $currentLanguage === 'es',
	displayName: $currentLanguage === 'es' ? 'Español' : 'English'
}));
