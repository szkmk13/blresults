"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function About({ rating }: { rating?: number | null }) {
  const [sectionRef, sectionInView] = useInView<HTMLElement>();
  const [textRef, textInView] = useInView<HTMLDivElement>();
  const [photoRef, photoInView] = useInView<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p
          className={`text-[10px] font-medium tracking-[0.4em] uppercase mb-16 anim-fade-in${sectionInView ? " is-visible" : ""}`}
          style={{ color: "var(--text-faint)" }}
        >
          01 - O mnie
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div
            ref={textRef}
            className={`anim-fade-left${textInView ? " is-visible" : ""}`}
          >
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

            {/* Stat tiles */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { value: "7 lat", label: "doświadczenia" },
                { value: "200+", label: "klientów" },
                { value: `★ ${(rating ?? 5.0).toFixed(1)}`, label: "ocena Google" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="py-4 px-3 text-center"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <div
                    className="text-lg font-black leading-none mb-1"
                    style={{ color: "var(--text)" }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-[9px] tracking-[0.15em] uppercase"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col gap-5 text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Nazywam się Grzegorz Bala i od blisko 7 lat zawodowo zajmuję się
                pomocą takim jak Ty na sali treningowej. Wiedzę stale weryfikuję
                w praktyce — jako zawodnik{" "}
                <span style={{ color: "var(--text)", fontWeight: 600 }}>
                  Trójboju Siłowego
                </span>
                .
              </p>
              <p>
                Stawiam na wzajemne zrozumienie i indywidualne podejście — prowadzę{" "}
                <span style={{ color: "var(--text)", fontWeight: 600 }}>
                  sesje indywidualne oraz w parach
                </span>
                , budując sprawność w sposób bezpieczny, zdrowy i trwały. Niezależnie
                od Twojego stażu.
              </p>
            </div>

            <a
              href="#form"
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
          <div
            ref={photoRef}
            className={`relative overflow-hidden aspect-[4/5] md:aspect-auto md:min-h-[520px] anim-fade-right${photoInView ? " is-visible" : ""}`}
            style={{ backgroundColor: "var(--bg-card)" }}
          >
            <Image
              src="/images/grzegorz.png"
              alt="Grzegorz Bala - trener personalny Gdańsk, BL Results"
              fill
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
