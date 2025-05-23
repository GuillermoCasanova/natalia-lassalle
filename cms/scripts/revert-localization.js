import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '43ajij5z',
  dataset: 'production',
  apiVersion: '2022-11-14',
  token: 'ska59wMxfmwjmQIixiRrOBN2aA1A27iuOqT121Y00tyCbor8D3qLFYxPsVulVwH7xMsrWPQLAL7WLLoMB9DH8YLeWRDx3d4kp1YcklAV0k6UAGb07Co80ai85MWj0KgXph57oReEugfGtjU4zrFsbuIvYMc4EqgxdIo2BbSyYSLYgzLGaTvK',
  useCdn: false
})

async function revertLocalization() {
  try {
    // First, fetch the current live data from Sanity
    const liveProjects = await client.fetch(`
      *[_type == "project"] {
        _id,
        name,
        about,
        credits,
        "creditsList": creditsList[] {
          _type,
          _ref,
          _key
        }
      }
    `)
    console.log(`Found ${liveProjects.length} projects to revert`)

    // Process each project
    for (const project of liveProjects) {
      // Keep the original structure exactly as it was
      const updates = {
        name: project.name || '',
        about: project.about || '',
        credits: project.credits || [],
        creditsList: project.creditsList || []
      }

      // Update the project
      const result = await client
        .patch(project._id)
        .set(updates)
        .commit()

      console.log(`Reverted project: ${project.name}`)
    }

    console.log('Revert completed successfully')
  } catch (error) {
    console.error('Revert failed:', error)
  }
}

revertLocalization() 