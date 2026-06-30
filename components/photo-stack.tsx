import Image from "next/image"

import { cn } from "@/lib/utils"

interface Photo {
  src: string
  alt: string
}

interface PhotoStackProps {
  photos: Photo[]
  className?: string
}

const desktopPositions = [
  "-translate-y-1 -rotate-2",
  "translate-y-3 rotate-1",
  "-translate-y-3 rotate-2",
  "translate-y-2 -rotate-1",
  "-translate-y-2 rotate-2",
]

export function PhotoStack({ photos, className }: PhotoStackProps) {
  if (photos.length === 0) return null

  const displayPhotos = photos.slice(0, 5)

  return (
    <div className={cn("relative", className)}>
      {/* Mobile/Tablet: Horizontal scroll carousel */}
      <div className="mb-8 lg:hidden">
        <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4">
          {displayPhotos.map((photo) => (
            <div
              key={photo.src}
              className={cn(
                "relative h-48 w-64 shrink-0 snap-center overflow-hidden rounded-xl",
                "border-4 border-white shadow-lg dark:border-gray-800"
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: static staggered photo strip */}
      <div className="mb-8 hidden lg:block">
        <div className="grid grid-cols-5 gap-3">
          {displayPhotos.map((photo, index) => (
            <div
              key={photo.src}
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-xl",
                "border-4 border-white dark:border-gray-800",
                "shadow-[0_16px_32px_-14px_rgba(0,0,0,0.35)]",
                "transition-[border-color,box-shadow,transform] duration-200 ease-out",
                "hover:z-10 hover:-translate-y-1 hover:rotate-0 hover:border-purple-300/70 hover:shadow-[0_18px_36px_-16px_rgba(168,85,247,0.35)]",
                "motion-reduce:transform-none motion-reduce:transition-none",
                desktopPositions[index]
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 170px, 256px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
