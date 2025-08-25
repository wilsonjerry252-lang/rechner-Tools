import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Arbeitstage 2025 Deutschland: Bundesländer im Vergleich",
  description: "Erfahren Sie alle Arbeitstage 2025 in Deutschland. Bundesländer im Vergleich mit Feiertagen und praktischen Tipps für die Urlaubsplanung.",
  keywords: "arbeitstage 2025 deutschland, feiertage 2025, urlaubsplanung, bundesländer vergleich, arbeitszeit 2025, kalender 2025",
  openGraph: {
    title: "Arbeitstage 2025 Deutschland: Bundesländer im Vergleich",
    description: "Erfahren Sie alle Arbeitstage 2025 in Deutschland. Bundesländer im Vergleich mit Feiertagen und praktischen Tipps für die Urlaubsplanung.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/arbeitstage-2025-deutschland",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/arbeitstage-2025-deutschland",
      "x-default": "https://www.rechnerjetzt.de/blog/arbeitstage-2025-deutschland",
    },
  },
}

export default function Arbeitstage2025DeutschlandPage() {
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
                <CalendarDays className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Arbeit & Urlaub
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Arbeitstage 2025 Deutschland: Bundesländer im Vergleich
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
              Die Planung von Urlaub und Arbeitszeiten für 2025 steht an und viele Menschen sind unsicher, wie viele Arbeitstage es in den verschiedenen Bundesländern gibt. In diesem Artikel erklären wir Schritt für Schritt, wie Sie die Arbeitstage 2025 berechnen, welche Feiertage in den einzelnen Bundesländern gelten und wie Sie Ihre Urlaubsplanung optimal gestalten können.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was sind Arbeitstage?</h2>
            <p className="mb-6">
              <strong>Arbeitstage</strong> sind alle Tage, an denen normalerweise gearbeitet wird. In Deutschland sind das Montag bis Freitag, wobei Samstag und Sonntag als Wochenenden gelten. Feiertage sind keine Arbeitstage, auch wenn sie auf einen Wochentag fallen. Die Anzahl der Arbeitstage variiert je nach Bundesland, da verschiedene Feiertage gelten.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie berechnet man Arbeitstage 2025?</h2>
            <p className="mb-6">
              Die Berechnung der Arbeitstage für 2025 folgt einer einfachen Formel. Hier ist die Schritt-für-Schritt-Anleitung:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Bestimmen Sie die Gesamtanzahl der Tage im Jahr 2025 (365 Tage)</li>
              <li>Zählen Sie alle Samstage und Sonntage (104 Wochenenden)</li>
              <li>Zählen Sie alle Feiertage in Ihrem Bundesland</li>
              <li>Subtrahieren Sie Wochenenden und Feiertage von der Gesamtanzahl</li>
            </ol>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Grundformel:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Arbeitstage = 365 - Wochenenden - Feiertage
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Arbeitstage 2025 im Überblick</h2>
            <p className="mb-6">
              Hier ist eine Übersicht der Arbeitstage 2025 für alle deutschen Bundesländer:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Arbeitstage 2025 nach Bundesländern:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Baden-Württemberg</h4>
                  <p className="text-lg font-bold text-primary">252 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">12 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Bayern</h4>
                  <p className="text-lg font-bold text-primary">252 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">12 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Berlin</h4>
                  <p className="text-lg font-bold text-primary">254 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">10 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Brandenburg</h4>
                  <p className="text-lg font-bold text-primary">254 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">10 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Bremen</h4>
                  <p className="text-lg font-bold text-primary">254 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">10 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Hamburg</h4>
                  <p className="text-lg font-bold text-primary">254 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">10 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Hessen</h4>
                  <p className="text-lg font-bold text-primary">252 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">12 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Mecklenburg-Vorpommern</h4>
                  <p className="text-lg font-bold text-primary">254 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">10 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Niedersachsen</h4>
                  <p className="text-lg font-bold text-primary">254 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">10 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Nordrhein-Westfalen</h4>
                  <p className="text-lg font-bold text-primary">252 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">12 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Rheinland-Pfalz</h4>
                  <p className="text-lg font-bold text-primary">252 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">12 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Saarland</h4>
                  <p className="text-lg font-bold text-primary">252 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">12 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Sachsen</h4>
                  <p className="text-lg font-bold text-primary">254 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">10 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Sachsen-Anhalt</h4>
                  <p className="text-lg font-bold text-primary">254 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">10 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Schleswig-Holstein</h4>
                  <p className="text-lg font-bold text-primary">254 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">10 Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Thüringen</h4>
                  <p className="text-lg font-bold text-primary">254 Arbeitstage</p>
                  <p className="text-sm text-muted-foreground">10 Feiertage</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Feiertage 2025 in Deutschland</h2>
            <p className="mb-6">
              Die wichtigsten Feiertage 2025 gelten bundesweit, während andere nur in bestimmten Bundesländern gefeiert werden:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Bundesweite Feiertage 2025</h3>
            <p className="mb-4">
              Diese Feiertage gelten in allen Bundesländern und sind keine Arbeitstage:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>1. Januar: Neujahr (Mittwoch)</li>
              <li>18. April: Karfreitag (Freitag)</li>
              <li>21. April: Ostermontag (Montag)</li>
              <li>1. Mai: Tag der Arbeit (Donnerstag)</li>
              <li>29. Mai: Christi Himmelfahrt (Donnerstag)</li>
              <li>9. Juni: Pfingstmontag (Montag)</li>
              <li>3. Oktober: Tag der Deutschen Einheit (Freitag)</li>
              <li>25. Dezember: 1. Weihnachtstag (Donnerstag)</li>
              <li>26. Dezember: 2. Weihnachtstag (Freitag)</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Regionale Feiertage 2025</h3>
            <p className="mb-4">
              Diese Feiertage gelten nur in bestimmten Bundesländern:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>6. Januar: Heilige Drei Könige (Montag) - Baden-Württemberg, Bayern, Sachsen-Anhalt</li>
              <li>8. März: Internationaler Frauentag (Samstag) - Berlin, Mecklenburg-Vorpommern</li>
              <li>15. August: Mariä Himmelfahrt (Freitag) - Bayern, Saarland</li>
              <li>31. Oktober: Reformationstag (Freitag) - Brandenburg, Bremen, Hamburg, Mecklenburg-Vorpommern, Niedersachsen, Sachsen, Sachsen-Anhalt, Schleswig-Holstein, Thüringen</li>
              <li>1. November: Allerheiligen (Samstag) - Baden-Württemberg, Bayern, Nordrhein-Westfalen, Rheinland-Pfalz, Saarland</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Brückentage und Urlaubsplanung 2025</h2>
            <p className="mb-6">
              Brückentage sind besonders wertvoll für die Urlaubsplanung, da Sie mit wenig Urlaubstagen lange freie Zeiten schaffen können:
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Wichtige Brückentage 2025:</h3>
              <div className="space-y-3">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Ostern 2025:</p>
                  <p className="text-sm text-muted-foreground">17. April (Donnerstag) - nur 1 Urlaubstag für 5 Tage frei</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Pfingsten 2025:</p>
                  <p className="text-sm text-muted-foreground">6. Juni (Freitag) - nur 1 Urlaubstag für 4 Tage frei</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Weihnachten 2025:</p>
                  <p className="text-sm text-muted-foreground">22., 23., 24. Dezember (Montag-Donnerstag) - 4 Urlaubstage für 11 Tage frei</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für die Urlaubsplanung</h2>
            <p className="mb-6">
              Mit diesen Tipps können Sie Ihre Urlaubsplanung für 2025 optimieren:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Brückentage nutzen:</strong> Planen Sie Urlaub um Feiertage herum</li>
              <li><strong>Lange Wochenenden:</strong> Nutzen Sie Freitag oder Montag für kurze Ausflüge</li>
              <li><strong>Hauptreisezeiten meiden:</strong> Vermeiden Sie die Schulferien für günstigere Preise</li>
              <li><strong>Urlaubsanspruch prüfen:</strong> Kontrollieren Sie Ihren gesetzlichen Urlaubsanspruch</li>
              <li><strong>Früh planen:</strong> Buchen Sie frühzeitig für die besten Preise</li>
              <li><strong>Flexibilität:</strong> Seien Sie flexibel bei den Reisedaten</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie viele Arbeitstage hat 2025?</h3>
            <p className="mb-6">
              Das hängt von Ihrem Bundesland ab. Die meisten Bundesländer haben 252-254 Arbeitstage. Bayern und Baden-Württemberg haben mit 252 Arbeitstagen die wenigsten, da sie die meisten Feiertage haben.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Welche Bundesländer haben die meisten Feiertage?</h3>
            <p className="mb-6">
              Bayern und Baden-Württemberg haben mit 12 Feiertagen die meisten Feiertage. Die anderen Bundesländer haben 10 Feiertage.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie kann ich mit wenig Urlaubstagen lange freie Zeiten schaffen?</h3>
            <p className="mb-6">
              Nutzen Sie Brückentage und planen Sie Ihren Urlaub um Feiertage herum. Mit nur 1-2 Urlaubstagen können Sie oft 4-5 Tage frei haben.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Gelten die gleichen Feiertage in allen Bundesländern?</h3>
            <p className="mb-6">
              Nein, es gibt bundesweite Feiertage (9) und regionale Feiertage, die nur in bestimmten Bundesländern gelten. Das erklärt die unterschiedliche Anzahl der Arbeitstage.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kann ich Arbeitstage selbst berechnen?</h3>
            <p className="mb-6">
              Ja, Sie können Arbeitstage selbst berechnen: 365 Tage - 104 Wochenenden - Anzahl der Feiertage in Ihrem Bundesland = Arbeitstage.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Praxistipp:</h3>
              <p className="mb-4">
                Nutzen Sie unseren <Link href="/arbeitstage-rechner" className="text-primary hover:underline font-medium">Arbeitstage-Rechner</Link> für eine schnelle und präzise Berechnung der Arbeitstage in Ihrem Bundesland. Er berücksichtigt alle Feiertage und zeigt Ihnen die optimale Urlaubsplanung.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die Arbeitstage 2025 variieren je nach Bundesland zwischen 252 und 254 Tagen. Mit der richtigen Planung können Sie Ihre Urlaubszeit optimal nutzen und mit wenigen Urlaubstagen lange freie Zeiten schaffen. Wichtig ist, dass Sie die Brückentage nutzen und frühzeitig planen. Nutzen Sie die praktischen Beispiele als Referenz und unseren Arbeitstage-Rechner für eine präzise Planung.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Weitere Informationen</h3>
              <p className="mb-4">
                Entdecken Sie weitere nützliche Artikel zu Arbeit und Urlaub in unserem <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link> oder nutzen Sie direkt unseren <Link href="/arbeitstage-rechner" className="text-primary hover:underline font-medium">Arbeitstage-Rechner</Link> für Ihre Planung.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
