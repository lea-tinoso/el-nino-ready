// A tilted sticker for the satirical one-liner each section gets.
export function Banat({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={`banat w-fit max-w-[34ch] rounded-2xl border-3 border-line bg-white px-4 pt-2 pb-3 text-[16px] leading-snug font-semibold text-line shadow-[4px_4px_0_var(--color-line)] ${className}`}
    >
      <span className="block text-[13px] font-extrabold tracking-[0.05em] text-plum uppercase">
        Banat
      </span>
      {children}
    </p>
  )
}
