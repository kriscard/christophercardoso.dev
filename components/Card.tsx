import clsx from 'clsx'
import { type ReactNode } from 'react'

interface CardProps {
  className?: string
  children?: ReactNode
}
export function Card({ className, children }: CardProps) {
  return (
    <div
      className={clsx('rounded-lg border border-white bg-transparent p-5 px-10 py-4', className)}
    >
      {children}
    </div>
  )
}
