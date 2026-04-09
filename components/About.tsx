export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p
          className="text-[10px] font-medium tracking-[0.4em] uppercase mb-16"
          style={{ color: "var(--text-faint)" }}
        >
          01 - O mnie
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight mb-2"
              style={{ color: "var(--text)" }}
            >
              Grzegorz Bala
            </h2>
            <p
              className="text-sm font-medium tracking-wider mb-10 italic"
              style={{ color: "var(--text-muted)" }}
            >
              Trener personalny · Instruktor trójboju siłowego
            </p>

            <div
              className="flex flex-col gap-5 text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Nazywam się Grzegorz Bala i od blisko 7 lat zawodowo zajmuję się
                pomocą takim jak Ty na sali treningowej. Moja obecność w sporcie to
                nie tylko lata spędzone na siłowni, ale przede wszystkim nieustanne
                weryfikowanie wiedzy w praktyce - jako zawodnik{" "}
                <span style={{ color: "var(--text)", fontWeight: 600 }}>
                  Trójboju Siłowego
                </span>
                .
              </p>
              <p>
                W BL-Results wierzę, że fundamentem sukcesu są wspólna praca i
                Twoje rezultaty. Jako{" "}
                <span style={{ color: "var(--text)", fontWeight: 600 }}>
                  trener personalny oraz instruktor trójboju siłowego
                </span>{" "}
                nie tylko pokazuję Ci, jak bezpiecznie dźwigać - przechodzę przez
                ten proces razem z Tobą.
              </p>
              <p>
                Stawiam na wzajemne zrozumienie i różnorodność, dzięki czemu na
                sali nie ma miejsca na nudę - niezależnie od Twojego stażu.
                Prowadzę treningi zarówno dla młodszych, jak i starszych
                podopiecznych, oferując{" "}
                <span style={{ color: "var(--text)", fontWeight: 600 }}>
                  sesje indywidualne oraz w parach
                </span>
                . Buduję sprawność w sposób bezpieczny, zdrowy i trwały.
              </p>
              <p
                className="text-base font-semibold"
                style={{ color: "var(--text)" }}
              >
                Gotowy, by Twoje zaangażowanie zamienić w realne Rezultaty?
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block mt-10 font-semibold py-3 px-8 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--accent-text)",
              }}
            >
              Porozmawiajmy
            </a>
          </div>

          {/* Photo */}
          <div className="relative overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
            <img
              src="/images/konferencja2.JPG"
              alt="Grzegorz Bala - konferencja"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
