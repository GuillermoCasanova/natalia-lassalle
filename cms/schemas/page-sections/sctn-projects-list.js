export default {
    name: "sctn_projects_list",
    title: "Project List Section",
    type: "document",
    fields: [
        {
            name: "title", 
            title: "Title", 
            type: "localeString",
            description: "This is the section that features all projects on the site by date.",
            validation: Rule => Rule.required()
        }
    ],
    preview: {
        select: {
            title: "title.en"
        }
    }
}