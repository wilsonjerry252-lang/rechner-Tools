import type { Metadata } from "next"
import Link from "next/link"
import InflationCalculator from "@/components/InflationCalculator"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ChevronRight, Home, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Inflationsrechner Deutschland - Kaufkraft und Preissteigerung berechnen",
  description: "Berechnen Sie die Kaufkraftveränderung durch Inflation von 1991-2024. Kostenloser Inflationsrechner mit historischen Daten für Deutschland.",
  keywords: "Inflationsrechner, Inflation berechnen, Kaufkraft Rechner, Preissteigerung Deutschland, Inflationsrate, Geldwert berechnen",
  alternates: {
    canonical: "https://www.rechnerjetzt.de/inflationsrechner",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/inflationsrechner",
      "de-AT": "https://www.rechnerjetzt.de/inflationsrechner",
      "de-CH": "https://www.rechnerjetzt.de/inflationsrechner",
      "x-default": "https://www.rechnerjetzt.de/inflationsrechner",
    },
  },
}

export default function InflationsrechnerPage() {
  return (
    <>
      {/* Schema Markup for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Wie wird die Inflation berechnet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Die Inflation wird basierend auf dem Verbraucherpreisindex (VPI) berechnet. Jedes Jahr wird der Betrag mit der jeweiligen Inflationsrate des Statistischen Bundesamts multipliziert."
                }
              },
              {
                "@type": "Question",
                name: "Was bedeutet eine Inflation von 2%?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Eine Inflation von 2% bedeutet, dass die Preise um 2% gestiegen sind. Was letztes Jahr 100€ kostete, kostet dieses Jahr 102€. Die Kaufkraft sinkt entsprechend."
                }
              },
              {
                "@type": "Question",
                name: "Warum war die Inflation 2022 so hoch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Die Inflation erreichte 2022 6,9% hauptsächlich durch stark gestiegene Energiepreise, Lieferkettenprobleme und die wirtschaftlichen Auswirkungen des Ukraine-Kriegs."
                }
              }
            ]
          }),
        }}
      />

      {/* Breadcrumb Schema */}
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
                name: "Inflationsrechner",
                item: "https://www.rechnerjetzt.de/inflationsrechner"
              }
            ]
          }),
        }}
      />

      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Inflationsrechner Deutschland",
            description: "Berechnen Sie die Kaufkraftveränderung durch Inflation basierend auf historischen Daten",
            url: "https://www.rechnerjetzt.de/inflationsrechner",
            applicationCategory: "CalculatorApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR"
            },
            featureList: [
              "Kaufkraft berechnen von 1991-2024",
              "Historische Inflationsraten Deutschland",
              "Jahresweise Aufschlüsselung der Preisentwicklung",
              "Verbraucherpreisindex basierte Berechnungen"
            ]
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Breadcrumbs */}
        <div className="bg-muted/30 py-3 px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Home className="h-4 w-4 mr-1" />
                Startseite
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="flex items-center text-foreground font-medium">
                <TrendingUp className="h-4 w-4 mr-1" />
                Inflationsrechner
              </span>
            </nav>
          </div>
        </div>

        <main>
          {/* Hero Section */}
          <section className="py-12 px-4 bg-gradient-to-br from-background to-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Inflationsrechner Deutschland
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Berechnen Sie die Kaufkraftveränderung Ihres Geldes durch Inflation. 
                Basierend auf historischen Inflationsraten des Statistischen Bundesamts von 1991 bis 2024.
              </p>
              
              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">📊 Historische Daten</h3>
                  <p className="text-sm text-muted-foreground">
                    Inflationsraten von 1991-2024 basierend auf dem VPI
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">💰 Kaufkraftvergleich</h3>
                  <p className="text-sm text-muted-foreground">
                    Sehen Sie, wie sich Ihr Geld über die Jahre entwickelt hat
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">📈 Jahresaufschlüsselung</h3>
                  <p className="text-sm text-muted-foreground">
                    Detaillierte Entwicklung Jahr für Jahr nachvollziehen
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator Component */}
          <InflationCalculator />

          {/* Inflation Timeline */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Inflation in Deutschland - Die letzten 30+ Jahre
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      🏛️ Die 90er Jahre (1991-1999)
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground mb-3">
                        Nach der Wiedervereinigung waren die Inflationsraten noch relativ hoch:
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex justify-between">
                          <span>1992:</span>
                          <span className="font-semibold text-red-600">5,1%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>1993:</span>
                          <span className="font-semibold text-red-600">4,5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>1999:</span>
                          <span className="font-semibold">0,6%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      💶 Die Euro-Ära (2000-2010)
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground mb-3">
                        Stabile Preise mit der Euroeinführung:
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex justify-between">
                          <span>2002:</span>
                          <span className="font-semibold">1,4%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2008:</span>
                          <span className="font-semibold">2,6%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2009:</span>
                          <span className="font-semibold">0,4%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      📉 Niedrigzinsphase (2011-2020)
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground mb-3">
                        EZB-Politik führte zu sehr niedrigen Inflationsraten:
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex justify-between">
                          <span>2015:</span>
                          <span className="font-semibold">0,3%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2016:</span>
                          <span className="font-semibold">0,5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2020:</span>
                          <span className="font-semibold">0,5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      🚀 Aktuelle Entwicklung (2021-2024)
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground mb-3">
                        Deutlicher Anstieg durch Pandemie und Krieg:
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex justify-between">
                          <span>2021:</span>
                          <span className="font-semibold text-orange-600">3,1%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2022:</span>
                          <span className="font-semibold text-red-600">6,9%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2023:</span>
                          <span className="font-semibold text-red-600">5,9%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2024:</span>
                          <span className="font-semibold">2,3%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  💡 Was bedeuten diese Zahlen für Sie?
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Praktische Beispiele:</h4>
                    <ul className="space-y-1">
                      <li>• 1000€ von 2000 = 1520€ heute (52% Wertverlust)</li>
                      <li>• 1000€ von 2010 = 1180€ heute (18% Wertverlust)</li>
                      <li>• 1000€ von 2020 = 1120€ heute (12% Wertverlust)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Was das bedeutet:</h4>
                    <ul className="space-y-1">
                      <li>• Geld verliert kontinuierlich an Kaufkraft</li>
                      <li>• Sparen ohne Zinsen = Geldverlust</li>
                      <li>• Investitionen können Inflation ausgleichen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Inflation Impact */}
          <section className="py-12 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Auswirkungen der Inflation verstehen
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3 text-red-600">📉 Negative Auswirkungen</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Kaufkraftverlust:</strong> Geld wird weniger wert</li>
                      <li>• <strong>Sparer leiden:</strong> Zinsen oft unter Inflationsrate</li>
                      <li>• <strong>Fixe Einkommen:</strong> Rentner und Angestellte betroffen</li>
                      <li>• <strong>Planungsunsicherheit:</strong> Schwierige Budgetplanung</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3 text-blue-600">🛡️ Schutzmaßnahmen</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Sachwerte:</strong> Immobilien, Aktien, Gold</li>
                      <li>• <strong>Inflationsgeschützte Anleihen:</strong> Staatsanleihen mit Inflationsschutz</li>
                      <li>• <strong>Gehaltsanpassungen:</strong> Regelmäßige Lohnerhöhungen</li>
                      <li>• <strong>Diversifikation:</strong> Verschiedene Anlageklassen</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3 text-green-600">📈 Positive Aspekte</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Schuldner profitieren:</strong> Schulden werden "billiger"</li>
                      <li>• <strong>Wirtschaftswachstum:</strong> Moderate Inflation fördert Konsum</li>
                      <li>• <strong>Sachwertbesitzer:</strong> Immobilien steigen im Wert</li>
                      <li>• <strong>Lohnanpassungen:</strong> Gehälter steigen langfristig mit</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">🎯 EZB-Ziel: 2% Inflation</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Die Europäische Zentralbank strebt eine Inflationsrate von rund 2% an, da dies:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Wirtschaftswachstum fördert</li>
                      <li>• Deflation verhindert</li>
                      <li>• Planbarkeit ermöglicht</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Weitere Finanzrechner
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/prozentrechner" className="group">
                  <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                      Prozentrechner
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Berechnen Sie Prozente, Rabatte und Aufschläge einfach online
                    </p>
                  </div>
                </Link>
                
                <Link href="/arbeitstage-rechner" className="group">
                  <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                      Arbeitstage-Rechner
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Berechnen Sie Arbeitstage zwischen zwei Daten inklusive Feiertage
                    </p>
                  </div>
                </Link>
                
                <Link href="/blog/inflation-einfach-erklaert" className="group">
                  <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                      Inflation verstehen
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Ausführlicher Guide zu Inflation und Kaufkraftentwicklung
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
