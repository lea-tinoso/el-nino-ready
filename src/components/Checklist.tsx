import { CHECKLIST } from '../content/data.ts'
import { Banat } from './Banat.tsx'

type Props = {
  done: Record<string, boolean>
  onToggle: (id: string) => void
  onClear: () => void
}

const TOTAL = CHECKLIST.reduce((n, g) => n + g.items.length, 0)
const GROUP_BG = ['bg-sky', 'bg-heat', 'bg-mint-soft', 'bg-sun', 'bg-pink']

export function Checklist({ done, onToggle, onClear }: Props) {
  const count = CHECKLIST.reduce(
    (n, g) => n + g.items.filter(([id]) => done[id]).length,
    0,
  )

  return (
    <section
      id="checklist"
      className="scroll-mt-4 border-y-3 border-line bg-sun px-4 py-20 sm:px-8 sm:py-28"
      aria-labelledby="list-title"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2
              id="list-title"
              data-reveal
              className="font-display text-[clamp(40px,5vw,72px)] leading-[0.95] font-extrabold tracking-[-0.04em]"
            >
              Your household checklist
            </h2>
            <p data-reveal className="mt-4 max-w-[52ch] text-body">
              Tick things off as you go. Your ticks are saved on this phone
              only. Share the list with your family group chat.
            </p>
          </div>
          <Banat label="Real talk" className="-rotate-2 md:mb-2">
            Hindi 'to flood control project. Matatapos mo talaga 'to.
          </Banat>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-start">
          <div className="grid gap-6 md:grid-cols-2">
            {CHECKLIST.map((group, gi) => (
              <div
                key={group.id}
                data-reveal
                className="overflow-hidden rounded-3xl border-3 border-line bg-white shadow-[6px_6px_0_var(--color-line)]"
              >
                <h3
                  className={`border-b-3 border-line px-5 py-3 font-display text-[22px] font-extrabold ${GROUP_BG[gi % GROUP_BG.length]}`}
                >
                  {group.title}
                </h3>
                <ul className="px-3 py-2">
                  {group.items.map(([id, text, value]) => (
                    <li key={id}>
                      <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-xl px-2 py-2 transition hover:bg-paper">
                        <input
                          type="checkbox"
                          checked={!!done[id]}
                          onChange={() => onToggle(id)}
                          className="mt-[2px] size-6 flex-none cursor-pointer appearance-none rounded-md border-3 border-line bg-white checked:bg-mint checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cpath%20d=%22M3%208.5l3%203%207-7%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%222.5%22/%3E%3C/svg%3E')] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-line"
                        />
                        <span
                          className={`flex-1 text-[16px] ${done[id] ? 'text-soft line-through' : ''}`}
                        >
                          {text}
                        </span>
                        <span className="pt-[2px] text-small font-semibold whitespace-nowrap text-soft tabular-nums">
                          {value}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-6">
            <div className="rotate-1 rounded-3xl border-3 border-line bg-white p-6 shadow-[8px_8px_0_var(--color-line)]">
              <p className="font-display text-[88px] leading-none font-extrabold tracking-[-0.05em] tabular-nums">
                {count}
                <span className="text-soft">/{TOTAL}</span>
              </p>
              <div className="mt-4 h-5 overflow-hidden rounded-full border-3 border-line bg-paper">
                <div
                  className="h-full bg-mint transition-[width] duration-500"
                  style={{ width: `${(count / TOTAL) * 100}%` }}
                />
              </div>
              <p className="mt-4 text-lead font-semibold">
                {count === TOTAL
                  ? 'Your household is ready. Now help a neighbor.'
                  : count === 0
                    ? 'Nothing ticked yet. Start with water.'
                    : 'Done so far. Keep going.'}
              </p>
              <button
                type="button"
                onClick={onClear}
                className="mt-4 text-small font-semibold underline underline-offset-4"
              >
                Clear my ticks
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
