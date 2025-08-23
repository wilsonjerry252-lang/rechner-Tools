import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Steuerliche Absetzbarkeit von Kreditzinsen",
  description: "Erfahren Sie, wann und wie Sie Kreditzinsen steuerlich absetzen können. Ein Leitfaden für Privatpersonen und Unternehmer.",
  keywords: "steuerliche absetzbarkeit, kreditzinsen absetzen, kredit steuer, steuer sparen, kreditzinsen steuerlich, steuerabzug",
  openGraph: {
    title: "Steuerliche Absetzbarkeit von Kreditzinsen",
    description: "Erfahren Sie, wann und wie Sie Kreditzinsen steuerlich absetzen können. Ein Leitfaden für Privatpersonen und Unternehmer.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/steuerliche-absetzbarkeit-kreditzinsen",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/steuerliche-absetzbarkeit-kreditzinsen",
      "x-default": "https://www.rechnerjetzt.de/blog/steuerliche-absetzbarkeit-kreditzinsen",
    },
  },
}

export default function KreditzinsenSteuerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h3 className="text-2xl font-bold font-serif">Rechner Tools</h3>
                <p className="text-sm opacity-90 font-medium">Professionelle Online-Rechner</p>
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
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Steuern
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Steuerliche Absetzbarkeit von Kreditzinsen: Leitfaden 2025
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>8. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Kreditzinsen können in vielen Fällen steuerlich abgesetzt werden und so Ihre Steuerlast erheblich reduzieren. Doch wann ist das möglich und welche Voraussetzungen müssen erfüllt sein? In diesem umfassenden Leitfaden erfahren Sie alles über die steuerliche Behandlung von Kreditzinsen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Grundlagen der steuerlichen Absetzbarkeit</h2>
            <p className="mb-6">
              Grundsätzlich können Kreditzinsen nur dann von der Steuer abgesetzt werden, wenn sie in einem wirtschaftlichen Zusammenhang mit einer steuerlich relevanten Einnahme stehen. Das bedeutet: Der Kredit muss für einen Zweck aufgenommen werden, der Einkünfte generiert oder steuerlich begünstigt ist.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Kreditzinsen für Privatpersonen</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">✅ Absetzbar: Immobilienkredite</h3>
                <p className="mb-3">Kreditzinsen für den Kauf oder Bau einer vermieteten Immobilie sind vollständig absetzbar.</p>
                <ul className="text-sm space-y-1">
                  <li>• Hypothekenkredite für vermietete Wohnungen</li>
                  <li>• Baufinanzierung für Gewerbeimmobilien</li>
                  <li>• Modernisierungskredite bei vermieteten Objekten</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">⚠️ Teilweise absetzbar: Eigennutzung</h3>
                <p className="mb-3">Bei selbstgenutzten Immobilien gelten besondere Regeln.</p>
                <ul className="text-sm space-y-1">
                  <li>• Nur bei Verkauf mit Gewinn absetzbar</li>
                  <li>• Spekulationsfrist von 10 Jahren beachten</li>
                  <li>• Dokumentation der Kosten erforderlich</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-3">❌ Nicht absetzbar: Konsumkredite</h3>
                <p className="mb-3">Kredite für private Zwecke können nicht abgesetzt werden.</p>
                <ul className="text-sm space-y-1">
                  <li>• Autokredite für Privatfahrzeuge</li>
                  <li>• Urlaubskredite</li>
                  <li>• Konsumgüterkredite</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Kreditzinsen für Unternehmer und Selbstständige</h2>
            
            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Vollständig absetzbar bei:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-sm space-y-2">
                  <li>• Betriebskredite</li>
                  <li>• Investitionskredite</li>
                  <li>• Warenkredite</li>
                  <li>• Maschinenfinanzierung</li>
                </ul>
                <ul className="text-sm space-y-2">
                  <li>• Fahrzeugkredite für Firmenfahrzeuge</li>
                  <li>• Büroausstattungskredite</li>
                  <li>• Softwarelizenzen</li>
                  <li>• Marketingkampagnen</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Besondere Fälle und Ausnahmen</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Bildungskredite</h3>
            <p className="mb-4">
              Kredite für berufliche Weiterbildung können unter bestimmten Voraussetzungen abgesetzt werden, wenn sie zu höheren Einkünften führen.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kredite für Kapitalanlagen</h3>
            <p className="mb-4">
              Zinsen für Kredite, die zur Finanzierung von Kapitalanlagen verwendet werden, sind nur absetzbar, wenn die Anlage Einkünfte generiert.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Gemischte Kredite</h3>
            <p className="mb-4">
              Bei Krediten, die sowohl für private als auch für geschäftliche Zwecke verwendet werden, muss eine Aufteilung erfolgen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Dokumentationspflichten</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Diese Unterlagen sollten Sie aufbewahren:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kreditverträge und Zinsabrechnungen</li>
                <li>Nachweise über die Verwendung der Kreditmittel</li>
                <li>Rechnungen und Belege für angeschaffte Gegenstände</li>
                <li>Mietverträge bei Immobilienkrediten</li>
                <li>Geschäftsunterlagen bei Unternehmerkrediten</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Beispiele</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-700 mb-2">Beispiel 1: Vermietete Wohnung</h4>
                <p className="text-sm">
                  <strong>Situation:</strong> Sie kaufen eine Wohnung für 200.000€ mit 150.000€ Kredit zu 3% Zinsen.<br/>
                  <strong>Jährliche Zinsen:</strong> 4.500€<br/>
                  <strong>Steuerliche Behandlung:</strong> Vollständig absetzbar als Werbungskosten
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-700 mb-2">Beispiel 2: Firmenfahrzeug</h4>
                <p className="text-sm">
                  <strong>Situation:</strong> Als Selbstständiger finanzieren Sie ein Firmenfahrzeug mit 25.000€ Kredit zu 4% Zinsen.<br/>
                  <strong>Jährliche Zinsen:</strong> 1.000€<br/>
                  <strong>Steuerliche Behandlung:</strong> Vollständig absetzbar als Betriebsausgaben
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-700 mb-2">Beispiel 3: Privatkredit</h4>
                <p className="text-sm">
                  <strong>Situation:</strong> Sie nehmen einen Kredit über 10.000€ für einen Urlaub auf.<br/>
                  <strong>Jährliche Zinsen:</strong> 500€<br/>
                  <strong>Steuerliche Behandlung:</strong> Nicht absetzbar (privater Konsum)
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Steuerliche Optimierungstipps</h2>
            
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Kreditverwendung dokumentieren:</strong> Halten Sie alle Belege für die Verwendung der Kreditmittel sorgfältig auf</li>
              <li><strong>Separate Konten:</strong> Verwenden Sie für gemischte Kredite separate Konten oder führen Sie eine detaillierte Aufstellung</li>
              <li><strong>Beratung einholen:</strong> Bei komplexen Fällen lassen Sie sich von einem Steuerberater beraten</li>
              <li><strong>Regelmäßige Prüfung:</strong> Überprüfen Sie jährlich, ob sich die steuerliche Situation geändert hat</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fehler vermeiden</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Kreditzinsen ohne Nachweis der Verwendung absetzen</li>
              <li>Private und geschäftliche Kredite vermischen</li>
              <li>Dokumentationspflichten vernachlässigen</li>
              <li>Änderungen der Kreditverwendung nicht dokumentieren</li>
              <li>Steuerliche Beratung bei komplexen Fällen nicht in Anspruch nehmen</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die steuerliche Absetzbarkeit von Kreditzinsen kann Ihre Steuerlast erheblich reduzieren. Wichtig ist eine sorgfältige Dokumentation und die Einhaltung der gesetzlichen Voraussetzungen. Bei Unsicherheiten sollten Sie sich von einem Steuerberater beraten lassen, um Steuervorteile optimal zu nutzen und gleichzeitig rechtssicher zu handeln.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Nutzen Sie unsere Rechner
              </h3>
              <p className="text-muted-foreground mb-4">
                Berechnen Sie Ihre Kreditkosten und planen Sie Ihre Finanzen optimal mit unseren professionellen Rechnern.
              </p>
              <Link href="/">
                <Button className="bg-primary hover:bg-primary/90">
                  Zu den Rechnern
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
