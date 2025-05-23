
export default {
    name: "footer_link", 
    title: "Footer Link",
    type: "object", 
    fields:[
        {
            name: "headline",
            title: "Headline",
            type: "string", 
            description: "The headline for this link or email",
            validation: Rule => Rule.required()
        },
        {
            name: "url_text",
            title: "URL Text Label",
            type: "string", 
            validation: Rule => Rule.required()
        },
        {
            title: "Select the type of link", 
            description: "External links go to other websites using the format 'https://www.example.com. Internal links are restricted to other pages in the SANITY database.",
            name: "linkType", 
            type: "string", 
            options: {
                list: [
                    {title: "External", value: "external"}, 
                    {title: "Internal", value: "internal"}
                ], 
                layout: "radio"
            }
        },
        {
            title: "URL", 
            name: "href", 
            type: "url",
            hidden: ({parent}) => parent?.linkType !== "external",  // hidden if link type is not external,
            validation: (Rule) =>
                Rule.uri({
                    allowRelative: true, 
                    scheme: ["https", "http"]
                })
        },
        {
            title: "Open in new tab?",
            name: "blank",
            type: "boolean", 
            hidden: ({parent}) => parent?.linkType !== "external", //hidden if link type is not external
        },
        {
            name: "internalLink", 
            type: "reference",
            title: "Internal Link", 
            hidden: ({parent}) => parent?.linkType !== "internal", //hidden if link type is not internal
            to: [
                {type: "page"}
            ]
        }

    ]
}

