export default function BellIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 28" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="1.6" r="1.3" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M12 3.4a7 7 0 0 1 7 7v3c0 3.2 1.8 5 1.8 5H3.2S5 16.6 5 13.4v-3a7 7 0 0 1 7-7Z"
        fill="currentColor"
      />
      <rect x="9" y="19" width="6" height="2.4" rx="1.2" fill="currentColor" />
      <circle cx="12" cy="24.4" r="2" fill="currentColor" />
    </svg>
  );
}
