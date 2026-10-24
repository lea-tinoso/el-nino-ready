import { EHOTLINES_URL, HOTLINES } from '../content/data.ts'
import { Banat } from './Banat.tsx'

export function Hotlines() {
  const [main, ...rest] = HOTLINES
  return (
    <section
      id="hotlines"
      className="scroll-mt-4 bg-line px-4 py-20 text-cream sm:px-8 sm:py-28"
      aria-labelledby="hot-title"
    >
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2
            id="hot-title"
            data-reveal
            className="font-display text-[clamp(40px,5vw,72px)] leading-[0.95] font-extrabold tracking-[-0.04em]"
          >
            In an emergency, don't scroll. Call.
          </h2>
          <Banat label="Paalala" className="mt-8 -rotate-2">
            Itong mga number na 'to, sumasagot. Hindi laging "naka-leave."
          </Banat>
        </div>
        <div className="space-y-4">
          <a
            href={main[2]}
            aria-label={`${main[0]}: call ${main[1]}`}
            className="flex items-center justify-between gap-4 rounded-3xl border-3 border-cream bg-post px-6 py-4 font-display text-cream shadow-[6px_6px_0_var(--color-sun)] transition hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-1 active:shadow-none"
          >
            <span className="text-[20px] font-bold">{main[0]}</span>
            <span className="text-[clamp(64px,9vw,120px)] leading-none font-extrabold tracking-[-0.05em]">
              {main[1]}
            </span>
          </a>
          {rest.map(([name, num, tel, note]) => (
            <a
              key={num}
              href={tel}
              className="flex flex-wrap items-center justify-between gap-x-4 rounded-2xl border-3 border-cream bg-white px-5 py-3 text-line shadow-[4px_4px_0_var(--color-sun)] transition hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <span className="font-semibold">{name}</span>
              <span className="text-right font-display text-[28px] leading-tight font-extrabold tabular-nums">
                {num}
                {note && (
                  <span className="block text-[15px] font-bold">{note}</span>
                )}
              </span>
            </a>
          ))}
          <a
            href={EHOTLINES_URL}
            target="_blank"
            rel="noopener"
            className="flex flex-wrap items-center justify-between gap-x-4 rounded-2xl border-3 border-dashed border-cream px-5 py-3 font-semibold transition hover:bg-post"
          >
            <span>
              Need another agency? Every government hotline, in one list.
            </span>
            <span className="font-display text-[20px] font-extrabold">
              eHotlines ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
