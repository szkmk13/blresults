import { Review } from "@/lib/google-reviews";
import { HOURS } from "@/lib/hours";

const siteUrl = "https://bl-results.pl";

const trainingOffers = [
  {
    name: "Pojedynczy trening personalny",
    price: "160",
    description: "Jednorazowe wsparcie lub próbna sesja przed zakupem pakietu.",
  },
  {
    name: "Pakiet 5 treningów personalnych",
    price: "750",
    description: "Idealny przy jednym treningu tygodniowo. Ważny 35 dni.",
  },
  {
    name: "Pakiet 9 treningów personalnych",
    price: "1300",
    description: "Dla osób trenujących dwa razy w tygodniu. Ważny 35 dni.",
  },
  {
    name: "Pakiet 13 treningów personalnych",
    price: "1820",
    description: "Trzy treningi tygodniowo przez miesiąc. Ważny 35 dni.",
  },
  {
    name: "Pakiet 25 treningów personalnych",
    price: "3400",
    description: "Najlepsza stawka – treningi na dwa miesiące. Ważny 70 dni.",
  },
  {
    name: "Plan treningowy online",
    price: "250",
    description: "Spersonalizowany schemat treningowy, jednorazowo.",
  },
  {
    name: "Konsultacja i indywidualny plan treningowy",
    price: "450",
    description: "Spotkanie na żywo lub online, analiza techniki i plan treningowy.",
  },
  {
    name: "Miesięczna współpraca online",
    price: "300",
    description:
      "Miesięczna współpraca z planem treningowym, stałym kontaktem i korektą techniki wideo.",
  },
];

export default function SchemaOrg({
  rating,
  reviewCount,
  reviews,
}: {
  rating?: number | null;
  reviewCount?: number | null;
  reviews?: Review[];
}) {
  const localBusiness: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "BL Results - Grzegorz Bala Trener Personalny",
    description:
      "Grzegorz Bala - trener personalny i instruktor trójboju siłowego Gdańsk Orunia. Wspólna praca - Twoje REZULTATY. Treningi indywidualne i w parach.",
    slogan: "Wspólna praca - Twoje REZULTATY",
    url: siteUrl,
    image: `${siteUrl}/images/grzegorz.png`,
    telephone: "+48509745321",
    email: "grzesiek_bl@wp.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Trakt Świętego Wojciecha 243",
      addressLocality: "Gdańsk",
      postalCode: "80-058",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 54.31267748519942,
      longitude: 18.629732219902877,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: HOURS.weekdays.opens,
        closes: HOURS.weekdays.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: HOURS.saturday.opens,
        closes: HOURS.saturday.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: HOURS.sunday.opens,
        closes: HOURS.sunday.closes,
      },
    ],
    sameAs: ["https://www.instagram.com/grzesiek_bl/"],
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi treningowe BL Results",
      itemListElement: trainingOffers.map((offer) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: offer.name,
          description: offer.description,
        },
        price: offer.price,
        priceCurrency: "PLN",
        areaServed: {
          "@type": "City",
          name: "Gdańsk",
        },
      })),
    },
  };

  if (rating !== null && rating !== undefined && reviewCount) {
    localBusiness.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: rating.toFixed(1),
      reviewCount,
      bestRating: "5",
      worstRating: "1",
    };
  }

  if (reviews && reviews.length > 0) {
    localBusiness.review = reviews
      .filter((r) => r.text)
      .map((r) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: r.author_name,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.rating,
          bestRating: 5,
          worstRating: 1,
        },
        reviewBody: r.text,
      }));
  }

  const schema = [
    localBusiness,
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Grzegorz Bala",
      jobTitle: "Trener personalny, instruktor trójboju siłowego",
      url: siteUrl,
      image: `${siteUrl}/images/grzegorz.png`,
      sameAs: ["https://www.instagram.com/grzesiek_bl/"],
      worksFor: {
        "@type": "LocalBusiness",
        name: "BL Results",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
