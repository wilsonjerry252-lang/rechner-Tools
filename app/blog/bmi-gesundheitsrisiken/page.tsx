import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Heart, TrendingUp, Shield, Zap, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "BMI und Gesundheitsrisiken: Was Sie wissen müssen",
  description: "Verstehen Sie die Gesundheitsrisiken verschiedener BMI-Kategorien. Ein Leitfaden für Prävention und gesundheitsbewusstes Handeln.",
  keywords: "bmi gesundheitsrisiken, bmi kategorien, gesundheit risiken, bmi bewertung, gesundheitsgefahren, bmi prävention",
  openGraph: {
    title: "BMI und Gesundheitsrisiken: Was Sie wissen müssen",
    description: "Verstehen Sie die Gesundheitsrisiken verschiedener BMI-Kategorien. Ein Leitfaden für Prävention und gesundheitsbewusstes Handeln.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/bmi-gesundheitsrisiken",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/bmi-gesundheitsrisiken",
      "x-default": "https://www.rechnerjetzt.de/blog/bmi-gesundheitsrisiken",
    },
  },
}

export default function BMIGesundheitsrisikenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h3 className="text-2xl font-bold font-serif">Rechner Tools</h3>
                <p className="text-sm opacity-90 font-medium">Professionelle Online-Rechner</p>
              </div>
            </div>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="text-secondary-foreground hover:bg-secondary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück zum Blog
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-card rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Heart className="h-5 w-5 text-secondary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                Gesundheit
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              BMI und Gesundheitsrisiken: Was Sie wissen müssen
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>28. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Der Body-Mass-Index (BMI) ist mehr als nur eine Zahl - er kann wichtige Hinweise auf potenzielle Gesundheitsrisiken geben. In diesem Artikel erfahren Sie, welche Risiken mit verschiedenen BMI-Werten verbunden sind und wie Sie diese minimieren können.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">BMI-Kategorien und Gesundheitsrisiken</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Untergewicht (BMI &lt; 18,5)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Gesundheitsrisiken:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Mangelernährung</li>
                      <li>• Geschwächtes Immunsystem</li>
                      <li>• Osteoporose</li>
                      <li>• Unfruchtbarkeit</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Ursachen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Essstörungen</li>
                      <li>• Chronische Erkrankungen</li>
                      <li>• Stoffwechselstörungen</li>
                      <li>• Psychische Probleme</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Normalgewicht (BMI 18,5 - 24,9)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Gesundheitsstatus:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Optimaler Gesundheitszustand</li>
                      <li>• Niedriges Krankheitsrisiko</li>
                      <li>• Gute körperliche Leistungsfähigkeit</li>
                      <li>• Ausgewogene Energiebilanz</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Empfehlungen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Gewicht halten</li>
                      <li>• Regelmäßige Bewegung</li>
                      <li>• Ausgewogene Ernährung</li>
                      <li>• Regelmäßige Vorsorge</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">Übergewicht (BMI 25,0 - 29,9)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Gesundheitsrisiken:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Erhöhter Blutdruck</li>
                      <li>• Diabetes Typ 2</li>
                      <li>• Herz-Kreislauf-Erkrankungen</li>
                      <li>• Gelenkprobleme</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Maßnahmen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Gewichtsreduktion anstreben</li>
                      <li>• Mehr Bewegung</li>
                      <li>• Ernährungsumstellung</li>
                      <li>• Ärztliche Überwachung</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-3">Adipositas (BMI ≥ 30,0)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Erhebliche Gesundheitsrisiken:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Schwere Herz-Kreislauf-Erkrankungen</li>
                      <li>• Diabetes Typ 2</li>
                      <li>• Schlafapnoe</li>
                      <li>• Krebserkrankungen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Dringende Maßnahmen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Professionelle Hilfe suchen</li>
                      <li>• Medizinische Überwachung</li>
                      <li>• Strukturiertes Abnehmprogramm</li>
                      <li>• Psychologische Unterstützung</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Spezifische Gesundheitsrisiken im Detail</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Herz-Kreislauf-Erkrankungen</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Übergewicht und Adipositas erhöhen das Risiko für:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Bluthochdruck</li>
                  <li>• Arteriosklerose</li>
                  <li>• Herzinfarkt</li>
                  <li>• Schlaganfall</li>
                  <li>• Herzinsuffizienz</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Stoffwechselerkrankungen</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Häufige Folgeerkrankungen sind:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Diabetes Typ 2</li>
                  <li>• Fettstoffwechselstörungen</li>
                  <li>• Gicht</li>
                  <li>• Metabolisches Syndrom</li>
                  <li>• Insulinresistenz</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Weitere Gesundheitsrisiken</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Gelenk- und Skeletterkrankungen</h3>
                <p className="text-sm text-muted-foreground">
                  Übergewicht belastet Gelenke und kann zu Arthrose, Bandscheibenvorfällen und chronischen Rückenschmerzen führen.
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Atemwegserkrankungen</h3>
                <p className="text-sm text-muted-foreground">
                  Schlafapnoe, Kurzatmigkeit und eingeschränkte Lungenfunktion sind häufige Probleme bei Übergewicht.
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Psychische Erkrankungen</h3>
                <p className="text-sm text-muted-foreground">
                  Depressionen, Angststörungen und ein vermindertes Selbstwertgefühl können Folge von Übergewicht sein.
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Krebserkrankungen</h3>
                <p className="text-sm text-muted-foreground">
                  Übergewicht erhöht das Risiko für verschiedene Krebsarten, darunter Brust-, Darm- und Gebärmutterkrebs.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Risikofaktoren und deren Bewertung</h2>
            
            <div className="bg-accent/5 p-6 rounded-xl mb-6 border border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Zusätzliche Risikofaktoren neben dem BMI:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-accent mb-2">Körperliche Faktoren:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Taillenumfang (Bauchfett)</li>
                    <li>• Körperfettverteilung</li>
                    <li>• Muskelmasse</li>
                    <li>• Alter und Geschlecht</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">Lebensstil-Faktoren:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Bewegungsmangel</li>
                    <li>• Ungesunde Ernährung</li>
                    <li>• Rauchen und Alkohol</li>
                    <li>• Stress und Schlafmangel</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Prävention und Risikominimierung</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Ernährung</h3>
                <ul className="text-sm space-y-2">
                  <li>• Ausgewogene, kalorienbewusste Ernährung</li>
                  <li>• Viel Gemüse, Obst und Vollkornprodukte</li>
                  <li>• Mageres Protein und gesunde Fette</li>
                  <li>• Regelmäßige Mahlzeiten</li>
                  <li>• Ausreichend Flüssigkeit</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Bewegung</h3>
                <ul className="text-sm space-y-2">
                  <li>• Mindestens 150 Min. moderate Bewegung pro Woche</li>
                  <li>• Krafttraining 2-3x pro Woche</li>
                  <li>• Alltagsbewegung steigern</li>
                  <li>• Sportarten finden, die Spaß machen</li>
                  <li>• Schrittweise Steigerung der Intensität</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wann sollten Sie einen Arzt aufsuchen?</h2>
            
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
              <h3 className="text-lg font-bold text-red-700 mb-4">Suchen Sie ärztliche Hilfe bei:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>BMI über 30 (Adipositas)</li>
                <li>BMI unter 18,5 (Untergewicht)</li>
                <li>Plötzliche Gewichtsveränderungen</li>
                <li>Begleitsymptome wie Kurzatmigkeit, Brustschmerzen</li>
                <li>Essstörungen oder psychische Probleme</li>
                <li>Chronische Erkrankungen</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Monitoring und Vorsorge</h2>
            
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Regelmäßige Gewichtskontrolle:</strong> Wöchentliches Wiegen zur gleichen Zeit</li>
              <li><strong>BMI-Tracking:</strong> Monatliche BMI-Berechnung und Dokumentation</li>
              <li><strong>Vorsorgeuntersuchungen:</strong> Regelmäßige ärztliche Kontrollen</li>
              <li><strong>Blutwerte:</strong> Cholesterin, Blutzucker und Blutdruck überwachen</li>
              <li><strong>Körpermaße:</strong> Taillenumfang und andere Maße dokumentieren</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Der BMI ist ein wichtiger Indikator für potenzielle Gesundheitsrisiken, aber nicht der einzige Faktor. Eine ganzheitliche Betrachtung Ihres Lebensstils, Ihrer Ernährung und Bewegung ist entscheidend für die Prävention von Erkrankungen. Bei Auffälligkeiten sollten Sie frühzeitig ärztliche Hilfe in Anspruch nehmen.
            </p>

            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-secondary" />
                Überprüfen Sie Ihren BMI
              </h3>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unseren professionellen BMI-Rechner, um Ihren aktuellen BMI zu ermitteln und potenzielle Gesundheitsrisiken zu erkennen.
              </p>
              <Link href="/">
                <Button className="bg-secondary hover:bg-secondary/90">
                  Zum BMI-Rechner
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
