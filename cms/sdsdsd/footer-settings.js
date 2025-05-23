import {FiSettings} from 'react-icons/fi'; 


export default {
    name: 'footer-settings',
    title: 'Footer Settings',
    type: 'document', 
    icon: FiSettings, 
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            initialValue: "Footer Settings"
        },
        {
            name: "blocks",
            title: "Footer Blocks",
            type: "array",
            description: "Blocks in the footer (Maximum is 4)",
            of: [{type: 'footer_link'}, {type: "footer_email_link"}],
            validation: Rule => Rule.max(4)
            
        }
    ]
}