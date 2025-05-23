

export default {
    name: "project_copy", 
    type: "object", 
    title: "Project Copy",
    description: "A section of copy for this case study. The headline is optional",
    fields: [
        {
            type: 'string', 
            title: "Headline  (Optional)",
            name: "headline",
        },
        {
            type: "array", 
            title: "Body", 
            name: "body", 
            of: [{ type: "block"}],
            validation: Rule => Rule.required()
        }
    ]
}