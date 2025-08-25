import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Rabatte richtig berechnen: So sparen Sie im Supermarkt wirklich",
  description: "Lernen Sie, wie Sie Rabatte und Angebote richtig berechnen. Praktische Tipps für den Alltag und wie Sie den besten Preis finden.",
  keywords: "rabatt berechnen, angebote vergleichen, preisvergleich, sparen einkaufen, prozent rabatt, supermarkt angebote",
  openGraph: {
    title: "Rabatte richtig berechnen: So sparen Sie im Supermarkt wirklich",
    description: "Lernen Sie, wie Sie Rabatte und Angebote richtig berechnen. Praktische Tipps für den Alltag und wie Sie den besten Preis finden.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/rabatte-richtig-berechnen",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/rabatte-richtig-berechnen",
      "x-default": "https://www.rechnerjetzt.de/blog/rabatte-richtig-berechnen",
    },
  },
}

export default function RabatteRichtigBerechnenPage() {
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
                <Tag className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Finanzen
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Rabatte richtig berechnen: So sparen Sie im Supermarkt wirklich
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Rabatte und Angebote im Supermarkt können verwirrend sein. Viele Menschen wissen nicht, wie sie den tatsächlichen Preis nach einem Rabatt berechnen oder ob ein Angebot wirklich günstig ist. In diesem Artikel lernen Sie Schritt für Schritt, wie Sie Rabatte richtig berechnen, Angebote vergleichen und im Alltag bares Geld sparen können.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was ist ein Rabatt?</h2>
            <p className="mb-6">
              Ein <strong>Rabatt</strong> ist eine Preisminderung, die vom ursprünglichen Preis abgezogen wird. Er wird meist in Prozent angegeben und kann verschiedene Ursachen haben: Saisonschlussverkauf, Mengenrabatt, Treuerabatt oder Aktionsangebote. Wichtig ist zu verstehen, dass ein Rabatt immer vom ursprünglichen Preis berechnet wird.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie berechnet man Rabatte richtig?</h2>
            <p className="mb-6">
              Die Berechnung von Rabatten folgt einer einfachen Formel. Hier ist die Schritt-für-Schritt-Anleitung:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Bestimmen Sie den ursprünglichen Preis (100%)</li>
              <li>Wählen Sie den Rabattsatz (z.B. 20%)</li>
              <li>Berechnen Sie den Rabattbetrag: <strong>Ursprungspreis × Rabattsatz = Rabattbetrag</strong></li>
              <li>Ziehen Sie den Rabattbetrag vom ursprünglichen Preis ab</li>
            </ol>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Grundformel:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Neuer Preis = Ursprungspreis - (Ursprungspreis × Rabattsatz ÷ 100)
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Beispiele zur Rabattberechnung</h2>
            <p className="mb-6">
              Hier sind praktische Beispiele, die zeigen, wie Rabatte berechnet werden:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 1: 20% Rabatt auf 50€</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Ursprungspreis</p>
                  <p className="text-lg font-bold text-primary">50,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Rabatt (20%)</p>
                  <p className="text-lg font-bold text-primary">10,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Neuer Preis</p>
                  <p className="text-lg font-bold text-primary">40,00 €</p>
                </div>
              </div>
              <div className="bg-card p-3 rounded-lg mt-3 font-mono text-sm">
                <p>Rabatt = 50€ × 20 ÷ 100 = 10€</p>
                <p>Neuer Preis = 50€ - 10€ = 40€</p>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 2: 15% Rabatt auf 80€</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Ursprungspreis</p>
                  <p className="text-lg font-bold text-primary">80,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Rabatt (15%)</p>
                  <p className="text-lg font-bold text-primary">12,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Neuer Preis</p>
                  <p className="text-lg font-bold text-primary">68,00 €</p>
                </div>
              </div>
              <div className="bg-card p-3 rounded-lg mt-3 font-mono text-sm">
                <p>Rabatt = 80€ × 15 ÷ 100 = 12€</p>
                <p>Neuer Preis = 80€ - 12€ = 68€</p>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 3: 30% Rabatt auf 120€</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Ursprungspreis</p>
                  <p className="text-lg font-bold text-primary">120,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Rabatt (30%)</p>
                  <p className="text-lg font-bold text-primary">36,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Neuer Preis</p>
                  <p className="text-lg font-bold text-primary">84,00 €</p>
                </div>
              </div>
              <div className="bg-card p-3 rounded-lg mt-3 font-mono text-sm">
                <p>Rabatt = 120€ × 30 ÷ 100 = 36€</p>
                <p>Neuer Preis = 120€ - 36€ = 84€</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Rabatt rückwärts berechnen</h2>
            <p className="mb-6">
              Oft kennen Sie den neuen Preis nach dem Rabatt und möchten den ursprünglichen Preis oder den Rabattsatz berechnen. Dafür verwenden Sie diese Formeln:
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Formeln für Rückwärtsberechnung:</h3>
              <div className="space-y-3">
                <p className="text-center font-mono bg-card p-2 rounded-lg">
                  Ursprungspreis = Neuer Preis ÷ (1 - Rabattsatz ÷ 100)
                </p>
                <p className="text-center font-mono bg-card p-2 rounded-lg">
                  Rabattsatz = (1 - Neuer Preis ÷ Ursprungspreis) × 100
                </p>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel: Rückwärtsberechnung</h3>
              <p className="mb-4">Ein Produkt kostet nach dem Rabatt 60€. Der Rabatt betrug 25%. Wie hoch war der ursprüngliche Preis?</p>
              <div className="bg-card p-4 rounded-lg font-mono">
                <p>Ursprungspreis = 60€ ÷ (1 - 25 ÷ 100)</p>
                <p>Ursprungspreis = 60€ ÷ 0,75</p>
                <p>Ursprungspreis = 80€</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Verschiedene Arten von Rabatten</h2>
            <p className="mb-6">
              Im Alltag begegnen Ihnen verschiedene Arten von Rabatten, die unterschiedlich berechnet werden:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Prozentuale Rabatte</h3>
            <p className="mb-4">
              Der häufigste Fall: Ein bestimmter Prozentsatz wird vom ursprünglichen Preis abgezogen. Beispiel: 20% Rabatt auf alle Artikel.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Feste Betragsrabatte</h3>
            <p className="mb-4">
              Ein fester Betrag wird vom Preis abgezogen. Beispiel: 5€ Rabatt ab einem Einkaufswert von 50€.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Mengenrabatte</h3>
            <p className="mb-4">
              Bei größeren Mengen gibt es einen zusätzlichen Rabatt. Beispiel: 3 für 2 oder 10% Rabatt ab 5 Stück.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Treuerabatte</h3>
            <p className="mb-4">
              Regelmäßige Kunden erhalten einen Rabatt. Beispiel: 5% Rabatt für Stammkunden.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Tipps zum Sparen beim Einkaufen</h2>
            <p className="mb-6">
              Mit diesen praktischen Tipps können Sie beim Einkaufen bares Geld sparen:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Vergleichen Sie Preise:</strong> Schauen Sie sich verschiedene Geschäfte an</li>
              <li><strong>Nutzen Sie Apps:</strong> Preisvergleichs-Apps zeigen Ihnen die besten Angebote</li>
              <li><strong>Kaufen Sie saisonal:</strong> Obst und Gemüse sind in der Saison günstiger</li>
              <li><strong>Nutzen Sie Kundenkarten:</strong> Sammeln Sie Punkte und nutzen Sie Treuerabatte</li>
              <li><strong>Kaufen Sie in größeren Mengen:</strong> Oft gibt es Mengenrabatte</li>
              <li><strong>Warten Sie auf Angebote:</strong> Nicht alle Rabatte sind wirklich günstig</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie berechne ich 25% Rabatt auf 100€?</h3>
            <p className="mb-6">
              Verwenden Sie die Formel: 100€ × 25 ÷ 100 = 25€ Rabatt. Der neue Preis beträgt 100€ - 25€ = 75€.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Was ist günstiger: 20% Rabatt oder 5€ weniger?</h3>
            <p className="mb-6">
              Das hängt vom ursprünglichen Preis ab. Bei einem Preis über 25€ ist 20% Rabatt günstiger, bei einem Preis unter 25€ ist 5€ weniger günstiger.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie erkenne ich, ob ein Angebot wirklich günstig ist?</h3>
            <p className="mb-6">
              Vergleichen Sie den Preis mit anderen Geschäften, prüfen Sie die Qualität und achten Sie auf versteckte Kosten wie Mindestbestellmengen.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kann ich mehrere Rabatte kombinieren?</h3>
            <p className="mb-6">
              Das hängt von den Geschäftsbedingungen ab. Oft können Sie einen prozentualen Rabatt mit einem festen Betragsrabatt kombinieren.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Was passiert bei einem Rücktritt vom Kauf?</h3>
            <p className="mb-6">
              Bei einem Rücktritt erhalten Sie normalerweise den tatsächlich bezahlten Betrag zurück, nicht den ursprünglichen Preis.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Praxistipp:</h3>
              <p className="mb-4">
                Nutzen Sie unseren <Link href="/prozentrechner" className="text-primary hover:underline font-medium">Prozentrechner</Link> für schnelle und präzise Rabattberechnungen. Er unterstützt alle gängigen Prozentrechnungen und zeigt Ihnen die Schritte zur Lösung.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Rabatte richtig zu berechnen ist eine wichtige Fähigkeit, die Ihnen im Alltag bares Geld sparen kann. Mit den richtigen Formeln und etwas Übung können Sie schnell erkennen, ob ein Angebot wirklich günstig ist. Wichtig ist, dass Sie zwischen verschiedenen Rabattarten unterscheiden und die Berechnungen sorgfältig durchführen. Nutzen Sie die praktischen Beispiele als Referenz und unseren Prozentrechner für komplexere Berechnungen.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Weitere Informationen</h3>
              <p className="mb-4">
                Entdecken Sie weitere nützliche Artikel zu Finanzen und Sparen in unserem <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link> oder nutzen Sie direkt unseren <Link href="/prozentrechner" className="text-primary hover:underline font-medium">Prozentrechner</Link> für Ihre Rabattberechnungen.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
