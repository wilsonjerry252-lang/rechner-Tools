import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Mehrwertsteuer für Unternehmer: Leitfaden 2025 | Rechner Tools",
  description: "Alles über MwSt. für Unternehmer: Vorsteuerabzug, Rechnungsstellung, Buchhaltung und steuerliche Pflichten. Professioneller Ratgeber für Selbstständige.",
  keywords: "mehrwertsteuer unternehmer, mwst buchhaltung, vorsteuerabzug, umsatzsteuer, steuerberatung, selbstständige",
  openGraph: {
    title: "Mehrwertsteuer für Unternehmer: Leitfaden 2025",
    description: "Alles über MwSt. für Unternehmer: Vorsteuerabzug, Rechnungsstellung, Buchhaltung und steuerliche Pflichten. Professioneller Ratgeber für Selbstständige.",
    type: "article",
    publishedTime: "2024-12-22T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/mehrwertsteuer-unternehmer",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/mehrwertsteuer-unternehmer",
    },
  },
}

export default function MehrwertsteuerUnternehmerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h2 className="text-2xl font-bold font-serif">Rechner Tools</h2>
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
              Mehrwertsteuer für Unternehmer: Leitfaden 2025
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>22. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Als Unternehmer müssen Sie sich mit der Mehrwertsteuer auskennen. Dieser umfassende Leitfaden erklärt alles über MwSt.-Pflichten, Vorsteuerabzug, Rechnungsstellung und Buchhaltung für Selbstständige und Unternehmen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Grundlagen der MwSt. für Unternehmer</h2>
            <p className="mb-6">
              Die Mehrwertsteuer ist eine indirekte Steuer, die auf den Verbrauch von Waren und Dienstleistungen erhoben wird. Als Unternehmer sind Sie sowohl MwSt.-Schuldner (bei Verkäufen) als auch MwSt.-Gläubiger (bei Einkäufen).
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Wichtige Begriffe für Unternehmer:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">MwSt.-Schuldner:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Sie erheben MwSt. von Ihren Kunden</li>
                    <li>• Müssen diese an das Finanzamt abführen</li>
                    <li>• Bei Verkäufen an Endverbraucher</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">MwSt.-Gläubiger:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Sie zahlen MwSt. an Ihre Lieferanten</li>
                    <li>• Können diese als Vorsteuer abziehen</li>
                    <li>• Bei Einkäufen für Ihr Unternehmen</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">MwSt.-Pflichten für Unternehmer</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">1. MwSt.-Registrierung</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Wann erforderlich:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Umsatz über 22.000€ pro Jahr</li>
                      <li>• Regelmäßige gewerbliche Tätigkeit</li>
                      <li>• Verkauf an Endverbraucher</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Was zu tun ist:</p>
                    <ul className="text-sm space-y-1">
                      <li>• MwSt.-Identifikationsnummer beantragen</li>
                      <li>• Beim Finanzamt registrieren</li>
                      <li>• MwSt.-Voranmeldungen abgeben</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">2. Rechnungsstellung</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Pflichtangaben:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Ihre MwSt.-Identifikationsnummer</li>
                      <li>• MwSt.-Satz und -Betrag</li>
                      <li>• Nettobetrag und Bruttobetrag</li>
                      <li>• Steuernummer oder Steuer-ID</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Ausnahmen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Kleinbetragsrechnungen unter 250€</li>
                      <li>• Rechnungen an Privatpersonen</li>
                      <li>• MwSt.-freie Leistungen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">3. MwSt.-Voranmeldung</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Fristen:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Monatlich bei Umsatz über 7.500€</li>
                      <li>• Vierteljährlich bei Umsatz 7.500€ - 1.000.000€</li>
                      <li>• Jährlich bei Umsatz unter 7.500€</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Inhalte:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Erlöse und MwSt.-Schuld</li>
                      <li>• Vorsteuerabzug</li>
                      <li>• Zu zahlende oder erstattete MwSt.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Vorsteuerabzug: So funktioniert es</h2>
            
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Grundprinzip des Vorsteuerabzugs:</h3>
              <p className="mb-4">
                Als Unternehmer können Sie die MwSt., die Sie an Ihre Lieferanten zahlen, von der MwSt., die Sie an Ihre Kunden berechnen, abziehen.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-700 mb-2">Beispiel:</h4>
                  <div className="text-sm space-y-1">
                    <p><strong>MwSt.-Schuld:</strong> 190€ (von Kunden)</p>
                    <p><strong>Vorsteuer:</strong> 95€ (an Lieferanten)</p>
                    <p><strong>Zu zahlen:</strong> 95€ ans Finanzamt</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-700 mb-2">Vorteil:</h4>
                  <p className="text-sm">
                    Sie zahlen nur die MwSt. auf den von Ihnen geschaffenen Mehrwert, nicht auf den gesamten Verkaufspreis.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">MwSt.-Sätze und Ausnahmen</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Standard-MwSt.</h3>
                <div className="text-3xl font-bold text-foreground mb-2">19%</div>
                <p className="text-sm text-muted-foreground mb-3">Gilt für die meisten Waren und Dienstleistungen</p>
                <ul className="text-sm space-y-1">
                  <li>• Elektronik</li>
                  <li>• Beratungsleistungen</li>
                  <li>• Handwerksarbeiten</li>
                  <li>• Bürobedarf</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Ermäßigte MwSt.</h3>
                <div className="text-3xl font-bold text-foreground mb-2">7%</div>
                <p className="text-sm text-muted-foreground mb-3">Für bestimmte Waren und Dienstleistungen</p>
                <ul className="text-sm space-y-1">
                  <li>• Bücher und Zeitungen</li>
                  <li>• Lebensmittel</li>
                  <li>• Hotelübernachtungen</li>
                  <li>• Medikamente</li>
                </ul>
              </div>
              
              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-xl font-bold text-accent mb-3">MwSt.-frei</h3>
                <div className="text-3xl font-bold text-foreground mb-2">0%</div>
                <p className="text-sm text-muted-foreground mb-3">Für bestimmte Leistungen</p>
                <ul className="text-sm space-y-1">
                  <li>• Ärztliche Leistungen</li>
                  <li>• Bankdienstleistungen</li>
                  <li>• Versicherungen</li>
                  <li>• Internationale Transporte</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Buchhaltung und Dokumentation</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Aufbewahrungspflichten</h3>
                <p className="text-sm text-muted-foreground">
                  Alle Rechnungen, Belege und MwSt.-Dokumente müssen 10 Jahre lang aufbewahrt werden.
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Buchführung</h3>
                <p className="text-sm text-muted-foreground">
                  Führen Sie eine ordnungsgemäße Buchführung mit getrennten Konten für MwSt.-Schuld und Vorsteuer.
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">MwSt.-Konten</h3>
                <p className="text-sm text-muted-foreground">
                  Verwenden Sie separate Konten für 19% MwSt., 7% MwSt. und MwSt.-freie Umsätze.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Besondere Fälle und Ausnahmen</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Kleinunternehmerregelung</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Bei Umsatz unter 22.000€ pro Jahr können Sie von der MwSt.-Pflicht befreit werden.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Keine MwSt. auf Rechnungen</li>
                  <li>• Kein Vorsteuerabzug möglich</li>
                  <li>• Einfache Buchhaltung</li>
                  <li>• Geringere Kosten</li>
                </ul>
              </div>
              
              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Reverse-Charge-Verfahren</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Bei bestimmten grenzüberschreitenden Leistungen innerhalb der EU.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Keine MwSt. auf Rechnung</li>
                  <li>• Empfänger zahlt MwSt.</li>
                  <li>• Vorsteuerabzug möglich</li>
                  <li>• Komplexe Buchhaltung</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Praktische Tipps für Unternehmer</h2>
            
            <ol className="list-decimal pl-6 mb-6 space-y-4">
              <li>
                <strong>MwSt.-Rechner verwenden</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Nutzen Sie professionelle MwSt.-Rechner für korrekte Berechnungen und sparen Sie Zeit bei der Buchhaltung.
                </p>
              </li>
              <li>
                <strong>Software einsetzen</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Investieren Sie in Buchhaltungssoftware, die MwSt.-Berechnungen automatisch durchführt.
                </p>
              </li>
              <li>
                <strong>Regelmäßige Kontrolle</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Überprüfen Sie monatlich Ihre MwSt.-Konten auf Fehler und Unstimmigkeiten.
                </p>
              </li>
              <li>
                <strong>Beratung einholen</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Lassen Sie sich bei komplexen MwSt.-Fragen von einem Steuerberater beraten.
                </p>
              </li>
              <li>
                <strong>Fristen einhalten</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Beachten Sie die Abgabefristen für MwSt.-Voranmeldungen und Jahreserklärungen.
                </p>
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fehler vermeiden</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Falsche MwSt.-Sätze auf Rechnungen verwenden</li>
              <li>Vorsteuerabzug bei privaten Ausgaben</li>
              <li>Vergessen der MwSt.-Voranmeldungen</li>
              <li>Fehlende MwSt.-Angaben auf Rechnungen</li>
              <li>Falsche Berechnung der MwSt.-Beträge</li>
              <li>Nichtbeachtung von MwSt.-Ausnahmen</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die korrekte Handhabung der Mehrwertsteuer ist für Unternehmer essentiell. Mit dem richtigen Wissen, der passenden Software und unserem MwSt.-Rechner können Sie alle Berechnungen korrekt durchführen und Ihre steuerlichen Pflichten erfüllen. Bei Unsicherheiten sollten Sie sich von einem Steuerberater unterstützen lassen.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Nutzen Sie unseren MwSt.-Rechner
              </h3>
              <p className="text-muted-foreground mb-4">
                Berechnen Sie schnell und sicher alle MwSt.-Beträge mit unserem professionellen Mehrwertsteuerrechner.
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
