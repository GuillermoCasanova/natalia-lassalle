/**
 * Migration script to help convert existing server files to use the scalable locale system
 * This is a helper script to show you how to update your existing +page.server.js files
 */

// Example of how to migrate a typical +page.server.js file

const migrationExample = `
// BEFORE (Manual language fields)
import { client } from '$lib/sanity';

export async function load({ params, url }) {
    const language = url.searchParams.get('lang') || 'en';
    
    const projects_request = \`*[_type == 'project'] {
        ...,
        "name_en": name.en,
        "name_es": name.es,
        "about_en": about.en[] { ... },
        "about_es": about.es[] { ... }
    }\`;
    
    const projects = await client.fetch(projects_request);
    return { projects, currentLanguage: language };
}

// AFTER (Scalable locale system)
import { queries, getLanguageFromUrl, fetchWithLocale } from '$lib/sanity/locale-client';

export async function load({ params, url }) {
    const language = getLanguageFromUrl(url);
    const projectsQuery = queries.projects(language);
    const projects = await fetchWithLocale(projectsQuery, language);
    
    return { projects, currentLanguage: language };
}
`;

// List of files that typically need migration
const filesToMigrate = [
    'src/routes/about/+page.server.js',
    'src/routes/contact/+page.server.js',
    'src/routes/texts/+page.server.js',
    'src/routes/cv/+page.server.js',
    'src/routes/current/+page.server.js'
];

// Migration steps for each file
const migrationSteps = {
    step1: "Replace manual language field extraction with queries.projects(language)",
    step2: "Replace client.fetch() with fetchWithLocale()",
    step3: "Replace manual language detection with getLanguageFromUrl(url)",
    step4: "Remove manual 'name_en', 'name_es' field specifications",
    step5: "Test with different ?lang= parameters"
};

console.log('=== SANITY LOCALE MIGRATION GUIDE ===');
console.log('Files to migrate:', filesToMigrate);
console.log('Migration steps:', migrationSteps);
console.log('Example migration:', migrationExample);

export { migrationExample, filesToMigrate, migrationSteps };
