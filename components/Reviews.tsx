import { getReviews, Review } from "@/lib/google-reviews";
import ReviewsClient from "./ReviewsClient";

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
        <ReviewsClient reviews={displayReviews} />
      </div>
    </section>
  );
}
