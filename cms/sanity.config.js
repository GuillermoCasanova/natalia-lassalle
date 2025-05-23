import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Natalia Lassalle',
  projectId: '43ajij5z',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: schema
}) 