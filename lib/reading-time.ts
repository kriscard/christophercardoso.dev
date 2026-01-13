export const READING_SPEED_WPM = 200

export function calculateReadingTime(content: string): number {
  if (!content) return 1

  const wordCount = content.split(/\s+/).filter(Boolean).length
  if (wordCount === 0) return 1

  return Math.max(1, Math.ceil(wordCount / READING_SPEED_WPM))
}
