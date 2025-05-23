import {FiSettings} from 'react-icons/fi'; 

export default {
    name: 'site-settings',
    title: 'Site Settings',
    type: 'document', 
    icon: FiSettings, 
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            default: "Site Settings"
        },
        {
            title: 'URL',
            name: 'url',
            type: 'url',
            description: 'The main site url. Used to create canonical url',
            validation: Rule => Rule.required()
        },  
        {
            name: "seo",
            title: "Site SEO",
            type: "seo_head",
            validation: Rule => Rule.required()
        },
        {
            name: "analytics",
            title:  "Site Analytics",
            type: "string", 
            description: "Any site analytics scripts used. Placed right before the </head> tag"
        },
        {
            title: 'Main navigation',
            name: 'main_nav',
            description: 'Select menu for main navigation',
            type: 'reference',
            to: {type: 'navigation'},
            validation: Rule => Rule.required()
          }
    ]
}