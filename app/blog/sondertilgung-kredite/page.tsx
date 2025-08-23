import Link from "next/link"
import { ArrowLeft, Calendar, Clock, CreditCard, TrendingUp, Shield, Zap, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Sondertilgung bei Krediten: Wann lohnt es sich? | Rechner Tools",
  description: "Erfahren Sie, wann eine Sondertilgung sinnvoll ist und wie Sie dabei vorgehen sollten. Sparen Sie Tausende von Euro an Zinsen.",
  keywords: "sondertilgung, kredit vorzeitig tilgen, kreditzinsen sparen, kredit ablösen, vorzeitige tilgung",
  openGraph: {
    title: "Sondertilgung bei Krediten: Wann lohnt es sich?",
    description: "Erfahren Sie, wann eine Sondertilgung sinnvoll ist und wie Sie dabei vorgehen sollten. Sparen Sie Tausende von Euro an Zinsen.",
    type: "article",
    publishedTime: "2025-01-03T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/sondertilgung-kredite",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/sondertilgung-kredite",
    },
  },
}

export default function SondertilgungPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h2 className="text-2xl font-bold font-serif">Rechner Tools</h2>
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
              Sondertilgung bei Krediten: Wann lohnt es sich?
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>3. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Eine Sondertilgung kann Ihnen Tausende von Euro an Zinsen sparen und die Kreditlaufzeit erheblich verkürzen. Doch wann ist sie wirklich sinnvoll und worauf müssen Sie achten? In diesem Artikel erfahren Sie alles über die Vor- und Nachteile von Sondertilgungen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist eine Sondertilgung?</h2>
            <p className="mb-6">
              Eine Sondertilgung ist eine zusätzliche Rückzahlung, die über die vereinbarten monatlichen Raten hinausgeht. Sie können damit einen Teil oder den gesamten Kredit vorzeitig ablösen und so Zinsen sparen.
            </p>

            <div className="bg-accent/5 p-6 rounded-xl mb-6 border border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel: Sondertilgung bei 50.000€ Kredit über 10 Jahre</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Ohne Sondertilgung:</p>
                  <div className="text-2xl font-bold text-accent">15.000€</div>
                  <p className="text-sm text-muted-foreground">Gesamtzinsen</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Mit 10.000€ Sondertilgung:</p>
                  <div className="text-2xl font-bold text-accent">8.000€</div>
                  <p className="text-sm text-muted-foreground">Gesamtzinsen</p>
                </div>
              </div>
              <p className="text-sm text-accent font-medium mt-3">Ersparnis: 7.000€ an Zinsen!</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wann lohnt sich eine Sondertilgung?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">✅ Lohnt sich bei:</h3>
                <ul className="text-sm space-y-2">
                  <li>• Hohen Zinssätzen (über 4%)</li>
                  <li>• Langen Kreditlaufzeiten</li>
                  <li>• Verfügbaren Ersparnissen</li>
                  <li>• Geringeren Alternativanlagen</li>
                  <li>• Wunsch nach schnellerer Schuldenfreiheit</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-3">❌ Lohnt sich nicht bei:</h3>
                <ul className="text-sm space-y-2">
                  <li>• Niedrigen Zinssätzen (unter 2%)</li>
                  <li>• Kurzen Restlaufzeiten</li>
                  <li>• Fehlendem Notgroschen</li>
                  <li>• Besseren Anlagemöglichkeiten</li>
                  <li>• Hohen Vorfälligkeitsentschädigungen</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Vorteile einer Sondertilgung</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h3 className="text-lg font-bold text-primary mb-2">Zinsersparnis</h3>
                <p className="text-sm text-muted-foreground">
                  Sie sparen Zinsen für den getilgten Betrag über die gesamte Restlaufzeit des Kredits.
                </p>
              </div>
              
              <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
                <h3 className="text-lg font-bold text-secondary mb-2">Kürzere Laufzeit</h3>
                <p className="text-sm text-muted-foreground">
                  Der Kredit ist schneller abbezahlt, Sie werden früher schuldenfrei.
                </p>
              </div>
              
              <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                <h3 className="text-lg font-bold text-accent mb-2">Geringere monatliche Belastung</h3>
                <p className="text-sm text-muted-foreground">
                  Bei gleichbleibender Laufzeit reduzieren sich die monatlichen Raten.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="text-lg font-bold text-green-700 mb-2">Psychologische Vorteile</h3>
                <p className="text-sm text-muted-foreground">
                  Weniger Schulden bedeuten weniger Stress und mehr finanzielle Freiheit.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Nachteile und Risiken</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="text-lg font-bold text-orange-700 mb-2">Vorfälligkeitsentschädigung</h3>
                <p className="text-sm text-muted-foreground">
                  Bei manchen Krediten fallen Gebühren für vorzeitige Tilgung an, die den Vorteil zunichtemachen können.
                </p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="text-lg font-bold text-red-700 mb-2">Verlust der Liquidität</h3>
                <p className="text-sm text-muted-foreground">
                  Das Geld ist weg und steht nicht mehr für Notfälle oder andere Investitionen zur Verfügung.
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-bold text-blue-700 mb-2">Verpasste Anlagechancen</h3>
                <p className="text-sm text-muted-foreground">
                  Bei steigenden Zinsen könnten Sie das Geld besser anlegen.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">So berechnen Sie den Nutzen einer Sondertilgung</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Schritt-für-Schritt-Anleitung:</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Kreditdetails sammeln:</strong> Restsumme, Zinssatz, Restlaufzeit</li>
                <li><strong>Zinsen ohne Sondertilgung berechnen:</strong> Restsumme × Zinssatz × Restlaufzeit</li>
                <li><strong>Zinsen mit Sondertilgung berechnen:</strong> Neue Restsumme × Zinssatz × Restlaufzeit</li>
                <li><strong>Zinsersparnis ermitteln:</strong> Differenz der beiden Werte</li>
                <li><strong>Kosten abziehen:</strong> Vorfälligkeitsentschädigung und andere Gebühren</li>
                <li><strong>Nettoersparnis berechnen:</strong> Zinsersparnis minus Kosten</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Beispiele</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-700 mb-2">Beispiel 1: Wohnungsbaukredit</h4>
                <p className="text-sm">
                  <strong>Situation:</strong> 200.000€ Kredit, 3% Zinsen, 20 Jahre Restlaufzeit<br/>
                  <strong>Sondertilgung:</strong> 20.000€ (Erbe)<br/>
                  <strong>Zinsersparnis:</strong> 12.000€ über 20 Jahre<br/>
                  <strong>Fazit:</strong> Sehr lohnenswert
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-700 mb-2">Beispiel 2: Autokredit</h4>
                <p className="text-sm">
                  <strong>Situation:</strong> 15.000€ Kredit, 5% Zinsen, 3 Jahre Restlaufzeit<br/>
                  <strong>Sondertilgung:</strong> 5.000€ (Bonus)<br/>
                  <strong>Zinsersparnis:</strong> 750€ über 3 Jahre<br/>
                  <strong>Fazit:</strong> Lohnenswert bei niedrigen Kosten
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-700 mb-2">Beispiel 3: Niedrigzinskredit</h4>
                <p className="text-sm">
                  <strong>Situation:</strong> 50.000€ Kredit, 1,5% Zinsen, 5 Jahre Restlaufzeit<br/>
                  <strong>Sondertilgung:</strong> 10.000€ (Aktienverkauf)<br/>
                  <strong>Zinsersparnis:</strong> 750€ über 5 Jahre<br/>
                  <strong>Fazit:</strong> Weniger lohnenswert, Aktien könnten mehr Rendite bringen
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Alternativen zur Sondertilgung</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Geld anlegen</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Investieren Sie das Geld in Aktien, ETFs oder andere Anlagen mit höherer Rendite.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Höhere Rendite möglich</li>
                  <li>• Geld bleibt verfügbar</li>
                  <li>• Risiko der Anlage</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Notgroschen aufbauen</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Legen Sie 3-6 Monatsgehälter als Reserve für Notfälle zurück.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Finanzielle Sicherheit</li>
                  <li>• Keine neuen Kredite nötig</li>
                  <li>• Niedrige Verzinsung</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für Sondertilgungen</h2>
            
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Vertrag prüfen:</strong> Lesen Sie die Bedingungen zu Sondertilgungen genau durch</li>
              <li><strong>Kosten kalkulieren:</strong> Berechnen Sie alle anfallenden Gebühren</li>
              <li><strong>Notgroschen behalten:</strong> Tilgen Sie nicht Ihr gesamtes Erspartes</li>
              <li><strong>Steuern beachten:</strong> Bei Immobilienkrediten können steuerliche Vorteile entfallen</li>
              <li><strong>Beratung einholen:</strong> Lassen Sie sich bei komplexen Fällen beraten</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Eine Sondertilgung kann eine sehr lohnende Finanzentscheidung sein, besonders bei hohen Zinssätzen und langen Laufzeiten. Wichtig ist eine sorgfältige Kosten-Nutzen-Analyse unter Berücksichtigung aller Faktoren. Nutzen Sie unseren Kreditrechner, um verschiedene Szenarien durchzurechnen und die optimale Strategie zu finden.
            </p>

            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                Berechnen Sie Ihre Kreditkosten
              </h3>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unseren professionellen Kreditrechner, um verschiedene Sondertilgungsszenarien zu simulieren.
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
