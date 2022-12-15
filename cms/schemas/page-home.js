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
            of:[{type: 'page_hero_header'}, {type: "page_brand_statement"}, {type: "page_featured_work_list"}, {type: "page_marquee"}, {type: "sctn_expertise"}],
            validation: Rule => Rule.required()
          }
    ]
}