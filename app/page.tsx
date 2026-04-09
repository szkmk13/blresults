import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Reviews />
        <Gallery />
        <Contact />
        <ContactForm />
      </main>
      <footer
        className="py-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs tracking-wider"
            style={{ color: "var(--text-faint)" }}
          >
            © {new Date().getFullYear()} Grzegorz Bala - BL Results
          </p>
          <div className="flex gap-6">
            {["O mnie", "Oferta", "Kontakt"].map((label, i) => (
              <a
                key={i}
                href={`#${["about", "pricing", "contact"][i]}`}
                className="text-xs tracking-wider transition-opacity hover:opacity-60"
                style={{ color: "var(--text-faint)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
