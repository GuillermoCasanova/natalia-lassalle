# Scalable Sanity Locale System

This system automatically handles language selection based on URL parameters without requiring you to rewrite queries.

## **How It Works** 🎯

1. **URL Detection**: Automatically detects language from `?lang=es` parameter
2. **Query Generation**: Dynamically builds GROQ queries with language selection
3. **Fallback Chain**: Falls back to English if target language doesn't exist
4. **Zero Rewriting**: No need to manually specify `name_en`, `name_es`, etc.

## **Usage Examples**

### **Basic Usage**

```javascript
// In your +page.server.js
import {
  queries,
  getLanguageFromUrl,
  fetchWithLocale,
} from "$lib/sanity/locale-client";

export async function load({ url }) {
  const language = getLanguageFromUrl(url); // Gets 'es' from ?lang=es
  const projectsQuery = queries.projects(language);
  const projects = await fetchWithLocale(projectsQuery, language);

  return { projects, currentLanguage: language };
}
```

### **Custom Queries**

```javascript
import {
  buildLocalizedQuery,
  fetchWithLocale,
} from "$lib/sanity/locale-client";

// Custom query with automatic language selection
const customQuery = buildLocalizedQuery(
  `*[_type == 'project' && featured == true]`,
  "es", // Target language
  ["en", "es", "fr"] // Available languages
);

const featuredProjects = await fetchWithLocale(customQuery, "es");
```

### **Adding New Languages**

```javascript
// Just add the new language to your available languages array
const projectsQuery = buildLocalizedQuery(
  `*[_type == 'project']`,
  "fr", // French
  ["en", "es", "fr", "de"] // Now supports 4 languages
);
```

## **Generated GROQ Queries**

### **For Spanish (`?lang=es`)**

```groq
*[_type == 'project'] {
    ...,
    "name": select(
        "es" == "es" => name.es,
        defined(name.en) => name.en,
        defined(name.fr) => name.fr
    ),
    "about": select(
        "es" == "es" => about.es[] { ... },
        defined(about.en) => about.en[] { ... },
        defined(about.fr) => about.fr[] { ... }
    )
}
```

### **For English (default)**

```groq
*[_type == 'project'] {
    ...,
    "name": select(
        "en" == "en" => name.en,
        defined(name.es) => name.es,
        defined(name.fr) => name.fr
    )
}
```

## **Benefits** ✅

- **No Manual Queries**: Never write `name_en`, `name_es` again
- **Automatic Fallback**: Falls back to English if translation missing
- **URL-Based**: Language determined by `?lang=` parameter
- **Scalable**: Add new languages without changing queries
- **Performance**: Only fetches the language you need
- **Type Safe**: Works with your existing TypeScript setup

## **URL Examples**

- `yoursite.com/work` → English (default)
- `yoursite.com/work?lang=es` → Spanish
- `yoursite.com/work?lang=fr` → French (if available)
- `yoursite.com/work?lang=invalid` → Falls back to English

## **Migration from Manual Queries**

### **Before (Manual)**

```javascript
const projects_request = `*[_type == 'project'] {
    ...,
    "name_en": name.en,
    "name_es": name.es,
    "about_en": about.en[] { ... },
    "about_es": about.es[] { ... }
}`;
```

### **After (Automatic)**

```javascript
const language = getLanguageFromUrl(url);
const projectsQuery = queries.projects(language);
const projects = await fetchWithLocale(projectsQuery, language);
```

## **Adding to New Pages**

1. **Import the locale client**:

   ```javascript
   import {
     queries,
     getLanguageFromUrl,
     fetchWithLocale,
   } from "$lib/sanity/locale-client";
   ```

2. **Get language from URL**:

   ```javascript
   const language = getLanguageFromUrl(url);
   ```

3. **Use pre-built queries or create custom ones**:

   ```javascript
   const data = await fetchWithLocale(queries.projects(language), language);
   ```

4. **Return with language info**:
   ```javascript
   return { data, currentLanguage: language };
   ```

That's it! No more manual language field specification! 🎉
