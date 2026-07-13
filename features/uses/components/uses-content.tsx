import Image from "next/image"
import Link from "next/link"

import {
  hardware,
  hasPhoto,
  keyboards,
  software,
  type KeyboardWithPhoto,
  type SoftwareItem,
} from "@/features/uses/uses-data"
import { Banner } from "@/components/banner"
import { ArrowIcon } from "@/components/icons"
import { PageHeader } from "@/components/page-header"

function SectionHeader({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-6 max-w-2xl">
      <h2 className="font-heading text-2xl tracking-tight text-gray-900 dark:text-ctp-text md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
        {children}
      </p>
    </div>
  )
}

function SoftwareRow({ name, description, href }: SoftwareItem) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name}: ${description.replace(/\.$/, "")}. Opens in a new tab`}
      className="group block cursor-pointer rounded-lg py-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark sm:grid sm:grid-cols-[12rem_1fr] sm:gap-8"
    >
      <h3 className="font-heading text-lg leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-purple-600 dark:text-ctp-text dark:group-hover:text-purple-300">
        <span className="inline-flex items-center gap-2">
          {name}
          <ArrowIcon className="size-4 text-gray-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-300" />
        </span>
      </h3>
      <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:mt-0">
        {description}
      </p>
    </Link>
  )
}

function KeyboardCard({ name, description, href, photo }: KeyboardWithPhoto) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name}: ${description.replace(/\.$/, "")}. Opens on Instagram in a new tab`}
      className="group block cursor-pointer rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark"
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-xl">
        <Image
          src={photo}
          alt={`${name} keyboard`}
          fill
          sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-3 font-heading text-lg leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-purple-600 dark:text-ctp-text dark:group-hover:text-purple-300">
        <span className="inline-flex items-center gap-2">
          {name}
          <ArrowIcon className="size-4 text-gray-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-300" />
        </span>
      </h3>
      <p className="mt-1 font-mono text-xs leading-relaxed text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </Link>
  )
}

export function UsesContent() {
  const photoKeyboards = keyboards.filter(hasPhoto)
  const otherKeyboards = keyboards.filter((keyboard) => !keyboard.photo)

  return (
    <div className="py-8 md:py-12">
      <PageHeader title="What I use" className="mb-10 md:mb-12">
        A practical look at the desk, terminal, editor, and keyboard setup I use
        to build software every day. Inspired by{" "}
        <Link
          href="https://uses.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-purple-600 transition-colors hover:text-purple-400 dark:text-purple-400 dark:hover:text-purple-300"
        >
          uses.tech
          <span className="sr-only"> (opens in a new tab)</span>
        </Link>
        .
      </PageHeader>

      <div className="space-y-10 md:space-y-12">
        <Banner
          src="/images/uses/desk-setup.jpg"
          alt="Christopher Cardoso desk setup with monitors, laptop, and keyboard"
          aspectRatio="16:9"
          preload
        />

        <section>
          <SectionHeader title="Hardware">
            The core machine and desk gear I rely on for daily development.
          </SectionHeader>
          <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {hardware.map((item) => (
              <div key={item.name}>
                <h3 className="font-heading text-lg leading-snug tracking-tight text-gray-900 dark:text-ctp-text">
                  {item.name}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Software">
            My working environment is terminal-first, version controlled, and
            easy to rebuild from dotfiles.
          </SectionHeader>
          <div>
            {software.map((item) => (
              <SoftwareRow key={item.name} {...item} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Keyboards">
            Boards from the collection, each linking to its build on{" "}
            <Link
              href="https://www.instagram.com/kriscardtypes/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-purple-600 transition-colors hover:text-purple-400 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Instagram
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
            .
          </SectionHeader>
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
            {photoKeyboards.map((keyboard) => (
              <KeyboardCard key={keyboard.name} {...keyboard} />
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">
              Also in the collection
            </h3>
            <div className="mt-1">
              {otherKeyboards.map((keyboard) => (
                <SoftwareRow key={keyboard.name} {...keyboard} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
