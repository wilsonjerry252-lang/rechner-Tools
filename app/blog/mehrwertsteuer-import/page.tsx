import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "MwSt. bei Importen: Einfuhrumsatzsteuer verstehen",
  description: "Alles über MwSt. bei Importen: Einfuhrumsatzsteuer, Zollabfertigung und steuerliche Behandlung von Einfuhren. Ein Leitfaden für Importeure.",
  keywords: "mehrwertsteuer import, einfuhrumsatzsteuer, mwst einfuhr, zollabfertigung, import steuern, einfuhr steuern",
  openGraph: {
    title: "MwSt. bei Importen: Einfuhrumsatzsteuer verstehen",
    description: "Alles über MwSt. bei Importen: Einfuhrumsatzsteuer, Zollabfertigung und steuerliche Behandlung von Einfuhren. Ein Leitfaden für Importeure.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/mehrwertsteuer-import",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/mehrwertsteuer-import",
    },
  },
}

export default function MehrwertsteuerImportPage() {
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
              Mehrwertsteuer bei Importen: Einfuhrumsatzsteuer verstehen
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Importe aus Drittländern sind mit der Einfuhrumsatzsteuer belastet. Diese entspricht der deutschen MwSt. und muss bei der Einfuhr entrichtet werden. In diesem umfassenden Leitfaden erfahren Sie alles über Einfuhrumsatzsteuer, Zollabfertigung und die korrekte Behandlung von Importgeschäften.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist Einfuhrumsatzsteuer?</h2>
            
            <p className="mb-6">
              Die Einfuhrumsatzsteuer ist eine Steuer, die bei der Einfuhr von Waren aus Drittländern (Ländern außerhalb der EU) in die Bundesrepublik Deutschland anfällt. Sie entspricht der deutschen Mehrwertsteuer und beträgt grundsätzlich 19% oder 7% (ermäßigter Satz).
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Zweck der Einfuhrumsatzsteuer</h3>
                <ul className="text-sm space-y-2">
                  <li>• Gleichstellung von Inlands- und Importwaren</li>
                  <li>• Wettbewerbsneutralität sicherstellen</li>
                  <li>• Steuereinnahmen für den Staat</li>
                  <li>• Verhinderung von Steuerflucht</li>
                  <li>• Harmonisierung der Steuersätze</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Wann fällt sie an?</h3>
                <ul className="text-sm space-y-2">
                  <li>• Bei Einfuhr aus Drittländern</li>
                  <li>• Bei Waren, die das EU-Gebiet erreichen</li>
                  <li>• Bei kommerziellen Importen</li>
                  <li>• Bei privaten Einfuhren</li>
                  <li>• Unabhängig vom Warenwert</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Einfuhrumsatzsteuer vs. EU-Erwerbsteuer</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Unterschiede zwischen Einfuhr und EU-Erwerb</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Einfuhr aus Drittländern:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Einfuhrumsatzsteuer fällt an</li>
                      <li>• Zollabfertigung erforderlich</li>
                      <li>• Steuer wird bei Einfuhr fällig</li>
                      <li>• Vorsteuerabzug möglich</li>
                      <li>• Zollkosten zusätzlich</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Erwerb aus EU-Ländern:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Keine Einfuhrumsatzsteuer</li>
                      <li>• Keine Zollabfertigung</li>
                      <li>• Reverse-Charge-Verfahren</li>
                      <li>• Vorsteuerabzug im eigenen Land</li>
                      <li>• Einfache Abwicklung</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-lg font-bold text-foreground mb-4">Beispiele für Drittländer</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Amerika:</p>
                    <ul className="text-sm space-y-1">
                      <li>• USA</li>
                      <li>• Kanada</li>
                      <li>• Brasilien</li>
                      <li>• Mexiko</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Asien:</p>
                    <ul className="text-sm space-y-1">
                      <li>• China</li>
                      <li>• Japan</li>
                      <li>• Südkorea</li>
                      <li>• Indien</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Europa:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Schweiz</li>
                      <li>• Norwegen</li>
                      <li>• Großbritannien</li>
                      <li>• Türkei</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Berechnung der Einfuhrumsatzsteuer</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Bemessungsgrundlage</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Die Einfuhrumsatzsteuer wird auf den Zollwert der Ware berechnet. Dieser setzt sich aus mehreren Komponenten zusammen.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Zollwert setzt sich zusammen aus:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Rechnungspreis der Ware</li>
                      <li>• Transportkosten bis EU-Grenze</li>
                      <li>• Versicherungskosten</li>
                      <li>• Verpackungskosten</li>
                      <li>• Zollabgaben</li>
                      <li>• Verbrauchsteuern</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Formel:</p>
                    <div className="text-center text-lg font-bold text-foreground mb-2">
                      Einfuhrumsatzsteuer = Zollwert × MwSt.-Satz
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      Beispiel: Zollwert 1.000€ × 19% = 190€ Einfuhrumsatzsteuer
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Beispielrechnung</h3>
                <div className="bg-white p-4 rounded-lg border text-sm">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-bold">Ware aus China:</p>
                      <p>Rechnungspreis: 800€<br/>Transport: 150€<br/>Versicherung: 20€<br/>Verpackung: 30€</p>
                    </div>
                    <div>
                      <p className="font-bold">Zollkosten:</p>
                      <p>Zoll: 50€<br/>Verbrauchsteuer: 0€<br/>Zollwert: 1.050€</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-bold">Einfuhrumsatzsteuer:</p>
                    <p>Zollwert: 1.050€ × 19% = 199,50€</p>
                    <p className="font-bold">Gesamtkosten: 1.249,50€</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">MwSt.-Sätze bei Importen</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-center">
                <div className="text-lg font-bold text-red-700 mb-2">Standard-MwSt.</div>
                <div className="text-2xl font-bold text-foreground">19%</div>
                <p className="text-xs text-muted-foreground mt-2">Gilt für die meisten Waren</p>
                <ul className="text-xs text-muted-foreground mt-2 text-left">
                  <li>• Elektronik</li>
                  <li>• Bekleidung</li>
                  <li>• Maschinen</li>
                  <li>• Spielzeug</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-xl border border-green-200 text-center">
                <div className="text-lg font-bold text-green-700 mb-2">Ermäßigte MwSt.</div>
                <div className="text-2xl font-bold text-foreground">7%</div>
                <p className="text-xs text-muted-foreground mt-2">Für bestimmte Waren</p>
                <ul className="text-xs text-muted-foreground mt-2 text-left">
                  <li>• Bücher</li>
                  <li>• Lebensmittel</li>
                  <li>• Medikamente</li>
                  <li>• Zeitungen</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center">
                <div className="text-lg font-bold text-blue-700 mb-2">MwSt.-frei</div>
                <div className="text-2xl font-bold text-foreground">0%</div>
                <p className="text-xs text-muted-foreground mt-2">Für bestimmte Leistungen</p>
                <ul className="text-xs text-muted-foreground mt-2 text-left">
                  <li>• Gold</li>
                  <li>• Wertpapiere</li>
                  <li>• Briefmarken</li>
                  <li>• Münzen</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Zollabfertigung und Verfahren</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Schritte der Zollabfertigung</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold mt-1">1</div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Ankunft der Ware</h4>
                      <p className="text-xs text-muted-foreground">Ware erreicht den EU-Binnenhafen oder Flughafen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-bold mt-1">2</div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Zollanmeldung</h4>
                      <p className="text-xs text-muted-foreground">Elektronische Anmeldung beim Zoll mit allen Unterlagen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold mt-1">3</div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Zollprüfung</h4>
                      <p className="text-xs text-muted-foreground">Zoll prüft die Ware und berechnet Abgaben</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold mt-1">4</div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Zahlung der Abgaben</h4>
                      <p className="text-xs text-muted-foreground">Zoll, Einfuhrumsatzsteuer und andere Abgaben werden entrichtet</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-bold mt-1">5</div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Freigabe</h4>
                      <p className="text-xs text-muted-foreground">Ware wird freigegeben und kann abgeholt werden</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Benötigte Unterlagen</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Handelsdokumente:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Handelsrechnung</li>
                      <li>• Packliste</li>
                      <li>• Frachtbrief</li>
                      <li>• Versicherungspolice</li>
                      <li>• Ursprungszeugnis</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Zolldokumente:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Einfuhrzollanmeldung</li>
                      <li>• Zolltarifnummer</li>
                      <li>• Ursprungsland</li>
                      <li>• Warenbeschreibung</li>
                      <li>• Wertangaben</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Vorsteuerabzug bei Importen</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Vorsteuerabzug möglich</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Als Unternehmer können Sie die gezahlte Einfuhrumsatzsteuer als Vorsteuer abziehen, wenn die Ware für Ihr Unternehmen bestimmt ist.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Einfuhrumsatzsteuer wird als Vorsteuer geltend gemacht</li>
                  <li>• Neutralisierung der Steuerbelastung</li>
                  <li>• Nur bei unternehmerischer Verwendung</li>
                  <li>• Korrekte Buchung erforderlich</li>
                  <li>• Nachweis der Einfuhr nötig</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Buchung der Einfuhrumsatzsteuer</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Buchungssätze:</p>
                    <div className="text-sm space-y-1">
                      <p><strong>Wareneingang:</strong> 1.000€ an Verbindlichkeiten 1.000€</p>
                      <p><strong>Einfuhrumsatzsteuer:</strong> 190€ an Verbindlichkeiten 190€</p>
                      <p><strong>Vorsteuerabzug:</strong> 190€ an Vorsteuer 190€</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Wichtige Hinweise:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Korrekte Kontierung beachten</li>
                      <li>• Nachweise aufbewahren</li>
                      <li>• MwSt.-Erklärung korrekt ausfüllen</li>
                      <li>• Vorsteuerabzug geltend machen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Besondere Fälle und Ausnahmen</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Kleinbetragsregelung</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Bei Waren mit einem Wert unter 22€ (ab 2021: 150€) fällt keine Einfuhrumsatzsteuer an.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Bedingungen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Warenwert unter 150€</li>
                      <li>• Private Einfuhr</li>
                      <li>• Keine gewerbliche Nutzung</li>
                      <li>• Keine verbotenen Waren</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Ausnahmen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Alkohol und Tabak</li>
                      <li>• Parfüms und Kosmetika</li>
                      <li>• Kaffee und Tee</li>
                      <li>• Verbotene Waren</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Versandhandel</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Fernabsatz:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Lieferung an Privatpersonen</li>
                      <li>• MwSt. im Bestimmungsland</li>
                      <li>• Schwellenwerte beachten</li>
                      <li>• Registrierung im Ausland</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">OSS-Verfahren:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Einheitliche Meldung</li>
                      <li>• Vereinfachte Abwicklung</li>
                      <li>• Für Waren bis 150€</li>
                      <li>• EU-weit gültig</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für Importeure</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Kostenoptimierung</h3>
                <ul className="text-sm space-y-2">
                  <li>• Zolltarifnummeren korrekt bestimmen</li>
                  <li>• Freihandelsabkommen nutzen</li>
                  <li>• Ursprungszeugnisse beantragen</li>
                  <li>• Transportkosten optimieren</li>
                  <li>• Versicherungskosten vergleichen</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Dokumentation</h3>
                <ul className="text-sm space-y-2">
                  <li>• Alle Unterlagen digitalisieren</li>
                  <li>• Zollnummern dokumentieren</li>
                  <li>• Kostenaufstellungen führen</li>
                  <li>• Nachweise aufbewahren</li>
                  <li>• Regelmäßige Überprüfung</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">Beratung</h3>
                <ul className="text-sm space-y-2">
                  <li>• Zollberater konsultieren</li>
                  <li>• Steuerberater einbeziehen</li>
                  <li>• Spediteur beraten lassen</li>
                  <li>• Regelmäßige Schulungen</li>
                  <li>• Aktuelle Informationen</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fehler vermeiden</h2>
            
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
              <h3 className="text-xl font-bold text-red-700 mb-3">Diese Fehler sollten Sie vermeiden</h3>
              <ul className="text-sm space-y-2">
                <li>• Falsche Zolltarifnummern verwenden</li>
                <li>• Einfuhrumsatzsteuer nicht als Vorsteuer geltend machen</li>
                <li>• Unterlagen nicht aufbewahren</li>
                <li>• Kleinbetragsregelung missachten</li>
                <li>• Ursprungszeugnisse vergessen</li>
                <li>• Transportkosten nicht berücksichtigen</li>
                <li>• Zollabfertigung nicht korrekt durchführen</li>
                <li>• Nachweise nicht dokumentieren</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            
            <p className="mb-6">
              Die Einfuhrumsatzsteuer ist ein wichtiger Bestandteil des deutschen Steuersystems und sorgt für die Gleichstellung von Inlands- und Importwaren. Für Unternehmer ist es wichtig, die korrekte Berechnung, Buchung und den Vorsteuerabzug zu verstehen. Eine sorgfältige Dokumentation und die Beachtung aller Formalitäten sind essentiell für eine erfolgreiche Importabwicklung. Nutzen Sie unseren MwSt.-Rechner für die korrekte Berechnung Ihrer Importgeschäfte.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                MwSt. für Importe berechnen
              </h3>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unseren professionellen MwSt.-Rechner für die korrekte Berechnung von Einfuhrumsatzsteuer und Importkosten.
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
