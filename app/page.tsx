"use client"

import type React from "react"
import Layout from "@/components/Layout"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function HomePage() {
  return (
    <>
      {/* Canonical URL for homepage */}
      <link rel="canonical" href="https://www.rechnerjetzt.de" />
      
      {/* Self-referencing hreflang for homepage - each language/region only once */}
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de" />
      <link rel="alternate" hrefLang="de-AT" href="https://www.rechnerjetzt.de" />
      <link rel="alternate" hrefLang="de-CH" href="https://www.rechnerjetzt.de" />
      <link rel="alternate" hrefLang="x-default" href="https://www.rechnerjetzt.de" />
      
      {/* Hreflang return links for all pages - ensuring consistency */}
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/kontakt" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/ueber-uns" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/impressum" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/datenschutz" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/cookie-richtlinie" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/haftungsausschluss" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/nutzungsbedingungen" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog" />
      
      {/* Blog post hreflang return links - each with unique de-DE */}
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/mehrwertsteuer-export" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/mehrwertsteuer-import" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/mehrwertsteuer-berechnung" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/mehrwertsteuer-deutschland-oesterreich-schweiz" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/mehrwertsteuer-unternehmer" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/mehrwertsteuer-ausnahmen" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/bmi-ernaehrung" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/bmi-ernaehrung-training" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/bmi-gesundheitsrisiken" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/bmi-idealgewicht" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/bmi-richtig-interpretieren" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/bmi-sportler" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/gesunde-gewichtsabnahme-bmi" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/kredit-aufnehmen" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/kredit-umschuldung" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/kredit-zinsen-berechnen" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/kreditarten-vergleich" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/kreditvergleich-bester-zinssatz" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/sondertilgung-kredite" />
      <link rel="alternate" hrefLang="de-DE" href="https://www.rechnerjetzt.de/blog/steuerliche-absetzbarkeit-kreditzinsen" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Rechner Tools",
            description: "Professionelle Online-Rechner für Mehrwertsteuer, BMI und Kredite. Optimiert für Deutschland, Österreich und die Schweiz.",
            url: "https://www.rechnerjetzt.de",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
            featureList: [
              "Mehrwertsteuerrechner für Deutschland, Österreich, Schweiz",
              "BMI-Rechner mit metrischen und imperialen Einheiten",
              "Kreditrechner mit Tilgungsplan",
            ],
            author: {
              "@type": "Organization",
              name: "Rechner Tools",
              url: "https://www.rechnerjetzt.de"
            },
            publisher: {
              "@type": "Organization",
              name: "Rechner Tools",
              url: "https://www.rechnerjetzt.de"
            },
            inLanguage: ["de-DE", "de-AT", "de-CH"],
            audience: {
              "@type": "Audience",
              audienceType: "Business professionals, individuals, entrepreneurs"
            }
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Wie berechne ich die Mehrwertsteuer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Geben Sie den Betrag ein, wählen Sie das Land (Deutschland 19%, Österreich 20%, Schweiz 7.7%) und ob Sie von Netto zu Brutto oder umgekehrt rechnen möchten."
                }
              },
              {
                "@type": "Question",
                name: "Wie berechne ich meinen BMI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Geben Sie Ihr Gewicht in kg und Ihre Größe in cm ein. Der BMI wird automatisch berechnet und kategorisiert."
                }
              },
              {
                "@type": "Question",
                name: "Wie funktioniert der Kreditrechner?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Geben Sie Kreditsumme, Zinssatz und Laufzeit ein. Sie erhalten sofort die monatliche Rate und den Tilgungsplan."
                }
              }
            ]
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Startseite",
                item: "https://www.rechnerjetzt.de"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Rechner",
                item: "https://www.rechnerjetzt.de#rechner"
              }
            ]
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Header Component */}
        <Header />

        {/* Layout with Main Content */}
        <Layout />

        {/* Footer Component */}
        <Footer />
      </div>
    </>
  )
}
