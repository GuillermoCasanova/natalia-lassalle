export default {
    name: "page_brand_statement", 
    type: "object", 
    title: "Brand Statement",
    description: "Section composed of a stylized headline, a video, and button to open the site contact form.",
    fields: [
        {
            type: "array", 
            title: "Headline", 
            name: "headline", 
            of: [{ type: "block"}],
            validation: Rule => Rule.required()
        },
        {
            type: "string",
            name: "button_cta",
            title: "Button CTA",
            description: "The text that goes in the CTA button",
            initialValue: "Get In Touch",
            validation: Rule => Rule.required()
        },
        {
            type: "file",
            name: "video_file", 
            title: "Video File",
            description: "MP4 or .MOV file under 2mb",
            validation: Rule => Rule.required()
        },
        {
            type: "image",
            name: "video_poster", 
            title: "An image to serve as placeholder for the video before it lazy loads or user clicks  play. Usually the first frame in the video.",
            validation: Rule => Rule.required()
        },
        {
            type: "boolean",
            name: "autoplay", 
            title: "Autoplay (Default: False)",
            description: "Set wether this video should autoplay on loop or should the user have to click  play.",
            initialVaue: false 
        },
        {
            type: "string", 
            name: "figure",
            title: "Figure",
            validation: Rule => Rule.required()
        }
    ]
}