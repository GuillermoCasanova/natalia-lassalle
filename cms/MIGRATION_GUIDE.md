# Tag Localization Migration Guide

## Problem

You're getting this error when trying to localize tags:

```
Invalid property value
The property value is stored as a value type that does not match the expected type.
The value of this property must be of type localeString according to the schema.
Current value (string): "Installation | Video "
```

## Root Cause

Your existing tag data is stored as simple strings, but your schema now expects `localeString` objects.

## Solutions

### Option 1: Data Migration (Recommended)

**Method A: From root directory (easiest):**

```bash
node migrate-tags.js
```

**Method B: From CMS directory:**

```bash
cd cms
node scripts/migrate-tags-to-locale.js
```

2. **The script will:**
   - Find all existing tags with string values
   - Convert them to `localeString` format: `{ en: "Original String", es: "Original String" }`
   - Update them in Sanity

### Option 2: Manual Migration in Sanity Studio

1. Go to your Sanity Studio
2. Open each tag document
3. Change the title field from a string to an object:
   - **Before:** `"Installation | Video"`
   - **After:**
     ```json
     {
       "en": "Installation | Video",
       "es": "Instalación | Video"
     }
     ```

### Option 3: Temporary Rollback (Quick Fix)

If you need to fix the error immediately:

1. **Revert the tag schema temporarily:**

   ```javascript
   // In cms/schemas/documents/tag.js
   {
     name: 'title',
     type: "string", // Back to string temporarily
     title: "Name",
     validation: Rule => Rule.required()
   }
   ```

2. **Migrate your data** using Option 1 or 2

3. **Change back to localeString:**
   ```javascript
   {
     name: 'title',
     type: "localeString", // Back to localeString
     title: "Name",
     validation: Rule => Rule.required()
   }
   ```

## Frontend Changes Made

The frontend code has been updated to handle the new `localeString` format:

- **Added helper function:** `getLocalizedString(localeString, language)`
- **Updated components:**
  - `sctn-projects-list.svelte`
  - `featured-projects-slideshow.svelte`
  - `thumbnails-container.svelte`

## How It Works Now

```javascript
// Before (string):
project.medium.title; // "Installation | Video"

// After (localeString):
project.medium.title; // { en: "Installation | Video", es: "Instalación | Video" }

// Frontend usage:
getLocalizedString(project.medium.title, "es"); // "Instalación | Video"
```

## Testing

After migration, test that:

1. Tags display correctly in both languages
2. Language switching works for tag names
3. No console errors appear
4. All existing functionality still works

## Next Steps

1. Run the migration script
2. Test the frontend
3. Add Spanish translations for your tags in Sanity Studio
4. Remove the temporary migration field from the schema if you used Option 3
