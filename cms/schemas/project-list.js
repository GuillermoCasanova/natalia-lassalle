export default {
    name: "project_list",
    title: "Project List",
    type: "object",
    fields: [
        {
            name: "projects",
            title: "Projects",
            type: "array",
            of: [{type: 'reference', to: [{type: "project"}]}],
            validation: Rule => Rule.required()
        }
    ]
}