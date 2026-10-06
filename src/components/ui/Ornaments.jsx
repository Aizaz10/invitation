/* Geometric ornaments — all decorative, hidden from assistive tech. */

export function Star8({ className = '', filled = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <rect x="5.5" y="5.5" width="13" height="13" />
      <rect x="5.5" y="5.5" width="13" height="13" transform="rotate(45 12 12)" />
      {!filled && <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />}
    </svg>
  )
}

export function Divider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-linear-to-r from-transparent to-current opacity-70 sm:w-20" />
      <span className="size-1 rotate-45 bg-current opacity-70" />
      <Star8 className="size-4" />
      <span className="size-1 rotate-45 bg-current opacity-70" />
      <span className="h-px w-12 bg-linear-to-l from-transparent to-current opacity-70 sm:w-20" />
    </div>
  )
}

export function VerticalDivider({ className = '' }) {
  return (
    <div className={`flex-col items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-24 w-px bg-linear-to-b from-transparent to-current opacity-70" />
      <span className="size-1 rotate-45 bg-current opacity-70" />
      <Star8 className="size-5" />
      <span className="size-1 rotate-45 bg-current opacity-70" />
      <span className="h-24 w-px bg-linear-to-t from-transparent to-current opacity-70" />
    </div>
  )
}

function CornerOrnament({ className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M1 63V1h62" />
      <path d="M7 50V7h43" opacity=".5" />
      <rect x="12" y="12" width="8" height="8" transform="rotate(45 16 16)" />
      <circle cx="1" cy="1" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Four geometric corners framing a positioned parent. */
export function FrameCorners({ className = '' }) {
  const positions = [
    'left-0 top-0',
    'right-0 top-0 rotate-90',
    'right-0 bottom-0 rotate-180',
    'left-0 bottom-0 -rotate-90',
  ]
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      {positions.map((pos) => (
        <CornerOrnament key={pos} className={`absolute size-10 sm:size-14 ${pos}`} />
      ))}
    </div>
  )
}

/** Pointed mihrab arch (double line). Stretches to its box. */
export function ArchFrame({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 300"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        d="M3 297V112C3 62 48 32 100 3c52 29 97 59 97 109v185z"
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M12 288V116C12 72 52 44 100 16c48 28 88 56 88 100v172z"
        strokeWidth="0.75"
        opacity=".5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function Flourish({ className = '' }) {
  return (
    <svg
      viewBox="0 0 320 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M0 20h112M208 20h112" opacity=".45" />
      <circle cx="98" cy="20" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="222" cy="20" r="1.6" fill="currentColor" stroke="none" />
      <path d="M116 20l10-7 10 7-10 7z" />
      <path d="M184 20l10-7 10 7-10 7z" />
      <path d="M136 20h8M176 20h8" />
      <rect x="151" y="11" width="18" height="18" />
      <rect x="151" y="11" width="18" height="18" transform="rotate(45 160 20)" />
      <circle cx="160" cy="20" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}
