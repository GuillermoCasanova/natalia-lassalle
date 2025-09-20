import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemaTypes from './schemas'
import {languageFilter} from '@sanity/language-filter'
import deskStructure from './desk-structure.js'

export default defineConfig({
  name: 'default',
  title: 'Natalia Lassalle',
  projectId: '43ajij5z',
  dataset: 'production',
  plugins: [
    languageFilter({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'es', title: 'Spanish'}
      ],
      defaultLanguages: ['en'],
      documentTypes: ['project', 'page'],
    }),
    deskTool({
      structure: deskStructure
    }),
    visionTool()
  ],
  schema: {
    types: schemaTypes
  }
}) 