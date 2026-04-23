"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "O mnie" },
  { href: "#pricing", label: "Oferta" },
  { href: "#reviews", label: "Opinie" },
  { href: "#gallery", label: "Galeria" },
  { href: "#form", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          {/* Desktop: SVG logo — plain img, Next Image adds no value for SVGs */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/glogo.svg"
            alt="BL Results"
            loading="eager"
            className="hidden md:block dark:invert"
            style={{ height: "2.25rem", width: "auto" }}
          />
          {/* Mobile: full logo */}
          <Image
            src="/images/bl_full-removebg-preview.png"
            alt="BL-Results - Powerlifting & Personal Training"
            width={160}
            height={40}
            className="md:hidden dark:invert"
            style={{ height: "2rem", width: "auto" }}
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium tracking-[0.15em] uppercase transition-opacity hover:opacity-50"
                style={{ color: "var(--text)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-3"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className="block w-5 h-px transition-transform origin-center"
              style={{
                backgroundColor: "var(--text)",
                transform: menuOpen ? "rotate(45deg) translate(1px, 2px)" : "none",
              }}
            />
            <span
              className="block w-5 h-px transition-opacity"
              style={{
                backgroundColor: "var(--text)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-px transition-transform origin-center"
              style={{
                backgroundColor: "var(--text)",
                transform: menuOpen ? "rotate(-45deg) translate(1px, -2px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "var(--bg)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} style={{ borderBottom: "1px solid var(--border)" }}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 text-xs font-medium tracking-[0.15em] uppercase transition-opacity hover:opacity-50"
                  style={{ color: "var(--text)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
