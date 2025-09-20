#!/usr/bin/env node

/**
 * Migration script to convert field-level localized rich text to localized arrays
 * This script migrates existing content from the old structure to the new Sanity-recommended structure
 * 
 * Usage: node migrate-locale-rich-text.js
 */

import { createClient } from '@sanity/client';
import { config } from 'dotenv';

// Load environment variables
config();

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID || '43ajij5z',
    dataset: process.env.SANITY_DATASET || 'production',
    apiVersion: '2022-11-14',
    token: process.env.SANITY_TOKEN,
    useCdn: false,
});

/**
 * Migrate a single document's localeRichText fields
 * @param {Object} doc - The document to migrate
 * @returns {Object} - The migrated document
 */
function migrateDocument(doc) {
    const patches = [];
    
    // Check if document has localeRichText fields that need migration
    const fieldsToMigrate = ['about', 'text'];
    
    fieldsToMigrate.forEach(fieldName => {
        const fieldValue = doc[fieldName];
        
        // Skip if field doesn't exist or is already in new format
        if (!fieldValue) return;
        
        // Check if it's in old format (object with en/es properties)
        if (fieldValue.en || fieldValue.es) {
            console.log(`Migrating ${fieldName} for document ${doc._id}`);
            
            const newArray = [];
            
            // Convert English content
            if (fieldValue.en) {
                newArray.push({
                    _type: 'object',
                    _key: `${fieldName}_en`,
                    language: 'en',
                    content: fieldValue.en
                });
            }
            
            // Convert Spanish content
            if (fieldValue.es) {
                newArray.push({
                    _type: 'object',
                    _key: `${fieldName}_es`,
                    language: 'es',
                    content: fieldValue.es
                });
            }
            
            patches.push({
                id: doc._id,
                patch: {
                    set: {
                        [fieldName]: newArray
                    }
                }
            });
        }
    });
    
    return patches;
}

/**
 * Main migration function
 */
async function migrateLocaleRichText() {
    try {
        console.log('🚀 Starting localeRichText migration...');
        
        // Get all documents that might have localeRichText fields
        const documents = await client.fetch(`
            *[_type in ["project", "sctn_rich_text"] && (defined(about) || defined(text))]
        `);
        
        console.log(`Found ${documents.length} documents to potentially migrate`);
        
        const allPatches = [];
        
        // Process each document
        for (const doc of documents) {
            const patches = migrateDocument(doc);
            allPatches.push(...patches);
        }
        
        if (allPatches.length === 0) {
            console.log('✅ No documents need migration');
            return;
        }
        
        console.log(`📝 Found ${allPatches.length} fields to migrate`);
        
        // Apply patches
        let successCount = 0;
        let errorCount = 0;
        
        for (const patch of allPatches) {
            try {
                await client.patch(patch.id, patch.patch).commit();
                console.log(`✅ Migrated ${patch.id}`);
                successCount++;
            } catch (error) {
                console.error(`❌ Failed to migrate ${patch.id}:`, error.message);
                errorCount++;
            }
        }
        
        console.log('\n📊 Migration Summary:');
        console.log(`✅ Successful: ${successCount}`);
        console.log(`❌ Failed: ${errorCount}`);
        console.log(`📝 Total: ${allPatches.length}`);
        
        if (errorCount === 0) {
            console.log('\n🎉 Migration completed successfully!');
        } else {
            console.log('\n⚠️  Migration completed with some errors. Please review the failed items.');
        }
        
    } catch (error) {
        console.error('💥 Migration failed:', error);
        process.exit(1);
    }
}

/**
 * Rollback function to revert migration (use with caution)
 */
async function rollbackMigration() {
    try {
        console.log('⚠️  Starting rollback...');
        
        // Get documents with new array format
        const documents = await client.fetch(`
            *[_type in ["project", "sctn_rich_text"] && 
              (about[0].language != null || text[0].language != null)]
        `);
        
        console.log(`Found ${documents.length} documents to rollback`);
        
        for (const doc of documents) {
            const patches = [];
            
            // Convert array format back to object format
            if (doc.about && Array.isArray(doc.about)) {
                const oldFormat = {};
                doc.about.forEach(item => {
                    if (item.language && item.content) {
                        oldFormat[item.language] = item.content;
                    }
                });
                
                patches.push({
                    id: doc._id,
                    patch: { set: { about: oldFormat } }
                });
            }
            
            if (doc.text && Array.isArray(doc.text)) {
                const oldFormat = {};
                doc.text.forEach(item => {
                    if (item.language && item.content) {
                        oldFormat[item.language] = item.content;
                    }
                });
                
                patches.push({
                    id: doc._id,
                    patch: { set: { text: oldFormat } }
                });
            }
            
            // Apply rollback patches
            for (const patch of patches) {
                try {
                    await client.patch(patch.id, patch.patch).commit();
                    console.log(`✅ Rolled back ${patch.id}`);
                } catch (error) {
                    console.error(`❌ Failed to rollback ${patch.id}:`, error.message);
                }
            }
        }
        
        console.log('🔄 Rollback completed');
        
    } catch (error) {
        console.error('💥 Rollback failed:', error);
        process.exit(1);
    }
}

// Command line interface
const command = process.argv[2];

if (command === 'rollback') {
    rollbackMigration();
} else if (command === 'migrate' || !command) {
    migrateLocaleRichText();
} else {
    console.log('Usage:');
    console.log('  node migrate-locale-rich-text.js migrate  # Run migration');
    console.log('  node migrate-locale-rich-text.js rollback # Rollback migration');
    process.exit(1);
}
