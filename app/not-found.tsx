import Link from "next/link"

export default function NotFound() {
  return (
    <div className="py-10 md:py-16">
      <div className="rounded-lg border border-dashed border-gray-300/80 bg-white/45 p-8 text-center dark:border-gray-700 dark:bg-gray-800/25">
        <h1 className="font-heading text-3xl text-gray-900 dark:text-gray-50 md:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-[48ch] text-base leading-relaxed text-gray-600 dark:text-gray-300">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark mt-5 inline-flex min-h-touch items-center rounded-lg border border-purple-500/50 px-4 py-2 text-sm text-purple-700 transition-colors hover:bg-purple-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 dark:text-purple-300 dark:hover:bg-purple-500/10"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
