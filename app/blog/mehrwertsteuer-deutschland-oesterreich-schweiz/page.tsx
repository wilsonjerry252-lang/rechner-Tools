import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata = {
  title: "Mehrwertsteuer in Deutschland, Österreich und der Schweiz: Ein Vergleich | Rechner Tools",
  description: "Vergleichen Sie die MwSt-Sätze in den DACH-Ländern. Erfahren Sie alles über Steuersätze, Berechnungsmethoden und praktische Anwendungen.",
  keywords: "mehrwertsteuer, mwst, deutschland, österreich, schweiz, steuersätze, steuerberechnung, dach-länder",
  openGraph: {
    title: "Mehrwertsteuer in Deutschland, Österreich und der Schweiz: Ein Vergleich",
    description: "Vergleichen Sie die MwSt-Sätze in den DACH-Ländern. Erfahren Sie alles über Steuersätze, Berechnungsmethoden und praktische Anwendungen.",
    type: "article",
    publishedTime: "2025-01-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
}

export default function MehrwertsteuerVergleichPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Rechner Tools Logo" width={48} height={48} className="rounded-full shadow-md" />
              <div>
                <h1 className="text-2xl font-bold font-serif">Rechner Tools</h1>
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
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Steuern
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Mehrwertsteuer in Deutschland, Österreich und der Schweiz: Ein Vergleich
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Die Mehrwertsteuer ist ein wichtiger Bestandteil der Wirtschaft in den DACH-Ländern. Doch die Sätze und Regelungen unterscheiden sich erheblich zwischen Deutschland, Österreich und der Schweiz. In diesem Artikel erfahren Sie alles über die Unterschiede und wie Sie diese korrekt berechnen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Grundlagen der Mehrwertsteuer</h2>
            <p className="mb-6">
              Die Mehrwertsteuer (MwSt.) ist eine indirekte Steuer, die auf den Verbrauch von Waren und Dienstleistungen erhoben wird. Sie wird in allen drei Ländern nach dem gleichen Prinzip berechnet, unterscheidet sich aber in den Sätzen und Ausnahmen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">MwSt-Sätze im Vergleich</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Deutschland</h3>
                <div className="text-3xl font-bold text-foreground mb-2">19%</div>
                <p className="text-sm text-muted-foreground">Standard-MwSt-Satz</p>
                <div className="text-2xl font-bold text-foreground mt-2">7%</div>
                <p className="text-sm text-muted-foreground">Ermäßigter Satz</p>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Österreich</h3>
                <div className="text-3xl font-bold text-foreground mb-2">20%</div>
                <p className="text-sm text-muted-foreground">Standard-MwSt-Satz</p>
                <div className="text-2xl font-bold text-foreground mt-2">10%</div>
                <p className="text-sm text-muted-foreground">Ermäßigter Satz</p>
              </div>
              
              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-xl font-bold text-accent mb-3">Schweiz</h3>
                <div className="text-3xl font-bold text-foreground mb-2">7,7%</div>
                <p className="text-sm text-muted-foreground">Standard-MwSt-Satz</p>
                <div className="text-2xl font-bold text-foreground mt-2">2,5%</div>
                <p className="text-sm text-muted-foreground">Ermäßigter Satz</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Besonderheiten und Ausnahmen</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Deutschland</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Ermäßigter Satz von 7% für Bücher, Lebensmittel und Kulturveranstaltungen</li>
              <li>Nullsatz für medizinische Leistungen und internationale Transporte</li>
              <li>Kleinunternehmerregelung bis 22.000€ Umsatz</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Österreich</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Ermäßigter Satz von 10% für Hotelübernachtungen und Restaurantbesuche</li>
              <li>13% für landwirtschaftliche Produkte</li>
              <li>Kleinunternehmerregelung bis 35.000€ Umsatz</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Schweiz</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Ermäßigter Satz von 2,5% für Lebensmittel und Medikamente</li>
              <li>3,7% für Beherbergungsleistungen</li>
              <li>Kleinunternehmerregelung bis 100.000 CHF Umsatz</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Berechnungsbeispiele</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel: Netto zu Brutto</h3>
              <p className="mb-4">Ein Produkt kostet 100€ netto. Berechnen Sie den Bruttopreis:</p>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Deutschland (19%):</span>
                  <span className="font-bold">100€ + 19€ = 119€</span>
                </div>
                <div className="flex justify-between">
                  <span>Österreich (20%):</span>
                  <span className="font-bold">100€ + 20€ = 120€</span>
                </div>
                <div className="flex justify-between">
                  <span>Schweiz (7,7%):</span>
                  <span className="font-bold">100€ + 7,70€ = 107,70€</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wichtige Tipps für Unternehmer</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Dokumentation:</strong> Halten Sie alle Rechnungen und Belege sorgfältig auf</li>
              <li><strong>Fristen einhalten:</strong> Beachten Sie die Voranmeldungsfristen in Ihrem Land</li>
              <li><strong>Beratung:</strong> Lassen Sie sich bei komplexen Fällen von einem Steuerberater beraten</li>
              <li><strong>Software:</strong> Nutzen Sie professionelle Buchhaltungssoftware für die MwSt-Berechnung</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die Mehrwertsteuer in den DACH-Ländern folgt ähnlichen Prinzipien, unterscheidet sich aber in den Sätzen und Ausnahmen. Für Unternehmer ist es wichtig, die spezifischen Regelungen ihres Landes zu kennen und korrekt anzuwenden.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Nutzen Sie unseren MwSt-Rechner
              </h3>
              <p className="text-muted-foreground mb-4">
                Berechnen Sie schnell und einfach Brutto- und Nettopreise mit unserem professionellen Mehrwertsteuerrechner.
              </p>
              <Link href="/">
                <Button className="bg-primary hover:bg-primary/90">
                  Zum MwSt-Rechner
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
