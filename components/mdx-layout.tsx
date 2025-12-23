export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      {children}
    </div>
  )
}
