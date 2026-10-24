import { CANTON_COUNT } from '../content/data.ts'
import { Banat } from './Banat.tsx'
import { PancitCanton } from './PancitCanton.tsx'

// A tally of chilimansi packs. It's a joke for now: the real counting isn't built yet.
export function CantonCounter() {
  return (
    <section
      aria-labelledby="counter-title"
      className="grid-field mt-14 grid items-center gap-8 rounded-[28px] border-3 border-line bg-post p-6 text-cream shadow-[8px_8px_0_var(--color-line)] sm:p-10 md:grid-cols-[1fr_auto]"
    >
      <div>
        <h2
          id="counter-title"
          className="text-[13px] font-extrabold tracking-[0.08em] uppercase"
        >
          Pancit canton counter
        </h2>
        <p className="mt-2 flex items-end gap-4">
          <span className="sticker-type font-display text-[clamp(110px,16vw,180px)] leading-[0.8] font-extrabold tabular-nums">
            {CANTON_COUNT}
          </span>
          <span className="pb-2 text-[20px] leading-tight font-bold">
            packs so far.
            <br />
            Lumalamig na siya.
          </span>
        </p>
        <Banat label="Work in progress" className="mt-8 -rotate-2">
          The counting feature is still cooking. Parang ayuda: "nasa proseso pa
          po."
        </Banat>
      </div>
      <PancitCanton
        mood="sad"
        className="mx-auto w-full max-w-[260px] md:max-w-[320px]"
      />
    </section>
  )
}
