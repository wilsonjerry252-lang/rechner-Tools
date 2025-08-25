import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, Percent } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Prozentrechnung einfach erklärt: Formeln & Beispiele für den Alltag",
  description: "Lernen Sie Prozentrechnung mit praktischen Beispielen. Formeln für Rabatt, Mehrwertsteuer, Trinkgeld und mehr. Einfach und verständlich erklärt.",
  keywords: "prozentrechnung, prozent berechnen, prozentformel, rabatt berechnen, mwst berechnen, trinkgeld berechnen",
  openGraph: {
    title: "Prozentrechnung einfach erklärt: Formeln & Beispiele für den Alltag",
    description: "Lernen Sie Prozentrechnung mit praktischen Beispielen. Formeln für Rabatt, Mehrwertsteuer, Trinkgeld und mehr. Einfach und verständlich erklärt.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/prozentrechnung-einfach-erklaert",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/prozentrechnung-einfach-erklaert",
      "x-default": "https://www.rechnerjetzt.de/blog/prozentrechnung-einfach-erklaert",
    },
  },
}

export default function ProzentrechnungEinfachErklaertPage() {
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
                <Percent className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Finanzen
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Prozentrechnung einfach erklärt: Formeln & Beispiele für den Alltag
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
              Prozentrechnung ist eine der wichtigsten mathematischen Grundlagen im Alltag. Ob beim Einkaufen, bei der Steuerberechnung oder bei der Finanzplanung - Prozente begegnen uns überall. Viele Menschen haben jedoch Schwierigkeiten mit der Prozentrechnung. In diesem Artikel lernen Sie die Grundlagen und praktische Anwendungen kennen, die Ihnen helfen, Prozente schnell und sicher zu berechnen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist ein Prozent?</h2>
            <p className="mb-6">
              Ein <strong>Prozent</strong> (1%) entspricht einem Hundertstel. Das bedeutet: 1% = 1/100 = 0,01. Prozente werden verwendet, um Anteile, Veränderungen und Verhältnisse einfach darzustellen. Sie sind eine praktische Möglichkeit, um relative Größen zu beschreiben.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie berechnet man Prozente?</h2>
            <p className="mb-6">
              Die Berechnung von Prozenten folgt einer einfachen Formel. Hier ist die Schritt-für-Schritt-Anleitung:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Bestimmen Sie den Grundwert (Gesamtmenge)</li>
              <li>Wählen Sie den Prozentsatz</li>
              <li>Berechnen Sie den Prozentwert: <strong>Grundwert × Prozentsatz = Prozentwert</strong></li>
              <li>Teilen Sie durch 100, um den Prozentsatz zu berücksichtigen</li>
            </ol>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Grundformel:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Prozentwert = Grundwert × (Prozentsatz ÷ 100)
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Beispiele zur Berechnung</h2>
            <p className="mb-6">
              Hier sind praktische Beispiele, die zeigen, wie Prozente berechnet werden:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 1: Rabatt berechnen</h3>
              <p className="mb-4">Ein Produkt kostet 80€ und hat 15% Rabatt. Wie viel kostet es nach dem Rabatt?</p>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Rabatt = 80€ × 15 ÷ 100 = 12€</p>
                <p>Neuer Preis = 80€ - 12€ = 68€</p>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 2: Mehrwertsteuer berechnen</h3>
              <p className="mb-4">Ein Nettobetrag von 100€ soll auf 19% MwSt. aufgeschlagen werden.</p>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>MwSt. = 100€ × 19 ÷ 100 = 19€</p>
                <p>Bruttobetrag = 100€ + 19€ = 119€</p>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 3: Trinkgeld berechnen</h3>
              <p className="mb-4">Bei einer Rechnung von 45€ möchten Sie 10% Trinkgeld geben.</p>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Trinkgeld = 45€ × 10 ÷ 100 = 4,50€</p>
                <p>Gesamtbetrag = 45€ + 4,50€ = 49,50€</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Prozentuale Veränderungen</h2>
            <p className="mb-6">
              Prozentuale Veränderungen zeigen, um wie viel sich ein Wert im Vergleich zu einem Ausgangswert geändert hat. Diese Berechnung ist besonders wichtig bei Preisänderungen, Wachstumsraten und Statistiken.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Formel für prozentuale Veränderung:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Veränderung (%) = (Neuer Wert - Alter Wert) ÷ Alter Wert × 100
              </p>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Beispiel: Preissteigerung</h3>
            <p className="mb-4">
              Ein Produkt kostete gestern 50€ und heute 60€. Um wie viel Prozent ist der Preis gestiegen?
            </p>
            <div className="bg-secondary/10 p-4 rounded-lg mb-4 font-mono">
              <p>Veränderung = (60€ - 50€) ÷ 50€ × 100</p>
              <p>Veränderung = 10€ ÷ 50€ × 100</p>
              <p>Veränderung = 0,2 × 100 = 20%</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Weitere wichtige Prozentformeln</h2>
            <p className="mb-6">
              Neben der Grundformel gibt es weitere wichtige Formeln für spezielle Anwendungen:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Prozentsatz berechnen</h3>
            <p className="mb-4">
              Wenn Sie den Prozentsatz berechnen möchten, verwenden Sie diese Formel:
            </p>
            <div className="bg-primary/5 p-4 rounded-lg mb-4 border border-primary/20">
              <p className="text-center font-mono">
                Prozentsatz = (Prozentwert ÷ Grundwert) × 100
              </p>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Grundwert berechnen</h3>
            <p className="mb-4">
              Wenn Sie den Grundwert berechnen möchten, verwenden Sie diese Formel:
            </p>
            <div className="bg-primary/5 p-4 rounded-lg mb-4 border border-primary/20">
              <p className="text-center font-mono">
                Grundwert = (Prozentwert ÷ Prozentsatz) × 100
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Anwendungen im Alltag</h2>
            <p className="mb-6">
              Prozentrechnung wird in vielen Bereichen des täglichen Lebens verwendet:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Einkaufen:</strong> Rabatte, Mehrwertsteuer, Skonti berechnen</li>
              <li><strong>Finanzen:</strong> Zinsen, Renditen, Inflation berechnen</li>
              <li><strong>Arbeit:</strong> Gehaltserhöhungen, Provisionen, Überstunden</li>
              <li><strong>Statistiken:</strong> Umfragen, Wahlergebnisse, Marktanteile</li>
              <li><strong>Wissenschaft:</strong> Konzentrationen, Wachstumsraten, Fehlerquoten</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Tipps für die Prozentrechnung</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Verwenden Sie immer die Grundformel: Prozentwert = Grundwert × (Prozentsatz ÷ 100)</li>
              <li>Bei Aufschlägen addieren Sie den Prozentwert zum Grundwert</li>
              <li>Bei Abschlägen subtrahieren Sie den Prozentwert vom Grundwert</li>
              <li>Verwenden Sie einen Taschenrechner für komplexere Berechnungen</li>
              <li>Überprüfen Sie Ihre Ergebnisse durch Rückwärtsrechnung</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie berechne ich 20% von 150€?</h3>
            <p className="mb-6">
              Verwenden Sie die Formel: 150€ × 20 ÷ 100 = 30€. Das Ergebnis ist 30€.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Was bedeutet "um 25% erhöht"?</h3>
            <p className="mb-6">
              "Um 25% erhöht" bedeutet, dass der neue Wert 125% des ursprünglichen Wertes beträgt. Sie addieren also 25% zum ursprünglichen Wert.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie berechne ich den ursprünglichen Preis nach einem Rabatt?</h3>
            <p className="mb-6">
              Wenn ein Produkt nach 20% Rabatt 80€ kostet, teilen Sie 80€ durch 0,8 (100% - 20% = 80% = 0,8). Der ursprüngliche Preis war 100€.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Was ist der Unterschied zwischen Prozentpunkten und Prozent?</h3>
            <p className="mb-6">
              Prozentpunkte zeigen absolute Änderungen (z.B. von 5% auf 7% = 2 Prozentpunkte), während Prozent relative Änderungen zeigen (z.B. von 5% auf 7% = 40% Steigerung).
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie berechne ich den Durchschnitt von mehreren Prozentwerten?</h3>
            <p className="mb-6">
              Addieren Sie alle Prozentwerte und teilen Sie durch die Anzahl der Werte. Beachten Sie, dass dies nur bei gleichwertigen Größen sinnvoll ist.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Praxistipp:</h3>
              <p className="mb-4">
                Nutzen Sie unseren <Link href="/prozentrechner" className="text-primary hover:underline font-medium">Prozentrechner</Link> für schnelle und präzise Berechnungen. Er unterstützt alle gängigen Prozentrechnungen und zeigt Ihnen die Schritte zur Lösung.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Prozentrechnung ist eine wichtige Grundlage für viele Bereiche des Lebens. Mit den richtigen Formeln und etwas Übung können Sie Prozente schnell und sicher berechnen. Wichtig ist, dass Sie zwischen den verschiedenen Anwendungsfällen unterscheiden und die entsprechenden Formeln verwenden. Nutzen Sie die praktischen Beispiele als Referenz für Ihre eigenen Berechnungen und unseren Prozentrechner für komplexere Aufgaben.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Weitere Informationen</h3>
              <p className="mb-4">
                Entdecken Sie weitere nützliche Artikel zu Finanzen und Mathematik in unserem <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link> oder nutzen Sie direkt unseren <Link href="/prozentrechner" className="text-primary hover:underline font-medium">Prozentrechner</Link> für Ihre Berechnungen.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
