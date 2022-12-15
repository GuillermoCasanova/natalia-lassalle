export default {
    name: "job-post",
    type: "object",
    title: "Job Post",
    fields: [
        {
            type: 'string', 
            title: "Job Name",
            name: "headline",
        },
        {
            type: "richtext", 
            title: "Description", 
            name: "description"
        }
    ]
}

