
export default {
    name: "project_video_break",
    type: "object", 
    title: "Project Video break", 
    description: "A video upload (not bigger than 2mb recommended) with a <figure> description",
    fields: [
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

