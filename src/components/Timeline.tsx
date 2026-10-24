import { TIMELINE } from '../content/data.ts'

export function Timeline() {
  return (
    <section
      className="bg-water px-4 py-24 text-on-water sm:px-[4vw] sm:py-40"
      aria-labelledby="time-title"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2
            id="time-title"
            data-reveal
            className="text-[clamp(40px,4.4vw,68px)] leading-[0.95] font-bold tracking-[-0.025em]"
          >
            Your El Niño timeline
          </h2>
          <p
            data-reveal
            style={{ '--i': 1 } as React.CSSProperties}
            className="mt-6 max-w-[30ch] text-lead"
          >
            PAGASA says El Niño may peak before the end of 2026 and last into
            mid-2027. Here is what to do, and when.
          </p>
        </div>

        <div
          data-reveal
          className="slip w-full max-w-[480px] bg-paper pb-10 text-on-paper lg:col-span-5 lg:col-start-7"
        >
          <div className="px-6 pt-6 sm:px-8">
            <p className="text-small text-paper-mute">
              El Niño Ready · Official receipt (not really)
            </p>
            {TIMELINE.map((g) => (
              <div key={g.when} className="mt-7">
                <h3 className="text-body font-bold">{g.when}</h3>
                <ul className="mt-2">
                  {g.rows.map(([what, how]) => (
                    <li
                      key={what}
                      className="flex items-baseline gap-2 py-1 text-body tabular-nums"
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
          <div className="mt-8 flex min-h-11 items-center justify-between gap-2 bg-on-paper px-6 py-2 text-body text-paper sm:px-8">
            <span className="font-bold">Ayuda received</span>
            <span className="tabular-nums">Still loading…</span>
          </div>
          <p className="px-6 pt-4 text-small text-paper-mute sm:px-8">
            What you hold at the end: a household that's ready on its own.
          </p>
        </div>
      </div>
    </section>
  )
}
