import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, CreditCard, DollarSign, Percent } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Kreditrechner: Zinsen & Tilgung richtig berechnen",
  description: "Lernen Sie, wie Sie Kredite richtig berechnen. Verstehen Sie Zinsen, Tilgung und monatliche Raten mit unserem umfassenden Guide und praktischen Beispielen.",
  keywords: "kreditrechner, kredit berechnen, zinsen tilgung, monatliche rate, kreditzinsen, darlehen berechnen, kreditkosten",
  openGraph: {
    title: "Kreditrechner: Zinsen & Tilgung richtig berechnen",
    description: "Lernen Sie, wie Sie Kredite richtig berechnen. Verstehen Sie Zinsen, Tilgung und monatliche Raten mit unserem umfassenden Guide und praktischen Beispielen.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/kreditrechner-zinsen-tilgung-berechnen",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/kreditrechner-zinsen-tilgung-berechnen",
      "x-default": "https://www.rechnerjetzt.de/blog/kreditrechner-zinsen-tilgung-berechnen",
    },
  },
}

export default function KreditrechnerPage() {
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
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Finanzen
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Kreditrechner: Zinsen & Tilgung richtig berechnen
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Die richtige Berechnung von Krediten ist entscheidend für Ihre finanzielle Planung. Viele Menschen unterschätzen die Gesamtkosten eines Kredits und verstehen nicht, wie Zinsen und Tilgung funktionieren. In diesem umfassenden Guide erklären wir Ihnen Schritt für Schritt, wie Sie Kredite berechnen und worauf Sie achten müssen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist ein Kreditrechner?</h2>
            <p className="mb-6">
              Ein <strong>Kreditrechner</strong> ist ein Tool, das Ihnen hilft, die wichtigsten Kennzahlen eines Kredits zu berechnen. Dazu gehören die monatliche Rate, die Gesamtkosten, die Laufzeit und der effektive Jahreszins. Mit diesen Informationen können Sie verschiedene Kreditangebote vergleichen und die beste Entscheidung treffen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Grundlagen der Kreditberechnung</h2>
            <p className="mb-6">
              Um Kredite richtig zu verstehen, müssen Sie die wichtigsten Begriffe kennen:
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">📚 Wichtige Kreditbegriffe:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kreditsumme:</strong> Der Betrag, den Sie sich leihen</li>
                <li><strong>Nominalzins:</strong> Der vereinbarte Zinssatz pro Jahr</li>
                <li><strong>Effektivzins:</strong> Der tatsächliche Zinssatz inklusive aller Kosten</li>
                <li><strong>Tilgung:</strong> Die Rückzahlung der Kreditsumme</li>
                <li><strong>Laufzeit:</strong> Der Zeitraum bis zur vollständigen Rückzahlung</li>
                <li><strong>Monatliche Rate:</strong> Der Betrag, den Sie monatlich zahlen</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie funktioniert die Kreditberechnung?</h2>
            <p className="mb-6">
              Die Berechnung eines Kredits basiert auf mathematischen Formeln, die Zinsen und Tilgung berücksichtigen. Die monatliche Rate setzt sich aus zwei Teilen zusammen:
            </p>

            <div className="bg-accent/10 p-6 rounded-xl mb-6 border border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Monatliche Rate berechnen:</h3>
              <div className="text-center">
                <p className="text-lg font-mono bg-card p-3 rounded-lg">
                  Monatliche Rate = Zinsanteil + Tilgungsanteil
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-4 mt-6">Schritt-für-Schritt Berechnung</h3>
            <p className="mb-6">
              Hier ist die detaillierte Berechnung für einen Annuitätenkredit:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Bestimmen Sie die Kreditsumme (z.B. 100.000 €)</li>
              <li>Wählen Sie den Zinssatz (z.B. 3,5% pro Jahr)</li>
              <li>Legen Sie die Laufzeit fest (z.B. 20 Jahre)</li>
              <li>Berechnen Sie den monatlichen Zinssatz: 3,5% ÷ 12 = 0,2917%</li>
              <li>Verwenden Sie die Annuitätenformel für die monatliche Rate</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Beispiele</h2>
            <p className="mb-6">
              Lassen Sie uns ein konkretes Beispiel durchgehen, um die Berechnung zu verstehen:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">🏠 Beispiel: Immobilienkredit</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Kreditsumme</p>
                  <p className="text-lg font-bold text-primary">300.000 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Zinssatz</p>
                  <p className="text-lg font-bold text-primary">3,2% p.a.</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Laufzeit</p>
                  <p className="text-lg font-bold text-primary">25 Jahre</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Monatliche Rate</p>
                  <p className="text-lg font-bold text-primary">1.456 €</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Zinsanteil vs. Tilgungsanteil</h2>
            <p className="mb-6">
              Bei einem Annuitätenkredit bleibt die monatliche Rate konstant, aber das Verhältnis zwischen Zins- und Tilgungsanteil ändert sich über die Laufzeit:
            </p>

            <div className="bg-green-50 p-6 rounded-xl mb-6 border border-green-200">
              <h3 className="text-lg font-bold text-foreground mb-4">📊 Entwicklung über die Laufzeit:</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span><strong>Jahr 1:</strong> Zinsanteil: 1.200 €, Tilgung: 256 €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Jahr 10:</strong> Zinsanteil: 1.050 €, Tilgung: 406 €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Jahr 20:</strong> Zinsanteil: 650 €, Tilgung: 806 €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Jahr 25:</strong> Zinsanteil: 50 €, Tilgung: 1.406 €</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Effektiver Jahreszins (APR)</h2>
            <p className="mb-6">
              Der effektive Jahreszins ist der tatsächliche Zinssatz, der alle Kosten des Kredits berücksichtigt. Er ist höher als der Nominalzins und ermöglicht einen fairen Vergleich verschiedener Kreditangebote.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Tipps für die Kreditaufnahme</h2>
            <p className="mb-6">
              Um den besten Kredit zu finden, sollten Sie folgende Punkte beachten:
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mb-6 border border-blue-200">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Kredit-Tipps:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vergleichen Sie mehrere Kreditangebote</li>
                <li>Achten Sie auf den effektiven Jahreszins, nicht nur den Nominalzins</li>
                <li>Prüfen Sie alle versteckten Kosten und Gebühren</li>
                <li>Berechnen Sie, ob Sie sich die monatliche Rate leisten können</li>
                <li>Überlegen Sie sich, ob eine Sondertilgung sinnvoll ist</li>
                <li>Lassen Sie sich von einem unabhängigen Berater beraten</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Was ist der Unterschied zwischen Nominalzins und Effektivzins?</h3>
                <p className="text-muted-foreground">
                  Der Nominalzins ist der vereinbarte Zinssatz, während der Effektivzins alle Kosten des Kredits (Gebühren, Versicherungen) berücksichtigt. Der Effektivzins ist daher immer höher.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Kann ich einen Kredit vorzeitig zurückzahlen?</h3>
                <p className="text-muted-foreground">
                  Ja, in der Regel können Sie Kredite vorzeitig zurückzahlen. Oft fallen dabei Vorfälligkeitsentschädigungen an, die Sie vorher prüfen sollten.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Wie wirkt sich eine Sondertilgung aus?</h3>
                <p className="text-muted-foreground">
                  Eine Sondertilgung reduziert die Restschuld und kann die Laufzeit verkürzen oder die monatliche Rate senken. Prüfen Sie die Bedingungen Ihres Kreditvertrags.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Was passiert, wenn ich die Rate nicht zahlen kann?</h3>
                <p className="text-muted-foreground">
                  Bei Zahlungsverzug können Mahngebühren anfallen. Sprechen Sie frühzeitig mit Ihrer Bank über eine Lösung, bevor es zu ernsten Problemen kommt.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Lohnt sich ein Kreditvergleich?</h3>
                <p className="text-muted-foreground">
                  Absolut! Ein Kreditvergleich kann Ihnen mehrere tausend Euro sparen. Nutzen Sie Online-Vergleichsportale und lassen Sie sich von mehreren Banken Angebote machen.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit und Empfehlungen</h2>
            <p className="mb-6">
              Die richtige Berechnung von Krediten ist entscheidend für Ihre finanzielle Gesundheit. Verstehen Sie die Grundlagen von Zinsen und Tilgung, vergleichen Sie verschiedene Angebote und nutzen Sie professionelle Kreditrechner für genaue Berechnungen.
            </p>

            <p className="mb-6">
              Denken Sie daran: Ein Kredit ist eine langfristige Verpflichtung, die Sie sorgfältig planen sollten. Nehmen Sie sich Zeit für die Entscheidung und lassen Sie sich von Experten beraten.
            </p>

            <div className="bg-primary/10 p-6 rounded-xl mb-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Unser Tipp:</h3>
              <p className="mb-4">
                Nutzen Sie professionelle Kreditrechner für genaue Berechnungen. Diese berücksichtigen alle wichtigen Faktoren und geben Ihnen ein realistisches Bild der Kreditkosten.
              </p>
              <p>
                Für weitere Finanzberechnungen besuchen Sie unsere <Link href="/prozentrechner" className="text-primary hover:underline">Prozentrechner</Link> und andere hilfreiche Tools.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">📚 Weiterführende Artikel:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/prozentrechnung-einfach-erklaert" className="text-primary hover:underline">Prozentrechnung einfach erklärt: Formeln & Beispiele</Link></li>
                <li><Link href="/blog/rabatte-richtig-berechnen" className="text-primary hover:underline">Rabatte richtig berechnen: So sparen Sie wirklich</Link></li>
                <li><Link href="/blog/mehrwertsteuer-berechnung-richtig" className="text-primary hover:underline">Mehrwertsteuer richtig berechnen: Mit Beispielen</Link></li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
