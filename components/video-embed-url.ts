const videoEmbedOrigins = new Set([
  "https://www.youtube.com",
  "https://www.youtube-nocookie.com",
])

export function isYouTubeEmbedUrl(src: string) {
  try {
    const url = new URL(src)
    return (
      videoEmbedOrigins.has(url.origin) &&
      url.pathname.startsWith("/embed/") &&
      url.pathname.length > "/embed/".length
    )
  } catch {
    return false
  }
}
