import { cn } from "@/lib/utils"

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
  return (
    <div className={cn("my-8 overflow-hidden rounded-xl", className)}>
      <div className="relative aspect-video">
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}
