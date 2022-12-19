export default {
    name: "page-home",
    title: "Home Page",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title", 
            type: "string",
            initialValue: "Home Page"
        },
        {
            name: "page_layout", 
            type: "array", 
            title: "Page Layout", 
            of:[{type: 'sctn_hero_header'},{type: "sctn_projects_list"} ],
            validation: Rule => Rule.required()
          }
    ]
}