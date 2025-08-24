import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "MwSt. berechnen: Methoden und Beispiele",
  description: "Lernen Sie verschiedene Methoden zur MwSt.-Berechnung kennen und sehen Sie praktische Beispiele für Brutto-zu-Netto und Netto-zu-Brutto Berechnungen.",
  keywords: "mehrwertsteuer berechnen, mwst berechnung, brutto netto, steuerberechnung, mwst formel, steuerrechner",
  openGraph: {
    title: "MwSt. berechnen: Methoden und Beispiele",
    description: "Lernen Sie verschiedene Methoden zur MwSt.-Berechnung kennen und sehen Sie praktische Beispiele für Brutto-zu-Netto und Netto-zu-Brutto Berechnungen.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/mehrwertsteuer-berechnung",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/mehrwertsteuer-berechnung",
      "x-default": "https://www.rechnerjetzt.de/blog/mehrwertsteuer-berechnung",
    },
  },
}

export default function MehrwertsteuerBerechnungPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h3 className="text-2xl font-bold font-serif">Rechner Tools</h3>
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
              Mehrwertsteuer berechnen: Methoden und Beispiele
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>30. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Die korrekte Berechnung der Mehrwertsteuer ist essentiell für Unternehmer und Verbraucher. In diesem Artikel lernen Sie verschiedene Berechnungsmethoden kennen und erhalten praktische Beispiele für den Alltag.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Grundlagen der MwSt-Berechnung</h2>
            <p className="mb-6">
              Die Mehrwertsteuer wird auf den Nettobetrag (ohne MwSt.) aufgeschlagen oder vom Bruttobetrag (mit MwSt.) abgezogen. Die Berechnung erfolgt mit dem aktuellen Steuersatz des jeweiligen Landes.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Aktuelle MwSt-Sätze in den DACH-Ländern:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">19%</div>
                  <p className="text-sm text-muted-foreground">Deutschland</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">20%</div>
                  <p className="text-sm text-muted-foreground">Österreich</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">7,7%</div>
                  <p className="text-sm text-muted-foreground">Schweiz</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Methode 1: Netto zu Brutto</h2>
            <p className="mb-6">
              Diese Methode wird verwendet, wenn Sie von einem Nettobetrag ausgehen und den Bruttobetrag berechnen möchten.
            </p>

            <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-6">
              <h3 className="text-lg font-bold text-green-700 mb-4">Formel: Netto zu Brutto</h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-green-600">Brutto = Netto × (1 + MwSt.-Satz)</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Beispiel:</strong> Nettobetrag 100€, MwSt. 19%
              </p>
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">100€ × (1 + 0,19) = 100€ × 1,19 = 119€</div>
                <p className="text-sm text-muted-foreground mt-2">MwSt.-Betrag: 19€</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Methode 2: Brutto zu Netto</h2>
            <p className="mb-6">
              Diese Methode wird verwendet, wenn Sie von einem Bruttobetrag ausgehen und den Nettobetrag berechnen möchten.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
              <h3 className="text-lg font-bold text-blue-700 mb-4">Formel: Brutto zu Netto</h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-blue-600">Netto = Brutto ÷ (1 + MwSt.-Satz)</div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Beispiel:</strong> Bruttobetrag 119€, MwSt. 19%
              </p>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600">119€ ÷ (1 + 0,19) = 119€ ÷ 1,19 = 100€</div>
                <p className="text-sm text-muted-foreground mt-2">MwSt.-Betrag: 19€</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Berechnungsbeispiele</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 1: Restaurantrechnung</h3>
                <p className="mb-3">Sie essen in einem Restaurant und die Speisen kosten 45€ netto. Berechnen Sie den Bruttopreis.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Berechnung:</p>
                    <div className="text-sm space-y-1">
                      <p>Nettobetrag: 45,00€</p>
                      <p>MwSt. (19%): 45,00€ × 0,19 = 8,55€</p>
                      <p>Bruttobetrag: 45,00€ + 8,55€ = 53,55€</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-bold text-green-700">Ergebnis:</p>
                    <p className="text-lg font-bold text-green-600">53,55€</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 2: Online-Kauf</h3>
                <p className="mb-3">Sie kaufen online einen Artikel für 89,99€ brutto. Berechnen Sie den Nettopreis und die MwSt.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Berechnung:</p>
                    <div className="text-sm space-y-1">
                      <p>Bruttobetrag: 89,99€</p>
                      <p>Nettobetrag: 89,99€ ÷ 1,19 = 75,62€</p>
                      <p>MwSt. (19%): 89,99€ - 75,62€ = 14,37€</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-bold text-blue-700">Ergebnis:</p>
                    <p className="text-sm font-bold text-blue-600">Netto: 75,62€</p>
                    <p className="text-sm font-bold text-blue-600">MwSt.: 14,37€</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Beispiel 3: Geschäftskunde</h3>
                <p className="mb-3">Als Unternehmer kaufen Sie Büromaterial für 200€ netto. Berechnen Sie den Bruttopreis für Ihre Kunden.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Berechnung:</p>
                    <div className="text-sm space-y-1">
                      <p>Nettobetrag: 200,00€</p>
                      <p>MwSt. (19%): 200,00€ × 0,19 = 38,00€</p>
                      <p>Bruttobetrag: 200,00€ + 38,00€ = 238,00€</p>
                    </div>
                  </div>
                  <div className="bg-primary/50 p-3 rounded-lg">
                    <p className="text-sm font-bold text-primary">Ergebnis:</p>
                    <p className="text-lg font-bold text-primary">238,00€</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Besondere Fälle und Ausnahmen</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Ermäßigte MwSt.-Sätze</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Bestimmte Waren und Dienstleistungen haben niedrigere MwSt.-Sätze.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Bücher, Zeitungen: 7% (DE), 10% (AT)</li>
                  <li>• Lebensmittel: 7% (DE), 10% (AT)</li>
                  <li>• Hotelübernachtungen: 7% (DE), 10% (AT)</li>
                  <li>• Medikamente: 7% (DE), 10% (AT)</li>
                </ul>
              </div>
              
              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-xl font-bold text-accent mb-3">MwSt.-freie Leistungen</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Einige Leistungen sind von der MwSt. befreit.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Ärztliche Leistungen</li>
                  <li>• Bankdienstleistungen</li>
                  <li>• Versicherungsleistungen</li>
                  <li>• Internationale Transporte</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">MwSt.-Berechnung bei verschiedenen Währungen</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Wichtige Hinweise:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Die MwSt. wird immer in der Landeswährung berechnet</li>
                <li>Bei ausländischen Rechnungen ist der MwSt.-Satz des Verkaufslandes maßgeblich</li>
                <li>Innerhalb der EU gelten besondere Regelungen für den B2B-Handel</li>
                <li>Bei Online-Käufen aus dem Ausland kann Einfuhrumsatzsteuer anfallen</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Tipps für die Praxis</h2>
            
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Rechner verwenden:</strong> Nutzen Sie unseren MwSt.-Rechner für schnelle Berechnungen</li>
              <li><strong>Runden Sie korrekt:</strong> MwSt.-Beträge werden auf 2 Dezimalstellen gerundet</li>
              <li><strong>Dokumentation:</strong> Halten Sie alle Berechnungen für die Buchhaltung auf</li>
              <li><strong>Regelungen prüfen:</strong> Beachten Sie länderspezifische MwSt.-Vorschriften</li>
              <li><strong>Beratung einholen:</strong> Bei komplexen Fällen lassen Sie sich von einem Steuerberater beraten</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fehler vermeiden</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Falsche MwSt.-Sätze verwenden (z.B. 19% statt 7%)</li>
              <li>MwSt. auf bereits brutto berechnete Beträge aufschlagen</li>
              <li>Vergessen der MwSt. bei Geschäftsrechnungen</li>
              <li>Falsches Runden der MwSt.-Beträge</li>
              <li>Nichtbeachtung von MwSt.-Ausnahmen und -Befreiungen</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">MwSt. in der DACH-Region: Länderspezifische Besonderheiten</h2>
            
            <p className="mb-6">
              Die DACH-Region (Deutschland, Österreich, Schweiz) weist trotz geografischer Nähe erhebliche Unterschiede in der Mehrwertsteuer-Gesetzgebung auf. Diese Unterschiede resultieren aus verschiedenen wirtschaftspolitischen Ansätzen und historischen Entwicklungen der Steuersysteme.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Deutschland: Das moderate Modell</h3>
              <p className="mb-4">
                Deutschland hat mit 19% den niedrigsten Regelsatz in der DACH-Region. Diese moderate Positionierung resultiert aus der wirtschaftlichen Stärke des Landes und der Notwendigkeit, international wettbewerbsfähig zu bleiben. Der ermäßigte Satz von 7% gilt für eine Vielzahl von Gütern des täglichen Bedarfs, was die soziale Komponente der Steuerpolitik unterstreicht.
              </p>
              <p className="mb-4">
                Besonders zu beachten ist die sogenannte "Kleinunternehmerregelung", die es Unternehmen mit einem Jahresumsatz unter 22.000€ ermöglicht, auf die MwSt.-Berechnung zu verzichten. Diese Regelung unterstützt kleine Unternehmen und Start-ups in der Gründungsphase und reduziert den administrativen Aufwand für Kleinstunternehmen.
              </p>
              <p>
                Die deutsche MwSt.-Politik ist geprägt von einem ausgewogenen Ansatz zwischen fiskalischen Interessen und wirtschaftlicher Wettbewerbsfähigkeit. Die Steuersätze werden regelmäßig überprüft und an wirtschaftliche Entwicklungen angepasst.
              </p>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Österreich: Das höhere Niveau</h3>
              <p className="mb-4">
                Österreich hat mit 20% den höchsten Regelsatz in der DACH-Region. Diese höhere Besteuerung resultiert aus der Notwendigkeit, den umfangreichen Sozialstaat zu finanzieren und die hohen Standards in den Bereichen Bildung, Gesundheit und Kultur aufrechtzuerhalten.
              </p>
              <p className="mb-4">
                Der ermäßigte Satz von 10% ist höher als in Deutschland, was zu höheren Preisen für Grundnahrungsmittel und Bücher führt. Diese Politik reflektiert den österreichischen Ansatz, dass auch ermäßigte Sätze einen nennenswerten Beitrag zur Staatsfinanzierung leisten sollten.
              </p>
              <p>
                Österreich hat auch besondere Regelungen für grenzüberschreitende Dienstleistungen innerhalb der EU. Das Land profitiert von seiner zentralen Lage in Europa und den damit verbundenen Handelsbeziehungen. Die höheren Steuersätze werden durch eine hohe Qualität der öffentlichen Dienstleistungen kompensiert.
              </p>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Schweiz: Das liberale Modell</h3>
              <p className="mb-4">
                Die Schweiz hat mit 8.1% den niedrigsten Regelsatz in der DACH-Region. Das Schweizer MwSt.-System ist vergleichsweise einfach aufgebaut, da es weniger Ausnahmen und Sonderregelungen gibt. Diese Einfachheit resultiert aus dem föderalistischen System und der Notwendigkeit, die Steuergesetzgebung in allen Kantonen einheitlich zu gestalten.
              </p>
              <p className="mb-4">
                Besonders zu beachten ist, dass die Schweiz nicht zur EU gehört und daher andere Regelungen für grenzüberschreitende Geschäfte hat. Das Land profitiert von bilateralen Abkommen mit der EU und kann seine Steuerpolitik unabhängiger gestalten.
              </p>
              <p>
                Die niedrigen Steuersätze in der Schweiz sind Teil einer umfassenden Wirtschaftspolitik, die auf Wettbewerbsfähigkeit und Attraktivität für internationale Unternehmen setzt. Die Steuereinnahmen werden durch andere Steuerarten und Gebühren kompensiert.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Auswirkungen auf den Alltag</h2>
            
            <p className="mb-6">
              Die unterschiedlichen MwSt.-Sätze in der DACH-Region haben konkrete Auswirkungen auf den Alltag der Verbraucher und Unternehmen. Diese Unterschiede beeinflussen nicht nur die Preise, sondern auch die Kaufentscheidungen und die grenzüberschreitende Wirtschaftstätigkeit.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-3">Preisvergleiche</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Bei grenzüberschreitenden Einkäufen müssen Verbraucher die unterschiedlichen MwSt.-Sätze berücksichtigen. Ein Produkt, das in Deutschland 100€ kostet, würde in Österreich 101€ und in der Schweiz 89€ kosten (ohne Berücksichtigung anderer Preisunterschiede).
                </p>
                <div className="text-xs text-muted-foreground">
                  <strong>Beispiel:</strong> 100€ Produkt<br/>
                  DE: 119€ (19% MwSt.)<br/>
                  AT: 120€ (20% MwSt.)<br/>
                  CH: 108,10€ (8.1% MwSt.)
                </div>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-3">Unternehmensentscheidungen</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Unternehmen müssen bei grenzüberschreitenden Geschäften die verschiedenen MwSt.-Regelungen beachten. Dies betrifft sowohl die Preisgestaltung als auch die Buchhaltung und Steuererklärungen.
                </p>
                <div className="text-xs text-muted-foreground">
                  <strong>Wichtig:</strong> B2B-Geschäfte unterliegen dem Reverse-Charge-Verfahren, bei dem der Käufer die MwSt. abführt.
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Zukunftsentwicklungen und Trends</h2>
            
            <p className="mb-6">
              Die MwSt.-Systeme in der DACH-Region unterliegen kontinuierlichen Entwicklungen, die von verschiedenen Faktoren beeinflusst werden. Diese Entwicklungen haben Auswirkungen auf die Steuersätze, die Anwendungsbereiche und die Verwaltungsverfahren.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Digitalisierung und E-Commerce</h4>
                <p className="text-sm text-muted-foreground">
                  Die zunehmende Digitalisierung des Handels führt zu neuen Herausforderungen bei der MwSt.-Berechnung. Besonders bei grenzüberschreitenden Online-Verkäufen müssen Unternehmen die verschiedenen Steuersätze und -regelungen beachten. Die EU hat bereits entsprechende Regelungen eingeführt, die auch die DACH-Länder beeinflussen.
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Nachhaltigkeit und Umweltsteuern</h4>
                <p className="text-sm text-muted-foreground">
                  In allen drei Ländern gibt es Bestrebungen, umweltfreundliche Produkte und Dienstleistungen durch niedrigere MwSt.-Sätze zu fördern. Diese Entwicklung ist Teil einer umfassenderen Strategie zur Förderung nachhaltiger Konsum- und Produktionsmuster.
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Harmonisierung der Steuersysteme</h4>
                <p className="text-sm text-muted-foreground">
                  Innerhalb der EU gibt es Bestrebungen zur weiteren Harmonisierung der MwSt.-Systeme. Dies betrifft vor allem Deutschland und Österreich, während die Schweiz als Nicht-EU-Mitglied andere Entwicklungslinien verfolgt.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die korrekte MwSt.-Berechnung ist fundamental für die Buchhaltung und Preisgestaltung in der gesamten DACH-Region. Mit den richtigen Formeln und unserem MwSt.-Rechner können Sie schnell und sicher alle Berechnungen durchführen. Achten Sie auf die aktuellen Steuersätze und besonderen Regelungen in Ihrem Land.
            </p>
            
            <p className="mb-6">
              Die Unterschiede zwischen den Ländern zeigen, dass eine einheitliche MwSt.-Politik in der DACH-Region nicht existiert. Jedes Land verfolgt seine eigenen wirtschaftspolitischen Ziele und passt die Steuersätze entsprechend an. Für Unternehmen und Verbraucher bedeutet dies, dass sie sich mit den spezifischen Regelungen jedes Landes vertraut machen müssen.
            </p>
            
            <p>
              Die Zukunft der MwSt.-Systeme wird von der Digitalisierung, der Nachhaltigkeitspolitik und der internationalen Zusammenarbeit geprägt sein. Unternehmen und Verbraucher sollten diese Entwicklungen verfolgen und sich entsprechend anpassen, um von den neuen Möglichkeiten zu profitieren und Risiken zu minimieren.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Nutzen Sie unseren MwSt.-Rechner
              </h3>
              <p className="text-muted-foreground mb-4">
                Berechnen Sie schnell und einfach Brutto- und Nettopreise mit unserem professionellen Mehrwertsteuerrechner.
              </p>
              <Link href="/">
                <Button className="bg-primary hover:bg-primary/90">
                  Zum MwSt.-Rechner
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
