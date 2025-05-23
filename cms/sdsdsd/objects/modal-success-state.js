
export default {
    name: "modal_success_state", 
    title: "Modal Success State",
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
            description: "The body text for this modal's success state (optional).",
        }
    ]

}