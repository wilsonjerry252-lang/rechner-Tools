import Link from "next/link"
import { ArrowLeft, Calendar, Clock, CreditCard, TrendingUp, Shield, Zap, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Kreditarten im Vergleich: Welcher passt zu Ihnen?",
  description: "Vergleichen Sie verschiedene Kreditarten und finden Sie den passenden Kredit für Ihre Bedürfnisse. Ein umfassender Überblick.",
  keywords: "kreditarten vergleich, kredit typen, kreditarten, kredit wahl, kredit vergleich, beste kreditart",
  openGraph: {
    title: "Kreditarten im Vergleich: Welcher passt zu Ihnen?",
    description: "Vergleichen Sie verschiedene Kreditarten und finden Sie den passenden Kredit für Ihre Bedürfnisse. Ein umfassender Überblick.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/kreditarten-vergleich",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/kreditarten-vergleich",
      "x-default": "https://www.rechnerjetzt.de/blog/kreditarten-vergleich",
    },
  },
}

export default function KreditartenVergleichPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-r from-accent to-accent/90 text-accent-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h3 className="text-2xl font-bold font-serif">Rechner Tools</h3>
                <p className="text-sm opacity-90 font-medium">Professionelle Online-Rechner</p>
              </div>
            </div>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="text-accent-foreground hover:bg-accent-foreground/10">
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
              <div className="p-2 rounded-lg bg-accent/10">
                <CreditCard className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                Finanzen
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Kreditarten im Vergleich: Welcher Kredit passt zu Ihnen?
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>25. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Die Wahl der richtigen Kreditart kann Ihnen Tausende von Euro sparen und die Finanzierung erheblich vereinfachen. In diesem umfassenden Vergleich erfahren Sie alles über die verschiedenen Kreditarten und deren Vor- und Nachteile.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Übersicht der wichtigsten Kreditarten</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Konsumkredite</h3>
                <ul className="text-sm space-y-2">
                  <li>• Ratenkredit (Privatkredit)</li>
                  <li>• Autokredit</li>
                  <li>• Dispositionskredit</li>
                  <li>• Kleinkredit</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Immobilienkredite</h3>
                <ul className="text-sm space-y-2">
                  <li>• Baufinanzierung</li>
                  <li>• Hypothekarkredit</li>
                  <li>• Modernisierungskredit</li>
                  <li>• Grundstückskredit</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">1. Ratenkredit (Privatkredit)</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Eigenschaften und Verwendung</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Verwendungszwecke:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Urlaub und Reisen</li>
                    <li>• Elektronik und Haushaltsgeräte</li>
                    <li>• Renovierungen</li>
                    <li>• Konsumgüter</li>
                    <li>• Schuldenkonsolidierung</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Kreditmerkmale:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Kreditsumme: 1.000€ - 50.000€</li>
                    <li>• Laufzeit: 12 - 84 Monate</li>
                    <li>• Zinssatz: 3% - 15%</li>
                    <li>• Keine Sicherheiten nötig</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Vorteile</h3>
                <ul className="text-sm space-y-2">
                  <li>• Flexibel einsetzbar</li>
                  <li>• Keine Sicherheiten erforderlich</li>
                  <li>• Sondertilgung möglich</li>
                  <li>• Feste monatliche Raten</li>
                  <li>• Geringe Bearbeitungsgebühren</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-3">Nachteile</h3>
                <ul className="text-sm space-y-2">
                  <li>• Höhere Zinssätze</li>
                    <li>• Bonitätsabhängig</li>
                    <li>• Begrenzte Kreditsummen</li>
                    <li>• Kürzere Laufzeiten</li>
                    <li>• Keine steuerlichen Vorteile</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">2. Autokredit</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Spezielle Finanzierung für Fahrzeuge</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Verwendungszwecke:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Neuwagen</li>
                    <li>• Gebrauchtwagen</li>
                    <li>• Motorräder</li>
                    <li>• Nutzfahrzeuge</li>
                    <li>• Leasing-Rückkauf</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Kreditmerkmale:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Kreditsumme: 5.000€ - 100.000€</li>
                    <li>• Laufzeit: 12 - 84 Monate</li>
                    <li>• Zinssatz: 2% - 8%</li>
                    <li>• Fahrzeug als Sicherheit</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Vorteile</h3>
                <ul className="text-sm space-y-2">
                  <li>• Niedrigere Zinssätze</li>
                  <li>• Längere Laufzeiten möglich</li>
                  <li>• Höhere Kreditsummen</li>
                  <li>• Geringere monatliche Raten</li>
                  <li>• Fahrzeug als Sicherheit</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-3">Nachteile</h3>
                <ul className="text-sm space-y-2">
                  <li>• Nur für Fahrzeuge</li>
                  <li>• Fahrzeugverlust bei Zahlungsproblemen</li>
                  <li>• Versicherungspflicht</li>
                  <li>• Weniger flexibel</li>
                  <li>• Höhere Gesamtkosten</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">3. Baufinanzierung (Hypothek)</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Langfristige Immobilienfinanzierung</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Verwendungszwecke:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Hausbau</li>
                    <li>• Wohnungskauf</li>
                    <li>• Grundstückskauf</li>
                    <li>• Modernisierung</li>
                    <li>• Erweiterung</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Kreditmerkmale:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Kreditsumme: 50.000€ - 2.000.000€</li>
                    <li>• Laufzeit: 10 - 35 Jahre</li>
                    <li>• Zinssatz: 1% - 5%</li>
                    <li>• Immobilie als Sicherheit</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Vorteile</h3>
                <ul className="text-sm space-y-2">
                  <li>• Niedrigste Zinssätze</li>
                  <li>• Sehr lange Laufzeiten</li>
                  <li>• Hohe Kreditsummen</li>
                  <li>• Steuervorteile</li>
                  <li>• Geringe monatliche Belastung</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-3">Nachteile</h3>
                <ul className="text-sm space-y-2">
                  <li>• Hohe Eigenkapitalanforderung</li>
                  <li>• Komplexe Verträge</li>
                  <li>• Lange Bindung</li>
                  <li>• Hohe Gesamtkosten</li>
                  <li>• Immobilienrisiko</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">4. Dispositionskredit</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Flexible Überziehung des Girokontos</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Verwendungszwecke:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Kurzfristige Liquidität</li>
                    <li>• Überbrückung von Engpässen</li>
                    <li>• Unerwartete Ausgaben</li>
                    <li>• Notfallfinanzierung</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Kreditmerkmale:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Kreditsumme: 1.000€ - 50.000€</li>
                    <li>• Laufzeit: Flexibel</li>
                    <li>• Zinssatz: 8% - 15%</li>
                    <li>• Keine festen Raten</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Vorteile</h3>
                <ul className="text-sm space-y-2">
                  <li>• Sofort verfügbar</li>
                  <li>• Keine Antragsverfahren</li>
                  <li>• Flexible Rückzahlung</li>
                  <li>• Keine Bearbeitungsgebühren</li>
                  <li>• Nur bei Nutzung Zinsen</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-3">Nachteile</h3>
                <ul className="text-sm space-y-2">
                  <li>• Sehr hohe Zinssätze</li>
                  <li>• Keine festen Rückzahlungspläne</li>
                    <li>• Gefahr der Überschuldung</li>
                    <li>• Teuer bei längerer Nutzung</li>
                    <li>• Keine steuerlichen Vorteile</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Kreditvergleich: Übersicht der wichtigsten Kennzahlen</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-muted">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border border-muted p-3 text-left">Kreditart</th>
                    <th className="border border-muted p-3 text-center">Zinssatz</th>
                    <th className="border border-muted p-3 text-center">Laufzeit</th>
                    <th className="border border-muted p-3 text-center">Kreditsumme</th>
                    <th className="border border-muted p-3 text-center">Sicherheiten</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-muted p-3 font-medium">Ratenkredit</td>
                    <td className="border border-muted p-3 text-center">3% - 15%</td>
                    <td className="border border-muted p-3 text-center">1-7 Jahre</td>
                    <td className="border border-muted p-3 text-center">1.000€ - 50.000€</td>
                    <td className="border border-muted p-3 text-center">Keine</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-muted p-3 font-medium">Autokredit</td>
                    <td className="border border-muted p-3 text-center">2% - 8%</td>
                    <td className="border border-muted p-3 text-center">1-7 Jahre</td>
                    <td className="border border-muted p-3 text-center">5.000€ - 100.000€</td>
                    <td className="border border-muted p-3 text-center">Fahrzeug</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-3 font-medium">Baufinanzierung</td>
                    <td className="border border-muted p-3 text-center">1% - 5%</td>
                    <td className="border border-muted p-3 text-center">10-35 Jahre</td>
                    <td className="border border-muted p-3 text-center">50.000€ - 2.000.000€</td>
                    <td className="border border-muted p-3 text-center">Immobilie</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-muted p-3 font-medium">Dispositionskredit</td>
                    <td className="border border-muted p-3 text-center">8% - 15%</td>
                    <td className="border border-muted p-3 text-center">Flexibel</td>
                    <td className="border border-muted p-3 text-center">1.000€ - 50.000€</td>
                    <td className="border border-muted p-3 text-center">Keine</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">So wählen Sie die richtige Kreditart</h2>
            
            <div className="bg-accent/5 p-6 rounded-xl mb-6 border border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Entscheidungskriterien:</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Verwendungszweck:</strong> Wofür brauchen Sie das Geld?</li>
                <li><strong>Kreditsumme:</strong> Wie viel Geld benötigen Sie?</li>
                <li><strong>Laufzeit:</strong> Über welchen Zeitraum möchten Sie zurückzahlen?</li>
                <li><strong>Zinssatz:</strong> Welche Zinskosten können Sie akzeptieren?</li>
                <li><strong>Sicherheiten:</strong> Welche Sicherheiten können Sie bieten?</li>
                <li><strong>Flexibilität:</strong> Wie wichtig ist Flexibilität bei der Rückzahlung?</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für die Kreditwahl</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Für kleine Summen (&lt; 10.000€)</h3>
                <ul className="text-sm space-y-2">
                  <li>• Ratenkredit bevorzugen</li>
                  <li>• Dispositionskredit vermeiden</li>
                  <li>• Kurze Laufzeiten wählen</li>
                  <li>• Mehrere Angebote vergleichen</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Für mittlere Summen (10.000€ - 50.000€)</h3>
                <ul className="text-sm space-y-2">
                  <li>• Ratenkredit oder Autokredit</li>
                  <li>• Mittlere Laufzeiten optimal</li>
                  <li>• Sondertilgungsrecht vereinbaren</li>
                  <li>• Bonität verbessern</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die Wahl der richtigen Kreditart hängt von Ihren individuellen Bedürfnissen und finanziellen Möglichkeiten ab. Für kleine, flexible Finanzierungen ist der Ratenkredit ideal, für Fahrzeuge der Autokredit und für Immobilien die Baufinanzierung. Nutzen Sie unseren Kreditrechner, um verschiedene Szenarien zu simulieren und die optimale Lösung zu finden.
            </p>

            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                Berechnen Sie Ihre Kreditkosten
              </h3>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unseren professionellen Kreditrechner, um verschiedene Kreditarten zu vergleichen und die günstigste Option zu finden.
              </p>
              <Link href="/">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Zum Kreditrechner
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
