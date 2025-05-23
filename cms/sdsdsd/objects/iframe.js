export default {
    name: 'iframe',
    type: 'document',
    title: 'Iframe',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'html',
        type: 'text',
        title: 'HTML',
      },
    ],
    preview: {
        select: {
          title: 'title',
        },
      },
    }