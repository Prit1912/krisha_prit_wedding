export default function GanpatiIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <circle cx="50" cy="54" r="46" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle
        cx="50"
        cy="54"
        r="40"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="1 5"
        opacity="0.55"
      />

      {/* crown */}
      <path
        d="M39 30Q50 12 61 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="50" cy="11" r="3" fill="currentColor" />

      {/* ears */}
      <circle cx="23" cy="52" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="77" cy="52" r="14" stroke="currentColor" strokeWidth="2" />

      {/* head */}
      <circle cx="50" cy="52" r="22" stroke="currentColor" strokeWidth="2" fill="var(--ivory, #fff)" />

      {/* tilak */}
      <path d="M50 34v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* eyes */}
      <circle cx="43" cy="52" r="1.8" fill="currentColor" />
      <circle cx="57" cy="52" r="1.8" fill="currentColor" />

      {/* tusk */}
      <path d="M60 66l5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

      {/* trunk */}
      <path
        d="M48 70c-4 6 6 10 0 17-3 3.4 0 7.6 5 6.4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
