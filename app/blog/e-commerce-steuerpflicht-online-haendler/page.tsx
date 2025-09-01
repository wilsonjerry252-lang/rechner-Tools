import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ShoppingCart, Globe, AlertTriangle, CheckCircle, Calculator, Shield, TrendingUp } from 'lucide-react';

// Dynamic imports for better performance
const Header = dynamic(() => import("@/components/Header"), { 
  ssr: true,
  loading: () => <div className="h-16 bg-background" />
});

const Footer = dynamic(() => import("@/components/Footer"), { 
  ssr: true 
});

export const metadata: Metadata = {
  title: 'E-Commerce Steuerpflicht: Was Online-Händler wissen müssen | Rechner Tools',
  description: 'Kompletter Leitfaden für Steuerpflichten im Online-Handel. Mehrwertsteuer, Umsatzsteuer und Compliance für E-Commerce in Deutschland, Österreich und der Schweiz.',
  keywords: 'E-Commerce Steuerpflicht, Online-Handel, Mehrwertsteuer, Umsatzsteuer, DACH, Online-Shop, Steuerpflicht, Compliance',
  openGraph: {
    title: 'E-Commerce Steuerpflicht: Was Online-Händler wissen müssen',
    description: 'Kompletter Leitfaden für Steuerpflichten im Online-Handel in der DACH-Region.',
    type: 'article',
    publishedTime: '2024-01-25T10:00:00Z',
    authors: ['Rechner Tools Team'],
    tags: ['E-Commerce', 'Steuerpflicht', 'Online-Handel', 'DACH'],
  },
  alternates: {
    canonical: 'https://rechnerjetzt.de/blog/e-commerce-steuerpflicht-online-haendler',
  },
};

export default function ECommerceSteuerpflichtPage() {
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
          <span className="text-foreground">E-Commerce Steuerpflicht</span>
        </nav>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              E-Commerce Steuerpflicht: Was Online-Händler wissen müssen
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Kompletter Leitfaden für Steuerpflichten im Online-Handel. Mehrwertsteuer, Umsatzsteuer und Compliance für E-Commerce in Deutschland, Österreich und der Schweiz.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>📅 25. Januar 2024</span>
              <span>⏱️ 10 Min. Lesezeit</span>
              <span>👤 Rechner Tools Team</span>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Inhaltsverzeichnis</h2>
            <ul className="space-y-2">
              <li><a href="#grundlagen" className="text-primary hover:underline">1. Grundlagen der E-Commerce Steuerpflicht</a></li>
              <li><a href="#deutschland" className="text-primary hover:underline">2. Deutschland: Online-Handel Steuerpflicht</a></li>
              <li><a href="#oesterreich" className="text-primary hover:underline">3. Österreich: E-Commerce Steuersätze</a></li>
              <li><a href="#schweiz" className="text-primary hover:underline">4. Schweiz: Online-Shop Steuerpflicht</a></li>
              <li><a href="#grenzueberschreitend" className="text-primary hover:underline">5. Grenzüberschreitender Handel</a></li>
              <li><a href="#compliance" className="text-primary hover:underline">6. Compliance und Dokumentation</a></li>
              <li><a href="#praxis" className="text-primary hover:underline">7. Praktische Umsetzung</a></li>
              <li><a href="#faq" className="text-primary hover:underline">8. Häufige Fragen</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="grundlagen" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">1. Grundlagen der E-Commerce Steuerpflicht</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2 text-blue-600" />
                  Was ist E-Commerce Steuerpflicht?
                </h3>
                <p className="text-muted-foreground">
                  E-Commerce Steuerpflicht umfasst alle steuerlichen Verpflichtungen, die beim Verkauf von Waren und Dienstleistungen über das Internet entstehen. 
                  Dies betrifft sowohl physische als auch digitale Produkte.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-green-600" />
                    Physische Waren
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Elektronik und Technik</li>
                    <li>• Bekleidung und Accessoires</li>
                    <li>• Bücher und Medien</li>
                    <li>• Lebensmittel und Getränke</li>
                    <li>• Möbel und Einrichtung</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                    Digitale Dienstleistungen
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Software und Apps</li>
                    <li>• Online-Kurse und Schulungen</li>
                    <li>• Streaming-Dienste</li>
                    <li>• E-Books und digitale Medien</li>
                    <li>• Beratungsdienstleistungen</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                  Wichtiger Hinweis
                </h3>
                <p className="text-muted-foreground">
                  Die Steuerpflicht beginnt bereits mit dem ersten Verkauf, unabhängig von der Plattform (eigener Shop, Amazon, eBay, etc.). 
                  Auch Kleinunternehmer müssen ihre Umsätze dokumentieren.
                </p>
              </div>
            </section>

            <section id="deutschland" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">2. Deutschland: Online-Handel Steuerpflicht</h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Steuersätze für E-Commerce in Deutschland</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">19%</div>
                    <div className="text-sm text-muted-foreground">Regelsteuersatz</div>
                    <div className="text-xs text-muted-foreground mt-1">Die meisten Online-Verkäufe</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-green-600">7%</div>
                    <div className="text-sm text-muted-foreground">Ermäßigter Satz</div>
                    <div className="text-xs text-muted-foreground mt-1">Bücher, Lebensmittel</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-gray-600">0%</div>
                    <div className="text-sm text-muted-foreground">Nullsatz</div>
                    <div className="text-xs text-muted-foreground mt-1">EU-Lieferungen</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Besonderheiten für Online-Händler</h3>
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Kleinunternehmerregelung
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Befreiung von der MwSt-Abrechnung bis 22.000 € Jahresumsatz. 
                    Ideal für Start-ups und kleine Online-Shops.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-blue-600" />
                    Umsatzsteuer-ID
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Erforderlich für B2B-Verkäufe und EU-Lieferungen. 
                    Kann online beim Bundeszentralamt für Steuern beantragt werden.
                  </p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-purple-600" />
                    Digitale Dienstleistungen
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    MOSS-Verfahren für EU-weite digitale Dienstleistungen. 
                    Vereinfachte Meldung über ein Portal.
                  </p>
                </div>
              </div>
            </section>

            <section id="oesterreich" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">3. Österreich: E-Commerce Steuersätze</h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Steuersätze für E-Commerce in Österreich</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-red-600">20%</div>
                    <div className="text-sm text-muted-foreground">Regelsteuersatz</div>
                    <div className="text-xs text-muted-foreground mt-1">Die meisten Online-Verkäufe</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-green-600">10%</div>
                    <div className="text-sm text-muted-foreground">Ermäßigter Satz</div>
                    <div className="text-xs text-muted-foreground mt-1">Lebensmittel, Bücher</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-gray-600">0%</div>
                    <div className="text-sm text-muted-foreground">Nullsatz</div>
                    <div className="text-xs text-muted-foreground mt-1">EU-Lieferungen</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Besonderheiten in Österreich</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Höherer Regelsteuersatz:</strong> 20% vs. 19% in Deutschland</li>
                <li>• <strong>Kleinunternehmerregelung:</strong> Grenzwert bei 35.000 € Jahresumsatz</li>
                <li>• <strong>E-Rechnung:</strong> Pflicht für öffentliche Aufträge ab 2024</li>
                <li>• <strong>Kassensicherheitsverordnung:</strong> Strengere Kontrollen bei Online-Zahlungen</li>
              </ul>
            </section>

            <section id="schweiz" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">4. Schweiz: Online-Shop Steuerpflicht</h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Steuersätze für E-Commerce in der Schweiz</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">7.7%</div>
                    <div className="text-sm text-muted-foreground">Regelsteuersatz</div>
                    <div className="text-xs text-muted-foreground mt-1">Die meisten Online-Verkäufe</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-green-600">2.5%</div>
                    <div className="text-sm text-muted-foreground">Ermäßigter Satz</div>
                    <div className="text-xs text-muted-foreground mt-1">Lebensmittel, Bücher</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">3.7%</div>
                    <div className="text-sm text-muted-foreground">Beherbergung</div>
                    <div className="text-xs text-muted-foreground mt-1">Online-Buchungen</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Besonderheiten in der Schweiz</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Niedrigere Steuersätze:</strong> Deutlich niedriger als in DE/AT</li>
                <li>• <strong>Kleinunternehmerregelung:</strong> Grenzwert bei 100.000 CHF Jahresumsatz</li>
                <li>• <strong>Quartalsweise Abrechnung:</strong> Standard für die meisten Unternehmen</li>
                <li>• <strong>Einfuhrumsatzsteuer:</strong> Bei Lieferungen aus dem Ausland</li>
              </ul>
            </section>

            <section id="grenzueberschreitend" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">5. Grenzüberschreitender Handel</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-blue-600" />
                    EU-Binnenmarkt
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Reverse Charge:</strong> Steuerschuldnerschaft des Empfängers</li>
                    <li>• <strong>MOSS-Verfahren:</strong> Für digitale Dienstleistungen</li>
                    <li>• <strong>Grenzwerte:</strong> 10.000 € für Fernverkauf</li>
                    <li>• <strong>Dokumentation:</strong> Aufbewahrungspflicht für 10 Jahre</li>
                    <li>• <strong>Umsatzsteuer-ID:</strong> Erforderlich für B2B-Verkäufe</li>
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
                    <li>• <strong>Versandkosten:</strong> Teil der Bemessungsgrundlage</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                  Wichtige Hinweise für grenzüberschreitenden Handel
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Versandkosten:</strong> Sind Teil der Bemessungsgrundlage</li>
                  <li>• <strong>Lieferadresse:</strong> Bestimmt den Steuersatz</li>
                  <li>• <strong>Dokumentation:</strong> Alle Belege 10 Jahre aufbewahren</li>
                  <li>• <strong>Beratung:</strong> Bei Unsicherheiten professionelle Hilfe suchen</li>
                </ul>
              </div>
            </section>

            <section id="compliance" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">6. Compliance und Dokumentation</h2>
              
              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-600" />
                    Pflichtdokumentation
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Rechnungen</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Vollständige Rechnungsdaten</li>
                        <li>• Steuersatz und Steuerbetrag</li>
                        <li>• Umsatzsteuer-ID (bei B2B)</li>
                        <li>• Liefer- und Rechnungsadresse</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Aufbewahrung</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 10 Jahre Aufbewahrungspflicht</li>
                        <li>• Elektronische Archivierung möglich</li>
                        <li>• Zugänglichkeit gewährleisten</li>
                        <li>• Regelmäßige Backups</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Automatisierung
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Shop-Systeme</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Automatische Steuerberechnung</li>
                        <li>• Länder-spezifische Steuersätze</li>
                        <li>• Rechnungsgenerierung</li>
                        <li>• Export für Buchhaltung</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Buchhaltung</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Automatische Übertragung</li>
                        <li>• Steuerliche Auswertungen</li>
                        <li>• Voranmeldungen</li>
                        <li>• Jahresabschluss</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="praxis" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">7. Praktische Umsetzung</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                    Checkliste für Online-Händler
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Steuerberatung:</strong> Professionelle Beratung einholen</li>
                    <li>• <strong>Umsatzsteuer-ID:</strong> Beantragen und dokumentieren</li>
                    <li>• <strong>Shop-System:</strong> Steuerberechnung konfigurieren</li>
                    <li>• <strong>Rechnungsstellung:</strong> Automatisierte Generierung</li>
                    <li>• <strong>Dokumentation:</strong> Alle Belege archivieren</li>
                    <li>• <strong>Compliance:</strong> Regelmäßige Überprüfung</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                    Häufige Fehler vermeiden
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Falsche Steuersätze:</strong> Immer aktuelle Sätze verwenden</li>
                    <li>• <strong>Vergessene Dokumentation:</strong> Systematische Archivierung</li>
                    <li>• <strong>Grenzwerte ignorieren:</strong> Umsätze kontinuierlich überwachen</li>
                    <li>• <strong>EU-Lieferungen:</strong> Besondere Regeln beachten</li>
                    <li>• <strong>Versandkosten:</strong> In Steuerberechnung einbeziehen</li>
                    <li>• <strong>Fristen:</strong> Abgabetermine einhalten</li>
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
                  Immer mit den aktuellsten Steuersätzen für E-Commerce.
                </p>
                <Link href="/mehrwertsteuer-rechner" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Calculator className="h-4 w-4 mr-2" />
                  Zum Steuerrechner
                </Link>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">8. Häufige Fragen</h2>
              
              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Ab wann bin ich steuerpflichtig?</h3>
                  <p className="text-muted-foreground">
                    Die Steuerpflicht beginnt mit dem ersten Verkauf, unabhängig von der Plattform. 
                    Auch Kleinunternehmer müssen ihre Umsätze dokumentieren und jährlich prüfen, 
                    ob sie die Grenzwerte überschreiten.
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Welche Steuersätze gelten für digitale Produkte?</h3>
                  <p className="text-muted-foreground">
                    Digitale Produkte unterliegen grundsätzlich dem Regelsteuersatz (19% DE, 20% AT, 7.7% CH). 
                    Bei EU-weiten Verkäufen gelten besondere Regeln (MOSS-Verfahren).
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Wie berechne ich die Steuer bei Versandkosten?</h3>
                  <p className="text-muted-foreground">
                    Versandkosten sind Teil der Bemessungsgrundlage und werden mit dem gleichen Steuersatz 
                    wie die Ware besteuert. Bei kostenlosem Versand entfällt die Steuer auf den Versand.
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Was passiert bei Rücksendungen?</h3>
                  <p className="text-muted-foreground">
                    Bei Rücksendungen wird die ursprünglich berechnete Steuer storniert. 
                    Dies muss in der Steuererklärung entsprechend berücksichtigt werden.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Berechnen Sie Ihre E-Commerce Steuer jetzt!</h2>
              <p className="text-purple-100 mb-6">
                Nutzen Sie unseren kostenlosen Steuerrechner für schnelle und genaue Berechnungen. 
                Immer mit den aktuellsten Steuersätzen für Online-Handel.
              </p>
              <Link href="/mehrwertsteuer-rechner" className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                <Calculator className="h-5 w-5 mr-2" />
                Zum Steuerrechner
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
            
            <Link href="/blog/steuerrechner-vergleich-beste-tools-unternehmen" className="group">
              <div className="bg-muted/30 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2 group-hover:text-primary">
                  Steuerrechner Vergleich: Welcher ist der beste für Ihr Unternehmen?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Kompletter Vergleich aller verfügbaren Steuerrechner-Tools
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
