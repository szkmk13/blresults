import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://blresults.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Grzegorz Bala - Trener Personalny Gdańsk | BL Results",
    template: "%s | BL Results Gdańsk",
  },
  description:
    "Grzegorz Bala - trener personalny Gdańsk (BL Results, Trakt Świętego Wojciecha 243). Profesjonalne treningi personalne, indywidualne podejście, realne efekty. Otwarte Pon - Pt 6-22, Sob 8-20, Niedz 9-18.",
  keywords: [
    "trener personalny Gdańsk",
    "Grzegorz Bala trener",
    "BL Results Gdańsk",
    "trening personalny Gdańsk",
    "siłownia Trakt Świętego Wojciecha",
    "gym Gdańsk",
    "personal trainer Gdańsk",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Grzegorz Bala - Trener Personalny Gdańsk | BL Results",
    description:
      "Trener personalny w Gdańsku. Indywidualne treningi, profesjonalne podejście, realne efekty.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            __html: `(function(){try{var t=localStorage.getItem('blresults-theme');document.documentElement.classList.add(t==='light'?'light':'dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SchemaOrg />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
