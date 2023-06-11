export interface Project {
  id: string
  properties: {
    Name: {
      title: [
        {
          plain_text: string
        }
      ]
    }
    Description: {
      rich_text: [
        {
          text: {
            content: string
          }
        }
      ]
    }
    link: {
      rich_text: [
        {
          href: string
        }
      ]
    }
  }
}
