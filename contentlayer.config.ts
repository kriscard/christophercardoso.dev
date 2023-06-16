import { defineDocumentType, makeSource } from '@contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tag: { type: 'string', required: true },
    summary: { type: "string", required: true }
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/content/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'content', documentTypes: [Post] })
