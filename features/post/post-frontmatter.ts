export interface PostFrontmatter {
  title: string
  date: string
  tag: string | string[]
  summary: string
  ogImage?: string
  series?: string
  seriesPart?: number
  draft: boolean
}

export function getPostTags(tag: PostFrontmatter["tag"]) {
  return Array.isArray(tag) ? tag : [tag]
}

function parsePostDate(date: unknown, file: string) {
  const parsedDate =
    typeof date === "string"
      ? new Date(date)
      : date instanceof Date
        ? date
        : undefined

  if (!parsedDate || Number.isNaN(parsedDate.getTime())) {
    throw new Error(`Missing or invalid date frontmatter in ${file}`)
  }

  return parsedDate.toISOString().split("T")[0]
}

function requireStringField(
  value: unknown,
  field: string,
  file: string
): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Missing or invalid ${field} frontmatter in ${file}`)
  }

  return value
}

function parsePostTag(tag: unknown, file: string): string | string[] {
  if (typeof tag === "string" && tag.trim() !== "") return tag

  if (
    Array.isArray(tag) &&
    tag.length > 0 &&
    tag.every((item) => typeof item === "string" && item.trim() !== "")
  ) {
    return tag
  }

  throw new Error(`Missing or invalid tag frontmatter in ${file}`)
}

function parseSeries(
  data: Record<string, unknown>,
  file: string
): { series?: string; seriesPart?: number } {
  const { series, seriesPart } = data

  if (series === undefined && seriesPart === undefined) return {}

  if (
    typeof series !== "string" ||
    series.trim() === "" ||
    typeof seriesPart !== "number" ||
    !Number.isInteger(seriesPart) ||
    seriesPart < 1
  ) {
    throw new Error(`Invalid series/seriesPart frontmatter in ${file}`)
  }

  return { series, seriesPart }
}

function parseDraft(draft: unknown, file: string): boolean {
  if (draft === undefined) return false

  if (typeof draft !== "boolean") {
    throw new Error(`Invalid draft frontmatter in ${file}`)
  }

  return draft
}

export function parsePostFrontmatter(
  data: Record<string, unknown>,
  file: string
): PostFrontmatter {
  return {
    title: requireStringField(data.title, "title", file),
    date: parsePostDate(data.date, file),
    tag: parsePostTag(data.tag, file),
    summary: requireStringField(data.summary, "summary", file),
    ogImage: typeof data.ogImage === "string" ? data.ogImage : undefined,
    ...parseSeries(data, file),
    draft: parseDraft(data.draft, file),
  }
}
