import { useState } from 'react'
import {
  ADVISORY,
  LEVELS,
  PROVINCES,
  REGIONS,
  STATEMENT,
  type LevelKey,
} from '../content/data.ts'
import { nearestProvince } from '../lib/geo.ts'
import { Banat } from './Banat.tsx'

const TONE: Record<LevelKey, string> = {
  drought: 'bg-danger text-white',
  dry: 'bg-heat text-line',
  below: 'bg-sun text-line',
  near: 'bg-sky text-line',
}

type Props = { province: string; onChange: (name: string) => void }

export function ProvinceCheck({ province, onChange }: Props) {
  const [msg, setMsg] = useState('')
  const [detected, setDetected] = useState(false)
  const row = PROVINCES.find((p) => p[0] === province)
  const region = row ? REGIONS[row[1]] : null
  const levelKey = row ? (row[4] ?? region!.level) : null
  const level = levelKey ? LEVELS[levelKey] : null

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
      className="scroll-mt-4 bg-paper px-4 py-20 sm:px-8 sm:py-28"
      aria-labelledby="check-title"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2
              id="check-title"
              data-reveal
              className="font-display text-[clamp(40px,5vw,72px)] leading-[0.95] font-extrabold tracking-[-0.04em]"
            >
              What El Niño means where you live
            </h2>
            <p data-reveal className="mt-4 max-w-[52ch] text-body">
              Pick your province, or let your phone find it. Your location stays
              on your phone. We never collect or store it.
            </p>
          </div>
          <Banat className="rotate-2 md:mb-2">
            Ang tubig ngayon, parang pondo ng bayan: bigla na lang nawawala.
          </Banat>
        </div>

        <div className="mt-10 rounded-3xl border-3 border-line bg-white p-5 shadow-[8px_8px_0_var(--color-line)] sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" onClick={locate} className="btn">
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
              className="min-h-[52px] max-w-full flex-1 rounded-full border-3 border-line bg-paper px-4 font-semibold sm:flex-none"
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
          <p role="status" className="mt-3 min-h-6 text-small text-soft">
            {msg}
          </p>

          {row && region && level && levelKey ? (
            <div
              aria-live="polite"
              className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr]"
            >
              <div>
                <p className="text-small font-bold text-soft">
                  {detected ? 'Detected (approximate): ' : ''}
                  {row[0]} · {region.name}
                </p>
                <p
                  className={`mt-3 inline-block -rotate-1 rounded-2xl border-3 border-line px-4 py-2 font-display text-[clamp(26px,3vw,40px)] leading-tight font-extrabold shadow-[4px_4px_0_var(--color-line)] ${TONE[levelKey]}`}
                >
                  {level.label}
                </p>
                <p className="mt-5 font-display text-[clamp(22px,2.2vw,30px)] leading-tight font-bold">
                  PAGASA expects {STATEMENT[levelKey][0]}{' '}
                  {STATEMENT[levelKey][1]} {STATEMENT[levelKey][2]}
                </p>
              </div>
              <div className="space-y-4 text-body">
                <p>{level.meaning}</p>
                <p>{region.note}</p>
                {region.links && (
                  <ul className="flex flex-wrap gap-x-5 gap-y-2">
                    {region.links.map(([t, u]) => (
                      <li key={u}>
                        <a
                          className="font-semibold text-link underline underline-offset-4"
                          href={u}
                          target="_blank"
                          rel="noopener"
                        >
                          {t} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 text-body lg:grid-cols-2">
              <p>
                <strong>Right now:</strong> {ADVISORY.summary}
              </p>
              <p>
                In the Philippines that mostly means less rain, more heat, water
                interruptions, higher food prices and more fires. It's not
                typhoon prep, though typhoons can still come.
              </p>
            </div>
          )}

          <p className="mt-8 text-small text-soft">
            Based on{' '}
            <a
              className="underline underline-offset-4"
              href={ADVISORY.url}
              target="_blank"
              rel="noopener"
            >
              {ADVISORY.name}
            </a>
            , issued {ADVISORY.issued}. PAGASA updates it monthly.
          </p>
        </div>
      </div>
    </section>
  )
}
