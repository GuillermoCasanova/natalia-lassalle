import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '43ajij5z',
  dataset: 'production',
  apiVersion: '2022-11-14',
  token: 'ska59wMxfmwjmQIixiRrOBN2aA1A27iuOqT121Y00tyCbor8D3qLFYxPsVulVwH7xMsrWPQLAL7WLLoMB9DH8YLeWRDx3d4kp1YcklAV0k6UAGb07Co80ai85MWj0KgXph57oReEugfGtjU4zrFsbuIvYMc4EqgxdIo2BbSyYSLYgzLGaTvK',
  useCdn: false
})

async function checkProject() {
  try {
    const project = await client.fetch('*[_type == "project"][0]')
    console.log('Project creditsList:', JSON.stringify(project.creditsList, null, 2))
  } catch (error) {
    console.error('Error:', error)
  }
}

checkProject() 