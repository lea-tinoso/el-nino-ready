import { useState } from 'react'
import { ADVISORY } from '../content/data.ts'

const SOURCES: [string, string][] = [
  [`${ADVISORY.name}`, ADVISORY.url],
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
    <footer className="overflow-clip bg-surface px-4 pt-16 pb-10 sm:px-[4vw] sm:pt-24">
      <p
        data-reveal
        className="text-[15vw] leading-[0.85] font-black tracking-[-0.04em] whitespace-nowrap text-ink"
      >
        El Niño Ready
      </p>
      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="text-small text-mute">Sources</h2>
          <ul className="mt-3 space-y-2">
            {SOURCES.map(([t, u]) => (
              <li key={u}>
                <a
                  href={u}
                  target="_blank"
                  rel="noopener"
                  className="text-[clamp(22px,2.4vw,34px)] leading-tight text-primary transition hover:text-ink"
                >
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-body lg:col-span-5 lg:col-start-8">
          <h2 className="text-small text-mute">Pass it on</h2>
          <p className="mt-3 text-ink">
            Your neighbors need this too. Tayo-tayo na lang, remember?
          </p>
          <button
            type="button"
            onClick={share}
            className="mt-4 min-h-12 bg-primary px-5 font-semibold text-on-primary transition hover:bg-ink active:scale-[0.97]"
          >
            Share El Niño Ready
          </button>
          <p role="status" className="mt-2 min-h-6 text-small text-mute">
            {msg}
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-col justify-between gap-4 text-small text-mute sm:flex-row">
        <p className="max-w-[70ch]">
          A volunteer project, not an official government app. We summarise
          official advisories in plain language. When your LGU or PAGASA says
          something different, follow them.
        </p>
        <a href="#top" className="underline underline-offset-4 hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  )
}
