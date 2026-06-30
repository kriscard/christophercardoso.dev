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

const positions = [
  {
    collapsed: "translate-x-[calc(-50%+0px)] translate-y-[calc(-50%+0px)] -rotate-6 z-[5]",
    expanded: "group-hover/stack:translate-x-[calc(-50%-360px)] group-hover/stack:translate-y-[calc(-50%+20px)] group-hover/stack:-rotate-6 group-hover/stack:z-[5] group-focus-within/stack:translate-x-[calc(-50%-360px)] group-focus-within/stack:translate-y-[calc(-50%+20px)] group-focus-within/stack:-rotate-6 group-focus-within/stack:z-[5]",
  },
  {
    collapsed: "translate-x-[calc(-50%+6px)] translate-y-[calc(-50%+4px)] rotate-3 z-[4]",
    expanded: "group-hover/stack:translate-x-[calc(-50%-180px)] group-hover/stack:translate-y-[calc(-50%+6px)] group-hover/stack:-rotate-2 group-hover/stack:z-[4] group-focus-within/stack:translate-x-[calc(-50%-180px)] group-focus-within/stack:translate-y-[calc(-50%+6px)] group-focus-within/stack:-rotate-2 group-focus-within/stack:z-[4]",
  },
  {
    collapsed: "translate-x-[calc(-50%-8px)] translate-y-[calc(-50%+6px)] -rotate-2 z-[3]",
    expanded: "group-hover/stack:translate-x-[calc(-50%+0px)] group-hover/stack:translate-y-[calc(-50%-4px)] group-hover/stack:rotate-0 group-hover/stack:z-[3] group-focus-within/stack:translate-x-[calc(-50%+0px)] group-focus-within/stack:translate-y-[calc(-50%-4px)] group-focus-within/stack:rotate-0 group-focus-within/stack:z-[3]",
  },
  {
    collapsed: "translate-x-[calc(-50%+10px)] translate-y-[calc(-50%-4px)] rotate-[5deg] z-[2]",
    expanded: "group-hover/stack:translate-x-[calc(-50%+180px)] group-hover/stack:translate-y-[calc(-50%+8px)] group-hover/stack:rotate-2 group-hover/stack:z-[2] group-focus-within/stack:translate-x-[calc(-50%+180px)] group-focus-within/stack:translate-y-[calc(-50%+8px)] group-focus-within/stack:rotate-2 group-focus-within/stack:z-[2]",
  },
  {
    collapsed: "translate-x-[calc(-50%-6px)] translate-y-[calc(-50%+10px)] -rotate-[5deg] z-[1]",
    expanded: "group-hover/stack:translate-x-[calc(-50%+360px)] group-hover/stack:translate-y-[calc(-50%+22px)] group-hover/stack:rotate-6 group-hover/stack:z-[1] group-focus-within/stack:translate-x-[calc(-50%+360px)] group-focus-within/stack:translate-y-[calc(-50%+22px)] group-focus-within/stack:rotate-6 group-focus-within/stack:z-[1]",
  },
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute inset-x-3 bottom-3 text-sm font-medium text-white">
                {photo.alt}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          Swipe to browse
        </p>
      </div>

      {/* Desktop: CSS-only hover/focus stack */}
      <div className="group/stack hidden lg:block">
        <div className="relative flex min-h-[280px] items-center justify-center">
          <div className="relative h-56 w-full">
            {displayPhotos.map((photo, index) => {
              const position = positions[index] || positions[0]

              return (
                <div
                  key={photo.src}
                  tabIndex={0}
                  aria-label={`Show ${photo.alt} keyboard photo`}
                  className={cn(
                    "group/card focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark absolute left-1/2 top-1/2 h-44 w-56 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2",
                    "overflow-hidden rounded-xl",
                    "border-4 border-white dark:border-gray-800",
                    "shadow-[0_16px_32px_-12px_rgba(0,0,0,0.3)]",
                    "transition-[transform,box-shadow] duration-500 ease-out motion-reduce:transition-none",
                    "group-focus-within/stack:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)] group-hover/stack:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)]",
                    position.collapsed,
                    position.expanded
                  )}
                >
                  <div className="relative size-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="224px"
                    />
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent",
                        "opacity-0 transition-opacity duration-300 ease-out group-hover/card:opacity-100 group-focus/card:opacity-100 motion-reduce:transition-none"
                      )}
                    />
                    <p
                      className={cn(
                        "absolute inset-x-3 bottom-3 text-sm font-medium text-white",
                        "translate-y-2 opacity-0 transition-all duration-300 ease-out motion-reduce:transition-none",
                        "group-hover/card:translate-y-0 group-hover/card:opacity-100 group-focus/card:translate-y-0 group-focus/card:opacity-100"
                      )}
                    >
                      {photo.alt}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <p
            className={cn(
              "absolute bottom-0 left-1/2 -translate-x-1/2 text-sm",
              "text-gray-500 transition-opacity duration-200 motion-reduce:transition-none dark:text-gray-400",
              "group-focus-within/stack:opacity-0 group-hover/stack:opacity-0"
            )}
          >
            Hover or focus to expand
          </p>
        </div>
      </div>
    </div>
  )
}
