import Link from "next/link"
import { ArrowLeft, Shield, AlertTriangle, FileText, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata = {
  title: "Haftungsausschluss - Rechner Tools",
  description: "Haftungsausschluss und rechtliche Hinweise für die Nutzung der Online-Rechner von Rechner Tools.",
  keywords: "haftungsausschluss, disclaimer, rechtliche hinweise, rechner tools",
  alternates: {
    canonical: "https://www.rechnerjetzt.de/haftungsausschluss",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/haftungsausschluss",
      "x-default": "https://www.rechnerjetzt.de/haftungsausschluss",
    },
  },
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Rechner Tools Logo" width={48} height={48} className="rounded-full shadow-md" />
              <div>
                <h3 className="text-2xl font-bold font-serif">Rechner Tools</h3>
                <p className="text-sm opacity-90 font-medium">Professionelle Online-Rechner</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-card rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-8 w-8 text-orange-500" />
            <h1 className="text-4xl font-bold font-serif text-foreground">Haftungsausschluss</h1>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-orange-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-orange-800 mb-1">Wichtiger Hinweis</h3>
                <p className="text-orange-700 text-sm">
                  Die auf dieser Website bereitgestellten Rechner und Informationen dienen ausschließlich der
                  allgemeinen Information und ersetzen keine professionelle Beratung.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                Allgemeine Hinweise
              </h2>
              <p>
                Die Betreiber von Rechner Tools übernehmen keine Gewähr für die Richtigkeit, Vollständigkeit oder
                Aktualität der bereitgestellten Informationen und Berechnungen. Alle Angaben erfolgen ohne Gewähr und
                ohne Anspruch auf Vollständigkeit.
              </p>
              <p>
                Die Nutzung der auf dieser Website verfügbaren Rechner erfolgt auf eigene Verantwortung. Wir empfehlen
                ausdrücklich, wichtige Berechnungen durch einen qualifizierten Fachmann überprüfen zu lassen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Haftungsausschluss für Berechnungen</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Mehrwertsteuer-Rechner</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• MwSt-Sätze basieren auf aktuellen Gesetzen</li>
                    <li>• Steuersätze für DE, AT, CH aktuell</li>
                    <li>• Professionelle Beratung empfohlen</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Prozentrechner</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Prozentberechnungen sind Näherungswerte</li>
                    <li>• Rabatte und Aufschläge berechnen</li>
                    <li>• Prozentuale Veränderungen</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Inflationsrechner</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Inflation-Daten werden regelmäßig aktualisiert</li>
                    <li>• Kaufkraftveränderungen berechnen</li>
                    <li>• Aktuelle Inflationsraten für DACH</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">Arbeitstage-Rechner</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Feiertage basieren auf aktuellen Gesetzen</li>
                    <li>• Arbeitstage sind Näherungswerte</li>
                    <li>• Länderspezifische Regelungen beachten</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">Allgemeine Hinweise zu allen Rechnern</h3>
              <ul className="space-y-2 ml-6">
                <li>
                  • Die verwendeten Werte entsprechen den aktuell gültigen Vorgaben zum Zeitpunkt der Erstellung
                </li>
                <li>• Änderungen werden regelmäßig, aber nicht in Echtzeit aktualisiert</li>
                <li>• Für professionelle Beratung wenden Sie sich an qualifizierte Fachleute</li>
                <li>• Besondere Regelungen und Ausnahmen werden nicht berücksichtigt</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Externe Links</h2>
              <p>
                Unsere Website kann Links zu externen Websites enthalten. Wir haben keinen Einfluss auf den Inhalt
                dieser Websites und übernehmen keine Verantwortung für deren Inhalte. Die Verantwortung liegt beim
                jeweiligen Anbieter oder Betreiber der Seiten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Technische Verfügbarkeit</h2>
              <p>
                Wir bemühen uns um eine kontinuierliche Verfügbarkeit der Website, können jedoch keine Garantie dafür
                übernehmen. Technische Störungen, Wartungsarbeiten oder andere Umstände können zu temporären Ausfällen
                führen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Änderungen</h2>
              <p>
                Wir behalten uns das Recht vor, diesen Haftungsausschluss jederzeit ohne vorherige Ankündigung zu
                ändern. Die jeweils aktuelle Version ist auf unserer Website verfügbar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Anwendbares Recht</h2>
              <p>
                Für alle Rechtsbeziehungen zwischen den Nutzern und dem Betreiber dieser Website gilt ausschließlich
                deutsches Recht unter Ausschluss des UN-Kaufrechts.
              </p>
            </section>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">Kontakt bei Fragen</h3>
              <p>
                Bei Fragen zu diesem Haftungsausschluss oder zur Nutzung unserer Rechner können Sie uns jederzeit über
                unsere{" "}
                <Link href="/kontakt" className="text-primary hover:underline">
                  Kontaktseite
                </Link>{" "}
                erreichen.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Letzte Aktualisierung: 16. Dezember 2024
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
