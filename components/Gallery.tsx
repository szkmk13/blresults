"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const images = [
  { src: "/images/konferencja1.JPG", alt: "Grzegorz Bala jako prelegent na konferencji branżowej", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/konferencja2.JPG", alt: "Grzegorz Bala - wystąpienie na konferencji trenerskiej", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/szkoleniowiec.JPG", alt: "Grzegorz Bala prowadzący szkolenie dla trenerów personalnych", sizes: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 17vw" },
  { src: "/images/szkoleniowiec2.JPG", alt: "Grzegorz Bala - szkolenie z trójboju siłowego Gdańsk", sizes: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 17vw" },
  { src: "/images/szkoleniowiec3.JPG", alt: "Grzegorz Bala jako szkoleniowiec - warsztat treningowy", sizes: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 17vw" },
];

export default function Gallery() {
  const [sectionRef, sectionInView] = useInView<HTMLElement>();
  const [textRef, textInView] = useInView<HTMLDivElement>();
  const [gridRef, gridInView] = useInView<HTMLDivElement>();

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p
          className={`text-[10px] font-medium tracking-[0.4em] uppercase mb-16 anim-fade-in${sectionInView ? " is-visible" : ""}`}
          style={{ color: "var(--text-faint)" }}
        >
          04 - Prelegent
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div
            ref={textRef}
            className={`anim-fade-left${textInView ? " is-visible" : ""}`}
          >
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

          <div ref={gridRef} className="flex flex-col gap-1">
            <div className="grid grid-cols-2 gap-1">
              {images.slice(0, 2).map((img, i) => (
                <div
                  key={img.src}
                  className={`relative overflow-hidden aspect-[3/4] anim-fade-in${gridInView ? " is-visible" : ""}`}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    ...(gridInView ? { animationDelay: `${i * 100}ms` } : {}),
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes={img.sizes}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {images.slice(2).map((img, i) => (
                <div
                  key={img.src}
                  className={`${i === 2 ? "hidden sm:block " : ""}relative overflow-hidden aspect-[3/4] anim-fade-in${gridInView ? " is-visible" : ""}`}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    ...(gridInView ? { animationDelay: `${(i + 2) * 100}ms` } : {}),
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes={img.sizes}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
