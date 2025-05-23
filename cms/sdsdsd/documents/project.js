export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'object',
            fields: [
                {
                    name: 'en',
                    title: 'English',
                    type: 'string'
                },
                {
                    name: 'es',
                    title: 'Spanish',
                    type: 'string'
                }
            ],
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                {
                    name: 'en',
                    title: 'English',
                    type: 'text'
                },
                {
                    name: 'es',
                    title: 'Spanish',
                    type: 'text'
                }
            ],
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title.en',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'work_type'}}]
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'object',
            fields: [
                {
                    name: 'en',
                    title: 'English',
                    type: 'array',
                    of: [
                        {type: 'block'},
                        {type: 'image'},
                        {type: 'video'},
                        {type: 'iframe'}
                    ]
                },
                {
                    name: 'es',
                    title: 'Spanish',
                    type: 'array',
                    of: [
                        {type: 'block'},
                        {type: 'image'},
                        {type: 'video'},
                        {type: 'iframe'}
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title.en',
            author: 'author.name',
            media: 'mainImage'
        }
    }
} 