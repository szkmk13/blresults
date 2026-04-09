import Image from "next/image";

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

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
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
                <Image
                  src="/images/konferencja1.JPG"
                  alt="Konferencja - wystąpienie"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--bg-card)" }}>
                <Image
                  src="/images/konferencja2.JPG"
                  alt="Konferencja - prelekcja"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              <div className="relative overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--bg-card)" }}>
                <Image
                  src="/images/szkoleniowiec.JPG"
                  alt="Szkoleniowiec - szkolenie"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 17vw"
                />
              </div>
              <div className="relative overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--bg-card)" }}>
                <Image
                  src="/images/szkoleniowiec2.JPG"
                  alt="Szkoleniowiec - szkolenie"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 17vw"
                />
              </div>
              <div className="hidden sm:block relative overflow-hidden aspect-[3/4]" style={{ backgroundColor: "var(--bg-card)" }}>
                <Image
                  src="/images/szkoleniowiec3.JPG"
                  alt="Szkoleniowiec - szkolenie"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 17vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
