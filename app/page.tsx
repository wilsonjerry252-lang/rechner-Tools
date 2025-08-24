import type React from "react"
import type { Metadata } from "next"
import Layout from "@/components/Layout"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Online-Rechner Tools - Kostenlose Rechner für DACH",
  description: "Kostenlose Online-Rechner für Mehrwertsteuer, Prozentrechnung, Arbeitstage und Inflation. Einfach, schnell und genau - optimiert für Deutschland, Österreich und die Schweiz.",
  keywords: "online-rechner, kostenlose rechner, deutschland rechner, österreich rechner, schweiz rechner, mwst rechner, prozentrechner, arbeitstage rechner, inflationsrechner",
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
            name: "Online-Rechner Tools",
            description: "Kostenlose Online-Rechner für Mehrwertsteuer, Prozente, Arbeitstage und Inflation. Einfach, schnell und genau - optimiert für Deutschland, Österreich und die Schweiz.",
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
            Warum Online-Rechner Tools wählen?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wir bieten Ihnen professionelle, zuverlässige und kostenlose Online-Rechner, 
            die speziell für die Bedürfnisse der DACH-Region entwickelt wurden. 
            Einfach, schnell und genau - Ihre kostenlosen Online-Rechner für Deutschland, Österreich und die Schweiz.
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
            Unsere Online-Rechner im Überblick
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der Mehrwertsteuer bis zur Zeitplanung - wir decken alle wichtigen 
            Bereiche für Privatpersonen und Unternehmen ab. Kostenlose Online-Rechner 
            für Deutschland, Österreich und die Schweiz - einfach und schnell zu bedienen.
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
            Vertrauen Sie auf unsere Online-Rechner Expertise
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Alle unsere Online-Rechner basieren auf aktuellen gesetzlichen Vorgaben und werden 
            kontinuierlich überprüft und aktualisiert. Wir arbeiten mit offiziellen 
            Datenquellen und garantieren höchste Genauigkeit. Ihre kostenlosen Online-Rechner 
            für Deutschland, Österreich und die Schweiz - einfach, schnell und genau.
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
        
        {/* SEO-Optimized Content Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Kostenlose Online-Rechner für Deutschland, Österreich und die Schweiz
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Entdecken Sie unsere professionellen Online-Rechner, die speziell für die DACH-Region entwickelt wurden. 
                Einfach, schnell und genau - Ihre kostenlosen Online-Rechner für alle wichtigen Berechnungen.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4">Online-Rechner für Finanzen</h3>
                <p className="text-muted-foreground mb-4">
                  Professionelle Online-Rechner für Mehrwertsteuer, Prozente und Inflation. 
                  Kostenlose Online-Rechner für Deutschland, Österreich und die Schweiz.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Online Mehrwertsteuer-Rechner</li>
                  <li>• Online Prozentrechner</li>
                  <li>• Online Inflationsrechner</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4">Online-Rechner für Zeitplanung</h3>
                <p className="text-muted-foreground mb-4">
                  Präzise Online-Rechner für Arbeitstage und Zeitplanung. 
                  Einfach, schnell und genau - kostenlose Online-Rechner.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Online Arbeitstage-Rechner</li>
                  <li>• Feiertage berücksichtigen</li>
                  <li>• DACH-Region optimiert</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4">Warum Online-Rechner Tools?</h3>
                <p className="text-muted-foreground mb-4">
                  Wir bieten die besten kostenlosen Online-Rechner für Deutschland, Österreich und die Schweiz. 
                  Einfach, schnell und genau - Ihre Online-Rechner für alle Berechnungen.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Kostenlose Online-Rechner</li>
                  <li>• DACH-Region optimiert</li>
                  <li>• Einfach und schnell</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  )
}
