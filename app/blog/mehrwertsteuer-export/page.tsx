import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Mehrwertsteuer bei Exporten: Steuerfreie Ausfuhren | Rechner Tools",
  description: "Erfahren Sie alles über MwSt.-freie Exporte, Ausfuhrlieferungen und die korrekte Behandlung von grenzüberschreitenden Geschäften. Ein Leitfaden für Unternehmer.",
  keywords: "mehrwertsteuer export, ausfuhrlieferungen, mwst ausland, grenzüberschreitende geschäfte, steuerfreie exporte, eu-lieferungen",
  openGraph: {
    title: "Mehrwertsteuer bei Exporten: Steuerfreie Ausfuhren",
    description: "Erfahren Sie alles über MwSt.-freie Exporte, Ausfuhrlieferungen und die korrekte Behandlung von grenzüberschreitenden Geschäften. Ein Leitfaden für Unternehmer.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/mehrwertsteuer-export",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/mehrwertsteuer-export",
    },
  },
}

export default function MehrwertsteuerExportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-md" />
              <div>
                <h1 className="text-2xl font-bold font-serif">Rechner Tools</h1>
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
              Mehrwertsteuer bei Exporten: Steuerfreie Ausfuhren
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
              Exporte sind für viele Unternehmen ein wichtiger Geschäftsbereich. Bei grenzüberschreitenden Lieferungen gelten besondere MwSt.-Regelungen. In diesem Leitfaden erfahren Sie alles über steuerfreie Ausfuhren und die korrekte Behandlung von Exportgeschäften.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Grundlagen der Export-MwSt.</h2>
            
            <p className="mb-6">
              Bei Exporten in Länder außerhalb der EU (Drittländer) sind die Lieferungen grundsätzlich von der deutschen MwSt. befreit. Das bedeutet, Sie berechnen keine MwSt. auf Ihre Rechnung, können aber die Vorsteuer abziehen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Vorteile der Export-MwSt.</h3>
                <ul className="text-sm space-y-2">
                  <li>• Keine MwSt. auf Rechnungen</li>
                  <li>• Vorsteuerabzug bleibt erhalten</li>
                  <li>• Wettbewerbsvorteil im Ausland</li>
                  <li>• Einfache Preiskalkulation</li>
                  <li>• Keine MwSt.-Erstattung nötig</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Voraussetzungen</h3>
                <ul className="text-sm space-y-2">
                  <li>• Nachweis der Ausfuhr erforderlich</li>
                  <li>• Korrekte Dokumentation</li>
                  <li>• Einhaltung der Ausfuhrformalitäten</li>
                  <li>• Zollabfertigung bei Bedarf</li>
                  <li>• Aufbewahrungspflichten beachten</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Export in Drittländer (außerhalb der EU)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Steuerfreie Ausfuhrlieferungen</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Bei Lieferungen in Drittländer (z.B. USA, China, Schweiz) ist keine deutsche MwSt. zu berechnen, wenn bestimmte Bedingungen erfüllt sind.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Bedingungen für Steuerfreiheit:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Ware verlässt das EU-Gebiet</li>
                      <li>• Nachweis der Ausfuhr</li>
                      <li>• Keine innergemeinschaftliche Lieferung</li>
                      <li>• Korrekte Rechnungsstellung</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Beispiele für Drittländer:</p>
                    <ul className="text-sm space-y-1">
                      <li>• USA und Kanada</li>
                      <li>• China, Japan, Südkorea</li>
                      <li>• Schweiz, Norwegen</li>
                      <li>• Großbritannien (seit Brexit)</li>
                      <li>• Alle anderen Nicht-EU-Länder</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Ausfuhrnachweise</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Zollpapiere:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Ausfuhrzollanmeldung</li>
                      <li>• Zollbegleitdokument</li>
                      <li>• Versandbegleitdokument</li>
                      <li>• Frachtbrief</li>
                      <li>• Spediteur-Bescheinigung</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Alternative Nachweise:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Postversand mit Nachweis</li>
                      <li>• Kurierdienst mit Tracking</li>
                      <li>• Eigener Transport mit Dokumentation</li>
                      <li>• Lagerbescheinigung im Ausland</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">EU-Lieferungen (innergemeinschaftliche Lieferungen)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Besonderheiten bei EU-Lieferungen</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Bei Lieferungen innerhalb der EU gelten andere Regeln. Die Lieferung ist steuerfrei, aber der Empfänger muss die MwSt. in seinem Land abführen (Reverse-Charge-Verfahren).
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Voraussetzungen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Empfänger ist Unternehmer</li>
                      <li>• Gültige USt-IdNr. des Empfängers</li>
                      <li>• Ware verlässt Deutschland</li>
                      <li>• Korrekte Rechnungsstellung</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Dokumentation:</p>
                    <ul className="text-sm space-y-1">
                      <li>• USt-IdNr. auf Rechnung</li>
                      <li>• Steuerfreie Lieferung kennzeichnen</li>
                      <li>• Intrastat-Meldung (bei Überschreitung)</li>
                      <li>• Aufbewahrung der Nachweise</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Reverse-Charge-Verfahren</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Der Empfänger der Ware muss die MwSt. in seinem Land abführen, nicht der Lieferant. Das vereinfacht grenzüberschreitende Geschäfte.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Keine MwSt. auf Rechnung des Lieferanten</li>
                  <li>• Empfänger führt MwSt. in seinem Land ab</li>
                  <li>• Vorsteuerabzug im Empfängerland möglich</li>
                  <li>• Vereinfachte Abwicklung</li>
                  <li>• Keine MwSt.-Erstattung nötig</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Rechnungsstellung bei Exporten</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Korrekte Rechnungsgestaltung</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Pflichtangaben:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Vollständige Firmendaten beider Parteien</li>
                      <li>• Rechnungsnummer und Datum</li>
                      <li>• Beschreibung der gelieferten Waren</li>
                      <li>• Menge und Einzelpreise</li>
                      <li>• Gesamtbetrag ohne MwSt.</li>
                      <li>• Steuerfreie Lieferung kennzeichnen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Zusätzliche Angaben:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Bestellnummer des Kunden</li>
                      <li>• Lieferbedingungen (Incoterms)</li>
                      <li>• Zahlungsbedingungen</li>
                      <li>• USt-IdNr. (bei EU-Lieferungen)</li>
                      <li>• Ausfuhrnachweis (bei Drittländern)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Beispiel-Rechnung für Drittlandexport</h3>
                <div className="bg-white p-4 rounded-lg border text-sm">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-bold">Verkäufer:</p>
                      <p>Muster GmbH<br/>Musterstraße 123<br/>12345 Musterstadt<br/>USt-IdNr.: DE123456789</p>
                    </div>
                    <div>
                      <p className="font-bold">Käufer:</p>
                      <p>Sample Corp.<br/>Sample Street 456<br/>New York, NY 10001<br/>USA</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-bold">Rechnung Nr.: RE-2024-001</p>
                    <p>Datum: 15.12.2024</p>
                    <p>Lieferbedingungen: FOB Hamburg</p>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="font-bold">Positionen:</p>
                    <p>10 Stück Produkt A à 100,00€ = 1.000,00€</p>
                    <p className="font-bold">Gesamtbetrag: 1.000,00€</p>
                    <p className="text-green-600 font-bold">Steuerfreie Ausfuhrlieferung - keine MwSt.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Intrastat-Meldungen</h2>
            
            <div className="bg-accent/5 p-6 rounded-xl mb-6 border border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Wann sind Intrastat-Meldungen erforderlich?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Lieferungen (Versendungen):</p>
                  <ul className="text-sm space-y-1">
                    <li>• Ab 500.000€ pro Jahr</li>
                    <li>• Monatliche Meldung</li>
                    <li>• Frist: bis zum 10. des Folgemonats</li>
                    <li>• Elektronische Übermittlung</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Erwerbe (Einfuhren):</p>
                  <ul className="text-sm space-y-1">
                    <li>• Ab 800.000€ pro Jahr</li>
                    <li>• Monatliche Meldung</li>
                    <li>• Frist: bis zum 10. des Folgemonats</li>
                    <li>• Elektronische Übermittlung</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Wichtig:</strong> Intrastat-Meldungen sind unabhängig von der MwSt.-Erklärung und müssen zusätzlich abgegeben werden.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Besondere Fälle und Ausnahmen</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Versandhandel</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Fernabsatz:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Lieferung an Privatpersonen</li>
                      <li>• MwSt. im Bestimmungsland</li>
                      <li>• Schwellenwerte beachten</li>
                      <li>• Registrierung im Ausland nötig</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Schwellenwerte:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Deutschland: 100.000€</li>
                      <li>• Österreich: 35.000€</li>
                      <li>• Frankreich: 35.000€</li>
                      <li>• Italien: 35.000€</li>
                      <li>• Spanien: 35.000€</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Dienstleistungen ins Ausland</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">B2B-Dienstleistungen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Steuerfrei bei EU-Empfängern</li>
                      <li>• USt-IdNr. des Empfängers erforderlich</li>
                      <li>• Reverse-Charge-Verfahren</li>
                      <li>• Keine Intrastat-Meldung</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">B2C-Dienstleistungen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• MwSt. im Bestimmungsland</li>
                      <li>• Registrierung im Ausland</li>
                      <li>• OSS-Verfahren möglich</li>
                      <li>• Komplexe Regelungen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für Exporteure</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Dokumentation und Aufbewahrung</h3>
                <ul className="text-sm space-y-2">
                  <li>• Alle Ausfuhrnachweise 10 Jahre aufbewahren</li>
                  <li>• Digitale Archivierung ist zulässig</li>
                  <li>• Regelmäßige Überprüfung der Nachweise</li>
                  <li>• Checkliste für Exportdokumente erstellen</li>
                  <li>• Schulung der Mitarbeiter</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Software und Tools</h3>
                <ul className="text-sm space-y-2">
                  <li>• MwSt.-Berechnungssoftware nutzen</li>
                  <li>• Automatisierte Rechnungserstellung</li>
                  <li>• Intrastat-Meldungen automatisieren</li>
                  <li>• Digitale Archivierung implementieren</li>
                  <li>• Regelmäßige Updates der Software</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">Beratung und Schulung</h3>
                <ul className="text-sm space-y-2">
                  <li>• Steuerberater mit Export-Expertise</li>
                  <li>• Regelmäßige Schulungen für Mitarbeiter</li>
                  <li>• Aktuelle Informationen zu Regelungen</li>
                  <li>• Netzwerk mit anderen Exporteuren</li>
                  <li>• Mitgliedschaft in Fachverbänden</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fehler vermeiden</h2>
            
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
              <h3 className="text-xl font-bold text-red-700 mb-3">Diese Fehler sollten Sie vermeiden</h3>
              <ul className="text-sm space-y-2">
                <li>• MwSt. auf Exportrechnungen berechnen</li>
                <li>• Ausfuhrnachweise nicht aufbewahren</li>
                <li>• Intrastat-Meldungen vergessen</li>
                <li>• Falsche USt-IdNr. verwenden</li>
                <li>• Rechnungen unvollständig ausstellen</li>
                <li>• Aufbewahrungsfristen nicht einhalten</li>
                <li>• Mitarbeiter nicht schulen</li>
                <li>• Regelungen nicht aktuell halten</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            
            <p className="mb-6">
              Exporte bieten Unternehmen große Chancen, erfordern aber auch sorgfältige Beachtung der MwSt.-Regelungen. Steuerfreie Ausfuhren in Drittländer und das Reverse-Charge-Verfahren bei EU-Lieferungen vereinfachen grenzüberschreitende Geschäfte. Wichtig ist eine korrekte Dokumentation und die Einhaltung aller Formalitäten. Nutzen Sie unseren MwSt.-Rechner für die korrekte Berechnung Ihrer Exportgeschäfte.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                MwSt. für Exporte berechnen
              </h3>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unseren professionellen MwSt.-Rechner für die korrekte Berechnung von Exportgeschäften und grenzüberschreitenden Lieferungen.
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
