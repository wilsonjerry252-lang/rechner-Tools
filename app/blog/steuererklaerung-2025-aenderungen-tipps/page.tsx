import Link from "next/link"
import { ArrowLeft, Calendar, Clock, FileText, TrendingUp, Shield, Calculator, CheckCircle, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Steuererklärung 2025: Alle Änderungen & Tipps",
  description: "Erfahren Sie alle wichtigen Änderungen für die Steuererklärung 2025. Praktische Tipps, neue Regeln und wie Sie Ihre Steuern optimal gestalten können.",
  keywords: "steuererklärung 2025, steueränderungen 2025, steuertipps, steuererklärung deutschland, steueroptimierung, einkommensteuer 2025",
  openGraph: {
    title: "Steuererklärung 2025: Alle Änderungen & Tipps",
    description: "Erfahren Sie alle wichtigen Änderungen für die Steuererklärung 2025. Praktische Tipps, neue Regeln und wie Sie Ihre Steuern optimal gestalten können.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/steuererklaerung-2025-aenderungen-tipps",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/steuererklaerung-2025-aenderungen-tipps",
      "x-default": "https://www.rechnerjetzt.de/blog/steuererklaerung-2025-aenderungen-tipps",
    },
  },
}

export default function Steuererklaerung2025Page() {
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
                Steuern
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Steuererklärung 2025: Alle Änderungen & Tipps
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>12 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Das Jahr 2025 bringt wichtige Änderungen für die Steuererklärung mit sich. Viele Steuerzahler sind unsicher, welche neuen Regeln gelten und wie sie ihre Steuern optimal gestalten können. In diesem umfassenden Guide erklären wir alle wichtigen Änderungen, geben praktische Tipps und zeigen Ihnen, wie Sie Ihre Steuererklärung 2025 erfolgreich meistern.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wichtige Änderungen für 2025</h2>
            <p className="mb-6">
              Das Bundesfinanzministerium hat mehrere wichtige Änderungen für die Steuererklärung 2025 angekündigt. Diese betreffen verschiedene Bereiche und können sich erheblich auf Ihre Steuerlast auswirken.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">🚨 Neue Regeln 2025:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Grundfreibetrag:</strong> Erhöhung auf 11.604 € (2024: 11.232 €)</li>
                <li><strong>Arbeitszimmer:</strong> Neue Pauschale für Homeoffice von 6 € pro Tag</li>
                <li><strong>Pendlerpauschale:</strong> Anpassung der Kilometerpauschale</li>
                <li><strong>Kinderfreibetrag:</strong> Erhöhung auf 6.384 € pro Kind</li>
                <li><strong>Rente:</strong> Neue Regelungen für Rentenbeiträge</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Grundfreibetrag und Steuersätze</h2>
            <p className="mb-6">
              Der Grundfreibetrag wird 2025 auf 11.604 € erhöht. Das bedeutet, dass Sie erst ab diesem Einkommen Steuern zahlen müssen. Die Steuersätze bleiben grundsätzlich gleich, aber durch die Anpassung des Grundfreibetrags profitieren alle Steuerzahler.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">📊 Steuersätze 2025:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Grundfreibetrag</p>
                  <p className="text-lg font-bold text-primary">11.604 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Spitzensteuersatz ab</p>
                  <p className="text-lg font-bold text-primary">277.826 €</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Arbeitszimmer und Homeoffice</h2>
            <p className="mb-6">
              Eine der wichtigsten Neuerungen betrifft das Arbeitszimmer. Ab 2025 können Sie eine neue Pauschale von 6 € pro Arbeitstag geltend machen, wenn Sie im Homeoffice arbeiten. Das ist eine deutliche Vereinfachung gegenüber der bisherigen Einzelbewertung.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4 mt-6">Berechnung der Homeoffice-Pauschale</h3>
            <p className="mb-6">
              Die Berechnung ist einfach: Multiplizieren Sie die Anzahl Ihrer Homeoffice-Tage mit 6 €. Beispiel: Bei 200 Homeoffice-Tagen im Jahr können Sie 1.200 € absetzen.
            </p>

            <div className="bg-accent/10 p-6 rounded-xl mb-6 border border-accent/20">
              <h4 className="text-lg font-bold text-foreground mb-4">💡 Beispiel Homeoffice-Pauschale:</h4>
              <div className="text-center">
                <p className="text-lg font-mono bg-card p-3 rounded-lg">
                  200 Homeoffice-Tage × 6 € = 1.200 € absetzbar
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Pendlerpauschale und Fahrtkosten</h2>
            <p className="mb-6">
              Die Pendlerpauschale wird 2025 angepasst. Für die ersten 20 Kilometer erhalten Sie 30 Cent pro Kilometer, ab dem 21. Kilometer 35 Cent. Diese Regelung gilt für alle Verkehrsmittel.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Kinderfreibetrag und Familienleistungen</h2>
            <p className="mb-6">
              Der Kinderfreibetrag wird 2025 auf 6.384 € pro Kind erhöht. Zusätzlich können Sie den Betreuungsfreibetrag von 2.928 € geltend machen. Diese Erhöhungen entlasten Familien spürbar.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für Ihre Steuererklärung</h2>
            <p className="mb-6">
              Um Ihre Steuererklärung 2025 optimal zu gestalten, sollten Sie einige wichtige Punkte beachten:
            </p>

            <div className="bg-green-50 p-6 rounded-xl mb-6 border border-green-200">
              <h3 className="text-lg font-bold text-foreground mb-4">✅ Checkliste Steuererklärung 2025:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Alle Belege für Werbungskosten sammeln</li>
                <li>Homeoffice-Tage dokumentieren</li>
                <li>Fahrtkosten zur Arbeit berechnen</li>
                <li>Kinderfreibeträge prüfen</li>
                <li>Rentenbeiträge und Altersvorsorge erfassen</li>
                <li>Fristen für die Abgabe einhalten</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Wann muss ich meine Steuererklärung 2025 abgeben?</h3>
                <p className="text-muted-foreground">
                  Die Frist für die Steuererklärung 2025 endet am 31. Juli 2026. Bei elektronischer Abgabe haben Sie bis zum 30. November 2026 Zeit.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Kann ich die Homeoffice-Pauschale zusätzlich zum Arbeitszimmer absetzen?</h3>
                <p className="text-muted-foreground">
                  Nein, Sie müssen sich entscheiden: Entweder die neue Pauschale von 6 € pro Tag oder die detaillierte Einzelbewertung des Arbeitszimmers.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Wie wirkt sich der erhöhte Grundfreibetrag aus?</h3>
                <p className="text-muted-foreground">
                  Der höhere Grundfreibetrag bedeutet, dass Sie weniger Steuern zahlen müssen. Bei einem Einkommen von 50.000 € sparen Sie etwa 200 € Steuern.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Gibt es neue Regelungen für Rentenbeiträge?</h3>
                <p className="text-muted-foreground">
                  Ja, 2025 gelten neue Höchstbeträge für die Altersvorsorge. Der Höchstbetrag für die gesetzliche Rente beträgt 7.200 €.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Kann ich die Pendlerpauschale auch für öffentliche Verkehrsmittel nutzen?</h3>
                <p className="text-muted-foreground">
                  Ja, die Pendlerpauschale gilt für alle Verkehrsmittel. Sie können auch eine Kombination aus verschiedenen Verkehrsmitteln geltend machen.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit und Empfehlungen</h2>
            <p className="mb-6">
              Die Steuererklärung 2025 bringt wichtige Verbesserungen für Steuerzahler. Die Erhöhung des Grundfreibetrags, die neue Homeoffice-Pauschale und die Anpassungen bei der Pendlerpauschale entlasten viele Bürger spürbar.
            </p>

            <p className="mb-6">
              Um von diesen Änderungen zu profitieren, sollten Sie Ihre Steuererklärung sorgfältig vorbereiten. Sammeln Sie alle relevanten Belege, dokumentieren Sie Ihre Homeoffice-Tage und nutzen Sie die neuen Pauschalen optimal.
            </p>

            <div className="bg-primary/10 p-6 rounded-xl mb-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Unser Tipp:</h3>
              <p className="mb-4">
                Nutzen Sie professionelle Steuersoftware oder lassen Sie sich von einem Steuerberater unterstützen. Die Investition lohnt sich, da Sie so alle neuen Regelungen optimal nutzen können.
              </p>
              <p>
                Für weitere Berechnungen und Tools rund um das Thema Steuern besuchen Sie unsere <Link href="/mehrwertsteuer-rechner" className="text-primary hover:underline">Mehrwertsteuer-Rechner</Link> und andere hilfreiche Tools.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">📚 Weiterführende Artikel:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/mehrwertsteuer-berechnung-richtig" className="text-primary hover:underline">Mehrwertsteuer richtig berechnen: Mit Beispielen</Link></li>
                <li><Link href="/blog/mehrwertsteuer-dach-vergleich" className="text-primary hover:underline">Mehrwertsteuer DACH-Vergleich: Deutschland, Österreich, Schweiz</Link></li>
                <li><Link href="/blog/mehrwertsteuer-2025-alle-aenderungen" className="text-primary hover:underline">Mehrwertsteuer 2025 Deutschland: Alle Änderungen</Link></li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
