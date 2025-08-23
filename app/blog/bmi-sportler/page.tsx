import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Activity, TrendingUp, Shield, Zap, Dumbbell, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata = {
  title: "BMI für Sportler: Warum er bei Athleten irreführend ist",
  description: "Erfahren Sie, warum der BMI bei Sportlern und Athleten oft irreführend ist und welche alternativen Messmethoden es gibt. Ein Leitfaden für Sportler und Trainer.",
  keywords: "bmi sportler, bmi athleten, muskelmasse bmi, sportler gewicht, bmi alternativen, körperfett sportler",
  openGraph: {
    title: "BMI für Sportler: Warum er bei Athleten irreführend ist",
    description: "Erfahren Sie, warum der BMI bei Sportlern und Athleten oft irreführend ist und welche alternativen Messmethoden es gibt. Ein Leitfaden für Sportler und Trainer.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/bmi-sportler",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/bmi-sportler",
    },
  },
}

export default function BMISportlerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Rechner Tools Logo" width={48} height={48} className="h-12 w-12 rounded-md" />
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
              BMI für Sportler: Warum der BMI bei Athleten irreführend ist
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
              Der Body-Mass-Index (BMI) ist ein bewährtes Instrument zur Einschätzung des Körpergewichts. Doch bei Sportlern und Athleten kann er zu falschen Schlüssen führen. Warum ist das so und welche Alternativen gibt es?
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Das Problem mit dem BMI bei Sportlern</h2>
            
            <p className="mb-6">
              Der BMI berücksichtigt nur Größe und Gewicht, nicht aber die Körperzusammensetzung. Bei Sportlern mit hoher Muskelmasse kann der BMI fälschlicherweise auf Übergewicht oder sogar Adipositas hinweisen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-3">Beispiele für irreführende BMI-Werte</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">Leichtathlet (100m):</p>
                    <p className="text-sm text-muted-foreground">Größe: 1,85m, Gewicht: 85kg</p>
                    <p className="text-sm text-muted-foreground">BMI: 24,8 (Normalgewicht)</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Bodybuilder:</p>
                    <p className="text-sm text-muted-foreground">Größe: 1,80m, Gewicht: 95kg</p>
                    <p className="text-sm text-muted-foreground">BMI: 29,3 (Übergewicht)</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Rugby-Spieler:</p>
                    <p className="text-sm text-muted-foreground">Größe: 1,90m, Gewicht: 110kg</p>
                    <p className="text-sm text-muted-foreground">BMI: 30,5 (Adipositas)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Warum ist der BMI irreführend?</h3>
                <ul className="text-sm space-y-2">
                  <li>• Berücksichtigt keine Muskelmasse</li>
                  <li>• Unterscheidet nicht zwischen Fett und Muskeln</li>
                  <li>• Ignoriert die Körperzusammensetzung</li>
                  <li>• Kann gesunde Athleten als übergewichtig einstufen</li>
                  <li>• Nicht für Leistungssportler entwickelt</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Sportarten und BMI-Verzerrungen</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Kraftsport und Bodybuilding</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Charakteristika:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Hohe Muskelmasse</li>
                      <li>• Niedriger Körperfettanteil</li>
                      <li>• Schwere Knochen</li>
                      <li>• Kompakte Körperform</li>
                      <li>• Intensive Krafttrainings</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">BMI-Problematik:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Oft über 25 (Übergewicht)</li>
                      <li>• Manchmal über 30 (Adipositas)</li>
                      <li>• Trotz optimaler Gesundheit</li>
                      <li>• Falsche Risikobewertung</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Kampfsport und Kampfsportarten</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Charakteristika:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Ausgewogene Muskelmasse</li>
                      <li>• Geringer Körperfettanteil</li>
                      <li>• Schnelle Reaktionen</li>
                      <li>• Ausdauer und Kraft</li>
                      <li>• Gewichtsklassen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">BMI-Problematik:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Kann leicht erhöht sein</li>
                      <li>• Trotz optimaler Fitness</li>
                      <li>• Gewichtsklassen beachten</li>
                      <li>• Körperfett wichtiger als BMI</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Ausdauersport</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Charakteristika:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Geringe Muskelmasse</li>
                      <li>• Sehr niedriger Körperfettanteil</li>
                      <li>• Leichte Knochen</li>
                      <li>• Schlanke Körperform</li>
                      <li>• Lange Trainingseinheiten</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">BMI-Problematik:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Oft unter 18,5 (Untergewicht)</li>
                      <li>• Trotz optimaler Leistung</li>
                      <li>• Falsche Gesundheitsbewertung</li>
                      <li>• Energieverfügbarkeit beachten</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Alternative Messmethoden für Sportler</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Körperfettmessung</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Methoden:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Caliper-Messung (Körperfalten)</li>
                      <li>• Bioelektrische Impedanzanalyse</li>
                      <li>• DEXA-Scan (sehr präzise)</li>
                      <li>• Hydrostatisches Wiegen</li>
                      <li>• 3D-Körperscanner</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Vorteile:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Unterscheidet Fett und Muskeln</li>
                      <li>• Genauere Gesundheitsbewertung</li>
                      <li>• Für Sportler entwickelt</li>
                      <li>• Trainingsfortschritt messbar</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Körperzusammensetzung</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Messgrößen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Körperfettanteil (%)</li>
                      <li>• Muskelmasse (kg)</li>
                      <li>• Knochenmasse (kg)</li>
                      <li>• Körperwasser (kg)</li>
                      <li>• Viszerales Fett</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Zielwerte für Sportler:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Männer: 6-15% Körperfett</li>
                      <li>• Frauen: 14-24% Körperfett</li>
                      <li>• Hohe Muskelmasse</li>
                      <li>• Geringes viszerales Fett</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-xl font-bold text-accent mb-3">Taillenumfang und WHR</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Messungen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Taillenumfang (cm)</li>
                      <li>• Hüftumfang (cm)</li>
                      <li>• Taille-Hüfte-Verhältnis</li>
                      <li>• Bauchumfang</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Vorteile:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Einfach zu messen</li>
                      <li>• Geringe Kosten</li>
                      <li>• Gesundheitsrisiko einschätzbar</li>
                      <li>• Für alle Sportarten geeignet</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Sportartspezifische Bewertung</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Kraftsport und Bodybuilding</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Optimale Werte:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Körperfett: 6-12% (Männer)</li>
                      <li>• Körperfett: 14-20% (Frauen)</li>
                      <li>• Hohe Muskelmasse</li>
                      <li>• BMI kann 25-30 betragen</li>
                      <li>• Taillenumfang &lt; 94cm (M) / &lt; 80cm (F)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Bewertung:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Körperfett wichtiger als BMI</li>
                      <li>• Muskelmasse berücksichtigen</li>
                      <li>• Kraftwerte beachten</li>
                      <li>• Körperform bewerten</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Ausdauersport</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Optimale Werte:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Körperfett: 8-15% (Männer)</li>
                      <li>• Körperfett: 16-22% (Frauen)</li>
                      <li>• BMI: 18,5-24,9</li>
                      <li>• Geringe Muskelmasse</li>
                      <li>• Schlanke Körperform</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Bewertung:</p>
                    <ul className="text-sm space-y-1">
                      <li>• BMI kann aussagekräftig sein</li>
                      <li>• Körperfett beachten</li>
                      <li>• Energieverfügbarkeit prüfen</li>
                      <li>• Leistungsfähigkeit messen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Kampfsport</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Optimale Werte:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Körperfett: 8-18% (Männer)</li>
                      <li>• Körperfett: 16-24% (Frauen)</li>
                      <li>• Ausgewogene Muskelmasse</li>
                      <li>• BMI: 20-27</li>
                      <li>• Schnelle Reaktionen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Bewertung:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Gewichtsklassen beachten</li>
                      <li>• Körperfett optimieren</li>
                      <li>• Kraft-Ausdauer-Verhältnis</li>
                      <li>• Wettkampfgewicht finden</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für Sportler</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Regelmäßige Messungen</h3>
                <ul className="text-sm space-y-2">
                  <li>• Körperfett alle 4-6 Wochen messen</li>
                  <li>• Muskelmasse dokumentieren</li>
                  <li>• Trainingsfortschritt verfolgen</li>
                  <li>• Saisonale Schwankungen beachten</li>
                  <li>• Professionelle Messungen nutzen</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Ganzheitliche Bewertung</h3>
                <ul className="text-sm space-y-2">
                  <li>• Nicht nur auf eine Zahl fixieren</li>
                  <li>• Körperfett und Muskeln berücksichtigen</li>
                  <li>• Leistungsfähigkeit bewerten</li>
                  <li>• Wohlbefinden beachten</li>
                  <li>• Sportartspezifische Ziele setzen</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">Professionelle Beratung</h3>
                <ul className="text-sm space-y-2">
                  <li>• Sportmediziner konsultieren</li>
                  <li>• Ernährungsberater einbeziehen</li>
                  <li>• Trainer beraten lassen</li>
                  <li>• Regelmäßige Check-ups</li>
                  <li>• Individuelle Ziele definieren</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wann ist der BMI bei Sportlern nützlich?</h2>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mb-6">
              <h3 className="text-xl font-bold text-yellow-700 mb-3">BMI kann nützlich sein bei:</h3>
              <ul className="text-sm space-y-2">
                <li>• Freizeitsportlern mit normaler Muskelmasse</li>
                <li>• Ausdauersportlern (Läufer, Radfahrer)</li>
                <li>• Als grober Richtwert für Anfänger</li>
                <li>• Bei langfristigen Gewichtsveränderungen</li>
                <li>• Als Teil einer umfassenden Bewertung</li>
                <li>• Bei der Beurteilung von Untergewicht</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            
            <p className="mb-6">
              Der BMI ist ein nützliches Instrument für die allgemeine Bevölkerung, aber bei Sportlern und Athleten kann er zu falschen Schlüssen führen. Besonders bei Kraftsportlern mit hoher Muskelmasse ist der BMI oft irreführend. Für eine genaue Bewertung sollten Sportler auf alternative Messmethoden wie Körperfettmessung, Muskelmassebestimmung und sportartspezifische Kriterien zurückgreifen. Eine ganzheitliche Betrachtung unter Berücksichtigung der individuellen Sportart und Ziele ist der Schlüssel zu einer korrekten Bewertung.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                BMI für Sportler berechnen
              </h3>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unseren professionellen BMI-Rechner als Ausgangspunkt und kombinieren Sie ihn mit anderen Messmethoden für eine umfassende Bewertung.
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
