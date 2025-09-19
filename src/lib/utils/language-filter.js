/**
 * Client-side language filtering utilities
 */

/**
 * Get localized field value with fallback
 * @param {Object} project - The project object
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
 * Filter projects to show only the selected language
 * @param {Array} projects - Array of project objects
 * @param {string} language - The target language (e.g., 'en', 'es')
 * @returns {Array} Filtered projects with localized fields
 */
export function filterProjectsByLanguage(projects, language) {
  console.log('=== FILTER FUNCTION DEBUG ===');
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
  
  const filtered = projects.map(project => {
    if (!project) return null;
    
    const localizedName = getLocalizedField(project, 'name', language);
    const localizedAbout = getLocalizedField(project, 'about', language);
    
    console.log(`Project ${project._id}:`);
    console.log('  - Original name:', project.name);
    console.log('  - name_en:', project.name_en);
    console.log('  - name_es:', project.name_es);
    console.log('  - Localized name:', localizedName);
    console.log('  - Original about:', project.about);
    console.log('  - about_en:', project.about_en);
    console.log('  - about_es:', project.about_es);
    console.log('  - Localized about:', localizedAbout);
    
    return {
      ...project,
      // Override the main fields with localized versions
      name: localizedName,
      about: localizedAbout
    };
  }).filter(Boolean); // Remove any null values
  
  console.log('Filtered result:', filtered);
  console.log('===============================');
  
  return filtered;
}

/**
 * Get available languages for a project
 * @param {Object} project - The project object
 * @param {string} fieldName - The field name to check
 * @returns {Array} Array of available language codes
 */
export function getAvailableLanguages(project, fieldName) {
  const languages = [];
  
  if (project[`${fieldName}_en`]) languages.push('en');
  if (project[`${fieldName}_es`]) languages.push('es');
  
  return languages;
}