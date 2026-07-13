import { cn } from "@/lib/utils"

interface CalloutProps {
  children: React.ReactNode
  type?: "tip" | "warning" | "danger" | "note"
}

const calloutStyles = {
  tip: {
    icon: "💡",
    light: "border-emerald-500 bg-emerald-50 text-emerald-900",
    dark: "dark:border-ctp-green dark:bg-ctp-green/10 dark:text-ctp-green",
  },
  warning: {
    icon: "⚠️",
    light: "border-yellow-500 bg-yellow-50 text-yellow-900",
    dark: "dark:border-ctp-yellow dark:bg-ctp-yellow/10 dark:text-ctp-yellow",
  },
  danger: {
    icon: "🚨",
    light: "border-red-500 bg-red-50 text-red-900",
    dark: "dark:border-ctp-red dark:bg-ctp-red/10 dark:text-ctp-red",
  },
  note: {
    icon: "📝",
    light: "border-blue-500 bg-blue-50 text-blue-900",
    dark: "dark:border-ctp-blue dark:bg-ctp-blue/10 dark:text-ctp-blue",
  },
}

export function Callout({ children, type = "note" }: CalloutProps) {
  const style = calloutStyles[type]

  return (
    <div
      className={cn(
        "my-6 flex max-w-3xl items-start gap-3 rounded-lg border-l-4 p-4",
        style.light,
        style.dark
      )}
    >
      <span aria-hidden="true" className="text-xl">
        {style.icon}
      </span>
      <div className="flex-1 [&>p]:m-0">{children}</div>
    </div>
  )
}
