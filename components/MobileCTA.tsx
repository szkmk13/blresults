"use client";

export default function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden"
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--bg)",
      }}
    >
      <a
        href="tel:+48509745321"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-xs font-semibold tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
        style={{ color: "var(--text)" }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.73h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.34a16 16 0 0 0 5.75 5.75l1.67-1.67a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Zadzwoń
      </a>
      <div style={{ width: "1px", backgroundColor: "var(--border)" }} />
      <a
        href="#form"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-xs font-semibold tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
        style={{
          backgroundColor: "var(--accent)",
          color: "var(--accent-text)",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Napisz
      </a>
    </div>
  );
}
