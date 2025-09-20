// schema.js

export default {
    name: 'sctn_experience_list',
    title: 'Experience List Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'localeString',
        validation: Rule => Rule.required(),
      },
      {
        name: 'elements',
        title: 'Experience',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'year',
                title: 'Year',
                type: 'number',
              },
              {
                name: 'name',
                title: 'Name',
                type: 'string',
                validation: Rule => Rule.required(),
              },
              {
                type: "link", 
                title: "Link (Optional)",
                name: "link"
              }
 
            ],
            preview: {
              select: {
                title: 'name',
                subtitle: 'year',
              },
            },
          },
        ],
      },
    ],
    preview: {
        select: {
            title: "title.en"
        }
    }
  };
  

  