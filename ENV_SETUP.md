# Zmienne środowiskowe — BL-Results

Plik z kluczami środowiskowymi to `.env.local` w głównym katalogu projektu.
Nigdy nie commituj tego pliku do gita (powinien być w `.gitignore`).

---

## Lista zmiennych

### 1. `GOOGLE_PLACES_API_KEY`

**Do czego służy:** Pobieranie opinii Google z profilu firmy (wyświetlane na stronie).

**Gdzie wygenerować:**
1. Wejdź na [console.cloud.google.com](https://console.cloud.google.com)
2. Utwórz projekt (lub wybierz istniejący)
3. Włącz API: **Places API** (szukaj w "APIs & Services" → "Enable APIs")
4. Przejdź do "APIs & Services" → "Credentials" → "Create Credentials" → **API Key**
5. Zalecane: ogranicz klucz do Places API i do IP serwera w sekcji "Restrict key"

**Przykład:**
```
GOOGLE_PLACES_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

### 2. `PLACE_ID`

**Do czego służy:** Identyfikator lokalizacji na Google Maps — aplikacja pobiera z niego opinie.

**Gdzie znaleźć:**
1. Otwórz [Google Maps](https://maps.google.com)
2. Znajdź profil siłowni / trenera
3. Kliknij "Udostępnij" → "Osadź mapę" lub skopiuj link — w URL znajdziesz fragment `place_id=ChIJ...`
4. Alternatywnie: użyj [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)

**Przykład:**
```
PLACE_ID=ChIJeY-RUJtz_UYRSqk5rwIPPko
```

---

### 3. `RESEND_API_KEY`

**Do czego służy:** Wysyłanie e-maili z formularza kontaktowego przez serwis [Resend](https://resend.com).

**Gdzie wygenerować:**
1. Zaloguj się na [resend.com](https://resend.com)
2. Przejdź do "API Keys" → "Create API Key"
3. Nadaj nazwę (np. `bl-results-prod`), uprawnienia: **Sending access**
4. Skopiuj klucz — pokazywany jest tylko raz

**Uwaga:** W `route.ts` e-mail jest wysyłany z domeny `onboarding@resend.dev` (testowej).
Na produkcji zmień `from` na własną domenę zweryfikowaną w Resend ("Domains" → "Add Domain").

**Przykład:**
```
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

### 4. `TURNSTILE_SECRET_KEY`

**Do czego służy:** Weryfikacja CAPTCHA Cloudflare Turnstile po stronie serwera (API route).

**Gdzie wygenerować:**
1. Zaloguj się na [dash.cloudflare.com](https://dash.cloudflare.com)
2. W lewym menu wybierz **Turnstile**
3. Kliknij "Add site" → podaj nazwę i domenę
4. Wybierz typ widgetu (zalecany: **Managed**)
5. Po utworzeniu otrzymasz **Site Key** i **Secret Key** — skopiuj Secret Key tutaj

**Przykład:**
```
TURNSTILE_SECRET_KEY=0x4AAAAAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

### 5. `NEXT_PUBLIC_TURNSTILE_SITE_KEY`

**Do czego służy:** Klucz publiczny Cloudflare Turnstile używany po stronie przeglądarki (widżet CAPTCHA w formularzu).

**Gdzie znaleźć:** Ten sam panel co powyżej — to **Site Key** (nie Secret Key) z tego samego widgetu Turnstile.

Prefix `NEXT_PUBLIC_` oznacza, że zmienna jest dostępna w kodzie frontendowym — nie umieszczaj tutaj żadnych tajnych kluczy.

**Przykład:**
```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAXXXXXXXXXXXXXXXXX
```

---

## Kompletny plik `.env.local`

```env
# Google Places API — pobierz z console.cloud.google.com
GOOGLE_PLACES_API_KEY=

# ID lokalizacji na Google Maps
PLACE_ID=

# Resend — wysyłanie emaili z formularza
RESEND_API_KEY=

# Cloudflare Turnstile — weryfikacja CAPTCHA (klucz serwerowy)
TURNSTILE_SECRET_KEY=

# Cloudflare Turnstile — klucz publiczny (widżet w przeglądarce)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

---

## Wdrożenie na produkcję (Vercel)

Zmiennych **nie kopiuj** jako pliku — dodaj je ręcznie w panelu Vercel:

1. Wejdź w projekt na [vercel.com](https://vercel.com)
2. "Settings" → "Environment Variables"
3. Dodaj każdą zmienną osobno, wybierając środowisko **Production** (i opcjonalnie Preview)
4. `NEXT_PUBLIC_*` oznacz jako dostępne dla wszystkich środowisk
5. Po dodaniu zmiennych wykonaj nowy deploy

---

## Podpięcie domeny z home.pl do Vercel

### Krok 1 — Dodaj domenę w Vercel

1. Wejdź w projekt na [vercel.com](https://vercel.com)
2. "Settings" → "Domains" → **Add Domain**
3. Wpisz swoją domenę, np. `bl-results.pl` (dodaj też `www.bl-results.pl`)
4. Vercel pokaże rekordy DNS do skonfigurowania — **nie zamykaj tego okna**

Vercel wyświetli coś takiego:

| Typ | Nazwa | Wartość |
|---|---|---|
| `A` | `@` (lub pusta) | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

---

### Krok 2 — Skonfiguruj DNS w home.pl

1. Zaloguj się na [panel.home.pl](https://panel.home.pl)
2. Przejdź do **Domeny** → wybierz swoją domenę → **Strefa DNS**
3. Usuń lub nadpisz istniejące rekordy A i CNAME (jeśli są)

**Dodaj rekord A (dla domeny głównej `bl-results.pl`):**
- Typ: `A`
- Nazwa/Host: `@` (lub zostaw puste)
- Wartość/IP: `76.76.21.21`
- TTL: `3600` (lub domyślne)

**Dodaj rekord CNAME (dla `www`):**
- Typ: `CNAME`
- Nazwa/Host: `www`
- Wartość: `cname.vercel-dns.com`
- TTL: `3600`

> **Uwaga:** Dokładne wartości rekordów zawsze sprawdź w panelu Vercel — mogą się różnić.
> Nie używaj opcji "parkuj domenę" ani przekierowania HTTP w home.pl — to zepsuje działanie.

---

### Krok 3 — Poczekaj na propagację DNS

- Zmiany DNS rozchodzą się po internecie w ciągu **15 minut do 48 godzin**
- Vercel automatycznie wykryje zmianę i wystawi certyfikat SSL (HTTPS)
- Status możesz sprawdzić w Vercel: "Settings" → "Domains" — pojawi się zielona ikona

**Narzędzie do sprawdzenia propagacji:** [dnschecker.org](https://dnschecker.org) — wpisz domenę i wybierz typ rekordu `A`

---

### Krok 4 — Ustaw domenę główną w Vercel (opcjonalne)

Jeśli chcesz, żeby `bl-results.pl` (bez www) była domeną główną a `www` przekierowywało:

1. W Vercel: "Settings" → "Domains"
2. Przy `bl-results.pl` kliknij **Edit** → "Redirect to" → wybierz tę domenę jako primary
3. Vercel automatycznie postawi przekierowanie 301 z `www` na domenę bez `www` (lub odwrotnie)

---

## Podsumowanie — co jest już skonfigurowane

| Zmienna | Status |
|---|---|
| `GOOGLE_PLACES_API_KEY` | **Wymaga uzupełnienia** |
| `PLACE_ID` | Ustawiony |
| `RESEND_API_KEY` | Ustawiony (klucz testowy) |
| `TURNSTILE_SECRET_KEY` | Ustawiony |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Ustawiony |
