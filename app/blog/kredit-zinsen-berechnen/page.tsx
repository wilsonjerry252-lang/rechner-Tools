import Link from "next/link"
import { ArrowLeft, Calendar, Clock, CreditCard, TrendingUp, Shield, Zap, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Kreditzinsen berechnen: So funktioniert es | Rechner Tools",
  description: "Lernen Sie, wie Sie Kreditzinsen korrekt berechnen. Von einfachen Formeln bis zu komplexen Tilgungsplänen - alles verständlich erklärt.",
  keywords: "kreditzinsen berechnen, zinsberechnung, tilgungsplan, kreditkosten, zinsformel, finanzmathematik",
  openGraph: {
    title: "Kreditzinsen berechnen: So funktioniert es",
    description: "Lernen Sie, wie Sie Kreditzinsen korrekt berechnen. Von einfachen Formeln bis zu komplexen Tilgungsplänen - alles verständlich erklärt.",
    type: "article",
    publishedTime: "2024-12-18T10:00:00Z",
    authors: ["Rechner Tools"],
  },
}

export default function KreditzinsenBerechnenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h1 className="text-2xl font-bold font-serif">Rechner Tools</h1>
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
              Kreditzinsen berechnen: So funktioniert es
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>18. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Die korrekte Berechnung von Kreditzinsen ist essentiell für die Finanzplanung. In diesem Artikel lernen Sie die wichtigsten Formeln und Methoden kennen, um Kreditzinsen und -kosten zu berechnen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Grundlagen der Zinsberechnung</h2>
            <p className="mb-6">
              Kreditzinsen werden auf Basis des Kreditbetrags, des Zinssatzes und der Laufzeit berechnet. Es gibt verschiedene Berechnungsmethoden, die je nach Kreditart angewendet werden.
            </p>

            <div className="bg-accent/5 p-6 rounded-xl mb-6 border border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Wichtige Begriffe:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Kreditbetrag:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Nettokreditbetrag (ohne Zinsen)</li>
                    <li>• Auszahlungsbetrag</li>
                    <li>• Ursprüngliche Kreditsumme</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Zinssatz:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Nominalzins (jährlich)</li>
                    <li>• Effektivzins (inkl. Kosten)</li>
                    <li>• Monatlicher Zinssatz</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Methode 1: Einfache Zinsberechnung</h2>
            <p className="mb-6">
              Die einfache Zinsberechnung wird bei kurzfristigen Krediten oder bei Krediten mit gleichbleibendem Zinssatz angewendet.
            </p>

            <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-6">
              <h3 className="text-lg font-bold text-green-700 mb-4">Formel: Einfache Zinsberechnung</h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-green-600">Zinsen = Kreditbetrag × Zinssatz × Zeit</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Beispiel:</strong> 10.000€ Kredit, 5% Zinsen, 2 Jahre Laufzeit
              </p>
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">Zinsen = 10.000€ × 0,05 × 2 = 1.000€</div>
                <p className="text-sm text-muted-foreground mt-2">Gesamtbetrag: 11.000€</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Methode 2: Annuitätentilgung</h2>
            <p className="mb-6">
              Die Annuitätentilgung ist die häufigste Form der Kreditrückzahlung. Hier bleibt die monatliche Rate konstant, während sich das Verhältnis von Zinsen und Tilgung verschiebt.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
              <h3 className="text-lg font-bold text-blue-700 mb-4">Formel: Monatliche Rate bei Annuitätentilgung</h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-blue-600">Rate = K × (q^n × (q-1)) / (q^n - 1)</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Wobei: K = Kreditbetrag, q = 1 + (Zinssatz/12), n = Anzahl Monate
              </p>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Vereinfacht: Nutzen Sie unseren Kreditrechner!</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Berechnungsbeispiele</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 1: Ratenkredit über 5 Jahre</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Kreditdetails:</p>
                    <div className="text-sm space-y-1">
                      <p>Kreditsumme: 20.000€</p>
                      <p>Zinssatz: 4,5% p.a.</p>
                      <p>Laufzeit: 5 Jahre (60 Monate)</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-bold text-green-700">Berechnung:</p>
                    <div className="text-sm space-y-1">
                      <p>Monatliche Rate: 372,86€</p>
                      <p>Gesamtzinsen: 2.371,60€</p>
                      <p>Gesamtbetrag: 22.371,60€</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 2: Baufinanzierung über 20 Jahre</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Kreditdetails:</p>
                    <div className="text-sm space-y-1">
                      <p>Kreditsumme: 200.000€</p>
                      <p>Zinssatz: 2,8% p.a.</p>
                      <p>Laufzeit: 20 Jahre (240 Monate)</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-bold text-blue-700">Berechnung:</p>
                    <div className="text-sm space-y-1">
                      <p>Monatliche Rate: 1.089,81€</p>
                      <p>Gesamtzinsen: 61.554,40€</p>
                      <p>Gesamtbetrag: 261.554,40€</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 3: Kurzfristiger Kredit über 1 Jahr</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Kreditdetails:</p>
                    <div className="text-sm space-y-1">
                      <p>Kreditsumme: 5.000€</p>
                      <p>Zinssatz: 8,0% p.a.</p>
                      <p>Laufzeit: 1 Jahr (12 Monate)</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm font-bold text-orange-700">Berechnung:</p>
                    <div className="text-sm space-y-1">
                      <p>Monatliche Rate: 434,70€</p>
                      <p>Gesamtzinsen: 216,40€</p>
                      <p>Gesamtbetrag: 5.216,40€</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Tilgungsplan verstehen</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Wie sich Zinsen und Tilgung entwickeln:</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-muted">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-muted p-2 text-left">Jahr</th>
                      <th className="border border-muted p-2 text-center">Restschuld</th>
                      <th className="border border-muted p-2 text-center">Zinsen</th>
                      <th className="border border-muted p-2 text-center">Tilgung</th>
                      <th className="border border-muted p-2 text-center">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-muted p-2 font-medium">1</td>
                      <td className="border border-muted p-2 text-center">20.000€</td>
                      <td className="border border-muted p-2 text-center">900€</td>
                      <td className="border border-muted p-2 text-center">3.574,32€</td>
                      <td className="border border-muted p-2 text-center">4.474,32€</td>
                    </tr>
                    <tr className="bg-muted/10">
                      <td className="border border-muted p-2 font-medium">2</td>
                      <td className="border border-muted p-2 text-center">16.425,68€</td>
                      <td className="border border-muted p-2 text-center">739,16€</td>
                      <td className="border border-muted p-2 text-center">3.735,16€</td>
                      <td className="border border-muted p-2 text-center">4.474,32€</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-2 font-medium">3</td>
                      <td className="border border-muted p-2 text-center">12.690,52€</td>
                      <td className="border border-muted p-2 text-center">571,07€</td>
                      <td className="border border-muted p-2 text-center">3.903,25€</td>
                      <td className="border border-muted p-2 text-center">4.474,32€</td>
                    </tr>
                    <tr className="bg-muted/10">
                      <td className="border border-muted p-2 font-medium">4</td>
                      <td className="border border-muted p-2 text-center">8.787,27€</td>
                      <td className="border border-muted p-2 text-center">395,43€</td>
                      <td className="border border-muted p-2 text-center">4.078,89€</td>
                      <td className="border border-muted p-2 text-center">4.474,32€</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-2 font-medium">5</td>
                      <td className="border border-muted p-2 text-center">4.708,38€</td>
                      <td className="border border-muted p-2 text-center">211,88€</td>
                      <td className="border border-muted p-2 text-center">4.262,44€</td>
                      <td className="border border-muted p-2 text-center">4.474,32€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Beispiel:</strong> 20.000€ Kredit über 5 Jahre bei 4,5% Zinsen
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Faktoren, die die Zinskosten beeinflussen</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Kreditfaktoren</h3>
                <ul className="text-sm space-y-2">
                  <li>• Kreditsumme (höher = mehr Zinsen)</li>
                  <li>• Zinssatz (höher = mehr Zinsen)</li>
                  <li>• Laufzeit (länger = mehr Zinsen)</li>
                  <li>• Tilgungsart (Annuität vs. endfällig)</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Persönliche Faktoren</h3>
                <ul className="text-sm space-y-2">
                  <li>• Bonität (Schufa-Score)</li>
                  <li>• Einkommen und Beschäftigung</li>
                  <li>• Sicherheiten</li>
                  <li>• Kredithistorie</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Zusätzliche Kosten beachten</h2>
            
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
              <h3 className="text-lg font-bold text-red-700 mb-4">Versteckte Kosten, die die Gesamtkosten erhöhen:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-sm space-y-2">
                  <li>• Bearbeitungsgebühren</li>
                  <li>• Kontoführungsgebühren</li>
                  <li>• Versicherungszwang</li>
                  <li>• Notarkosten (bei Immobilien)</li>
                </ul>
                <ul className="text-sm space-y-2">
                  <li>• Vorfälligkeitsentschädigung</li>
                  <li>• Mahngebühren</li>
                  <li>• Restschuldversicherung</li>
                  <li>• Grundbuchkosten</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Effektiver Jahreszins (APR)</h2>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
              <h3 className="text-lg font-bold text-blue-700 mb-4">Warum der effektive Jahreszins wichtig ist:</h3>
              <p className="mb-4">
                Der effektive Jahreszins berücksichtigt alle Kosten und Gebühren und gibt Ihnen den wahren Preis des Kredits an.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Nominalzins:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Nur der reine Zinssatz</li>
                    <li>• Ohne zusätzliche Kosten</li>
                    <li>• Niedriger als der APR</li>
                    <li>• Nicht vergleichbar</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Effektivzins (APR):</p>
                  <ul className="text-sm space-y-1">
                    <li>• Alle Kosten eingerechnet</li>
                    <li>• Wahrer Preis des Kredits</li>
                    <li>• Höher als der Nominalzins</li>
                    <li>• Kredite vergleichbar</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Tipps für die Zinsberechnung</h2>
            
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Kreditrechner verwenden:</strong> Nutzen Sie professionelle Rechner für genaue Berechnungen</li>
              <li><strong>Alle Kosten einbeziehen:</strong> Vergessen Sie nicht die versteckten Kosten</li>
              <li><strong>Vergleichen Sie Angebote:</strong> Nutzen Sie den effektiven Jahreszins zum Vergleich</li>
              <li><strong>Laufzeit optimieren:</strong> Kürzere Laufzeiten bedeuten weniger Zinsen</li>
              <li><strong>Sondertilgungen nutzen:</strong> Reduzieren Sie die Zinskosten durch vorzeitige Tilgung</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fehler vermeiden</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Nur den Nominalzins betrachten, nicht den effektiven Jahreszins</li>
              <li>Versteckte Kosten bei der Berechnung vergessen</li>
              <li>Falsche Laufzeit bei der Berechnung verwenden</li>
              <li>Zinssätze nicht auf Monate umrechnen</li>
              <li>Bei der Tilgungsart den falschen Berechnungsmodus wählen</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die korrekte Berechnung von Kreditzinsen ist fundamental für die Finanzplanung. Mit den richtigen Formeln und unserem Kreditrechner können Sie alle Kosten genau kalkulieren und verschiedene Kreditangebote vergleichen. Achten Sie auf den effektiven Jahreszins und alle versteckten Kosten.
            </p>

            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                Berechnen Sie Ihre Kreditkosten
              </h3>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unseren professionellen Kreditrechner für genaue Berechnungen aller Kreditkosten und Zinsen.
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
