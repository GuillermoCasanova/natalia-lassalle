// work_credit.js

export default {
    name: 'work_credit',
    title: 'Work Credit',
    type: 'document',
    fields: [
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
        subtitle: 'name'
      }
    }
  }
