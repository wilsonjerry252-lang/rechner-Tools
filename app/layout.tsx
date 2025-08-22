import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"
import "./globals.css"
import CookieConsent from "@/components/CookieConsent"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Optimize font loading
  preload: true,
  fallback: ['system-ui', 'arial']
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Rechner Tools - Professionelle Online-Rechner für Deutschland, Österreich & Schweiz",
  description: "Kostenlose Online-Rechner für Mehrwertsteuer, BMI, Kredite und mehr. Optimiert für den deutschsprachigen Raum mit aktuellen Steuersätzen und präzisen Berechnungen.",
  keywords: "Online-Rechner, Mehrwertsteuer, BMI-Rechner, Kreditrechner, Deutschland, Österreich, Schweiz, Steuerrechner, Finanzrechner, Gesundheitsrechner",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Rechner Tools", url: "https://www.rechnerjetzt.de" }],
  generator: "Next.js",
  verification: {
    google: "G-JTK284TTSM",
    yandex: "verification_token",
  },
  openGraph: {
    title: "Rechner Tools - Professionelle Online-Rechner",
    description: "Kostenlose Online-Rechner für Mehrwertsteuer, BMI, Kredite und mehr. Optimiert für den deutschsprachigen Raum.",
    url: "https://www.rechnerjetzt.de",
    siteName: "Rechner Tools",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.rechnerjetzt.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rechner Tools - Professionelle Online-Rechner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rechner Tools - Professionelle Online-Rechner",
    description: "Kostenlose Online-Rechner für Mehrwertsteuer, BMI, Kredite und mehr.",
    images: ["https://www.rechnerjetzt.de/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de",
      "de-AT": "https://www.rechnerjetzt.de",
      "de-CH": "https://www.rechnerjetzt.de",
    },
  },
  category: "Tools & Utilities",
  classification: "Online Calculators & Financial Tools",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Rechner Tools",
    "application-name": "Rechner Tools",
    "msapplication-TileColor": "#007bff",
    "theme-color": "#007bff",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/* Mobile performance optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.png" as="image" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JTK284TTSM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Set default consent state for Consent Mode v2
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
              
              gtag('config', 'G-JTK284TTSM');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <CookieConsent />
        {children}
      </body>
    </html>
  )
}
