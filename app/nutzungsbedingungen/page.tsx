import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, AlertTriangle, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nutzungsbedingungen - Rechner Tools",
  description: "Nutzungsbedingungen für die Verwendung von Rechner Tools.",
  alternates: {
    canonical: "https://www.rechnerjetzt.de/nutzungsbedingungen",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/nutzungsbedingungen",
      "x-default": "https://www.rechnerjetzt.de/nutzungsbedingungen",
    },
  },
}

export default function NutzungsbedingungenPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-serif font-bold">Nutzungsbedingungen</h1>
              <p className="text-sm opacity-90">Bedingungen für die Nutzung</p>
            </div>
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
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Wichtige Hinweise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mb-2" />
                <h4 className="font-semibold mb-1">Keine Rechtsberatung</h4>
                <p className="text-sm text-muted-foreground">
                  Die Rechner dienen nur zur Orientierung und ersetzen keine professionelle Beratung.
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mb-2" />
                <h4 className="font-semibold mb-1">Kostenlose Nutzung</h4>
                <p className="text-sm text-muted-foreground">
                  Alle Rechner können kostenlos und ohne Registrierung verwendet werden.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Allgemeine Nutzungsbedingungen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Geltungsbereich</h2>
              <p className="text-sm text-muted-foreground">
                Diese Nutzungsbedingungen gelten für die Nutzung der Website "Rechner Tools" und aller darauf
                verfügbaren Online-Rechner (Finanzrechner, Steuerrechner, Zeitrechner). Betreiber der Website
                ist MUHAMMAD USMAN KHAN, Mithrasstraße 16, 60439 Frankfurt am Main, Deutschland.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Leistungsbeschreibung</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Wir stellen Ihnen kostenlose Online-Rechner zur Verfügung, mit denen Sie verschiedene Berechnungen
                  durchführen können:
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <h4 className="font-medium text-blue-900 mb-2">Mehrwertsteuer-Rechner</h4>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• MwSt-Berechnungen für DE, AT, CH</li>
                      <li>• Aktuelle Steuersätze 2025</li>
                      <li>• Brutto-Netto und Netto-Brutto</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <h4 className="font-medium text-green-900 mb-2">Prozentrechner</h4>
                    <ul className="text-xs text-green-800 space-y-1">
                      <li>• Prozente und Rabatte berechnen</li>
                      <li>• Aufschläge und Skonti</li>
                      <li>• Prozentuale Veränderungen</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <h4 className="font-medium text-purple-900 mb-2">Inflationsrechner</h4>
                    <ul className="text-xs text-purple-800 space-y-1">
                      <li>• Kaufkraftveränderung berechnen</li>
                      <li>• Inflationsraten für DACH</li>
                      <li>• Preissteigerungen und -senkungen</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <h4 className="font-medium text-orange-900 mb-2">Arbeitstage-Rechner</h4>
                    <ul className="text-xs text-orange-800 space-y-1">
                      <li>• Arbeitstage zwischen zwei Daten</li>
                      <li>• Feiertage und gesetzliche Regelungen</li>
                      <li>• Arbeitszeitberechnungen</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4">
                  <strong>Hinweis:</strong> Alle Rechner basieren auf aktuellen gesetzlichen Bestimmungen und 
                  anerkannten Berechnungsformeln für Deutschland, Österreich und die Schweiz.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Nutzungsrechte</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Die Nutzung der Rechner ist kostenlos und erfordert keine Registrierung. Sie dürfen die Rechner für
                  private und gewerbliche Zwecke verwenden.
                </p>
                <p>
                  Nicht gestattet ist die automatisierte Abfrage der Rechner durch Bots oder andere Programme sowie die
                  Einbindung der Rechner in andere Websites ohne unsere ausdrückliche Zustimmung.
                </p>
                <p>
                  <strong>Tracking und Analytics:</strong> Diese Website verwendet Google Analytics und Google Search
                  Console zur Verbesserung der Benutzerfreundlichkeit und Website-Performance. Durch die Nutzung der
                  Website stimmen Sie der Verwendung dieser Dienste zu, sofern Sie nicht der Verwendung von Cookies
                  widersprechen.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Haftungsausschluss</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground">Richtigkeit der Berechnungen</h4>
                  <p>
                    Wir bemühen uns um die Richtigkeit aller Berechnungen, können jedoch keine Gewähr für die
                    Korrektheit, Vollständigkeit oder Aktualität der Ergebnisse übernehmen. Die Berechnungen dienen nur
                    zur Orientierung.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Keine Beratung</h4>
                  <p>
                    Die Rechner ersetzen keine professionelle Steuer-, Finanz- oder Gesundheitsberatung. Bei wichtigen
                    Entscheidungen konsultieren Sie bitte entsprechende Fachexperten.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Verfügbarkeit</h4>
                  <p>
                    Wir bemühen uns um eine hohe Verfügbarkeit der Website, können jedoch keine ununterbrochene
                    Erreichbarkeit garantieren.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">5. Drittanbieter-Dienste</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground">Google Analytics</h4>
                  <p>
                    Diese Website nutzt Google Analytics, einen Webanalysedienst der Google LLC. Google Analytics
                    verwendet Cookies, um die Nutzung der Website zu analysieren. Die durch Cookies erzeugten
                    Informationen über Ihre Nutzung dieser Website werden an einen Google-Server in den USA übertragen
                    und dort gespeichert.
                  </p>
                  <p>
                    <strong>Zweck:</strong> Die Nutzung von Google Analytics dient der Analyse und regelmäßigen
                    Verbesserung der Nutzbarkeit unserer Website. Durch die gewonnenen Statistiken können wir unser
                    Angebot verbessern und für Sie als Nutzer interessanter gestalten.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Google Search Console</h4>
                  <p>
                    Wir nutzen Google Search Console, um die Performance unserer Website in den Google-Suchergebnissen
                    zu überwachen und zu optimieren. Dieser Dienst hilft uns dabei, technische Probleme zu identifizieren
                    und die Sichtbarkeit unserer Website zu verbessern.
                  </p>
                  <p>
                    <strong>Datenschutz:</strong> Beide Google-Dienste unterliegen den Google-Datenschutzrichtlinien.
                    Wir haben entsprechende Datenschutzmaßnahmen implementiert, um Ihre Privatsphäre zu schützen.
                    Detaillierte Informationen finden Sie in unserer{" "}
                    <Link href="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </Link>{" "}
                    und{" "}
                    <Link href="/cookie-richtlinie" className="text-primary hover:underline">
                      Cookie-Richtlinie
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">6. Cookie-Einstellungen</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Sie können Ihre Cookie-Einstellungen jederzeit anpassen. Detaillierte Informationen finden Sie in unserer
                  <a href="/cookie-richtlinie" className="text-primary hover:underline"> Cookie-Richtlinie</a>.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Wie Sie Ihre Cookie-Einstellungen anpassen können:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• <strong>Cookie-Banner:</strong> Nutzen Sie den Cookie-Banner am unteren Bildschirmrand</li>
                    <li>• <strong>Einstellungen:</strong> Klicken Sie auf "Einstellungen" für detaillierte Optionen</li>
                    <li>• <strong>Browser-Einstellungen:</strong> Passen Sie Cookies in Ihren Browser-Einstellungen an</li>
                    <li>• <strong>Einwilligung widerrufen:</strong> Sie können Ihre Einwilligung jederzeit widerrufen</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Cookie-Einstellungen nach der ersten Einwilligung ändern:</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• <strong>Cookie-Banner erneut öffnen:</strong> Klicken Sie auf den Cookie-Banner am unteren Bildschirmrand</li>
                    <li>• <strong>Einstellungen anpassen:</strong> Wählen Sie "Einstellungen" und passen Sie Ihre Präferenzen an</li>
                    <li>• <strong>Einzelne Kategorien:</strong> Aktivieren oder deaktivieren Sie Analytics-Cookies separat</li>
                    <li>• <strong>Alle Cookies löschen:</strong> Nutzen Sie "Alle ablehnen" um alle optionalen Cookies zu entfernen</li>
                    <li>• <strong>Browser-Cache leeren:</strong> Löschen Sie Cookies über Ihre Browser-Einstellungen</li>
                  </ul>
                </div>
                <p>
                  <strong>Wichtiger Hinweis:</strong> Das Deaktivieren von Cookies kann die Funktionalität der Website
                  beeinträchtigen. Technisch notwendige Cookies werden immer gesetzt, um die Grundfunktionen zu gewährleisten.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">7. Änderungen</h3>
              <p className="text-sm text-muted-foreground">
                Wir behalten uns vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen werden auf dieser Seite
                veröffentlicht und treten mit der Veröffentlichung in Kraft.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">8. Anwendbares Recht</h3>
              <p className="text-sm text-muted-foreground">
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist der Wohnsitz des Betreibers,
                soweit gesetzlich zulässig.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">9. Kontakt</h3>
              <p className="text-sm text-muted-foreground">
                Bei Fragen zu diesen Nutzungsbedingungen wenden Sie sich bitte an: muk.kt199@gmail.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">10. Letzte Aktualisierung</h3>
              <p className="text-sm text-muted-foreground">
                Diese Nutzungsbedingungen wurden zuletzt am 16. Dezember 2024 aktualisiert.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
