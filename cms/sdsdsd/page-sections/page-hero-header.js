export default {
    name: "page_hero_header",
    type: "object",
    title: "Hero Header",
    fields: [
        {
            name: "subline",
            type: "string", 
            title: "Subline",
            description: "The line of text that appears under the logo.",
            validation: Rule => Rule.required()
        }
    ]
}

