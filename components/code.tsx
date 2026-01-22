import { cn } from "@/lib/utils"

interface CodeProps {
  children: React.ReactNode
  type?: "keys" | "path" | "cmd"
  className?: string
}

export function Code({ children, type, className }: CodeProps) {
  const text = String(children)

  if (type === "keys") {
    const keys = text.split(/\s*\+\s*/).filter(Boolean)
    return (
      <kbd
        className={cn(
          "inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-xs",
          "border-gray-300 bg-gray-100 text-gray-700",
          "dark:border-ctp-surface1 dark:bg-ctp-surface0 dark:text-ctp-text",
          className
        )}
      >
        {keys.join(" ")}
      </kbd>
    )
  }

  if (type === "path") {
    return (
      <code
        className={cn(
          "my-0 rounded bg-ctp-surface0/50 px-2 py-0.5 font-mono text-sm text-ctp-blue",
          className
        )}
      >
        {children}
      </code>
    )
  }

  if (type === "cmd") {
    return (
      <code
        className={cn(
          "my-0 rounded bg-ctp-surface0/50 px-2 py-0.5 font-mono text-sm text-ctp-pink",
          className
        )}
      >
        {children}
      </code>
    )
  }

  return (
    <code
      className={cn(
        "my-0 rounded bg-ctp-surface0/50 px-1.5 py-0.5 font-mono text-sm text-ctp-text",
        className
      )}
    >
      {children}
    </code>
  )
}
