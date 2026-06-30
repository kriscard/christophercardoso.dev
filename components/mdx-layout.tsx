export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-base prose-gray max-w-none dark:prose-invert md:prose-lg prose-headings:font-heading prose-headings:tracking-tight prose-p:max-w-3xl prose-p:leading-7 prose-blockquote:max-w-3xl prose-figure:max-w-3xl prose-pre:max-w-3xl prose-li:max-w-3xl prose-li:leading-7 prose-img:rounded-xl md:prose-p:leading-8 md:prose-li:leading-8 md:prose-img:rounded-2xl">
      {children}
    </div>
  )
}
