import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'links',
      title: 'Footer Links',
      type: 'array',
      of: [{type: 'footerLink'}],
    }),
    defineField({
      name: 'email',
      title: 'Footer Email',
      type: 'footerEmail',
    }),
  ],
}) 