import { useRef, useState } from 'react'
import { CHECKLIST, SHARE_LINES } from '../content/data.ts'
import { cardBlob, drawCard } from '../lib/shareCard.ts'
import { Tabo } from './Tabo.tsx'

const FILE_NAME = 'el-nino-ready-score.png'

function pickLine(score: number, not?: string) {
  const band = SHARE_LINES.filter(
    ([lo, hi, , line]) => score >= lo && score <= hi && line !== not,
  )
  const [, , label, line] = band[Math.floor(Math.random() * band.length)]
  return { label, line }
}

// "Share my score": draws the preparedness card on the phone and hands it to the share sheet
// (Instagram Stories, Messenger, Viber…), or downloads it where the share sheet can't take images.
export function ShareScore({ done }: { done: Record<string, boolean> }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const tabo = useRef<HTMLDivElement>(null)
  const [url, setUrl] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [joke, setJoke] = useState({ label: '', line: '' })

  const groups = CHECKLIST.map((g) => ({
    title: g.title,
    done: g.items.filter(([id]) => done[id]).length,
    total: g.items.length,
  }))
  const total = groups.reduce((n, g) => n + g.total, 0)
  const score = Math.round(
    (groups.reduce((n, g) => n + g.done, 0) / total) * 100,
  )

  async function render(next: { label: string; line: string }) {
    const c = canvas.current
    const svg = tabo.current?.querySelector('svg')?.outerHTML
    if (!c || !svg) return
    setJoke(next)
    await drawCard(c, { score, groups, ...next, taboSvg: svg })
    const blob = await cardBlob(c)
    setFile(new File([blob], FILE_NAME, { type: 'image/png' }))
    setUrl((old) => {
      if (old) URL.revokeObjectURL(old)
      return URL.createObjectURL(blob)
    })
  }

  function open() {
    dialog.current?.showModal()
    void render(pickLine(score))
  }

  const canShareFile =
    !!file && !!navigator.canShare && navigator.canShare({ files: [file] })

  async function share() {
    if (!file) return
    try {
      await navigator.share({
        files: [file],
        text: 'Gaano ka kahanda sa El Niño? https://www.elninoready.org/',
      })
    } catch {
      // cancelled
    }
  }

  return (
    <>
      <button type="button" onClick={open} className="btn mt-5 w-full">
        Share my score <span aria-hidden>→</span>
      </button>

      <dialog
        ref={dialog}
        aria-labelledby="share-title"
        className="chili m-auto w-[min(440px,calc(100%-32px))] overflow-visible rounded-[28px] border-4 border-line bg-cream px-5 pt-6 pb-5 text-center text-ink-warm shadow-[10px_10px_0_var(--color-line)]"
      >
        <form method="dialog">
          <button
            aria-label="Close"
            className="absolute top-3 right-3 grid size-11 place-items-center rounded-full border-3 border-line bg-white text-[22px] font-extrabold text-line shadow-[3px_3px_0_var(--color-line)]"
          >
            ×
          </button>
        </form>
        <h2
          id="share-title"
          className="px-10 font-display text-[24px] leading-none font-extrabold tracking-[-0.03em] text-line"
        >
          Your El Niño card
        </h2>
        <div className="mx-auto mt-4 aspect-[9/16] w-[min(240px,60vw)] overflow-hidden rounded-2xl border-3 border-line bg-post shadow-[5px_5px_0_var(--color-line)]">
          {url && (
            <img
              src={url}
              alt={`Preparedness card: ${score}% handa sa El Niño. ${joke.label}: ${joke.line}`}
              className="size-full"
            />
          )}
        </div>
        <button
          type="button"
          onClick={() => void render(pickLine(score, joke.line))}
          className="mt-3 text-small font-semibold underline underline-offset-4"
        >
          Ibang banat, please
        </button>
        <div className="mt-4 grid gap-2">
          {canShareFile ? (
            <button type="button" onClick={share} className="btn">
              Share <span aria-hidden>→</span>
            </button>
          ) : (
            <a href={url} download={FILE_NAME} className="btn">
              Download image <span aria-hidden>↓</span>
            </a>
          )}
        </div>
        <canvas ref={canvas} hidden />
        <div ref={tabo} hidden>
          <Tabo />
        </div>
      </dialog>
    </>
  )
}
