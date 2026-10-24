import { FAQ } from '../content/data.ts'
import { Banat } from './Banat.tsx'

export function Faq() {
  return (
    <section
      className="border-y-3 border-line bg-pink px-4 py-20 sm:px-8 sm:py-28"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2
            id="faq-title"
            data-reveal
            className="font-display text-[clamp(40px,5vw,72px)] leading-[0.95] font-extrabold tracking-[-0.04em]"
          >
            Questions, answered plainly
          </h2>
          <Banat className="mt-8 rotate-2">
            Mas madali pa 'tong sagutin kaysa "Saan napunta ang pondo?"
          </Banat>
        </div>
        <div className="space-y-4">
          {FAQ.map(([q, a], i) => (
            <details
              key={q}
              data-reveal
              style={{ '--i': i } as React.CSSProperties}
              className="group rounded-2xl border-3 border-line bg-white px-5 py-4 shadow-[4px_4px_0_var(--color-line)]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 text-[19px] font-bold">
                {q}
                <svg
                  aria-hidden
                  className="chev size-5 flex-none transition"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M2 5.5 8 11.5 14 5.5" />
                </svg>
              </summary>
              <p className="mt-3 max-w-[60ch] text-body">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
