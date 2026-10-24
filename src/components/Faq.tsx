import { FAQ } from '../content/data.ts'

export function Faq() {
  return (
    <section
      className="px-4 py-24 sm:px-[4vw] sm:py-40"
      aria-labelledby="faq-title"
    >
      <h2
        id="faq-title"
        data-reveal
        className="max-w-[16ch] text-[10vw] leading-[0.95] font-bold tracking-[-0.03em] text-ink sm:text-[5.5vw]"
      >
        Questions, answered plainly
      </h2>
      <div className="mt-20 lg:ml-[33%]">
        {FAQ.map(([q, a], i) => (
          <details
            key={q}
            data-reveal
            style={{ '--i': i } as React.CSSProperties}
            className="group -mx-4 mb-7 px-4 py-3 transition open:bg-surface sm:-mx-6 sm:px-6"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-6 text-body text-ink transition hover:text-primary sm:text-lead">
              {q}
              <svg
                aria-hidden
                className="chev size-4 flex-none transition"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 5.5 8 11.5 14 5.5" />
              </svg>
            </summary>
            <p className="mt-4 max-w-[48ch] text-body sm:text-lead">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
