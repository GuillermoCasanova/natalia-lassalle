import { browser } from '$app/environment';
import { addLanguageToUrl, currentLanguage } from '$lib/stores/language';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';

/**
 * Intercepts clicks on internal links and adds language parameter
 * @param {Event} event - The click event
 */
export function handleInternalLinkClick(event) {
  if (!browser) return;
  
  const target = event.target;
  if (!target || !(target instanceof Element)) return;
  
  // Find the closest anchor tag
  const link = target.closest('a');
  if (!link) return;
  
  const href = link.getAttribute('href');
  if (!href) return;
  
  // Check if it's an internal link (starts with / or is relative)
  const isInternal = href.startsWith('/') || href.startsWith('./') || href.startsWith('../');
  
  // Skip if it's an external link or has special attributes
  if (!isInternal || 
      link.hasAttribute('target') || 
      link.hasAttribute('download') ||
      href.includes('mailto:') || 
      href.includes('tel:') ||
      href.includes('#')) {
    return;
  }
  
  // Check if language parameter is already present
  if (href.includes('lang=')) {
    return;
  }
  
  // Prevent default navigation
  event.preventDefault();
  
  // Add language parameter and navigate
  const urlWithLang = addLanguageToUrl(href, get(currentLanguage));
  
  console.log('=== LINK INTERCEPTOR ===');
  console.log('Original URL:', href);
  console.log('URL with language:', urlWithLang);
  console.log('========================');
  
  // Navigate to the new URL using SvelteKit's goto
  goto(urlWithLang);
}

/**
 * Sets up link interception for the entire document
 */
export function setupLinkInterceptor() {
  if (!browser) return;
  
  // Remove any existing listeners to avoid duplicates
  document.removeEventListener('click', handleInternalLinkClick, true);
  
  // Add the listener with capture=true to intercept before other handlers
  document.addEventListener('click', handleInternalLinkClick, true);
  
  console.log('Link interceptor set up');
}

/**
 * Removes link interception
 */
export function removeLinkInterceptor() {
  if (!browser) return;
  
  document.removeEventListener('click', handleInternalLinkClick, true);
  console.log('Link interceptor removed');
}
