import { useEffect, useRef } from 'react'
import { useStoredState } from '../lib/storage.ts'
import { Banat } from './Banat.tsx'
import { PancitCanton } from './PancitCanton.tsx'

export const CHILIMANSI_URL = `${import.meta.env.BASE_URL}chilimansi/`

// The optional "buy me a chilimansi" ask. Shows once per phone, never on first load: right after the
// visitor gets something from the site (picks a province or ticks an item), at the hotlines, or after
// 25 seconds. Closing it in any way counts as seen.
export function ChilimansiPopup({ engaged }: { engaged: boolean }) {
  const [seen, setSeen] = useStoredState('chili-seen', false)
  const ref = useRef<HTMLDialogElement>(null)
  // Saved progress from an earlier visit doesn't count; only a new action in this visit does.
  const engagedAtLoad = useRef(engaged)

  useEffect(() => {
    if (seen || !engaged || engagedAtLoad.current) return
    // A short pause so they see their result before the ask.
    const timer = window.setTimeout(() => {
      const d = ref.current
      if (d && !d.open) d.showModal()
    }, 2_000)
    return () => window.clearTimeout(timer)
  }, [seen, engaged])

  useEffect(() => {
    if (seen) return
    const open = () => {
      const d = ref.current
      if (d && !d.open) d.showModal()
    }
    const timer = window.setTimeout(open, 25_000)
    const hotlines = document.getElementById('hotlines')
    const io = new IntersectionObserver(([e]) => e.isIntersecting && open(), {
      threshold: 0.4,
    })
    if (hotlines) io.observe(hotlines)
    return () => {
      window.clearTimeout(timer)
      io.disconnect()
    }
  }, [seen])

  if (seen) return null

  return (
    <dialog
      ref={ref}
      aria-labelledby="chili-title"
      onClose={() => setSeen(true)}
      className="chili m-auto w-[min(560px,calc(100%-32px))] overflow-visible rounded-[28px] border-4 border-line bg-cream px-6 pt-7 pb-6 text-center text-ink-warm shadow-[10px_10px_0_var(--color-line)]"
    >
      <form method="dialog">
        <button
          aria-label="Close"
          className="absolute top-3 right-3 grid size-11 place-items-center rounded-full border-3 border-line bg-white text-[22px] font-extrabold text-line shadow-[3px_3px_0_var(--color-line)]"
        >
          ×
        </button>
      </form>
      <PancitCanton className="wobble mx-auto -mt-1 mb-1 block w-[200px]" />
      <p className="text-[13px] font-extrabold tracking-[0.08em] text-plum uppercase">
        Paalala lang po
      </p>
      <h2
        id="chili-title"
        className="mt-1.5 font-display text-[clamp(28px,4vw,36px)] leading-[0.95] font-extrabold tracking-[-0.03em] text-line"
      >
        This one's on me.
      </h2>
      <p className="mx-auto mt-3 max-w-[42ch]">
        El Niño Ready is a personal project, built to help fellow Filipinos get
        ready. It's free and it stays free. If it helped you, you can buy me a
        chilimansi pancit canton. Totally optional.
      </p>
      <Banat
        label="Tax season, all season"
        className="mx-auto mt-5 -rotate-2 text-left"
      >
        Kinaltasan na ako ng BIR. Hindi kita kakaltasan. Promise.
      </Banat>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a className="btn" href={CHILIMANSI_URL} onClick={() => setSeen(true)}>
          Buy me a chilimansi <span aria-hidden>→</span>
        </a>
        <form method="dialog">
          <button className="btn btn-small min-h-[52px]">Maybe later</button>
        </form>
      </div>
    </dialog>
  )
}
