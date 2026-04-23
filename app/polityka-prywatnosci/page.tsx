import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności serwisu BL Results - Grzegorz Bala Trener Personalny Gdańsk. Informacje o przetwarzaniu danych osobowych.",
  robots: { index: false, follow: false },
};

export default function PolitykaPrywatnosci() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link
        href="/"
        className="text-[10px] tracking-[0.3em] uppercase transition-opacity hover:opacity-60 mb-12 inline-block"
        style={{ color: "var(--text-faint)" }}
      >
        ← Powrót
      </Link>

      <h1 className="text-4xl font-black mb-2" style={{ color: "var(--text)" }}>
        Polityka prywatności
      </h1>
      <p className="text-sm mb-12" style={{ color: "var(--text-faint)" }}>
        Ostatnia aktualizacja: kwiecień 2026
      </p>

      <div
        className="flex flex-col gap-10 text-sm leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        <section>
          <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
            1. Administrator danych
          </h2>
          <p>
            Administratorem danych osobowych jest Grzegorz Bala prowadzący działalność pod nazwą{" "}
            <strong style={{ color: "var(--text)" }}>BL Results</strong>, ul. Jana Strakowskiego 9 lok. 5
80-418 Gdańsk, NIP: 5842882115.
          </p>
          <p className="mt-3">
            Kontakt:{" "}
            <a
              href="mailto:grzesiek_bl@wp.pl"
              className="underline underline-offset-2"
              style={{ color: "var(--text)" }}
            >
              grzesiek_bl@wp.pl
            </a>{" "}
            ·{" "}
            <a
              href="tel:+48509745321"
              className="underline underline-offset-2"
              style={{ color: "var(--text)" }}
            >
              +48 509 745 321
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
            2. Jakie dane zbieramy i w jakim celu
          </h2>
          <p>
            Poprzez formularz kontaktowy na stronie zbieramy następujące dane: imię, numer
            telefonu, adres e-mail (opcjonalnie) oraz odpowiedzi na pytania dotyczące Twoich celów
            treningowych.
          </p>
          <p className="mt-3">
            Dane są przetwarzane wyłącznie w celu udzielenia odpowiedzi na zapytanie i nawiązania
            współpracy treningowej (podstawa prawna: art. 6 ust. 1 lit. b RODO - podjęcie działań
            przed zawarciem umowy).
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
            3. Czas przechowywania danych
          </h2>
          <p>
            Dane osobowe przechowujemy przez czas niezbędny do obsługi zapytania, a po nawiązaniu
            współpracy - przez czas jej trwania i okres wymagany przez przepisy prawa. Dane
            niezaakceptowanych zapytań usuwamy po 90 dniach.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
            4. Odbiorcy danych
          </h2>
          <p>
            Twoje dane nie są sprzedawane ani udostępniane podmiotom trzecim w celach marketingowych.
            W celu obsługi technicznej serwisu korzystamy z:
          </p>
          <ul className="list-disc list-inside mt-3 flex flex-col gap-1">
            <li>
              <strong style={{ color: "var(--text)" }}>Vercel Inc.</strong> - hosting strony i
              anonimowa analityka (Vercel Analytics)
            </li>
            <li>
              <strong style={{ color: "var(--text)" }}>Cloudflare Inc.</strong> - weryfikacja CAPTCHA
              (Turnstile) chroniąca formularz przed spamem
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
            5. Twoje prawa
          </h2>
          <p>Przysługuje Ci prawo do:</p>
          <ul className="list-disc list-inside mt-3 flex flex-col gap-1">
            <li>dostępu do swoich danych i uzyskania ich kopii</li>
            <li>sprostowania (poprawienia) danych</li>
            <li>usunięcia danych („prawo do bycia zapomnianym")</li>
            <li>ograniczenia przetwarzania</li>
            <li>wniesienia sprzeciwu wobec przetwarzania</li>
            <li>
              wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych,
              ul. Stawki 2, 00-193 Warszawa)
            </li>
          </ul>
          <p className="mt-3">
            W celu realizacji praw skontaktuj się mailowo lub telefonicznie z administratorem.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
            6. Pliki cookie i analityka
          </h2>
          <p>
            Strona nie używa śledzących plików cookie. Vercel Analytics zbiera anonimowe dane o
            ruchu (liczba odwiedzin, kraj, typ urządzenia) bez możliwości identyfikacji konkretnej
            osoby i bez użycia plików cookie.
          </p>
        </section>
      </div>
    </main>
  );
}
