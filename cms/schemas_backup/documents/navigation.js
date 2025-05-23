
import {FiNavigation} from 'react-icons/fi'; 

export default {
    name: 'navigation', 
    title: "Navigation", 
    type: 'document', 
    icon: FiNavigation,
    fields: [
        {
            name: 'title', 
            type: "string", 
            title: "Navigation Name"
        }, 
        {
            name: "navId", 
            type: "slug", 
            title: "Navigation Id",
            options: {
                source: "title",
                maxLength: 100
            }
        },
        {
            name: "items", 
            type: "array", 
            title: "Navigation Items", 
            of: [{type: "navigationItem"}]
        }
    ]
}