import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Calculator, Euro, TrendingUp, FileText, Shield, Globe, CheckCircle, AlertCircle } from 'lucide-react';

// Dynamic imports for better performance
const Header = dynamic(() => import("@/components/Header"), { 
  ssr: true,
  loading: () => <div className="h-16 bg-background" />
});

const Footer = dynamic(() => import("@/components/Footer"), { 
  ssr: true 
});

export const metadata: Metadata = {
  title: 'Mehrwertsteuer vs. Umsatzsteuer: Der ultimative Vergleich 2024 | Rechner Tools',
  description: 'Erfahren Sie alles über Mehrwertsteuer und Umsatzsteuer in Deutschland, Österreich und der Schweiz. Kompletter Vergleich mit aktuellen Steuersätzen und praktischen Beispielen.',
  keywords: 'Mehrwertsteuer, Umsatzsteuer, MwSt, Steuersätze, Deutschland, Österreich, Schweiz, DACH, Steuerrechner, 2024',
  openGraph: {
    title: 'Mehrwertsteuer vs. Umsatzsteuer: Der ultimative Vergleich 2024',
    description: 'Kompletter Vergleich der Steuersysteme in Deutschland, Österreich und der Schweiz mit aktuellen Steuersätzen.',
    type: 'article',
    publishedTime: '2024-01-15T10:00:00Z',
    authors: ['Rechner Tools Team'],
    tags: ['Mehrwertsteuer', 'Umsatzsteuer', 'Steuersätze', 'DACH'],
  },
  alternates: {
    canonical: 'https://rechnerjetzt.de/blog/mehrwertsteuer-vs-umsatzsteuer-vergleich-2024',
  },
  // Performance optimizations
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

};

export default function MehrwertsteuerVergleichPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">Startseite</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <span>/</span>
          <span className="text-foreground">Mehrwertsteuer vs. Umsatzsteuer</span>
        </nav>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
              Mehrwertsteuer vs. Umsatzsteuer: Der ultimative Vergleich 2024
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Erfahren Sie alles über die Unterschiede zwischen Mehrwertsteuer und Umsatzsteuer in Deutschland, Österreich und der Schweiz. Mit aktuellen Steuersätzen und praktischen Beispielen.
            </p>
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
              <span>📅 15. Januar 2024</span>
              <span>⏱️ 8 Min. Lesezeit</span>
              <span>👤 Rechner Tools Team</span>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="bg-muted/30 rounded-lg p-4 md:p-6 mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Inhaltsverzeichnis</h2>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li><a href="#grundlagen" className="text-primary hover:underline block py-1">1. Grundlagen: Was ist der Unterschied?</a></li>
              <li><a href="#deutschland" className="text-primary hover:underline block py-1">2. Deutschland: Mehrwertsteuer (MwSt)</a></li>
              <li><a href="#oesterreich" className="text-primary hover:underline block py-1">3. Österreich: Umsatzsteuer (USt)</a></li>
              <li><a href="#schweiz" className="text-primary hover:underline block py-1">4. Schweiz: Mehrwertsteuer (MwSt)</a></li>
              <li><a href="#vergleich" className="text-primary hover:underline block py-1">5. Direkter Vergleich der Steuersätze</a></li>
              <li><a href="#praxisbeispiele" className="text-primary hover:underline block py-1">6. Praxisbeispiele und Berechnungen</a></li>
              <li><a href="#e-commerce" className="text-primary hover:underline block py-1">7. E-Commerce und grenzüberschreitender Handel</a></li>
              <li><a href="#faq" className="text-primary hover:underline block py-1">8. Häufige Fragen (FAQ)</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-sm md:prose-lg max-w-none">
            
            <section id="grundlagen" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 leading-tight">1. Grundlagen: Was ist der Unterschied?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 flex items-center">
                    <Euro className="h-4 w-4 md:h-5 md:w-5 mr-2 text-blue-600 flex-shrink-0" />
                    Mehrwertsteuer (MwSt)
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Die Mehrwertsteuer wird auf den Mehrwert einer Ware oder Dienstleistung erhoben. 
                    Sie wird bei jedem Verkauf in der Wertschöpfungskette berechnet.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 md:p-6 rounded-lg">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 flex items-center">
                    <TrendingUp className="h-4 w-4 md:h-5 md:w-5 mr-2 text-green-600 flex-shrink-0" />
                    Umsatzsteuer (USt)
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Die Umsatzsteuer wird auf den gesamten Umsatz erhoben. 
                    Sie ist eine Verbrauchssteuer, die der Endverbraucher trägt.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 md:p-6 mb-6 md:mb-8">
                <h3 className="text-base md:text-lg font-semibold mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 text-yellow-600 flex-shrink-0" />
                  Wichtiger Hinweis
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  In der Praxis werden die Begriffe "Mehrwertsteuer" und "Umsatzsteuer" oft synonym verwendet. 
                  Der Unterschied liegt hauptsächlich in der theoretischen Betrachtung, nicht in der praktischen Anwendung.
                </p>
              </div>
            </section>

            <section id="deutschland" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">2. Deutschland: Mehrwertsteuer (MwSt)</h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Aktuelle Steuersätze in Deutschland (2024)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">19%</div>
                    <div className="text-sm text-muted-foreground">Regelsteuersatz</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-green-600">7%</div>
                    <div className="text-sm text-muted-foreground">Ermäßigter Satz</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-gray-600">0%</div>
                    <div className="text-sm text-muted-foreground">Nullsatz</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Anwendungsbereiche</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Regelsteuersatz (19%)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Die meisten Waren und Dienstleistungen</li>
                    <li>• Elektronik und Technik</li>
                    <li>• Bekleidung und Schuhe</li>
                    <li>• Möbel und Einrichtung</li>
                    <li>• Dienstleistungen (Beratung, Reparaturen)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ermäßigter Satz (7%)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Lebensmittel (außer Getränke)</li>
                    <li>• Bücher und Zeitungen</li>
                    <li>• Öffentlicher Personennahverkehr</li>
                    <li>• Medizinische Hilfsmittel</li>
                    <li>• Hotelübernachtungen</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="oesterreich" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">3. Österreich: Umsatzsteuer (USt)</h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Aktuelle Steuersätze in Österreich (2024)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">20%</div>
                    <div className="text-sm text-muted-foreground">Regelsteuersatz</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-green-600">10%</div>
                    <div className="text-sm text-muted-foreground">Ermäßigter Satz</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-gray-600">0%</div>
                    <div className="text-sm text-muted-foreground">Nullsatz</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Besonderheiten in Österreich</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Höherer Regelsteuersatz:</strong> 20% vs. 19% in Deutschland</li>
                <li>• <strong>Ermäßigter Satz:</strong> 10% für Lebensmittel, Bücher, Medikamente</li>
                <li>• <strong>Kleinunternehmerregelung:</strong> Befreiung bis 35.000 € Jahresumsatz</li>
                <li>• <strong>Vorsteuerabzug:</strong> Vollständiger Abzug der Vorsteuer möglich</li>
              </ul>
            </section>

            <section id="schweiz" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">4. Schweiz: Mehrwertsteuer (MwSt)</h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Aktuelle Steuersätze in der Schweiz (2024)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">7.7%</div>
                    <div className="text-sm text-muted-foreground">Regelsteuersatz</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-green-600">2.5%</div>
                    <div className="text-sm text-muted-foreground">Ermäßigter Satz</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">3.7%</div>
                    <div className="text-sm text-muted-foreground">Beherbergungsdienstleistungen</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Besonderheiten in der Schweiz</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Niedrigere Steuersätze:</strong> Deutlich niedriger als in DE/AT</li>
                <li>• <strong>Drei Steuersätze:</strong> Regel-, ermäßigter und Beherbergungssatz</li>
                <li>• <strong>Kleinunternehmerregelung:</strong> Befreiung bis 100.000 CHF Jahresumsatz</li>
                <li>• <strong>Einfache Abrechnung:</strong> Quartalsweise Abrechnung möglich</li>
              </ul>
            </section>

            <section id="vergleich" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 leading-tight">5. Direkter Vergleich der Steuersätze</h2>
              
              <div className="overflow-x-auto -mx-4 md:mx-0">
                <div className="min-w-full px-4 md:px-0">
                  <table className="w-full border-collapse border border-muted text-sm md:text-base">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-muted p-2 md:p-3 text-left">Land</th>
                        <th className="border border-muted p-2 md:p-3 text-center">Regelsteuersatz</th>
                        <th className="border border-muted p-2 md:p-3 text-center">Ermäßigter Satz</th>
                        <th className="border border-muted p-2 md:p-3 text-center hidden sm:table-cell">Besonderheiten</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-muted p-2 md:p-3 font-semibold">🇩🇪 Deutschland</td>
                        <td className="border border-muted p-2 md:p-3 text-center font-bold text-blue-600">19%</td>
                        <td className="border border-muted p-2 md:p-3 text-center font-bold text-green-600">7%</td>
                        <td className="border border-muted p-2 md:p-3 text-xs md:text-sm hidden sm:table-cell">Kleinunternehmerregelung bis 22.000 €</td>
                      </tr>
                      <tr>
                        <td className="border border-muted p-2 md:p-3 font-semibold">🇦🇹 Österreich</td>
                        <td className="border border-muted p-2 md:p-3 text-center font-bold text-red-600">20%</td>
                        <td className="border border-muted p-2 md:p-3 text-center font-bold text-green-600">10%</td>
                        <td className="border border-muted p-2 md:p-3 text-xs md:text-sm hidden sm:table-cell">Kleinunternehmerregelung bis 35.000 €</td>
                      </tr>
                      <tr>
                        <td className="border border-muted p-2 md:p-3 font-semibold">🇨🇭 Schweiz</td>
                        <td className="border border-muted p-2 md:p-3 text-center font-bold text-purple-600">7.7%</td>
                        <td className="border border-muted p-2 md:p-3 text-center font-bold text-green-600">2.5%</td>
                        <td className="border border-muted p-2 md:p-3 text-xs md:text-sm hidden sm:table-cell">Kleinunternehmerregelung bis 100.000 CHF</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Mobile-friendly additional info */}
              <div className="sm:hidden mt-4 space-y-2">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <strong>🇩🇪 Deutschland:</strong> Kleinunternehmerregelung bis 22.000 €
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <strong>🇦🇹 Österreich:</strong> Kleinunternehmerregelung bis 35.000 €
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <strong>🇨🇭 Schweiz:</strong> Kleinunternehmerregelung bis 100.000 CHF
                </div>
              </div>
            </section>

            <section id="praxisbeispiele" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">6. Praxisbeispiele und Berechnungen</h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Beispiel: Verkauf eines Laptops für 1.000 €</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-lg font-semibold mb-2">Deutschland</div>
                    <div className="text-sm text-muted-foreground mb-2">Netto: 840,34 €</div>
                    <div className="text-sm text-muted-foreground mb-2">MwSt (19%): 159,66 €</div>
                    <div className="text-lg font-bold text-blue-600">Brutto: 1.000,00 €</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-lg font-semibold mb-2">Österreich</div>
                    <div className="text-sm text-muted-foreground mb-2">Netto: 833,33 €</div>
                    <div className="text-sm text-muted-foreground mb-2">USt (20%): 166,67 €</div>
                    <div className="text-lg font-bold text-green-600">Brutto: 1.000,00 €</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-lg font-semibold mb-2">Schweiz</div>
                    <div className="text-sm text-muted-foreground mb-2">Netto: 928,50 CHF</div>
                    <div className="text-sm text-muted-foreground mb-2">MwSt (7.7%): 71,50 CHF</div>
                    <div className="text-lg font-bold text-purple-600">Brutto: 1.000,00 CHF</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                  Tipp: Nutzen Sie unseren Steuerrechner
                </h3>
                <p className="text-muted-foreground mb-4">
                  Berechnen Sie schnell und einfach die Mehrwertsteuer für alle drei Länder mit unserem kostenlosen Rechner.
                </p>
                <Link href="/mehrwertsteuer-rechner" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Calculator className="h-4 w-4 mr-2" />
                  Zum Steuerrechner
                </Link>
              </div>
            </section>

            <section id="e-commerce" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">7. E-Commerce und grenzüberschreitender Handel</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-blue-600" />
                    EU-Binnenmarkt
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Reverse Charge:</strong> Steuerschuldnerschaft des Empfängers</li>
                    <li>• <strong>MOSS-Verfahren:</strong> Vereinfachte Meldung für digitale Dienstleistungen</li>
                    <li>• <strong>Grenzwerte:</strong> 10.000 € für Fernverkauf</li>
                    <li>• <strong>Dokumentation:</strong> Aufbewahrungspflicht für 10 Jahre</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-600" />
                    Schweiz (Drittland)
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Zollabfertigung:</strong> Zusätzliche Zollgebühren</li>
                    <li>• <strong>Einfuhrumsatzsteuer:</strong> 7.7% auf Warenwert + Zoll</li>
                    <li>• <strong>Grenzwerte:</strong> 65 CHF für Zollbefreiung</li>
                    <li>• <strong>Dokumentation:</strong> Zollpapiere erforderlich</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">8. Häufige Fragen (FAQ)</h2>
              
              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Was ist der Unterschied zwischen Mehrwertsteuer und Umsatzsteuer?</h3>
                  <p className="text-muted-foreground">
                    In der Praxis gibt es keinen Unterschied. Beide Begriffe bezeichnen dieselbe Steuer. 
                    "Mehrwertsteuer" ist der umgangssprachliche Begriff, "Umsatzsteuer" der rechtliche Begriff.
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Kann ich als Kleinunternehmer die Steuer umgehen?</h3>
                  <p className="text-muted-foreground">
                    Nein, die Kleinunternehmerregelung ist keine Steuerumgehung, sondern eine Vereinfachung. 
                    Sie sind von der MwSt-Abrechnung befreit, können aber auch keine Vorsteuer abziehen.
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Wie berechne ich die Mehrwertsteuer rückwärts?</h3>
                  <p className="text-muted-foreground">
                    Bei 19% MwSt: Bruttobetrag ÷ 1,19 = Nettobetrag. Bei 7% MwSt: Bruttobetrag ÷ 1,07 = Nettobetrag. 
                    Nutzen Sie unseren Steuerrechner für genaue Berechnungen.
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Welche Steuersätze gelten für E-Commerce?</h3>
                  <p className="text-muted-foreground">
                    Für E-Commerce gelten dieselben Steuersätze wie für den stationären Handel. 
                    Bei grenzüberschreitenden Verkäufen gelten besondere Regeln (Reverse Charge, MOSS).
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 md:p-8 text-white text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-tight">Berechnen Sie Ihre Mehrwertsteuer jetzt!</h2>
              <p className="text-blue-100 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                Nutzen Sie unseren kostenlosen Steuerrechner für schnelle und genaue Berechnungen in Deutschland, Österreich und der Schweiz.
              </p>
              <Link href="/mehrwertsteuer-rechner" className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm md:text-base">
                <Calculator className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Zum Steuerrechner
              </Link>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="max-w-4xl mx-auto mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Weitere interessante Artikel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Link href="/blog/mwst-saetze-2024-aenderungen-dach" className="group">
              <div className="bg-muted/30 p-4 md:p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2 group-hover:text-primary text-sm md:text-base leading-tight">
                  MwSt-Sätze 2024: Alle Änderungen für Deutschland, Österreich & Schweiz
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Aktuelle Übersicht aller Steuersätze und Änderungen in der DACH-Region
                </p>
              </div>
            </Link>
            
            <Link href="/blog/e-commerce-steuerpflicht-online-haendler" className="group">
              <div className="bg-muted/30 p-4 md:p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2 group-hover:text-primary text-sm md:text-base leading-tight">
                  E-Commerce Steuerpflicht: Was Online-Händler wissen müssen
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Kompletter Leitfaden für Steuerpflichten im Online-Handel
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
