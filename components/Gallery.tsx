export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p
          className="text-[10px] font-medium tracking-[0.4em] uppercase mb-16"
          style={{ color: "var(--text-faint)" }}
        >
          04 - Prelegent
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight mb-6"
              style={{ color: "var(--text)" }}
            >
              Działam też jako prelegent i szkoleniowiec.
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Swoją wiedzą na temat treningu siłowego i trójboju dzielę się nie tylko na sali, ale również ze sceny. Biorę udział w konferencjach branżowych jako prelegent oraz prowadzę szkolenia, przekazując praktyczne doświadczenie trenerskie szerszemu gronu słuchaczy.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="grid grid-cols-2 gap-1">
              <div className="relative overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--bg-card)" }}>
                <img
                  src="/images/konferencja1.JPG"
                  alt="Konferencja - wystąpienie"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="relative overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--bg-card)" }}>
                <img
                  src="/images/konferencja2.JPG"
                  alt="Konferencja - prelekcja"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="relative overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--bg-card)" }}>
                <img
                  src="/images/szkoleniowiec.JPG"
                  alt="Szkoleniowiec - szkolenie"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="relative overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--bg-card)" }}>
                <img
                  src="/images/szkoleniowiec2.JPG"
                  alt="Szkoleniowiec - szkolenie"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="relative overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--bg-card)" }}>
                <img
                  src="/images/szkoleniowiec3.JPG"
                  alt="Szkoleniowiec - szkolenie"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
