const NAV: [string, string][] = [
  ['My province', '#check'],
  ['Checklist', '#checklist'],
  ['Timeline', '#timeline'],
  ['Hotlines', '#hotlines'],
]

// The mascot: a tired tabo under a sweating sun, standing on cracked ground.
function Tabo() {
  return (
    <svg
      viewBox="0 0 200 250"
      aria-hidden
      className="absolute inset-0 size-full rounded-[inherit]"
    >
      <g
        stroke="var(--color-line)"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* sun */}
        <g className="sun-spin">
          {Array.from({ length: 8 }, (_, i) => (
            <line
              key={i}
              x1="44"
              y1="16"
              x2="44"
              y2="2"
              transform={`rotate(${i * 45} 44 46)`}
            />
          ))}
        </g>
        <circle cx="44" cy="46" r="22" fill="var(--color-sun)" />
        <path
          d="M35 44 q3 -4 6 0 M48 44 q3 -4 6 0"
          fill="none"
          strokeWidth="3"
        />
        <path d="M37 55 q7 -5 14 0" fill="none" strokeWidth="3" />
        <path
          d="M70 60 q4 7 0 10 q-4 -3 0 -10z"
          fill="var(--color-sky)"
          strokeWidth="2.5"
        />

        {/* cracked ground */}
        <path d="M0 214 H200 V250 H0z" fill="var(--color-clay)" />
        <path
          d="M30 214 l8 12 -6 10 M92 214 l-6 14 10 12 M150 214 l6 10 -8 14 M120 232 l14 -2"
          fill="none"
          strokeWidth="3"
        />

        {/* handle */}
        <path d="M146 122 L182 96 L190 108 L152 140" fill="var(--color-pink)" />
        {/* cup */}
        <path d="M44 112 H156 L146 214 H54 Z" fill="var(--color-pink)" />
        <ellipse cx="100" cy="112" rx="56" ry="14" fill="var(--color-paper)" />
        {/* the last bit of water */}
        <ellipse
          cx="100"
          cy="116"
          rx="26"
          ry="5"
          fill="var(--color-sky)"
          strokeWidth="3"
        />

        {/* face */}
        <path
          d="M74 152 q8 6 16 0 M110 152 q8 6 16 0"
          fill="none"
          strokeWidth="4"
        />
        <path d="M86 182 q7 -7 14 0 q7 7 14 0" fill="none" strokeWidth="4" />
        <circle cx="70" cy="170" r="6" fill="var(--color-heat)" stroke="none" />
        <circle
          cx="130"
          cy="170"
          r="6"
          fill="var(--color-heat)"
          stroke="none"
        />
        {/* sweat */}
        <path
          d="M40 132 q6 10 0 14 q-6 -4 0 -14z"
          fill="var(--color-sky)"
          strokeWidth="3"
          className="drip"
        />
        <path
          d="M164 156 q5 8 0 12 q-5 -4 0 -12z"
          fill="var(--color-sky)"
          strokeWidth="3"
          className="drip drip-2"
        />
      </g>
    </svg>
  )
}

export function Hero() {
  return (
    <>
      <header className="border-b-3 border-line bg-paper text-line">
        <div className="mx-auto flex min-h-17 max-w-[1240px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-8">
          <a
            href="#top"
            className="font-display text-[22px] leading-none font-extrabold tracking-[-0.03em]"
          >
            El Niño Ready
          </a>
          <nav
            aria-label="Sections"
            className="flex flex-wrap gap-x-5 gap-y-1 font-semibold"
          >
            {NAV.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="border-b-2 border-transparent hover:border-line"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        className="overflow-hidden border-b-3 border-line bg-heat text-line"
        aria-labelledby="hero-title"
      >
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-x-6 px-4 pt-14 pb-12 sm:px-8 md:grid-cols-[1fr_auto] md:gap-x-10 md:pt-18">
          <h1 id="hero-title" className="contents">
            <span className="hero-word max-md:order-1 font-display text-[clamp(64px,10vw,160px)] leading-[0.86] font-extrabold tracking-[-0.06em] whitespace-nowrap md:col-start-1 md:row-start-1 md:self-end">
              Tayo-tayo
            </span>
            <span className="max-md:order-3 font-display text-[clamp(64px,10vw,160px)] leading-[0.86] font-extrabold tracking-[-0.06em] whitespace-nowrap max-md:mt-6 max-md:justify-self-end md:col-start-1 md:row-start-2 md:self-start md:pl-[8vw]">
              <span className="hero-word hero-word-2 inline-block">
                na lang.
              </span>
            </span>
          </h1>

          <div className="relative mx-auto mt-16 max-md:order-2 aspect-[4/5] w-[min(300px,78vw)] rounded-t-full rounded-b-3xl border-3 border-line bg-sky shadow-[8px_8px_0_var(--color-line)] md:col-start-2 md:row-span-2 md:row-start-1 md:mt-10 md:w-[clamp(240px,26vw,340px)]">
            <Tabo />
            <p className="note absolute -top-6 left-1/2 z-10 w-max max-w-[220px] rounded-[22px] border-3 border-line bg-white px-4 pt-2 pb-3 text-center text-[15px] leading-tight font-semibold shadow-[4px_4px_0_var(--color-line)]">
              <span className="block text-[13px] font-extrabold tracking-[0.05em] text-plum uppercase">
                Ayuda status
              </span>
              still loading… please wait (forever)
            </p>
          </div>

          <div className="col-span-full mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-5 max-md:order-4 md:row-start-3">
            <p className="max-w-[36ch] text-[clamp(20px,2vw,26px)] leading-[1.3] font-semibold">
              El Niño prep for every Filipino. See what PAGASA expects in your
              province, then work through a checklist that saves on your phone.
              No sign-up.
            </p>
            <a href="#check" className="btn">
              Check my province <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
