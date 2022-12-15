
import {BsWindow} from 'react-icons/bs';

export default {
    name: 'modal', 
    title: "Modal", 
    type: 'document',
    icon: BsWindow, 
    fields: [
        {
            name: 'title', 
            type: "string", 
            title: "Modal Name"
        },
        {
            name: "handle", 
            type: "slug", 
            title: 'Modal Handle',
            description: "The handle used to identify this modal in the code.",
            validation: Rule => Rule.required(),
            options: {
              source: "title",
              maxLength: 100
            }
          },
        {
            name: 'default_state', 
            title: "Default State",
            type: "modal_default_state"
        },
        {
            name: 'success_state', 
            title: "Success State",
            type: "modal_success_state"
        }
    ]
}