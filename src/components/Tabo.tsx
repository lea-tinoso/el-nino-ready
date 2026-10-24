// The mascot: a tired tabo under a sweating sun, standing on cracked ground.
export function Tabo() {
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
