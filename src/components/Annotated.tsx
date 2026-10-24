import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { GLOSSARY } from '../content/data.ts'

// Wraps the first match of each GLOSSARY phrase in text with a tappable, dotted-underlined term.
export function Annotated({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  let rest = text
  let key = 0
  for (;;) {
    let best: [number, string, string] | null = null
    for (const [phrase, note] of GLOSSARY) {
      const i = rest.indexOf(phrase)
      if (i >= 0 && (!best || i < best[0])) best = [i, phrase, note]
    }
    if (!best) break
    const [i, phrase, note] = best
    if (i > 0) parts.push(rest.slice(0, i))
    parts.push(<Term key={key++} phrase={phrase} note={note} />)
    rest = rest.slice(i + phrase.length)
  }
  if (rest) parts.push(rest)
  return <>{parts}</>
}

function Term({ phrase, note }: { phrase: string; note: string }) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)
  const ref = useRef<HTMLSpanElement>(null)
  const pop = useRef<HTMLSpanElement>(null)
  const id = useId()

  // The popover is portalled to <body> with fixed positioning, so the checklist card's
  // overflow-hidden can't clip it. It sits under the term, or above it near the bottom, and stays on screen.
  useLayoutEffect(() => {
    if (!open) return
    const place = () => {
      const term = ref.current?.getBoundingClientRect()
      const box = pop.current?.getBoundingClientRect()
      if (!term || !box) return
      const gap = 8
      const below = term.bottom + gap
      const top =
        below + box.height > window.innerHeight - gap
          ? Math.max(gap, term.top - gap - box.height)
          : below
      const left = Math.min(
        Math.max(gap, term.left),
        window.innerWidth - box.width - gap,
      )
      setPos({ top, left })
    }
    place()
    window.addEventListener('scroll', place, true)
    window.addEventListener('resize', place)
    return () => {
      window.removeEventListener('scroll', place, true)
      window.removeEventListener('resize', place)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const close = (e: Event) => {
      if (e instanceof KeyboardEvent && e.key !== 'Escape') return
      if (
        e.target instanceof Node &&
        (ref.current?.contains(e.target) || pop.current?.contains(e.target))
      )
        return
      setOpen(false)
      setPos(null)
    }
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('pointerdown', close)
      document.removeEventListener('keydown', close)
    }
  }, [open])

  return (
    <span ref={ref} className="inline">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={(e) => {
          // Terms sit inside checklist labels; don't tick the box.
          e.preventDefault()
          e.stopPropagation()
          setOpen((o) => !o)
          setPos(null)
        }}
        className="cursor-help font-semibold underline decoration-plum decoration-dotted decoration-2 underline-offset-4"
      >
        {phrase}
      </button>
      {open &&
        createPortal(
          <span
            ref={pop}
            id={id}
            role="note"
            style={pos ?? { top: 0, left: 0, visibility: 'hidden' }}
            className="fixed z-50 block w-[min(280px,70vw)] rounded-2xl border-3 border-line bg-white px-3.5 pt-2 pb-2.5 text-left text-[14px] leading-snug font-medium text-ink-warm no-underline shadow-[4px_4px_0_var(--color-line)]"
          >
            <span className="block text-[12px] font-extrabold tracking-[0.05em] text-plum uppercase">
              Ano 'yon?
            </span>
            {note}
          </span>,
          document.body,
        )}
    </span>
  )
}
