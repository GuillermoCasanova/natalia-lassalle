export default {
    name: 'localeString',
    type: 'object',
    fieldsets: [
      {
        title: 'Translations',
        name: 'translations',
        options: { collapsible: true }
      }
    ],
    fields: [
      { name: 'en', type: 'string', title: 'English', validation: Rule => Rule.required() },
      { name: 'es', type: 'string', title: 'Spanish' },
    ]
  }