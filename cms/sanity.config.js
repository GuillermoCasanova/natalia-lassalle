import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemaTypes from './schemas'
import {languageFilter} from '@sanity/language-filter'


const hiddenDocTypes = [
  'sctn_hero_header',
  'sctn_experience_list',
  'sctn_projects_list',
  'sctn_rich_text',
  'sctn_texts_list',
  'iframe'
]

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
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems().filter(
              (listItem) => !hiddenDocTypes.includes(listItem.getId())
            ),
          ]),
    }),
    visionTool()
  ],
  schema: {
    types: schemaTypes
  }
}) 