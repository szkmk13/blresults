// Dodaj własne zdjęcia do public/images/ i zaktualizuj tę listę
const galleryImages: Array<{ src: string; alt: string }> = [
  // { src: "/images/gym-1.jpg", alt: "Strefa wolnych ciężarów" },
  // { src: "/images/gym-2.jpg", alt: "Maszyny cardio" },
  // { src: "/images/gym-3.jpg", alt: "Strefa funkcjonalna" },
  // { src: "/images/gym-4.jpg", alt: "Szatnia" },
  // { src: "/images/gym-5.jpg", alt: "Sala treningowa" },
  // { src: "/images/gym-6.jpg", alt: "Recepcja" },
];

const placeholders = [
  "Strefa wolnych ciężarów",
  "Maszyny cardio",
  "Strefa funkcjonalna",
  "Szatnia",
  "Sala treningowa",
  "Recepcja",
];

export default function Gallery() {
  const hasImages = galleryImages.length > 0;

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
          04 — Galeria
        </p>

        <h2
          className="text-4xl md:text-5xl font-black mb-12"
          style={{ color: "var(--text)" }}
        >
          Sala treningowa
        </h2>

        {hasImages ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${
                  i === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"
                }`}
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {placeholders.map((label, i) => (
              <div
                key={i}
                className={`flex items-center justify-center ${
                  i === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"
                }`}
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-xs tracking-wider uppercase"
                  style={{ color: "var(--text-faint)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
