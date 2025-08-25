import Link from "next/link"
import { ArrowLeft, Calculator, Heart, CreditCard, Users, Target, Award, Shield, Zap, Globe, TrendingUp, Euro, Calendar, Clock, CheckCircle, Star, Building, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata = {
  title: "Über uns - Rechner Tools | Professionelle Online-Rechner",
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

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Partnerschaften & Kooperationen</h2>
            
            <p className="mb-6">
              Wir arbeiten mit renommierten Partnern und Institutionen zusammen, um Ihnen 
              die bestmöglichen und aktuellsten Informationen und Berechnungen zu bieten. 
              Diese Kooperationen stellen sicher, dass unsere Tools stets auf dem neuesten Stand sind.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl border border-slate-200">
                <Building className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Öffentliche Institutionen</h3>
                <p className="text-sm text-muted-foreground">
                  Zusammenarbeit mit statistischen Ämtern und 
                  Finanzbehörden für aktuelle Daten und Vorgaben.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Bildungseinrichtungen</h3>
                <p className="text-sm text-muted-foreground">
                  Kooperationen mit Universitäten und Forschungseinrichtungen 
                  für wissenschaftlich fundierte Berechnungsmethoden.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200">
                <Users className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Fachverbände</h3>
                <p className="text-sm text-muted-foreground">
                  Mitgliedschaften in relevanten Fachverbänden für 
                  kontinuierlichen Wissensaustausch und Updates.
                </p>
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

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Unsere Unternehmenswerte</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold text-foreground">Qualität & Präzision</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Jeder unserer Rechner durchläuft umfangreiche Tests und Validierungen. 
                  Wir arbeiten mit offiziellen Datenquellen und aktuellen Formeln, um Ihnen 
                  die höchstmögliche Genauigkeit zu garantieren.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-foreground">Datenschutz & Sicherheit</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ihre Privatsphäre steht an erster Stelle. Alle Berechnungen erfolgen lokal 
                  in Ihrem Browser. Wir speichern keine persönlichen Daten und verwenden 
                  verschlüsselte Verbindungen.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                  <h3 className="font-semibold text-foreground">Innovation & Fortschritt</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Wir entwickeln unsere Tools kontinuierlich weiter und integrieren 
                  neue Technologien. Unser Ziel ist es, Ihnen immer die modernsten 
                  und benutzerfreundlichsten Lösungen anzubieten.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                  <h3 className="font-semibold text-foreground">Kundenorientierung</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ihr Feedback ist uns wichtig. Wir hören auf Ihre Wünsche und 
                  entwickeln unsere Rechner entsprechend Ihren Bedürfnissen. 
                  Kundenzufriedenheit steht im Mittelpunkt unseres Handelns.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Unsere Expertise</h2>
            
            <p className="mb-6">
              Unser Team verfügt über umfassende Erfahrung in verschiedenen Bereichen, 
              von Finanzwesen und Mathematik bis hin zu Softwareentwicklung und UX-Design. 
              Diese Kombination ermöglicht es uns, Rechner zu entwickeln, die sowohl 
              technisch präzise als auch benutzerfreundlich sind.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Finanzexpertise</h3>
                <p className="text-sm text-muted-foreground">
                  Über 10 Jahre Erfahrung in der Finanzbranche mit Fokus auf 
                  Steuerrecht, Buchhaltung und Finanzplanung.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <Calculator className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Mathematische Präzision</h3>
                <p className="text-sm text-muted-foreground">
                  Mathematiker und Statistiker sorgen für die korrekte 
                  Implementierung aller Berechnungsformeln und Algorithmen.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Technische Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Moderne Webtechnologien und agile Entwicklungsmethoden 
                  für optimale Performance und Benutzerfreundlichkeit.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Qualitätssicherung & Zertifizierungen</h2>
            
            <p className="mb-6">
              Wir legen größten Wert auf die Qualität unserer Rechner und deren Ergebnisse. 
              Unser Qualitätsmanagementsystem stellt sicher, dass alle Tools den höchsten 
              Standards entsprechen.
            </p>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Qualitätsstandards
                  </h3>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Regelmäßige Code-Reviews und Tests
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Validierung gegen offizielle Datenquellen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Performance-Optimierung und Monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Sicherheitsaudits und Updates
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-500" />
                    Compliance & Rechtliches
                  </h3>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      DSGVO-konforme Datenschutzrichtlinien
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Transparente Nutzungsbedingungen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Rechtliche Compliance aller Berechnungen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Regelmäßige rechtliche Überprüfungen
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Zukunftspläne & Entwicklung</h2>
            
            <p className="mb-6">
              Wir blicken optimistisch in die Zukunft und arbeiten kontinuierlich daran, 
              unser Angebot zu erweitern und zu verbessern. Unser Ziel ist es, Ihnen 
              eine umfassende Plattform für alle Ihre Berechnungsbedürfnisse zu bieten.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                  Neue Rechner & Features
                </h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Erweiterte Finanzrechner</li>
                  <li>• Immobilien- und Baufinanzierung</li>
                  <li>• Steueroptimierungs-Tools</li>
                  <li>• Mobile App-Entwicklung</li>
                  <li>• API für Entwickler</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-emerald-600" />
                  Internationale Expansion
                </h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Weitere europäische Länder</li>
                  <li>• Mehrsprachige Unterstützung</li>
                  <li>• Lokalisierte Steuersätze</li>
                  <li>• Regionale Compliance</li>
                  <li>• Lokale Partnerschaften</li>
                </ul>
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
