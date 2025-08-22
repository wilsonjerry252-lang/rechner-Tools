import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Database, Cookie } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Rechner Tools",
  description:
    "Datenschutzerklärung von Rechner Tools - Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO.",
  robots: "noindex, nofollow",
}

export default function DatenschutzPage() {
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
              <h1 className="text-xl font-serif font-bold">Datenschutzerklärung</h1>
              <p className="text-sm opacity-90">Schutz Ihrer Daten</p>
            </div>
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
            <div className="grid md:grid-cols-3 gap-4">
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
                <h4 className="font-semibold mb-1">Minimale Cookies</h4>
                <p className="text-sm text-muted-foreground">Nur technisch notwendige Cookies werden verwendet.</p>
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
              <h3 className="font-semibold mb-3">4. Hosting und Content Delivery Networks (CDN)</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten,
                  die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">5. Ihre Rechte</h3>
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
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">6. Kontakt</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an: datenschutz@rechner-tools.de</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
