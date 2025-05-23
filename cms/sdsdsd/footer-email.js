
export default {
    name: "footer_email_link", 
    title: "Footer Email Link",
    type: "object", 
    fields:[
        {
            name: "headline",
            title: "Headline",
            type: "string", 
            description: "The headline for this email",
            validation: Rule => Rule.required()
        },
        {
            name: "url",
            title: "URL",
            type: "string", 
            description: "The email to display and link out to.",
            validation: Rule => Rule.required()
        }
    ]
}

