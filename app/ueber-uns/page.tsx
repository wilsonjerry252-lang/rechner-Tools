import Link from "next/link"
import { ArrowLeft, Calculator, Heart, CreditCard, Users, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Über uns - Rechner Tools | Professionelle Online-Rechner",
  description:
    "Erfahren Sie mehr über Rechner Tools - Ihre vertrauenswürdige Quelle für kostenlose, professionelle Online-Rechner im deutschsprachigen Raum.",
  keywords: "über uns, rechner tools, online rechner, deutschland, österreich, schweiz",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 logo-container">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h1 className="text-3xl font-black logo-text logo-gradient logo-glow tracking-tight">
                  Rechner Tools
                </h1>
                <p className="text-sm logo-subtitle text-blue-100 tracking-wide">
                  Professionelle Online-Rechner
                </p>
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
        <div className="bg-card rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold font-serif text-foreground mb-6">Über uns</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-xl leading-relaxed mb-8">
              Willkommen bei <strong className="text-foreground">Rechner Tools</strong> – Ihrer vertrauenswürdigen
              Quelle für professionelle Online-Rechner im deutschsprachigen Raum.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Unsere Mission</h3>
                <p className="text-sm">Kostenlose, präzise und benutzerfreundliche Rechner für alle bereitzustellen.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Unser Team</h3>
                <p className="text-sm">Experten aus Finanzwesen, Gesundheit und Technologie arbeiten zusammen.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Unsere Werte</h3>
                <p className="text-sm">Genauigkeit, Transparenz und Benutzerfreundlichkeit stehen im Mittelpunkt.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Was wir anbieten</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg">
                <Calculator className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mehrwertsteuerrechner</h3>
                  <p>
                    Präzise MwSt-Berechnungen für Deutschland (19%), Österreich (20%) und die Schweiz (7,7%).
                    Unterstützt sowohl Brutto-zu-Netto als auch Netto-zu-Brutto Berechnungen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg">
                <Heart className="h-8 w-8 text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">BMI-Rechner</h3>
                  <p>
                    Berechnen Sie Ihren Body-Mass-Index mit metrischen oder imperialen Einheiten. Inklusive
                    WHO-Kategorisierung und Gesundheitsempfehlungen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-accent/5 to-transparent rounded-lg">
                <CreditCard className="h-8 w-8 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Kreditrechner</h3>
                  <p>
                    Berechnen Sie Ihre monatlichen Raten für Privatkredite, Autokredite und Hypotheken. Mit
                    detailliertem Tilgungsplan und Zinsübersicht.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Warum Rechner Tools?</h2>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>
                  <strong>100% kostenlos:</strong> Alle unsere Rechner sind völlig kostenfrei nutzbar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>
                  <strong>Aktuelle Daten:</strong> Wir verwenden immer die neuesten Steuersätze und Formeln
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>
                  <strong>Datenschutz:</strong> Ihre Eingaben werden nicht gespeichert oder weitergegeben
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>
                  <strong>Mobile-optimiert:</strong> Perfekt nutzbar auf allen Geräten
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>
                  <strong>Mehrsprachig:</strong> Optimiert für Deutschland, Österreich und die Schweiz
                </span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Unser Versprechen</h3>
              <p>
                Wir verpflichten uns, Ihnen stets genaue, aktuelle und benutzerfreundliche Rechner zur Verfügung zu
                stellen. Unsere Tools werden regelmäßig überprüft und aktualisiert, um sicherzustellen, dass Sie immer
                die korrekten Ergebnisse erhalten. Ihr Vertrauen ist unser wichtigstes Gut.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
