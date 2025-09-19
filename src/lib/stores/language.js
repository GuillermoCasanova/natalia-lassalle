// @ts-check
import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

// Define available languages
export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  // Add more languages as needed
];

// Get initial language from localStorage or default to 'en'
const storedLang = browser ? localStorage.getItem('preferredLanguage') : null;
const initialLang = storedLang || 'en';

console.log('=== LANGUAGE STORE INIT ===');
console.log('Browser:', browser);
console.log('Stored lang:', storedLang);
console.log('Initial lang:', initialLang);
console.log('============================');

// Create the main language store
export const currentLanguage = writable(initialLang);

// Subscribe to changes and persist to localStorage
if (browser) {
  currentLanguage.subscribe((value) => {
    localStorage.setItem('preferredLanguage', value);
    // Update HTML lang attribute
    document.documentElement.lang = value;
  });
}

// Derived store for getting the current language object
export const currentLanguageData = derived(
  currentLanguage,
  ($currentLanguage) => languages.find(lang => lang.code === $currentLanguage)
);

// Helper function to get current language (works on both server and client)
export function getCurrentLanguage() {
  if (browser) {
    return localStorage.getItem('preferredLanguage') || 'en';
  }
  return 'en';
}

// Server-side helper to get language from URL
export function getLanguageFromUrl(url) {
  return url.searchParams.get('lang') || 'en';
}

// Client-side helper to initialize language from URL
export function initializeLanguageFromUrl() {
  if (browser) {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    console.log('=== INITIALIZE FROM URL ===');
    console.log('URL lang:', urlLang);
    
    if (urlLang) {
      console.log('Updating language store to:', urlLang);
      currentLanguage.set(urlLang);
    }
    console.log('============================');
  }
}

// Helper function to add language parameter to a URL
export function addLanguageToUrl(url) {
  if (browser) {
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    try {
      const urlObj = new URL(url, window.location.origin);
      urlObj.searchParams.set('lang', currentLang);
      return urlObj.toString();
    } catch (e) {
      // If URL parsing fails, just append the parameter
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}lang=${currentLang}`;
    }
  }
  return url;
}