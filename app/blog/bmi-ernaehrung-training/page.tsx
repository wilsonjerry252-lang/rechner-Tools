import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Heart, TrendingUp, Shield, Zap, Utensils, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "BMI, Ernährung und Training: Der perfekte Plan | Rechner Tools",
  description: "Erstellen Sie Ihren persönlichen Plan mit BMI-Berechnung, ausgewogener Ernährung und effektivem Training. Erreichen Sie Ihre Gesundheitsziele nachhaltig.",
  keywords: "bmi ernährung training, gesundheitsplan, fitness plan, gewichtsabnahme, muskelaufbau, gesunde ernährung",
  openGraph: {
    title: "BMI, Ernährung und Training: Der perfekte Plan",
    description: "Erstellen Sie Ihren persönlichen Plan mit BMI-Berechnung, ausgewogener Ernährung und effektivem Training. Erreichen Sie Ihre Gesundheitsziele nachhaltig.",
    type: "article",
    publishedTime: "2024-12-20T10:00:00Z",
    authors: ["Rechner Tools"],
  },
}

export default function BMIErnaehrungTrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h1 className="text-2xl font-bold font-serif">Rechner Tools</h1>
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
              BMI, Ernährung und Training: Der perfekte Plan
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>20. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ein gesunder Lebensstil basiert auf drei Säulen: dem richtigen BMI, ausgewogener Ernährung und regelmäßigem Training. In diesem Artikel erfahren Sie, wie Sie diese drei Bereiche optimal aufeinander abstimmen und Ihren persönlichen Gesundheitsplan erstellen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Schritt 1: BMI bestimmen und Ziele setzen</h2>
            <p className="mb-6">
              Bevor Sie mit Ernährung und Training beginnen, sollten Sie Ihren aktuellen BMI kennen und realistische Ziele definieren. Der BMI gibt Ihnen einen Ausgangspunkt für Ihre Gesundheitsreise.
            </p>

            <div className="bg-secondary/5 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">BMI-basierte Zielsetzung:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Bei Übergewicht (BMI 25-29,9):</p>
                  <ul className="text-sm space-y-1">
                    <li>• Gewichtsreduktion anstreben</li>
                    <li>• BMI auf 22-24 senken</li>
                    <li>• Fokus auf Ausdauertraining</li>
                    <li>• Kaloriendefizit schaffen</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Bei Untergewicht (BMI &lt; 18,5):</p>
                  <ul className="text-sm space-y-1">
                    <li>• Gewichtszunahme anstreben</li>
                    <li>• BMI auf 20-22 erhöhen</li>
                    <li>• Fokus auf Krafttraining</li>
                    <li>• Kalorienüberschuss schaffen</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Schritt 2: Ernährung planen</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Grundprinzipien der gesunden Ernährung</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Makronährstoffe:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Proteine: 15-25% der Kalorien</li>
                      <li>• Kohlenhydrate: 45-65% der Kalorien</li>
                      <li>• Fette: 20-35% der Kalorien</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Mikronährstoffe:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Vitamine A, C, D, E, K</li>
                      <li>• B-Vitamine</li>
                      <li>• Mineralien: Eisen, Kalzium, Zink</li>
                      <li>• Antioxidantien</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Ernährungsplan nach BMI-Ziel</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Für Gewichtsabnahme:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Kaloriendefizit: 300-500 kcal/Tag</li>
                      <li>• Hoher Proteingehalt (1,6-2,2g/kg)</li>
                      <li>• Gemüse und Obst im Überfluss</li>
                      <li>• Vollkornprodukte bevorzugen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Für Gewichtszunahme:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Kalorienüberschuss: 300-500 kcal/Tag</li>
                      <li>• Hoher Proteingehalt (1,8-2,4g/kg)</li>
                      <li>• Gesunde Fette erhöhen</li>
                      <li>• Regelmäßige Mahlzeiten</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Schritt 3: Training planen</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-xl font-bold text-accent mb-3">Krafttraining</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Baut Muskeln auf und erhöht den Grundumsatz.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 2-3x pro Woche</li>
                  <li>• Alle Muskelgruppen trainieren</li>
                  <li>• Progressive Belastung</li>
                  <li>• 8-12 Wiederholungen</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Ausdauertraining</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Verbessert die Herz-Kreislauf-Gesundheit.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 3-5x pro Woche</li>
                  <li>• 30-60 Minuten</li>
                  <li>• Moderate Intensität</li>
                  <li>• Laufen, Radeln, Schwimmen</li>
                </ul>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Flexibilität</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Erhält die Beweglichkeit und beugt Verletzungen vor.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Täglich 10-15 Min.</li>
                  <li>• Dehnen und Yoga</li>
                  <li>• Nach dem Training</li>
                  <li>• Alle Gelenke mobilisieren</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wochenplan: Ernährung und Training kombinieren</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel-Wochenplan für Gewichtsabnahme:</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-muted">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-muted p-3 text-left">Tag</th>
                      <th className="border border-muted p-3 text-left">Training</th>
                      <th className="border border-muted p-3 text-left">Ernährungsschwerpunkt</th>
                      <th className="border border-muted p-3 text-left">Kalorien</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-muted p-3 font-medium">Montag</td>
                      <td className="border border-muted p-3">Krafttraining (Oberkörper)</td>
                      <td className="border border-muted p-3">Hoher Proteingehalt</td>
                      <td className="border border-muted p-3">1.800 kcal</td>
                    </tr>
                    <tr className="bg-muted/10">
                      <td className="border border-muted p-3 font-medium">Dienstag</td>
                      <td className="border border-muted p-3">Ausdauer (Laufen)</td>
                      <td className="border border-muted p-3">Kohlenhydrate</td>
                      <td className="border border-muted p-3">1.700 kcal</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3 font-medium">Mittwoch</td>
                      <td className="border border-muted p-3">Krafttraining (Unterkörper)</td>
                      <td className="border border-muted p-3">Ausgewogen</td>
                      <td className="border border-muted p-3">1.800 kcal</td>
                    </tr>
                    <tr className="bg-muted/10">
                      <td className="border border-muted p-3 font-medium">Donnerstag</td>
                      <td className="border border-muted p-3">Yoga/Dehnen</td>
                      <td className="border border-muted p-3">Leicht verdaulich</td>
                      <td className="border border-muted p-3">1.600 kcal</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3 font-medium">Freitag</td>
                      <td className="border border-muted p-3">Krafttraining (Ganzkörper)</td>
                      <td className="border border-muted p-3">Hoher Proteingehalt</td>
                      <td className="border border-muted p-3">1.800 kcal</td>
                    </tr>
                    <tr className="bg-muted/10">
                      <td className="border border-muted p-3 font-medium">Samstag</td>
                      <td className="border border-muted p-3">Ausdauer (Radfahren)</td>
                      <td className="border border-muted p-3">Kohlenhydrate</td>
                      <td className="border border-muted p-3">1.700 kcal</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3 font-medium">Sonntag</td>
                      <td className="border border-muted p-3">Ruhetag</td>
                      <td className="border border-muted p-3">Entspannend</td>
                      <td className="border border-muted p-3">1.500 kcal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Ernährungsbeispiele für verschiedene Ziele</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Frühstück für Gewichtsabnahme</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Option 1:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Haferflocken mit Beeren</li>
                      <li>• Griechischer Joghurt (0% Fett)</li>
                      <li>• 1 EL Nüsse</li>
                      <li>• Grüner Tee</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Option 2:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Vollkornbrot mit Ei</li>
                      <li>• Avocado (1/4)</li>
                      <li>• Tomaten und Gurke</li>
                      <li>• Schwarzer Kaffee</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Mittagessen für Muskelaufbau</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Option 1:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Hähnchenbrust (150g)</li>
                      <li>• Quinoa (100g)</li>
                      <li>• Brokkoli und Karotten</li>
                      <li>• Olivenöl (1 EL)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Option 2:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Lachs (150g)</li>
                      <li>• Süßkartoffeln (150g)</li>
                      <li>• Spinat und Pilze</li>
                      <li>• Walnüsse (30g)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Trainingseinheiten im Detail</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Krafttraining: Ganzkörper-Workout</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Übungen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Kniebeugen: 3x12</li>
                      <li>• Liegestütze: 3x10</li>
                      <li>• Kreuzheben: 3x8</li>
                      <li>• Schulterdrücken: 3x10</li>
                      <li>• Rudern: 3x12</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Pausen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Zwischen Sätzen: 60-90 Sek.</li>
                      <li>• Zwischen Übungen: 2-3 Min.</li>
                      <li>• Gesamtdauer: 45-60 Min.</li>
                      <li>• Intensität: 70-80%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Ausdauertraining: Intervalltraining</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Ablauf:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Aufwärmen: 10 Min. locker</li>
                      <li>• Intervall: 30 Sek. schnell</li>
                      <li>• Pause: 90 Sek. langsam</li>
                      <li>• Wiederholung: 8-10x</li>
                      <li>• Auslaufen: 10 Min. locker</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Intensität:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Schnelle Phase: 85-90%</li>
                      <li>• Langsame Phase: 60-70%</li>
                      <li>• Gesamtdauer: 30-40 Min.</li>
                      <li>• 2-3x pro Woche</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Monitoring und Anpassung</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Wöchentliche Kontrolle</h3>
                <ul className="text-sm space-y-2">
                  <li>• Gewicht und BMI messen</li>
                  <li>• Körpermaße dokumentieren</li>
                  <li>• Trainingsfortschritt notieren</li>
                  <li>• Ernährungsprotokoll führen</li>
                  <li>• Wohlbefinden bewerten</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Monatliche Anpassung</h3>
                <ul className="text-sm space-y-2">
                  <li>• Plan bei Erfolg beibehalten</li>
                  <li>• Bei Stagnation variieren</li>
                  <li>• Neue Ziele setzen</li>
                  <li>• Training intensivieren</li>
                  <li>• Ernährung optimieren</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für den Alltag</h2>
            
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Planung:</strong> Erstellen Sie Ihren Wochenplan am Sonntag und bereiten Sie Mahlzeiten vor</li>
              <li><strong>Konsistenz:</strong> Bleiben Sie bei Ihrem Plan, auch wenn es mal nicht optimal läuft</li>
              <li><strong>Flexibilität:</strong> Passen Sie den Plan bei Bedarf an, aber bleiben Sie bei den Grundprinzipien</li>
              <li><strong>Geduld:</strong> Gesundheitsziele brauchen Zeit - erwarten Sie keine Wunder über Nacht</li>
              <li><strong>Unterstützung:</strong> Suchen Sie sich einen Trainingspartner oder Ernährungsberater</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Ein erfolgreicher Gesundheitsplan kombiniert BMI-Bewusstsein, ausgewogene Ernährung und regelmäßiges Training. Mit der richtigen Planung, Konsistenz und Geduld können Sie Ihre Ziele erreichen. Nutzen Sie unseren BMI-Rechner als Ausgangspunkt und passen Sie Ernährung und Training entsprechend an.
            </p>

            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-secondary" />
                Starten Sie mit Ihrem BMI
              </h3>
              <p className="text-muted-foreground mb-4">
                Berechnen Sie Ihren aktuellen BMI und erstellen Sie Ihren persönlichen Gesundheitsplan.
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
