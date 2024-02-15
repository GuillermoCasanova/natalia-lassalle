export default {
    name: "sctn_hero_header",
    type: "document",
    title: "Hero Header",
    fields: [
        {
            name: "headline",
            type: "string", 
            title: "Headline",
            validation: Rule => Rule.required()
        },
        {
            name: "video", 
            type: "array", 
            title: "Video", 
            of:[{type: 'video'} ],
            validation: Rule => Rule.required()
        },
        {
            type: "boolean",
            name: "video_autoplay", 
            title: "Autoplay (Default: False)",
            description: "Set wether these videos should autoplay on loop or should the user have to click  play.",
            initialVaue: false 
        },
        {
            type: "boolean",
            name: "video_show_controls", 
            title: "Show Controls (Default: False)",
            description: "Set wether  videos should show controls",
            initialVaue: false 
        },
        {
            name: "featured_project",
            title: "Featured Project",
            type: "reference",
            to: [{type: "project"}],
            validation: Rule => Rule.required()
        }
    ]
}

