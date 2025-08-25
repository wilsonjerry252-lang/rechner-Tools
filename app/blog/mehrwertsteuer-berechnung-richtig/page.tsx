import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Mehrwertsteuer berechnen richtig: Methoden & Beispiele",
  description: "Lernen Sie verschiedene Methoden zur MwSt.-Berechnung kennen und sehen Sie praktische Beispiele für Brutto-zu-Netto und Netto-zu-Brutto Berechnungen.",
  keywords: "mehrwertsteuer berechnen, mwst berechnung, brutto netto, steuerberechnung, mwst formel, steuerrechner",
  openGraph: {
    title: "Mehrwertsteuer berechnen richtig: Methoden & Beispiele",
    description: "Lernen Sie verschiedene Methoden zur MwSt.-Berechnung kennen und sehen Sie praktische Beispiele für Brutto-zu-Netto und Netto-zu-Brutto Berechnungen.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/mehrwertsteuer-berechnung-richtig",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/mehrwertsteuer-berechnung-richtig",
      "x-default": "https://www.rechnerjetzt.de/blog/mehrwertsteuer-berechnung-richtig",
    },
  },
}

export default function MehrwertsteuerBerechnungRichtigPage() {
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
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Steuern
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Wie berechnet man die Mehrwertsteuer richtig? (mit Beispielen)
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Die korrekte Berechnung der Mehrwertsteuer ist essentiell für Unternehmer und Verbraucher. Viele Menschen machen Fehler bei der MwSt.-Berechnung, was zu finanziellen Problemen führen kann. In diesem Artikel lernen Sie verschiedene Berechnungsmethoden kennen und erhalten praktische Beispiele für den Alltag, die Ihnen helfen, die Mehrwertsteuer immer korrekt zu berechnen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist die Mehrwertsteuer?</h2>
            <p className="mb-6">
              Die <strong>Mehrwertsteuer</strong> (MwSt.) ist eine indirekte Verbrauchssteuer, die auf den Verkauf von Waren und Dienstleistungen erhoben wird. Sie wird vom Verkäufer an den Käufer weitergegeben und schließlich vom Endverbraucher getragen. In Deutschland ist sie eine der wichtigsten Einnahmequellen des Staates.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie berechnet man die Mehrwertsteuer?</h2>
            <p className="mb-6">
              Die Berechnung der Mehrwertsteuer folgt einer einfachen Formel. Hier ist die Schritt-für-Schritt-Anleitung:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Bestimmen Sie den Nettobetrag (Preis ohne MwSt.)</li>
              <li>Wählen Sie den entsprechenden Steuersatz (19%, 7% oder 0%)</li>
              <li>Berechnen Sie den Steuerbetrag: <strong>Netto × MwSt-Satz = Steuerbetrag</strong></li>
              <li>Addieren Sie den Steuerbetrag zum Nettobetrag für den Bruttopreis</li>
            </ol>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Grundformel:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Mehrwertsteuer = Nettobetrag × (MwSt-Satz ÷ 100)
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Beispiele zur Berechnung</h2>
            <p className="mb-6">
              Hier sind praktische Beispiele, die zeigen, wie die Mehrwertsteuer berechnet wird:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 1: Standardprodukt (19% MwSt.)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Nettopreis</p>
                  <p className="text-lg font-bold text-primary">100,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">MwSt. (19%)</p>
                  <p className="text-lg font-bold text-primary">19,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Bruttopreis</p>
                  <p className="text-lg font-bold text-primary">119,00 €</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 2: Lebensmittel (7% MwSt.)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Nettopreis</p>
                  <p className="text-lg font-bold text-primary">50,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">MwSt. (7%)</p>
                  <p className="text-lg font-bold text-primary">3,50 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Bruttopreis</p>
                  <p className="text-lg font-bold text-primary">53,50 €</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 3: Dienstleistung (19% MwSt.)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Nettopreis</p>
                  <p className="text-lg font-bold text-primary">200,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">MwSt. (19%)</p>
                  <p className="text-lg font-bold text-primary">38,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Bruttopreis</p>
                  <p className="text-lg font-bold text-primary">238,00 €</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Rückwärtsberechnung: Von Brutto zu Netto</h2>
            <p className="mb-6">
              Oft kennen Sie den Bruttopreis und möchten den Nettobetrag berechnen. Dafür verwenden Sie diese Formel:
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Formel für Rückwärtsberechnung:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Nettobetrag = Bruttobetrag ÷ (1 + MwSt-Satz ÷ 100)
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel: Rückwärtsberechnung</h3>
              <p className="mb-4">Ein Produkt kostet 119€ inklusive 19% MwSt. Wie hoch ist der Nettopreis?</p>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Nettopreis = 119€ ÷ (1 + 19 ÷ 100)</p>
                <p>Nettopreis = 119€ ÷ 1,19</p>
                <p>Nettopreis = 100,00€</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Aktuelle MwSt-Sätze in Deutschland</h2>
            <p className="mb-6">
              In Deutschland gelten folgende Mehrwertsteuersätze:
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Übersicht der Steuersätze:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-2">19%</div>
                  <p className="font-semibold text-foreground mb-1">Regelsatz</p>
                  <p className="text-sm text-muted-foreground">Die meisten Waren und Dienstleistungen</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-2">7%</div>
                  <p className="font-semibold text-foreground mb-1">Ermäßigter Satz</p>
                  <p className="text-sm text-muted-foreground">Lebensmittel, Bücher, öffentlicher Verkehr</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-2">0%</div>
                  <p className="font-semibold text-foreground mb-1">Steuerfrei</p>
                  <p className="text-sm text-muted-foreground">Exporte, innergemeinschaftliche Lieferungen</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Welche Produkte haben 7% Mehrwertsteuer?</h3>
            <p className="mb-6">
              Der ermäßigte Satz von 7% gilt für Lebensmittel, Bücher, Zeitungen, Zeitschriften, öffentliche Verkehrsmittel, Hotelübernachtungen und einige andere Waren des täglichen Bedarfs.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Muss ich als Kleinunternehmer Mehrwertsteuer berechnen?</h3>
            <p className="mb-6">
              Kleinunternehmer mit einem Umsatz unter 22.000€ pro Jahr können von der MwSt.-Berechnung befreit werden. Dies ist die sogenannte Kleinunternehmerregelung.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie berechne ich die Mehrwertsteuer rückwärts?</h3>
            <p className="mb-6">
              Um von einem Bruttobetrag auf den Nettobetrag zu kommen, teilen Sie durch (1 + MwSt-Satz/100). Beispiel: 119€ ÷ 1,19 = 100€ Nettobetrag.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Gelten die gleichen MwSt-Sätze in allen Bundesländern?</h3>
            <p className="mb-6">
              Ja, die Mehrwertsteuersätze gelten bundesweit einheitlich. Nur bei der Grunderwerbsteuer gibt es Unterschiede zwischen den Bundesländern.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Was passiert bei falscher MwSt.-Berechnung?</h3>
            <p className="mb-6">
              Falsche MwSt.-Berechnungen können zu Nachzahlungen, Zinsen und Strafen führen. Es ist wichtig, die Berechnungen sorgfältig durchzuführen oder unseren <Link href="/mehrwertsteuer-rechner" className="text-primary hover:underline font-medium">Mehrwertsteuer-Rechner</Link> zu nutzen.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Praxistipp:</h3>
              <p className="mb-4">
                Nutzen Sie unseren <Link href="/mehrwertsteuer-rechner" className="text-primary hover:underline font-medium">Mehrwertsteuer-Rechner</Link> für eine schnelle und präzise Berechnung. Er unterstützt alle gängigen MwSt-Sätze und zeigt Ihnen die Schritte zur Lösung.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die korrekte Berechnung der Mehrwertsteuer ist mit den richtigen Formeln und etwas Übung einfach zu meistern. Wichtig ist, dass Sie zwischen Nettobetrag und Bruttobetrag unterscheiden und die entsprechenden Steuersätze verwenden. Mit unserem praktischen MwSt-Rechner können Sie alle Berechnungen sicher und korrekt durchführen.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Weitere Informationen</h3>
              <p className="mb-4">
                Entdecken Sie weitere nützliche Artikel zu Steuern und Finanzen in unserem <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link> oder nutzen Sie direkt unseren <Link href="/mehrwertsteuer-rechner" className="text-primary hover:underline font-medium">Mehrwertsteuer-Rechner</Link> für Ihre Berechnungen.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
