import type React from "react"
import type { Metadata } from "next"
import Layout from "@/components/Layout"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Rechner Tools - Online-Rechner für MwSt, BMI & Kredite",
  description: "Kostenlose Online-Rechner für Mehrwertsteuer, BMI und Kredite. Optimiert für Deutschland, Österreich und die Schweiz.",
  alternates: {
    canonical: "https://www.rechnerjetzt.de",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de",
      "de-AT": "https://www.rechnerjetzt.de",
      "de-CH": "https://www.rechnerjetzt.de",
      "x-default": "https://www.rechnerjetzt.de",
    },
  },
}

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
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
        <Header />
        <Layout />
        <Footer />
      </div>
    </>
  )
}
