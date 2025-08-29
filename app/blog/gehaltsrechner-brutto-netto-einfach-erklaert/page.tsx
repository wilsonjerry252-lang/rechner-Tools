import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, DollarSign, Percent, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Gehaltsrechner: Brutto zu Netto einfach erklärt",
  description: "Verstehen Sie, wie Ihr Bruttogehalt zu Ihrem Nettogehalt wird. Alle Abzüge, Steuern und Sozialabgaben einfach erklärt mit praktischen Beispielen.",
  keywords: "gehaltsrechner, brutto netto, gehalt berechnen, lohnsteuer, sozialabgaben, nettolohn, bruttoverdienst",
  openGraph: {
    title: "Gehaltsrechner: Brutto zu Netto einfach erklärt",
    description: "Verstehen Sie, wie Ihr Bruttogehalt zu Ihrem Nettogehalt wird. Alle Abzüge, Steuern und Sozialabgaben einfach erklärt mit praktischen Beispielen.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/gehaltsrechner-brutto-netto-einfach-erklaert",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/gehaltsrechner-brutto-netto-einfach-erklaert",
      "x-default": "https://www.rechnerjetzt.de/blog/gehaltsrechner-brutto-netto-einfach-erklaert",
    },
  },
}

export default function GehaltsrechnerPage() {
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
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Gehalt
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Gehaltsrechner: Brutto zu Netto einfach erklärt
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Viele Arbeitnehmer sind überrascht, wenn sie sehen, wie viel von ihrem Bruttogehalt tatsächlich auf ihrem Konto ankommt. Der Unterschied zwischen Brutto- und Nettogehalt kann erheblich sein. In diesem umfassenden Guide erklären wir Ihnen alle Abzüge und zeigen Ihnen, wie Sie Ihr Gehalt richtig berechnen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist der Unterschied zwischen Brutto und Netto?</h2>
            <p className="mb-6">
              <strong>Bruttogehalt</strong> ist Ihr Gehalt vor allen Abzügen, während das <strong>Nettogehalt</strong> der Betrag ist, der tatsächlich auf Ihr Konto überwiesen wird. Der Unterschied wird durch Steuern, Sozialabgaben und andere Abzüge verursacht.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">📊 Gehaltsberechnung:</h3>
              <div className="text-center">
                <p className="text-lg font-mono bg-card p-3 rounded-lg">
                  Nettogehalt = Bruttogehalt - Steuern - Sozialabgaben - Sonstige Abzüge
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Welche Abzüge gibt es vom Bruttogehalt?</h2>
            <p className="mb-6">
              Vom Bruttogehalt werden verschiedene Abzüge vorgenommen. Hier sind die wichtigsten:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4 mt-6">1. Lohnsteuer</h3>
            <p className="mb-6">
              Die Lohnsteuer ist die wichtigste Abgabe. Sie wird nach der Steuerklasse berechnet und beträgt je nach Einkommen zwischen 14% und 45% des zu versteuernden Einkommens.
            </p>

            <div className="bg-accent/10 p-6 rounded-xl mb-6 border border-accent/20">
              <h4 className="text-lg font-bold text-foreground mb-4">💡 Steuerklassen 2025:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Steuerklasse I</p>
                  <p className="text-sm text-muted-foreground">Ledige, Geschiedene</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Steuerklasse II</p>
                  <p className="text-sm text-muted-foreground">Alleinerziehende</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Steuerklasse III</p>
                  <p className="text-sm text-muted-foreground">Verheiratete (höherer Verdienst)</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Steuerklasse IV</p>
                  <p className="text-sm text-muted-foreground">Verheiratete (gleicher Verdienst)</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-4 mt-6">2. Sozialabgaben</h3>
            <p className="mb-6">
              Die Sozialabgaben werden prozentual vom Bruttogehalt abgezogen und betragen insgesamt etwa 20%:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h4 className="text-lg font-bold text-foreground mb-4">🏥 Sozialabgaben 2025:</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span><strong>Krankenversicherung:</strong> Arbeitnehmeranteil</span>
                  <span className="text-muted-foreground">7,3% + Zusatzbeitrag</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Pflegeversicherung:</strong> Arbeitnehmeranteil</span>
                  <span className="text-muted-foreground">1,525%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Arbeitslosenversicherung:</strong> Arbeitnehmeranteil</span>
                  <span className="text-muted-foreground">1,2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Rentenversicherung:</strong> Arbeitnehmeranteil</span>
                  <span className="text-muted-foreground">9,35%</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-4 mt-6">3. Sonstige Abzüge</h3>
            <p className="mb-6">
              Zusätzlich können weitere Abzüge anfallen, wie Kirchensteuer, Solidaritätszuschlag oder betriebliche Altersvorsorge.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Beispiele zur Gehaltsberechnung</h2>
            <p className="mb-6">
              Lassen Sie uns ein konkretes Beispiel durchgehen, um die Berechnung zu verstehen:
            </p>

            <div className="bg-green-50 p-6 rounded-xl mb-6 border border-green-200">
              <h3 className="text-lg font-bold text-foreground mb-4">💼 Beispiel: Angestellter in Steuerklasse I</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Bruttogehalt</p>
                  <p className="text-lg font-bold text-primary">4.000 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Lohnsteuer</p>
                  <p className="text-lg font-bold text-primary">- 650 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Sozialabgaben</p>
                  <p className="text-lg font-bold text-primary">- 800 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Nettogehalt</p>
                  <p className="text-lg font-bold text-primary">2.550 €</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie funktioniert ein Gehaltsrechner?</h2>
            <p className="mb-6">
              Ein professioneller Gehaltsrechner berücksichtigt alle wichtigen Faktoren:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Eingabe des Bruttogehalts</li>
              <li>Auswahl der Steuerklasse</li>
              <li>Berücksichtigung der Sozialabgaben</li>
              <li>Berechnung der Lohnsteuer</li>
              <li>Abzug von Kirchensteuer und Solidaritätszuschlag</li>
              <li>Ausgabe des Nettogehalts</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Einflussfaktoren auf das Nettogehalt</h2>
            <p className="mb-6">
              Verschiedene Faktoren beeinflussen, wie viel von Ihrem Bruttogehalt übrig bleibt:
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mb-6 border border-blue-200">
              <h3 className="text-lg font-bold text-foreground mb-4">🔍 Wichtige Einflussfaktoren:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Steuerklasse:</strong> Verheiratete zahlen oft weniger Steuern</li>
                <li><strong>Kinderfreibeträge:</strong> Reduzieren die Steuerlast</li>
                <li><strong>Werbungskosten:</strong> Können steuermindernd geltend gemacht werden</li>
                <li><strong>Kirchensteuer:</strong> Fällt nur in bestimmten Bundesländern an</li>
                <li><strong>Betriebliche Altersvorsorge:</strong> Reduziert das zu versteuernde Einkommen</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Tipps zur Gehaltsoptimierung</h2>
            <p className="mb-6">
              Mit den richtigen Strategien können Sie Ihr Nettogehalt optimieren:
            </p>

            <div className="bg-yellow-50 p-6 rounded-xl mb-6 border border-yellow-200">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Optimierungs-Tipps:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nutzen Sie alle verfügbaren Werbungskosten</li>
                <li>Prüfen Sie, ob eine andere Steuerklasse günstiger ist</li>
                <li>Erkundigen Sie sich nach betrieblicher Altersvorsorge</li>
                <li>Nutzen Sie steuerfreie Zuschläge (z.B. für Nachtarbeit)</li>
                <li>Lassen Sie sich von einem Steuerberater beraten</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Warum ist mein Nettogehalt so viel niedriger als mein Bruttogehalt?</h3>
                <p className="text-muted-foreground">
                  Das liegt an den vielen Abzügen: Lohnsteuer, Sozialabgaben, Kirchensteuer und Solidaritätszuschlag. Insgesamt können 30-40% des Bruttogehalts abgezogen werden.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Welche Steuerklasse ist für mich am günstigsten?</h3>
                <p className="text-muted-foreground">
                  Das hängt von Ihrem Familienstand ab. Verheiratete können zwischen den Klassen III/IV wählen. Oft ist III für den Hauptverdiener günstiger.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Kann ich meine Steuerklasse wechseln?</h3>
                <p className="text-muted-foreground">
                  Ja, Sie können Ihre Steuerklasse beim Finanzamt ändern. Das ist besonders bei Heirat, Scheidung oder Geburt eines Kindes sinnvoll.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Was sind Werbungskosten?</h3>
                <p className="text-muted-foreground">
                  Werbungskosten sind Ausgaben, die Sie für Ihren Beruf aufwenden müssen, z.B. Fahrtkosten zur Arbeit, Arbeitskleidung oder Fortbildungen.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Lohnt sich eine Steuererklärung?</h3>
                <p className="text-muted-foreground">
                  Oft ja! Besonders wenn Sie Werbungskosten haben, können Sie Geld zurückbekommen. Nutzen Sie unseren Steuerrechner für eine erste Einschätzung.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit und Empfehlungen</h2>
            <p className="mb-6">
              Das Verständnis der Gehaltsberechnung ist wichtig für Ihre finanzielle Planung. Der Unterschied zwischen Brutto- und Nettogehalt kann erheblich sein, aber mit den richtigen Strategien können Sie Ihr Nettogehalt optimieren.
            </p>

            <p className="mb-6">
              Nutzen Sie professionelle Gehaltsrechner, um verschiedene Szenarien durchzuspielen und finden Sie heraus, welche Steuerklasse für Sie am günstigsten ist.
            </p>

            <div className="bg-primary/10 p-6 rounded-xl mb-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Unser Tipp:</h3>
              <p className="mb-4">
                Nutzen Sie professionelle Gehaltsrechner für genaue Berechnungen. Diese berücksichtigen alle wichtigen Faktoren und geben Ihnen ein realistisches Bild Ihres Nettogehalts.
              </p>
              <p>
                Für weitere Berechnungen besuchen Sie unsere <Link href="/prozentrechner" className="text-primary hover:underline">Prozentrechner</Link> und andere hilfreiche Tools.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">📚 Weiterführende Artikel:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/steuererklaerung-2025-aenderungen-tipps" className="text-primary hover:underline">Steuererklärung 2025: Alle Änderungen & Tipps</Link></li>
                <li><Link href="/blog/prozentrechnung-einfach-erklaert" className="text-primary hover:underline">Prozentrechnung einfach erklärt: Formeln & Beispiele</Link></li>
                <li><Link href="/blog/mehrwertsteuer-berechnung-richtig" className="text-primary hover:underline">Mehrwertsteuer richtig berechnen: Mit Beispielen</Link></li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
