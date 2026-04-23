"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Full logo */}
        <div className={`flex justify-center mb-12 anim-fade-in${mounted ? " is-visible" : ""}`}>
          <Image
            src="/images/bl_full-removebg-preview.png"
            alt="BL-Results - Powerlifting & Personal Training"
            width={480}
            height={120}
            priority
            className="w-72 md:w-96 lg:w-[480px] h-auto dark:invert"
            style={{ height: "auto" }}
          />
        </div>

        {/* Divider */}
        <div
          className={`w-12 h-px mx-auto mb-8 anim-fade-in${mounted ? " is-visible" : ""}`}
          style={{
            backgroundColor: "var(--border-strong)",
            ...(mounted ? { animationDelay: "100ms" } : {}),
          }}
        />

        <h1
          className={`text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed anim-fade-up${mounted ? " is-visible" : ""}`}
          style={{
            color: "var(--text-muted)",
            fontWeight: "inherit",
            ...(mounted ? { animationDelay: "200ms" } : {}),
          }}
        >
          Grzegorz Bala - trener personalny i instruktor trójboju siłowego
          z&nbsp;7-letnim doświadczeniem. Treningi indywidualne i&nbsp;w&nbsp;parach.
        </h1>

        <div
          className={`flex flex-col sm:flex-row gap-3 justify-center anim-fade-up${mounted ? " is-visible" : ""}`}
          style={mounted ? { animationDelay: "400ms" } : undefined}
        >
          <a
            href="#pricing"
            className="inline-block font-semibold py-4 px-10 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-text)",
            }}
          >
            Zobacz ofertę
          </a>
          <a
            href="#about"
            className="inline-block font-semibold py-4 px-10 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
            style={{
              border: "1px solid var(--border-strong)",
              color: "var(--text)",
            }}
          >
            O mnie
          </a>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 anim-fade-in${mounted ? " is-visible" : ""}`}
        style={{
          color: "var(--text-faint)",
          ...(mounted ? { animationDelay: "600ms" } : {}),
        }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Przewiń</span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, var(--text-faint), transparent)",
          }}
        />
      </div>
    </section>
  );
}
