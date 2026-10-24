const LINKS: [string, string][] = [
  ['My province', '#check'],
  ['Checklist', '#checklist'],
  ['Timeline', '#timeline'],
  ['Questions', '#faq'],
  ['Hotlines', '#hotlines'],
]

// Sticky pill navigation that follows the hero, after Locker Land.
export function SubNav() {
  return (
    <nav
      aria-label="Jump to"
      className="sticky top-3 z-30 flex justify-center px-3"
    >
      <ul className="flex max-w-full gap-1 overflow-x-auto rounded-full border-3 border-line bg-cream p-1.5 shadow-[4px_4px_0_var(--color-line)]">
        {LINKS.map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              className="block rounded-full px-3 py-1.5 text-[15px] font-bold whitespace-nowrap text-line transition hover:bg-sun sm:px-4"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
