import { TIMELINE } from '../content/data.ts'
import { Banat } from './Banat.tsx'

export function Timeline() {
  return (
    <section
      id="timeline"
      className="scroll-mt-4 bg-sky px-4 py-20 sm:px-8 sm:py-28"
      aria-labelledby="time-title"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <h2
            id="time-title"
            data-reveal
            className="font-display text-[clamp(40px,5vw,72px)] leading-[0.95] font-extrabold tracking-[-0.04em]"
          >
            Your El Niño timeline
          </h2>
          <p data-reveal className="mt-4 max-w-[40ch] text-body">
            PAGASA says El Niño may peak before the end of 2026 and last into
            mid-2027. Here is what to do, and when.
          </p>
          <Banat className="mt-8 -rotate-2">
            Init na init? Pati singit? Tiis lang, hanggang mid-2027 pa 'to.
          </Banat>
        </div>

        <div
          data-reveal
          className="slip mx-auto w-full max-w-[480px] rotate-1 border-x-3 border-t-3 border-line bg-white pb-10 lg:mx-0 lg:justify-self-end"
        >
          <div className="px-6 pt-6 sm:px-8">
            <p className="text-center font-display text-[20px] font-extrabold">
              El Niño Ready
            </p>
            <p className="text-center text-small text-soft">
              Official receipt (not really)
            </p>
            {TIMELINE.map((g) => (
              <div key={g.when} className="mt-6">
                <h3 className="text-[16px] font-bold">{g.when}</h3>
                <ul className="mt-2">
                  {g.rows.map(([what, how]) => (
                    <li
                      key={what}
                      className="flex items-baseline gap-2 py-1 text-[16px] tabular-nums"
                    >
                      <span>{what}</span>
                      <span aria-hidden className="leader h-1 min-w-6 flex-1" />
                      <span className="whitespace-nowrap">{how}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex min-h-11 items-center justify-between gap-2 bg-line px-6 py-2 text-[16px] text-white sm:px-8">
            <span className="font-bold">Ayuda received</span>
            <span className="tabular-nums">Still loading…</span>
          </div>
          <p className="px-6 pt-4 text-small text-soft sm:px-8">
            What you hold at the end: a household that's ready on its own.
          </p>
        </div>
      </div>
    </section>
  )
}
