

export default {
    name: "image_with_figure", 
    type: "object", 
    title: "Image with Figure & Metadata", 
    options: {
        hotspot: true
    },
    fields: [
        {
            type: 'default_image', 
            name: 'image', 
            title: "Image"
        },
        {
            type: "string", 
            name: "figure",
            title: "Figure"
        }
    ]
}

