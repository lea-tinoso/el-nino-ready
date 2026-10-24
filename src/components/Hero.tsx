const LINES = ['Tayo-tayo', 'na lang.']

function Headline({ hidden = false }: { hidden?: boolean }) {
  const Tag = hidden ? 'p' : 'h1'
  return (
    <Tag
      aria-hidden={hidden || undefined}
      className="headline lines absolute inset-x-4 text-center font-display font-black tracking-[-0.03em] uppercase sm:inset-x-0"
    >
      {LINES.map((line, i) => (
        <span key={line} className="line">
          <span data-line style={{ '--i': i } as React.CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  )
}

export function Hero() {
  return (
    <header className="waterline relative h-svh min-h-[560px] overflow-clip">
      <div className="seam-drift absolute inset-0">
        <div className="field-top absolute inset-0 bg-canvas text-primary">
          <Headline />
        </div>
        <div className="field-bottom absolute inset-0 bg-water text-deep">
          <Headline hidden />
        </div>
      </div>

      <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-4 sm:inset-x-7 sm:top-7">
        <p className="text-small font-bold text-ink sm:text-body">
          El Niño Ready
        </p>
        <a
          href="#check"
          className="bg-primary px-4 py-3 text-small font-semibold text-on-primary transition hover:bg-ink active:scale-[0.97] sm:text-body"
        >
          Check my province
        </a>
      </div>

      <p className="hero-after absolute inset-x-4 bottom-10 max-w-xl text-body leading-snug text-on-water sm:inset-x-0 sm:mx-auto sm:text-center sm:text-xl">
        <strong className="block text-lead">
          El Niño prep for every Filipino.
        </strong>{' '}
        A strong El Niño is here until mid-2027. See what it means for your
        province, then work through a checklist that saves on your phone.
      </p>
    </header>
  )
}
