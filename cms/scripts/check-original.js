import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '43ajij5z',
  dataset: 'production',
  apiVersion: '2022-11-14',
  token: 'ska59wMxfmwjmQIixiRrOBN2aA1A27iuOqT121Y00tyCbor8D3qLFYxPsVulVwH7xMsrWPQLAL7WLLoMB9DH8YLeWRDx3d4kp1YcklAV0k6UAGb07Co80ai85MWj0KgXph57oReEugfGtjU4zrFsbuIvYMc4EqgxdIo2BbSyYSLYgzLGaTvK',
  useCdn: false
})

async function checkOriginal() {
  try {
    // Fetch all projects with their original creditsList
    const projects = await client.fetch(`
      *[_type == "project"] {
        _id,
        name,
        creditsList
      }
    `)
    
    console.log('Original projects data:')
    projects.forEach(project => {
      console.log(`\nProject: ${project.name}`)
      console.log('creditsList:', JSON.stringify(project.creditsList, null, 2))
    })
  } catch (error) {
    console.error('Error:', error)
  }
}

checkOriginal() 