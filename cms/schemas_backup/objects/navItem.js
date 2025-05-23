//File name: navItem.js
//File location: schemas/objects

export default {
    name: "navigationItem", 
    title: "Navigation Item", 
    type: "object", 
    fields: [
        {
            name: "text", 
            type: "string", 
            title: "Link Text"
        }, 
        {
            name: "navigationItemUrl", 
            type: "link", 
            title: "Navigationitem URL"
        }
    ]
}