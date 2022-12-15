
import {FaPaperclip, FaRegEnvelope, FaExternalLinkAlt} from 'react-icons/fa';
import InternalLinkRenderer from '../renderers/InternalLinkRenderer'; 
import ExternalLinkRender from '../renderers/ExternalLinkRenderer'; 

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
                        blockEditor: {
                            icon: FaPaperclip,
                            render: InternalLinkRenderer
                        }, 
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
                        blockEditor: {
                            icon: FaExternalLinkAlt,
                            render: ExternalLinkRender
                        }, 
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
                        blockEditor: {
                            icon: FaRegEnvelope,
                            render: InternalLinkRenderer
                        }, 
                        fields: [
                            {
                                title: "email", 
                                name: "mailto", 
                                type: "string",
                                validation: (Rule) =>
                                    Rule.regex(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).warning("Please enter a valid email address.")
                            }
                        ]
                    },
                ]
            }
        }
    ]
}