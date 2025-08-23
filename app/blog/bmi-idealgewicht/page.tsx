import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Activity, TrendingUp, Shield, Zap, Target, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Idealgewicht berechnen: BMI und gesunde Gewichtsziele | Rechner Tools",
  description: "Berechnen Sie Ihr Idealgewicht mit dem BMI und setzen Sie sich gesunde Gewichtsziele. Ein Leitfaden für nachhaltige Gewichtsoptimierung.",
  keywords: "idealgewicht berechnen, bmi idealgewicht, gesunde gewichtsziele, gewicht optimieren, bmi ziele, idealgewicht formel",
  openGraph: {
    title: "Idealgewicht berechnen: BMI und gesunde Gewichtsziele",
    description: "Berechnen Sie Ihr Idealgewicht mit dem BMI und setzen Sie sich gesunde Gewichtsziele. Ein Leitfaden für nachhaltige Gewichtsoptimierung.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/bmi-idealgewicht",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/bmi-idealgewicht",
    },
  },
}

export default function BMIIdealgewichtPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-md" />
              <div>
                <h2 className="text-2xl font-bold font-serif">Rechner Tools</h2>
                <p className="text-sm opacity-90 font-medium">Professionelle Online-Rechner</p>
              </div>
            </div>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
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
              <div className="p-2 rounded-lg bg-primary/10">
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Gesundheit
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Idealgewicht berechnen: BMI und gesunde Gewichtsziele
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Was ist das Idealgewicht und wie berechnen Sie es? In diesem umfassenden Leitfaden erfahren Sie alles über BMI, Körperfett, gesunde Gewichtsziele und wie Sie nachhaltig Ihr Wunschgewicht erreichen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist das Idealgewicht?</h2>
            
            <p className="mb-6">
              Das Idealgewicht ist das Gewicht, bei dem Sie sich körperlich und seelisch am wohlsten fühlen. Es ist nicht nur eine Zahl auf der Waage, sondern ein Gewichtsbereich, der Ihre Gesundheit optimal unterstützt.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Gesundheitliche Aspekte</h3>
                <ul className="text-sm space-y-2">
                  <li>• Optimaler Stoffwechsel</li>
                  <li>• Geringes Krankheitsrisiko</li>
                  <li>• Gute körperliche Leistungsfähigkeit</li>
                  <li>• Ausgewogener Hormonhaushalt</li>
                  <li>• Gesunde Organfunktionen</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Wohlbefinden</h3>
                <ul className="text-sm space-y-2">
                  <li>• Hohe Energie und Vitalität</li>
                  <li>• Gute Schlafqualität</li>
                  <li>• Ausgewogene Stimmung</li>
                  <li>• Selbstbewusstsein</li>
                  <li>• Lebensqualität</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">BMI als Grundlage für das Idealgewicht</h2>
            
            <p className="mb-6">
              Der Body-Mass-Index (BMI) ist ein bewährtes Instrument zur Einschätzung des Körpergewichts. Er berücksichtigt Größe und Gewicht und gibt einen ersten Anhaltspunkt für gesunde Gewichtsbereiche.
            </p>

            <div className="bg-accent/5 p-6 rounded-xl mb-6 border border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-4">BMI-Formel:</h3>
              <div className="text-center text-2xl font-bold text-foreground mb-4">
                BMI = Gewicht (kg) ÷ Größe (m)²
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Beispiel: Bei 70 kg und 1,70 m: 70 ÷ (1,70 × 1,70) = 24,2
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-center">
                <div className="text-lg font-bold text-red-700 mb-2">Untergewicht</div>
                <div className="text-2xl font-bold text-foreground">≤ 18,5</div>
                <p className="text-xs text-muted-foreground mt-2">Geringes Gewicht</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-xl border border-green-200 text-center">
                <div className="text-lg font-bold text-green-700 mb-2">Normalgewicht</div>
                <div className="text-2xl font-bold text-foreground">18,5 - 24,9</div>
                <p className="text-xs text-muted-foreground mt-2">Gesundes Gewicht</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-center">
                <div className="text-lg font-bold text-yellow-700 mb-2">Übergewicht</div>
                <div className="text-2xl font-bold text-foreground">25,0 - 29,9</div>
                <p className="text-xs text-muted-foreground mt-2">Erhöhtes Risiko</p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-center">
                <div className="text-lg font-bold text-red-700 mb-2">Adipositas</div>
                <div className="text-2xl font-bold text-foreground">≥ 30,0</div>
                <p className="text-xs text-muted-foreground mt-2">Hohes Risiko</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Idealgewicht nach verschiedenen Formeln</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Broca-Formel (einfach)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Für Männer:</p>
                    <div className="text-lg font-bold text-foreground mb-2">
                      Idealgewicht = (Größe in cm - 100) × 0,9
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beispiel: Bei 180 cm: (180 - 100) × 0,9 = 72 kg
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Für Frauen:</p>
                    <div className="text-lg font-bold text-foreground mb-2">
                      Idealgewicht = (Größe in cm - 100) × 0,85
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beispiel: Bei 165 cm: (165 - 100) × 0,85 = 55,25 kg
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Lorentz-Formel (präziser)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Für Männer:</p>
                    <div className="text-lg font-bold text-foreground mb-2">
                      Idealgewicht = (Größe in cm - 100) - [(Größe in cm - 150) ÷ 4]
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beispiel: Bei 180 cm: (180 - 100) - [(180 - 150) ÷ 4] = 72,5 kg
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Für Frauen:</p>
                    <div className="text-lg font-bold text-foreground mb-2">
                      Idealgewicht = (Größe in cm - 100) - [(Größe in cm - 150) ÷ 2]
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beispiel: Bei 165 cm: (165 - 100) - [(165 - 150) ÷ 2] = 57,5 kg
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Devine-Formel (medizinisch)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Für Männer:</p>
                    <div className="text-lg font-bold text-foreground mb-2">
                      Idealgewicht = 50 + 2,3 × (Größe in Zoll - 60)
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beispiel: Bei 180 cm (70,9 Zoll): 50 + 2,3 × (70,9 - 60) = 75,1 kg
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Für Frauen:</p>
                    <div className="text-lg font-bold text-foreground mb-2">
                      Idealgewicht = 45,5 + 2,3 × (Größe in Zoll - 60)
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Beispiel: Bei 165 cm (65 Zoll): 45,5 + 2,3 × (65 - 60) = 57 kg
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Körperfett als wichtiger Faktor</h2>
            
            <p className="mb-6">
              Neben dem Gewicht ist der Körperfettanteil entscheidend für die Gesundheit. Zwei Personen können das gleiche Gewicht haben, aber sehr unterschiedliche Körperfettanteile.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Gesunde Körperfettanteile</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">Männer:</p>
                    <p className="text-sm text-muted-foreground">6-24% (Alter 20-39)</p>
                    <p className="text-sm text-muted-foreground">11-27% (Alter 40-59)</p>
                    <p className="text-sm text-muted-foreground">13-29% (Alter 60+)</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Frauen:</p>
                    <p className="text-sm text-muted-foreground">16-33% (Alter 20-39)</p>
                    <p className="text-sm text-muted-foreground">19-35% (Alter 40-59)</p>
                    <p className="text-sm text-muted-foreground">22-36% (Alter 60+)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Körperfett messen</h3>
                <ul className="text-sm space-y-2">
                  <li>• Caliper-Messung (Körperfalten)</li>
                  <li>• Bioelektrische Impedanzanalyse</li>
                  <li>• DEXA-Scan (sehr präzise)</li>
                  <li>• Hydrostatisches Wiegen</li>
                  <li>• 3D-Körperscanner</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Gesunde Gewichtsziele setzen</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Realistische Ziele</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Wöchentliche Abnahme:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 0,5-1 kg pro Woche</li>
                      <li>• Nicht mehr als 1% des Körpergewichts</li>
                      <li>• Langfristig nachhaltig</li>
                      <li>• Verhindert Jo-Jo-Effekt</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Zeitplan:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 3-6 Monate für 10-15 kg</li>
                      <li>• 6-12 Monate für 15-25 kg</li>
                      <li>• Mehr als 25 kg: 1-2 Jahre</li>
                      <li>• Regelmäßige Anpassungen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">SMART-Ziele formulieren</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold mt-0.5">S</div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Spezifisch:</p>
                      <p className="text-sm text-muted-foreground">"Ich möchte 10 kg abnehmen" statt "Ich möchte abnehmen"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-bold mt-0.5">M</div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Messbar:</p>
                      <p className="text-sm text-muted-foreground">Regelmäßige Gewichtskontrollen und Körperfettmessungen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold mt-0.5">A</div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Attraktiv:</p>
                      <p className="text-sm text-muted-foreground">Ziele, die Sie motivieren und begeistern</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold mt-0.5">R</div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Realistisch:</p>
                      <p className="text-sm text-muted-foreground">Erreichbare Ziele in angemessener Zeit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-bold mt-0.5">T</div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Terminiert:</p>
                      <p className="text-sm text-muted-foreground">Konkrete Zeitvorgaben für Zwischenziele</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Faktoren, die das Idealgewicht beeinflussen</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Körperliche Faktoren</h3>
                <ul className="text-sm space-y-2">
                  <li>• Körpergröße und -bau</li>
                  <li>• Muskelmasse und -verteilung</li>
                  <li>• Knochendichte</li>
                  <li>• Genetische Veranlagung</li>
                  <li>• Alter und Geschlecht</li>
                  <li>• Stoffwechselrate</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Lebensstil-Faktoren</h3>
                <ul className="text-sm space-y-2">
                  <li>• Ernährungsgewohnheiten</li>
                  <li>• Bewegung und Sport</li>
                  <li>• Schlafqualität</li>
                  <li>• Stresslevel</li>
                  <li>• Berufliche Tätigkeit</li>
                  <li>• Medikamenteneinnahme</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Nachhaltige Gewichtsabnahme</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Ernährung</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Kaloriendefizit:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 300-500 kcal pro Tag</li>
                      <li>• Nicht unter Grundumsatz</li>
                      <li>• Ausgewogene Makronährstoffe</li>
                      <li>• Ausreichend Protein</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Ernährungsqualität:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Viel Gemüse und Obst</li>
                      <li>• Vollkornprodukte</li>
                      <li>• Mageres Protein</li>
                      <li>• Gesunde Fette</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Bewegung</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Krafttraining:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 2-3x pro Woche</li>
                      <li>• Alle Muskelgruppen</li>
                      <li>• Erhält Muskelmasse</li>
                      <li>• Erhöht Grundumsatz</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Ausdauertraining:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 3-5x pro Woche</li>
                      <li>• 150 Min. moderat</li>
                      <li>• 75 Min. intensiv</li>
                      <li>• Verbrennt Kalorien</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">Verhalten</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Gewohnheiten:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Regelmäßige Mahlzeiten</li>
                      <li>• Langsam essen</li>
                      <li>• Auf Hunger achten</li>
                      <li>• Emotionale Essanlässe</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Umgebung:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Gesunde Lebensmittel</li>
                      <li>• Kleine Teller</li>
                      <li>• Keine Ablenkungen</li>
                      <li>• Unterstützende Menschen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wann zum Arzt?</h2>
            
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
              <h3 className="text-xl font-bold text-red-700 mb-3">Warnsignale beachten</h3>
              <ul className="text-sm space-y-2">
                <li>• Ungewollte Gewichtsabnahme ohne Grund</li>
                <li>• Starke Gewichtsschwankungen</li>
                <li>• Essstörungen oder -verweigerung</li>
                <li>• Ständige Müdigkeit und Schwäche</li>
                <li>• Herz-Kreislauf-Probleme</li>
                <li>• Stoffwechselerkrankungen</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            
            <p className="mb-6">
              Das Idealgewicht ist individuell und hängt von vielen Faktoren ab. Der BMI gibt einen ersten Anhaltspunkt, aber Körperfett, Muskelmasse und Wohlbefinden sind ebenso wichtig. Setzen Sie sich realistische Ziele und streben Sie nachhaltige Veränderungen an. Nutzen Sie unseren BMI-Rechner als Ausgangspunkt für Ihre Gewichtsziele.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Berechnen Sie Ihr Idealgewicht
              </h3>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unseren professionellen BMI-Rechner, um Ihr Idealgewicht zu ermitteln und gesunde Gewichtsziele zu setzen.
              </p>
              <Link href="/#bmi">
                <Button className="w-full">
                  <Calculator className="h-4 w-4 mr-2" />
                  Jetzt BMI berechnen
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
