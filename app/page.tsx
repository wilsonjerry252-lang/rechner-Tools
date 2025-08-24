import type React from "react"
import type { Metadata } from "next"
import Layout from "@/components/Layout"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Rechner Tools - Online-Rechner für DACH",
  description: "Kostenlose Online-Rechner für Mehrwertsteuer, Prozentrechnung, Arbeitstage und Inflation. Optimiert für Deutschland, Österreich und die Schweiz.",
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
            description: "Professionelle Online-Rechner für Mehrwertsteuer, Prozente, Arbeitstage und Inflation. Optimiert für Deutschland, Österreich und die Schweiz.",
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
              "Prozentrechner für Rabatte, Aufschläge und Änderungen",
              "Arbeitstage-Rechner mit Feiertagen für 2025/2026",
              "Inflationsrechner mit historischen Daten seit 1991",
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
        
        {/* Additional Content Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Warum Rechner Tools wählen?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Wir bieten Ihnen professionelle, zuverlässige und kostenlose Online-Rechner, 
                die speziell für die Bedürfnisse der DACH-Region entwickelt wurden.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇩🇪</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Deutschland</h3>
                <p className="text-sm text-muted-foreground">
                  Optimiert für deutsche Steuersätze und gesetzliche Vorgaben
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇦🇹</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Österreich</h3>
                <p className="text-sm text-muted-foreground">
                  Angepasst an österreichische Steuerregelungen und Feiertage
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇨🇭</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Schweiz</h3>
                <p className="text-sm text-muted-foreground">
                  Berücksichtigt Schweizer Besonderheiten und regionale Unterschiede
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">International</h3>
                <p className="text-sm text-muted-foreground">
                  Unterstützung für grenzüberschreitende Geschäfte und Vergleiche
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Unsere Rechner im Überblick
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Von der Mehrwertsteuer bis zur Zeitplanung - wir decken alle wichtigen 
                Bereiche für Privatpersonen und Unternehmen ab.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Finanzrechner</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Mehrwertsteuerrechner</h4>
                      <p className="text-sm text-muted-foreground">
                        Präzise MwSt-Berechnungen für alle DACH-Länder mit aktuellen Steuersätzen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Prozentrechner</h4>
                      <p className="text-sm text-muted-foreground">
                        Vielseitiger Rechner für Rabatte, Aufschläge und prozentuale Änderungen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Inflationsrechner</h4>
                      <p className="text-sm text-muted-foreground">
                        Verstehen Sie, wie sich Ihre Kaufkraft über die Zeit entwickelt hat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Zeitrechner</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Arbeitstage-Rechner</h4>
                      <p className="text-sm text-muted-foreground">
                        Berechnung von Arbeitstagen unter Berücksichtigung aller Feiertage
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Urlaubsplaner</h4>
                      <p className="text-sm text-muted-foreground">
                        Optimale Urlaubsplanung mit Brückentag-Optimierung
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Projektzeitrechner</h4>
                      <p className="text-sm text-muted-foreground">
                        Professionelle Projektplanung mit Ressourcenverwaltung
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Vertrauen Sie auf unsere Expertise
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Alle unsere Rechner basieren auf aktuellen gesetzlichen Vorgaben und werden 
              kontinuierlich überprüft und aktualisiert. Wir arbeiten mit offiziellen 
              Datenquellen und garantieren höchste Genauigkeit.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">Aktuelle Daten</h3>
                <p className="text-sm text-muted-foreground">
                  Regelmäßige Updates mit den neuesten Steuersätzen und gesetzlichen Änderungen
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">Datenschutz</h3>
                <p className="text-sm text-muted-foreground">
                  Ihre Eingaben werden nicht gespeichert oder weitergegeben
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">Kostenlos</h3>
                <p className="text-sm text-muted-foreground">
                  Alle Rechner sind völlig kostenfrei und ohne Registrierung nutzbar
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  )
}
