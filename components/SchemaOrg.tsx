export default function SchemaOrg() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BL Results — Grzegorz Bala Trener Personalny",
      description:
        "Grzegorz Bala — trener personalny i instruktor trójboju siłowego w Gdańsku. Wspólna praca — Twoje REZULTATY. Treningi indywidualne i w parach.",
      slogan: "Wspólna praca — Twoje REZULTATY",
      url: "https://blresults.pl",
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
          opens: "06:00",
          closes: "22:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: ["https://www.instagram.com/grzesiek_bl/"],
      priceRange: "$$",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Grzegorz Bala",
      jobTitle: "Trener personalny, instruktor trójboju siłowego",
      url: "https://blresults.pl",
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
