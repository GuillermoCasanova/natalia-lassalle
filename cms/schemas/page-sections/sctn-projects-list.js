export default {
    name: "sctn_projects_list",
    title: "Project List Section",
    type: "object",
    fields: [
        {
            name: "title", 
            title: "Title", 
            type: "string"
        }
        // {
        //     name: "projects",
        //     title: "Projects",
        //     type: "array",
        //     of: [{type: 'reference', to: [{type: "project"}]}],
        //     validation: Rule => Rule.required()
        // }
    ]
}