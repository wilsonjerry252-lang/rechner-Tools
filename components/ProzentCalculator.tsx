import Link from "next/link"
import PercentageCalculator from "@/components/PercentageCalculator"
import { Calculator, Percent, TrendingUp, TrendingDown, DollarSign } from "lucide-react"

export default function ProzentCalculator() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-10 w-10 rounded-full shadow-md" />
              <div>
                <h3 className="text-xl font-bold font-serif">Rechner Tools</h3>
                <p className="text-xs opacity-90 font-medium">Professionelle Online-Rechner</p>
              </div>
            </div>
            <Link href="/">
              <button className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-lg transition-colors">
                ← Zurück zur Startseite
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-card rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Percent className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Prozentrechnung
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Online Prozentrechner
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Kostenloser Online Prozentrechner für Rabatte, Aufschläge und prozentuale Änderungen. 
              Einfach, schnell und genau - Prozente berechnen für Deutschland, Österreich und die Schweiz.
            </p>
          </div>

          {/* Calculator Component */}
          <PercentageCalculator />

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Häufig gestellte Fragen</h2>
            
            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Wie berechne ich 20% Rabatt?</h3>
                <p className="text-muted-foreground">
                  Um 20% Rabatt zu berechnen, wählen Sie 'Rabatt berechnen', geben den Ursprungspreis ein und 20 als Rabattsatz. 
                  Der Rechner zeigt Ihnen den reduzierten Preis und die Ersparnis an.
                </p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Was ist der Unterschied zwischen Rabatt und Aufschlag?</h3>
                <p className="text-muted-foreground">
                  Rabatt reduziert den Preis um einen Prozentwert, Aufschlag erhöht ihn. Bei 20% Rabatt auf 100€ zahlen Sie 80€. 
                  Bei 20% Aufschlag auf 100€ zahlen Sie 120€.
                </p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Wie berechne ich die Mehrwertsteuer mit dem Prozentrechner?</h3>
                <p className="text-muted-foreground">
                  Wählen Sie 'Prozent von einem Wert', geben den Nettobetrag ein und 19 (für Deutschland) als Prozentsatz. 
                  Das Ergebnis ist die Mehrwertsteuer.
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <TrendingDown className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Rabatte berechnen</h3>
              <p className="text-sm text-muted-foreground">
                Einfache Berechnung von Rabatten und Preisnachlässen
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Aufschläge berechnen</h3>
              <p className="text-sm text-muted-foreground">
                Berechnung von Aufschlägen und Preissteigerungen
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <DollarSign className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Prozentuale Änderungen</h3>
              <p className="text-sm text-muted-foreground">
                Berechnung von prozentualen Wertänderungen
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
