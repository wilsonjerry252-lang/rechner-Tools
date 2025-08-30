import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, BarChart3, Target, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Rendite berechnen: So bewerten Sie Ihre Investitionen",
  description: "Lernen Sie, wie Sie Renditen richtig berechnen und Ihre Investitionen bewerten. ROI, CAGR und andere wichtige Kennzahlen einfach erklärt mit praktischen Beispielen.",
  keywords: "rendite berechnen, roi berechnen, investition bewerten, cagr, kapitalrendite, anlagekennzahlen, investitionsrechnung",
  openGraph: {
    title: "Rendite berechnen: So bewerten Sie Ihre Investitionen",
    description: "Lernen Sie, wie Sie Renditen richtig berechnen und Ihre Investitionen bewerten. ROI, CAGR und andere wichtige Kennzahlen einfach erklärt mit praktischen Beispielen.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/rendite-berechnen-investitionen-bewerten",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/rendite-berechnen-investitionen-bewerten",
      "x-default": "https://www.rechnerjetzt.de/blog/rendite-berechnen-investitionen-bewerten",
    },
  },
}

export default function RenditeBerechnenPage() {
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
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Investitionen
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Rendite berechnen: So bewerten Sie Ihre Investitionen
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>11 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Die richtige Berechnung von Renditen ist der Schlüssel zu erfolgreichen Investitionsentscheidungen. Viele Anleger verstehen nicht, wie sie ihre Investitionen richtig bewerten und vergleichen können. In diesem umfassenden Guide erklären wir Ihnen alle wichtigen Renditekennzahlen und zeigen Ihnen, wie Sie Ihre Anlagen professionell analysieren.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist Rendite?</h2>
            <p className="mb-6">
              Die <strong>Rendite</strong> ist der prozentuale Gewinn oder Verlust einer Investition im Verhältnis zum eingesetzten Kapital. Sie ist die wichtigste Kennzahl zur Bewertung von Anlagen und ermöglicht den Vergleich verschiedener Investitionsmöglichkeiten.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">📊 Rendite-Formel:</h3>
              <div className="text-center">
                <p className="text-lg font-mono bg-card p-3 rounded-lg">
                  Rendite = (Gewinn ÷ eingesetztes Kapital) × 100%
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wichtige Renditekennzahlen</h2>
            <p className="mb-6">
              Für eine professionelle Investitionsbewertung sollten Sie verschiedene Renditekennzahlen kennen und verstehen:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4 mt-6">1. Return on Investment (ROI)</h3>
            <p className="mb-6">
              Der ROI ist die einfachste und bekannteste Renditekennzahl. Er zeigt, wie viel Gewinn Sie pro eingesetztem Euro erzielt haben.
            </p>

            <div className="bg-accent/10 p-6 rounded-xl mb-6 border border-accent/20">
              <h4 className="text-lg font-bold text-foreground mb-4">💡 ROI-Beispiel:</h4>
              <div className="space-y-3">
                <p><strong>Eingesetztes Kapital:</strong> 10.000 €</p>
                <p><strong>Verkaufserlös:</strong> 12.000 €</p>
                <p><strong>Gewinn:</strong> 2.000 €</p>
                <p><strong>ROI:</strong> (2.000 € ÷ 10.000 €) × 100% = <strong>20%</strong></p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-4 mt-6">2. Compound Annual Growth Rate (CAGR)</h3>
            <p className="mb-6">
              Die CAGR zeigt die durchschnittliche jährliche Wachstumsrate einer Investition über einen bestimmten Zeitraum. Sie ist besonders nützlich für langfristige Anlagen.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h4 className="text-lg font-bold text-foreground mb-4">📈 CAGR-Formel:</h4>
              <div className="text-center">
                <p className="text-lg font-mono bg-card p-3 rounded-lg">
                  CAGR = (Endwert ÷ Anfangswert)^(1 ÷ Jahre) - 1
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-4 mt-6">3. Internal Rate of Return (IRR)</h3>
            <p className="mb-6">
              Der IRR ist der Zinssatz, bei dem der Barwert aller Ein- und Auszahlungen einer Investition null beträgt. Er ist eine wichtige Kennzahl für komplexe Investitionsprojekte.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Beispiele zur Renditeberechnung</h2>
            <p className="mb-6">
              Lassen Sie uns verschiedene Investitionsszenarien durchgehen, um die Renditeberechnung zu verstehen:
            </p>

            <div className="bg-green-50 p-6 rounded-xl mb-6 border border-green-200">
              <h3 className="text-lg font-bold text-foreground mb-4">🏠 Beispiel 1: Immobilieninvestition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Kaufpreis</p>
                  <p className="text-lg font-bold text-primary">300.000 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Jährliche Mieteinnahmen</p>
                  <p className="text-lg font-bold text-primary">18.000 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Jährliche Kosten</p>
                  <p className="text-lg font-bold text-primary">6.000 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Nettorendite</p>
                  <p className="text-lg font-bold text-primary">4,0%</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl mb-6 border border-blue-200">
              <h3 className="text-lg font-bold text-foreground mb-4">📈 Beispiel 2: Aktieninvestition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Kaufpreis pro Aktie</p>
                  <p className="text-lg font-bold text-primary">50 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Verkaufspreis pro Aktie</p>
                  <p className="text-lg font-bold text-primary">65 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Dividende pro Jahr</p>
                  <p className="text-lg font-bold text-primary">2 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Gesamtrendite</p>
                  <p className="text-lg font-bold text-primary">34%</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Risiko vs. Rendite</h2>
            <p className="mb-6">
              Eine wichtige Grundregel der Investition lautet: Höhere Renditen gehen mit höheren Risiken einher. Es ist wichtig, das Risiko-Rendite-Verhältnis zu verstehen:
            </p>

            <div className="bg-yellow-50 p-6 rounded-xl mb-6 border border-yellow-200">
              <h3 className="text-lg font-bold text-foreground mb-4">⚠️ Risiko-Rendite-Spektrum:</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span><strong>Spareinlagen:</strong> Niedriges Risiko</span>
                  <span className="text-muted-foreground">1-2% Rendite</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Staatsanleihen:</strong> Geringes Risiko</span>
                  <span className="text-muted-foreground">2-4% Rendite</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Aktien:</strong> Mittleres Risiko</span>
                  <span className="text-muted-foreground">6-10% Rendite</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Kryptowährungen:</strong> Hohes Risiko</span>
                  <span className="text-muted-foreground">20%+ Rendite</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Zeitfaktor bei der Renditeberechnung</h2>
            <p className="mb-6">
              Der Zeitfaktor spielt eine entscheidende Rolle bei der Renditeberechnung. Je länger Sie investiert sind, desto wichtiger wird der Zinseszins-Effekt:
            </p>

            <div className="bg-accent/10 p-6 rounded-xl mb-6 border border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-4">⏰ Zinseszins-Beispiel:</h3>
              <div className="space-y-3">
                <p><strong>Anfangskapital:</strong> 10.000 €</p>
                <p><strong>Jährliche Rendite:</strong> 7%</p>
                <p><strong>Nach 10 Jahren:</strong> 19.672 €</p>
                <p><strong>Nach 20 Jahren:</strong> 38.697 €</p>
                <p><strong>Nach 30 Jahren:</strong> 76.123 €</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fehler bei der Renditeberechnung</h2>
            <p className="mb-6">
              Viele Anleger machen typische Fehler bei der Renditeberechnung. Hier sind die wichtigsten Punkte, auf die Sie achten sollten:
            </p>

            <div className="bg-red-50 p-6 rounded-xl mb-6 border border-red-200">
              <h3 className="text-lg font-bold text-foreground mb-4">❌ Häufige Fehler:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kosten vergessen:</strong> Transaktionskosten, Verwaltungsgebühren, Steuern</li>
                <li><strong>Zeitfaktor ignorieren:</strong> 10% in einem Jahr vs. 10% in 10 Jahren</li>
                <li><strong>Inflation vernachlässigen:</strong> Reale vs. nominale Rendite</li>
                <li><strong>Risiko unterschätzen:</strong> Nur auf die Rendite schauen</li>
                <li><strong>Steuern vergessen:</strong> Brutto- vs. Nettorendite</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Was ist der Unterschied zwischen nominaler und realer Rendite?</h3>
                <p className="text-muted-foreground">
                  Die nominale Rendite ist der absolute Gewinn, während die reale Rendite die Inflation berücksichtigt. Bei 5% Rendite und 2% Inflation beträgt die reale Rendite nur 3%.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Wie berechne ich die durchschnittliche Rendite mehrerer Jahre?</h3>
                <p className="text-muted-foreground">
                  Verwenden Sie die CAGR-Formel: (Endwert ÷ Anfangswert)^(1 ÷ Jahre) - 1. Das gibt Ihnen die durchschnittliche jährliche Wachstumsrate.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Welche Rendite ist realistisch für Aktien?</h3>
                <p className="text-muted-foreground">
                  Historisch gesehen erzielen Aktien durchschnittlich 6-10% Rendite pro Jahr. Kurzfristig können die Schwankungen jedoch erheblich sein.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Sollte ich nur auf die Rendite achten?</h3>
                <p className="text-muted-foreground">
                  Nein! Rendite ist nur ein Faktor. Berücksichtigen Sie auch Risiko, Liquidität, Zeitfaktor und Ihre persönlichen Ziele.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Wie oft sollte ich meine Renditen berechnen?</h3>
                <p className="text-muted-foreground">
                  Für langfristige Anlagen reicht eine jährliche Bewertung. Bei aktiven Anlagen können Sie auch monatlich oder vierteljährlich rechnen.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit und Empfehlungen</h2>
            <p className="mb-6">
              Die richtige Berechnung von Renditen ist entscheidend für erfolgreiche Investitionsentscheidungen. Verstehen Sie die verschiedenen Renditekennzahlen, berücksichtigen Sie den Zeitfaktor und das Risiko, und vermeiden Sie typische Fehler.
            </p>

            <p className="mb-6">
              Denken Sie daran: Rendite ist nicht alles. Eine ausgewogene Investitionsstrategie berücksichtigt auch Risiko, Liquidität und Ihre persönlichen Ziele.
            </p>

            <div className="bg-primary/10 p-6 rounded-xl mb-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Unser Tipp:</h3>
              <p className="mb-4">
                Nutzen Sie professionelle Renditerechner für genaue Berechnungen. Diese berücksichtigen alle wichtigen Faktoren und geben Ihnen ein realistisches Bild Ihrer Investitionen.
              </p>
              <p>
                Für weitere Finanzberechnungen besuchen Sie unsere <Link href="/prozentrechner" className="text-primary hover:underline">Prozentrechner</Link> und andere hilfreiche Tools.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">📚 Weiterführende Artikel:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/prozentrechnung-einfach-erklaert" className="text-primary hover:underline">Prozentrechnung einfach erklärt: Formeln & Beispiele</Link></li>
                <li><Link href="/blog/kreditrechner-zinsen-tilgung-berechnen" className="text-primary hover:underline">Kreditrechner: Zinsen & Tilgung richtig berechnen</Link></li>
                <li><Link href="/blog/mehrwertsteuer-berechnung-richtig" className="text-primary hover:underline">Mehrwertsteuer richtig berechnen: Mit Beispielen</Link></li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
