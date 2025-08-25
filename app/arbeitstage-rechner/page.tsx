import type { Metadata } from "next"
import Link from "next/link"
import WorkdaysCalculator from "@/components/WorkdaysCalculator"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ChevronRight, Home, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Online Arbeitstage-Rechner 2025/2026 - Kostenlos berechnen",
  description: "Kostenloser Online Arbeitstage-Rechner für 2025 und 2026. Einfach, schnell und genau - berechnen Sie Arbeitstage mit allen Feiertagen in Deutschland, Österreich und der Schweiz.",
  keywords: "online arbeitstage rechner, arbeitstage rechner online, kostenlos arbeitstage berechnen, deutschland arbeitstage rechner, österreich arbeitstage rechner, schweiz arbeitstage rechner, online-rechner arbeitstage",
  alternates: {
    canonical: "https://www.rechnerjetzt.de/arbeitstage-rechner",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/arbeitstage-rechner",
      "de-AT": "https://www.rechnerjetzt.de/arbeitstage-rechner", 
      "de-CH": "https://www.rechnerjetzt.de/arbeitstage-rechner",
      "x-default": "https://www.rechnerjetzt.de/arbeitstage-rechner",
    },
  },
}

export default function ArbeitstageRechnerPage() {
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
                name: "Wie viele Arbeitstage hat das Jahr 2025 in Deutschland?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Das Jahr 2025 hat in Deutschland 251 Arbeitstage. Dies kann je nach Bundesland durch regionale Feiertage leicht variieren."
                }
              },
              {
                "@type": "Question",
                name: "Werden regionale Feiertage im Arbeitstage-Rechner berücksichtigt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Der Rechner berücksichtigt die bundesweiten Feiertage für Deutschland, Österreich und die Schweiz. Regionale Feiertage müssen separat beachtet werden."
                }
              },
              {
                "@type": "Question",
                name: "Wie berechne ich Arbeitstage zwischen zwei Daten?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Wählen Sie das Land, geben Start- und Enddatum ein. Der Rechner zeigt Ihnen automatisch die Anzahl der Arbeitstage, Wochenenden und Feiertage im gewählten Zeitraum."
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
                name: "Arbeitstage-Rechner",
                item: "https://www.rechnerjetzt.de/arbeitstage-rechner"
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
            name: "Arbeitstage-Rechner 2025/2026",
            description: "Berechnen Sie Arbeitstage zwischen zwei Daten für Deutschland, Österreich und Schweiz",
            url: "https://www.rechnerjetzt.de/arbeitstage-rechner",
            applicationCategory: "CalculatorApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR"
            },
            featureList: [
              "Arbeitstage berechnen für Deutschland, Österreich, Schweiz",
              "Feiertage automatisch berücksichtigen",
              "Wochenenden automatisch ausschließen",
              "Detaillierte Aufschlüsselung der Tage"
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
                <Calendar className="h-4 w-4 mr-1" />
                Arbeitstage-Rechner
              </span>
            </nav>
          </div>
        </div>

        <main>
          {/* Hero Section */}
          <section className="py-12 px-4 bg-gradient-to-br from-background to-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Arbeitstage-Rechner 2025/2026
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Berechnen Sie präzise die Anzahl der Arbeitstage zwischen zwei Daten. 
                Inklusive aller Feiertage für Deutschland, Österreich und die Schweiz.
              </p>
              
              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">🇩🇪🇦🇹🇨🇭 DACH-Region</h3>
                  <p className="text-sm text-muted-foreground">
                    Feiertage für Deutschland, Österreich und Schweiz
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">📅 Aktuell 2025/2026</h3>
                  <p className="text-sm text-muted-foreground">
                    Alle Feiertage für 2025 und 2026 berücksichtigt
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">⚡ Detailliert</h3>
                  <p className="text-sm text-muted-foreground">
                    Aufschlüsselung nach Arbeitstagen, Wochenenden und Feiertagen
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator Component */}
          <WorkdaysCalculator />

          {/* Workdays Overview 2025 */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Arbeitstage 2025 im Überblick
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    🇩🇪 Deutschland
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Arbeitstage 2025:</span>
                      <span className="font-semibold">251 Tage</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Feiertage:</span>
                      <span>9 Tage</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wochenenden:</span>
                      <span>105 Tage</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-muted/30 rounded text-xs">
                    <strong>Wichtige Feiertage:</strong><br/>
                    Karfreitag (18.04.), Tag der Arbeit (01.05.), 
                    Tag der Deutschen Einheit (03.10.)
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    🇦🇹 Österreich
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Arbeitstage 2025:</span>
                      <span className="font-semibold">248 Tage</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Feiertage:</span>
                      <span>13 Tage</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wochenenden:</span>
                      <span>105 Tage</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-muted/30 rounded text-xs">
                    <strong>Zusätzliche Feiertage:</strong><br/>
                    Heilige Drei Könige (06.01.), Fronleichnam (19.06.), 
                    Nationalfeiertag (26.10.)
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    🇨🇭 Schweiz
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Arbeitstage 2025:</span>
                      <span className="font-semibold">249 Tage</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Feiertage:</span>
                      <span>10 Tage</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wochenenden:</span>
                      <span>105 Tage</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-muted/30 rounded text-xs">
                    <strong>Besondere Feiertage:</strong><br/>
                    Berchtoldstag (02.01.), Bundesfeiertag (01.08.)
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  💡 Wie werden Arbeitstage berechnet?
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Eingeschlossen:</h4>
                    <ul className="space-y-1">
                      <li>• Montag bis Freitag</li>
                      <li>• Normale Werktage</li>
                      <li>• Brückentage zwischen Feiertagen</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Ausgeschlossen:</h4>
                    <ul className="space-y-1">
                      <li>• Samstag und Sonntag</li>
                      <li>• Gesetzliche Feiertage</li>
                      <li>• Feiertage die auf Wochenenden fallen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-12 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Wofür wird der Arbeitstage-Rechner verwendet?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">👔 Projektplanung</h3>
                    <p className="text-sm text-muted-foreground">
                      Berechnen Sie realistische Projektlaufzeiten unter Berücksichtigung 
                      von Feiertagen und Wochenenden für präzise Deadlines.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">💰 Gehaltsberechnung</h3>
                    <p className="text-sm text-muted-foreground">
                      Ermitteln Sie die Anzahl der Arbeitstage für Teilzeitverträge, 
                      Stundenabrechnung oder Freelancer-Projekte.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">📊 Urlaubsplanung</h3>
                    <p className="text-sm text-muted-foreground">
                      Planen Sie Ihren Urlaub optimal und berechnen Sie, 
                      wie viele Arbeitstage Sie tatsächlich frei haben.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-3">🏢 Personalplanung</h3>
                    <p className="text-sm text-muted-foreground">
                      HR-Abteilungen können Personalkapazitäten und 
                      Arbeitszeitvolumen für das Jahr planen.
                    </p>
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
                    <p className="text-muted-foreground">Arbeitsrecht & Kalenderwesen</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">📅 Letzte Aktualisierung</h3>
                    <p className="text-muted-foreground">15. Dezember 2024</p>
                    <p className="text-muted-foreground">Feiertage 2025 & 2026 aktualisiert</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">📚 Quellen & Referenzen</h3>
                    <p className="text-muted-foreground">Bundesministerium des Innern</p>
                    <p className="text-muted-foreground">Länderregierungen DE, AT, CH</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Weitere hilfreiche Rechner
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
