export default {
    name: "sctn_rich_text", 
    type: "document", 
    title: "Rich Text Section",
    description: "Section composed of a richtext.",
    fields: [
        {
            type: "array", 
            title: "Text", 
            name: "text", 
            of: [{ type: "block"}],
            validation: Rule => Rule.required()
        },

    ]
}