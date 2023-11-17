export default {
    name: "sctn_projects_list",
    title: "Project List Section",
    type: "document",
    fields: [
        {
            name: "title", 
            title: "Title", 
            type: "string",
            description: "This is the section that features all projects on the site by date."
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