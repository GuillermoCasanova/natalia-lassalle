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
export function getLanguageFromUrl(url) {
    return url.searchParams.get('lang') || 'en';
}

// Initialize language from URL on page load
export function initializeLanguageFromUrl() {
    if (browser) {
        const url = new URL(window.location.href);
        const language = getLanguageFromUrl(url);
        currentLanguage.set(language);
    }
}

// Add language parameter to URL
export function addLanguageToUrl(url, language) {
    // Handle both string URLs and URL objects
    const urlObj = typeof url === 'string' ? new URL(url, window.location.origin) : url;
    
    if (language === 'en') {
        urlObj.searchParams.delete('lang');
    } else {
        urlObj.searchParams.set('lang', language);
    }
    return urlObj.toString();
}

// Derived store for language-aware operations
export const languageInfo = derived(currentLanguage, ($currentLanguage) => ({
    current: $currentLanguage,
    isEnglish: $currentLanguage === 'en',
    isSpanish: $currentLanguage === 'es',
    displayName: $currentLanguage === 'es' ? 'Español' : 'English'
}));
