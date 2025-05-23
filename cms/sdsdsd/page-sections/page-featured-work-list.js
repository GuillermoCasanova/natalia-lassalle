export default {
    name: "page_featured_work_list", 
    title: "Featured Work List", 
    description: "A list of featured projects/work.",
    type: "object",
    fields: [
        {
            name: "projects", 
            title: "Projects List",
            type: "array",
            of: [{type: 'reference', to: [{type: "project"}]}],
            validation: Rule => Rule.required()
        }
    ]

}