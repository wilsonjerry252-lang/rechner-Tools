import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"
import "./globals.css"
import CookieConsent from "@/components/CookieConsent"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', 
  preload: true,
  fallback: ['system-ui', 'arial']
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Rechner Tools - Online-Rechner für MwSt, Prozente, Arbeitstage & Inflation",
  description: "Kostenlose Online-Rechner für Mehrwertsteuer, Prozentrechnung, Arbeitstage und Inflation. Optimiert für Deutschland, Österreich und die Schweiz.",
  keywords: "Online-Rechner, Mehrwertsteuer, Prozentrechner, Arbeitstage, Inflation, Deutschland, Österreich, Schweiz, Steuerrechner, Finanzrechner",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Rechner Tools", url: "https://www.rechnerjetzt.de" }],
  generator: "Next.js",
  verification: {
    google: "wBPvzjewAkOEFBmY853_RdN9MbWQ1vy32T63vP3C47g",
    yandex: "verification_token",
  },
  openGraph: {
    title: "Rechner Tools - Online-Rechner für MwSt, Prozente, Arbeitstage & Inflation",
    description: "Kostenlose Online-Rechner für Mehrwertsteuer, Prozentrechnung, Arbeitstage und Inflation. Optimiert für den deutschsprachigen Raum.",
    url: "https://www.rechnerjetzt.de",
    siteName: "Rechner Tools",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.rechnerjetzt.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rechner Tools - Online-Rechner für MwSt, Prozente, Arbeitstage & Inflation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rechner Tools - Online-Rechner für MwSt, Prozente, Arbeitstage & Inflation",
    description: "Kostenlose Online-Rechner für Mehrwertsteuer, Prozentrechnung, Arbeitstage und Inflation.",
    images: ["https://www.rechnerjetzt.de/og-image.jpg"],
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
        {/* Comprehensive Favicon Setup for Google Search Results */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Multiple favicon sizes for better compatibility */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        
        {/* Legacy favicon for older browsers */}
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Mobile performance optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="slurp" content="index, follow" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="wBPvzjewAkOEFBmY853_RdN9MbWQ1vy32T63vP3C47g" />
        

        
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS to reduce render blocking */
            body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
            .logo-text { font-weight: bold; }
            .logo-subtitle { font-size: 0.875rem; }
            header { background: linear-gradient(to right, #007bff, #0056b3); }
            nav { position: fixed; z-index: 40; }
          `
        }} />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preconnect to critical external origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Resource hints for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        
        {/* Hreflang removed to prevent conflicts with page-specific implementations */}
        
        {/* Brand and Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rechner Tools",
              "url": "https://www.rechnerjetzt.de",
              "logo": "https://www.rechnerjetzt.de/logo.png",
              "description": "Kostenlose Online-Rechner für Mehrwertsteuer, Prozentrechnung, Arbeitstage und Inflation",
              "foundingDate": "2024",
              "sameAs": [
                "https://www.rechnerjetzt.de"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["German", "English"]
              }
            }),
          }}
        />

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
