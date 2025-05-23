import {FaPaperclip, FaRegEnvelope, FaExternalLinkAlt,  FaStickyNote, FaCode} from 'react-icons/fa';
import InternalLinkRenderer from '../renderers/InternalLinkRenderer.jsx'; 
import ExternalLinkRender from '../renderers/ExternalLinkRenderer.jsx'; 


export default {
    name: "richtext", 
    title: "Rich Text", 
    type: 'array', 
    of: [
        {
            type: "block", 
            marks: {
                annotations: [
                    {
                        name: "internalLink", 
                        type: "object", 
                        title: "Internal Link", 
                        icon: FaPaperclip,
                        component: InternalLinkRenderer,
                        fields: [
                            {
                                name: 'page', 
                                type: 'reference', 
                                to: [
                                    {type: "page"},
                                    {type: "project"}
                                ]
                            }
                        ]
                    },
                    {
                        name: "externalLink", 
                        type: "object", 
                        title: "External Link", 
                        icon: FaExternalLinkAlt,
                        component: ExternalLinkRender,
                        fields: [
                            {
                                title: "URL", 
                                name: "href", 
                                type: "url",
                                validation: (Rule) =>
                                    Rule.uri({
                                        allowRelative: false, 
                                        scheme: ["https", "http"]
                                    })
                            },
                            {
                                title: "Open in new tab?",
                                name: "blank",
                                type: "boolean"
                            }
                        ]
                    },
                    {
                        name: "mailtoLink", 
                        type: "object", 
                        title: "Mailto: Link", 
                        icon: FaRegEnvelope,
                        component: InternalLinkRenderer,
                        fields: [
                            {
                                title: "email", 
                                name: "mailto", 
                                type: "string",
                                validation: (Rule) =>
                                    Rule.regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).warning("Please enter a valid email address.")
                            }
                        ]
                    }
                ]
            }
        }
    ]
}