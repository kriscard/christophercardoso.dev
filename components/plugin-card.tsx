import { cn } from "@/lib/utils"

interface PluginCardProps {
  name: string
  description: string
  href: string
  className?: string
}

export function PluginCard({
  name,
  description,
  href,
  className,
}: PluginCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block overflow-hidden rounded-lg",
        "bg-gray-100 dark:bg-[#1e2030]",
        "transition-colors duration-150",
        "hover:bg-gray-200/80 dark:hover:bg-[#24273a]",
        className
      )}
    >
      <div className="border-b border-gray-200/50 px-4 py-2 dark:border-[#494d64]/50">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-gray-500 dark:text-[#6e738d]">
            {name}
          </span>
          <svg
            className="size-3.5 text-gray-400 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-[#6e738d]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </div>
      </div>
      <div className="px-4 py-3">
        <p className="text-sm leading-relaxed text-gray-700 dark:text-[#cad3f5]">
          {description}
        </p>
      </div>
    </a>
  )
}
