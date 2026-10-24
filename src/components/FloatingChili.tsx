import { CHILIMANSI_URL } from './ChilimansiPopup.tsx'
import { PancitCanton } from './PancitCanton.tsx'

// A small, always-there way back to the chilimansi page, for anyone who closed the popup.
// The label only shows on hover or keyboard focus, so it stays quiet.
export function FloatingChili() {
  return (
    <a
      href={CHILIMANSI_URL}
      aria-label="Buy me a chilimansi"
      className="group fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full border-3 border-line bg-cream shadow-[3px_3px_0_var(--color-line)] transition hover:-translate-y-0.5 hover:rotate-[-6deg] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-line sm:right-6 sm:bottom-6"
    >
      <PancitCanton className="w-10" />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[calc(100%+10px)] rounded-full border-3 border-line bg-white px-3 py-1 text-[14px] font-extrabold whitespace-nowrap text-line opacity-0 shadow-[3px_3px_0_var(--color-line)] transition group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        Buy me a chilimansi
      </span>
    </a>
  )
}
