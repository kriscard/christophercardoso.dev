import { cn } from "@/lib/utils"

import { isYouTubeEmbedUrl } from "./video-embed-url"

interface VideoEmbedProps {
  src: string
  title?: string
  className?: string
}

export function VideoEmbed({
  src,
  title = "Embedded video",
  className,
}: VideoEmbedProps) {
  if (!isYouTubeEmbedUrl(src)) {
    return (
      <p
        className={cn(
          "my-8 text-sm text-gray-500 dark:text-gray-400",
          className
        )}
      >
        Video unavailable.
      </p>
    )
  }

  return (
    <div className={cn("my-8 max-w-3xl overflow-hidden rounded-xl", className)}>
      <div className="relative aspect-video">
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 size-full"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}
