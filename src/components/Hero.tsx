import { Tabo } from './Tabo.tsx'

type Card = {
  label: string
  href: string
  frame: string
  tilt: string
  icon: React.ReactNode
}

const STROKE = {
  stroke: 'var(--color-line)',
  strokeWidth: 5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

const ICONS = {
  calendar: (
    <svg viewBox="0 0 100 100" aria-hidden className="size-3/5">
      <rect
        x="14"
        y="20"
        width="72"
        height="66"
        rx="10"
        fill="var(--color-cream)"
        {...STROKE}
      />
      <path d="M14 40h72M34 12v16M66 12v16" fill="none" {...STROKE} />
      <circle
        cx="50"
        cy="62"
        r="9"
        fill="var(--color-post)"
        {...STROKE}
        strokeWidth={4}
      />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 100 100" aria-hidden className="size-3/5">
      <rect
        x="18"
        y="16"
        width="64"
        height="76"
        rx="10"
        fill="var(--color-cream)"
        {...STROKE}
      />
      <rect
        x="36"
        y="8"
        width="28"
        height="16"
        rx="5"
        fill="var(--color-sun)"
        {...STROKE}
      />
      <path
        d="M32 46l6 6 10-12M56 46h14M32 70l6 6 10-12M56 70h14"
        fill="none"
        {...STROKE}
      />
    </svg>
  ),
  question: (
    <svg viewBox="0 0 100 100" aria-hidden className="size-3/5">
      <path
        d="M14 22a10 10 0 0 1 10-10h52a10 10 0 0 1 10 10v40a10 10 0 0 1-10 10H44L26 88V72h-2a10 10 0 0 1-10-10z"
        fill="var(--color-cream)"
        {...STROKE}
      />
      <path d="M40 34a10 10 0 1 1 14 9c-3 2-4 4-4 8" fill="none" {...STROKE} />
      <circle cx="50" cy="60" r="3" fill="var(--color-line)" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 100 100" aria-hidden className="size-3/5">
      <rect
        x="28"
        y="8"
        width="44"
        height="84"
        rx="10"
        fill="var(--color-cream)"
        {...STROKE}
      />
      <path d="M44 20h12" fill="none" {...STROKE} />
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fill="var(--color-post)"
      >
        911
      </text>
    </svg>
  ),
}

const SIDE: Card[] = [
  {
    label: 'Timeline',
    href: '#timeline',
    frame: 'bg-slate',
    tilt: '-rotate-[18deg] translate-y-10',
    icon: ICONS.calendar,
  },
  {
    label: 'Checklist',
    href: '#checklist',
    frame: 'bg-sun',
    tilt: '-rotate-[8deg] translate-y-3',
    icon: ICONS.clipboard,
  },
  {
    label: 'Questions',
    href: '#faq',
    frame: 'bg-heat',
    tilt: 'rotate-[8deg] translate-y-3',
    icon: ICONS.question,
  },
  {
    label: 'Hotlines',
    href: '#hotlines',
    frame: 'bg-line',
    tilt: 'rotate-[18deg] translate-y-10',
    icon: ICONS.phone,
  },
]

function FanCard({ card }: { card: Card }) {
  return (
    <a
      href={card.href}
      className={`fan-card group relative block w-[clamp(120px,17vw,210px)] flex-none ${card.tilt}`}
    >
      <span
        className={`flex aspect-[3/4] items-center justify-center rounded-[22px] border-[6px] border-cream shadow-[6px_6px_0_var(--color-line)] transition group-hover:-translate-y-2 ${card.frame}`}
      >
        {card.icon}
      </span>
      <span className="tab absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border-3 border-line bg-cream px-4 py-1 text-[15px] font-extrabold whitespace-nowrap text-line shadow-[3px_3px_0_var(--color-line)]">
        {card.label}
      </span>
    </a>
  )
}

export function Hero() {
  return (
    <section
      className="grid-field relative overflow-hidden bg-post pb-20 text-cream"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 pt-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-[18px] font-extrabold tracking-[-0.02em]"
        >
          El Niño Ready
        </a>
        <a href="#check" className="btn btn-small">
          Check my province
        </a>
      </div>

      <div className="mx-auto mt-10 max-w-[900px] px-4 text-center">
        <h1
          id="hero-title"
          className="sticker-type font-display text-[clamp(56px,10vw,132px)] leading-[0.9] font-extrabold tracking-[-0.03em]"
        >
          <span className="hero-word block">Tayo-tayo</span>{' '}
          <span className="hero-word hero-word-2 block">na lang.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[34ch] text-[clamp(18px,1.6vw,22px)] leading-snug font-semibold">
          El Niño prep for every Filipino. See what PAGASA expects in your
          province, then tick off a checklist that saves on your phone. No
          sign-up.
        </p>
      </div>

      <nav
        aria-label="Sections"
        className="relative mt-16 flex items-start justify-center gap-[clamp(8px,2vw,28px)]"
      >
        <FanCard card={SIDE[0]} />
        <FanCard card={SIDE[1]} />
        <a
          href="#check"
          className="fan-card group relative block w-[clamp(170px,22vw,280px)] flex-none"
        >
          <span className="relative block aspect-[4/5] rounded-t-full rounded-b-[22px] border-[6px] border-cream bg-slate shadow-[6px_6px_0_var(--color-line)] transition group-hover:-translate-y-2">
            <Tabo />
          </span>
          <span className="note absolute -top-8 left-1/2 z-10 w-max max-w-[200px] rounded-[20px] border-3 border-line bg-white px-3 pt-1.5 pb-2 text-center text-[14px] leading-tight font-semibold text-line shadow-[4px_4px_0_var(--color-line)]">
            <span className="block text-[12px] font-extrabold tracking-[0.05em] text-post uppercase">
              Ayuda status
            </span>
            still loading… please wait (forever)
          </span>
          <span className="tab absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border-3 border-line bg-sun px-5 py-1.5 text-[17px] font-extrabold whitespace-nowrap text-line shadow-[3px_3px_0_var(--color-line)]">
            My province
          </span>
        </a>
        <FanCard card={SIDE[2]} />
        <FanCard card={SIDE[3]} />
      </nav>
    </section>
  )
}
