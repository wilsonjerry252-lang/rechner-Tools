import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "MwSt.-Ausnahmen: Wann gilt welcher Satz?",
  description: "Erfahren Sie alles über MwSt.-Ausnahmen und reduzierte Steuersätze. Ein Leitfaden für besondere Fälle und Ausnahmeregelungen.",
  keywords: "mehrwertsteuer ausnahmen, mwst ausnahmen, reduzierte steuersätze, mwst sonderfälle, steuerausnahmen, mwst regeln",
  openGraph: {
    title: "MwSt.-Ausnahmen: Wann gilt welcher Satz?",
    description: "Erfahren Sie alles über MwSt.-Ausnahmen und reduzierte Steuersätze. Ein Leitfaden für besondere Fälle und Ausnahmeregelungen.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/mehrwertsteuer-ausnahmen",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/mehrwertsteuer-ausnahmen",
    },
  },
}

export default function MehrwertsteuerAusnahmenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-md" />
              <div>
                <h2 className="text-2xl font-bold font-serif">Rechner Tools</h2>
                <p className="text-sm opacity-90 font-medium">Professionelle Online-Rechner</p>
              </div>
            </div>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück zum Blog
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-card rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Steuern
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Mehrwertsteuer-Ausnahmen: Wann gilt welcher Satz?
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Die Mehrwertsteuer ist nicht immer einheitlich. Es gibt verschiedene Sätze, Ausnahmen und steuerfreie Leistungen. In diesem umfassenden Leitfaden erfahren Sie, wann welcher MwSt.-Satz gilt und welche Besonderheiten Sie beachten müssen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Übersicht der MwSt.-Sätze in Deutschland</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Standard-MwSt.</h3>
                <div className="text-3xl font-bold text-foreground mb-2">19%</div>
                <p className="text-sm text-muted-foreground mb-3">Gilt für die meisten Waren und Dienstleistungen</p>
                <ul className="text-sm space-y-1">
                  <li>• Elektronik</li>
                  <li>• Bekleidung</li>
                  <li>• Beratungsleistungen</li>
                  <li>• Handwerksarbeiten</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Ermäßigte MwSt.</h3>
                <div className="text-3xl font-bold text-foreground mb-2">7%</div>
                <p className="text-sm text-muted-foreground mb-3">Für bestimmte Waren und Dienstleistungen</p>
                <ul className="text-sm space-y-1">
                  <li>• Bücher und Zeitungen</li>
                  <li>• Lebensmittel</li>
                  <li>• Hotelübernachtungen</li>
                  <li>• Medikamente</li>
                </ul>
              </div>
              
              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-xl font-bold text-accent mb-3">MwSt.-frei</h3>
                <div className="text-3xl font-bold text-foreground mb-2">0%</div>
                <p className="text-sm text-muted-foreground mb-3">Für bestimmte Leistungen</p>
                <ul className="text-sm space-y-1">
                  <li>• Ärztliche Leistungen</li>
                  <li>• Bankdienstleistungen</li>
                  <li>• Versicherungen</li>
                  <li>• Internationale Transporte</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Ermäßigte MwSt. von 7% im Detail</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Bücher, Zeitungen und Druckerzeugnisse</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">7% MwSt. gilt für:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Bücher aller Art</li>
                      <li>• Zeitungen und Zeitschriften</li>
                      <li>• Broschüren und Kataloge</li>
                      <li>• E-Books (digitale Bücher)</li>
                      <li>• Hörbücher</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Ausnahmen (19%):</p>
                    <ul className="text-sm space-y-1">
                      <li>• Werbekataloge</li>
                      <li>• Geschäftsberichte</li>
                      <li>• Werbematerial</li>
                      <li>• Schulungsunterlagen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Lebensmittel und Getränke</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">7% MwSt. gilt für:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Grundnahrungsmittel</li>
                      <li>• Obst und Gemüse</li>
                      <li>• Milch und Milchprodukte</li>
                      <li>• Brot und Backwaren</li>
                      <li>• Fleisch und Fisch</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">19% MwSt. gilt für:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Alkoholische Getränke</li>
                      <li>• Süßigkeiten und Snacks</li>
                      <li>• Fertiggerichte</li>
                      <li>• Restaurantbesuche</li>
                      <li>• Lieferdienste</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">Beherbergung und Gastronomie</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">7% MwSt. gilt für:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Hotelübernachtungen</li>
                      <li>• Ferienwohnungen</li>
                      <li>• Campingplätze</li>
                      <li>• Jugendherbergen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">19% MwSt. gilt für:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Restaurantbesuche</li>
                      <li>• Catering-Services</li>
                      <li>• Lieferdienste</li>
                      <li>• Getränke im Hotel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">MwSt.-freie Leistungen (0%)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Gesundheitswesen und Soziales</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Ärztliche Leistungen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Arztbesuche und Behandlungen</li>
                      <li>• Zahnärztliche Leistungen</li>
                      <li>• Physiotherapie</li>
                      <li>• Psychotherapie</li>
                      <li>• Krankenhausaufenthalte</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Soziale Leistungen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Pflegedienstleistungen</li>
                      <li>• Sozialarbeit</li>
                      <li>• Kinderbetreuung</li>
                      <li>• Altenpflege</li>
                      <li>• Behindertenhilfe</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Finanz- und Versicherungsdienstleistungen</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Bankdienstleistungen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Kontoführung</li>
                      <li>• Überweisungen</li>
                      <li>• Kreditvergabe</li>
                      <li>• Wertpapiergeschäfte</li>
                      <li>• Beratungsleistungen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Versicherungen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Lebensversicherungen</li>
                      <li>• Krankenversicherungen</li>
                      <li>• Haftpflichtversicherungen</li>
                      <li>• Kfz-Versicherungen</li>
                      <li>• Hausratversicherungen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Internationale Geschäfte</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">EU-Geschäfte:</p>
                    <ul className="text-sm space-y-1">
                      <li>• B2B-Lieferungen innerhalb der EU</li>
                      <li>• Dienstleistungen an EU-Unternehmen</li>
                      <li>• Reverse-Charge-Verfahren</li>
                      <li>• Intrastat-Meldungen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Außerhalb der EU:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Exporte in Drittländer</li>
                      <li>• Dienstleistungen ins Ausland</li>
                      <li>• Internationale Transporte</li>
                      <li>• Zollabfertigung</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Besondere Fälle und Ausnahmen</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Kleinunternehmerregelung</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Bei Umsatz unter 22.000€ pro Jahr können Sie von der MwSt.-Pflicht befreit werden.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Keine MwSt. auf Rechnungen</li>
                  <li>• Kein Vorsteuerabzug möglich</li>
                  <li>• Einfache Buchhaltung</li>
                  <li>• Geringere Kosten</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Land- und Forstwirtschaft</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Besondere Regelungen für landwirtschaftliche Betriebe.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Pauschalierung möglich</li>
                  <li>• Ermäßigte Sätze</li>
                  <li>• Vereinfachte Verfahren</li>
                  <li>• Sonderregelungen</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Beispiele für MwSt.-Sätze</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Beispiel 1: Buchhandlung</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Buch (25€):</strong> 7% MwSt. = 1,75€, Gesamtpreis: 26,75€<br/>
                  <strong>Schreibwaren (5€):</strong> 19% MwSt. = 0,95€, Gesamtpreis: 5,95€
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Beispiel 2: Restaurant</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Mahlzeit (15€):</strong> 19% MwSt. = 2,85€, Gesamtpreis: 17,85€<br/>
                  <strong>Hotelübernachtung (80€):</strong> 7% MwSt. = 5,60€, Gesamtpreis: 85,60€
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Beispiel 3: Apotheke</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Medikament (20€):</strong> 7% MwSt. = 1,40€, Gesamtpreis: 21,40€<br/>
                  <strong>Kosmetik (15€):</strong> 19% MwSt. = 2,85€, Gesamtpreis: 17,85€
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">MwSt.-Berechnung bei verschiedenen Sätzen</h2>
            
            <div className="bg-accent/5 p-6 rounded-xl mb-6 border border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Berechnungsmethoden:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Netto zu Brutto:</p>
                  <div className="text-sm space-y-1">
                    <p><strong>7% MwSt.:</strong> Netto × 1,07 = Brutto</p>
                    <p><strong>19% MwSt.:</strong> Netto × 1,19 = Brutto</p>
                    <p><strong>0% MwSt.:</strong> Netto = Brutto</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Brutto zu Netto:</p>
                  <div className="text-sm space-y-1">
                    <p><strong>7% MwSt.:</strong> Brutto ÷ 1,07 = Netto</p>
                    <p><strong>19% MwSt.:</strong> Brutto ÷ 1,19 = Netto</p>
                    <p><strong>0% MwSt.:</strong> Brutto = Netto</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Tipps für Unternehmer</h2>
            
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>MwSt.-Sätze kennen:</strong> Informieren Sie sich über die geltenden Sätze für Ihre Branche</li>
              <li><strong>Rechnungen korrekt ausstellen:</strong> Verwenden Sie die richtigen MwSt.-Sätze auf Ihren Rechnungen</li>
              <li><strong>Buchhaltung trennen:</strong> Führen Sie separate Konten für verschiedene MwSt.-Sätze</li>
              <li><strong>Beratung einholen:</strong> Bei Unsicherheiten lassen Sie sich von einem Steuerberater beraten</li>
              <li><strong>Regelungen prüfen:</strong> Überprüfen Sie regelmäßig, ob sich MwSt.-Regelungen geändert haben</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fehler vermeiden</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Falsche MwSt.-Sätze auf Rechnungen verwenden</li>
              <li>MwSt.-freie Leistungen mit MwSt. berechnen</li>
              <li>Ermäßigte Sätze bei nicht berechtigten Leistungen verwenden</li>
              <li>MwSt.-Ausnahmen bei grenzüberschreitenden Geschäften vergessen</li>
              <li>Kleinunternehmerregelung nicht beachten</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die korrekte Anwendung der verschiedenen MwSt.-Sätze ist für Unternehmer essentiell. Mit dem richtigen Wissen über Ausnahmen, ermäßigte Sätze und steuerfreie Leistungen können Sie Ihre Rechnungen korrekt ausstellen und steuerliche Probleme vermeiden. Nutzen Sie unseren MwSt.-Rechner für die korrekte Berechnung aller Sätze.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Berechnen Sie MwSt. mit verschiedenen Sätzen
              </h3>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unseren professionellen MwSt.-Rechner für alle gängigen Steuersätze und Ausnahmen.
              </p>
              <Link href="/">
                <Button className="bg-primary hover:bg-primary/90">
                  Zum MwSt.-Rechner
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
