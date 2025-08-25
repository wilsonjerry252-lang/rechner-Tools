import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Mehrwertsteuer im Online-Handel: Was Shop-Betreiber wissen müssen",
  description: "Erfahren Sie alles über Mehrwertsteuer im Online-Handel. Wichtige Regeln für Shop-Betreiber, grenzüberschreitende Geschäfte und praktische Tipps.",
  keywords: "mehrwertsteuer online handel, mwst shop betreiber, ecommerce steuern, grenzüberschreitender handel, mwst online shop",
  openGraph: {
    title: "Mehrwertsteuer im Online-Handel: Was Shop-Betreiber wissen müssen",
    description: "Erfahren Sie alles über Mehrwertsteuer im Online-Handel. Wichtige Regeln für Shop-Betreiber, grenzüberschreitende Geschäfte und praktische Tipps.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/mehrwertsteuer-online-handel",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/mehrwertsteuer-online-handel",
      "x-default": "https://www.rechnerjetzt.de/blog/mehrwertsteuer-online-handel",
    },
  },
}

export default function MehrwertsteuerOnlineHandelPage() {
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
                <ShoppingCart className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Steuern
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Mehrwertsteuer im Online-Handel: Was Shop-Betreiber wissen müssen
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
              Der Online-Handel boomt und immer mehr Menschen gründen eigene Online-Shops. Doch viele Shop-Betreiber sind unsicher, welche Mehrwertsteuer-Regeln für sie gelten. In diesem Artikel erklären wir Schritt für Schritt alles, was Sie über MwSt. im Online-Handel wissen müssen, von der Bestimmung des richtigen Steuersatzes bis hin zu grenzüberschreitenden Geschäften.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist die Mehrwertsteuer im Online-Handel?</h2>
            <p className="mb-6">
              Die <strong>Mehrwertsteuer im Online-Handel</strong> funktioniert grundsätzlich genauso wie im stationären Handel. Sie wird auf den Verkauf von Waren und Dienstleistungen erhoben und vom Endverbraucher getragen. Der entscheidende Unterschied liegt in der Bestimmung des <strong>Ortes der Leistungserbringung</strong> und der damit verbundenen Steuersätze.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie bestimmt man den richtigen Steuersatz?</h2>
            <p className="mb-6">
              Die Bestimmung des richtigen Mehrwertsteuersatzes im Online-Handel folgt klaren Regeln. Hier ist die Schritt-für-Schritt-Anleitung:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Bestimmen Sie den Sitz des Kunden (Rechnungsadresse)</li>
              <li>Prüfen Sie, ob es sich um B2B oder B2C handelt</li>
              <li>Wählen Sie den entsprechenden Steuersatz des Ziellandes</li>
              <li>Berücksichtigen Sie besondere Regelungen für digitale Dienstleistungen</li>
            </ol>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Grundregel:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Der Steuersatz richtet sich nach dem Sitz des Kunden
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Beispiele zur MwSt-Berechnung im Online-Handel</h2>
            <p className="mb-6">
              Hier sind praktische Beispiele, die zeigen, wie die Mehrwertsteuer im Online-Handel berechnet wird:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 1: Verkauf innerhalb Deutschlands</h3>
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
              <p className="text-sm text-muted-foreground mt-3 text-center">Deutscher Kunde = 19% MwSt.</p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 2: Verkauf nach Österreich (B2C)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Nettopreis</p>
                  <p className="text-lg font-bold text-primary">100,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">MwSt. (20%)</p>
                  <p className="text-lg font-bold text-primary">20,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Bruttopreis</p>
                  <p className="text-lg font-bold text-primary">120,00 €</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">Österreichischer Kunde = 20% MwSt.</p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 3: B2B-Verkauf in die Schweiz</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Nettopreis</p>
                  <p className="text-lg font-bold text-primary">100,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">MwSt. (0%)</p>
                  <p className="text-lg font-bold text-primary">0,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Bruttopreis</p>
                  <p className="text-lg font-bold text-primary">100,00 €</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">Schweizer Unternehmen = 0% MwSt. (Reverse Charge)</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Besondere Regelungen für Online-Shops</h2>
            <p className="mb-6">
              Im Online-Handel gelten einige besondere Regelungen, die Shop-Betreiber kennen müssen:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Grenzwerte für grenzüberschreitende Verkäufe</h3>
            <p className="mb-4">
              Für Verkäufe in andere EU-Länder gelten bestimmte Grenzwerte. Liegt der Umsatz unter dem Grenzwert, kann der deutsche Steuersatz angewendet werden. Darüber hinaus muss der Steuersatz des Ziellandes verwendet werden.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Digitale Dienstleistungen</h3>
            <p className="mb-4">
              Für digitale Dienstleistungen (E-Books, Software, Online-Kurse) gelten seit 2015 besondere Regelungen. Der Steuersatz richtet sich immer nach dem Sitz des Kunden, unabhängig vom Umsatz.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Marketplace-Regelungen</h3>
            <p className="mb-4">
              Verkaufen Sie über Online-Marktplätze wie Amazon oder eBay, gelten besondere Regelungen. Der Marktplatz kann für die MwSt.-Abrechnung verantwortlich sein.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">MwSt-Sätze in verschiedenen Ländern</h2>
            <p className="mb-6">
              Hier ist eine Übersicht der wichtigsten Mehrwertsteuersätze in Europa:
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Übersicht der Steuersätze:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-2">19%</div>
                  <p className="font-semibold text-foreground mb-1">Deutschland</p>
                  <p className="text-sm text-muted-foreground">Regelsatz</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-2">20%</div>
                  <p className="font-semibold text-foreground mb-1">Österreich</p>
                  <p className="text-sm text-muted-foreground">Regelsatz</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-2">7,7%</div>
                  <p className="font-semibold text-foreground mb-1">Schweiz</p>
                  <p className="text-sm text-muted-foreground">Regelsatz</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Welchen Steuersatz muss ich bei Verkäufen ins Ausland verwenden?</h3>
            <p className="mb-6">
              Bei Verkäufen ins Ausland richtet sich der Steuersatz nach dem Sitz des Kunden. Für EU-Länder gelten die jeweiligen nationalen Steuersätze, für Drittländer gelten besondere Regelungen.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Muss ich mich in anderen Ländern steuerlich registrieren?</h3>
            <p className="mb-6">
              Bei Überschreitung bestimmter Umsatzgrenzen müssen Sie sich in anderen EU-Ländern steuerlich registrieren. Dies ist der sogenannte "Ort der Leistungserbringung".
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie funktioniert die Reverse-Charge-Regelung?</h3>
            <p className="mb-6">
              Bei B2B-Geschäften in andere EU-Länder wird die MwSt. nicht vom Verkäufer, sondern vom Käufer abgeführt. Der Verkäufer stellt eine Rechnung ohne MwSt. aus.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Welche Dokumente brauche ich für grenzüberschreitende Verkäufe?</h3>
            <p className="mb-6">
              Sie benötigen eine korrekte Rechnung mit allen erforderlichen Angaben, einschließlich der Steuernummer und des Steuersatzes des Ziellandes.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Was passiert bei falscher MwSt.-Berechnung im Online-Handel?</h3>
            <p className="mb-6">
              Falsche MwSt.-Berechnungen können zu Nachzahlungen, Zinsen und Strafen führen. Besonders bei grenzüberschreitenden Geschäften ist die korrekte Berechnung wichtig.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Praxistipp:</h3>
              <p className="mb-4">
                Nutzen Sie unseren <Link href="/mehrwertsteuer-rechner" className="text-primary hover:underline font-medium">Mehrwertsteuer-Rechner</Link> für eine schnelle und präzise Berechnung. Er unterstützt alle gängigen MwSt-Sätze und zeigt Ihnen die Schritte zur Lösung.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die Mehrwertsteuer im Online-Handel ist komplex, aber mit den richtigen Informationen gut zu bewältigen. Wichtig ist, dass Sie den Ort der Leistungserbringung korrekt bestimmen und die entsprechenden Steuersätze verwenden. Bei grenzüberschreitenden Geschäften sollten Sie sich über die besonderen Regelungen informieren. Mit unserem praktischen MwSt-Rechner können Sie alle Berechnungen sicher und korrekt durchführen.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Weitere Informationen</h3>
              <p className="mb-4">
                Entdecken Sie weitere nützliche Artikel zu Steuern und Online-Handel in unserem <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link> oder nutzen Sie direkt unseren <Link href="/mehrwertsteuer-rechner" className="text-primary hover:underline font-medium">Mehrwertsteuer-Rechner</Link> für Ihre Berechnungen.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
