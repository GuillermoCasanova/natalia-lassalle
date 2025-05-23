

export default {
    name: "project_images", 
    type: "object", 
    title: "Project Images",
    fields: [
        {
            name: "images",
            type: "array", 
            title: "Images",
            of: [{type: 'image_with_figure'}],
            validation: Rule => Rule.required()
        }
    ]
}