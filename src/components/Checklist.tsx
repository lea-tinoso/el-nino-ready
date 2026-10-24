import { CHECKLIST } from '../content/data.ts'

type Props = {
  done: Record<string, boolean>
  onToggle: (id: string) => void
  onClear: () => void
}

const TOTAL = CHECKLIST.reduce((n, g) => n + g.items.length, 0)

export function Checklist({ done, onToggle, onClear }: Props) {
  const count = CHECKLIST.reduce(
    (n, g) => n + g.items.filter(([id]) => done[id]).length,
    0,
  )

  return (
    <section
      className="px-4 py-24 sm:px-[4vw] sm:py-40"
      aria-labelledby="list-title"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:col-start-2 lg:max-w-[560px]">
          <h2
            id="list-title"
            data-reveal
            className="text-[clamp(24px,2vw,28px)] font-medium text-ink"
          >
            Your household checklist
          </h2>
          <p
            data-reveal
            style={{ '--i': 1 } as React.CSSProperties}
            className="mt-3 text-body"
          >
            Tick things off as you go. Your ticks are saved on this phone only.
          </p>

          {CHECKLIST.map((group) => (
            <div key={group.id} className="mt-10" data-reveal>
              <h3 className="text-small text-mute">{group.title}</h3>
              <ul className="mt-2">
                {group.items.map(([id, text, value]) => (
                  <li key={id}>
                    <label className="group flex min-h-11 cursor-pointer items-start gap-3 py-2 transition hover:text-ink">
                      <input
                        type="checkbox"
                        checked={!!done[id]}
                        onChange={() => onToggle(id)}
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden
                        className="mt-[5px] size-4 flex-none rounded-full bg-hairline transition group-hover:bg-mute peer-checked:bg-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary"
                      />
                      <span className="flex-1 text-body text-ink peer-checked:text-mute peer-checked:line-through">
                        {text}
                      </span>
                      <span className="pt-[3px] text-small whitespace-nowrap text-mute tabular-nums">
                        {value}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="lg:sticky lg:top-16" data-reveal>
            <p className="font-display text-[clamp(96px,14vw,200px)] leading-[0.85] font-black tracking-[-0.04em] text-primary tabular-nums">
              {count}
              <span className="text-mute">/{TOTAL}</span>
            </p>
            <p className="mt-4 max-w-[28ch] text-lead text-ink">
              {count === TOTAL
                ? 'Your household is ready. Now help a neighbor.'
                : count === 0
                  ? 'Nothing ticked yet. Start with water.'
                  : 'Done so far. Keep going.'}
            </p>
            <button
              type="button"
              onClick={onClear}
              className="mt-6 text-small text-mute underline underline-offset-4 transition hover:text-ink"
            >
              Clear my ticks
            </button>
          </div>
        </aside>
      </div>
    </section>
  )
}
