import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Arbeitstage vs. Werktage vs. Kalendertage erklärt",
  description: "Lernen Sie den Unterschied zwischen Arbeitstagen, Werktagen und Kalendertagen kennen. Wichtige Begriffe für Arbeitszeitberechnung und Urlaubsplanung.",
  keywords: "arbeitstage werktage kalendertage unterschied, arbeitszeit berechnung, urlaubsplanung, feiertage berechnung",
  openGraph: {
    title: "Arbeitstage vs. Werktage vs. Kalendertage erklärt",
    description: "Lernen Sie den Unterschied zwischen Arbeitstagen, Werktagen und Kalendertagen kennen. Wichtige Begriffe für Arbeitszeitberechnung und Urlaubsplanung.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/arbeitstage-werktage-kalendertage",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/arbeitstage-werktage-kalendertage",
      "x-default": "https://www.rechnerjetzt.de/blog/arbeitstage-werktage-kalendertage",
    },
  },
}

export default function ArbeitstageWerktageKalendertagePage() {
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
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Arbeit & Urlaub
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Arbeitstage vs. Werktage vs. Kalendertage: Unterschiede erklärt
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
              Die Begriffe Arbeitstage, Werktage und Kalendertage werden oft verwechselt, obwohl sie unterschiedliche Bedeutungen haben. Diese Verwirrung kann zu Fehlern bei der Arbeitszeitberechnung, Urlaubsplanung und Projektplanung führen. In diesem Artikel erklären wir Schritt für Schritt die Unterschiede zwischen diesen Begriffen, geben praktische Beispiele und zeigen, wann welcher Begriff verwendet werden sollte.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was sind Kalendertage?</h2>
            <p className="mb-6">
              <strong>Kalendertage</strong> sind alle Tage des Kalenders, unabhängig davon, ob es sich um Wochentage, Wochenenden oder Feiertage handelt. Ein Kalendertag beginnt um 00:00 Uhr und endet um 23:59 Uhr. Kalendertage werden für die Berechnung von Zeiträumen verwendet, die unabhängig von der Arbeitszeit sind.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Kalendertage im Überblick:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Alle 365 (oder 366) Tage des Jahres</li>
                <li>Einschließlich Samstage, Sonntage und Feiertage</li>
                <li>Verwendung: Zeiträume, Fristen, Verträge</li>
                <li>Beispiel: "Lieferung in 14 Kalendertagen"</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was sind Werktage?</h2>
            <p className="mb-6">
              <strong>Werktage</strong> sind alle Tage außer Sonntagen und gesetzlichen Feiertagen. In Deutschland sind das Montag bis Samstag, wobei Samstag als Werktag gilt, auch wenn in vielen Unternehmen nicht gearbeitet wird. Werktage werden für rechtliche Fristen und behördliche Angelegenheiten verwendet.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Werktage im Detail:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Werktage (6 Tage pro Woche):</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Montag</li>
                    <li>Dienstag</li>
                    <li>Mittwoch</li>
                    <li>Donnerstag</li>
                    <li>Freitag</li>
                    <li>Samstag</li>
                  </ul>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Keine Werktage:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Sonntag</li>
                    <li>Gesetzliche Feiertage</li>
                    <li>Karfreitag (in einigen Bundesländern)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was sind Arbeitstage?</h2>
            <p className="mb-6">
              <strong>Arbeitstage</strong> sind alle Tage, an denen tatsächlich gearbeitet wird. In den meisten Unternehmen sind das Montag bis Freitag, wobei Samstag und Sonntag als Wochenenden gelten. Feiertage sind keine Arbeitstage, auch wenn sie auf einen Wochentag fallen. Arbeitstage werden für die Arbeitszeitberechnung und Urlaubsplanung verwendet.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Arbeitstage im Detail:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Arbeitstage (5 Tage pro Woche):</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Montag</li>
                    <li>Dienstag</li>
                    <li>Mittwoch</li>
                    <li>Donnerstag</li>
                    <li>Freitag</li>
                  </ul>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Keine Arbeitstage:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Samstag</li>
                    <li>Sonntag</li>
                    <li>Alle gesetzlichen Feiertage</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Vergleich der verschiedenen Tagestypen</h2>
            <p className="mb-6">
              Hier ist ein direkter Vergleich der verschiedenen Tagestypen für das Jahr 2025:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Vergleich 2025 (Deutschland):</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-foreground mb-2">Kalendertage</h4>
                  <p className="text-lg font-bold text-primary">365</p>
                  <p className="text-sm text-muted-foreground">Alle Tage des Jahres</p>
                </div>
                <div className="bg-card p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-foreground mb-2">Werktage</h4>
                  <p className="text-lg font-bold text-primary">260-262</p>
                  <p className="text-sm text-muted-foreground">365 - Sonntage - Feiertage</p>
                </div>
                <div className="bg-card p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-foreground mb-2">Arbeitstage</h4>
                  <p className="text-lg font-bold text-primary">249-251</p>
                  <p className="text-sm text-muted-foreground">365 - Wochenenden - Feiertage</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wann werden welche Tagestypen verwendet?</h2>
            <p className="mb-6">
              Jeder Tagestyp hat seine spezifischen Anwendungsbereiche:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kalendertage</h3>
            <p className="mb-4">
              Kalendertage werden verwendet für:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Vertragsfristen:</strong> "Lieferung in 30 Kalendertagen"</li>
              <li><strong>Kündigungsfristen:</strong> "Kündigung zum Monatsende"</li>
              <li><strong>Zeiträume:</strong> "Urlaub vom 1. bis 15. Juli"</li>
              <li><strong>Fristen:</strong> "Einspruch innerhalb von 14 Tagen"</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Werktage</h3>
            <p className="mb-4">
              Werktage werden verwendet für:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Behördliche Fristen:</strong> "Antrag innerhalb von 10 Werktagen"</li>
              <li><strong>Rechtliche Fristen:</strong> "Widerspruch in 30 Werktagen"</li>
              <li><strong>Postlaufzeiten:</strong> "Zustellung in 3-5 Werktagen"</li>
              <li><strong>Geschäftszeiten:</strong> "Öffnungszeiten: Montag-Samstag"</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Arbeitstage</h3>
            <p className="mb-4">
              Arbeitstage werden verwendet für:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Arbeitszeitberechnung:</strong> "40 Stunden pro Woche"</li>
              <li><strong>Urlaubsplanung:</strong> "25 Urlaubstage pro Jahr"</li>
              <li><strong>Projektplanung:</strong> "Projekt dauert 20 Arbeitstage"</li>
              <li><strong>Überstunden:</strong> "Überstunden pro Arbeitstag"</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Beispiele</h2>
            <p className="mb-6">
              Hier sind praktische Beispiele, die den Unterschied verdeutlichen:
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 1: Urlaubsplanung</h3>
              <p className="mb-4">
                Sie möchten vom 1. bis 15. Juli Urlaub machen:
              </p>
              <div className="bg-card p-4 rounded-lg font-mono text-sm">
                <p>Kalendertage: 15 Tage (1. Juli bis 15. Juli)</p>
                <p>Werktage: 11 Tage (ohne Sonntage)</p>
                <p>Arbeitstage: 11 Tage (ohne Wochenenden)</p>
                <p>Benötigte Urlaubstage: 11</p>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 2: Lieferfrist</h3>
              <p className="mb-4">
                Ein Händler verspricht Lieferung in 10 Werktagen:
              </p>
              <div className="bg-card p-4 rounded-lg font-mono text-sm">
                <p>Bei Bestellung am Montag, 1. Juli:</p>
                <p>10 Werktage = 10 Arbeitstage + Wochenenden</p>
                <p>Lieferung: Freitag, 12. Juli</p>
                <p>Kalendertage: 12 Tage</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Berechnungsformeln</h2>
            <p className="mb-6">
              Hier sind die Formeln zur Berechnung der verschiedenen Tagestypen:
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Formeln im Überblick:</h3>
              <div className="space-y-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Kalendertage:</p>
                  <p className="font-mono text-sm">365 (oder 366 bei Schaltjahren)</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Werktage:</p>
                  <p className="font-mono text-sm">365 - 52 Sonntage - Anzahl der Feiertage</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Arbeitstage:</p>
                  <p className="font-mono text-sm">365 - 104 Wochenenden - Anzahl der Feiertage</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Besonderheiten und Ausnahmen</h2>
            <p className="mb-6">
              Es gibt einige Besonderheiten, die Sie bei der Berechnung beachten sollten:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Schaltjahre</h3>
            <p className="mb-4">
              In Schaltjahren gibt es 366 Kalendertage. Das zusätzliche Jahr wird zu den Werktagen und Arbeitstagen hinzugezählt, da es meist auf einen Wochentag fällt.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Bundeslandspezifische Feiertage</h3>
            <p className="mb-4">
              Einige Bundesländer haben zusätzliche Feiertage, die die Anzahl der Werktage und Arbeitstage beeinflussen. Bayern und Baden-Württemberg haben mit 12 Feiertagen die meisten.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Unternehmensspezifische Regelungen</h3>
            <p className="mb-4">
              Einige Unternehmen haben eigene Regelungen für Arbeitstage, die von den gesetzlichen Bestimmungen abweichen können. Informieren Sie sich über die internen Regelungen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Sind Samstage Arbeitstage oder Werktage?</h3>
            <p className="mb-6">
              Samstage sind Werktage, aber normalerweise keine Arbeitstage. Sie gelten rechtlich als Werktage, werden aber in den meisten Unternehmen nicht als Arbeitstage gezählt.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie viele Werktage hat ein Jahr?</h3>
            <p className="mb-6">
              Ein Jahr hat 260-262 Werktage, je nach Anzahl der Feiertage. Die Formel lautet: 365 - 52 Sonntage - Anzahl der Feiertage.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie viele Arbeitstage hat ein Jahr?</h3>
            <p className="mb-6">
              Ein Jahr hat 249-251 Arbeitstage, je nach Anzahl der Feiertage. Die Formel lautet: 365 - 104 Wochenenden - Anzahl der Feiertage.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wann verwende ich Kalendertage?</h3>
            <p className="mb-6">
              Verwenden Sie Kalendertage für Zeiträume, die unabhängig von der Arbeitszeit sind, wie Vertragsfristen, Kündigungsfristen oder allgemeine Zeitangaben.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wann verwende ich Werktage?</h3>
            <p className="mb-6">
              Verwenden Sie Werktage für behördliche und rechtliche Fristen, Postlaufzeiten und Geschäftszeiten, die Samstage einschließen.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Praxistipp:</h3>
              <p className="mb-4">
                Nutzen Sie unseren <Link href="/arbeitstage-rechner" className="text-primary hover:underline font-medium">Arbeitstage-Rechner</Link> für eine schnelle und präzise Berechnung der verschiedenen Tagestypen. Er berücksichtigt alle Feiertage und zeigt Ihnen die Unterschiede zwischen Kalendertagen, Werktagen und Arbeitstagen.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die Unterscheidung zwischen Kalendertagen, Werktagen und Arbeitstagen ist wichtig für die korrekte Arbeitszeitberechnung, Urlaubsplanung und rechtliche Fristen. Kalendertage umfassen alle Tage des Jahres, Werktage schließen nur Sonntage und Feiertage aus, während Arbeitstage zusätzlich Samstage ausschließen. Mit den praktischen Beispielen und Formeln können Sie die verschiedenen Tagestypen korrekt berechnen und für Ihre Planungen verwenden.
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
