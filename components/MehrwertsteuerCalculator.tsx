import Link from "next/link"
import VATCalculator from "@/components/VATCalculator"
import { ChevronRight, Home, Calculator, Euro, FileText, TrendingUp, Shield, Zap } from "lucide-react"

export default function MehrwertsteuerCalculator() {
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
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Steuern
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Online Mehrwertsteuer Rechner 2025
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Kostenloser Online Mehrwertsteuer-Rechner für Deutschland, Österreich und die Schweiz. 
              Einfach, schnell und genau - berechnen Sie MwSt. von Netto zu Brutto und umgekehrt.
            </p>
          </div>

          {/* Calculator Component */}
          <VATCalculator />

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Häufig gestellte Fragen</h2>
            
            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Wie berechne ich die Mehrwertsteuer von Netto zu Brutto?</h3>
                <p className="text-muted-foreground">
                  Multiplizieren Sie den Nettobetrag mit (1 + MwSt.-Satz). Beispiel: 100€ × 1,19 = 119€ bei 19% MwSt. in Deutschland.
                </p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Welche MwSt.-Sätze gelten in Deutschland, Österreich und der Schweiz?</h3>
                <p className="text-muted-foreground">
                  Deutschland: 19% (ermäßigt 7%), Österreich: 20% (ermäßigt 10%), Schweiz: 8.1% (ermäßigt 2.5%).
                </p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Wie berechne ich die MwSt. von Brutto zu Netto?</h3>
                <p className="text-muted-foreground">
                  Teilen Sie den Bruttobetrag durch (1 + MwSt.-Satz). Beispiel: 119€ ÷ 1,19 = 100€ bei 19% MwSt.
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <Euro className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Aktuelle Steuersätze</h3>
              <p className="text-sm text-muted-foreground">
                Alle aktuellen MwSt-Sätze für Deutschland, Österreich und die Schweiz
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Datenschutz</h3>
              <p className="text-sm text-muted-foreground">
                Ihre Eingaben werden nicht gespeichert oder weitergegeben
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Schnell & Einfach</h3>
              <p className="text-sm text-muted-foreground">
                Sofortige Ergebnisse ohne Registrierung
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
