import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, Shield as ShieldIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Wie schützt man sein Geld vor Inflation? Praktische Tipps",
  description: "Lernen Sie effektive Strategien zum Schutz Ihres Geldes vor Inflation. Von Sachwerten bis zu inflationsgeschützten Anlagen - alle wichtigen Methoden im Überblick.",
  keywords: "geld schutz inflation, inflationsschutz, sachwerte investition, inflationsgeschützte anlagen, kaufkraft erhalten",
  openGraph: {
    title: "Wie schützt man sein Geld vor Inflation? Praktische Tipps",
    description: "Lernen Sie effektive Strategien zum Schutz Ihres Geldes vor Inflation. Von Sachwerten bis zu inflationsgeschützten Anlagen - alle wichtigen Methoden im Überblick.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/geld-schutz-inflation",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/geld-schutz-inflation",
      "x-default": "https://www.rechnerjetzt.de/blog/geld-schutz-inflation",
    },
  },
}

export default function GeldSchutzInflationPage() {
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
                <ShieldIcon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Wirtschaft
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Wie schützt man sein Geld vor Inflation? Praktische Tipps
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Inflation ist eine der größten Bedrohungen für Ihr Vermögen, da sie die Kaufkraft Ihres Geldes kontinuierlich mindert. Viele Menschen sind unsicher, wie sie ihr Geld vor dem schleichenden Wertverlust schützen können. In diesem Artikel erklären wir Schritt für Schritt, warum Inflation gefährlich ist, welche Schutzstrategien es gibt und geben praktische Tipps für die Umsetzung. Von Sachwerten bis zu inflationsgeschützten Anlagen - wir zeigen Ihnen alle wichtigen Methoden.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Warum ist Inflation gefährlich für Ihr Geld?</h2>
            <p className="mb-6">
              <strong>Inflation</strong> ist wie ein unsichtbarer Dieb, der Ihr Geld Nacht für Nacht bestiehlt. Bei einer jährlichen Inflation von 2% verliert Ihr Geld in 10 Jahren bereits 18% seiner Kaufkraft. Bei 5% Inflation sind es sogar 39%. Das bedeutet: Was heute 100 Euro wert ist, können Sie sich in 10 Jahren nur noch für 61 Euro kaufen. Deshalb ist es entscheidend, aktiv gegen Inflation vorzugehen.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Kaufkraftverlust durch Inflation:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Nach 10 Jahren</h4>
                  <p className="text-lg font-bold text-primary">2% Inflation: -18%</p>
                  <p className="text-lg font-bold text-primary">5% Inflation: -39%</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Nach 20 Jahren</h4>
                  <p className="text-lg font-bold text-primary">2% Inflation: -33%</p>
                  <p className="text-lg font-bold text-primary">5% Inflation: -64%</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Nach 30 Jahren</h4>
                  <p className="text-lg font-bold text-primary">2% Inflation: -45%</p>
                  <p className="text-lg font-bold text-primary">5% Inflation: -78%</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Strategie 1: Investition in Sachwerte</h2>
            <p className="mb-6">
              <strong>Sachwerte</strong> sind die beste Waffe gegen Inflation, da sie mit der Zeit tendenziell an Wert gewinnen. Hier sind die wichtigsten Sachwerte:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Immobilien</h3>
            <p className="mb-4">
              Immobilien sind der Klassiker unter den Inflationsschutz-Anlagen. Sie bieten mehrere Vorteile: Der Wert steigt meist mit der Inflation, Sie können Mieteinnahmen generieren und haben einen realen Gegenwert. Besonders in Ballungsräumen sind Immobilien eine sichere Anlage.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Vorteile von Immobilien:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Wertsteigerung:</strong> Immobilien steigen meist mit der Inflation</li>
                <li><strong>Mieteinnahmen:</strong> Regelmäßige Einnahmen, die mit der Inflation steigen</li>
                <li><strong>Hebeleffekt:</strong> Mit Eigenkapital können Sie größere Beträge investieren</li>
                <li><strong>Steuervorteile:</strong> Abschreibungen und andere steuerliche Vorteile</li>
                <li><strong>Realwert:</strong> Konkreter Gegenwert, der nicht verschwinden kann</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Edelmetalle</h3>
            <p className="mb-4">
              Gold, Silber und andere Edelmetalle sind seit Jahrtausenden ein bewährter Inflationsschutz. Sie behalten ihren Wert, auch wenn Währungen an Kaufkraft verlieren. Gold gilt als "Währung der letzten Instanz" und wird in Krisenzeiten besonders geschätzt.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Edelmetalle im Überblick:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Gold</h4>
                  <p className="text-sm text-muted-foreground">Bester Inflationsschutz, hohe Liquidität, weltweit anerkannt</p>
                  <p className="text-xs text-muted-foreground mt-2">Nachteile: Keine Erträge, Lagerkosten</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Silber</h4>
                  <p className="text-sm text-muted-foreground">Günstiger als Gold, industrielle Nutzung, hohe Volatilität</p>
                  <p className="text-xs text-muted-foreground mt-2">Nachteile: Lagerkosten, weniger liquide</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Platin/Palladium</h4>
                  <p className="text-sm text-muted-foreground">Industrielle Nutzung, hohe Wertdichte, begrenzte Verfügbarkeit</p>
                  <p className="text-xs text-muted-foreground mt-2">Nachteile: Hohe Volatilität, spezialisierte Märkte</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Strategie 2: Aktien und Aktienfonds</h2>
            <p className="mb-6">
              <strong>Aktien</strong> sind eine der besten Anlagen gegen Inflation, da Unternehmen ihre Preise an die Inflation anpassen können und damit ihre Gewinne steigern. Besonders Unternehmen mit starker Marktposition können höhere Preise durchsetzen.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Warum Aktien gegen Inflation schützen</h3>
            <p className="mb-4">
              Unternehmen können ihre Preise erhöhen, wenn die Kosten steigen. Das führt zu höheren Umsätzen und Gewinnen, was sich in steigenden Aktienkursen niederschlägt. Besonders wertvoll sind Aktien von Unternehmen, die in inflationsanfälligen Branchen tätig sind.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Inflationsresistente Aktien:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Energie und Rohstoffe</h4>
                  <p className="text-sm text-muted-foreground">Ölkonzerne, Bergbauunternehmen, Energieversorger</p>
                  <p className="text-xs text-muted-foreground mt-2">Vorteil: Preise steigen mit der Inflation</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Konsumgüter</h4>
                  <p className="text-sm text-muted-foreground">Lebensmittelhersteller, Getränkehersteller, Tabak</p>
                  <p className="text-xs text-muted-foreground mt-2">Vorteil: Stabile Nachfrage, Preiserhöhungen möglich</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Immobilien</h4>
                  <p className="text-sm text-muted-foreground">REITs, Immobilienentwickler, Bauunternehmen</p>
                  <p className="text-xs text-muted-foreground mt-2">Vorteil: Mieten und Werte steigen mit Inflation</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Finanzdienstleister</h4>
                  <p className="text-sm text-muted-foreground">Banken, Versicherungen, Investmentgesellschaften</p>
                  <p className="text-xs text-muted-foreground mt-2">Vorteil: Zinsen steigen oft mit der Inflation</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Strategie 3: Inflationsgeschützte Anleihen</h2>
            <p className="mb-6">
              <strong>Inflationsgeschützte Anleihen</strong> sind spezielle Staatsanleihen, deren Zinsen und Rückzahlungsbetrag automatisch mit der Inflation steigen. Sie bieten einen direkten Schutz vor Kaufkraftverlust.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Funktionsweise inflationsgeschützter Anleihen:</h3>
              <div className="space-y-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Beispiel: 10.000€ Anleihe mit 2% Zinsen</p>
                  <p className="text-sm text-muted-foreground">Bei 3% Inflation: Zinsen steigen auf 5%, Rückzahlung steigt auf 10.300€</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Vorteile:</p>
                  <p className="text-sm text-muted-foreground">Direkter Inflationsschutz, garantierte Rendite über Inflation, staatlich abgesichert</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Nachteile:</p>
                  <p className="text-sm text-muted-foreground">Niedrige Rendite, Zinsänderungsrisiko, begrenzte Verfügbarkeit</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Strategie 4: Diversifikation und Asset Allocation</h2>
            <p className="mb-6">
              <strong>Diversifikation</strong> ist der Schlüssel zum erfolgreichen Inflationsschutz. Streuen Sie Ihr Vermögen über verschiedene Anlageklassen, Länder und Währungen, um das Risiko zu minimieren.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel für eine inflationsgeschützte Asset Allocation:</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">40%</h4>
                  <p className="text-lg font-bold text-primary">Aktien</p>
                  <p className="text-sm text-muted-foreground">Wachstum und Inflationsschutz</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">25%</h4>
                  <p className="text-lg font-bold text-primary">Immobilien</p>
                  <p className="text-sm text-muted-foreground">Realwerte und Mieteinnahmen</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">20%</h4>
                  <p className="text-lg font-bold text-primary">Edelmetalle</p>
                  <p className="text-sm text-muted-foreground">Krisenschutz und Inflationsschutz</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">15%</h4>
                  <p className="text-lg font-bold text-primary">Anleihen</p>
                  <p className="text-sm text-muted-foreground">Stabilität und Liquidität</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Strategie 5: Alternative Anlagen</h2>
            <p className="mb-6">
              Neben den klassischen Anlagen gibt es auch alternative Möglichkeiten, sich vor Inflation zu schützen:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kryptowährungen</h3>
            <p className="mb-4">
              Kryptowährungen wie Bitcoin werden oft als "digitales Gold" bezeichnet und als Inflationsschutz beworben. Sie sind nicht an traditionelle Finanzsysteme gebunden und haben eine begrenzte Verfügbarkeit.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kunst und Sammlerobjekte</h3>
            <p className="mb-4">
              Kunst, Wein, Uhren oder andere Sammlerobjekte können ebenfalls vor Inflation schützen. Sie haben einen intrinsischen Wert und sind unabhängig von Währungen.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Rohstoffe und Commodities</h3>
            <p className="mb-4">
              Rohstoffe wie Öl, Gas, Kupfer oder Weizen steigen oft mit der Inflation, da sie die Grundlage für Produktion und Konsum sind.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für die Umsetzung</h2>
            <p className="mb-6">
              Hier sind praktische Tipps, wie Sie Ihre Inflationsschutz-Strategie umsetzen können:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Früh beginnen:</strong> Je früher Sie mit dem Inflationsschutz beginnen, desto besser</li>
              <li><strong>Regelmäßig investieren:</strong> Nutzen Sie Sparpläne für kontinuierliche Investitionen</li>
              <li><strong>Kosten beachten:</strong> Niedrige Kosten erhöhen Ihre Rendite</li>
              <li><strong>Steuern optimieren:</strong> Nutzen Sie steuerliche Vorteile wie Freibeträge</li>
              <li><strong>Liquidität planen:</strong> Behalten Sie genügend Bargeld für Notfälle</li>
              <li><strong>Professionelle Beratung:</strong> Holen Sie sich Rat von Experten</li>
              <li><strong>Geduld haben:</strong> Inflationsschutz ist eine langfristige Strategie</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fehler vermeiden</h2>
            <p className="mb-6">
              Bei der Umsetzung von Inflationsschutz-Strategien gibt es einige häufige Fehler zu vermeiden:
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Häufige Fehler beim Inflationsschutz:</h3>
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Zu viel Bargeld</h4>
                  <p className="text-sm text-muted-foreground">Bargeld verliert kontinuierlich an Kaufkraft. Investieren Sie einen Teil in inflationsgeschützte Anlagen.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Keine Diversifikation</h4>
                  <p className="text-sm text-muted-foreground">Streuen Sie Ihr Risiko über verschiedene Anlageklassen. Nicht alles auf eine Karte setzen.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Emotionale Entscheidungen</h4>
                  <p className="text-sm text-muted-foreground">Lassen Sie sich nicht von Angst oder Gier leiten. Bleiben Sie bei Ihrer langfristigen Strategie.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Zu hohe Kosten</h4>
                  <p className="text-sm text-muted-foreground">Hohe Gebühren können Ihre Rendite erheblich mindern. Achten Sie auf niedrige Kosten.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie viel sollte ich in inflationsgeschützte Anlagen investieren?</h3>
            <p className="mb-6">
              Als Faustregel sollten Sie 60-80% Ihres Vermögens in inflationsgeschützte Anlagen investieren. Der Rest kann in Bargeld und kurzfristige Anlagen fließen, um Liquidität zu gewährleisten.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Sind Kryptowährungen ein guter Inflationsschutz?</h3>
            <p className="mb-6">
              Kryptowährungen können als Inflationsschutz dienen, sind aber sehr volatil und riskant. Sie sollten nur einen kleinen Teil Ihres Portfolios ausmachen und als Ergänzung zu traditionellen Anlagen gesehen werden.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie oft sollte ich mein Portfolio überprüfen?</h3>
            <p className="mb-6">
              Überprüfen Sie Ihr Portfolio mindestens einmal pro Jahr und passen Sie es bei Bedarf an. Bei größeren Lebensveränderungen oder Marktveränderungen können auch häufige Anpassungen sinnvoll sein.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kann ich auch mit wenig Geld Inflationsschutz betreiben?</h3>
            <p className="mb-6">
              Ja, auch mit wenig Geld können Sie Inflationsschutz betreiben. Nutzen Sie Sparpläne, ETFs oder börsengehandelte Rohstoffe, um auch mit kleinen Beträgen zu investieren.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Welche Anlage ist am besten gegen Inflation?</h3>
            <p className="mb-6">
              Es gibt keine einzelne "beste" Anlage gegen Inflation. Die beste Strategie ist eine Kombination aus verschiedenen Anlageklassen: Aktien, Immobilien, Edelmetalle und inflationsgeschützte Anleihen.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Praxistipp:</h3>
              <p className="mb-4">
                Nutzen Sie unseren <Link href="/inflationsrechner" className="text-primary hover:underline font-medium">Inflationsrechner</Link> für eine schnelle und präzise Berechnung der Kaufkraftentwicklung Ihres Geldes. Er zeigt Ihnen, wie viel Ihr Geld in der Zukunft noch wert ist und hilft Ihnen bei der Planung Ihrer Inflationsschutz-Strategie.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Der Schutz Ihres Geldes vor Inflation ist eine der wichtigsten finanziellen Entscheidungen, die Sie treffen können. Mit der richtigen Strategie können Sie nicht nur den Kaufkraftverlust ausgleichen, sondern sogar von der Inflation profitieren. Wichtig ist, dass Sie früh beginnen, Ihr Vermögen diversifizieren und eine langfristige Perspektive einnehmen. Kombinieren Sie Sachwerte, Aktien, Edelmetalle und inflationsgeschützte Anleihen, um einen umfassenden Schutz zu erreichen. Denken Sie daran: Der beste Zeitpunkt, mit dem Inflationsschutz zu beginnen, ist heute.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Weitere Informationen</h3>
              <p className="mb-4">
                Entdecken Sie weitere nützliche Artikel zu Wirtschaft und Finanzen in unserem <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link> oder nutzen Sie direkt unseren <Link href="/inflationsrechner" className="text-primary hover:underline font-medium">Inflationsrechner</Link> für Ihre Planung.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
