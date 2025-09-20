export default {
  name: 'localeRichText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: [
    { name: 'en', type: 'richtext', title: 'English' },
    { name: 'es', type: 'richtext', title: 'Spanish' },
  ]
}