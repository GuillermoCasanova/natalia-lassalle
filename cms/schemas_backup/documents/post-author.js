
import { FiUser } from 'react-icons/fi';

export default {
    name: 'post_author',
    title: 'Post Author',
    type: 'document',
    icon: FiUser,
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Name of an author that writes texts or posts.',
        validation: Rule => Rule.required()
      },
      {
        name: 'website',
        title: 'Website URL',
        type: 'url',
        description: 'URL of the author\'s website.',
        validation: Rule => Rule.uri({
          scheme: ['http', 'https']
        })
      },
    ],
    preview: {
      select: {
        title: 'name',
      }
    }
  }
