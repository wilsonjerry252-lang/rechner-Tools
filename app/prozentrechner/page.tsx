import type { Metadata } from "next"
import Link from "next/link"
import PercentageCalculator from "@/components/PercentageCalculator"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ChevronRight, Home, Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: "Online Prozentrechner - Kostenlos Prozente berechnen",
  description: "Kostenloser Online Prozentrechner für Rabatte, Aufschläge und prozentuale Änderungen. Einfach, schnell und genau - Prozente berechnen für Deutschland, Österreich und die Schweiz.",
  keywords: "online prozentrechner, prozentrechner online, kostenlos prozent berechnen, deutschland prozentrechner, österreich prozentrechner, schweiz prozentrechner, online-rechner prozent",
  alternates: {
    canonical: "https://www.rechnerjetzt.de/prozentrechner",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/prozentrechner",
      "de-AT": "https://www.rechnerjetzt.de/prozentrechner",
      "de-CH": "https://www.rechnerjetzt.de/prozentrechner",
      "x-default": "https://www.rechnerjetzt.de/prozentrechner",
    },
  },
}

export default function ProzentrechnerPage() {
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
                name: "Wie berechne ich 20% Rabatt auf einen Preis?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Um 20% Rabatt zu berechnen, wählen Sie 'Rabatt berechnen', geben den Ursprungspreis ein und 20 als Rabattsatz. Der Rechner zeigt Ihnen den reduzierten Preis und die Ersparnis an."
                }
              },
              {
                "@type": "Question",
                name: "Was ist der Unterschied zwischen Rabatt und Aufschlag?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rabatt reduziert den Preis um einen Prozentwert, Aufschlag erhöht ihn. Bei 20% Rabatt auf 100€ zahlen Sie 80€. Bei 20% Aufschlag auf 100€ zahlen Sie 120€."
                }
              },
              {
                "@type": "Question",
                name: "Wie berechne ich die Mehrwertsteuer mit dem Prozentrechner?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Wählen Sie 'Prozent von einem Wert', geben den Nettobetrag ein und 19 (für Deutschland) als Prozentsatz. Das Ergebnis ist die Mehrwertsteuer."
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
                name: "Prozentrechner",
                item: "https://www.rechnerjetzt.de/prozentrechner"
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
            name: "Prozentrechner & Rabattrechner",
            description: "Kostenloser Online-Rechner für Prozente, Rabatte und Aufschläge",
            url: "https://www.rechnerjetzt.de/prozentrechner",
            applicationCategory: "CalculatorApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR"
            },
            featureList: [
              "Prozent von einem Wert berechnen",
              "Rabatte berechnen",
              "Aufschläge berechnen",
              "Prozentuale Änderungen berechnen"
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
                <Calculator className="h-4 w-4 mr-1" />
                Prozentrechner
              </span>
            </nav>
          </div>
        </div>

        <main>
          {/* Hero Section */}
          <section className="py-12 px-4 bg-gradient-to-br from-background to-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Prozentrechner & Rabattrechner Online
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Berechnen Sie Prozente, Rabatte, Aufschläge und prozentuale Änderungen schnell und kostenlos. 
                Perfekt für Shopping, Steuern, Trinkgeld und Geschäftsberechnungen.
              </p>
              
              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">💯 Vielseitig</h3>
                  <p className="text-sm text-muted-foreground">
                    Prozente, Rabatte, Aufschläge und mehr berechnen
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">⚡ Sofortergebnis</h3>
                  <p className="text-sm text-muted-foreground">
                    Schritt-für-Schritt Berechnung in Echtzeit
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">🔒 Privat</h3>
                  <p className="text-sm text-muted-foreground">
                    Alle Berechnungen lokal - keine Daten gespeichert
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator Component */}
          <PercentageCalculator />

          {/* How-to Guide */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                So funktioniert der Prozentrechner
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      1. Berechnungsart wählen
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Prozent von einem Wert:</strong> Wie viel sind 20% von 100€?</li>
                      <li>• <strong>Rabatt berechnen:</strong> 100€ mit 20% Rabatt = ?</li>
                      <li>• <strong>Aufschlag berechnen:</strong> 100€ + 20% Aufschlag = ?</li>
                      <li>• <strong>Prozentuale Änderung:</strong> Von 100€ auf 120€ = +20%</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      2. Werte eingeben
                    </h3>
                    <p className="text-muted-foreground">
                      Geben Sie die entsprechenden Beträge ein. Die Berechnung erfolgt automatisch 
                      und zeigt Ihnen sowohl das Ergebnis als auch den Rechenweg.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Praktische Beispiele
                    </h3>
                    <div className="bg-card p-4 rounded-lg border space-y-3">
                      <div>
                        <h4 className="font-medium text-foreground">Shopping-Rabatt:</h4>
                        <p className="text-sm text-muted-foreground">
                          Jacke kostet 80€, 25% Rabatt = 60€ (20€ gespart)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Trinkgeld:</h4>
                        <p className="text-sm text-muted-foreground">
                          Rechnung 45€, 15% Trinkgeld = 6,75€
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Mehrwertsteuer:</h4>
                        <p className="text-sm text-muted-foreground">
                          Nettobetrag 100€, 19% MwSt = 19€
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Author/Update/Source Block */}
          <section className="py-8 px-4 bg-muted/20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-lg border">
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">👨‍💻 Autor</h3>
                    <p className="text-muted-foreground">Rechner Tools Team</p>
                    <p className="text-muted-foreground">Finanzmathematik & Wirtschaftswissenschaften</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">📅 Letzte Aktualisierung</h3>
                    <p className="text-muted-foreground">15. Dezember 2024</p>
                    <p className="text-muted-foreground">MwSt.-Sätze & Formeln aktuell</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">📚 Quellen & Referenzen</h3>
                    <p className="text-muted-foreground">Statistisches Bundesamt</p>
                    <p className="text-muted-foreground">Bundesministerium der Finanzen</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-12 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Weitere nützliche Rechner
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
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
                
                <Link href="/inflationsrechner" className="group">
                  <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                      Inflationsrechner
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Berechnen Sie die Kaufkraftveränderung durch Inflation
                    </p>
                  </div>
                </Link>
                
                <Link href="/mehrwertsteuer-rechner" className="group">
                  <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                      Mehrwertsteuer-Rechner
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Berechnen Sie MwSt. für Deutschland, Österreich und Schweiz
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
