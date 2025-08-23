import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Database, Cookie, Globe, BarChart3, Search } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Rechner Tools",
  description:
    "Datenschutzerklärung von Rechner Tools - Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO.",
  alternates: {
    canonical: "https://www.rechnerjetzt.de/datenschutz",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/datenschutz",
    },
  },
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-serif font-bold">Datenschutzerklärung</h1>
              <p className="text-sm opacity-90">Schutz Ihrer Daten</p>
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
              <Shield className="h-5 w-5" />
              Datenschutz auf einen Blick
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <Eye className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Keine Speicherung</h4>
                <p className="text-sm text-muted-foreground">
                  Ihre Berechnungsdaten werden nicht gespeichert oder übertragen.
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <Database className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Lokale Verarbeitung</h4>
                <p className="text-sm text-muted-foreground">Alle Berechnungen erfolgen lokal in Ihrem Browser.</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <Cookie className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">Analytics Cookies</h4>
                <p className="text-sm text-muted-foreground">Google Analytics für Website-Optimierung (mit Einwilligung).</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <Globe className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold mb-1">DSGVO-konform</h4>
                <p className="text-sm text-muted-foreground">Vollständige Einhaltung der Datenschutz-Grundverordnung.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-6 pt-6">
            <div>
              <h3 className="font-semibold mb-3">1. Datenschutz auf einen Blick</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">2. Datenerfassung auf dieser Website</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground">Wer ist verantwortlich für die Datenerfassung?</h4>
                  <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                    können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Wie erfassen wir Ihre Daten?</h4>
                  <p>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B.
                    um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach
                    Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">3. Rechner-Funktionen</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Wichtiger Hinweis:</strong> Alle Berechnungen (VAT, BMI, Kredite) werden ausschließlich lokal
                  in Ihrem Browser durchgeführt. Die von Ihnen eingegebenen Werte werden nicht an unsere Server
                  übertragen, gespeichert oder anderweitig verarbeitet.
                </p>
                <p>
                  Dies bedeutet, dass Ihre persönlichen Daten wie Gewicht, Größe, Kreditsummen oder andere
                  Berechnungsparameter vollständig privat bleiben und nur auf Ihrem Gerät verarbeitet werden.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                4. Google Analytics
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Diese Website nutzt Google Analytics, einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway,
                  Mountain View, CA 94043, USA ("Google"). Google Analytics verwendet Cookies, um die Nutzung der Website
                  zu analysieren.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Was wird erfasst?</h4>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>Seitenaufrufe und Verweildauer</li>
                    <li>Verwendete Browser und Geräte</li>
                    <li>Geografische Herkunft (Land/Stadt)</li>
                    <li>Verkehrsquellen (Suchmaschinen, direkte Aufrufe)</li>
                    <li>Interaktionen mit der Website</li>
                  </ul>
                </div>
                <p>
                  <strong>Rechtsgrundlage:</strong> Die Verwendung von Google Analytics erfolgt auf Grundlage Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.
                </p>
                <p>
                  <strong>Datenübertragung:</strong> Durch die Nutzung von Google Analytics werden Daten an Google-Server
                  in den USA übertragen. Google hat sich dem EU-US Privacy Shield unterworfen, um einen angemessenen
                  Datenschutz zu gewährleisten.
                </p>
                <p>
                  <strong>Speicherdauer:</strong> Google Analytics speichert Daten für 26 Monate. Sie können die
                  Datenspeicherung durch Google Analytics verhindern, indem Sie Cookies deaktivieren oder den
                  <a href="/cookie-richtlinie" className="text-primary hover:underline">Cookie-Einstellungen</a> widersprechen.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Search className="h-5 w-5" />
                5. Google Search Console
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Wir nutzen Google Search Console, um die Performance unserer Website in den Google-Suchergebnissen zu
                  überwachen und zu optimieren. Diese Dienstleistung wird von Google LLC bereitgestellt.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Erfasste Daten:</h4>
                  <ul className="list-disc list-inside space-y-1 text-green-800">
                    <li>Suchanfragen, die zu unserer Website führen</li>
                    <li>Klickraten in den Suchergebnissen</li>
                    <li>Durchschnittliche Position in den Suchergebnissen</li>
                    <li>Technische Probleme der Website</li>
                  </ul>
                </div>
                <p>
                  <strong>Datenschutz:</strong> Google Search Console verarbeitet Daten im Auftrag des Websitebetreibers
                  und unterliegt den Google-Datenschutzrichtlinien. Die Daten werden anonymisiert verarbeitet.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">6. Hosting und Content Delivery Networks (CDN)</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten,
                  die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">7. Kontaktformular</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Wenn Sie uns über das Kontaktformular eine Nachricht senden, werden Ihre Angaben aus der Anfrage
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
                  Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Die Verarbeitung der Daten erfolgt auf Grundlage Ihrer Einwilligung
                  (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.
                </p>
                <p>
                  <strong>Speicherdauer:</strong> Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
                  Verarbeitung dieser Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
                  lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">8. Ihre Rechte</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Sie haben jederzeit das Recht:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten Daten zu erhalten
                  </li>
                  <li>Berichtigung oder Löschung dieser Daten zu verlangen</li>
                  <li>eine Einschränkung der Datenverarbeitung zu verlangen</li>
                  <li>der Datenverarbeitung zu widersprechen</li>
                  <li>Datenübertragbarkeit zu verlangen</li>
                  <li>Einwilligungen jederzeit zu widerrufen</li>
                  <li>Beschwerde bei einer Aufsichtsbehörde einzulegen</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">9. Cookie-Einstellungen</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Sie können Ihre Cookie-Einstellungen jederzeit anpassen. Detaillierte Informationen finden Sie in unserer
                  <a href="/cookie-richtlinie" className="text-primary hover:underline"> Cookie-Richtlinie</a>.
                </p>
                <p>
                  <strong>Wichtiger Hinweis:</strong> Das Deaktivieren von Cookies kann die Funktionalität der Website
                  beeinträchtigen.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">10. Kontakt</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an: muk.kt199@gmail.com</p>
                <p>
                  <strong>Datenschutzbeauftragter:</strong> Da wir weniger als 10 Mitarbeiter beschäftigen und keine
                  personenbezogenen Daten in großem Umfang verarbeiten, ist die Bestellung eines Datenschutzbeauftragten
                  nicht erforderlich.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">11. Änderungen dieser Datenschutzerklärung</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
                  rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung
                  umzusetzen, z.B. bei der Einführung neuer Services.
                </p>
                <p>
                  <strong>Stand:</strong> Diese Datenschutzerklärung wurde zuletzt am 15. Dezember 2024 aktualisiert.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
