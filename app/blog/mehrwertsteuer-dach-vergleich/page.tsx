import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Mehrwertsteuer DACH-Vergleich: Deutschland, Österreich, Schweiz",
  description: "Vergleichen Sie die Mehrwertsteuer in der DACH-Region. Unterschiede, Gemeinsamkeiten und praktische Tipps für grenzüberschreitende Geschäfte.",
  keywords: "mehrwertsteuer dach, deutschland österreich schweiz, mwst vergleich, grenzüberschreitende geschäfte, steuersätze dach",
  openGraph: {
    title: "Mehrwertsteuer DACH-Vergleich: Deutschland, Österreich, Schweiz",
    description: "Vergleichen Sie die Mehrwertsteuer in der DACH-Region. Unterschiede, Gemeinsamkeiten und praktische Tipps für grenzüberschreitende Geschäfte.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/mehrwertsteuer-dach-vergleich",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/mehrwertsteuer-dach-vergleich",
      "x-default": "https://www.rechnerjetzt.de/blog/mehrwertsteuer-dach-vergleich",
    },
  },
}

export default function MehrwertsteuerDachVergleichPage() {
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
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Steuern
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Mehrwertsteuer DACH-Vergleich: Deutschland, Österreich, Schweiz
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
              Die DACH-Region (Deutschland, Österreich, Schweiz) ist ein wichtiger Wirtschaftsraum in Europa, aber die Mehrwertsteuer-Systeme der drei Länder unterscheiden sich erheblich. Viele Unternehmen und Verbraucher sind unsicher, welche Regeln bei grenzüberschreitenden Geschäften gelten. In diesem Artikel vergleichen wir Schritt für Schritt die Mehrwertsteuer-Systeme der drei Länder, erklären die wichtigsten Unterschiede und geben praktische Tipps für grenzüberschreitende Geschäfte.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist die DACH-Region?</h2>
            <p className="mb-6">
              <strong>DACH</strong> ist ein Akronym für die drei deutschsprachigen Länder Deutschland (D), Österreich (A) und die Schweiz (CH). Diese Länder bilden einen wichtigen Wirtschaftsraum mit engen Handelsbeziehungen, aber unterschiedlichen Steuersystemen. Die Kenntnis der Unterschiede ist besonders wichtig für grenzüberschreitende Geschäfte.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 DACH-Region im Überblick:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Deutschland (D):</strong> Größte Volkswirtschaft, EU-Mitglied, Eurozone</li>
                <li><strong>Österreich (A):</strong> EU-Mitglied, Eurozone, enge Verbindung zu Deutschland</li>
                <li><strong>Schweiz (CH):</strong> Nicht EU-Mitglied, eigene Währung, bilaterale Abkommen</li>
                <li>Gemeinsame Sprache und Kultur</li>
                <li>Enge wirtschaftliche Zusammenarbeit</li>
                <li>Unterschiedliche Steuersysteme</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Mehrwertsteuer-Systeme im Vergleich</h2>
            <p className="mb-6">
              Die Mehrwertsteuer-Systeme der drei Länder unterscheiden sich in mehreren wichtigen Punkten. Hier ist eine detaillierte Übersicht:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">Deutschland</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Regelsatz:</strong> 19%</li>
              <li><strong>Ermäßigter Satz:</strong> 7% (Lebensmittel, Bücher, etc.)</li>
              <li><strong>Nullsatz:</strong> 0% (Exporte, innergemeinschaftliche Lieferungen)</li>
              <li><strong>Besonderheit:</strong> Keine Steuer auf Grundstücke</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-4">Österreich</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Regelsatz:</strong> 20%</li>
              <li><strong>Ermäßigter Satz:</strong> 10% (Lebensmittel, Bücher, etc.)</li>
              <li><strong>Nullsatz:</strong> 0% (Exporte, innergemeinschaftliche Lieferungen)</li>
              <li><strong>Besonderheit:</strong> Höhere Steuersätze als Deutschland</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-4">Schweiz</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Regelsatz:</strong> 8.1%</li>
              <li><strong>Ermäßigter Satz:</strong> 2.5% (Lebensmittel, Bücher, etc.)</li>
              <li><strong>Nullsatz:</strong> 0% (Exporte, Gesundheitsleistungen)</li>
              <li><strong>Besonderheit:</strong> Niedrigere Steuersätze, aber eigene Währung</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für grenzüberschreitende Geschäfte</h2>
            <p className="mb-6">
              Bei grenzüberschreitenden Geschäften in der DACH-Region müssen Sie besonders auf die unterschiedlichen Steuersätze und Regelungen achten. Hier sind die wichtigsten Punkte:
            </p>

            <div className="bg-yellow-50 p-6 rounded-xl mb-6 border border-yellow-200">
              <h3 className="text-lg font-bold text-foreground mb-4">⚠️ Wichtige Hinweise:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Überprüfen Sie immer den gültigen Steuersatz im Zielland</li>
                <li>Beachten Sie die unterschiedlichen Ermäßigungssätze</li>
                <li>Dokumentieren Sie alle grenzüberschreitenden Lieferungen</li>
                <li>Konsultieren Sie bei Unsicherheiten einen Steuerberater</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die DACH-Region bietet viele Geschäftsmöglichkeiten, aber die unterschiedlichen Mehrwertsteuer-Systeme erfordern sorgfältige Planung. Mit unserem Mehrwertsteuer-Rechner können Sie die korrekten Beträge für alle drei Länder berechnen.
            </p>

            <div className="bg-primary/10 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Nutzen Sie unseren Rechner</h3>
              <p className="mb-4">
                Unser Mehrwertsteuer-Rechner unterstützt alle DACH-Länder und hilft Ihnen bei der korrekten Berechnung Ihrer Steuerbeträge.
              </p>
              <Link href="/#vat">
                <Button className="bg-primary hover:bg-primary/90">
                  Zum Mehrwertsteuer-Rechner
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
