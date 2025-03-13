export default {
    name: "sctn_rich_text", 
    type: "document", 
    title: "Rich Text Section",
    description: "Section composed of a richtext.",
    fields: [
        {
            type: "string", 
            title: "Title", 
            name: "title", 
            validation: Rule => Rule.required()
        },
        {
            type: "richtext", 
            title: "Rich Text", 
            name: "about", 
            validation: Rule => Rule.required()
          },
    ],
    preview: {
        select: {
            title: "title"
        }
    }
}
