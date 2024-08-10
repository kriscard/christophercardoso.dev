import "server-only"

import { Client, isFullPage } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const databaseId: string = process.env.NOTION_DATABASE_API

export const fetchProjects = async () => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Progress",
        status: {
          equals: "Complete",
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "ascending",
        },
      ],
    })

    return response.results.filter(isFullPage)
  } catch (error) {
    console.error("Error fetching projects:", error)
    throw error
  }
}
