import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Heart, TrendingUp, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Gesunde Gewichtsabnahme: Mehr als nur der BMI | Rechner Tools",
  description: "Erfahren Sie, warum der BMI allein nicht ausreicht und welche anderen Faktoren für eine gesunde Gewichtsabnahme wichtig sind.",
  keywords: "gesunde gewichtsabnahme, bmi gewicht, gewicht abnehmen, gesund abnehmen, bmi diät, nachhaltige gewichtsabnahme",
  openGraph: {
    title: "Gesunde Gewichtsabnahme: Mehr als nur der BMI",
    description: "Erfahren Sie, warum der BMI allein nicht ausreicht und welche anderen Faktoren für eine gesunde Gewichtsabnahme wichtig sind.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/gesunde-gewichtsabnahme-bmi",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/gesunde-gewichtsabnahme-bmi",
    },
  },
}

export default function GesundeGewichtsabnahmePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h2 className="text-2xl font-bold font-serif">Rechner Tools</h2>
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
              Gesunde Gewichtsabnahme: Mehr als nur der BMI
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>5. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Der BMI ist ein nützlicher Richtwert, aber für eine gesunde und nachhaltige Gewichtsabnahme brauchen Sie mehr als nur diese Zahl. In diesem Artikel erfahren Sie, welche Faktoren wirklich wichtig sind und wie Sie Ihr Gewicht gesund und dauerhaft reduzieren können.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Warum der BMI nicht alles ist</h2>
            <p className="mb-6">
              Der Body-Mass-Index berücksichtigt nur das Verhältnis von Gewicht zu Größe, aber nicht die Zusammensetzung Ihres Körpers. Muskeln wiegen mehr als Fett, und ein trainierter Körper kann einen höheren BMI haben, ohne ungesund zu sein.
            </p>

            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel: Zwei Menschen, gleicher BMI, unterschiedliche Gesundheit</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-700 mb-2">Person A: BMI 26</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 30% Körperfett</li>
                    <li>• Wenig Muskelmasse</li>
                    <li>• Bewegungsmangel</li>
                    <li>• Ungesunde Ernährung</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-700 mb-2">Person B: BMI 26</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 15% Körperfett</li>
                    <li>• Hohe Muskelmasse</li>
                    <li>• Regelmäßiges Training</li>
                    <li>• Ausgewogene Ernährung</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wichtige Faktoren für gesunde Gewichtsabnahme</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Körperzusammensetzung</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Der Anteil von Muskeln, Fett, Knochen und Wasser ist wichtiger als das Gesamtgewicht.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Körperfettanteil messen</li>
                  <li>• Muskelmasse aufbauen</li>
                  <li>• Wassereinlagerungen beachten</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Stoffwechsel</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Ein aktiver Stoffwechsel verbrennt mehr Kalorien, auch im Ruhezustand.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Grundumsatz erhöhen</li>
                  <li>• Muskelmasse aufbauen</li>
                  <li>• Regelmäßige Mahlzeiten</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Ernährung: Der Schlüssel zum Erfolg</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Grundprinzipien einer gesunden Ernährung</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Was Sie essen sollten:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Viel Gemüse und Obst</li>
                      <li>• Mageres Protein</li>
                      <li>• Gesunde Fette</li>
                      <li>• Vollkornprodukte</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Was Sie reduzieren sollten:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Zucker und Süßigkeiten</li>
                      <li>• Weißmehlprodukte</li>
                      <li>• Verarbeitete Lebensmittel</li>
                      <li>• Alkohol</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Kaloriendefizit: So funktioniert es</h3>
                <p className="text-sm mb-3">
                  Um abzunehmen, müssen Sie weniger Kalorien aufnehmen, als Sie verbrauchen. Aber Vorsicht: Zu wenig ist ungesund!
                </p>
                <div className="text-sm">
                  <p><strong>Empfohlenes Defizit:</strong> 300-500 Kalorien pro Tag</p>
                  <p><strong>Maximales Defizit:</strong> 1000 Kalorien pro Tag</p>
                  <p><strong>Wichtig:</strong> Nicht unter 1200 (Frauen) oder 1500 (Männer) Kalorien</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Training: Mehr als nur Kalorien verbrennen</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-xl font-bold text-accent mb-3">Krafttraining</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Baut Muskeln auf und erhöht den Grundumsatz.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 2-3x pro Woche</li>
                  <li>• Alle Muskelgruppen</li>
                  <li>• Progressive Belastung</li>
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
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Alternative Messmethoden zum BMI</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Taillenumfang</h3>
                <p className="text-sm text-muted-foreground">
                  Misst das gefährliche Bauchfett. Frauen: &lt; 80 cm, Männer: &lt; 94 cm.
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Taille-Hüfte-Verhältnis</h3>
                <p className="text-sm text-muted-foreground">
                  Zeigt die Fettverteilung. Frauen: &lt; 0,85, Männer: &lt; 0,90.
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Körperfettanteil</h3>
                <p className="text-sm text-muted-foreground">
                  Genaueste Methode. Frauen: 20-30%, Männer: 10-20%.
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Kleidergrößen</h3>
                <p className="text-sm text-muted-foreground">
                  Praktischer Indikator für Gewichtsveränderungen.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für den Alltag</h2>
            
            <ol className="list-decimal pl-6 mb-6 space-y-4">
              <li>
                <strong>Regelmäßige Mahlzeiten</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Essen Sie 3-4 Mahlzeiten pro Tag in regelmäßigen Abständen, um den Stoffwechsel anzukurbeln.
                </p>
              </li>
              <li>
                <strong>Ausreichend Schlaf</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  7-9 Stunden Schlaf pro Nacht sind wichtig für die Hormonregulation und den Stoffwechsel.
                </p>
              </li>
              <li>
                <strong>Stress reduzieren</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Chronischer Stress kann zu Gewichtszunahme führen. Entspannungstechniken helfen.
                </p>
              </li>
              <li>
                <strong>Wasser trinken</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Trinken Sie 2-3 Liter Wasser pro Tag. Das unterstützt den Stoffwechsel und reduziert Hungergefühle.
                </p>
              </li>
              <li>
                <strong>Geduld haben</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Gesunde Gewichtsabnahme dauert Zeit. 0,5-1 kg pro Woche ist optimal.
                </p>
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wann sollten Sie einen Arzt aufsuchen?</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Bei ungewolltem Gewichtsverlust ohne erkennbare Ursache</li>
              <li>Wenn Sie trotz gesunder Ernährung und Sport nicht abnehmen</li>
              <li>Bei Essstörungen oder ungesunden Essgewohnheiten</li>
              <li>Wenn Sie unter 18 Jahre alt sind</li>
              <li>Bei chronischen Erkrankungen oder Medikamenteneinnahme</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Eine gesunde Gewichtsabnahme basiert auf mehreren Faktoren: ausgewogene Ernährung, regelmäßiges Training, ausreichend Schlaf und Stressmanagement. Der BMI ist nur ein Richtwert - achten Sie auf Ihre Körperzusammensetzung und Ihr Wohlbefinden. Mit Geduld und der richtigen Strategie erreichen Sie Ihr Zielgewicht gesund und nachhaltig.
            </p>

            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-secondary" />
                Berechnen Sie Ihren BMI
              </h3>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unseren professionellen BMI-Rechner als Ausgangspunkt für Ihre Gesundheitsbewertung.
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
