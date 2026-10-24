const LINE = {
  stroke: 'var(--color-line)',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

// A pack of chilimansi pancit canton, drawn by hand. It has legs, like the tabo.
export function PancitCanton({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="-6 0 292 216"
      role="img"
      aria-label="A cartoon pack of chilimansi pancit canton"
      className={className}
    >
      <path
        className="steam"
        d="M120 40c-8-10 8-16 0-28"
        fill="none"
        strokeWidth={5}
        {...LINE}
      />
      <path
        className="steam steam-2"
        d="M150 40c-8-10 8-16 0-28"
        fill="none"
        strokeWidth={5}
        {...LINE}
      />
      <path
        d="M22 62 L258 62 L266 70 L258 78 L266 86 L258 94 L266 102 L258 110 L266 118 L258 126 L266 134 L258 142 L266 150 L258 158 L266 166 L258 174 L266 182 L258 190 L22 190 L14 182 L22 174 L14 166 L22 158 L14 150 L22 142 L14 134 L22 126 L14 118 L22 110 L14 102 L22 94 L14 86 L22 78 L14 70 Z"
        fill="var(--color-leaf)"
        strokeWidth={5}
        {...LINE}
      />
      <path
        d="M36 74h208M36 178h208"
        stroke="var(--color-leaf-dark)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray="2 10"
      />
      <circle
        cx="96"
        cy="126"
        r="50"
        fill="var(--color-white)"
        strokeWidth={5}
        {...LINE}
      />
      <circle cx="96" cy="126" r="38" fill="var(--color-noodle)" />
      <path
        d="M66 112c6-6 10 6 16 0s10 6 16 0 10 6 16 0M64 126c6-6 10 6 16 0s10 6 16 0 10 6 16 0 10 6 12 0M68 140c6-6 10 6 16 0s10 6 16 0 10 6 16 0"
        fill="none"
        stroke="var(--color-noodle-dark)"
        strokeWidth={3.5}
        strokeLinecap="round"
      />
      <ellipse cx="84" cy="116" rx="5" ry="6" fill="var(--color-ink-warm)" />
      <ellipse cx="110" cy="116" rx="5" ry="6" fill="var(--color-ink-warm)" />
      <circle cx="86" cy="114" r="1.6" fill="var(--color-white)" />
      <circle cx="112" cy="114" r="1.6" fill="var(--color-white)" />
      <path
        d="M90 127q7 7 14 0"
        fill="none"
        stroke="var(--color-ink-warm)"
        strokeWidth={3.5}
        strokeLinecap="round"
      />
      <ellipse cx="74" cy="128" rx="5" ry="3" fill="var(--color-pink)" />
      <ellipse cx="120" cy="128" rx="5" ry="3" fill="var(--color-pink)" />
      {[
        [78, 148],
        [114, 150],
      ].map(([cx, cy]) => (
        <g key={cx}>
          <circle
            cx={cx}
            cy={cy}
            r="10"
            fill="var(--color-calamansi)"
            strokeWidth={3.5}
            {...LINE}
          />
          <circle cx={cx} cy={cy} r="5" fill="var(--color-pulp)" />
        </g>
      ))}
      <path
        d="M132 86c10 4 16 14 14 26-6-8-12-14-20-18z"
        fill="var(--color-post)"
        strokeWidth={3.5}
        {...LINE}
      />
      <path
        d="M128 90l-6-8"
        stroke="var(--color-leaf)"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <rect
        x="156"
        y="88"
        width="88"
        height="30"
        rx="15"
        fill="var(--color-post)"
        strokeWidth={4}
        {...LINE}
      />
      <g
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="800"
        fill="var(--color-cream)"
      >
        <text x="200" y="109" fontSize="15">
          PANCIT
        </text>
        <text x="200" y="140" fontSize="19">
          CANTON
        </text>
      </g>
      <rect
        x="160"
        y="150"
        width="80"
        height="20"
        rx="10"
        fill="var(--color-cream)"
        strokeWidth={3}
        {...LINE}
      />
      <text
        x="200"
        y="165"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="800"
        fontSize="11"
        fill="var(--color-line)"
      >
        CHILIMANSI
      </text>
      <path
        d="M16 126c-14 0-20-12-18-22M264 126c14 0 20-14 16-26M100 190v20h-12M180 190v20h12"
        fill="none"
        strokeWidth={5}
        {...LINE}
      />
    </svg>
  )
}
