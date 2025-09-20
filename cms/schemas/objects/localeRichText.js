export default {
  name: 'localeRichText',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'language',
          type: 'string',
          title: 'Language',
          options: {
            list: [
              { title: 'English', value: 'en' },
              { title: 'Spanish', value: 'es' }
            ]
          },
          validation: Rule => Rule.required()
        },
        {
          name: 'content',
          type: 'richtext',
          title: 'Content',
          validation: Rule => Rule.required()
        }
      ],
      preview: {
        select: {
          language: 'language',
          content: 'content.0.children.0.text'
        },
        prepare(selection) {
          const { language, content } = selection
          return {
            title: language === 'en' ? 'English' : 'Spanish',
            subtitle: content ? `${content.substring(0, 50)}...` : 'No content'
          }
        }
      }
    }
  ],
  validation: Rule => Rule.required().min(1).error('At least one language version is required')
}