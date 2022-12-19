export default {
    name: "sctn_hero_header",
    type: "object",
    title: "Hero Header",
    fields: [
        {
            name: "headline",
            type: "string", 
            title: "Headline",
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
    ]
}

