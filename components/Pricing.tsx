const trainingPackages = [
  {
    name: "Pojedynczy trening",
    price: "160",
    note: "/ trening",
    validity: null,
    description:
      "Potrzebujesz jednorazowej pomocy albo chcesz zobaczyć jak pracuję z klientem zanim kupisz pełny pakiet? Ta opcja jest dla Ciebie.",
    perSession: null,
  },
  {
    name: "Pakiet 5 treningów",
    price: "750",
    note: "/ pakiet",
    validity: "ważny 35 dni",
    description:
      "Jesteś zdecydowany na współpracę i chcesz trenować raz w tygodniu? Wybierz ten pakiet.",
    perSession: "150 zł / trening",
  },
  {
    name: "Pakiet 9 treningów",
    price: "1300",
    note: "/ pakiet",
    validity: "ważny 35 dni",
    description:
      "Masz w planie trenować dwa razy w tygodniu? Ten pakiet to dla Ciebie najlepsza opcja.",
    perSession: "145 zł / trening",
  },
  {
    name: "Pakiet 13 treningów",
    price: "1820",
    note: "/ pakiet",
    validity: "ważny 35 dni",
    description:
      "Zakładasz 3 treningi w tygodniu? Wypróbuj ten pakiet i sprawdź jak zadowalające będą efekty po miesiącu.",
    perSession: "140 zł / trening",
  },
  {
    name: "Pakiet 25 treningów",
    price: "3400",
    note: "/ pakiet",
    validity: "ważny 70 dni",
    description:
      "Kujesz żelazo póki gorące i chcesz zarezerwować treningi na co najmniej 2 miesiące? Ten pakiet może Ci się spodobać.",
    perSession: "136 zł / trening",
    best: true,
  },
];

const onlineServices = [
  {
    name: "Plan treningowy",
    price: "250",
    note: "jednorazowo",
    features: [
      "Spersonalizowany schemat treningowy",
      "Dopasowany do celu, stażu i sprzętu",
      "Koniec z przypadkowymi ćwiczeniami",
    ],
    featured: false,
    cta: "Zamów plan",
  },
  {
    name: "Konsultacja + plan",
    price: "450",
    note: "jednorazowo",
    features: [
      "Spotkanie na żywo lub online",
      "Analiza techniki i eliminacja błędów",
      "Indywidualny plan treningowy",
      "Wiedza zawodnika → Twój plan",
    ],
    featured: true,
    cta: "Najlepszy start",
  },
  {
    name: "Współpraca online",
    price: "300",
    note: "/ miesiąc",
    features: [
      "Spersonalizowany plan treningowy",
      "Stały kontakt i wsparcie merytoryczne",
      "Korekta techniki wideo",
      "Dla osób z całej Polski",
    ],
    featured: false,
    cta: "Zacznij online",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 md:py-32"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p
          className="text-[10px] font-medium tracking-[0.4em] uppercase mb-16"
          style={{ color: "var(--text-faint)" }}
        >
          02 - Oferta
        </p>

        {/* ── Training sessions ─────────────────────── */}
        <h3
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          Treningi personalne - Gdańsk
        </h3>

        <div
          className="mb-20"
          style={{ border: "1px solid var(--border)" }}
        >
          {trainingPackages.map((pkg, i) => (
            <div
              key={pkg.name}
              className="grid md:grid-cols-[1fr_auto] gap-4 items-center p-6 md:p-8"
              style={{
                borderTop: i > 0 ? "1px solid var(--border)" : "none",
                backgroundColor: pkg.best ? "var(--bg-card)" : "transparent",
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    {pkg.name}
                  </span>
                  {pkg.best && (
                    <span
                      className="text-[10px] font-semibold tracking-[0.2em] uppercase px-2 py-0.5"
                      style={{
                        backgroundColor: "var(--accent)",
                        color: "var(--accent-text)",
                      }}
                    >
                      Najlepsza cena
                    </span>
                  )}
                  {pkg.validity && (
                    <span
                      className="text-[11px]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      · {pkg.validity}
                    </span>
                  )}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {pkg.description}
                </p>
              </div>
              <div className="flex items-baseline gap-1 md:text-right shrink-0">
                <span
                  className="text-3xl font-black"
                  style={{ color: "var(--text)" }}
                >
                  {pkg.price}
                </span>
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                  zł
                </span>
                {pkg.perSession && (
                  <span
                    className="text-[11px] ml-1"
                    style={{ color: "var(--text-faint)" }}
                  >
                    ({pkg.perSession})
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Online / plans ────────────────────────── */}
        <h3
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          Plany i współpraca online
        </h3>

        <div
          className="flex flex-col md:flex-row gap-px mb-8"
          style={{ backgroundColor: "var(--border)" }}
        >
          {onlineServices.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col flex-1 p-6 md:p-10"
              style={{
                backgroundColor: plan.featured
                  ? "var(--accent)"
                  : "var(--bg-card)",
              }}
            >
              {plan.featured && (
                <span
                  className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-6"
                  style={{ color: "var(--accent-text)", opacity: 0.6 }}
                >
                  Polecane
                </span>
              )}
              <h4
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
                style={{
                  color: plan.featured ? "var(--accent-text)" : "var(--text-muted)",
                  opacity: plan.featured ? 0.7 : 1,
                }}
              >
                {plan.name}
              </h4>
              <div className="mb-8">
                <span
                  className="text-4xl font-black"
                  style={{
                    color: plan.featured ? "var(--accent-text)" : "var(--text)",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-base ml-1"
                  style={{
                    color: plan.featured ? "var(--accent-text)" : "var(--text-muted)",
                    opacity: plan.featured ? 0.7 : 1,
                  }}
                >
                  zł {plan.note}
                </span>
              </div>
              <ul className="flex flex-col gap-3 flex-1 mb-10">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{
                      color: plan.featured ? "var(--accent-text)" : "var(--text-muted)",
                    }}
                  >
                    <span style={{ opacity: 0.5 }}>-</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center font-semibold py-3 px-6 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
                style={
                  plan.featured
                    ? {
                        backgroundColor: "var(--accent-text)",
                        color: "var(--accent)",
                      }
                    : {
                        border: "1px solid var(--border-strong)",
                        color: "var(--text)",
                      }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-sm" style={{ color: "var(--text-faint)" }}>
          Masz pytania?{" "}
          <a
            href="#contact"
            className="underline underline-offset-4 transition-opacity hover:opacity-60"
            style={{ color: "var(--text-muted)" }}
          >
            Napisz lub zadzwoń
          </a>{" "}
          - omówię co będzie najlepsze dla Ciebie.
        </p>
      </div>
    </section>
  );
}
