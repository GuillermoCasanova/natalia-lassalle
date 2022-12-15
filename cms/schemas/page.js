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
            of:[{type: 'project_list'},{type: "page_featured_work_list"}, {type: "sctn_jobs_list"}]
          }
    ]
}