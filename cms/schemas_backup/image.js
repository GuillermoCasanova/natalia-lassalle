

export default {
    name: "default_image", 
    type: "image", 
    title: "Image with MetaData", 
    description: "Click the pencil icon to set hotspot and alt text. The hotspot will set which areas will never be cropped. Alt text for the image that describes it for screen readers and SEO.",
    options: {
        hotspot: true,
        crop: true
    },
    fields: [
        {
            type: 'string', 
            name: 'alt_text', 
            title: "Alt Text"
        }
    ]
}
