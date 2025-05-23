import {FiFileText} from 'react-icons/fi';

export default {
    name: "page",
    title: "Sub Page",
    type: "document",
    icon: FiFileText,
    fields: [
        {
            name: "page_title",
            title: "Page Title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "handle",
            title: "Page Handle",
            type: "slug",
            options: {
                source: "page_title",
                maxLength: 100
            },
            validation: Rule => Rule.required()
        },
        {
            name: "seo",
            title: "Page SEO",
            type: "seo_head"
        },
        {
            name: "page_layout", 
            type: "array", 
            title: "Page Layout", 
            of:[  {
                type: 'reference',
                to: [
                  {type: 'sctn_hero_header'},
                  {type: 'sctn_projects_list'},
                  {type: 'sctn_experience_list'},
                  {type: 'sctn_rich_text'},
                  {type: 'sctn_texts_list'}
                ]
            }],
          }
    ]
}