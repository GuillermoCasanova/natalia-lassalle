

export default {
    name: "project_header", 
    type: "object", 
    title: "Project Header",
    fields: [
        {
            name: "background",
            type: "default_image", 
            title: "Background Image",
            validation: Rule => Rule.required()
        }
    ]
}