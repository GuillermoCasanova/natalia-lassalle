// work_credit.js

export default {
    name: 'work_credit',
    title: 'Work Credit',
    type: 'document',
    fields: [
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Cast', value: 'cast' },
            { title: 'Crew', value: 'crew' },
          ],
          layout: 'radio',
        },
        initialValue: 'crew',
        validation: Rule => Rule.required(),
      },
      {
        name: 'workDone',
        title: 'Work Done',
        type: 'reference',
        to: {
          type: 'work_type'
        },
        description: 'Description of the work done',
        validation: Rule => Rule.required()
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Name of the person(s) that did the work.',
        validation: Rule => Rule.required()
      }
    ],
    preview: {
      select: {
        title: 'workDone.name',
        subtitle: 'name',
        category: 'category',
      },
      prepare({ title, subtitle, category }) {
        const categoryLabel = category === 'cast' ? 'Cast' : 'Crew';
        return {
          title,
          subtitle: `${categoryLabel} · ${subtitle}`,
        };
      },
    }
  }
