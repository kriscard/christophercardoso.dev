import { cn } from "@/lib/utils"

import { Card } from "./card"

interface TeaserCardProps {
  children: React.ReactNode
  className?: string
}

interface TeaserTitleProps extends TeaserCardProps {
  as?: "h2" | "h3"
}

interface TeaserMetaProps extends TeaserCardProps {
  as?: "p" | "time"
  dateTime?: string
}

export function TeaserCard({ children, className }: TeaserCardProps) {
  return <Card className={cn("h-full", className)}>{children}</Card>
}

export function TeaserCardBody({ children, className }: TeaserCardProps) {
  return (
    <div className={cn("flex h-full flex-col gap-4 p-5 sm:p-6", className)}>
      {children}
    </div>
  )
}

export function TeaserCardTitle({
  as: Component = "h3",
  children,
  className,
}: TeaserTitleProps) {
  return (
    <Component
      className={cn(
        "text-wrap font-heading leading-tight text-gray-900 dark:text-gray-50",
        className
      )}
    >
      {children}
    </Component>
  )
}

export function TeaserCardDescription({
  children,
  className,
}: TeaserCardProps) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed text-gray-600 dark:text-gray-300",
        className
      )}
    >
      {children}
    </p>
  )
}

export function TeaserCardAction({ children, className }: TeaserCardProps) {
  return (
    <div className={cn("mt-auto flex items-center gap-1", className)}>
      {children}
    </div>
  )
}

export function TeaserCardMeta({
  as: Component = "p",
  children,
  className,
  dateTime,
}: TeaserMetaProps) {
  return (
    <Component
      dateTime={Component === "time" ? dateTime : undefined}
      className={cn("text-sm text-gray-500 dark:text-gray-500", className)}
    >
      {children}
    </Component>
  )
}
