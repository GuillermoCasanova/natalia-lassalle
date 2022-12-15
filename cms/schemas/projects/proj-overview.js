
export default {
    name: "project_overview",
    type: "object",
    title: "Project Overview",
    fields: [
        {
            type: "array",
            name: "brand_stats",
            title: "Brand Stats",
            of: [{type: "string"}],
            validation: Rule => Rule.required()
        },
        {
            type: "array", 
            title: "Overview", 
            name: "overview", 
            of: [{ type: "block"}],
            validation: Rule => Rule.required()
        }
    ]
}