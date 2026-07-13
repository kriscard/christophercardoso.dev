import { describe, expect, it } from "vitest"

import { isYouTubeEmbedUrl } from "./video-embed-url"

describe("isYouTubeEmbedUrl", () => {
  it.each([
    "https://www.youtube.com/embed/zHTeCSVAFNY",
    "https://www.youtube-nocookie.com/embed/zHTeCSVAFNY?rel=0",
  ])("accepts an approved YouTube embed URL", (src) => {
    expect(isYouTubeEmbedUrl(src)).toBe(true)
  })

  it.each([
    "https://www.youtube.com/watch?v=zHTeCSVAFNY",
    "https://youtube.com/embed/zHTeCSVAFNY",
    "https://example.com/embed/zHTeCSVAFNY",
    "javascript:alert(1)",
    "not a URL",
  ])("rejects unsupported embed URLs", (src) => {
    expect(isYouTubeEmbedUrl(src)).toBe(false)
  })
})
