import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Calculator, TrendingUp, AlertTriangle, CheckCircle, Calendar, Euro } from 'lucide-react';

// Dynamic imports for better performance
const Header = dynamic(() => import("@/components/Header"), { 
  ssr: true,
  loading: () => <div className="h-16 bg-background" />
});

const Footer = dynamic(() => import("@/components/Footer"), { 
  ssr: true 
});

export const metadata: Metadata = {
  title: 'MwSt-Sätze 2024: Alle Änderungen für Deutschland, Österreich & Schweiz | Rechner Tools',
  description: 'Aktuelle Übersicht aller Mehrwertsteuersätze 2024 in der DACH-Region. Alle Änderungen, Neuerungen und wichtige Termine für Unternehmen.',
  keywords: 'MwSt-Sätze 2024, Mehrwertsteuer Änderungen, Deutschland, Österreich, Schweiz, DACH, Steuersätze, Unternehmen, 2024',
  openGraph: {
    title: 'MwSt-Sätze 2024: Alle Änderungen für Deutschland, Österreich & Schweiz',
    description: 'Aktuelle Übersicht aller Steuersätze und Änderungen in der DACH-Region für 2024.',
    type: 'article',
    publishedTime: '2024-01-20T10:00:00Z',
    authors: ['Rechner Tools Team'],
    tags: ['MwSt-Sätze', '2024', 'DACH', 'Steueränderungen'],
  },
  alternates: {
    canonical: 'https://rechnerjetzt.de/blog/mwst-saetze-2024-aenderungen-dach',
  },
};

export default function MwstSaetze2024Page() {
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
          <span className="text-foreground">MwSt-Sätze 2024</span>
        </nav>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              MwSt-Sätze 2024: Alle Änderungen für Deutschland, Österreich & Schweiz
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Aktuelle Übersicht aller Mehrwertsteuersätze 2024 in der DACH-Region. Alle Änderungen, Neuerungen und wichtige Termine für Unternehmen.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>📅 20. Januar 2024</span>
              <span>⏱️ 6 Min. Lesezeit</span>
              <span>👤 Rechner Tools Team</span>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Inhaltsverzeichnis</h2>
            <ul className="space-y-2">
              <li><a href="#uebersicht" className="text-primary hover:underline">1. Übersicht der aktuellen Steuersätze</a></li>
              <li><a href="#deutschland" className="text-primary hover:underline">2. Deutschland: MwSt-Sätze 2024</a></li>
              <li><a href="#oesterreich" className="text-primary hover:underline">3. Österreich: USt-Sätze 2024</a></li>
              <li><a href="#schweiz" className="text-primary hover:underline">4. Schweiz: MwSt-Sätze 2024</a></li>
              <li><a href="#aenderungen" className="text-primary hover:underline">5. Wichtige Änderungen 2024</a></li>
              <li><a href="#termine" className="text-primary hover:underline">6. Wichtige Termine und Fristen</a></li>
              <li><a href="#praxis" className="text-primary hover:underline">7. Praktische Tipps für Unternehmen</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="uebersicht" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">1. Übersicht der aktuellen Steuersätze</h2>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  Gute Nachrichten für 2024
                </h3>
                <p className="text-muted-foreground">
                  Die Mehrwertsteuersätze in der DACH-Region bleiben 2024 stabil. Keine Erhöhungen geplant!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-2">🇩🇪</div>
                  <h3 className="text-xl font-semibold mb-2">Deutschland</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-1">19% / 7%</div>
                  <div className="text-sm text-muted-foreground">Regel- / Ermäßigter Satz</div>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-2">🇦🇹</div>
                  <h3 className="text-xl font-semibold mb-2">Österreich</h3>
                  <div className="text-2xl font-bold text-red-600 mb-1">20% / 10%</div>
                  <div className="text-sm text-muted-foreground">Regel- / Ermäßigter Satz</div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-2">🇨🇭</div>
                  <h3 className="text-xl font-semibold mb-2">Schweiz</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-1">7.7% / 2.5%</div>
                  <div className="text-sm text-muted-foreground">Regel- / Ermäßigter Satz</div>
                </div>
              </div>
            </section>

            <section id="deutschland" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">2. Deutschland: MwSt-Sätze 2024</h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Aktuelle Steuersätze in Deutschland</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">19%</div>
                    <div className="text-sm text-muted-foreground">Regelsteuersatz</div>
                    <div className="text-xs text-muted-foreground mt-1">Unverändert seit 2007</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-3xl font-bold text-green-600">7%</div>
                    <div className="text-sm text-muted-foreground">Ermäßigter Satz</div>
                    <div className="text-xs text-muted-foreground mt-1">Unverändert seit 2007</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-3xl font-bold text-gray-600">0%</div>
                    <div className="text-sm text-muted-foreground">Nullsatz</div>
                    <div className="text-xs text-muted-foreground mt-1">Exporte, EU-Lieferungen</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Wichtige Änderungen 2024</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 text-yellow-600" />
                    Digitalisierung der Steuerabrechnung
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Ab 2024 müssen alle Unternehmen ihre Umsatzsteuervoranmeldungen elektronisch einreichen. 
                    Die manuelle Abgabe per Post ist nicht mehr möglich.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-blue-600" />
                    Erhöhte Grenzwerte für Kleinunternehmer
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Der Grenzwert für die Kleinunternehmerregelung bleibt bei 22.000 € Jahresumsatz. 
                    Eine Erhöhung ist für 2024 nicht geplant.
                  </p>
                </div>
              </div>
            </section>

            <section id="oesterreich" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">3. Österreich: USt-Sätze 2024</h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Aktuelle Steuersätze in Österreich</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-3xl font-bold text-red-600">20%</div>
                    <div className="text-sm text-muted-foreground">Regelsteuersatz</div>
                    <div className="text-xs text-muted-foreground mt-1">Seit 2016</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-3xl font-bold text-green-600">10%</div>
                    <div className="text-sm text-muted-foreground">Ermäßigter Satz</div>
                    <div className="text-xs text-muted-foreground mt-1">Lebensmittel, Bücher</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-3xl font-bold text-gray-600">0%</div>
                    <div className="text-sm text-muted-foreground">Nullsatz</div>
                    <div className="text-xs text-muted-foreground mt-1">Exporte, EU-Lieferungen</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Besonderheiten in Österreich 2024</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Kleinunternehmerregelung:</strong> Grenzwert bleibt bei 35.000 € Jahresumsatz</li>
                <li>• <strong>Monatliche Abrechnung:</strong> Pflicht bei Umsatz über 100.000 €</li>
                <li>• <strong>E-Rechnung:</strong> Pflicht für öffentliche Aufträge ab 2024</li>
                <li>• <strong>Kassensicherheitsverordnung:</strong> Strengere Kontrollen bei Registrierkassen</li>
              </ul>
            </section>

            <section id="schweiz" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">4. Schweiz: MwSt-Sätze 2024</h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Aktuelle Steuersätze in der Schweiz</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">7.7%</div>
                    <div className="text-sm text-muted-foreground">Regelsteuersatz</div>
                    <div className="text-xs text-muted-foreground mt-1">Seit 2018</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-3xl font-bold text-green-600">2.5%</div>
                    <div className="text-sm text-muted-foreground">Ermäßigter Satz</div>
                    <div className="text-xs text-muted-foreground mt-1">Lebensmittel, Bücher</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-3xl font-bold text-orange-600">3.7%</div>
                    <div className="text-sm text-muted-foreground">Beherbergung</div>
                    <div className="text-xs text-muted-foreground mt-1">Hotels, Pensionen</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Besonderheiten in der Schweiz 2024</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Kleinunternehmerregelung:</strong> Grenzwert bleibt bei 100.000 CHF Jahresumsatz</li>
                <li>• <strong>Quartalsweise Abrechnung:</strong> Standard für die meisten Unternehmen</li>
                <li>• <strong>E-Rechnung:</strong> Freiwillig, aber empfohlen</li>
                <li>• <strong>Kassensysteme:</strong> Keine spezielle Kassensicherheitsverordnung</li>
              </ul>
            </section>

            <section id="aenderungen" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">5. Wichtige Änderungen 2024</h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                    Deutschland: Elektronische Steuerabrechnung
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Ab 1. Januar 2024 müssen alle Unternehmen ihre Umsatzsteuervoranmeldungen elektronisch einreichen.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Elster-Online oder ElsterFormular verwenden</li>
                    <li>• Manuelle Abgabe per Post nicht mehr möglich</li>
                    <li>• Verspätungszuschläge bei nicht-elektronischer Abgabe</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                    Österreich: E-Rechnung für öffentliche Aufträge
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Ab 2024 müssen alle Rechnungen an öffentliche Auftraggeber elektronisch erstellt werden.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Verwendung von E-Rechnungsstandards (EN 16931)</li>
                    <li>• Integration in bestehende Buchhaltungssysteme</li>
                    <li>• Schulungen für Mitarbeiter erforderlich</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                    Schweiz: Keine größeren Änderungen
                  </h3>
                  <p className="text-muted-foreground">
                    Die Schweiz hat 2024 keine größeren Änderungen an den Mehrwertsteuersätzen vorgenommen. 
                    Die bestehenden Regelungen bleiben unverändert.
                  </p>
                </div>
              </div>
            </section>

            <section id="termine" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">6. Wichtige Termine und Fristen</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-muted">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-muted p-3 text-left">Land</th>
                      <th className="border border-muted p-3 text-center">Abrechnungsperiode</th>
                      <th className="border border-muted p-3 text-center">Abgabefrist</th>
                      <th className="border border-muted p-3 text-center">Zahlungsfrist</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-muted p-3 font-semibold">🇩🇪 Deutschland</td>
                      <td className="border border-muted p-3 text-center">Monatlich</td>
                      <td className="border border-muted p-3 text-center">10. des Folgemonats</td>
                      <td className="border border-muted p-3 text-center">10. des Folgemonats</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3 font-semibold">🇦🇹 Österreich</td>
                      <td className="border border-muted p-3 text-center">Monatlich</td>
                      <td className="border border-muted p-3 text-center">15. des Folgemonats</td>
                      <td className="border border-muted p-3 text-center">15. des Folgemonats</td>
                    </tr>
                    <tr>
                      <td className="border border-muted p-3 font-semibold">🇨🇭 Schweiz</td>
                      <td className="border border-muted p-3 text-center">Quartalsweise</td>
                      <td className="border border-muted p-3 text-center">60 Tage nach Quartalsende</td>
                      <td className="border border-muted p-3 text-center">60 Tage nach Quartalsende</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-yellow-600" />
                  Wichtige Termine 2024
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>31. Januar 2024:</strong> Abgabe der Jahreserklärung 2023 (Deutschland)</li>
                  <li>• <strong>31. März 2024:</strong> Abgabe der Jahreserklärung 2023 (Österreich)</li>
                  <li>• <strong>31. März 2024:</strong> Abgabe der Jahreserklärung 2023 (Schweiz)</li>
                  <li>• <strong>1. Juli 2024:</strong> Neue E-Rechnungsverordnung in Österreich</li>
                </ul>
              </div>
            </section>

            <section id="praxis" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">7. Praktische Tipps für Unternehmen</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                    Steuerberechnung optimieren
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Automatisierte Berechnung:</strong> Nutzen Sie Steuerrechner-Tools</li>
                    <li>• <strong>Vorsteuerabzug:</strong> Dokumentieren Sie alle Eingangsrechnungen</li>
                    <li>• <strong>Kleinunternehmerregelung:</strong> Prüfen Sie jährlich die Vor- und Nachteile</li>
                    <li>• <strong>Grenzwerte:</strong> Überwachen Sie Ihre Umsätze kontinuierlich</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Compliance sicherstellen
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Elektronische Abrechnung:</strong> Stellen Sie rechtzeitig um</li>
                    <li>• <strong>Dokumentation:</strong> Bewahren Sie alle Belege 10 Jahre auf</li>
                    <li>• <strong>Schulungen:</strong> Schulen Sie Ihre Mitarbeiter regelmäßig</li>
                    <li>• <strong>Beratung:</strong> Holen Sie bei Unsicherheiten professionelle Hilfe</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                  Tipp: Nutzen Sie unseren Steuerrechner
                </h3>
                <p className="text-muted-foreground mb-4">
                  Berechnen Sie schnell und einfach die Mehrwertsteuer für alle drei Länder mit unserem kostenlosen Rechner. 
                  Immer mit den aktuellsten Steuersätzen 2024.
                </p>
                <Link href="/mehrwertsteuer-rechner" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Calculator className="h-4 w-4 mr-2" />
                  Zum Steuerrechner
                </Link>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Bleiben Sie immer auf dem Laufenden!</h2>
              <p className="text-green-100 mb-6">
                Mit unserem Steuerrechner haben Sie immer die aktuellsten Steuersätze 2024 zur Hand. 
                Berechnen Sie Ihre Mehrwertsteuer für Deutschland, Österreich und die Schweiz.
              </p>
              <Link href="/mehrwertsteuer-rechner" className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                <Calculator className="h-5 w-5 mr-2" />
                Jetzt berechnen
              </Link>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-8">Weitere interessante Artikel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/mehrwertsteuer-vs-umsatzsteuer-vergleich-2024" className="group">
              <div className="bg-muted/30 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2 group-hover:text-primary">
                  Mehrwertsteuer vs. Umsatzsteuer: Der ultimative Vergleich 2024
                </h3>
                <p className="text-sm text-muted-foreground">
                  Kompletter Vergleich der Steuersysteme in der DACH-Region
                </p>
              </div>
            </Link>
            
            <Link href="/blog/e-commerce-steuerpflicht-online-haendler" className="group">
              <div className="bg-muted/30 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2 group-hover:text-primary">
                  E-Commerce Steuerpflicht: Was Online-Händler wissen müssen
                </h3>
                <p className="text-sm text-muted-foreground">
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
