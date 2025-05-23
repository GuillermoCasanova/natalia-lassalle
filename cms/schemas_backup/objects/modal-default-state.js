
export default {
    name: "modal_default_state", 
    title: "Modal Default State",
    type: "object", 
    fields:[
        {
            name: "headline",
            title: "Headline",
            type: "string", 
            description: "The headline for this modal",
            validation: Rule => Rule.required()
        },
        {
            name: "body",
            title: "Body",
            type: "text", 
            description: "The body text for this modal's default state (optional).",
        }
    ]

}