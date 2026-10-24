import { useState } from 'react'
import { ADVISORY } from '../content/data.ts'
import { Banat } from './Banat.tsx'
import { Signature } from './Signature.tsx'

const SOURCES: [string, string][] = [
  [ADVISORY.name, ADVISORY.url],
  ['Simplified advisory', ADVISORY.simpleUrl],
  ['All PAGASA El Niño advisories', ADVISORY.listUrl],
  [
    'GMA News: very strong El Niño likely',
    'https://www.gmanetwork.com/news/weather/content/996484/very-strong-el-ni-o-likely-from-october-2026-to-january-2027-pagasa/story/',
  ],
]

export function Footer() {
  const [msg, setMsg] = useState('')

  async function share() {
    const data = {
      title: 'El Niño Ready',
      text: 'Tayo-tayo na lang: El Niño prep for every Filipino.',
      url: location.href.split('#')[0],
    }
    try {
      if (navigator.share) {
        await navigator.share(data)
        return
      }
      await navigator.clipboard.writeText(`${data.text} ${data.url}`)
      setMsg('Link copied. Paste it in your family group chat.')
    } catch {
      // cancelled
    }
  }

  return (
    <footer className="bg-paper">
      <div aria-hidden className="checker h-8 border-b-3 border-line" />
      <div className="mx-auto max-w-[1240px] px-4 pt-16 pb-10 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-display text-[clamp(48px,7vw,96px)] leading-[0.9] font-extrabold tracking-[-0.05em]">
              El Niño Ready
            </p>
            <p className="mt-4 text-lead font-semibold">
              Your neighbors need this too. Tayo-tayo na lang, remember?
            </p>
            <button type="button" onClick={share} className="btn mt-6">
              Share El Niño Ready <span aria-hidden>→</span>
            </button>
            <p role="status" className="mt-2 min-h-6 text-small text-soft">
              {msg}
            </p>
          </div>
          <div>
            <h2 className="font-display text-[22px] font-extrabold">Sources</h2>
            <ul className="mt-3 space-y-2">
              {SOURCES.map(([t, u]) => (
                <li key={u}>
                  <a
                    href={u}
                    target="_blank"
                    rel="noopener"
                    className="text-lead font-semibold text-link underline-offset-4 hover:underline"
                  >
                    {t} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Signature />
          <Banat className="rotate-1">
            Not affiliated with any government agency. Obviously. Wala kaming
            mukha sa tarpaulin.
          </Banat>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t-3 border-line pt-6 text-small text-soft sm:flex-row">
          <p className="max-w-[70ch]">
            A volunteer project, not an official government app. We summarise
            official advisories in plain language. When your LGU or PAGASA says
            something different, follow them.
          </p>
          <a href="#top" className="font-semibold underline underline-offset-4">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
