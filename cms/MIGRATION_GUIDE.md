# LocaleRichText Migration Guide

This guide explains how to migrate from field-level localization to Sanity's recommended localized arrays for portable text.

## Overview

We've refactored the `localeRichText` schema to follow Sanity's best practices:

- **Before**: Field-level localization with separate `en`/`es` properties
- **After**: Localized arrays with language and content properties

## Changes Made

### 1. Schema Changes

- **`localeRichText.js`**: Now uses an array structure instead of object with language fields
- **Frontend queries**: Updated to handle the new array structure
- **Migration scripts**: Created to help migrate existing content

### 2. New Structure

```javascript
// Old structure (field-level)
{
  "about": {
    "en": [/* portable text blocks */],
    "es": [/* portable text blocks */]
  }
}

// New structure (localized arrays)
{
  "about": [
    {
      "language": "en",
      "content": [/* portable text blocks */]
    },
    {
      "language": "es",
      "content": [/* portable text blocks */]
    }
  ]
}
```

## Migration Process

### Step 1: Test the New Schema

Before migrating content, test that the new schema works:

```bash
cd cms
node scripts/test-new-schema.js
```

This will:

- Verify the new schema structure
- Test language-specific queries
- Create and delete a test document
- Confirm everything works correctly

### Step 2: Backup Your Data

⚠️ **IMPORTANT**: Always backup your Sanity dataset before running migrations:

```bash
# Export your dataset
sanity dataset export production backup-$(date +%Y%m%d).tar.gz
```

### Step 3: Run the Migration

Migrate existing content from the old structure to the new structure:

```bash
cd cms
node scripts/migrate-locale-rich-text.js migrate
```

This will:

- Find all documents with old localeRichText structure
- Convert them to the new localized array format
- Apply the changes to your dataset
- Provide a summary of successful/failed migrations

### Step 4: Verify Migration

After migration, verify everything works:

```bash
cd cms
node scripts/test-new-schema.js
```

Check that:

- Documents have the new array structure
- Language-specific queries work correctly
- Content displays properly in your frontend

### Step 5: Test Frontend

Test your frontend to ensure it displays content correctly:

```bash
# Start your development server
npm run dev

# Test different language URLs
# http://localhost:5173/work?lang=en
# http://localhost:5173/work?lang=es
```

## Rollback (If Needed)

If you need to rollback the migration:

```bash
cd cms
node scripts/migrate-locale-rich-text.js rollback
```

⚠️ **Warning**: This will convert back to the old structure and may cause issues with the new schema.

## Frontend Changes

The frontend queries have been updated to handle the new structure automatically. The `locale-client.js` file now:

- Queries the new array structure
- Handles language fallbacks correctly
- Maintains the same API for components

No changes are needed in your Svelte components - they'll continue to work as before.

## Troubleshooting

### Migration Fails

If migration fails:

1. Check your Sanity token has write permissions
2. Verify your project ID and dataset are correct
3. Check the console for specific error messages
4. Consider running migration on a smaller subset first

### Frontend Issues

If frontend doesn't display content:

1. Check browser console for query errors
2. Verify the new queries are working in Sanity Vision
3. Test with a simple query first
4. Ensure your language detection is working

### Schema Validation Errors

If you get schema validation errors:

1. Restart your Sanity Studio
2. Clear browser cache
3. Check that all schema files are properly imported
4. Verify the new schema structure matches the migration

## Benefits

After migration, you'll have:

- ✅ **Better Performance**: More efficient queries
- ✅ **Scalability**: Easy to add new languages
- ✅ **Best Practices**: Following Sanity's recommendations
- ✅ **Consistency**: All localized content uses the same pattern
- ✅ **Maintainability**: Cleaner, more organized code

## Support

If you encounter issues:

1. Check the Sanity documentation on localization
2. Review the migration script logs
3. Test with a small dataset first
4. Consider reaching out to the Sanity community

---

**Remember**: Always test in a development environment before running migrations in production!
