import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, Calculator as CalculatorIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Wie viele Arbeitstage hat ein Jahr? Einfache Berechnung",
  description: "Lernen Sie, wie Sie Arbeitstage einfach berechnen können. Praktische Formeln und Beispiele für die Urlaubsplanung.",
  keywords: "arbeitstage berechnen, arbeitstage pro jahr, feiertage berechnen, urlaubsplanung, arbeitszeit berechnung",
  openGraph: {
    title: "Wie viele Arbeitstage hat ein Jahr? Einfache Berechnung",
    description: "Lernen Sie, wie Sie Arbeitstage einfach berechnen können. Praktische Formeln und Beispiele für die Urlaubsplanung.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/arbeitstage-berechnung",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/arbeitstage-berechnung",
      "x-default": "https://www.rechnerjetzt.de/blog/arbeitstage-berechnung",
    },
  },
}

export default function ArbeitstageBerechnungPage() {
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
                <CalculatorIcon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Arbeit & Urlaub
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Wie viele Arbeitstage hat ein Jahr? Einfache Berechnung
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Die Berechnung der Arbeitstage pro Jahr ist wichtig für die Urlaubsplanung, Arbeitszeitberechnung und Projektplanung. Viele Menschen sind unsicher, wie sie die genaue Anzahl der Arbeitstage ermitteln können. In diesem Artikel erklären wir Schritt für Schritt, wie Sie Arbeitstage einfach berechnen, welche Faktoren zu berücksichtigen sind und geben praktische Beispiele für verschiedene Jahre.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was sind Arbeitstage?</h2>
            <p className="mb-6">
              <strong>Arbeitstage</strong> sind alle Tage, an denen normalerweise gearbeitet wird. In Deutschland und den meisten europäischen Ländern sind das Montag bis Freitag, wobei Samstag und Sonntag als Wochenenden gelten. Feiertage sind keine Arbeitstage, auch wenn sie auf einen Wochentag fallen. Die Anzahl der Arbeitstage variiert je nach Jahr, da sich die Kalenderstruktur ändert.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie berechnet man Arbeitstage pro Jahr?</h2>
            <p className="mb-6">
              Die Berechnung der Arbeitstage pro Jahr folgt einer einfachen Formel. Hier ist die Schritt-für-Schritt-Anleitung:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Bestimmen Sie die Gesamtanzahl der Tage im Jahr (365 oder 366 bei Schaltjahren)</li>
              <li>Zählen Sie alle Samstage und Sonntage (Wochenenden)</li>
              <li>Zählen Sie alle Feiertage in Ihrem Bundesland</li>
              <li>Subtrahieren Sie Wochenenden und Feiertage von der Gesamtanzahl</li>
            </ol>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Grundformel:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Arbeitstage = Gesamttage - Wochenenden - Feiertage
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Beispiele zur Arbeitstage-Berechnung</h2>
            <p className="mb-6">
              Hier sind praktische Beispiele, die zeigen, wie Arbeitstage berechnet werden:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 1: Deutschland 2025 (kein Schaltjahr)</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Gesamttage</p>
                  <p className="text-lg font-bold text-primary">365</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Wochenenden</p>
                  <p className="text-lg font-bold text-primary">104</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Feiertage</p>
                  <p className="text-lg font-bold text-primary">10-12</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Arbeitstage</p>
                  <p className="text-lg font-bold text-primary">249-251</p>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Arbeitstage = 365 - 104 - 10 = 251 (bei 10 Feiertagen)</p>
                <p>Arbeitstage = 365 - 104 - 12 = 249 (bei 12 Feiertagen)</p>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 2: Schaltjahr 2024</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Gesamttage</p>
                  <p className="text-lg font-bold text-primary">366</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Wochenenden</p>
                  <p className="text-lg font-bold text-primary">104</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Feiertage</p>
                  <p className="text-lg font-bold text-primary">10-12</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Arbeitstage</p>
                  <p className="text-lg font-bold text-primary">250-252</p>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Arbeitstage = 366 - 104 - 10 = 252 (bei 10 Feiertagen)</p>
                <p>Arbeitstage = 366 - 104 - 12 = 250 (bei 12 Feiertagen)</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Faktoren, die Arbeitstage beeinflussen</h2>
            <p className="mb-6">
              Verschiedene Faktoren beeinflussen die Anzahl der Arbeitstage pro Jahr:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Schaltjahre</h3>
            <p className="mb-4">
              In Schaltjahren gibt es 366 Tage statt 365. Das zusätzliche Jahr wird in der Regel zu den Arbeitstagen hinzugezählt, da es meist auf einen Wochentag fällt.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Feiertage</h3>
            <p className="mb-4">
              Die Anzahl der Feiertage variiert je nach Bundesland. Bayern und Baden-Württemberg haben mit 12 Feiertagen die meisten, andere Bundesländer haben 10.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wochenenden</h3>
            <p className="mb-4">
              In jedem Jahr gibt es 52 Wochen mit je 2 Wochenenden (Samstag und Sonntag), also 104 Wochenenden. Diese Zahl bleibt konstant.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kalenderstruktur</h3>
            <p className="mb-4">
              Die Verteilung der Wochentage im Jahr kann sich von Jahr zu Jahr unterscheiden, was die Anzahl der Arbeitstage beeinflusst.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Arbeitstage nach Bundesländern</h2>
            <p className="mb-6">
              Hier ist eine Übersicht der Arbeitstage für verschiedene Bundesländer:
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Arbeitstage 2025 nach Bundesländern:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Bundesländer mit 12 Feiertagen:</h4>
                  <p className="text-sm text-muted-foreground">Bayern, Baden-Württemberg, Hessen, Nordrhein-Westfalen, Rheinland-Pfalz, Saarland</p>
                  <p className="text-lg font-bold text-primary mt-2">249 Arbeitstage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Bundesländer mit 10 Feiertagen:</h4>
                  <p className="text-sm text-muted-foreground">Berlin, Brandenburg, Bremen, Hamburg, Mecklenburg-Vorpommern, Niedersachsen, Sachsen, Sachsen-Anhalt, Schleswig-Holstein, Thüringen</p>
                  <p className="text-lg font-bold text-primary mt-2">251 Arbeitstage</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Anwendungen</h2>
            <p className="mb-6">
              Die Kenntnis der Arbeitstage ist wichtig für verschiedene Bereiche:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Urlaubsplanung:</strong> Optimale Nutzung der verfügbaren Urlaubstage</li>
              <li><strong>Projektplanung:</strong> Realistische Zeitplanung für Projekte</li>
              <li><strong>Arbeitszeitberechnung:</strong> Korrekte Berechnung von Überstunden</li>
              <li><strong>Personalplanung:</strong> Bedarfsplanung für Unternehmen</li>
              <li><strong>Budgetplanung:</strong> Kostenkalkulation für Projekte</li>
              <li><strong>Geschäftsplanung:</strong> Strategische Planung für das Jahr</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Tipps für die Arbeitstage-Berechnung</h2>
            <p className="mb-6">
              Mit diesen Tipps können Sie Arbeitstage korrekt berechnen:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Schaltjahr prüfen:</strong> Teilen Sie das Jahr durch 4, um zu prüfen, ob es ein Schaltjahr ist</li>
              <li><strong>Feiertage zählen:</strong> Berücksichtigen Sie alle Feiertage in Ihrem Bundesland</li>
              <li><strong>Wochenenden:</strong> Es gibt immer 104 Wochenenden pro Jahr</li>
              <li><strong>Überprüfung:</strong> Kontrollieren Sie Ihre Berechnung durch Rückwärtsrechnung</li>
              <li><strong>Online-Tools:</strong> Nutzen Sie unseren Arbeitstage-Rechner für präzise Ergebnisse</li>
              <li><strong>Jahresvergleich:</strong> Vergleichen Sie verschiedene Jahre für die Planung</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie viele Arbeitstage hat ein normales Jahr?</h3>
            <p className="mb-6">
              Ein normales Jahr hat 365 Tage. Bei 104 Wochenenden und 10-12 Feiertagen ergeben sich 249-251 Arbeitstage, je nach Bundesland.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie viele Arbeitstage hat ein Schaltjahr?</h3>
            <p className="mb-6">
              Ein Schaltjahr hat 366 Tage. Bei 104 Wochenenden und 10-12 Feiertagen ergeben sich 250-252 Arbeitstage, je nach Bundesland.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kann ich Arbeitstage selbst berechnen?</h3>
            <p className="mb-6">
              Ja, Sie können Arbeitstage selbst berechnen: Gesamttage - 104 Wochenenden - Anzahl der Feiertage = Arbeitstage.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Welches Bundesland hat die meisten Arbeitstage?</h3>
            <p className="mb-6">
              Bundesländer mit nur 10 Feiertagen haben die meisten Arbeitstage (251), während Bundesländer mit 12 Feiertagen die wenigsten haben (249).
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie kann ich Arbeitstage für die Urlaubsplanung nutzen?</h3>
            <p className="mb-6">
              Nutzen Sie die Arbeitstage, um Ihre Urlaubsplanung zu optimieren. Planen Sie Urlaub um Feiertage herum und nutzen Sie Brückentage.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Praxistipp:</h3>
              <p className="mb-4">
                Nutzen Sie unseren <Link href="/arbeitstage-rechner" className="text-primary hover:underline font-medium">Arbeitstage-Rechner</Link> für eine schnelle und präzise Berechnung der Arbeitstage in Ihrem Bundesland. Er berücksichtigt alle Feiertage und zeigt Ihnen die optimale Urlaubsplanung.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die Berechnung der Arbeitstage pro Jahr ist mit der richtigen Formel einfach zu meistern. Wichtig ist, dass Sie Schaltjahre, Wochenenden und Feiertage berücksichtigen. Mit den praktischen Beispielen können Sie Arbeitstage für jedes Jahr berechnen und optimal für Ihre Urlaubsplanung und Projektplanung nutzen. Nutzen Sie die praktischen Beispiele als Referenz und unseren Arbeitstage-Rechner für präzise Ergebnisse.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Weitere Informationen</h3>
              <p className="mb-4">
                Entdecken Sie weitere nützliche Artikel zu Arbeit und Urlaub in unserem <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link> oder nutzen Sie direkt unseren <Link href="/arbeitstage-rechner" className="text-primary hover:underline font-medium">Arbeitstage-Rechner</Link> für Ihre Berechnungen.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
