import { getPlaceDetails, Review } from "@/lib/google-reviews";
import ReviewsClient from "./ReviewsClient";

const FALLBACK_REVIEWS: Review[] = [
  {
    author_name: "Kamil K.",
    rating: 5,
    text: "Trenowałem z Grzegorzem ponad pół roku. Świetnie ogarnął mi podstawy trójboju, ułożenie pod wyciskanie, aktywacje jakie wykonać przed treningiem. Miałem zawsze problem z przysiadem przez głębokość też wystarczyła mu godzina, żeby robić o wiele niżej. Serdecznie polecam współpracę i plany od Grzecha. Zyskanie świadomości treningowej wchodzi poziom wyżej.",
    relative_time_description: "miesiąc temu",
  },
  {
    author_name: "Gosia K.",
    rating: 5,
    text: "Leniwy, arogancki, prowadzący niezdrowy typ życia - tyle o mnie 😜 ale Grzegorz pokazał że i ze mnie może być dobrze wyglądający, i co najważniejsze, dobrze czujący się jegomość. Ponaprawiał mi MOCNO zdemolowane plecy, powzmacniał mi takie obszary, o których nie miałem pojęcia, że istnieją. Pokazał że siłownia to nie tylko bezmyślne przerzucanie żelastwa ale naprawdę bardzo ciekawy, wymagający i uzależniający sposób spędzania czasu. Z czystym sumieniem polecam Grześka jako personalnego!!!💪",
    relative_time_description: "2 miesiące temu",
  },
  {
    author_name: "Paweł U.",
    rating: 5,
    text: "Trener wykazuje się dużą wiedzą, profesjonalizmem i zaangażowaniem. Każdy trening jest dobrze zaplanowany i dostosowany do poziomu uczestników. Potrafi zmotywować do wysiłku, jednocześnie dbając o poprawną technikę i bezpieczeństwo. Tworzy przyjazną atmosferę, dzięki czemu treningi są efektywne i przyjemne.",
    relative_time_description: "3 miesiące temu",
  },
];

export default async function Reviews() {
  const { reviews, rating } = await getPlaceDetails();
  const displayReviews =
    reviews.length > 0 ? reviews.slice(0, 3) : FALLBACK_REVIEWS;

  const mapsUrl = `https://www.google.com/maps/place/?q=place_id:${process.env.PLACE_ID}`;

  return (
    <section
      id="reviews"
      className="py-24 md:py-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ReviewsClient reviews={displayReviews} rating={rating} mapsUrl={mapsUrl} />
      </div>
    </section>
  );
}
