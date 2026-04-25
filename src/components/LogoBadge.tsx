/**
 * Circular badge logo placeholder.
 * Final mark from ASSETS/LOGOS/GLOBAL FORK BADGE SDCA.png will replace
 * this in P1 once it's exported as SVG.
 */
export default function LogoBadge({ size = 88 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Global Fork — San Diego, CA"
      className="select-none"
    >
      <defs>
        <path
          id="badge-top"
          d="M 50 50 m -38 0 a 38 38 0 1 1 76 0"
          fill="none"
        />
        <path
          id="badge-bottom"
          d="M 50 50 m -38 0 a 38 38 0 1 0 76 0"
          fill="none"
        />
      </defs>
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <text fill="currentColor" fontSize="7.5" fontWeight="700" letterSpacing="2.5">
        <textPath href="#badge-top" startOffset="50%" textAnchor="middle">
          · GLOBAL · FORK ·
        </textPath>
      </text>
      <text fill="currentColor" fontSize="6" fontWeight="500" letterSpacing="3">
        <textPath href="#badge-bottom" startOffset="50%" textAnchor="middle">
          SAN&nbsp;DIEGO · CA
        </textPath>
      </text>
      {/* Stylized GF monogram in the center — placeholder geometry */}
      <g transform="translate(50 50)" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle r="14" />
        <path d="M -8 -4 L -8 6 M -8 1 L -2 1" />
        <path d="M 2 -4 L 8 -4 M 2 -4 L 2 6 M 2 1 L 7 1" />
        <line x1="-14" y1="0" x2="14" y2="0" strokeWidth="0.8" />
        <line x1="0" y1="-14" x2="0" y2="14" strokeWidth="0.8" />
      </g>
    </svg>
  );
}
