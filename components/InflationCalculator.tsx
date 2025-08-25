import Link from "next/link"
import InflationCalculator from "@/components/InflationCalculator"
import { TrendingUp, Calculator, Calendar, DollarSign, BarChart3 } from "lucide-react"

export default function InflationCalculatorComponent() {
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
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Inflation
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Online Inflationsrechner Deutschland
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Berechnen Sie die Kaufkraftveränderung Ihres Geldes durch Inflation. 
              Basierend auf historischen Inflationsraten des Statistischen Bundesamts.
            </p>
          </div>

          {/* Calculator Component */}
          <InflationCalculator />

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Häufig gestellte Fragen</h2>
            
            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Wie wird die Inflation berechnet?</h3>
                <p className="text-muted-foreground">
                  Die Berechnung basiert auf dem Verbraucherpreisindex (VPI) des Statistischen Bundesamts. 
                  Jedes Jahr wird der Betrag mit der jeweiligen Inflationsrate multipliziert.
                </p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Warum war die Inflation 2022 so hoch?</h3>
                <p className="text-muted-foreground">
                  2022 erreichte die Inflation 6,9% - hauptsächlich durch Energiepreise, Lieferkettenprobleme 
                  und die Auswirkungen des Ukraine-Kriegs.
                </p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Wie kann ich mich vor Inflation schützen?</h3>
                <p className="text-muted-foreground">
                  Investitionen in Sachwerte, Aktien oder Immobilien können helfen, 
                  da diese oft mit der Inflation steigen.
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Historische Daten</h3>
              <p className="text-sm text-muted-foreground">
                Inflationsraten seit 1991 vom Statistischen Bundesamt
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Flexible Zeiträume</h3>
              <p className="text-sm text-muted-foreground">
                Berechnung für beliebige Zeiträume zwischen 1991 und heute
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <DollarSign className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Kaufkraftvergleich</h3>
              <p className="text-sm text-muted-foreground">
                Zeigt, wie sich Ihre Kaufkraft über die Zeit entwickelt hat
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
