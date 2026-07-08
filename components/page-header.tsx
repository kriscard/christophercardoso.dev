import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  children: React.ReactNode
  className?: string
  titleClassName?: string
}

export function PageHeader({
  title,
  children,
  className,
  titleClassName,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-gray-200/80 pb-10 pt-4 dark:border-ctp-surface0/80 md:pb-12 md:pt-8",
        className
      )}
    >
      <h1
        className={cn(
          "font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-gray-950 dark:text-ctp-text md:text-7xl",
          titleClassName
        )}
      >
        {title}
      </h1>
      <p className="mt-6 w-full text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </p>
    </header>
  )
}
