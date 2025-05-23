export default {
    name: "link", 
    type: "object", 
    title: "Link", 
    fields: [
        {
            title: "Select the type of link", 
            description: "External links go to other websites using the format 'https://www.example.com. Internal links are restricted to other pages in the SANITY database.",
            name: "linkType", 
            type: "string", 
            options: {
                list: [
                    {title: "External", value: "external"}, 
                    {title: "Internal", value: "internal"},
                    {title: "Anchor Link", value: "anchor"},
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
        },
        {
            name: "anchorLink", 
            type: "string",
            title: "Anchor Link", 
            hidden: ({parent}) => parent?.linkType !== "anchor" //hidden if link type is not anchodr link
        }
    ]
}