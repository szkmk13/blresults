import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { getPlaceDetails } from "@/lib/google-reviews";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://bl-results.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Grzegorz Bala - Trener Personalny Gdańsk | BL Results",
    template: "%s | BL Results Gdańsk",
  },
  description:
    "Grzegorz Bala - trener personalny Gdańsk (Orunia). 7 lat doświadczenia, 200+ klientów. Treningi personalne i instruktaż trójboju siłowego. BL Results.",
  keywords: [
    "trener personalny Gdańsk",
    "trener personalny gdańsk orunia",
    "trener orunia",
    "Grzegorz Bala trener",
    "BL Results Gdańsk",
    "trening personalny Gdańsk",
    "siłownia Trakt Świętego Wojciecha",
    "gym Gdańsk",
    "personal trainer Gdańsk",
    "Husarz Gym",
  ],
  authors: [{ name: "Grzegorz Bala" }],
  creator: "BL Results",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "BL Results",
    title: "Grzegorz Bala - Trener Personalny Gdańsk | BL Results",
    description:
      "Trener personalny Grzegorz Bala w Gdańsku. Indywidualne treningi, profesjonalne podejście, realne efekty. BL Results - Trakt Świętego Wojciecha 243.",
    images: [
      {
        url: "/images/grzegorz.png",
        width: 1200,
        height: 630,
        alt: "Grzegorz Bala - Trener Personalny Gdańsk, BL Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grzegorz Bala - Trener Personalny Gdańsk | BL Results",
    description:
      "Trener personalny w Gdańsku. Indywidualne treningi, profesjonalne podejście, realne efekty.",
    images: ["/images/grzegorz.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { rating, reviewCount, reviews } = await getPlaceDetails();

  return (
    <html
      lang="pl"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script: apply theme class before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('bl-results-theme');document.documentElement.classList.add(t==='light'?'light':'dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SchemaOrg rating={rating} reviewCount={reviewCount} reviews={reviews} />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
