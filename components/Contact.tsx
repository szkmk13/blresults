const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.4404535872487!2d18.629732219902877!3d54.31267748519942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd739b50918f79%3A0x4a3e0f02af39a94a!2sTrener%20Grzegorz%20Bala!5e0!3m2!1spl!2spl!4v1773931437052!5m2!1spl!2spl";

const contactInfo = [
  {
    label: "Adres",
    lines: ["Trakt Świętego Wojciecha 243", "80-058 Gdańsk"],
  },
  {
    label: "Telefon",
    lines: ["+48 509 745 321"],
    href: "tel:+48509745321",
  },
  {
    label: "E-mail",
    lines: ["grzesiek_bl@wp.pl"],
    href: "mailto:grzesiek_bl@wp.pl",
  },
  {
    label: "Godziny otwarcia",
    lines: ["Pon–Pt: 6:00 – 22:00", "Sob: 8:00 – 20:00", "Niedz: 9:00 – 18:00"],
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p
          className="text-[10px] font-medium tracking-[0.4em] uppercase mb-16"
          style={{ color: "var(--text-faint)" }}
        >
          05 — Kontakt
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-black mb-12 leading-tight"
              style={{ color: "var(--text)" }}
            >
              Napisz
              <br />
              do mnie
            </h2>

            <div className="flex flex-col gap-8">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-8"
                  style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}
                >
                  <span
                    className="text-[10px] font-medium tracking-[0.2em] uppercase w-24 shrink-0 pt-0.5"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {item.label}
                  </span>
                  <div>
                    {item.lines.map((line, i) =>
                      item.href && i === 0 ? (
                        <a
                          key={i}
                          href={item.href}
                          className="block text-sm font-medium transition-opacity hover:opacity-60"
                          style={{ color: "var(--text)" }}
                        >
                          {line}
                        </a>
                      ) : (
                        <p
                          key={i}
                          className="text-sm"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* Instagram */}
              <div
                style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}
                className="flex gap-8"
              >
                <span
                  className="text-[10px] font-medium tracking-[0.2em] uppercase w-24 shrink-0 pt-0.5"
                  style={{ color: "var(--text-faint)" }}
                >
                  Instagram
                </span>
                <a
                  href="https://www.instagram.com/grzesiek_bl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
                  style={{ color: "var(--text)" }}
                  aria-label="Instagram @grzesiek_bl"
                >
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @grzesiek_bl
                </a>
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div
            className="overflow-hidden"
            style={{
              border: "1px solid var(--border)",
            }}
          >
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja BL Results — Grzegorz Bala"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
