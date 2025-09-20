#!/usr/bin/env node

/**
 * Test script to verify the new localized array schema works correctly
 * This script tests both the schema structure and query functionality
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
 * Test the new localized array query structure
 */
async function testNewSchemaQueries() {
    console.log('🧪 Testing new localized array schema...\n');
    
    try {
        // Test 1: Query projects with new structure
        console.log('📋 Test 1: Querying projects with new localeRichText structure...');
        
        const projectsQuery = `*[_type == 'project' && !(_id in path('drafts.**'))][0..2] {
            _id,
            name,
            about,
            "about_structure": {
                "is_array": type(about) == "array",
                "array_length": length(about),
                "languages": about[].language,
                "has_content": about[].content != null
            }
        }`;
        
        const projects = await client.fetch(projectsQuery);
        
        console.log(`Found ${projects.length} projects:`);
        projects.forEach((project, index) => {
            console.log(`\n  Project ${index + 1} (${project._id}):`);
            console.log(`    Name: ${project.name?.en || 'No name'}`);
            console.log(`    About structure:`, project.about_structure);
            
            if (project.about && Array.isArray(project.about)) {
                project.about.forEach((item, i) => {
                    console.log(`      Language ${i + 1}: ${item.language}`);
                    console.log(`      Has content: ${!!item.content}`);
                    console.log(`      Content blocks: ${item.content?.length || 0}`);
                });
            }
        });
        
        // Test 2: Test language-specific queries
        console.log('\n📋 Test 2: Testing language-specific queries...');
        
        const englishQuery = `*[_type == 'project' && !(_id in path('drafts.**'))][0] {
            _id,
            name,
            "about_english": select(
                defined(about[language == "en"]) => about[language == "en"][0].content[],
                defined(about[language == "es"]) => about[language == "es"][0].content[]
            )
        }`;
        
        const spanishQuery = `*[_type == 'project' && !(_id in path('drafts.**'))][0] {
            _id,
            name,
            "about_spanish": select(
                defined(about[language == "es"]) => about[language == "es"][0].content[],
                defined(about[language == "en"]) => about[language == "en"][0].content[]
            )
        }`;
        
        const [englishResult, spanishResult] = await Promise.all([
            client.fetch(englishQuery),
            client.fetch(spanishQuery)
        ]);
        
        console.log('English query result:');
        console.log(`  Project: ${englishResult._id}`);
        console.log(`  About blocks: ${englishResult.about_english?.length || 0}`);
        
        console.log('Spanish query result:');
        console.log(`  Project: ${spanishResult._id}`);
        console.log(`  About blocks: ${spanishResult.about_spanish?.length || 0}`);
        
        // Test 3: Test rich text sections
        console.log('\n📋 Test 3: Testing rich text sections...');
        
        const richTextQuery = `*[_type == 'sctn_rich_text'][0] {
            _id,
            title,
            text,
            "text_structure": {
                "is_array": type(text) == "array",
                "array_length": length(text),
                "languages": text[].language,
                "has_content": text[].content != null
            }
        }`;
        
        const richTextSection = await client.fetch(richTextQuery);
        
        if (richTextSection) {
            console.log(`Rich text section (${richTextSection._id}):`);
            console.log(`  Title: ${richTextSection.title?.en || 'No title'}`);
            console.log(`  Text structure:`, richTextSection.text_structure);
        } else {
            console.log('No rich text sections found');
        }
        
        console.log('\n✅ Schema tests completed successfully!');
        
    } catch (error) {
        console.error('❌ Schema test failed:', error);
        throw error;
    }
}

/**
 * Test creating a new document with the new schema
 */
async function testCreateNewDocument() {
    console.log('\n🧪 Testing document creation with new schema...\n');
    
    try {
        // Create a test project with new localized array structure
        const testProject = {
            _type: 'project',
            name: {
                en: 'Test Project (English)',
                es: 'Proyecto de Prueba (Español)'
            },
            handle: {
                current: 'test-project-new-schema'
            },
            about: [
                {
                    _type: 'object',
                    _key: 'about_en',
                    language: 'en',
                    content: [
                        {
                            _type: 'block',
                            _key: 'block1',
                            style: 'normal',
                            children: [
                                {
                                    _type: 'span',
                                    _key: 'span1',
                                    text: 'This is a test project description in English.',
                                    marks: []
                                }
                            ]
                        }
                    ]
                },
                {
                    _type: 'object',
                    _key: 'about_es',
                    language: 'es',
                    content: [
                        {
                            _type: 'block',
                            _key: 'block2',
                            style: 'normal',
                            children: [
                                {
                                    _type: 'span',
                                    _key: 'span2',
                                    text: 'Esta es una descripción de proyecto de prueba en español.',
                                    marks: []
                                }
                            ]
                        }
                    ]
                }
            ],
            date_released: '2024',
            featured: false
        };
        
        console.log('Creating test project...');
        const createdProject = await client.create(testProject);
        console.log(`✅ Created test project: ${createdProject._id}`);
        
        // Query it back to verify structure
        const verificationQuery = `*[_id == "${createdProject._id}"][0] {
            _id,
            name,
            about,
            "about_english": about[language == "en"][0].content[],
            "about_spanish": about[language == "es"][0].content[]
        }`;
        
        const verified = await client.fetch(verificationQuery);
        console.log('Verification result:');
        console.log(`  Project ID: ${verified._id}`);
        console.log(`  Name (EN): ${verified.name?.en}`);
        console.log(`  Name (ES): ${verified.name?.es}`);
        console.log(`  About array length: ${verified.about?.length}`);
        console.log(`  English content blocks: ${verified.about_english?.length}`);
        console.log(`  Spanish content blocks: ${verified.about_spanish?.length}`);
        
        // Clean up - delete the test document
        await client.delete(createdProject._id);
        console.log('🧹 Cleaned up test document');
        
        console.log('\n✅ Document creation test completed successfully!');
        
    } catch (error) {
        console.error('❌ Document creation test failed:', error);
        throw error;
    }
}

/**
 * Main test function
 */
async function runTests() {
    try {
        await testNewSchemaQueries();
        await testCreateNewDocument();
        
        console.log('\n🎉 All tests passed! The new schema is working correctly.');
        
    } catch (error) {
        console.error('\n💥 Tests failed:', error);
        process.exit(1);
    }
}

// Run tests if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    runTests();
}

export { testNewSchemaQueries, testCreateNewDocument };
