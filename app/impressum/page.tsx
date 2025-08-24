import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum - Rechner Tools",
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
                Unser Ziel ist es, präzise und benutzerfreundliche Tools für Mehrwertsteuerberechnungen anzubieten.
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
                <p>
                  Weitere Informationen zum Datenschutz finden Sie in unserer ausführlichen Datenschutzerklärung. 
                  Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
