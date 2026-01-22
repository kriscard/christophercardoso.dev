import { cn } from "@/lib/utils"

interface CalloutProps {
  children?: React.ReactNode
  type?: "tip" | "warning" | "danger" | "note"
}

const calloutStyles = {
  tip: {
    icon: "💡",
    light: "border-emerald-500 bg-emerald-50 text-emerald-900",
    dark: "dark:border-[#a6da95] dark:bg-[#a6da95]/10 dark:text-[#a6da95]",
  },
  warning: {
    icon: "⚠️",
    light: "border-yellow-500 bg-yellow-50 text-yellow-900",
    dark: "dark:border-[#eed49f] dark:bg-[#eed49f]/10 dark:text-[#eed49f]",
  },
  danger: {
    icon: "🚨",
    light: "border-red-500 bg-red-50 text-red-900",
    dark: "dark:border-[#ed8796] dark:bg-[#ed8796]/10 dark:text-[#ed8796]",
  },
  note: {
    icon: "📝",
    light: "border-blue-500 bg-blue-50 text-blue-900",
    dark: "dark:border-[#8aadf4] dark:bg-[#8aadf4]/10 dark:text-[#8aadf4]",
  },
}

export function Callout({ children, type = "note" }: CalloutProps) {
  const style = calloutStyles[type]

  return (
    <div
      className={cn(
        "my-6 flex items-start gap-3 rounded-lg border-l-4 p-4",
        style.light,
        style.dark
      )}
    >
      <span className="text-xl">{style.icon}</span>
      <div className="flex-1 [&>p]:m-0">{children}</div>
    </div>
  )
}
