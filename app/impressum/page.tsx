import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum - Rechner Tools | Rechtliche Angaben & Kontakt",
  description: "Rechtliche Angaben und Impressum von Rechner Tools.",
  alternates: {
    canonical: "https://www.rechnerjetzt.de/impressum",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/impressum",
      "x-default": "https://www.rechnerjetzt.de/impressum",
    },
  },
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-serif font-bold">Impressum</h1>
              <p className="text-sm opacity-90">Rechtliche Angaben</p>
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
        <Card>
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <Building className="h-5 w-5" />
              Angaben gemäß § 5 TMG
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Rechtliche Informationen und Impressum von Rechner Tools - Ihrem vertrauenswürdigen Anbieter für professionelle Online-Rechner
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Betreiber der Website</h2>
              <div className="space-y-1 text-sm">
                <p>MUHAMMAD USMAN KHAN</p>
                <p>Mithrasstraße 16</p>
                <p>60439 Frankfurt am Main</p>
                <p>Deutschland</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Rechner Tools ist ein privates Projekt, das kostenlose Online-Rechner für den deutschsprachigen Raum bereitstellt. 
                Unser Ziel ist es, präzise und benutzerfreundliche Tools für verschiedene Berechnungszwecke anzubieten: 
                Mehrwertsteuer, Prozente, Inflation und Arbeitstage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Kontakt
              </h2>
              <div className="space-y-1 text-sm">
                <p>Telefon: +49 176 41106680</p>
                <p>E-Mail: muk.kt199@gmail.com</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Für Fragen zu unseren Rechnern, technische Unterstützung oder Feedback stehen wir Ihnen gerne zur Verfügung. 
                Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden zu beantworten.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Inhaltsverantwortung</h2>
              <h3 className="font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <div className="space-y-1 text-sm">
                <p>MUHAMMAD USMAN KHAN</p>
                <p>Mithrasstraße 16</p>
                <p>60439 Frankfurt am Main</p>
                <p>Deutschland</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Als verantwortlicher Redakteur überwache ich alle Inhalte dieser Website persönlich und stelle sicher, 
                dass alle Informationen aktuell, korrekt und rechtlich einwandfrei sind.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Über Rechner Tools</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Rechner Tools wurde entwickelt, um Privatpersonen und Unternehmern im deutschsprachigen Raum 
                  kostenlose, präzise und benutzerfreundliche Online-Rechner zur Verfügung zu stellen. 
                  Unsere Tools basieren auf aktuellen gesetzlichen Bestimmungen und anerkannten Berechnungsformeln.
                </p>
                <p>
                  Wir bieten vier spezialisierte Online-Rechner an:
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <h4 className="font-medium text-blue-900 mb-2">Mehrwertsteuer-Rechner</h4>
                    <p className="text-xs text-blue-800">MwSt-Berechnungen für DE, AT, CH mit aktuellen Steuersätzen</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <h4 className="font-medium text-green-900 mb-2">Prozentrechner</h4>
                    <p className="text-xs text-green-800">Prozente, Rabatte und Aufschläge berechnen</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <h4 className="font-medium text-purple-900 mb-2">Inflationsrechner</h4>
                    <p className="text-xs text-purple-800">Kaufkraftveränderung durch Inflation berechnen</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <h4 className="font-medium text-orange-900 mb-2">Arbeitstage-Rechner</h4>
                    <p className="text-xs text-orange-800">Arbeitstage zwischen zwei Daten mit Feiertagen</p>
                  </div>
                </div>
                <p>
                  Wir legen besonderen Wert auf Datenschutz und Transparenz. Alle Berechnungen erfolgen lokal 
                  in Ihrem Browser, ohne dass personenbezogene Daten an unsere Server übertragen werden. 
                  Unsere Rechner sind kostenlos nutzbar und erfordern keine Registrierung.
                </p>
                <p>
                  Die Website wird regelmäßig aktualisiert, um neue Funktionen hinzuzufügen und bestehende 
                  Tools zu verbessern. Wir freuen uns über Feedback und Anregungen von unseren Nutzern.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Haftungsausschluss</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <h3 className="font-medium text-foreground">Haftung für Inhalte</h3>
                  <p>
                    Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Die Berechnungen dienen nur zur Orientierung und ersetzen keine
                    professionelle Beratung. Für die Richtigkeit der Berechnungen kann keine Gewähr übernommen werden.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Haftung für Links</h3>
                  <p>
                    Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
                    Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Bei Bekanntwerden von 
                    Rechtsverletzungen werde ich derartige Links umgehend entfernen.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Urheberrecht</h3>
                  <p>
                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                    deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                    außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                    Gebrauch gestattet.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Datenschutz und Cookies</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns wichtig. Unsere Website verwendet nur technisch notwendige 
                  Cookies und sammelt keine personenbezogenen Daten ohne Ihre ausdrückliche Zustimmung. 
                  Alle Berechnungen erfolgen lokal in Ihrem Browser.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Cookie-Einstellungen anpassen:</h4>
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
                  beeinträchtigen. Technisch notwendige Cookies werden immer gesetzt.
                </p>
                <p>
                  Weitere Informationen zum Datenschutz finden Sie in unserer ausführlichen Datenschutzerklärung. 
                  Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Verwendete Dienste und Tools</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <h3 className="font-medium text-foreground">Google Search Console</h3>
                  <p>
                    Wir nutzen Google Search Console, um die Performance unserer Website in den Google-Suchergebnissen zu 
                    überwachen und zu optimieren. Diese Dienstleistung wird von Google LLC bereitgestellt und hilft uns dabei, 
                    die Sichtbarkeit unserer Website zu verbessern und technische Probleme zu identifizieren.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Google Analytics</h3>
                  <p>
                    Für die Analyse der Website-Nutzung verwenden wir Google Analytics (nur mit Ihrer Einwilligung). 
                    Dieses Tool hilft uns dabei, die Benutzerfreundlichkeit zu verbessern und relevante Inhalte zu optimieren.
                  </p>
                </div>
                <p>
                  <strong>Hinweis:</strong> Alle verwendeten Dienste unterliegen den entsprechenden Datenschutzrichtlinien 
                  der Anbieter. Detaillierte Informationen finden Sie in unserer Datenschutzerklärung.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
