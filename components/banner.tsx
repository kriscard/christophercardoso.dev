import Image from "next/image"

import { cn } from "@/lib/utils"

interface BannerProps {
  src: string
  alt: string
  aspectRatio?: "auto" | "16:9" | "21:9" | "4:3"
}

const aspectRatioClass = {
  "16:9": "aspect-video",
  "21:9": "aspect-[21/9]",
  "4:3": "aspect-[4/3]",
}

export function Banner({ src, alt, aspectRatio = "auto" }: BannerProps) {
  const isAuto = aspectRatio === "auto"

  return (
    <figure className="my-8">
      <div
        className={cn(
          "overflow-hidden rounded-2xl",
          "shadow-lg shadow-black/20"
        )}
      >
        {isAuto ? (
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 800px"
            className="!m-0 block h-auto w-full rounded-xl"
            style={{ height: "auto" }}
            priority
          />
        ) : (
          <div
            className={cn(
              "relative overflow-hidden rounded-xl",
              aspectRatioClass[aspectRatio]
            )}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </figure>
  )
}
