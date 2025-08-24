import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ChevronRight, Home, BookOpen, Calculator, TrendingUp, Euro, PiggyBank, ChartBar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Finanzrechner Deutschland - Online-Rechner für Finanzen",
  description: "Entdecken Sie die wichtigsten Finanzrechner für Deutschland: Inflationsrechner, Prozentrechner, Kreditrechner und mehr. Kostenlos und professionell.",
  keywords: "Finanzrechner Deutschland, Online Rechner, Inflationsrechner, Prozentrechner, Kreditrechner, Finanzplanung",
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/finanzrechner-deutschland",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/finanzrechner-deutschland",
      "x-default": "https://www.rechnerjetzt.de/blog/finanzrechner-deutschland",
    },
  },
}

export default function FinanzrechnerDeutschlandPage() {
  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Finanzrechner Deutschland: Die besten Online-Rechner für Ihre Finanzen",
            description: "Entdecken Sie die wichtigsten Finanzrechner für Deutschland: Inflationsrechner, Prozentrechner, Kreditrechner und mehr.",
            author: {
              "@type": "Organization",
              name: "Rechner Tools"
            },
            publisher: {
              "@type": "Organization",
              name: "Rechner Tools",
              logo: {
                "@type": "ImageObject",
                url: "https://www.rechnerjetzt.de/logo.png"
              }
            },
            datePublished: "2024-12-15",
            dateModified: "2024-12-15",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.rechnerjetzt.de/blog/finanzrechner-deutschland"
            }
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Welche Finanzrechner sind in Deutschland am wichtigsten?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Die wichtigsten Finanzrechner in Deutschland sind: Inflationsrechner für Kaufkraftvergleiche, Prozentrechner für Rabatte und Aufschläge, Kreditrechner für Darlehensberechnungen und Mehrwertsteuerrechner für Steuerberechnungen."
                }
              },
              {
                "@type": "Question",
                name: "Sind Online-Finanzrechner sicher und zuverlässig?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, professionelle Online-Finanzrechner sind sicher und zuverlässig. Sie verwenden aktuelle Daten und Formeln, speichern keine persönlichen Daten und werden regelmäßig aktualisiert."
                }
              },
              {
                "@type": "Question",
                name: "Wie oft werden die Daten der Finanzrechner aktualisiert?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Die Daten werden regelmäßig aktualisiert: Inflationsraten monatlich, Steuersätze bei Gesetzesänderungen, und alle Rechner werden kontinuierlich auf Funktionalität und Genauigkeit überprüft."
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
                name: "Blog",
                item: "https://www.rechnerjetzt.de/blog"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Finanzrechner Deutschland",
                item: "https://www.rechnerjetzt.de/blog/finanzrechner-deutschland"
              }
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
              <Link href="/blog" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <BookOpen className="h-4 w-4 mr-1" />
                Blog
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Finanzrechner Deutschland</span>
            </nav>
          </div>
        </div>

        <main>
          <article className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              {/* Article Header */}
              <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Finanzrechner Deutschland: Die besten Online-Rechner für Ihre Finanzen
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Entdecken Sie die wichtigsten Finanzrechner für Deutschland: Von Inflationsrechnern bis zu Kreditrechnern. 
                  Kostenlos, professionell und immer aktuell für Ihre Finanzplanung.
                </p>
                
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <span>📅 15. Dezember 2024</span>
                  <span>•</span>
                  <span>⏱️ 12 Min. Lesezeit</span>
                  <span>•</span>
                  <span>👤 Rechner Tools</span>
                </div>
              </header>

              {/* Quick Access to Calculators */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-12 text-center">
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  💰 Finanzrechner direkt nutzen
                </h2>
                <p className="text-muted-foreground mb-4">
                  Testen Sie unsere professionellen Finanzrechner kostenlos
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/inflationsrechner" 
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <TrendingUp className="h-4 w-4" />
                    Inflationsrechner
                  </Link>
                  <Link 
                    href="/prozentrechner" 
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Calculator className="h-4 w-4" />
                    Prozentrechner
                  </Link>
                  <Link 
                    href="/mehrwertsteuer-rechner" 
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Euro className="h-4 w-4" />
                    MwSt-Rechner
                  </Link>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Warum Finanzrechner in Deutschland unverzichtbar sind
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  In der heutigen komplexen Finanzwelt sind Online-Rechner zu unverzichtbaren Werkzeugen geworden. 
                  Besonders in Deutschland, wo die Finanzregulierung streng ist und die Steuergesetze komplex, 
                  helfen Finanzrechner dabei, wichtige Entscheidungen zu treffen und finanzielle Planungen durchzuführen.
                </p>

                <p className="text-muted-foreground mb-6">
                  Von der Berechnung der Inflation über Rabattberechnungen bis hin zu Steuerberechnungen - 
                  moderne Finanzrechner bieten präzise Ergebnisse basierend auf aktuellen Daten und 
                  gesetzlichen Vorgaben des deutschen Finanzsystems.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Die wichtigsten Finanzrechner für Deutschland
                </h2>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Inflationsrechner: Kaufkraftverluste verstehen
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Der Inflationsrechner ist einer der wichtigsten Finanzrechner für deutsche Verbraucher. 
                  Er hilft dabei zu verstehen, wie sich die Kaufkraft des Geldes über die Zeit entwickelt hat.
                </p>

                <div className="bg-card p-6 rounded-lg border mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Was kann der Inflationsrechner?</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Kaufkraftvergleiche:</strong> Sehen Sie, wie viel Ihr Geld von 1991 bis heute wert ist</li>
                    <li>• <strong>Historische Daten:</strong> Basierend auf offiziellen Inflationsraten des Statistischen Bundesamts</li>
                    <li>• <strong>Jahresaufschlüsselung:</strong> Detaillierte Entwicklung Jahr für Jahr</li>
                    <li>• <strong>Praktische Beispiele:</strong> Verstehen Sie die Auswirkungen der Inflation auf Ihren Alltag</li>
                  </ul>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Praktisches Beispiel:</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>1000€ von 2000:</strong> Heute entspricht dieser Betrag etwa 1520€. Das bedeutet, 
                    dass Sie heute 1520€ benötigen, um die gleiche Kaufkraft zu haben wie 1000€ im Jahr 2000.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Prozentrechner: Rabatte und Aufschläge berechnen
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Der Prozentrechner ist der am häufigsten verwendete Finanzrechner im Alltag. 
                  Er hilft bei der Berechnung von Rabatten, Aufschlägen und prozentualen Änderungen.
                </p>

                <div className="bg-card p-6 rounded-lg border mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Anwendungsbereiche des Prozentrechners</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Privatanwender:</strong>
                      <ul className="list-disc pl-4 mt-1 space-y-1 text-muted-foreground">
                        <li>Rabattberechnungen beim Shopping</li>
                        <li>Trinkgeld berechnen</li>
                        <li>Preisvergleiche</li>
                        <li>Gehaltserhöhungen</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Geschäftsanwender:</strong>
                      <ul className="list-disc pl-4 mt-1 space-y-1 text-muted-foreground">
                        <li>Mehrwertsteuer berechnen</li>
                        <li>Gewinnmargen kalkulieren</li>
                        <li>Preisgestaltung</li>
                        <li>Rabattpolitik</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Mehrwertsteuerrechner: Steuerberechnungen professionell
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Der Mehrwertsteuerrechner ist besonders wichtig für deutsche Unternehmen und Selbstständige. 
                  Er hilft bei der korrekten Berechnung von Brutto- und Nettopreisen.
                </p>

                <div className="bg-card p-6 rounded-lg border mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">MwSt-Sätze in Deutschland</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">19%</div>
                      <p className="text-sm text-muted-foreground">Regelsatz</p>
                      <p className="text-xs text-muted-foreground mt-1">Elektronik, Kleidung, Dienstleistungen</p>
                    </div>
                    <div className="text-center p-3 bg-green-100 rounded-lg">
                      <div className="text-lg font-bold text-green-700">7%</div>
                      <p className="text-sm text-muted-foreground">Ermäßigter Satz</p>
                      <p className="text-xs text-muted-foreground mt-1">Lebensmittel, Bücher, Medikamente</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Vorteile professioneller Online-Finanzrechner
                </h2>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Aktualität und Zuverlässigkeit
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Professionelle Finanzrechner werden kontinuierlich mit den neuesten Daten aktualisiert. 
                  Dies ist besonders wichtig in Deutschland, wo sich Steuergesetze und Finanzregulierung 
                  regelmäßig ändern können.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-semibold text-foreground mb-3">Regelmäßige Updates</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Inflationsraten: Monatlich aktualisiert</li>
                      <li>• Steuersätze: Bei Gesetzesänderungen</li>
                      <li>• Formeln: Kontinuierlich überprüft</li>
                      <li>• Funktionalität: Regelmäßig getestet</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-semibold text-foreground mb-3">Datenquellen</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Statistisches Bundesamt</li>
                      <li>• Bundesministerium der Finanzen</li>
                      <li>• Europäische Zentralbank</li>
                      <li>• Offizielle Veröffentlichungen</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Benutzerfreundlichkeit und Zugänglichkeit
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Moderne Finanzrechner sind so konzipiert, dass sie von jedem genutzt werden können, 
                  unabhängig von mathematischen Kenntnissen oder technischem Verständnis.
                </p>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Benutzerfreundliche Features</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Einfache Bedienung:</strong>
                      <ul className="list-disc pl-4 mt-1 space-y-1 text-muted-foreground">
                        <li>Klare Eingabefelder</li>
                        <li>Intuitive Benutzeroberfläche</li>
                        <li>Sofortige Ergebnisse</li>
                        <li>Schritt-für-Schritt Anleitungen</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Zusätzliche Funktionen:</strong>
                      <ul className="list-disc pl-4 mt-1 space-y-1 text-muted-foreground">
                        <li>Ergebnis-Export</li>
                        <li>Berechnungsverlauf</li>
                        <li>Hilfetexte und Beispiele</li>
                        <li>Mobile Optimierung</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Anwendungsbereiche in der deutschen Wirtschaft
                </h2>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Kleinunternehmen und Selbstständige
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Für deutsche Kleinunternehmer sind Finanzrechner unverzichtbare Werkzeuge. 
                  Sie helfen bei der korrekten Preisgestaltung und der Einhaltung steuerlicher Vorgaben.
                </p>

                <div className="bg-card p-6 rounded-lg border mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Typische Anwendungen</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-muted/30 p-3 rounded">
                      <strong>Preisgestaltung:</strong> Berechnung von Brutto- und Nettopreisen unter Berücksichtigung der MwSt.
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <strong>Kostenkalkulation:</strong> Ermittlung der tatsächlichen Kosten und Gewinnmargen
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <strong>Rechnungsstellung:</strong> Korrekte Berechnung von Steuern und Abgaben
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Privatpersonen und Haushalte
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Auch für private Haushalte in Deutschland bieten Finanzrechner wertvolle Unterstützung 
                  bei der persönlichen Finanzplanung und dem Verständnis wirtschaftlicher Zusammenhänge.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-semibold text-foreground mb-3">Haushaltsplanung</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Monatsbudget kalkulieren</li>
                      <li>• Ausgaben analysieren</li>
                      <li>• Sparziele definieren</li>
                      <li>• Inflation berücksichtigen</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-semibold text-foreground mb-3">Konsumentscheidungen</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Preisvergleiche anstellen</li>
                      <li>• Rabatte berechnen</li>
                      <li>• Ratenzahlungen kalkulieren</li>
                      <li>• Gesamtkosten ermitteln</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Zukunft der Finanzrechner in Deutschland
                </h2>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Digitalisierung und Automatisierung
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Die Digitalisierung der deutschen Wirtschaft führt zu einer zunehmenden Automatisierung 
                  von Finanzprozessen. Moderne Finanzrechner integrieren sich nahtlos in diese Entwicklung.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">API-Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Finanzrechner werden zunehmend über APIs in andere Systeme integriert, 
                      was eine nahtlose Datenübertragung und automatisierte Berechnungen ermöglicht.
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Echtzeit-Daten</h4>
                    <p className="text-sm text-muted-foreground">
                      Die Integration von Echtzeit-Daten ermöglicht noch präzisere Berechnungen 
                      und eine bessere Aktualität der Ergebnisse.
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">KI-gestützte Funktionen</h4>
                    <p className="text-sm text-muted-foreground">
                      Künstliche Intelligenz wird zunehmend in Finanzrechner integriert, 
                      um personalisierte Empfehlungen und Vorhersagen zu ermöglichen.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Regulatorische Anpassungen
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Die deutsche Finanzregulierung entwickelt sich kontinuierlich weiter. 
                  Moderne Finanzrechner passen sich automatisch an diese Änderungen an.
                </p>

                <div className="bg-card p-6 rounded-lg border mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Automatische Updates</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Steuergesetze:</strong>
                      <ul className="list-disc pl-4 mt-1 space-y-1 text-muted-foreground">
                        <li>MwSt-Sätze</li>
                        <li>Steuerfreibeträge</li>
                        <li>Abgabefristen</li>
                        <li>Formularanforderungen</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Finanzregulierung:</strong>
                      <ul className="list-disc pl-4 mt-1 space-y-1 text-muted-foreground">
                        <li>Zinsrichtlinien</li>
                        <li>Kreditrichtlinien</li>
                        <li>Anlagevorschriften</li>
                        <li>Transparenzregeln</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Fazit: Finanzrechner als Schlüssel zur finanziellen Kompetenz
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Professionelle Finanzrechner sind in der modernen deutschen Wirtschaft unverzichtbar. 
                  Sie bieten Privatpersonen und Unternehmen die Möglichkeit, komplexe finanzielle 
                  Berechnungen einfach und präzise durchzuführen.
                </p>

                <p className="text-muted-foreground mb-6">
                  Mit der zunehmenden Digitalisierung und den sich entwickelnden regulatorischen 
                  Anforderungen werden Finanzrechner noch wichtiger für die finanzielle Planung 
                  und Entscheidungsfindung in Deutschland.
                </p>

                <p className="text-muted-foreground mb-6">
                  Nutzen Sie unsere professionellen Finanzrechner, um Ihre finanzielle Zukunft 
                  optimal zu planen und fundierte Entscheidungen zu treffen.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    🚀 Jetzt Finanzrechner nutzen!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Testen Sie unsere professionellen Finanzrechner kostenlos
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/inflationsrechner" 
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <TrendingUp className="h-5 w-5" />
                      Inflationsrechner
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link 
                      href="/prozentrechner" 
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Calculator className="h-5 w-5" />
                      Prozentrechner
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link 
                      href="/mehrwertsteuer-rechner" 
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Euro className="h-5 w-5" />
                      MwSt-Rechner
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </article>

          {/* Related Articles */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Weitere hilfreiche Artikel
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/mehrwertsteuer-berechnung" className="group">
                  <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                      MwSt. berechnen: Methoden und Beispiele
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Lernen Sie verschiedene Methoden zur MwSt.-Berechnung kennen
                    </p>
                  </div>
                </Link>
                
                <Link href="/blog/prozentrechner-anleitung" className="group">
                  <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                      Prozentrechnung lernen
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Meistern Sie die Prozentrechnung mit praktischen Beispielen
                    </p>
                  </div>
                </Link>
                
                <Link href="/blog/inflation-einfach-erklaert" className="group">
                  <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                      Inflation verstehen
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Wie Inflation Ihre Kaufkraft beeinflusst und was Sie tun können
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
