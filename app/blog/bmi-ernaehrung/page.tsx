import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Activity, TrendingUp, Shield, Zap, Apple, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata = {
  title: "BMI und Ernährung: Perfekter Ernährungsplan für Ihr Gewicht",
  description: "Erfahren Sie, wie Sie Ihren BMI mit der richtigen Ernährung optimieren können. Praktische Tipps und Ernährungspläne für verschiedene BMI-Kategorien.",
  keywords: "bmi ernährung, ernährungsplan, gewicht optimieren, gesunde ernährung, bmi kategorien, diät plan",
  openGraph: {
    title: "BMI und Ernährung: Perfekter Ernährungsplan für Ihr Gewicht",
    description: "Erfahren Sie, wie Sie Ihren BMI mit der richtigen Ernährung optimieren können. Praktische Tipps und Ernährungspläne für verschiedene BMI-Kategorien.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/bmi-ernaehrung",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/bmi-ernaehrung",
    },
  },
}

export default function BMIErnaehrungPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Rechner Tools Logo" width={48} height={48} className="rounded-md" />
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
              BMI und Ernährung: Der perfekte Ernährungsplan für Ihr Gewicht
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Eine ausgewogene Ernährung ist der Schlüssel zu einem gesunden BMI und Wohlbefinden. In diesem umfassenden Leitfaden erfahren Sie, wie Sie Ihre Ernährung optimal an Ihren Body-Mass-Index anpassen und nachhaltig Ihr Gewicht optimieren.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Grundlagen der BMI-optimierten Ernährung</h2>
            
            <p className="mb-6">
              Der BMI gibt Ihnen einen ersten Anhaltspunkt für Ihre Gewichtssituation. Basierend darauf können Sie Ihre Ernährung gezielt anpassen, um Ihr Wunschgewicht zu erreichen oder zu halten.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Ernährungsziele nach BMI</h3>
                <ul className="text-sm space-y-2">
                  <li>• BMI &lt; 18,5: Gewichtszunahme</li>
                  <li>• BMI 18,5-24,9: Gewicht halten</li>
                  <li>• BMI 25-29,9: Gewichtsabnahme</li>
                  <li>• BMI ≥ 30: Gewichtsreduktion</li>
                  <li>• Individuelle Anpassung</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Wichtige Faktoren</h3>
                <ul className="text-sm space-y-2">
                  <li>• Kalorienbedarf berechnen</li>
                  <li>• Makronährstoffe ausbalancieren</li>
                  <li>• Mahlzeitenfrequenz planen</li>
                  <li>• Bewegung einbeziehen</li>
                  <li>• Langfristige Strategie</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Kalorienbedarf berechnen</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-lg font-bold text-foreground mb-4">Grundumsatz und Leistungsumsatz</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Grundumsatz (BMR):</p>
                    <div className="text-sm space-y-1">
                      <p><strong>Männer:</strong> 88,362 + (13,397 × Gewicht) + (4,799 × Größe) - (5,677 × Alter)</p>
                      <p><strong>Frauen:</strong> 447,593 + (9,247 × Gewicht) + (3,098 × Größe) - (4,330 × Alter)</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Aktivitätsfaktoren:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 1,2: Sitzende Tätigkeit</li>
                      <li>• 1,375: Leichte Aktivität</li>
                      <li>• 1,55: Moderate Aktivität</li>
                      <li>• 1,725: Hohe Aktivität</li>
                      <li>• 1,9: Sehr hohe Aktivität</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Kalorienziel nach BMI</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
                    <h4 className="text-sm font-bold text-red-700 mb-2">Gewichtszunahme</h4>
                    <p className="text-xs text-muted-foreground">+ 300-500 kcal über Bedarf</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                    <h4 className="text-sm font-bold text-green-700 mb-2">Gewicht halten</h4>
                    <p className="text-xs text-muted-foreground">Kalorienbedarf decken</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                    <h4 className="text-sm font-bold text-blue-700 mb-2">Gewichtsabnahme</h4>
                    <p className="text-xs text-muted-foreground">- 300-500 kcal unter Bedarf</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Makronährstoffe optimal verteilen</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Verteilung der Makronährstoffe</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="text-sm font-bold text-red-700 mb-2">Proteine (20-30%)</h4>
                    <p className="text-xs text-muted-foreground mb-2">Wichtig für:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Muskelaufbau und -erhalt</li>
                      <li>• Sättigung</li>
                      <li>• Stoffwechsel</li>
                      <li>• Immunsystem</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="text-sm font-bold text-yellow-700 mb-2">Kohlenhydrate (45-55%)</h4>
                    <p className="text-xs text-muted-foreground mb-2">Wichtig für:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Energie</li>
                      <li>• Gehirnfunktion</li>
                      <li>• Glykogenspeicher</li>
                      <li>• Ballaststoffe</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="text-sm font-bold text-blue-700 mb-2">Fette (20-35%)</h4>
                    <p className="text-xs text-muted-foreground mb-2">Wichtig für:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Hormonproduktion</li>
                      <li>• Vitaminaufnahme</li>
                      <li>• Zellmembranen</li>
                      <li>• Sättigung</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Anpassung nach BMI-Ziel</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Gewichtsabnahme:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Proteine: 25-30% (erhöht)</li>
                      <li>• Kohlenhydrate: 40-45% (reduziert)</li>
                      <li>• Fette: 25-30% (moderat)</li>
                      <li>• Ballaststoffe: 30-35g/Tag</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Gewichtszunahme:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Proteine: 20-25% (moderat)</li>
                      <li>• Kohlenhydrate: 50-55% (erhöht)</li>
                      <li>• Fette: 20-25% (moderat)</li>
                      <li>• Ballaststoffe: 25-30g/Tag</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Ernährungspläne nach BMI</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Ernährungsplan für Gewichtsabnahme (BMI 25-29,9)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Frühstück:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Haferflocken mit Beeren</li>
                      <li>• Griechischer Joghurt</li>
                      <li>• Nüsse und Samen</li>
                      <li>• Grüner Tee</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Mittagessen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Mageres Protein (Huhn, Fisch)</li>
                      <li>• Komplexe Kohlenhydrate (Quinoa, Reis)</li>
                      <li>• Viel Gemüse</li>
                      <li>• Gesunde Fette (Olivenöl)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Abendessen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Leichte Mahlzeit</li>
                      <li>• Protein und Gemüse</li>
                      <li>• Wenige Kohlenhydrate</li>
                      <li>• Keine späten Mahlzeiten</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Snacks:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Obst (2-3 Portionen/Tag)</li>
                      <li>• Nüsse (1 Handvoll)</li>
                      <li>• Gemüsesticks</li>
                      <li>• Proteinriegel</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Ernährungsplan für Gewichtszunahme (BMI &lt; 18,5)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Frühstück:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Vollkornbrot mit Avocado</li>
                      <li>• Eier oder Protein</li>
                      <li>• Nussmus</li>
                      <li>• Smoothie mit Banane</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Mittagessen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Reis oder Nudeln</li>
                      <li>• Protein (Fleisch, Fisch, Hülsenfrüchte)</li>
                      <li>• Gemüse und Salat</li>
                      <li>• Gesunde Fette</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Abendessen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Kartoffeln oder Süßkartoffeln</li>
                      <li>• Proteinquelle</li>
                      <li>• Gemüse</li>
                      <li>• Nüsse oder Samen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Snacks:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Nüsse und Trockenfrüchte</li>
                      <li>• Protein-Shakes</li>
                      <li>• Vollkornkekse</li>
                      <li>• Smoothies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Lebensmittel nach BMI optimieren</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Empfohlene Lebensmittel</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Proteine:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Mageres Fleisch (Huhn, Pute)</li>
                      <li>• Fisch (Lachs, Thunfisch)</li>
                      <li>• Eier</li>
                      <li>• Hülsenfrüchte</li>
                      <li>• Tofu und Tempeh</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Kohlenhydrate:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Vollkornprodukte</li>
                      <li>• Haferflocken</li>
                      <li>• Quinoa</li>
                      <li>• Süßkartoffeln</li>
                      <li>• Obst und Gemüse</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Fette:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Avocado</li>
                      <li>• Nüsse und Samen</li>
                      <li>• Olivenöl</li>
                      <li>• Kokosöl</li>
                      <li>• Fetter Fisch</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Gemüse:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Blattgemüse</li>
                      <li>• Brokkoli</li>
                      <li>• Karotten</li>
                      <li>• Paprika</li>
                      <li>• Zucchini</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-3">Zu vermeidende Lebensmittel</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Verarbeitete Lebensmittel:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Fertiggerichte</li>
                      <li>• Süßigkeiten</li>
                      <li>• Limonaden</li>
                      <li>• Weißmehlprodukte</li>
                      <li>• Fast Food</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Ungesunde Fette:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Transfette</li>
                      <li>• Gesättigte Fette (übermäßig)</li>
                      <li>• Frittierte Lebensmittel</li>
                      <li>• Wurstwaren</li>
                      <li>• Sahne und Butter</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Mahlzeitenfrequenz und Timing</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Optimale Mahlzeitenfrequenz</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Gewichtsabnahme:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 3 Hauptmahlzeiten</li>
                      <li>• 1-2 kleine Snacks</li>
                      <li>• 4-5 Stunden Pause</li>
                      <li>• Keine späten Mahlzeiten</li>
                      <li>• 16:8 Intervallfasten möglich</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Gewichtszunahme:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 3 Hauptmahlzeiten</li>
                      <li>• 2-3 Snacks</li>
                      <li>• 3-4 Stunden Pause</li>
                      <li>• Späte Mahlzeiten erlaubt</li>
                      <li>• Regelmäßige Mahlzeiten</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-lg font-bold text-foreground mb-4">Mahlzeiten-Timing</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-sm font-medium text-foreground">7:00</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Frühstück</p>
                      <p className="text-xs text-muted-foreground">Energie für den Tag, Proteine und Kohlenhydrate</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-sm font-medium text-foreground">10:00</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Snack</p>
                      <p className="text-xs text-muted-foreground">Obst oder Nüsse für Zwischendurch</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-sm font-medium text-foreground">13:00</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Mittagessen</p>
                      <p className="text-xs text-muted-foreground">Hauptmahlzeit mit allen Makronährstoffen</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-sm font-medium text-foreground">16:00</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Snack</p>
                      <p className="text-xs text-muted-foreground">Protein oder gesunde Kohlenhydrate</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-sm font-medium text-foreground">19:00</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Abendessen</p>
                      <p className="text-xs text-muted-foreground">Leichte Mahlzeit, wenig Kohlenhydrate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für die Umsetzung</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Mahlzeitenplanung</h3>
                <ul className="text-sm space-y-2">
                  <li>• Wöchentlichen Speiseplan erstellen</li>
                  <li>• Einkaufsliste entsprechend planen</li>
                  <li>• Mahlzeiten vorkochen</li>
                  <li>• Portionsgrößen abmessen</li>
                  <li>• Rezepte sammeln und ausprobieren</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Verhalten und Gewohnheiten</h3>
                <ul className="text-sm space-y-2">
                  <li>• Langsam und bewusst essen</li>
                  <li>• Auf Hunger und Sättigung achten</li>
                  <li>• Keine Ablenkungen beim Essen</li>
                  <li>• Regelmäßige Mahlzeiten</li>
                  <li>• Ausreichend Wasser trinken</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">Überwachung und Anpassung</h3>
                <ul className="text-sm space-y-2">
                  <li>• Gewicht regelmäßig wiegen</li>
                  <li>• Ernährungsprotokoll führen</li>
                  <li>• Fortschritt dokumentieren</li>
                  <li>• Plan bei Bedarf anpassen</li>
                  <li>• Professionelle Beratung einholen</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wichtige Nährstoffe für BMI-Optimierung</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Vitamine und Mineralstoffe</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Wichtige Vitamine:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Vitamin D: Knochengesundheit</li>
                    <li>• Vitamin B12: Energie und Stoffwechsel</li>
                    <li>• Vitamin C: Immunsystem</li>
                    <li>• Vitamin E: Zellschutz</li>
                    <li>• Folsäure: Zellteilung</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Wichtige Mineralstoffe:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Eisen: Sauerstofftransport</li>
                    <li>• Kalzium: Knochen und Zähne</li>
                    <li>• Magnesium: Muskelfunktion</li>
                    <li>• Zink: Immunsystem</li>
                    <li>• Kalium: Nervenfunktion</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            
            <p className="mb-6">
              Eine BMI-optimierte Ernährung ist der Schlüssel zu einem gesunden Gewicht und Wohlbefinden. Durch die richtige Verteilung der Makronährstoffe, regelmäßige Mahlzeiten und bewusste Lebensmittelauswahl können Sie Ihr Gewicht nachhaltig optimieren. Wichtig ist eine langfristige Strategie, die zu Ihrem Lebensstil passt. Nutzen Sie unseren BMI-Rechner als Ausgangspunkt und passen Sie Ihre Ernährung entsprechend an.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                BMI berechnen und Ernährung optimieren
              </h3>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unseren professionellen BMI-Rechner, um Ihren aktuellen BMI zu ermitteln und Ihre Ernährung entsprechend zu optimieren.
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
