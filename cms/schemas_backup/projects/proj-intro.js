

export default {
    name: "project_intro", 
    type: "object", 
    title: "Project Intro",
    fields: [
        {
            type: 'string', 
            title: "Headline",
            name: "headline",
            validation: Rule => Rule.required()
        },
        {
            type: 'datetime',
            title: 'Date',
            name: 'date',
            validation: Rule => Rule.required()
        }, 
        {
            type: 'array', 
            title: "Work Done",
            name: "work_done", 
            validation: Rule => Rule.required(),
            of: [{type: 'string'}]
        },
        {
            type: "array", 
            title: "Body", 
            name: "body", 
            of: [{ type: "block"}] 
        }
    ]
}