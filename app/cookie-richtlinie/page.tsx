import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cookie, Settings, Shield, Info, AlertTriangle, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie-Richtlinie - Rechner Tools",
  description:
    "Cookie-Richtlinie von Rechner Tools - Informationen über die Verwendung von Cookies und Tracking-Technologien.",
  robots: "noindex, nofollow",
}

export default function CookieRichtliniePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-serif font-bold">Cookie-Richtlinie</h1>
              <p className="text-sm opacity-90">Verwendung von Cookies und Tracking</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <Cookie className="h-5 w-5" />
              Cookie-Übersicht
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600 mb-2" />
                <h4 className="font-semibold mb-1 text-red-900">Notwendige Cookies</h4>
                <p className="text-sm text-red-800">
                  Technisch erforderlich für die Grundfunktionen der Website.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <Info className="h-6 w-6 text-yellow-600 mb-2" />
                <h4 className="font-semibold mb-1 text-yellow-900">Analytics Cookies</h4>
                <p className="text-sm text-yellow-800">
                  Google Analytics für Website-Optimierung (Einwilligung erforderlich).
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                <h4 className="font-semibold mb-1 text-green-900">DSGVO-konform</h4>
                <p className="text-sm text-green-800">
                  Alle Cookies werden nur mit Ihrer Einwilligung gesetzt.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-6 pt-6">
            <div>
              <h3 className="font-semibold mb-3">1. Was sind Cookies?</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, wenn
                  Sie eine Website besuchen. Sie werden häufig verwendet, um Websites funktionsfähig oder effizienter
                  zu machen, sowie um dem Websitebetreiber Informationen zu liefern.
                </p>
                <p>
                  Cookies können von der Website gesetzt werden, die Sie besuchen (sogenannte &quot;First-Party-Cookies&quot;),
                  oder von anderen Websites oder Servern, die Inhalte auf der von Ihnen besuchten Website bereitstellen
                  (sogenannte &quot;Third-Party-Cookies&quot;).
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">2. Welche Cookies verwenden wir?</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Notwendige Cookies (Technisch erforderlich)</h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <p>
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert
                      werden. Sie werden normalerweise nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, wie
                      das Festlegen von Datenschutzeinstellungen, das Anmelden oder das Ausfüllen von Formularen.
                    </p>
                    <div className="bg-white rounded p-3">
                      <h5 className="font-medium mb-2">Beispiele:</h5>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>Session-Cookies:</strong> Für die Navigation und Grundfunktionen</li>
                        <li><strong>CSRF-Token:</strong> Für Sicherheit bei Formularen</li>
                        <li><strong>Spracheinstellungen:</strong> Für Ihre bevorzugte Sprache</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">Analytics Cookies (Google Analytics)</h4>
                  <div className="space-y-2 text-sm text-yellow-800">
                    <p>
                      Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die
                      Leistung unserer Website messen und verbessern können. Sie helfen uns zu verstehen, welche
                      Seiten am beliebtesten und am wenigsten beliebt sind.
                    </p>
                    <div className="bg-white rounded p-3">
                      <h5 className="font-medium mb-2">Google Analytics Cookies:</h5>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>_ga:</strong> Wird verwendet, um Benutzer zu unterscheiden (2 Jahre)</li>
                        <li><strong>_gid:</strong> Wird verwendet, um Benutzer zu unterscheiden (24 Stunden)</li>
                        <li><strong>_gat:</strong> Wird verwendet, um die Anforderungsrate zu drosseln (1 Minute)</li>
                        <li><strong>_ga_[CONTAINER_ID]:</strong> Persistente Session-ID (2 Jahre)</li>
                      </ul>
                    </div>
                    <p className="mt-3 p-2 bg-yellow-100 rounded text-yellow-900">
                      <strong>Hinweis:</strong> Diese Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">3. Google Analytics im Detail</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Google Analytics ist ein Webanalysedienst der Google LLC, der uns hilft zu verstehen, wie Besucher
                  mit unserer Website interagieren. Die durch Cookies gesammelten Informationen werden an Google
                  übertragen und auf Servern in den USA gespeichert.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Was wird erfasst?</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Seitenaufrufe und Verweildauer auf der Website</li>
                    <li>Verwendete Browser, Betriebssysteme und Geräte</li>
                    <li>Geografische Herkunft (Land, Stadt)</li>
                    <li>Verkehrsquellen (Suchmaschinen, direkte Aufrufe, Verweise)</li>
                    <li>Interaktionen mit der Website (Klicks, Scrollen)</li>
                    <li>Conversion-Ziele (Kontaktformular-Absendungen)</li>
                  </ul>
                </div>
                <p>
                  <strong>Datenschutz:</strong> Google Analytics verwendet IP-Anonymisierung, um Ihre IP-Adresse zu
                  anonymisieren, bevor sie an Google übertragen wird. Wir haben auch die Funktion &quot;Demografische
                  Merkmale und Interessen&quot; deaktiviert.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">4. Cookie-Einstellungen verwalten</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Sie haben verschiedene Möglichkeiten, Cookies zu verwalten und zu kontrollieren:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">Browser-Einstellungen</h4>
                    <p className="text-green-800">
                      Sie können Cookies in Ihren Browser-Einstellungen deaktivieren oder löschen. Beachten Sie, dass
                      dies die Funktionalität der Website beeinträchtigen kann.
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Cookie-Consent-Manager</h4>
                    <p className="text-blue-800">
                      Nutzen Sie unseren Cookie-Consent-Manager, um einzelne Cookie-Kategorien zu aktivieren oder
                      zu deaktivieren.
                    </p>
                  </div>
                </div>
                <p>
                  <strong>Wichtiger Hinweis:</strong> Das Deaktivieren von Cookies kann die Funktionalität der
                  Website beeinträchtigen und einige Funktionen möglicherweise nicht verfügbar machen.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">5. Rechtsgrundlage</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Die Verwendung von Cookies erfolgt auf Grundlage der folgenden Rechtsgrundlagen:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <strong>Notwendige Cookies:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                  </li>
                </ul>
                <p>
                  <strong>Einwilligung:</strong> Für alle nicht-notwendigen Cookies holen wir Ihre ausdrückliche
                  Einwilligung ein, bevor diese gesetzt werden. Sie können diese Einwilligung jederzeit widerrufen.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">6. Datenübertragung</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Durch die Nutzung von Google Analytics werden Daten an Google-Server in den USA übertragen. Google
                  hat sich dem EU-US Privacy Shield unterworfen, um einen angemessenen Datenschutz zu gewährleisten.
                </p>
                <p>
                  <strong>Datensicherheit:</strong> Google implementiert umfassende Sicherheitsmaßnahmen zum Schutz
                  der übertragenen Daten vor unbefugtem Zugriff, Verlust oder Missbrauch.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">7. Speicherdauer</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Übersicht der Cookie-Laufzeiten:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Session-Cookies:</strong> Werden gelöscht, wenn Sie den Browser schließen</li>
                    <li><strong>Persistente Cookies:</strong> Bleiben bis zum Ablaufdatum oder der manuellen Löschung</li>
                    <li><strong>Google Analytics Cookies:</strong> Maximal 26 Monate (gemäß Google-Richtlinien)</li>
                  </ul>
                </div>
                <p>
                  <strong>Automatische Löschung:</strong> Alle Cookies werden automatisch gelöscht, wenn ihre
                  Laufzeit abgelaufen ist oder wenn Sie diese manuell in Ihren Browser-Einstellungen löschen.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">8. Ihre Rechte</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Sie haben folgende Rechte bezüglich der Verwendung von Cookies:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Einwilligung jederzeit zu widerrufen</li>
                  <li>Bestimmte Cookie-Kategorien zu deaktivieren</li>
                  <li>Alle Cookies zu löschen</li>
                  <li>Auskunft über gesetzte Cookies zu erhalten</li>
                  <li>Beschwerde bei einer Aufsichtsbehörde einzulegen</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">9. Kontakt und Fragen</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Bei Fragen zur Verwendung von Cookies oder zu Ihren Datenschutzrechten wenden Sie sich bitte an:
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-medium">E-Mail: muk.kt199@gmail.com</p>
                  <p className="text-blue-800">
                    Wir helfen Ihnen gerne dabei, Ihre Cookie-Einstellungen zu verwalten oder Fragen zum Datenschutz
                    zu beantworten.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">10. Änderungen dieser Cookie-Richtlinie</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Wir behalten uns vor, diese Cookie-Richtlinie bei Bedarf zu aktualisieren, um Änderungen in der
                  Gesetzgebung oder bei der Verwendung von Cookies widerzuspiegeln.
                </p>
                <p>
                  <strong>Stand:</strong> Diese Cookie-Richtlinie wurde zuletzt am 15. Dezember 2024 aktualisiert.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-yellow-900 mb-2">Wichtiger Hinweis</h4>
                  <p className="text-sm text-yellow-800">
                    Diese Cookie-Richtlinie ist Teil unserer umfassenden Datenschutzerklärung. Für weitere
                    Informationen zum Datenschutz besuchen Sie bitte unsere{" "}
                    <Link href="/datenschutz" className="text-yellow-900 underline hover:no-underline">
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
