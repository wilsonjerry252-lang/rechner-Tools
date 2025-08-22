import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"
import "./globals.css"
import CookieConsent from "@/components/CookieConsent"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Rechner Tools - Professionelle Online-Rechner für MwSt, BMI & Kredite | Deutschland, Österreich & Schweiz",
  description:
    "Kostenlose Online-Rechner: Mehrwertsteuerrechner, BMI-Rechner und Kreditrechner für Deutschland, Österreich und die Schweiz. Präzise Berechnungen, sofortige Ergebnisse.",
  generator: "Next.js",
  keywords: [
    "mehrwertsteuer rechner",
    "mwst rechner deutschland",
    "bmi rechner online",
    "kreditrechner kostenlos",
    "steuerrechner österreich",
    "mehrwertsteuer berechnen schweiz",
    "bmi berechnen idealgewicht",
    "kredit berechnen tilgungsplan",
    "mwst formel",
    "steuerrechner online",
    "finanzrechner",
    "rechner tools",
    "kostenlose rechner",
    "online rechner deutschland"
  ].join(", "),
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Rechner Tools", url: "https://rechner-tools.com" }],
  creator: "Rechner Tools",
  publisher: "Rechner Tools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Rechner Tools - Professionelle Online-Rechner für MwSt, BMI & Kredite",
    description: "Kostenlose Online-Rechner: Mehrwertsteuerrechner, BMI-Rechner und Kreditrechner für Deutschland, Österreich und die Schweiz",
    url: "https://rechner-tools.com",
    siteName: "Rechner Tools",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Rechner Tools Logo - Professionelle Online-Rechner",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rechner Tools - Professionelle Online-Rechner",
    description: "Kostenlose Online-Rechner: Mehrwertsteuerrechner, BMI-Rechner und Kreditrechner",
    images: ["/logo.png"],
    creator: "@rechnertools",
  },
  alternates: {
    canonical: "https://rechner-tools.com",
    languages: {
      "de-DE": "https://rechner-tools.com",
      "de-AT": "https://rechner-tools.com",
      "de-CH": "https://rechner-tools.com",
    },
  },
  category: "Finance",
  classification: "Calculator Tools",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${dmSans.variable} antialiased`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/*!-- Google tag (gtag.js) --*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JTK284TTSM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JTK284TTSM');
            `,
          }}
        />
      </head>
      <body className="font-sans">
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
