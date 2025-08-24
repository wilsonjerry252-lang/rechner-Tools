import Link from "next/link"
import { ArrowLeft, Calculator, Heart, CreditCard, Users, Target, Award, Shield, Zap, Globe, TrendingUp, Euro, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata = {
  title: "Über uns - Rechner Tools | Kostenlose Online-Rechner",
  description:
    "Erfahren Sie mehr über Rechner Tools - Ihre vertrauenswürdige Quelle für kostenlose, professionelle Online-Rechner im deutschsprachigen Raum. Entdecken Sie unsere Mission, Werte und das Team dahinter.",
  keywords: "über uns, rechner tools, online rechner, deutschland, österreich, schweiz, mehrwertsteuer rechner, prozentrechner, arbeitstage rechner",
  alternates: {
    canonical: "https://www.rechnerjetzt.de/ueber-uns",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/ueber-uns",
      "x-default": "https://www.rechnerjetzt.de/ueber-uns",
    },
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 logo-container">
              <Image src="/logo.png" alt="Rechner Tools Logo" width={48} height={48} className="h-12 w-12 rounded-full shadow-md" />
              <div>
                        <h3 className="text-3xl font-black logo-text logo-gradient logo-glow tracking-tight">
          Rechner Tools
        </h3>
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
          <h1 className="text-4xl font-bold font-serif text-foreground mb-6">Über Rechner Tools</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-xl leading-relaxed mb-8">
              Willkommen bei <strong className="text-foreground">Rechner Tools</strong> – Ihrer vertrauenswürdigen
              Quelle für professionelle Online-Rechner im deutschsprachigen Raum. Seit unserer Gründung haben wir es uns zur Aufgabe gemacht, 
              komplexe Berechnungen für Privatpersonen und Unternehmen einfach und zugänglich zu machen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-6">Unsere Geschichte und Mission</h2>
            
            <p className="mb-6">
              Rechner Tools wurde aus der Überzeugung heraus gegründet, dass professionelle Berechnungstools nicht teuer oder kompliziert sein müssen. 
              In einer Zeit, in der die Digitalisierung rasant voranschreitet und die Anforderungen an präzise Berechnungen stetig steigen, 
              bieten wir eine Lösung, die sowohl für Einsteiger als auch für Experten geeignet ist.
            </p>

            <p className="mb-8">
              Unsere Mission ist es, hochwertige, zuverlässige und benutzerfreundliche Rechner kostenlos zur Verfügung zu stellen. 
              Wir glauben daran, dass Wissen und Werkzeuge für alle zugänglich sein sollten, unabhängig von finanziellen Möglichkeiten 
              oder technischen Vorkenntnissen.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Unsere Mission</h3>
                <p className="text-sm">Kostenlose, präzise und benutzerfreundliche Rechner für alle bereitzustellen, 
                die komplexe Berechnungen einfach und verständlich machen.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Unser Team</h3>
                <p className="text-sm">Experten aus Finanzwesen, Mathematik, Gesundheit und Technologie arbeiten zusammen, 
                um die besten Lösungen zu entwickeln.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Unsere Werte</h3>
                <p className="text-sm">Genauigkeit, Transparenz, Benutzerfreundlichkeit und Innovation stehen im Mittelpunkt 
                unserer täglichen Arbeit.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Unsere Rechner im Überblick</h2>
            
            <p className="mb-6">
              Wir bieten eine umfassende Palette von Rechnern, die alle wichtigen Bereiche des täglichen Lebens abdecken. 
              Von finanziellen Berechnungen bis hin zu Zeitplanung - unsere Tools sind darauf ausgelegt, 
              Ihnen bei der Lösung komplexer Aufgaben zu helfen.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg">
                <Euro className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mehrwertsteuerrechner</h3>
                  <p>
                    Präzise MwSt-Berechnungen für Deutschland (19%), Österreich (20%) und die Schweiz (8.1%).
                    Unterstützt sowohl Brutto-zu-Netto als auch Netto-zu-Brutto Berechnungen mit aktuellen Steuersätzen.
                    Ideal für Unternehmen, Selbstständige und Privatpersonen, die korrekte Preisberechnungen benötigen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg">
                <Calculator className="h-8 w-8 text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Prozentrechner</h3>
                  <p>
                    Vielseitiger Rechner für alle Arten von Prozentberechnungen: Rabatte, Aufschläge, 
                    Gewinnmargen und mehr. Perfekt für Einkäufe, Geschäftsberechnungen und persönliche Finanzplanung. 
                    Benutzerfreundlich und mit praktischen Beispielen für besseres Verständnis.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-accent/5 to-transparent rounded-lg">
                <Calendar className="h-8 w-8 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Arbeitstage-Rechner</h3>
                  <p>
                    Professioneller Rechner für die Berechnung von Arbeitstagen zwischen zwei Daten. 
                    Berücksichtigt alle gesetzlichen Feiertage in Deutschland, Österreich und der Schweiz. 
                    Unverzichtbar für Projektplanung, Urlaubsplanung und Arbeitszeitberechnung.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg">
                <TrendingUp className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Inflationsrechner</h3>
                  <p>
                    Verstehen Sie, wie sich die Kaufkraft Ihres Geldes über die Zeit entwickelt hat. 
                    Basierend auf offiziellen Inflationsraten des Statistischen Bundesamts und anderen 
                    offiziellen Quellen. Wichtig für langfristige Finanzplanung und Investitionsentscheidungen.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Warum Rechner Tools wählen?</h2>
            
            <p className="mb-6">
              In einer Welt voller komplexer Berechnungen und sich ständig ändernder Regularien 
              bieten wir Ihnen die Sicherheit und Zuverlässigkeit, die Sie benötigen. 
              Unsere Rechner sind mehr als nur einfache Tools - sie sind Ihre Partner bei wichtigen Entscheidungen.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>
                  <strong>100% kostenlos:</strong> Alle unsere Rechner sind völlig kostenfrei nutzbar, 
                  ohne versteckte Gebühren oder Abonnements
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>
                  <strong>Aktuelle Daten:</strong> Wir verwenden immer die neuesten Steuersätze, 
                  Formeln und gesetzlichen Vorgaben für präzise Ergebnisse
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>
                  <strong>Datenschutz:</strong> Ihre Eingaben werden nicht gespeichert oder weitergegeben. 
                  Wir respektieren Ihre Privatsphäre und schützen Ihre Daten
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>
                  <strong>Mobile-optimiert:</strong> Perfekt nutzbar auf allen Geräten - vom Smartphone 
                  bis zum Desktop-Computer
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>
                  <strong>DACH-optimiert:</strong> Speziell entwickelt für Deutschland, Österreich und die Schweiz 
                  mit länderspezifischen Besonderheiten
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>
                  <strong>Regelmäßige Updates:</strong> Unsere Tools werden kontinuierlich verbessert und 
                  an neue Anforderungen angepasst
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Unser technischer Ansatz</h2>
            
            <p className="mb-6">
              Hinter jedem unserer Rechner steckt moderne Technologie und sorgfältige Entwicklung. 
              Wir verwenden die neuesten Webtechnologien, um Ihnen eine schnelle, zuverlässige und 
              benutzerfreundliche Erfahrung zu bieten.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Moderne Technologie</h3>
                <ul className="text-sm space-y-2">
                  <li>• Next.js für optimale Performance</li>
                  <li>• TypeScript für Code-Qualität</li>
                  <li>• Responsive Design für alle Geräte</li>
                  <li>• SEO-optimierte Struktur</li>
                </ul>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Qualitätssicherung</h3>
                <ul className="text-sm space-y-2">
                  <li>• Regelmäßige Tests und Updates</li>
                  <li>• Validierung aller Berechnungen</li>
                  <li>• Benutzer-Feedback-Integration</li>
                  <li>• Kontinuierliche Verbesserung</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Unser Versprechen an Sie</h2>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Verlässlichkeit und Qualität</h3>
              <p className="mb-4">
                Wir verpflichten uns, Ihnen stets genaue, aktuelle und benutzerfreundliche Rechner zur Verfügung zu
                stellen. Unsere Tools werden regelmäßig überprüft und aktualisiert, um sicherzustellen, dass Sie immer
                die korrekten Ergebnisse erhalten.
              </p>
              <p>
                Ihr Vertrauen ist unser wichtigstes Gut. Deshalb arbeiten wir kontinuierlich daran, 
                unsere Rechner zu verbessern und neue Funktionen hinzuzufügen, die Ihren Bedürfnissen entsprechen. 
                Bei Rechner Tools stehen Sie und Ihre Anforderungen im Mittelpunkt unserer Bemühungen.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Kontakt und Support</h2>
            
            <p className="mb-6">
              Haben Sie Fragen, Anregungen oder benötigen Sie Unterstützung bei der Nutzung unserer Rechner? 
              Unser Team steht Ihnen gerne zur Verfügung. Wir freuen uns über Ihr Feedback und sind stets 
              bestrebt, unsere Dienstleistungen zu verbessern.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-semibold text-foreground mb-3">Feedback und Anregungen</h3>
                <p className="text-sm text-muted-foreground">
                  Teilen Sie uns Ihre Erfahrungen mit und helfen Sie uns dabei, 
                  unsere Rechner noch besser zu machen.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-semibold text-foreground mb-3">Technischer Support</h3>
                <p className="text-sm text-muted-foreground">
                  Bei technischen Problemen oder Fragen zur Nutzung 
                  unserer Tools helfen wir Ihnen gerne weiter.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/kontakt">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
