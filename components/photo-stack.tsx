"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"

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
  { collapsed: { x: 0, y: 0, r: -6 }, expanded: { x: -360, y: 20, r: -6 } },
  { collapsed: { x: 6, y: 4, r: 3 }, expanded: { x: -180, y: 6, r: -2 } },
  { collapsed: { x: -8, y: 6, r: -2 }, expanded: { x: 0, y: -4, r: 0 } },
  { collapsed: { x: 10, y: -4, r: 5 }, expanded: { x: 180, y: 8, r: 2 } },
  { collapsed: { x: -6, y: 10, r: -5 }, expanded: { x: 360, y: 22, r: 6 } },
]

export function PhotoStack({ photos, className }: PhotoStackProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (photos.length === 0) return null

  const displayPhotos = photos.slice(0, 5)

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="relative flex min-h-[280px] cursor-pointer items-center justify-center">
        <div className="relative h-48 w-full md:h-56">
          {displayPhotos.map((photo, index) => {
            const pos = positions[index] || positions[0]
            const { x, y, r } = isExpanded ? pos.expanded : pos.collapsed

            return (
              <motion.div
                key={photo.src}
                className={cn(
                  "group absolute left-1/2 top-1/2 h-36 w-48 md:h-44 md:w-56",
                  "overflow-hidden rounded-xl",
                  "border-4 border-white dark:border-gray-800",
                  "cursor-pointer",
                  isExpanded
                    ? "shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)]"
                    : "shadow-[0_16px_32px_-12px_rgba(0,0,0,0.3)]"
                )}
                initial={false}
                animate={{ x, y, rotate: r }}
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 22,
                  delay: isExpanded ? index * 0.05 : (4 - index) * 0.04,
                }}
                style={{
                  translateX: "-50%",
                  translateY: "-50%",
                  zIndex: isExpanded ? 10 : 5 - index,
                }}
              >
                <div className="relative size-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 224px"
                  />

                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent",
                      "opacity-0 transition-opacity duration-300 ease-out",
                      isExpanded && "group-hover:opacity-100"
                    )}
                  />
                  <p
                    className={cn(
                      "absolute inset-x-3 bottom-3 text-sm font-medium text-white",
                      "translate-y-2 opacity-0 transition-all duration-300 ease-out",
                      isExpanded && "group-hover:translate-y-0 group-hover:opacity-100"
                    )}
                  >
                    {photo.alt}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <p
          className={cn(
            "absolute bottom-0 left-1/2 -translate-x-1/2 text-sm",
            "text-gray-500 transition-opacity duration-200 dark:text-gray-400",
            isExpanded && "opacity-0"
          )}
        >
          Hover to expand
        </p>
      </div>
    </div>
  )
}
