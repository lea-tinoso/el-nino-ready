import { Banat } from './Banat.tsx'

// The 20 second launch reel, under the hero. It loads only when someone presses play.
export function Reel() {
  return (
    <section
      id="reel"
      className="scroll-mt-4 bg-cream px-4 pt-24 pb-20 text-ink-warm sm:px-8 sm:pt-28 sm:pb-24"
      aria-labelledby="reel-title"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <p className="text-[13px] font-extrabold tracking-[0.08em] text-line uppercase">
            The 20-second tour
          </p>
          <h2
            id="reel-title"
            data-reveal
            className="mt-1 font-display text-[clamp(40px,5vw,72px)] leading-[0.95] font-extrabold tracking-[-0.04em] text-line"
          >
            See it in action
          </h2>
          <p className="mt-4 max-w-[48ch] text-[17px]">
            Check your province, tick off the checklist, keep the hotlines
            handy. Share it with your family group chat.
          </p>
          <Banat label="Speed run" className="mt-8 -rotate-2">
            20 seconds lang ito. Mas mabilis pa sa pag-release ng ayuda.
          </Banat>
        </div>
        <div className="mx-auto w-[min(300px,78vw)] rotate-2 rounded-[28px] border-3 border-line bg-post p-2 shadow-[6px_6px_0_var(--color-line)]">
          <video
            className="aspect-[9/16] w-full rounded-[20px] bg-post"
            src="/reel/el-nino-ready.mp4"
            poster="/reel/poster.jpg"
            controls
            playsInline
            preload="none"
            aria-label="20-second video tour of El Niño Ready"
          />
        </div>
      </div>
    </section>
  )
}
