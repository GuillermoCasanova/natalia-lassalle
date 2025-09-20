//File name: navItem.js
//File location: schemas/objects

export default {
    name: "navigationItem", 
    title: "Navigation Item", 
    type: "object", 
    fields: [
        {
            name: "text", 
            type: "localeString", 
            title: "Link Text",
            validation: Rule => Rule.required()
        }, 
        {
            name: "navigationItemUrl", 
            type: "link", 
            title: "Navigationitem URL"
        }
    ]
}