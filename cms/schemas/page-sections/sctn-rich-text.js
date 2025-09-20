export default {
    name: "sctn_rich_text", 
    type: "document", 
    title: "Rich Text Section",
    description: "Section composed of a richtext.",
    fields: [
        {
            type: "localeString", 
            title: "Title", 
            name: "title", 
            validation: Rule => Rule.required()
        },
        {
            type: "localeRichText", 
            title: "Rich Text", 
            name: "text", 
            validation: Rule => Rule.required()
          },
    ],
    preview: {
        select: {
            title: "title.en"
        },
        prepare(selection) {
            const { title } = selection
            return {
                title: title || 'Rich Text Section'
            }
        }
    }
}
