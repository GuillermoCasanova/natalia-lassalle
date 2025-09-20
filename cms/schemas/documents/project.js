import {FiBriefcase} from 'react-icons/fi'

export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: FiBriefcase,
    fields: [
        {
            name: "name", 
            type: "localeString", 
            validation: Rule => Rule.required()
        },
        {
            name: "handle", 
            type: "slug", 
            title: 'Project Handle',
            options: {
                source: "name.en",
                maxLength: 100
            }
        },
        {
            name: "seo",
            type: "seo_head",
            title: "Page SEO"
        },
        {
            name: "thumbnail",
            type: "default_image", 
            title: "Thumbnail",
            description: "An image used for the project thumbnail. Image is cropped to be 1x1 in most devices.",
            validation: Rule => Rule.required()
        },
        {
            name: 'featured',
            title: 'Featured Project',
            type: 'boolean',
            description: 'Mark as featured project, this will place it at the top of the list it is in. Only one can be featured at a time.'
        },
        {
            type: "localeRichText", 
            title: "About The Work", 
            name: "about",
            validation: Rule => Rule.required()
        },
        {
            type: "date", 
            title: "Date Released", 
            name: "date_released", 
            options: {
                dateFormat: "YYYY"
            },
            validation: Rule => Rule.required()
        },
        // {
        //     type: "object", 
        //     title: "Credits", 
        //     name: "credits",
        //     fields: [
        //         {
        //             name: "en",
        //             type: "richtext",
        //             title: "English"
        //         },
        //         {
        //             name: "es",
        //             type: "richtext",
        //             title: "Spanish"
        //         }
        //     ]
        // },
        {
            name: 'creditsList',
            title: 'Credits',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'work_credit' }]
                }
            ],
            description: 'A list of credit mentions',
            validation: Rule => Rule.required()
        },
        {
            name: "preview_videos", 
            type: "array", 
            title: "Preview Videos", 
            of: [{type: "iframe"}]
        },
        {
            name: "medium", 
            type: "reference", 
            title: "Medium", 
            to: [{type: 'tag'}],
            validation: Rule => Rule.required()
        },
        {
            name: "project_media", 
            type: "array", 
            title: "Media Images", 
            of: [{type: 'default_image'}, {type: 'image_with_figure'}],
            validation: Rule => Rule.required()
        }
    ],
    preview: {
        select: {
            title: 'name.en',
            media: 'thumbnail'
        }
    }
} 