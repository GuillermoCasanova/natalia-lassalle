export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            localize: true,
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            localize: true,
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo_head'
        },
        {
            name: 'sections',
            title: 'Page Sections',
            type: 'array',
            of: [
                {type: 'sctn_hero_header'},
                {type: 'sctn_experience_list'},
                {type: 'sctn_projects_list'},
                {type: 'sctn_rich_text'},
                {type: 'sctn_texts_list'}
            ]
        }
    ]
} 