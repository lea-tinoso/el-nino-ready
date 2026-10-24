import { useState } from 'react'
import {
  ADVISORY,
  LEVELS,
  PROVINCES,
  REGIONS,
  STATEMENT,
} from '../content/data.ts'
import { nearestProvince } from '../lib/geo.ts'

const INDENTS = ['0', 'var(--s1)', 'var(--s2)', 'var(--s3)', 'var(--s4)']
const DEFAULT_LINES = [
  'Pick your province',
  'and see what',
  'PAGASA expects',
  'there this',
  'October.',
]

type Props = { province: string; onChange: (name: string) => void }

export function ProvinceCheck({ province, onChange }: Props) {
  const [msg, setMsg] = useState('')
  const [detected, setDetected] = useState(false)
  const row = PROVINCES.find((p) => p[0] === province)
  const region = row ? REGIONS[row[1]] : null
  const levelKey = row ? (row[4] ?? region!.level) : null
  const level = levelKey ? LEVELS[levelKey] : null

  const lines =
    row && levelKey
      ? [`In ${row[0]},`, 'PAGASA expects', ...STATEMENT[levelKey]]
      : DEFAULT_LINES

  function locate() {
    if (!('geolocation' in navigator)) {
      setMsg("Your browser can't share location. Pick your province instead.")
      return
    }
    setMsg('Finding your province…')
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const p = nearestProvince(coords.latitude, coords.longitude)
        if (!p) {
          setMsg(
            'You seem to be outside the Philippines. Pick a province to see its status.',
          )
          return
        }
        setMsg(`Detected ${p[0]}. Not right? Pick yours from the list.`)
        setDetected(true)
        onChange(p[0])
      },
      () =>
        setMsg("Couldn't get your location. Pick your province from the list."),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 },
    )
  }

  return (
    <section
      id="check"
      className="scroll-mt-4 bg-surface px-4 py-24 [--s1:5vw] [--s2:10vw] [--s3:15vw] [--s4:20vw] sm:px-[4vw] sm:py-32 lg:[--s1:6vw] lg:[--s2:12vw] lg:[--s3:18vw] lg:[--s4:24vw]"
      aria-labelledby="check-title"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2
          id="check-title"
          data-reveal
          className="text-lead font-semibold text-ink"
        >
          What El Niño means where you live
        </h2>
        <div
          data-reveal
          style={{ '--i': 1 } as React.CSSProperties}
          className="flex flex-wrap items-center gap-3"
        >
          <button
            type="button"
            onClick={locate}
            className="min-h-12 bg-primary px-5 font-semibold text-on-primary transition hover:bg-ink active:scale-[0.97]"
          >
            Use my location
          </button>
          <label htmlFor="province" className="sr-only">
            Choose your province
          </label>
          <select
            id="province"
            value={province}
            onChange={(e) => {
              setDetected(false)
              setMsg('')
              onChange(e.target.value)
            }}
            className="min-h-12 max-w-full flex-1 bg-canvas px-3 text-ink transition hover:bg-hairline sm:flex-none"
          >
            <option value="">Choose your province</option>
            {Object.entries(REGIONS).map(([code, r]) => (
              <optgroup key={code} label={r.name}>
                {PROVINCES.filter((p) => p[1] === code).map((p) => (
                  <option key={p[0]} value={p[0]}>
                    {p[0]}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>
      <p role="status" className="mt-3 min-h-6 text-small text-mute">
        {msg ||
          'Your location stays on your phone. We never collect or store it.'}
      </p>

      <div className="my-16 grid gap-12 lg:grid-cols-12 lg:items-start">
        <p
          key={province}
          aria-live="polite"
          className="lines lg:col-span-7 text-[24px] leading-[1.1] font-bold tracking-[-0.02em] sm:text-[32px] lg:text-[36px]"
        >
          {lines.map((line, i) => (
            <span key={i} className="line" style={{ paddingLeft: INDENTS[i] }}>
              <span
                data-line
                style={{ '--i': i } as React.CSSProperties}
                className={i % 2 ? 'text-mute' : 'text-ink'}
              >
                {line}
              </span>
            </span>
          ))}
        </p>

        {row && region && level ? (
          <div className="grid gap-6 text-copy lg:col-span-4 lg:col-start-9">
            <p className="text-body">
              <strong className="text-ink">{level.label}.</strong>{' '}
              {level.meaning}
            </p>
            <div className="text-body">
              <p>
                <strong className="text-ink">{region.name}.</strong>{' '}
                {region.note}
              </p>
              {region.links && (
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {region.links.map(([t, u]) => (
                    <li key={u}>
                      <a
                        className="text-primary underline underline-offset-4 hover:text-ink"
                        href={u}
                        target="_blank"
                        rel="noopener"
                      >
                        {t}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div className="grid gap-4 text-body text-copy lg:col-span-4 lg:col-start-9">
            <p>
              <strong className="text-ink">Right now:</strong>{' '}
              {ADVISORY.summary}
            </p>
            <p>
              In the Philippines that mostly means less rain, more heat, water
              interruptions, higher food prices and more fires. It's not typhoon
              prep, though typhoons can still come.
            </p>
          </div>
        )}
      </div>

      <p className="mt-10 max-w-2xl text-small text-mute">
        {detected ? 'Detected location is approximate. ' : ''}
        Based on{' '}
        <a
          className="underline underline-offset-4 hover:text-ink"
          href={ADVISORY.url}
          target="_blank"
          rel="noopener"
        >
          {ADVISORY.name}
        </a>
        , issued {ADVISORY.issued}. PAGASA updates it monthly.
      </p>
    </section>
  )
}
