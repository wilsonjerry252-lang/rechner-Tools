import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Betreiber der Website</h3>
              <div className="space-y-1 text-sm">
                <p>MUHAMMAD USMAN KHAN</p>
                <p>Mithrasstraße 16</p>
                <p>60439 Frankfurt am Main</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Kontakt
              </h3>
              <div className="space-y-1 text-sm">
                <p>Telefon: +49 176 41106680</p>
                <p>E-Mail: muk.kt199@gmail.com</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <div className="space-y-1 text-sm">
                <p>MUHAMMAD USMAN KHAN</p>
                <p>Mithrasstraße 16</p>
                <p>60439 Frankfurt am Main</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Haftungsausschluss</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground">Haftung für Inhalte</h4>
                  <p>
                    Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Die Berechnungen dienen nur zur Orientierung und ersetzen keine
                    professionelle Beratung.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Haftung für Links</h4>
                  <p>
                    Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
                    Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Urheberrecht</h4>
                  <p>
                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                    deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                    außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers.
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
