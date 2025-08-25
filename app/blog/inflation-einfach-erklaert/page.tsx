import Link from "next/link"
import { ArrowLeft, Calendar, Clock, TrendingDown, TrendingUp, Shield, Zap, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Inflation einfach erklärt: Ursachen, Folgen & Beispiele",
  description: "Verstehen Sie Inflation und deren Auswirkungen auf Ihr Geld. Von Ursachen über Folgen bis hin zu praktischen Beispielen.",
  keywords: "inflation einfach erklärt, inflation deutschland, kaufkraft verlust, geldentwertung, inflation ursachen, inflation folgen",
  openGraph: {
    title: "Inflation einfach erklärt: Ursachen, Folgen & Beispiele",
    description: "Verstehen Sie Inflation und deren Auswirkungen auf Ihr Geld. Von Ursachen über Folgen bis hin zu praktischen Beispielen.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/inflation-einfach-erklaert",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/inflation-einfach-erklaert",
      "x-default": "https://www.rechnerjetzt.de/blog/inflation-einfach-erklaert",
    },
  },
}

export default function InflationEinfachErklaertPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-10 w-10 rounded-full shadow-md" />
              <div>
                <h3 className="text-xl font-bold font-serif">Rechner Tools</h3>
                <p className="text-xs opacity-90 font-medium">Professionelle Online-Rechner</p>
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
                <TrendingDown className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Inflation
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Inflation einfach erklärt: Ursachen, Folgen & Beispiele
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>11 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Inflation ist ein Begriff, der in den Medien ständig auftaucht und viele Menschen verunsichert. Was bedeutet Inflation eigentlich? Wie entsteht sie und welche Auswirkungen hat sie auf Ihr Geld? In diesem Artikel erklären wir Inflation einfach und verständlich, zeigen Ihnen die Ursachen und Folgen und geben Ihnen praktische Beispiele, damit Sie verstehen, was Inflation für Sie bedeutet.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist Inflation?</h2>
            <p className="mb-6">
              <strong>Inflation</strong> bedeutet, dass die Preise für Güter und Dienstleistungen im Laufe der Zeit steigen. Das führt dazu, dass Ihr Geld weniger wert wird - Sie können sich für den gleichen Betrag weniger leisten als vorher. Einfach gesagt: Inflation ist die Entwertung des Geldes.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Einfaches Beispiel:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Vor 10 Jahren kostete ein Brot 1,50€. Heute kostet das gleiche Brot 2,50€. Das ist Inflation!
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie wird Inflation gemessen?</h2>
            <p className="mb-6">
              Inflation wird mit verschiedenen Indizes gemessen. Der wichtigste ist der Verbraucherpreisindex (VPI), der die Preisentwicklung eines typischen Warenkorbs misst:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Verbraucherpreisindex (VPI):</strong> Misst die Preise für den täglichen Bedarf</li>
              <li><strong>Harmonisierter Verbraucherpreisindex (HVPI):</strong> Ermöglicht Vergleiche zwischen EU-Ländern</li>
              <li><strong>Kerninflation:</strong> Inflation ohne volatile Preise wie Energie und Lebensmittel</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Ursachen der Inflation</h2>
            <p className="mb-6">
              Inflation entsteht durch verschiedene Faktoren. Hier sind die wichtigsten Ursachen:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Nachfrageinflation</h3>
            <p className="mb-4">
              Wenn die Nachfrage nach Gütern größer ist als das Angebot, steigen die Preise. Das passiert oft in wirtschaftlich guten Zeiten, wenn Menschen mehr Geld ausgeben.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kosteninflation</h3>
            <p className="mb-4">
              Steigende Produktionskosten (z.B. höhere Löhne, teurere Rohstoffe) führen zu höheren Preisen für Endprodukte.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Geldmengeninflation</h3>
            <p className="mb-4">
              Wenn zu viel Geld im Umlauf ist, verliert es an Wert. Das passiert oft durch expansive Geldpolitik der Zentralbanken.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Importierte Inflation</h3>
            <p className="mb-4">
              Steigende Preise im Ausland können sich auf die heimischen Preise auswirken, besonders bei importierten Gütern.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Beispiele für Inflation im Alltag</h2>
            <p className="mb-6">
              Hier sind praktische Beispiele, die zeigen, wie Inflation funktioniert:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 1: Lebensmittelpreise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">2014</p>
                  <p className="text-lg font-bold text-primary">1,50€</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">2024</p>
                  <p className="text-lg font-bold text-primary">2,50€</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Steigerung</p>
                  <p className="text-lg font-bold text-secondary">+67%</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">Preis für ein Brot</p>
            </div>

            <div className="bg-accent/10 p-6 rounded-xl mb-6 border border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 2: Mietpreise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">2019</p>
                  <p className="text-lg font-bold text-accent">800€</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">2024</p>
                  <p className="text-lg font-bold text-accent">950€</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Steigerung</p>
                  <p className="text-lg font-bold text-accent">+19%</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">Monatliche Miete für 60m²</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Folgen der Inflation</h2>
            <p className="mb-6">
              Inflation hat verschiedene Auswirkungen auf Wirtschaft und Gesellschaft:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Für Verbraucher</h3>
            <p className="mb-4">
              Ihr Geld verliert an Kaufkraft. Sie können sich weniger leisten, besonders wenn Ihr Einkommen nicht entsprechend steigt.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Für Sparer</h3>
            <p className="mb-4">
              Geld auf dem Sparbuch verliert an Wert. Bei 2% Inflation und 0,5% Zinsen verlieren Sie real 1,5% pro Jahr.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Für Schuldner</h3>
            <p className="mb-4">
              Kredite werden real weniger wert. Bei hoher Inflation profitieren Schuldner, da sie mit "billigerem" Geld zurückzahlen.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Für die Wirtschaft</h3>
            <p className="mb-4">
              Hohe Inflation kann zu wirtschaftlicher Instabilität führen. Niedrige Inflation (2-3%) ist dagegen oft gesund für das Wirtschaftswachstum.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie schützt man sich vor Inflation?</h2>
            <p className="mb-6">
              Es gibt verschiedene Strategien, um sich vor Inflation zu schützen:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Investitionen:</strong> Aktien, Immobilien oder andere Sachwerte behalten ihren Wert</li>
              <li><strong>Inflationsgeschützte Anlagen:</strong> TIPS (Treasury Inflation-Protected Securities) oder ähnliche Produkte</li>
              <li><strong>Diversifikation:</strong> Verteilen Sie Ihr Geld auf verschiedene Anlageklassen</li>
              <li><strong>Regelmäßige Anpassungen:</strong> Überprüfen Sie Ihre Finanzen regelmäßig</li>
              <li><strong>Bildung:</strong> Investieren Sie in Ihre Fähigkeiten, um Ihr Einkommen zu steigern</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Ist Inflation immer schlecht?</h3>
            <p className="mb-6">
              Nein, moderate Inflation (2-3%) ist normal und oft gesund für die Wirtschaft. Sie fördert Konsum und Investitionen. Nur hohe Inflation ist problematisch.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kann es auch negative Inflation geben?</h3>
            <p className="mb-6">
              Ja, das nennt man Deflation. Preise fallen, aber das kann zu wirtschaftlichen Problemen führen, da Menschen mit dem Kauf warten.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie hoch ist die aktuelle Inflation in Deutschland?</h3>
            <p className="mb-6">
              Die aktuelle Inflationsrate variiert. Sie können die aktuellen Zahlen bei der Europäischen Zentralbank oder dem Statistischen Bundesamt einsehen.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Was passiert bei Hyperinflation?</h3>
            <p className="mb-6">
              Bei Hyperinflation steigen die Preise extrem schnell (oft über 50% pro Monat). Das führt zum Zusammenbruch des Geldsystems und der Wirtschaft.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie berechne ich den Kaufkraftverlust?</h3>
            <p className="mb-6">
              Kaufkraftverlust = (1 - 1 ÷ (1 + Inflationsrate)) × 100. Bei 2% Inflation verlieren Sie etwa 2% Kaufkraft pro Jahr.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Praxistipp:</h3>
              <p className="mb-4">
                Nutzen Sie unseren <Link href="/inflationsrechner" className="text-primary hover:underline font-medium">Inflationsrechner</Link> für schnelle und präzise Berechnungen. Er zeigt Ihnen, wie sich Inflation auf Ihr Geld auswirkt und wie viel Kaufkraft Sie verlieren.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Inflation ist ein natürlicher Teil der Wirtschaft, aber es ist wichtig, sie zu verstehen. Moderate Inflation ist normal und gesund, hohe Inflation kann problematisch werden. Mit dem richtigen Wissen können Sie sich vor den negativen Auswirkungen schützen und sogar von Inflation profitieren. Wichtig ist, dass Sie Ihr Geld nicht nur sparen, sondern auch investieren, um den Kaufkraftverlust auszugleichen.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Weitere Informationen</h3>
              <p className="mb-4">
                Entdecken Sie weitere nützliche Artikel zu Inflation und Finanzen in unserem <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link> oder nutzen Sie direkt unseren <Link href="/inflationsrechner" className="text-primary hover:underline font-medium">Inflationsrechner</Link> für Ihre Berechnungen.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
