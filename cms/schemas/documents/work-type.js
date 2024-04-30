export default {
    name: 'work_type',
    title: 'Work Type',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Name of the work type',
        validation: Rule => Rule.required()
      }
    ]
  }