import { Banat } from '../components/Banat.tsx'
import { Checker } from '../components/Checker.tsx'
import { PancitCanton } from '../components/PancitCanton.tsx'
import { Signature } from '../components/Signature.tsx'

const BASE = import.meta.env.BASE_URL

const QRS = [
  {
    name: 'GCash',
    src: `${BASE}qr/gcash.png`,
    w: 560,
    h: 884,
    tab: 'bg-sky',
    tilt: '-rotate-[1.5deg]',
  },
  {
    name: 'MariBank',
    src: `${BASE}qr/maribank.png`,
    w: 560,
    h: 520,
    tab: 'bg-sun',
    tilt: 'rotate-[1.5deg]',
  },
]

const STEPS = [
  'Open GCash, Maya or your bank app and tap Scan QR.',
  'On a phone? Screenshot this page and upload the QR from your gallery.',
  "That's it. Salamat, and stay hydrated.",
]

export default function Chilimansi() {
  return (
    <>
      <header className="grid-field bg-leaf px-4 pt-5 pb-16 text-cream sm:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex items-center justify-between gap-4">
            <a
              href={BASE}
              className="font-display text-[18px] font-extrabold tracking-[-0.02em]"
            >
              El Niño Ready
            </a>
            <a href={BASE} className="btn btn-small">
              <span aria-hidden>←</span> Back to the guide
            </a>
          </div>
          <div className="mt-10 grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-[13px] font-extrabold tracking-[0.08em] uppercase">
                Buy me a chilimansi
              </p>
              <h1 className="sticker-type mt-2 font-display text-[clamp(56px,8vw,112px)] leading-[0.9] font-extrabold tracking-[-0.03em]">
                One pack. ₱15.
              </h1>
              <p className="mt-5 max-w-[40ch] text-[19px] font-semibold">
                No account, no sign-up. Scan with GCash, Maya or any bank app
                that supports InstaPay. Both codes are set to ₱15, one pack of
                chilimansi pancit canton.
              </p>
            </div>
            <PancitCanton className="wobble mx-auto w-full max-w-[240px] md:max-w-[360px]" />
          </div>
        </div>
      </header>
      <Checker />
      <main className="px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-display text-[clamp(32px,4vw,48px)] leading-[0.95] font-extrabold tracking-[-0.04em] text-line">
            Scan either one
          </h2>
          <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
            {QRS.map((q) => (
              <figure
                key={q.name}
                className={`m-0 rounded-3xl border-3 border-line bg-white p-5 text-center shadow-[6px_6px_0_var(--color-line)] ${q.tilt}`}
              >
                <span
                  className={`inline-block rounded-full border-3 border-line px-4 py-1 font-extrabold text-line shadow-[3px_3px_0_var(--color-line)] ${q.tab}`}
                >
                  {q.name}
                </span>
                <img
                  src={q.src}
                  width={q.w}
                  height={q.h}
                  alt={`${q.name} InstaPay QR code for lea, set to 15 pesos`}
                  className="mx-auto mt-4 h-auto w-full max-w-[380px]"
                />
                <figcaption className="mt-3 text-small text-soft">
                  InstaPay QR, fixed at ₱15. Transfer fees may apply.
                </figcaption>
              </figure>
            ))}
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li
                key={s}
                className="rounded-[20px] border-3 border-line bg-white px-4 pt-3.5 pb-4 shadow-[4px_4px_0_var(--color-line)]"
              >
                <span className="mb-2 grid size-9 place-items-center rounded-full border-3 border-line bg-post font-extrabold text-cream">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <Banat label="Transparency report" className="rotate-[1.5deg]">
              100% of this goes to pancit canton and server bills. May resibo
              pa. Try mo 'yan sa pondo ng bayan.
            </Banat>
            <Signature />
          </div>
        </div>
      </main>
    </>
  )
}
