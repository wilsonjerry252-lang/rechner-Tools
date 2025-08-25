import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Aufschläge und Skonto: So berechnen Unternehmen ihre Preise",
  description: "Lernen Sie, wie Unternehmen Aufschläge und Skonti berechnen. Praktische Beispiele für die Preisgestaltung im B2B-Bereich.",
  keywords: "aufschlag berechnen, skonto berechnen, unternehmen preise, b2b preisgestaltung, gewinnmarge, handelsspanne",
  openGraph: {
    title: "Aufschläge und Skonto: So berechnen Unternehmen ihre Preise",
    description: "Lernen Sie, wie Unternehmen Aufschläge und Skonti berechnen. Praktische Beispiele für die Preisgestaltung im B2B-Bereich.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/aufschlaege-skonto-unternehmen",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/aufschlaege-skonto-unternehmen",
      "x-default": "https://www.rechnerjetzt.de/blog/aufschlaege-skonto-unternehmen",
    },
  },
}

export default function AufschlaegeSkontoUnternehmenPage() {
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
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Unternehmen
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Aufschläge und Skonto: So berechnen Unternehmen ihre Preise
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
              Die korrekte Berechnung von Aufschlägen und Skonti ist entscheidend für den Erfolg von Unternehmen. Viele Unternehmer sind unsicher, wie sie ihre Verkaufspreise kalkulieren und welche Rabatte sie gewähren können. In diesem Artikel erklären wir Schritt für Schritt, wie Unternehmen Aufschläge berechnen, Skonti gewähren und ihre Preise optimal gestalten können.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Was sind Aufschläge und Skonti?</h2>
            <p className="mb-6">
              <strong>Aufschläge</strong> sind prozentuale Erhöhungen des Einkaufspreises, die den Verkaufspreis bilden. Sie decken die Kosten des Unternehmens und erzeugen Gewinn. <strong>Skonti</strong> sind prozentuale Nachlässe, die Unternehmen bei schneller Bezahlung oder bei größeren Bestellmengen gewähren. Beide sind wichtige Instrumente der Preisgestaltung im B2B-Bereich.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie berechnet man Aufschläge?</h2>
            <p className="mb-6">
              Die Berechnung von Aufschlägen folgt einer einfachen Formel. Hier ist die Schritt-für-Schritt-Anleitung:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Bestimmen Sie den Einkaufspreis (Kosten)</li>
              <li>Wählen Sie den gewünschten Aufschlagssatz (z.B. 30%)</li>
              <li>Berechnen Sie den Aufschlag: <strong>Einkaufspreis × Aufschlagssatz = Aufschlag</strong></li>
              <li>Addieren Sie den Aufschlag zum Einkaufspreis für den Verkaufspreis</li>
            </ol>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Grundformel für Aufschläge:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Verkaufspreis = Einkaufspreis × (1 + Aufschlagssatz ÷ 100)
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Beispiele zur Aufschlagsberechnung</h2>
            <p className="mb-6">
              Hier sind praktische Beispiele, die zeigen, wie Aufschläge berechnet werden:
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 1: 25% Aufschlag auf 100€ Einkaufspreis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Einkaufspreis</p>
                  <p className="text-lg font-bold text-primary">100,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Aufschlag (25%)</p>
                  <p className="text-lg font-bold text-primary">25,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Verkaufspreis</p>
                  <p className="text-lg font-bold text-primary">125,00 €</p>
                </div>
              </div>
              <div className="bg-card p-3 rounded-lg mt-3 font-mono text-sm">
                <p>Aufschlag = 100€ × 25 ÷ 100 = 25€</p>
                <p>Verkaufspreis = 100€ + 25€ = 125€</p>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 2: 40% Aufschlag auf 200€ Einkaufspreis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Einkaufspreis</p>
                  <p className="text-lg font-bold text-primary">200,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Aufschlag (40%)</p>
                  <p className="text-lg font-bold text-primary">80,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Verkaufspreis</p>
                  <p className="text-lg font-bold text-primary">280,00 €</p>
                </div>
              </div>
              <div className="bg-card p-3 rounded-lg mt-3 font-mono text-sm">
                <p>Aufschlag = 200€ × 40 ÷ 100 = 80€</p>
                <p>Verkaufspreis = 200€ + 80€ = 280€</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wie berechnet man Skonti?</h2>
            <p className="mb-6">
              Skonti sind Nachlässe, die Unternehmen gewähren. Die Berechnung erfolgt ähnlich wie bei Rabatten:
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Formel für Skonti:</h3>
              <p className="text-center text-lg font-mono bg-card p-3 rounded-lg">
                Skonto = Verkaufspreis × (Skontosatz ÷ 100)
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Beispiel: 3% Skonto bei 1000€ Rechnungsbetrag</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Rechnungsbetrag</p>
                  <p className="text-lg font-bold text-primary">1000,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Skonto (3%)</p>
                  <p className="text-lg font-bold text-primary">30,00 €</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="font-semibold text-foreground">Zahlungsbetrag</p>
                  <p className="text-lg font-bold text-primary">970,00 €</p>
                </div>
              </div>
              <div className="bg-card p-3 rounded-lg mt-3 font-mono text-sm">
                <p>Skonto = 1000€ × 3 ÷ 100 = 30€</p>
                <p>Zahlungsbetrag = 1000€ - 30€ = 970€</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Verschiedene Arten von Aufschlägen</h2>
            <p className="mb-6">
              Unternehmen verwenden verschiedene Arten von Aufschlägen je nach Branche und Geschäftsmodell:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Handelsaufschlag</h3>
            <p className="mb-4">
              Der klassische Aufschlag im Einzelhandel, der die Kosten und den Gewinn deckt. Typisch sind 20-50% je nach Produktkategorie.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Gewinnaufschlag</h3>
            <p className="mb-4">
              Ein zusätzlicher Aufschlag, der den gewünschten Gewinn sicherstellt. Dieser wird auf den Handelsaufschlag aufgeschlagen.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kostenaufschlag</h3>
            <p className="mb-4">
              Ein Aufschlag, der alle anfallenden Kosten (Lager, Transport, Verwaltung) deckt. Wichtig für die Kostendeckung.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Risikoaufschlag</h3>
            <p className="mb-4">
              Ein zusätzlicher Aufschlag für unsichere Geschäfte oder Zahlungsrisiken. Wichtig bei neuen Kunden oder schwierigen Märkten.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Skonti und Zahlungsbedingungen</h2>
            <p className="mb-6">
              Skonti sind wichtige Instrumente zur Steuerung des Zahlungsverhaltens:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Zahlungsskonto</h3>
            <p className="mb-4">
              Ein Nachlass bei schneller Bezahlung. Beispiel: "3% Skonto bei Zahlung innerhalb von 10 Tagen, 30 Tage netto".
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Mengenskonto</h3>
            <p className="mb-4">
              Ein Nachlass bei größeren Bestellmengen. Beispiel: 5% Skonto ab 100 Stück, 10% Skonto ab 500 Stück.
            </h3>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Treueskonto</h3>
            <p className="mb-4">
              Ein Nachlass für langjährige Kunden. Wichtig für die Kundenbindung und den Aufbau von Geschäftsbeziehungen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für Unternehmen</h2>
            <p className="mb-6">
              Mit diesen Tipps können Unternehmen ihre Preisgestaltung optimieren:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Kostenanalyse:</strong> Berechnen Sie alle anfallenden Kosten genau</li>
              <li><strong>Marktanalyse:</strong> Schauen Sie sich die Preise der Konkurrenz an</li>
              <li><strong>Kundensegmentierung:</strong> Verschiedene Kunden können verschiedene Preise zahlen</li>
              <li><strong>Flexibilität:</strong> Passen Sie Aufschläge und Skonti an die Marktsituation an</li>
              <li><strong>Kommunikation:</strong> Erklären Sie Ihren Kunden die Preisgestaltung transparent</li>
              <li><strong>Überwachung:</strong> Überprüfen Sie regelmäßig die Rentabilität Ihrer Preise</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie hoch sollte mein Aufschlag sein?</h3>
            <p className="mb-6">
              Der Aufschlag hängt von Ihrer Branche, den Kosten und der gewünschten Gewinnmarge ab. Typisch sind 20-50% im Einzelhandel, 100-300% im Fachhandel.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kann ich mehrere Skonti kombinieren?</h3>
            <p className="mb-6">
              Ja, Sie können verschiedene Skonti kombinieren. Beispiel: 3% Zahlungsskonto + 5% Mengenskonto = 8% Gesamtskonto.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie berechne ich die Gewinnmarge?</h3>
            <p className="mb-6">
              Gewinnmarge = (Verkaufspreis - Einkaufspreis) ÷ Verkaufspreis × 100. Beispiel: (125€ - 100€) ÷ 125€ × 100 = 20%.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Was ist der Unterschied zwischen Aufschlag und Gewinnmarge?</h3>
            <p className="mb-6">
              Der Aufschlag wird auf den Einkaufspreis berechnet, die Gewinnmarge auf den Verkaufspreis. Eine 25%ige Aufschlag entspricht einer 20%igen Gewinnmarge.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie kann ich meine Preise konkurrenzfähig halten?</h3>
            <p className="mb-6">
              Analysieren Sie die Konkurrenz, optimieren Sie Ihre Kosten und bieten Sie zusätzliche Leistungen, die den höheren Preis rechtfertigen.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Praxistipp:</h3>
              <p className="mb-4">
                Nutzen Sie unseren <Link href="/prozentrechner" className="text-primary hover:underline font-medium">Prozentrechner</Link> für schnelle und präzise Berechnungen von Aufschlägen und Skonti. Er unterstützt alle gängigen Prozentrechnungen und zeigt Ihnen die Schritte zur Lösung.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die korrekte Berechnung von Aufschlägen und Skonti ist entscheidend für den Erfolg von Unternehmen. Mit den richtigen Formeln können Sie Ihre Preise optimal kalkulieren und dabei alle Kosten decken sowie den gewünschten Gewinn erzielen. Wichtig ist, dass Sie Ihre Preisgestaltung regelmäßig überprüfen und an die Marktsituation anpassen. Nutzen Sie die praktischen Beispiele als Referenz und unseren Prozentrechner für komplexere Berechnungen.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Weitere Informationen</h3>
              <p className="mb-4">
                Entdecken Sie weitere nützliche Artikel zu Unternehmensführung und Preisgestaltung in unserem <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link> oder nutzen Sie direkt unseren <Link href="/prozentrechner" className="text-primary hover:underline font-medium">Prozentrechner</Link> für Ihre Berechnungen.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
