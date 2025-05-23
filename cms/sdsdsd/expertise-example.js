

export default {
    name: "expertise_example", 
    type: "object", 
    title: "Expertise Example", 
    fields: [
        {
            type: 'text', 
            name: 'headline', 
            title: "Expertise Name",
            rows: 1,
            validation: Rule => Rule.required()
        },
        {
            type: "array", 
            name: "description",
            title: "Expertise Description",
            of: [{type: "block"}],
            validation: Rule => Rule.required()
        },
        {
            type: "array", 
            name: "list",
            title: "Expertise List",
            of: [{type: "text", rows: 1}]
        }
    ]
}

