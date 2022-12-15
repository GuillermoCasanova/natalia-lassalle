export default {
    name: "page_marquee",
    type: "object",
    title: "Marquee",
    fields: [
        {
            name: "text",
            type: "string", 
            title: "Marquee Text",
            description: "The marquee text that scrolls.",
            validation: Rule => Rule.required()
        }
    ]
}

