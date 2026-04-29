"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

const images = [
  { src: "/images/konferencja1.JPG", alt: "Grzegorz Bala jako prelegent na konferencji branżowej", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/konferencja2.JPG", alt: "Grzegorz Bala - wystąpienie na konferencji trenerskiej", sizes: "(max-width: 768px) 50vw, 25vw" },
  { src: "/images/szkoleniowiec.JPG", alt: "Grzegorz Bala prowadzący szkolenie dla trenerów personalnych", sizes: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 17vw" },
  { src: "/images/szkoleniowiec2.JPG", alt: "Grzegorz Bala - szkolenie z trójboju siłowego Gdańsk", sizes: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 17vw" },
  { src: "/images/szkoleniowiec3.JPG", alt: "Grzegorz Bala jako szkoleniowiec - warsztat treningowy", sizes: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 17vw" },
];

export default function Prelegent() {
  const [sectionRef, sectionInView] = useInView<HTMLElement>();
  const [textRef, textInView] = useInView<HTMLDivElement>();
  const [gridRef, gridInView] = useInView<HTMLDivElement>();

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imgLoading, setImgLoading] = useState(false);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => { setImgLoading(true); setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)); }, []);
  const next = useCallback(() => { setImgLoading(true); setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)); }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <>
      <section
        id="prelegent"
        ref={sectionRef}
        className="py-24 md:py-32"
        style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className={`text-[10px] font-medium tracking-[0.4em] uppercase mb-16 anim-fade-in${sectionInView ? " is-visible" : ""}`}
            style={{ color: "var(--text-faint)" }}
          >
            02 - Prelegent
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
                  <button
                    key={img.src}
                    onClick={() => { setImgLoading(true); setLightboxIndex(i); }}
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
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                {images.slice(2).map((img, i) => (
                  <button
                    key={img.src}
                    onClick={() => { setImgLoading(true); setLightboxIndex(i + 2); }}
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
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
          onClick={close}
        >
          {/* Image */}
          <div
            className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center px-16 py-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className={`object-contain transition-opacity duration-300 ${imgLoading ? "opacity-0" : "opacity-100"}`}
                sizes="100vw"
                onLoad={() => setImgLoading(false)}
              />
              {imgLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
                    style={{ borderColor: "rgba(255,255,255,0.3)", borderTopColor: "transparent" }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-60"
            style={{ color: "#fff" }}
            aria-label="Zamknij"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center transition-opacity hover:opacity-60"
            style={{ color: "#fff" }}
            aria-label="Poprzednie"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <polyline points="15 18 9 12 15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center transition-opacity hover:opacity-60"
            style={{ color: "#fff" }}
            aria-label="Następne"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <polyline points="9 18 15 12 9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Counter */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
