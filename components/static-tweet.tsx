"use client"

import dynamic from "next/dynamic"

const Tweet = dynamic(
  () => import("react-tweet").then((module) => module.Tweet),
  {
    loading: () => (
      <div className="min-h-72 w-full max-w-xl rounded-xl border border-gray-200/80 bg-white/45 dark:border-ctp-surface0 dark:bg-ctp-mantle/35">
        <span className="sr-only">Loading post from X</span>
      </div>
    ),
  }
)

export function StaticTweetContent({ id }: { id: string }) {
  return (
    <div className="flex justify-center">
      <Tweet id={id} />
    </div>
  )
}
