/**
 * Average reading speed in words per minute
 * Based on standard adult reading comprehension speed
 */
export const READING_SPEED_WPM = 200

/**
 * Calculate estimated reading time for content
 * @param content - The text content to analyze
 * @returns Reading time in minutes (minimum 1 minute)
 */
export function calculateReadingTime(content: string): number {
  if (!content || typeof content !== "string") {
    return 1
  }

  const wordCount = content
    .split(/\s+/)
    .filter(Boolean)
    .length

  if (wordCount === 0) {
    return 1
  }

  return Math.max(1, Math.ceil(wordCount / READING_SPEED_WPM))
}
