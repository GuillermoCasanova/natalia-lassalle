/**
 * Client-side language filtering utilities
 */

/**
 * Get localized field value with fallback
 * @param {Record<string, any>} project - The project object
 * @param {string} fieldName - The field name (e.g., 'name', 'about')
 * @param {string} language - The target language (e.g., 'en', 'es')
 * @returns {any} The localized field value or fallback to English
 */
export function getLocalizedField(project, fieldName, language) {
  if (!project || !fieldName || !language) {
    return null;
  }
  
  const localizedField = `${fieldName}_${language}`;
  const fallbackField = `${fieldName}_en`;
  
  // Return the localized field if it exists, otherwise fallback to English
  return project[localizedField] || project[fallbackField] || project[fieldName] || null;
}

/**
 * Automatically localize any object by detecting and replacing localized fields
 * @param {Record<string, any>} obj - The object to localize
 * @param {string} language - The target language (e.g., 'en', 'es')
 * @returns {Record<string, any>} Object with localized fields
 */
export function autoLocalizeObject(obj, language) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  
  if (!language) {
    language = 'en'; // Default to English
  }
  
  const localized = { ...obj };
  
  // Find all fields that have language suffixes
  const languageFields = Object.keys(obj).filter(key => {
    return key.endsWith(`_${language}`) || key.endsWith('_en');
  });
  
  // Group fields by their base name (without language suffix)
  /** @type {Record<string, string[]>} */
  const fieldGroups = {};
  languageFields.forEach(field => {
    const baseField = field.replace(/_(en|es)$/, '');
    if (!fieldGroups[baseField]) {
      fieldGroups[baseField] = [];
    }
    fieldGroups[baseField].push(field);
  });
  
  // For each group, set the main field to the localized version
  Object.keys(fieldGroups).forEach(baseField => {
    const targetField = `${baseField}_${language}`;
    const fallbackField = `${baseField}_en`;
    
    // Use localized version if available, otherwise fallback to English
    const localizedValue = obj[targetField] || obj[fallbackField];
    
    if (localizedValue !== undefined) {
      localized[baseField] = localizedValue;
    }
  });
  
  return localized;
}

/**
 * Filter projects to show only the selected language (automated version)
 * @param {Array<Record<string, any>>} projects - Array of project objects
 * @param {string} language - The target language (e.g., 'en', 'es')
 * @returns {Array<Record<string, any>>} Filtered projects with localized fields
 */
export function filterProjectsByLanguage(projects, language) {
  console.log('=== AUTO FILTER FUNCTION DEBUG ===');
  console.log('Projects input:', projects);
  console.log('Language input:', language);
  
  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    console.log('No projects or empty array, returning empty array');
    return [];
  }
  
  if (!language) {
    language = 'en'; // Default to English if no language specified
    console.log('No language specified, defaulting to:', language);
  }
  
  const filtered = projects
    .map(project => {
      if (!project) return null;
      
      // Automatically localize the entire project object
      const localizedProject = autoLocalizeObject(project, language);
      
      console.log(`Project ${project._id}:`);
      console.log('  - Original:', project);
      console.log('  - Localized:', localizedProject);
      
      return localizedProject;
    })
    .filter(project => project !== null); // Remove any null values
  
  console.log('Filtered result:', filtered);
  console.log('===============================');
  
  return filtered;
}

/**
 * Localize HTML content by replacing elements with language-specific versions
 * @param {string} html - The HTML string to localize
 * @param {string} language - The target language (e.g., 'en', 'es')
 * @returns {string} Localized HTML string
 */
export function localizeHtml(html, language) {
  if (!html || typeof html !== 'string') {
    return html;
  }
  
  if (!language) {
    language = 'en';
  }
  
  // Create a temporary DOM element to parse the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  
  // Find all elements with language-specific classes or data attributes
  const elementsToLocalize = tempDiv.querySelectorAll('[data-lang], .lang-en, .lang-es');
  
  elementsToLocalize.forEach(element => {
    // Check for data-lang attribute first
    const dataLang = element.getAttribute('data-lang');
    if (dataLang) {
      // If this element has the target language, show it
      if (dataLang === language) {
        /** @type {HTMLElement} */ (element).style.display = '';
        element.removeAttribute('data-lang');
      } else {
        // Hide elements with other languages
        /** @type {HTMLElement} */ (element).style.display = 'none';
      }
    } else {
      // Handle class-based language switching
      const hasTargetLang = element.classList.contains(`lang-${language}`);
      const hasEnglish = element.classList.contains('lang-en');
      
      if (hasTargetLang) {
        // Show the target language element
        /** @type {HTMLElement} */ (element).style.display = '';
        element.classList.remove('lang-en', 'lang-es');
      } else if (hasEnglish && language !== 'en') {
        // Hide English elements when target language is not English
        /** @type {HTMLElement} */ (element).style.display = 'none';
      }
    }
  });
  
  return tempDiv.innerHTML;
}

/**
 * Localize any object with nested HTML content
 * @param {Record<string, any>} obj - The object to localize
 * @param {string} language - The target language
 * @param {Array<string>} htmlFields - Array of field names that contain HTML content
 * @returns {Record<string, any>} Localized object
 */
export function localizeObjectWithHtml(obj, language, htmlFields = []) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  
  const localized = autoLocalizeObject(obj, language);
  
  // Process HTML fields
  htmlFields.forEach(fieldName => {
    if (localized[fieldName] && typeof localized[fieldName] === 'string') {
      localized[fieldName] = localizeHtml(localized[fieldName], language);
    }
  });
  
  return localized;
}

/**
 * Get localized value from a localeString object
 * @param {Record<string, any>} localeString - The localeString object (e.g., { en: "English", es: "Spanish" })
 * @param {string} language - The target language (e.g., 'en', 'es')
 * @returns {string} The localized string or fallback to English
 */
export function getLocalizedString(localeString, language) {
  if (!localeString || typeof localeString !== 'object') {
    return localeString || '';
  }
  
  if (!language) {
    language = 'en';
  }
  
  // Return the localized version if available, otherwise fallback to English
  return localeString[language] || localeString.en || '';
}

/**
 * Get available languages for a project
 * @param {Record<string, any>} project - The project object
 * @param {string} fieldName - The field name to check
 * @returns {Array<string>} Array of available language codes
 */
export function getAvailableLanguages(project, fieldName) {
  const languages = [];
  
  if (project[`${fieldName}_en`]) languages.push('en');
  if (project[`${fieldName}_es`]) languages.push('es');
  
  return languages;
}