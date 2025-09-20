import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

// Available languages
export const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
];

// Language store
export const currentLanguage = writable('en');

// Initialize language from URL if in browser
/**
 * @param {URL} url
 * @returns {string}
 */
export function getLanguageFromUrl(url) {
    return url.searchParams.get('lang') || 'en';
}

// Initialize language from URL on page load
export function initializeLanguageFromUrl() {
    if (browser) {
        const url = new URL(window.location.href);
        const language = getLanguageFromUrl(url);
        currentLanguage.set(language);
        console.log('Language store initialized with:', language);
    }
}

// Add language parameter to URL
/**
 * @param {string} url
 * @param {string} language
 * @returns {string}
 */
export function addLanguageToUrl(url, language) {
    if (typeof url !== 'string') {
        return String(url);
    }
    
    // Handle relative URLs by creating a URL object with current origin
    const baseUrl = browser ? window.location.origin : 'http://localhost:5173';
    const urlObj = new URL(url, baseUrl);
    
    if (language === 'en') {
        urlObj.searchParams.delete('lang');
    } else {
        urlObj.searchParams.set('lang', language);
    }
    
    // Return just the pathname and search params for internal navigation
    return urlObj.pathname + urlObj.search;
}

// Derived store for language-aware operations
export const languageInfo = derived(currentLanguage, ($currentLanguage) => ({
    current: $currentLanguage,
    isEnglish: $currentLanguage === 'en',
    isSpanish: $currentLanguage === 'es',
    displayName: $currentLanguage === 'es' ? 'Español' : 'English'
}));
