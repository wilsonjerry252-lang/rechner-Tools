import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Heart, TrendingUp, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "BMI richtig interpretieren: Was die Zahlen wirklich bedeuten | Rechner Tools",
  description: "Der BMI ist nur ein Richtwert. Lernen Sie, wie Sie Ihren BMI-Wert richtig einordnen und was er über Ihre Gesundheit aussagt.",
  keywords: "bmi, body mass index, gesundheit, gewicht, größe, bmi-berechnung, gesundheitsbewertung, fitness",
  openGraph: {
    title: "BMI richtig interpretieren: Was die Zahlen wirklich bedeuten",
    description: "Der BMI ist nur ein Richtwert. Lernen Sie, wie Sie Ihren BMI-Wert richtig einordnen und was er über Ihre Gesundheit aussagt.",
    type: "article",
    publishedTime: "2025-01-12T10:00:00Z",
    authors: ["Rechner Tools"],
  },
}

export default function BMIIntepretationPage() {
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
              BMI richtig interpretieren: Was die Zahlen wirklich bedeuten
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>12. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Der Body-Mass-Index (BMI) ist ein weltweit anerkannter Richtwert zur Bewertung des Körpergewichts. Doch was bedeuten die Zahlen wirklich? Und warum ist der BMI nur ein Teil der Gesundheitsbewertung? In diesem Artikel erfahren Sie alles über die richtige Interpretation Ihres BMI-Wertes.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist der BMI?</h2>
            <p className="mb-6">
              Der Body-Mass-Index ist eine mathematische Formel, die das Verhältnis zwischen Körpergewicht und Körpergröße berechnet. Die Formel lautet: BMI = Gewicht (kg) / Größe (m)². Der resultierende Wert wird in Kategorien eingeteilt, die von Untergewicht bis Adipositas reichen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">BMI-Kategorien nach WHO-Standard</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Untergewicht</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 18,5</div>
                <p className="text-sm text-blue-600">BMI unter 18,5</p>
                <p className="text-sm text-blue-500 mt-2">Kann auf Mangelernährung oder Erkrankungen hinweisen</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Normalgewicht</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">18,5 - 24,9</div>
                <p className="text-sm text-green-600">Gesunder BMI-Bereich</p>
                <p className="text-sm text-green-500 mt-2">Optimal für die meisten Menschen</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">Übergewicht</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">25,0 - 29,9</div>
                <p className="text-sm text-orange-600">Leichtes Übergewicht</p>
                <p className="text-sm text-orange-500 mt-2">Erhöhtes Gesundheitsrisiko</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-3">Adipositas</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">≥ 30,0</div>
                <p className="text-sm text-red-600">Starkes Übergewicht</p>
                <p className="text-sm text-red-500 mt-2">Erhebliches Gesundheitsrisiko</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Warum der BMI nur ein Richtwert ist</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Faktoren, die der BMI nicht berücksichtigt:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Muskelmasse:</strong> Muskeln wiegen mehr als Fett</li>
                <li><strong>Körperbau:</strong> Knochenstruktur und -dichte</li>
                <li><strong>Alter:</strong> Ältere Menschen haben oft einen höheren BMI</li>
                <li><strong>Geschlecht:</strong> Männer und Frauen haben unterschiedliche Körperzusammensetzung</li>
                <li><strong>Ethnische Herkunft:</strong> Verschiedene Bevölkerungsgruppen haben unterschiedliche Risikogrenzen</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">BMI bei verschiedenen Bevölkerungsgruppen</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Senioren (65+)</h3>
            <p className="mb-4">
              Bei älteren Menschen liegt der gesunde BMI-Bereich zwischen 23 und 29. Ein leicht höherer BMI kann sogar vorteilhaft sein, da er auf ausreichende Ernährung und Muskelmasse hinweist.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Sportler und Bodybuilder</h3>
            <p className="mb-4">
              Menschen mit hoher Muskelmasse können einen BMI über 25 haben, ohne übergewichtig zu sein. Der BMI unterscheidet nicht zwischen Muskel- und Fettmasse.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Asiatische Bevölkerungsgruppen</h3>
            <p className="mb-4">
              Für Menschen asiatischer Herkunft gelten niedrigere BMI-Grenzwerte. Übergewicht beginnt bereits bei einem BMI von 23, Adipositas bei 25.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Bessere Alternativen zum BMI</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Taillenumfang</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Misst das gefährliche Bauchfett, das mit Herz-Kreislauf-Erkrankungen verbunden ist.
                </p>
                <div className="text-sm">
                  <p><strong>Frauen:</strong> &lt; 80 cm (normal)</p>
                  <p><strong>Männer:</strong> &lt; 94 cm (normal)</p>
                </div>
              </div>
              
              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-xl font-bold text-accent mb-3">Taille-Hüfte-Verhältnis</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Zeigt die Verteilung des Körperfetts an.
                </p>
                <div className="text-sm">
                  <p><strong>Frauen:</strong> &lt; 0,85 (normal)</p>
                  <p><strong>Männer:</strong> &lt; 0,90 (normal)</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wann sollten Sie einen Arzt aufsuchen?</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>BMI unter 18,5 mit ungewolltem Gewichtsverlust</li>
              <li>BMI über 30 mit Begleiterkrankungen</li>
              <li>Plötzliche Gewichtsveränderungen ohne erkennbare Ursache</li>
              <li>BMI im Normalbereich, aber ungesunde Körperzusammensetzung</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für eine gesunde Gewichtsbewertung</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Regelmäßige Messungen:</strong> Wiegen Sie sich einmal pro Woche zur gleichen Zeit</li>
              <li><strong>Fotodokumentation:</strong> Machen Sie monatlich Fotos zur visuellen Bewertung</li>
              <li><strong>Kleidergrößen:</strong> Achten Sie auf Änderungen der Kleidergrößen</li>
              <li><strong>Energielevel:</strong> Beobachten Sie Ihr tägliches Energielevel und Wohlbefinden</li>
              <li><strong>Ganzheitlicher Ansatz:</strong> Kombinieren Sie BMI mit anderen Messmethoden</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Der BMI ist ein nützliches Werkzeug zur ersten Einschätzung des Körpergewichts, aber er sollte nicht isoliert betrachtet werden. Kombinieren Sie ihn mit anderen Messmethoden und achten Sie auf Ihr allgemeines Wohlbefinden. Bei Unsicherheiten oder extremen Werten ist eine ärztliche Beratung empfehlenswert.
            </p>

            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-secondary" />
                Berechnen Sie Ihren BMI
              </h3>
              <p className="text-muted-foreground mb-4">
                Nutzen Sie unseren professionellen BMI-Rechner für eine schnelle und genaue Berechnung Ihres Body-Mass-Index.
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
