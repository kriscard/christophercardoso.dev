import { describe, expect, it } from "vitest"

import { parsePostFrontmatter } from "./post-frontmatter"

const validFrontmatter = {
  title: "Example article",
  date: "2026-01-02",
  tag: "Frontend",
  summary: "An example summary",
}

describe("parsePostFrontmatter", () => {
  it("parses a minimal valid record and defaults draft to false", () => {
    expect(parsePostFrontmatter(validFrontmatter, "example.mdx")).toEqual({
      ...validFrontmatter,
      draft: false,
      ogImage: undefined,
    })
  })

  it.each([
    ["2026-01-02", "2026-01-02"],
    [new Date("2026-01-02T12:00:00Z"), "2026-01-02"],
  ])("normalizes the date %#", (date, expected) => {
    expect(
      parsePostFrontmatter({ ...validFrontmatter, date }, "example.mdx").date
    ).toBe(expected)
  })

  it("accepts tag arrays and paired series metadata", () => {
    expect(
      parsePostFrontmatter(
        {
          ...validFrontmatter,
          tag: ["Frontend", "React"],
          series: "Next.js",
          seriesPart: 2,
          draft: true,
          ogImage: "/images/example.png",
        },
        "example.mdx"
      )
    ).toMatchObject({
      tag: ["Frontend", "React"],
      series: "Next.js",
      seriesPart: 2,
      draft: true,
      ogImage: "/images/example.png",
    })
  })

  it.each([
    ["title", { title: "" }],
    ["summary", { summary: undefined }],
    ["date", { date: "not-a-date" }],
    ["tag", { tag: [] }],
    ["tag", { tag: ["Frontend", ""] }],
  ])("rejects invalid %s frontmatter", (field, override) => {
    expect(() =>
      parsePostFrontmatter({ ...validFrontmatter, ...override }, "broken.mdx")
    ).toThrow(new RegExp(`${field} frontmatter in broken\\.mdx`, "i"))
  })

  it.each([
    { series: "Next.js" },
    { seriesPart: 1 },
    { series: "Next.js", seriesPart: 0 },
    { series: "Next.js", seriesPart: 1.5 },
    { series: "", seriesPart: 1 },
  ])("rejects invalid series metadata %#", (seriesMetadata) => {
    expect(() =>
      parsePostFrontmatter(
        { ...validFrontmatter, ...seriesMetadata },
        "broken.mdx"
      )
    ).toThrow("Invalid series/seriesPart frontmatter in broken.mdx")
  })

  it("rejects non-boolean draft values", () => {
    expect(() =>
      parsePostFrontmatter({ ...validFrontmatter, draft: "true" }, "broken.mdx")
    ).toThrow("Invalid draft frontmatter in broken.mdx")
  })

  it("ignores a non-string Open Graph image", () => {
    expect(
      parsePostFrontmatter({ ...validFrontmatter, ogImage: 42 }, "example.mdx")
        .ogImage
    ).toBeUndefined()
  })
})
