import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {languageFilter} from '@sanity/language-filter'
import {schema} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Natalia Lassalle',
  projectId: '43ajij5z',
  dataset: 'production',
  plugins: [
    deskTool(),
    visionTool(),
    languageFilter({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'es', title: 'Spanish'}
      ],
      defaultLanguages: ['en'],
      documentTypes: ['project', 'page'],
    }),
  ],
  schema,
}) 