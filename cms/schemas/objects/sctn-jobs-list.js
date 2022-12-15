export default {
    name: "sctn_jobs_list",
    type: "object",
    title: "Jobs List",
    fields: [
            {   
                name: "job_posts",
                title: "Job posts", 
                type: "array", 
                of: [{type: "job-post"}]
            }
    ]
}

