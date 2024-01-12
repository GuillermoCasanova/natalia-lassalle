
import {FiEdit3} from 'react-icons/fi';

export default {
    name: "post",
    type: "document",
    title: "Text Post",
    icon: FiEdit3, 
    fields: [
        {
            type: 'string', 
            title: "Post Title",
            name: "title",
            validation: Rule => Rule.required()
        },
        {
            name: "handle",
            title: "Post Handle",
            type: "slug",
            options: {
                source: "title",
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
            name: "featured_image",
            title: "Featured Image",
            type: "default_image",
            validation: Rule => Rule.required()
        },
        {
            type: "array", 
            title: "Post Content", 
            name: "content", 
            of: [{ type: "block"}],
            validation: Rule => Rule.required()
        },
        {
            title: "Published", 
            name: "published", 
            type: "boolean"
        }
    ]
}