export default {
    name: "page_team", 
    title: "Team Section", 
    description: "A list of team members.",
    type: "object",
    fields: [
        {
            type: "array", 
            title: "Headline", 
            name: "headline", 
            of: [{ type: "block" }],
            validation: Rule => Rule.required()
        },
        {
            name: "team_members", 
            title: "Team Members",
            type: "array",
            of: [{type: 'reference', to: [{type: "team_member"}]}],
            validation: Rule => Rule.required()
        }
    ]

}