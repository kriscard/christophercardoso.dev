import type { Route } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface MdxCardProps extends React.HTMLAttributes<HTMLDivElement> {}

interface MdxLinkCardProps extends Omit<MdxCardProps, "children"> {
  href: Route
  children: React.ReactNode
}

function MdxCardFrame({ className, children, ...props }: MdxCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg",
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="[&>p]:text-muted-foreground space-y-2 [&>h3]:mt-0! [&>h4]:mt-0!">
          {children}
        </div>
      </div>
    </div>
  )
}

export function MdxCard({ className, children, ...props }: MdxCardProps) {
  return (
    <MdxCardFrame className={className} {...props}>
      {children}
    </MdxCardFrame>
  )
}

export function MdxLinkCard({
  href,
  className,
  children,
  ...props
}: MdxLinkCardProps) {
  return (
    <Link href={href} className="block">
      <MdxCardFrame className={className} {...props}>
        {children}
      </MdxCardFrame>
    </Link>
  )
}

export function MdxDisabledCard({
  className,
  children,
  ...props
}: MdxCardProps) {
  return (
    <MdxCardFrame
      className={cn("cursor-not-allowed opacity-60 hover:shadow-md", className)}
      aria-disabled="true"
      {...props}
    >
      {children}
    </MdxCardFrame>
  )
}
