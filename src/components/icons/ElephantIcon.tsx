export default function ElephantIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 70" fill="none" className={className} aria-hidden="true">
      <circle cx="70" cy="18" r="9" stroke="currentColor" strokeWidth="2" />
      <ellipse
        cx="42"
        cy="40"
        rx="26"
        ry="16"
        fill="var(--ivory, #fff)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="70" cy="32" r="14" fill="var(--ivory, #fff)" stroke="currentColor" strokeWidth="2" />

      <path
        d="M82 36c5 5 4 13-2 18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M80 42l4 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="74" cy="28" r="1.4" fill="currentColor" />

      <path d="M22 52v11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 54v11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 54v11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M60 52v11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      <path d="M17 36q-5 2-3 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
