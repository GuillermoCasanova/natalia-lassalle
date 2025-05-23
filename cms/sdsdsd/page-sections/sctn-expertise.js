export default {
    name: "sctn_expertise", 
    title: "Expertise Section", 
    description: "A section containing various lists of expertise examples.",
    type: "object",
    fields: [
        {
            type: "text", 
            name: "subline", 
            title: "Subline", 
            rows: 1,
            validation: Rule => Rule.required()
        },
        {
            type: "array",
            name: "headline", 
            title: "Headline", 
            of: [{ type: "block" }],
            validation: Rule => Rule.required()
        },
        {
            name: "expertise", 
            title: "Expertise List",
            type: "array",
            of: [{type: "expertise_example"}],
            validation: Rule => Rule.required()
        }
    ]

}
