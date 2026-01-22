import Image from "next/image"

import { cn } from "@/lib/utils"

interface MdxImageProps {
  src: string
  alt: string
  caption?: string
  size?: "sm" | "md" | "lg" | "full"
  priority?: boolean
}

const sizeConfig = {
  sm: { width: 400, class: "max-w-[400px]" },
  md: { width: 600, class: "max-w-[600px]" },
  lg: { width: 800, class: "max-w-[800px]" },
  full: { width: 1200, class: "max-w-full" },
}

export function MdxImage({
  src,
  alt,
  caption,
  size = "full",
  priority = false,
}: MdxImageProps) {
  const config = sizeConfig[size]

  return (
    <figure className={cn("my-8", config.class)}>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          width={config.width}
          height={config.width}
          sizes={`(max-width: 768px) 100vw, ${config.width}px`}
          className="!m-0 block h-auto w-full"
          style={{ height: "auto" }}
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption
          className={cn(
            "mt-3 text-center text-sm",
            "text-gray-500 dark:text-[#a5adcb]"
          )}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
