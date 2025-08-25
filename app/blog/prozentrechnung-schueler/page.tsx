import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Prozentrechnung für Schüler: Einfache Beispiele zum Lernen",
  description: "Lernen Sie Prozentrechnung mit einfachen Beispielen für Schüler. Schritt-für-Schritt Erklärungen und praktische Übungen.",
  keywords: "prozentrechnung schüler, prozent lernen, mathe prozent, prozentrechnung übungen, prozentrechnung einfach, schule mathematik",
  openGraph: {
    title: "Prozentrechnung für Schüler: Einfache Beispiele zum Lernen",
    description: "Lernen Sie Prozentrechnung mit einfachen Beispielen für Schüler. Schritt-für-Schritt Erklärungen und praktische Übungen.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/prozentrechnung-schueler",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/prozentrechnung-schueler",
      "x-default": "https://www.rechnerjetzt.de/blog/prozentrechnung-schueler",
    },
  },
}

export default function ProzentrechnungSchuelerPage() {
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
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Bildung
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Prozentrechnung für Schüler: Einfache Beispiele zum Lernen
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
              Prozentrechnung ist ein wichtiges Thema in der Mathematik, das vielen Schülern Schwierigkeiten bereitet. Doch mit den richtigen Beispielen und einer klaren Erklärung kann jeder Prozentrechnung lernen. In diesem Artikel erklären wir Schritt für Schritt, was Prozente sind, wie man sie berechnet und geben praktische Beispiele, die Schüler leicht verstehen können.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was sind Prozente?</h2>
            <p className="mb-6">
              <strong>Prozente</strong> sind eine besondere Schreibweise für Brüche mit dem Nenner 100. Das Wort "Prozent" kommt aus dem Lateinischen und bedeutet "von Hundert". Ein Prozent (1%) entspricht also einem Hundertstel (1/100). Prozente werden verwendet, um Anteile, Veränderungen und Verhältnisse einfach darzustellen.
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
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Grundformel für Schüler:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Prozentwert = Grundwert × (Prozentsatz ÷ 100)
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Einfache Beispiele für Schüler</h2>
            <p className="mb-6">
              Hier sind praktische Beispiele, die Schüler leicht verstehen können:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 1: 20% von 50€</h3>
              <p className="mb-4">Ein Schüler hat 50€ und möchte 20% davon sparen. Wie viel kann er sparen?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Grundwert</p>
                  <p className="text-lg font-bold text-primary">50,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Prozentsatz</p>
                  <p className="text-lg font-bold text-primary">20%</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Prozentwert</p>
                  <p className="text-lg font-bold text-primary">10,00 €</p>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Prozentwert = 50€ × 20 ÷ 100</p>
                <p>Prozentwert = 50€ × 0,2</p>
                <p>Prozentwert = 10€</p>
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">Der Schüler kann 10€ sparen!</p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 2: 15% von 80 Schülern</h3>
              <p className="mb-4">In einer Klasse mit 80 Schülern sind 15% krank. Wie viele Schüler fehlen?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Grundwert</p>
                  <p className="text-lg font-bold text-primary">80 Schüler</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Prozentsatz</p>
                  <p className="text-lg font-bold text-primary">15%</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Prozentwert</p>
                  <p className="text-lg font-bold text-primary">12 Schüler</p>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Prozentwert = 80 × 15 ÷ 100</p>
                <p>Prozentwert = 80 × 0,15</p>
                <p>Prozentwert = 12</p>
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">12 Schüler sind krank!</p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 3: 25% von 200€</h3>
              <p className="mb-4">Ein Handy kostet 200€ und hat 25% Rabatt. Wie viel kostet es nach dem Rabatt?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Ursprungspreis</p>
                  <p className="text-lg font-bold text-primary">200,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Rabatt (25%)</p>
                  <p className="text-lg font-bold text-primary">50,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Neuer Preis</p>
                  <p className="text-lg font-bold text-primary">150,00 €</p>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Rabatt = 200€ × 25 ÷ 100 = 50€</p>
                <p>Neuer Preis = 200€ - 50€ = 150€</p>
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">Das Handy kostet nach dem Rabatt 150€!</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Prozentuale Veränderungen verstehen</h2>
            <p className="mb-6">
              Prozentuale Veränderungen zeigen, um wie viel sich ein Wert im Vergleich zu einem Ausgangswert geändert hat. Diese Berechnung ist besonders wichtig bei Noten, Preisen und Statistiken.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Formel für prozentuale Veränderung:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Veränderung (%) = (Neuer Wert - Alter Wert) ÷ Alter Wert × 100
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel: Notenverbesserung</h3>
              <p className="mb-4">Ein Schüler hat sich von einer 4 auf eine 2 verbessert. Um wie viel Prozent hat er sich verbessert?</p>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Veränderung = (2 - 4) ÷ 4 × 100</p>
                <p>Veränderung = (-2) ÷ 4 × 100</p>
                <p>Veränderung = -0,5 × 100 = -50%</p>
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">Die Note hat sich um 50% verbessert (von 4 auf 2)!</p>
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

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Anwendungen für Schüler</h2>
            <p className="mb-6">
              Prozentrechnung wird in vielen Bereichen des Schulalltags verwendet:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Noten:</strong> Berechnung von Durchschnitten und Verbesserungen</li>
              <li><strong>Klassenarbeiten:</strong> Wie viele Punkte entsprechen welcher Note?</li>
              <li><strong>Anwesenheit:</strong> Wie viel Prozent der Schüler sind da?</li>
              <li><strong>Preise:</strong> Rabatte beim Einkaufen berechnen</li>
              <li><strong>Statistiken:</strong> Umfragen und Wahlergebnisse verstehen</li>
              <li><strong>Wissenschaft:</strong> Konzentrationen und Wachstumsraten</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Tipps für Schüler</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Verwenden Sie immer die Grundformel: Prozentwert = Grundwert × (Prozentsatz ÷ 100)</li>
              <li>Schreiben Sie die Formel auf, bevor Sie rechnen</li>
              <li>Überprüfen Sie Ihre Ergebnisse durch Rückwärtsrechnung</li>
              <li>Verwenden Sie einen Taschenrechner für komplexere Berechnungen</li>
              <li>Üben Sie mit einfachen Beispielen aus dem Alltag</li>
              <li>Zeichnen Sie sich kleine Skizzen, um den Sachverhalt zu verstehen</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Übungsaufgaben für Schüler</h2>
            <p className="mb-6">
              Hier sind einige Übungsaufgaben, die Sie selbst lösen können:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Übung 1:</h3>
              <p className="mb-4">Berechnen Sie 30% von 150€.</p>
              <div className="bg-card p-3 rounded-lg font-mono text-sm">
                <p>Lösung: 150€ × 30 ÷ 100 = 45€</p>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Übung 2:</h3>
              <p className="mb-4">Ein Buch kostet 25€ und hat 20% Rabatt. Wie viel kostet es nach dem Rabatt?</p>
              <div className="bg-card p-3 rounded-lg font-mono text-sm">
                <p>Lösung: Rabatt = 25€ × 20 ÷ 100 = 5€</p>
                <p>Neuer Preis = 25€ - 5€ = 20€</p>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Übung 3:</h3>
              <p className="mb-4">In einer Klasse mit 30 Schülern sind 10% krank. Wie viele Schüler fehlen?</p>
              <div className="bg-card p-3 rounded-lg font-mono text-sm">
                <p>Lösung: 30 × 10 ÷ 100 = 3 Schüler</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie berechne ich 15% von 200€?</h3>
            <p className="mb-6">
              Verwenden Sie die Formel: 200€ × 15 ÷ 100 = 30€. Das Ergebnis ist 30€.
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
              Prozentrechnung ist eine wichtige Grundlage für viele Bereiche der Mathematik und des Alltags. Mit den richtigen Formeln und etwas Übung können Schüler Prozente schnell und sicher berechnen. Wichtig ist, dass Sie zwischen den verschiedenen Anwendungsfällen unterscheiden und die entsprechenden Formeln verwenden. Nutzen Sie die praktischen Beispiele als Referenz für Ihre eigenen Berechnungen und unseren Prozentrechner für komplexere Aufgaben.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Weitere Informationen</h3>
              <p className="mb-4">
                Entdecken Sie weitere nützliche Artikel zu Mathematik und Bildung in unserem <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link> oder nutzen Sie direkt unseren <Link href="/prozentrechner" className="text-primary hover:underline font-medium">Prozentrechner</Link> für Ihre Berechnungen.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
