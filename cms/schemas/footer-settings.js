import {FiSettings} from 'react-icons/fi'

export default {
    name: 'footer-settings',
    title: 'Footer Settings',
    type: 'document',
    icon: FiSettings,
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            name: 'links',
            title: 'Footer Links',
            type: 'array',
            of: [{type: 'footer_link'}],
        },
        {
            name: 'email',
            title: 'Footer Email',
            type: 'footer_email_link',
        },
    ],
} 