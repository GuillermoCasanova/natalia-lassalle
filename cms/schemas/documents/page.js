export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
            name: 'page_title',
            title: 'Page Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'handle',
            title: 'Page Handle',
            type: 'slug',
            options: {
                source: 'page_title',
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
            name: 'page_layout',
            title: 'Page Layout',
            type: 'array',
            of: [
                {type: 'reference', to: [
                    {type: 'sctn_hero_header'},
                    {type: 'sctn_experience_list'},
                    {type: 'sctn_projects_list'},
                    {type: 'sctn_rich_text'},
                    {type: 'sctn_texts_list'}
                ]}
            ]
        }
    ]
} 