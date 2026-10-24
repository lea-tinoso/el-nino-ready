import {
  ROADMAP,
  SCHEDULE,
  SUGGEST_URL,
  type RoadmapWhen,
} from '../content/data.ts'
import { Banat } from './Banat.tsx'

const PILL: Record<RoadmapWhen, string> = {
  Next: 'bg-sun',
  Later: 'bg-pink',
  Maybe: 'bg-sky',
}

export function WhatsNext() {
  return (
    <section
      id="next"
      className="grid-field scroll-mt-4 bg-slate px-4 py-20 text-cream sm:px-8 sm:py-28"
      aria-labelledby="next-title"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-[13px] font-extrabold tracking-[0.08em] uppercase">
              Coming soon-ish
            </p>
            <h2
              id="next-title"
              data-reveal
              className="mt-1 font-display text-[clamp(40px,5vw,72px)] leading-[0.95] font-extrabold tracking-[-0.04em]"
            >
              What's next
            </h2>
            <p className="mt-4 max-w-[52ch]">
              Ideas for the next updates. Nothing here is live yet, and the
              order can change. Got a better idea? Send it.
            </p>
            <a
              href={SUGGEST_URL}
              target="_blank"
              rel="noopener"
              className="btn mt-6"
            >
              Suggest a feature <span aria-hidden>↗</span>
            </a>
          </div>
          <Banat label="Out of office" className="-rotate-2 md:mb-2">
            Fully booked ako hanggang December, parang flood control budget.
            November: Thailand. December: BTS, ang tanging pitong lalaking mahal
            ko. Sa pagitan: trabaho.
          </Banat>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ROADMAP.map(([when, title, line]) => (
            <li
              key={title}
              className="rounded-[22px] border-3 border-line bg-cream px-5 pt-4 pb-5 text-ink-warm shadow-[5px_5px_0_var(--color-line)]"
            >
              <span
                className={`inline-block rounded-full border-2 border-line px-2.5 py-0.5 text-[12px] font-extrabold tracking-[0.06em] text-line uppercase ${PILL[when]}`}
              >
                {when}
              </span>
              <h3 className="mt-2.5 font-display text-[22px] leading-[1.05] font-extrabold tracking-[-0.02em] text-line">
                {title}
              </h3>
              <p className="mt-1.5 text-[15px] text-soft">{line}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {SCHEDULE.map(([month, note]) => (
            <li
              key={month}
              className="rounded-2xl border-2 border-dashed border-cream px-4 py-2.5 text-[15px] font-semibold"
            >
              <span className="block text-[13px] font-extrabold tracking-[0.06em] uppercase">
                {month}
              </span>
              {note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
