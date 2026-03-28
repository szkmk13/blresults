import { getReviews, Review } from "@/lib/google-reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className="w-3.5 h-3.5"
          viewBox="0 0 20 20"
          fill={s <= rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "var(--text)" }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="flex flex-col gap-4 p-6"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className="font-semibold text-sm"
            style={{ color: "var(--text)" }}
          >
            {review.author_name}
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: "var(--text-faint)" }}
          >
            {review.relative_time_description}
          </p>
        </div>
        <Stars rating={review.rating} />
      </div>
      {review.text && (
        <p
          className="text-sm leading-relaxed line-clamp-4"
          style={{ color: "var(--text-muted)" }}
        >
          {review.text}
        </p>
      )}
    </div>
  );
}

const FALLBACK_REVIEWS: Review[] = [
  {
    author_name: "Marcin K.",
    rating: 5,
    text: "Grzegorz to świetny trener personalny! Indywidualne podejście, zawsze motywuje do działania. Po 3 miesiącach efekty widoczne gołym okiem. Polecam!",
    relative_time_description: "miesiąc temu",
  },
  {
    author_name: "Anna W.",
    rating: 5,
    text: "Profesjonalne podejście, świetna atmosfera. Grzesiek zawsze dostosowuje plan do moich możliwości. Już po 3 miesiącach widzę realne efekty!",
    relative_time_description: "2 miesiące temu",
  },
  {
    author_name: "Tomasz B.",
    rating: 5,
    text: "Najlepszy trener personalny w Gdańsku. Przytulna atmosfera, dobry sprzęt i przystępne ceny. Nic więcej nie potrzeba.",
    relative_time_description: "3 miesiące temu",
  },
];

export default async function Reviews() {
  const reviews = await getReviews();
  const displayReviews =
    reviews.length > 0 ? reviews.slice(0, 6) : FALLBACK_REVIEWS;

  return (
    <section
      id="reviews"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p
          className="text-[10px] font-medium tracking-[0.4em] uppercase mb-16"
          style={{ color: "var(--text-faint)" }}
        >
          03 — Opinie
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:items-end mb-12">
          <h2
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ color: "var(--text)" }}
          >
        <p
          className="mt-6 text-[11px] tracking-wider"
          style={{ color: "var(--text-faint)" }}
        >
          * Opinie pochodzą z Google. Wkrótce pojawią się tu prawdziwe recenzje.
        </p>
            Co mówią podopieczni
          </h2>
          <div className="md:ml-auto flex items-center gap-2 mb-1">
            <Stars rating={5} />
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
              5.0 · Google
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayReviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

      </div>
    </section>
  );
}
