import { HOTLINES } from '../content/data.ts'

export function Hotlines() {
  const [main, ...rest] = HOTLINES
  return (
    <section
      className="relative flex min-h-[86svh] flex-col justify-between bg-paper px-4 py-10 text-on-paper sm:min-h-svh sm:px-[4vw] sm:py-12"
      aria-labelledby="hot-title"
    >
      <h2
        id="hot-title"
        data-reveal
        className="max-w-[24ch] text-body font-medium sm:text-lead"
      >
        In an emergency, don't scroll. Call.
      </h2>
      <a
        href={main[2]}
        data-reveal
        className="block text-[44vw] leading-[0.8] font-black tracking-[-0.05em] transition hover:text-water sm:text-[34vw]"
        aria-label={`${main[0]}: call ${main[1]}`}
      >
        {main[1]}
      </a>
      <ul className="flex flex-col gap-3 text-body sm:flex-row sm:justify-between sm:text-body">
        {rest.map(([name, num, tel]) => (
          <li key={num}>
            {name}:{' '}
            <a
              className="font-bold underline underline-offset-4 hover:text-water"
              href={tel}
            >
              {num}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
