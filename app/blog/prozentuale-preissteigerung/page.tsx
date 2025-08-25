import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, TrendingUp as TrendingUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Prozentuale Preissteigerung: Leitfaden für Verbraucher",
  description: "Lernen Sie, wie Sie prozentuale Preissteigerungen berechnen und verstehen. Praktische Beispiele und Tipps für den Alltag.",
  keywords: "preissteigerung berechnen, inflation verstehen, prozentuale erhöhung, preisänderung, kostensteigerung, verbraucherpreise",
  openGraph: {
    title: "Prozentuale Preissteigerung: Leitfaden für Verbraucher",
    description: "Lernen Sie, wie Sie prozentuale Preissteigerungen berechnen und verstehen. Praktische Beispiele und Tipps für den Alltag.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/prozentuale-preissteigerung",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/prozentuale-preissteigerung",
      "x-default": "https://www.rechnerjetzt.de/blog/prozentuale-preissteigerung",
    },
  },
}

export default function ProzentualePreissteigerungPage() {
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
                <TrendingUpIcon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Finanzen
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Prozentuale Preissteigerung: Leitfaden für Verbraucher
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
              Preissteigerungen begegnen uns im Alltag ständig - ob bei Lebensmitteln, Energie, Mieten oder anderen Ausgaben. Viele Verbraucher sind unsicher, wie sie prozentuale Preissteigerungen berechnen und verstehen sollen. In diesem Artikel erklären wir Schritt für Schritt, wie Sie Preissteigerungen berechnen, was sie für Ihr Budget bedeuten und wie Sie mit steigenden Kosten umgehen können.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist eine prozentuale Preissteigerung?</h2>
            <p className="mb-6">
              Eine <strong>prozentuale Preissteigerung</strong> zeigt, um wie viel Prozent sich ein Preis im Vergleich zu einem früheren Zeitpunkt erhöht hat. Sie wird berechnet, indem man die Differenz zwischen dem neuen und dem alten Preis durch den alten Preis teilt und mit 100 multipliziert. Diese Berechnung ist wichtig, um die tatsächliche Belastung für Ihr Budget zu verstehen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie berechnet man prozentuale Preissteigerungen?</h2>
            <p className="mb-6">
              Die Berechnung von prozentualen Preissteigerungen folgt einer einfachen Formel. Hier ist die Schritt-für-Schritt-Anleitung:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Bestimmen Sie den alten Preis (Ausgangspreis)</li>
              <li>Bestimmen Sie den neuen Preis (aktueller Preis)</li>
              <li>Berechnen Sie die Differenz: <strong>Neuer Preis - Alter Preis = Preisänderung</strong></li>
              <li>Teilen Sie die Differenz durch den alten Preis und multiplizieren Sie mit 100</li>
            </ol>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Grundformel:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Preissteigerung (%) = (Neuer Preis - Alter Preis) ÷ Alter Preis × 100
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Beispiele zur Berechnung von Preissteigerungen</h2>
            <p className="mb-6">
              Hier sind praktische Beispiele, die zeigen, wie prozentuale Preissteigerungen berechnet werden:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 1: Lebensmittelpreis</h3>
              <p className="mb-4">Ein Brot kostete gestern 2,50€ und heute 3,00€. Um wie viel Prozent ist der Preis gestiegen?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Alter Preis</p>
                  <p className="text-lg font-bold text-primary">2,50 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Neuer Preis</p>
                  <p className="text-lg font-bold text-primary">3,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Preisänderung</p>
                  <p className="text-lg font-bold text-primary">0,50 €</p>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Preissteigerung = (3,00€ - 2,50€) ÷ 2,50€ × 100</p>
                <p>Preissteigerung = 0,50€ ÷ 2,50€ × 100</p>
                <p>Preissteigerung = 0,2 × 100 = 20%</p>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 2: Mietpreis</h3>
              <p className="mb-4">Eine Wohnung kostete vor einem Jahr 800€ Miete und jetzt 880€. Um wie viel Prozent ist die Miete gestiegen?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Alte Miete</p>
                  <p className="text-lg font-bold text-primary">800,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Neue Miete</p>
                  <p className="text-lg font-bold text-primary">880,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Mietänderung</p>
                  <p className="text-lg font-bold text-primary">80,00 €</p>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Preissteigerung = (880€ - 800€) ÷ 800€ × 100</p>
                <p>Preissteigerung = 80€ ÷ 800€ × 100</p>
                <p>Preissteigerung = 0,1 × 100 = 10%</p>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 3: Energiekosten</h3>
              <p className="mb-4">Die Stromkosten stiegen von 120€ auf 150€ pro Monat. Um wie viel Prozent sind sie gestiegen?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Alte Kosten</p>
                  <p className="text-lg font-bold text-primary">120,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Neue Kosten</p>
                  <p className="text-lg font-bold text-primary">150,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Kostenänderung</p>
                  <p className="text-lg font-bold text-primary">30,00 €</p>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Preissteigerung = (150€ - 120€) ÷ 120€ × 100</p>
                <p>Preissteigerung = 30€ ÷ 120€ × 100</p>
                <p>Preissteigerung = 0,25 × 100 = 25%</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Rückwärtsberechnung: Neuen Preis bei bekannter Preissteigerung</h2>
            <p className="mb-6">
              Oft kennen Sie den alten Preis und die prozentuale Preissteigerung und möchten den neuen Preis berechnen. Dafür verwenden Sie diese Formel:
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Formel für Vorwärtsberechnung:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Neuer Preis = Alter Preis × (1 + Preissteigerung ÷ 100)
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel: Vorwärtsberechnung</h3>
              <p className="mb-4">Ein Produkt kostete 100€ und der Preis steigt um 15%. Wie hoch ist der neue Preis?</p>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Neuer Preis = 100€ × (1 + 15 ÷ 100)</p>
                <p>Neuer Preis = 100€ × 1,15</p>
                <p>Neuer Preis = 115€</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Auswirkungen von Preissteigerungen auf Ihr Budget</h2>
            <p className="mb-6">
              Preissteigerungen haben direkte Auswirkungen auf Ihr verfügbares Einkommen. Hier sind die wichtigsten Bereiche:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kaufkraftverlust</h3>
            <p className="mb-4">
              Bei steigenden Preisen können Sie sich mit dem gleichen Geld weniger leisten. Eine 10%ige Preissteigerung bedeutet, dass Sie 10% weniger kaufen können.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Budgetplanung</h3>
            <p className="mb-4">
              Regelmäßige Preissteigerungen erfordern eine Anpassung Ihrer Budgetplanung. Sie müssen Ausgaben reduzieren oder Ihr Einkommen erhöhen.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Sparpotenzial</h3>
            <p className="mb-4">
              Steigende Kosten können Ihr Sparpotenzial reduzieren. Wichtig ist, Prioritäten zu setzen und unnötige Ausgaben zu vermeiden.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Tipps zum Umgang mit Preissteigerungen</h2>
            <p className="mb-6">
              Mit diesen praktischen Tipps können Sie besser mit steigenden Preisen umgehen:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Preise vergleichen:</strong> Schauen Sie sich verschiedene Anbieter an</li>
              <li><strong>Angebote nutzen:</strong> Warten Sie auf Rabatte und Sonderangebote</li>
              <li><strong>Qualität prüfen:</strong> Nicht immer ist der günstigste Preis der beste</li>
              <li><strong>Alternativen suchen:</strong> Gibt es günstigere Alternativen zu Ihren gewohnten Produkten?</li>
              <li><strong>Mengenrabatte nutzen:</strong> Kaufen Sie größere Mengen, wenn es günstiger ist</li>
              <li><strong>Budget anpassen:</strong> Überprüfen Sie regelmäßig Ihre Ausgaben</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie berechne ich eine Preissteigerung von 5% auf 200€?</h3>
            <p className="mb-6">
              Verwenden Sie die Formel: 200€ × (1 + 5 ÷ 100) = 200€ × 1,05 = 210€. Der neue Preis beträgt 210€.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Was bedeutet eine Preissteigerung von 20%?</h3>
            <p className="mb-6">
              Eine Preissteigerung von 20% bedeutet, dass der neue Preis 120% des ursprünglichen Preises beträgt. Der Preis ist also um ein Fünftel gestiegen.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie wirken sich Preissteigerungen auf die Inflation aus?</h3>
            <p className="mb-6">
              Preissteigerungen bei vielen Gütern und Dienstleistungen führen zu einer höheren Inflationsrate. Die Inflationsrate misst die durchschnittliche Preissteigerung in einer Volkswirtschaft.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kann ich Preissteigerungen bei Mieten verhindern?</h3>
            <p className="mb-6">
              Mietpreissteigerungen sind gesetzlich geregelt. In vielen Städten gibt es Mietpreisbremsen, die übermäßige Steigerungen verhindern sollen.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie oft sollte ich meine Ausgaben überprüfen?</h3>
            <p className="mb-6">
              Es ist empfehlenswert, Ihre Ausgaben mindestens monatlich zu überprüfen. Bei starken Preissteigerungen sollten Sie auch kurzfristig reagieren können.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Praxistipp:</h3>
              <p className="mb-4">
                Nutzen Sie unseren <Link href="/prozentrechner" className="text-primary hover:underline font-medium">Prozentrechner</Link> für schnelle und präzise Berechnungen von Preissteigerungen. Er unterstützt alle gängigen Prozentrechnungen und zeigt Ihnen die Schritte zur Lösung.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Prozentuale Preissteigerungen zu verstehen und berechnen zu können ist eine wichtige Fähigkeit für jeden Verbraucher. Mit den richtigen Formeln können Sie schnell erkennen, wie sich steigende Preise auf Ihr Budget auswirken. Wichtig ist, dass Sie regelmäßig Ihre Ausgaben überprüfen und nach Möglichkeiten suchen, Kosten zu senken. Nutzen Sie die praktischen Beispiele als Referenz und unseren Prozentrechner für komplexere Berechnungen.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Weitere Informationen</h3>
              <p className="mb-4">
                Entdecken Sie weitere nützliche Artikel zu Finanzen und Budgetplanung in unserem <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link> oder nutzen Sie direkt unseren <Link href="/prozentrechner" className="text-primary hover:underline font-medium">Prozentrechner</Link> für Ihre Berechnungen.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
