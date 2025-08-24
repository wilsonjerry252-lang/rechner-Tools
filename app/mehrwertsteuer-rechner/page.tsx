import type { Metadata } from "next"
import Link from "next/link"
import VATCalculator from "@/components/VATCalculator"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ChevronRight, Home, Calculator, Euro, FileText, TrendingUp, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Mehrwertsteuer Rechner 2025 - MwSt. berechnen für DE, AT, CH",
  description: "Berechnen Sie Mehrwertsteuer kostenlos online. Brutto-Netto-Rechner für Deutschland (19%), Österreich (20%) und Schweiz (8.1%). Inklusive MwSt.-Sätze und Formeln.",
  keywords: "mehrwertsteuer rechner, mwst berechnen, brutto netto rechner, steuerrechner, mwst satz deutschland, österreich schweiz",
  alternates: {
    canonical: "https://www.rechnerjetzt.de/mehrwertsteuer-rechner",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/mehrwertsteuer-rechner",
      "de-AT": "https://www.rechnerjetzt.de/mehrwertsteuer-rechner",
      "de-CH": "https://www.rechnerjetzt.de/mehrwertsteuer-rechner",
      "x-default": "https://www.rechnerjetzt.de/mehrwertsteuer-rechner",
    },
  },
}

export default function MehrwertsteuerRechnerPage() {
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
                name: "Wie berechne ich die Mehrwertsteuer von Netto zu Brutto?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Multiplizieren Sie den Nettobetrag mit (1 + MwSt.-Satz). Beispiel: 100€ × 1,19 = 119€ bei 19% MwSt. in Deutschland."
                }
              },
              {
                "@type": "Question",
                name: "Welche MwSt.-Sätze gelten in Deutschland, Österreich und der Schweiz?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Deutschland: 19% (ermäßigt 7%), Österreich: 20% (ermäßigt 10%), Schweiz: 8.1% (ermäßigt 2.5%)."
                }
              },
              {
                "@type": "Question",
                name: "Wie berechne ich die MwSt. von Brutto zu Netto?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Teilen Sie den Bruttobetrag durch (1 + MwSt.-Satz). Beispiel: 119€ ÷ 1,19 = 100€ bei 19% MwSt."
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
                name: "Mehrwertsteuer-Rechner",
                item: "https://www.rechnerjetzt.de/mehrwertsteuer-rechner"
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
            name: "Mehrwertsteuer-Rechner 2025",
            description: "Kostenloser Online-Rechner für Mehrwertsteuer-Berechnungen in Deutschland, Österreich und der Schweiz",
            url: "https://www.rechnerjetzt.de/mehrwertsteuer-rechner",
            applicationCategory: "CalculatorApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR"
            },
            featureList: [
              "Brutto-Netto-Berechnung",
              "Netto-Brutto-Berechnung",
              "MwSt.-Sätze für DE, AT, CH",
              "Ermäßigte Steuersätze",
              "Automatische Berechnung"
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
                Mehrwertsteuer-Rechner
              </span>
            </nav>
          </div>
        </div>

        <main>
          {/* Hero Section */}
          <section className="py-12 px-4 bg-gradient-to-br from-background to-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Mehrwertsteuer-Rechner 2025
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Berechnen Sie Mehrwertsteuer kostenlos online. Brutto-Netto-Rechner für Deutschland, Österreich und die Schweiz 
                mit aktuellen MwSt.-Sätzen und detaillierten Berechnungen.
              </p>
              
              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">🇩🇪🇦🇹🇨🇭 DACH-Region</h3>
                  <p className="text-sm text-muted-foreground">
                    MwSt.-Sätze für Deutschland, Österreich und Schweiz
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">⚡ Sofortberechnung</h3>
                  <p className="text-sm text-muted-foreground">
                    Brutto-Netto und Netto-Brutto in Echtzeit
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">📊 Detailliert</h3>
                  <p className="text-sm text-muted-foreground">
                    Alle Berechnungsschritte und Formeln sichtbar
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator Component */}
          <VATCalculator />

          {/* MwSt. Overview Section */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Mehrwertsteuer-Sätze in der DACH-Region
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    🇩🇪 Deutschland
                  </h3>
                  <div className="space-y-3">
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">19%</div>
                      <p className="text-sm text-muted-foreground">Regelsatz</p>
                    </div>
                    <div className="text-center p-3 bg-green-100 rounded-lg">
                      <div className="text-lg font-bold text-green-700">7%</div>
                      <p className="text-sm text-muted-foreground">Ermäßigter Satz</p>
                    </div>
                    <div className="text-xs text-muted-foreground mt-3">
                      <strong>Ermäßigt:</strong> Bücher, Lebensmittel, Medikamente, Hotelübernachtungen
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    🇦🇹 Österreich
                  </h3>
                  <div className="space-y-3">
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">20%</div>
                      <p className="text-sm text-muted-foreground">Regelsatz</p>
                    </div>
                    <div className="text-center p-3 bg-green-100 rounded-lg">
                      <div className="text-lg font-bold text-green-700">10%</div>
                      <p className="text-sm text-muted-foreground">Ermäßigter Satz</p>
                    </div>
                    <div className="text-xs text-muted-foreground mt-3">
                      <strong>Ermäßigt:</strong> Bücher, Lebensmittel, Medikamente, Kulturveranstaltungen
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    🇨🇭 Schweiz
                  </h3>
                  <div className="space-y-3">
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">8.1%</div>
                      <p className="text-sm text-muted-foreground">Regelsatz</p>
                    </div>
                    <div className="text-center p-3 bg-green-100 rounded-lg">
                      <div className="text-lg font-bold text-green-700">2.5%</div>
                      <p className="text-sm text-muted-foreground">Ermäßigter Satz</p>
                    </div>
                    <div className="text-xs text-muted-foreground mt-3">
                      <strong>Ermäßigt:</strong> Lebensmittel, Bücher, Zeitungen, Medikamente
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comprehensive MwSt. Guide */}
          <section className="py-12 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Mehrwertsteuer verstehen: Kompletter Guide
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Was ist die Mehrwertsteuer?</h3>
                  <p className="text-muted-foreground mb-4">
                    Die Mehrwertsteuer (MwSt.) ist eine indirekte Steuer, die auf den Verbrauch von Waren und Dienstleistungen erhoben wird. 
                    Sie wird in der gesamten Wertschöpfungskette erhoben und letztlich vom Endverbraucher getragen. Die MwSt. ist eine der 
                    wichtigsten Einnahmequellen des Staates und macht in Deutschland etwa 30% der gesamten Steuereinnahmen aus.
                  </p>
                  <p className="text-muted-foreground">
                    Im Gegensatz zur Einkommensteuer wird die MwSt. nicht direkt vom Verbraucher an den Staat abgeführt, sondern über 
                    die Unternehmen im Rahmen der Umsatzsteuererklärung. Das System der Vorsteuer ermöglicht es Unternehmen, die von 
                    ihnen gezahlte MwSt. auf Eingangsrechnungen mit der von ihnen berechneten MwSt. auf Ausgangsrechnungen zu verrechnen.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Grundprinzipien der MwSt.-Berechnung</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Netto zu Brutto</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Formel:</strong> Brutto = Netto × (1 + MwSt.-Satz)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Beispiel:</strong> 100€ × 1,19 = 119€ bei 19% MwSt.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Brutto zu Netto</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Formel:</strong> Netto = Brutto ÷ (1 + MwSt.-Satz)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Beispiel:</strong> 119€ ÷ 1,19 = 100€ bei 19% MwSt.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Länderspezifische Besonderheiten</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-card p-6 rounded-lg border">
                      <h4 className="text-xl font-semibold text-foreground mb-3">🇩🇪 Deutschland</h4>
                      <p className="text-muted-foreground mb-3">
                        Deutschland hat mit 19% den niedrigsten Regelsatz in der DACH-Region. Der ermäßigte Satz von 7% gilt für 
                        eine Vielzahl von Gütern des täglichen Bedarfs. Besonders zu beachten ist die sogenannte "Kleinunternehmerregelung", 
                        die es Unternehmen mit einem Jahresumsatz unter 22.000€ ermöglicht, auf die MwSt.-Berechnung zu verzichten.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Regelsatz (19%):</strong>
                          <ul className="list-disc pl-4 mt-1 space-y-1 text-muted-foreground">
                            <li>Elektronik und Technik</li>
                            <li>Kleidung und Schuhe</li>
                            <li>Dienstleistungen</li>
                            <li>Luxusgüter</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Ermäßigter Satz (7%):</strong>
                          <ul className="list-disc pl-4 mt-1 space-y-1 text-muted-foreground">
                            <li>Bücher und Zeitungen</li>
                            <li>Lebensmittel</li>
                            <li>Medikamente</li>
                            <li>Hotelübernachtungen</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card p-6 rounded-lg border">
                      <h4 className="text-xl font-semibold text-foreground mb-3">🇦🇹 Österreich</h4>
                      <p className="text-muted-foreground mb-3">
                        Österreich hat mit 20% den höchsten Regelsatz in der DACH-Region. Der ermäßigte Satz von 10% ist höher 
                        als in Deutschland, was zu höheren Preisen für Grundnahrungsmittel und Bücher führt. Österreich hat auch 
                        besondere Regelungen für grenzüberschreitende Dienstleistungen innerhalb der EU.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Regelsatz (20%):</strong>
                          <ul className="list-disc pl-4 mt-1 space-y-1 text-muted-foreground">
                            <li>Industriegüter</li>
                            <li>Dienstleistungen</li>
                            <li>Luxusartikel</li>
                            <li>Freizeitartikel</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Ermäßigter Satz (10%):</strong>
                          <ul className="list-disc pl-4 mt-1 space-y-1 text-muted-foreground">
                            <li>Lebensmittel</li>
                            <li>Kulturveranstaltungen</li>
                            <li>Medizinische Leistungen</li>
                            <li>Bildungseinrichtungen</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card p-6 rounded-lg border">
                      <h4 className="text-xl font-semibold text-foreground mb-3">🇨🇭 Schweiz</h4>
                      <p className="text-muted-foreground mb-3">
                        Die Schweiz hat mit 8.1% den niedrigsten Regelsatz in der DACH-Region. Das Schweizer MwSt.-System ist 
                        vergleichsweise einfach aufgebaut, da es weniger Ausnahmen und Sonderregelungen gibt. Besonders zu beachten 
                        ist, dass die Schweiz nicht zur EU gehört und daher andere Regelungen für grenzüberschreitende Geschäfte hat.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Regelsatz (8.1%):</strong>
                          <ul className="list-disc pl-4 mt-1 space-y-1 text-muted-foreground">
                            <li>Konsumgüter</li>
                            <li>Dienstleistungen</li>
                            <li>Importwaren</li>
                            <li>Luxusartikel</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Ermäßigter Satz (2.5%):</strong>
                          <ul className="list-disc pl-4 mt-1 space-y-1 text-muted-foreground">
                            <li>Grundnahrungsmittel</li>
                            <li>Bücher und Zeitungen</li>
                            <li>Medikamente</li>
                            <li>Öffentlicher Verkehr</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Praktische Anwendungsfälle</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-foreground mb-3">E-Commerce und Online-Handel</h4>
                      <p className="text-muted-foreground mb-3">
                        Im Online-Handel ist die korrekte MwSt.-Berechnung besonders wichtig, da Kunden aus verschiedenen Ländern 
                        bestellen können. Die MwSt. richtet sich nach dem Sitz des Unternehmens und dem Bestimmungsland der Lieferung. 
                        Innerhalb der EU gelten besondere Regelungen für den B2B- und B2C-Handel.
                      </p>
                      <div className="bg-card p-4 rounded-lg">
                        <h5 className="font-medium text-foreground mb-2">Wichtige Regeln:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• B2B: MwSt. des Bestimmungslandes (Reverse Charge)</li>
                          <li>• B2C: MwSt. des Verkaufslandes bei Lieferungen unter 10.000€</li>
                          <li>• B2C: MwSt. des Bestimmungslandes bei Lieferungen über 10.000€</li>
                          <li>• Digitale Dienstleistungen: MwSt. des Verbraucherlandes</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Gastronomie und Hotellerie</h4>
                      <p className="text-muted-foreground mb-3">
                        In der Gastronomie gelten besondere MwSt.-Regelungen. In Deutschland und Österreich werden Restaurantmahlzeiten 
                        mit dem ermäßigten Satz besteuert, während in der Schweiz der Regelsatz gilt. Hotelübernachtungen haben in 
                        allen drei Ländern ermäßigte Sätze.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">7%</div>
                          <p className="text-muted-foreground">Deutschland</p>
                          <p className="text-xs text-muted-foreground">Restaurant & Hotel</p>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">10%</div>
                          <p className="text-muted-foreground">Österreich</p>
                          <p className="text-xs text-muted-foreground">Restaurant & Hotel</p>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">8.1%</div>
                          <p className="text-muted-foreground">Schweiz</p>
                          <p className="text-xs text-muted-foreground">Restaurant</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Bauwesen und Handwerk</h4>
                      <p className="text-muted-foreground mb-3">
                        Im Bauwesen gelten besondere MwSt.-Regelungen, die sich nach der Art der Leistung und dem Auftraggeber 
                        richten. Bauleistungen für private Auftraggeber unterliegen dem Regelsatz, während für gewerbliche 
                        Auftraggeber andere Regelungen gelten können.
                      </p>
                      <div className="bg-card p-4 rounded-lg">
                        <h5 className="font-medium text-foreground mb-2">Bauleistungen MwSt.:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Neubauten: Regelsatz (19%/20%/8.1%)</li>
                          <li>• Renovierungen: Regelsatz</li>
                          <li>• Reparaturen: Regelsatz</li>
                          <li>• Planungsleistungen: Regelsatz</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">MwSt.-Ausnahmen und Sonderfälle</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card p-6 rounded-lg border">
                      <h4 className="text-lg font-semibold text-foreground mb-3">MwSt.-freie Leistungen</h4>
                      <p className="text-muted-foreground mb-3">
                        Bestimmte Leistungen sind von der MwSt. befreit, da sie als "nicht steuerbar" gelten oder aus 
                        sozialpolitischen Gründen steuerfrei gestellt werden.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Ärztliche und therapeutische Leistungen</li>
                        <li>• Bank- und Versicherungsdienstleistungen</li>
                        <li>• Bildungsleistungen (Schulen, Universitäten)</li>
                        <li>• Kulturveranstaltungen (staatliche Einrichtungen)</li>
                        <li>• Internationale Transporte</li>
                        <li>• Postdienstleistungen</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card p-6 rounded-lg border">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Kleinunternehmerregelung</h4>
                      <p className="text-muted-foreground mb-3">
                        Kleinunternehmer können unter bestimmten Voraussetzungen von der MwSt.-Berechnung befreit werden, 
                        was die Buchhaltung vereinfacht.
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div>
                          <strong>Deutschland:</strong> Jahresumsatz unter 22.000€
                        </div>
                        <div>
                          <strong>Österreich:</strong> Jahresumsatz unter 35.000€
                        </div>
                        <div>
                          <strong>Schweiz:</strong> Jahresumsatz unter 100.000 CHF
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">MwSt.-Berechnung bei verschiedenen Währungen</h3>
                  
                  <p className="text-muted-foreground mb-4">
                    Bei internationalen Geschäften ist die korrekte Währungsumrechnung und MwSt.-Berechnung entscheidend. 
                    Die MwSt. wird immer in der Landeswährung des Verkaufslandes berechnet, unabhängig von der Währung der Rechnung.
                  </p>
                  
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Wichtige Grundsätze:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li><strong>Währungsgrundsatz:</strong> MwSt. wird in der Landeswährung berechnet</li>
                      <li><strong>Wechselkurs:</strong> Verwendung des aktuellen Wechselkurses zum Zeitpunkt der Rechnung</li>
                      <li><strong>Rundung:</strong> MwSt.-Beträge werden auf 2 Dezimalstellen gerundet</li>
                      <li><strong>Dokumentation:</strong> Wechselkurs und Berechnungsmethode dokumentieren</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Tipps für die Praxis</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-foreground mb-2">Für Unternehmer:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Regelmäßige Überprüfung der aktuellen MwSt.-Sätze</li>
                        <li>• Korrekte Dokumentation aller MwSt.-Berechnungen</li>
                        <li>• Nutzung von MwSt.-Rechnern für komplexe Berechnungen</li>
                        <li>• Beratung bei Steuerberatern bei Unsicherheiten</li>
                        <li>• Beachtung von Sonderregelungen und Ausnahmen</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg border">
                      <h4 className="font-semibold text-foreground mb-2">Für Verbraucher:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Überprüfung der MwSt.-Berechnung auf Rechnungen</li>
                        <li>• Beachtung von ermäßigten Sätzen bei bestimmten Gütern</li>
                        <li>• Vergleich von Preisen inklusive MwSt.</li>
                        <li>• Kenntnis der MwSt.-Sätze im eigenen Land</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Häufige Fehler vermeiden</h3>
                  
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h4 className="text-lg font-bold text-red-700 mb-3">Typische MwSt.-Fehler:</h4>
                    <ul className="text-red-700 space-y-2">
                      <li>• <strong>Doppelte MwSt.-Berechnung:</strong> MwSt. auf bereits brutto berechnete Beträge aufschlagen</li>
                      <li>• <strong>Falsche Steuersätze:</strong> Verwendung veralteter oder falscher MwSt.-Sätze</li>
                      <li>• <strong>Fehlende Dokumentation:</strong> MwSt.-Berechnungen nicht ausreichend dokumentieren</li>
                      <li>• <strong>Falsche Rundung:</strong> MwSt.-Beträge nicht korrekt auf 2 Dezimalstellen runden</li>
                      <li>• <strong>Vergessene Ausnahmen:</strong> MwSt.-Ausnahmen und -Befreiungen nicht beachten</li>
                      <li>• <strong>Länderspezifische Regelungen:</strong> Unterschiede zwischen DACH-Ländern ignorieren</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Fazit</h3>
                  <p className="text-muted-foreground">
                    Die korrekte Mehrwertsteuer-Berechnung ist fundamental für die Buchhaltung, Preisgestaltung und Compliance 
                    in der DACH-Region. Mit unserem MwSt.-Rechner können Sie schnell und sicher alle Berechnungen durchführen. 
                    Achten Sie auf die aktuellen Steuersätze, länderspezifische Besonderheiten und besondere Regelungen. 
                    Bei komplexen Fällen ist es ratsam, sich von einem Steuerberater beraten zu lassen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Weitere nützliche Rechner
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
                    <p className="text-muted-foreground">Steuerrecht & Wirtschaftswissenschaften</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">📅 Letzte Aktualisierung</h3>
                    <p className="text-muted-foreground">15. Dezember 2024</p>
                    <p className="text-muted-foreground">MwSt.-Sätze 2025 aktuell</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">📚 Quellen & Referenzen</h3>
                    <p className="text-muted-foreground">Bundesministerium der Finanzen</p>
                    <p className="text-muted-foreground">EU-Kommission & BMF Österreich</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Blog Posts */}
          <section className="py-12 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Mehrwertsteuer verstehen
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
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
                
                <Link href="/blog/mehrwertsteuer-deutschland-oesterreich-schweiz" className="group">
                  <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                      MwSt. in der DACH-Region
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Überblick über MwSt.-Sätze und Regelungen in DE, AT, CH
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
