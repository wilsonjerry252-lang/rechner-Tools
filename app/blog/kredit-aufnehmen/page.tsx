import Link from "next/link"
import { ArrowLeft, Calendar, Clock, CreditCard, TrendingUp, Shield, Zap, CheckCircle, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Kredit aufnehmen: Der komplette Leitfaden",
  description: "Alles über Kredite: Arten, Voraussetzungen, Dokumente und Tipps für die erfolgreiche Kreditaufnahme. Ihr Wegweiser zum optimalen Kredit.",
  keywords: "kredit aufnehmen, kredit beantragen, kreditarten, kreditvoraussetzungen, kredit dokumente, kredit tipps",
  openGraph: {
    title: "Kredit aufnehmen: Der komplette Leitfaden",
    description: "Alles über Kredite: Arten, Voraussetzungen, Dokumente und Tipps für die erfolgreiche Kreditaufnahme. Ihr Wegweiser zum optimalen Kredit.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/kredit-aufnehmen",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/kredit-aufnehmen",
      "x-default": "https://www.rechnerjetzt.de/blog/kredit-aufnehmen",
    },
  },
}

export default function KreditAufnehmenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-md" />
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
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Finanzen
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Kredit aufnehmen: Der komplette Leitfaden
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
              Einen Kredit aufzunehmen ist eine wichtige finanzielle Entscheidung. In diesem umfassenden Leitfaden erfahren Sie alles über Voraussetzungen, benötigte Dokumente, Zinsen und wie Sie die besten Konditionen erhalten.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wann macht ein Kredit Sinn?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Gute Gründe für einen Kredit</h3>
                <ul className="text-sm space-y-2">
                  <li>• Immobilienkauf oder -renovierung</li>
                  <li>• Ausbildung oder Weiterbildung</li>
                  <li>• Unternehmensgründung</li>
                  <li>• Konsolidierung mehrerer Kredite</li>
                  <li>• Notfallausgaben</li>
                  <li>• Investitionen mit Rendite</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-3">Schlechte Gründe für einen Kredit</h3>
                <ul className="text-sm space-y-2">
                  <li>• Konsumausgaben ohne Notwendigkeit</li>
                  <li>• Urlaubsreisen</li>
                  <li>• Luxusgüter</li>
                  <li>• Spielsucht oder andere Süchte</li>
                  <li>• Um bestehende Schulden zu tilgen</li>
                  <li>• Ohne Rückzahlungsplan</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Kreditarten im Überblick</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Ratenkredit (Konsumentenkredit)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Eigenschaften:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Fester Zinssatz für gesamte Laufzeit</li>
                      <li>• Regelmäßige monatliche Raten</li>
                      <li>• Flexibel in der Höhe (1.000€ - 100.000€)</li>
                      <li>• Laufzeit: 12-84 Monate</li>
                      <li>• Verwendung frei wählbar</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Vorteile:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Planbare monatliche Belastung</li>
                      <li>• Geringere Zinsen als Dispo</li>
                      <li>• Sondertilgung meist möglich</li>
                      <li>• Einfache Beantragung</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Dispositionskredit (Dispo)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Eigenschaften:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Überziehung des Girokontos</li>
                      <li>• Sehr hohe Zinsen (8-15%)</li>
                      <li>• Flexibel in Anspruch und Rückzahlung</li>
                      <li>• Nur für kurzfristige Überbrückung</li>
                      <li>• Keine festen Raten</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Nachteile:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Teuerste Kreditform</li>
                      <li>• Keine Planbarkeit</li>
                      <li>• Schnell in Schuldenfalle</li>
                      <li>• Keine Sondertilgung</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Baufinanzierung (Hypothekendarlehen)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Eigenschaften:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Für Immobilienkauf oder -bau</li>
                      <li>• Niedrige Zinsen durch Sicherheiten</li>
                      <li>• Lange Laufzeiten (10-35 Jahre)</li>
                      <li>• Höhere Kreditsummen möglich</li>
                      <li>• Grundschuld als Sicherheit</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Besonderheiten:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Eigenkapital erforderlich (10-20%)</li>
                      <li>• Tilgungsfreie Jahre möglich</li>
                      <li>• Anschlussfinanzierung nötig</li>
                      <li>• Zinsbindung wählbar</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Autokredit</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Eigenschaften:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Speziell für Fahrzeugkauf</li>
                      <li>• Fahrzeug als Sicherheit</li>
                      <li>• Geringere Zinsen als Ratenkredit</li>
                      <li>• Laufzeit: 12-84 Monate</li>
                      <li>• Ballonzahlung möglich</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Vorteile:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Niedrigere Zinsen</li>
                      <li>• Fahrzeug als Sicherheit</li>
                      <li>• Spezielle Angebote verfügbar</li>
                      <li>• Einfache Beantragung</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Voraussetzungen für einen Kredit</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">Persönliche Voraussetzungen</h3>
                <ul className="text-sm space-y-2">
                  <li>• Volljährigkeit (18 Jahre)</li>
                  <li>• Wohnsitz in Deutschland</li>
                  <li>• Deutsche Staatsbürgerschaft oder Aufenthaltserlaubnis</li>
                  <li>• Keine negativen Schufa-Einträge</li>
                  <li>• Stabile Lebenssituation</li>
                </ul>
              </div>

              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold text-secondary mb-3">Finanzielle Voraussetzungen</h3>
                <ul className="text-sm space-y-2">
                  <li>• Regelmäßiges Einkommen</li>
                  <li>• Ausreichende Bonität</li>
                  <li>• Keine Überschuldung</li>
                  <li>• Ausreichendes Eigenkapital (bei Immobilien)</li>
                  <li>• Realistische Rückzahlungsfähigkeit</li>
                </ul>
              </div>

              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-xl font-bold text-accent mb-3">Berufliche Voraussetzungen</h3>
                <ul className="text-sm space-y-2">
                  <li>• Fester Arbeitsvertrag (unbefristet)</li>
                  <li>• Probezeit abgeschlossen</li>
                  <li>• Ausreichendes Einkommen</li>
                  <li>• Stabile Beschäftigung</li>
                  <li>• Bei Selbstständigen: Geschäftsplan und Einnahmen</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Benötigte Dokumente</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Persönliche Dokumente</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Identität:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Personalausweis oder Reisepass</li>
                      <li>• Geburtsurkunde (bei Bedarf)</li>
                      <li>• Familienbuch (bei Verheirateten)</li>
                      <li>• Aufenthaltserlaubnis (bei Ausländern)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Wohnsitz:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Mietvertrag oder Eigentumsnachweis</li>
                      <li>• Meldebescheinigung</li>
                      <li>• Letzte 3 Mietzahlungsbelege</li>
                      <li>• Haushaltsversicherung</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Einkommensnachweise</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Angestellte:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Letzte 3 Gehaltsabrechnungen</li>
                      <li>• Arbeitsvertrag</li>
                      <li>• Arbeitszeugnis (bei Bedarf)</li>
                      <li>• Lohnsteuerbescheinigung</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Selbstständige:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Letzte 3 Jahresabschlüsse</li>
                      <li>• Einnahmen-Überschuss-Rechnung</li>
                      <li>• Gewerbeschein</li>
                      <li>• Geschäftsplan</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Finanzielle Unterlagen</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Konten und Kredite:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Letzte 3 Kontoauszüge</li>
                      <li>• Bestehende Kreditverträge</li>
                      <li>• Kreditkartenabrechnungen</li>
                      <li>• Sparbücher oder Wertpapiere</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Ausgaben:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Mietzahlungsbelege</li>
                      <li>• Versicherungsverträge</li>
                      <li>• Unterhaltszahlungen</li>
                      <li>• Sonstige regelmäßige Ausgaben</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Kreditkosten verstehen</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <h3 className="text-lg font-bold text-foreground mb-4">Effektiver Jahreszins (APR)</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Der effektive Jahreszins ist der wichtigste Vergleichsmaßstab. Er berücksichtigt alle Kosten des Kredits und macht Angebote vergleichbar.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Was ist enthalten:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Nominalzins</li>
                      <li>• Bearbeitungsgebühren</li>
                      <li>• Kontoführungsgebühren</li>
                      <li>• Versicherungskosten</li>
                      <li>• Sonstige Gebühren</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Beispiel:</p>
                    <p className="text-sm">
                      <strong>Kredit A:</strong> 5,9% APR<br/>
                      <strong>Kredit B:</strong> 6,2% APR<br/>
                      <strong>Kredit A ist günstiger</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-xl font-bold text-green-700 mb-3">Günstige Kredite</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Ratenkredit: 3,9% - 8,9% APR</li>
                    <li>• Autokredit: 2,9% - 6,9% APR</li>
                    <li>• Baufinanzierung: 1,5% - 4,5% APR</li>
                    <li>• Online-Banken oft günstiger</li>
                    <li>• Direktbanken ohne Filialen</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h3 className="text-xl font-bold text-red-700 mb-3">Teure Kredite</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Dispo: 8,9% - 15,9% APR</li>
                    <li>• Kreditkarte: 12,9% - 19,9% APR</li>
                    <li>• Sofortkredite: 15,9% - 25,9% APR</li>
                    <li>• Kredite ohne Schufa</li>
                    <li>• Kredite für Arbeitslose</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Kreditantrag Schritt für Schritt</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-bold mt-1">1</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Kreditvergleich durchführen</h3>
                  <p className="text-sm text-muted-foreground">
                    Vergleichen Sie verschiedene Kreditangebote online. Achten Sie auf den effektiven Jahreszins, die Laufzeit und eventuelle versteckte Kosten.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm flex items-center justify-center font-bold mt-1">2</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Dokumente vorbereiten</h3>
                  <p className="text-sm text-muted-foreground">
                    Sammeln Sie alle benötigten Unterlagen. Vollständige Dokumentation beschleunigt den Prozess erheblich.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center font-bold mt-1">3</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Antrag stellen</h3>
                  <p className="text-sm text-muted-foreground">
                    Füllen Sie den Kreditantrag online oder in der Filiale aus. Seien Sie ehrlich bei allen Angaben.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-bold mt-1">4</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Bonitätsprüfung</h3>
                  <p className="text-sm text-muted-foreground">
                    Die Bank prüft Ihre Kreditwürdigkeit anhand der Schufa-Daten und Ihrer finanziellen Situation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm flex items-center justify-center font-bold mt-1">5</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Kreditvertrag erhalten</h3>
                  <p className="text-sm text-muted-foreground">
                    Bei positiver Entscheidung erhalten Sie den Kreditvertrag. Lesen Sie ihn sorgfältig durch.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center font-bold mt-1">6</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Unterschrift und Auszahlung</h3>
                  <p className="text-sm text-muted-foreground">
                    Nach Unterschrift wird der Kredit ausgezahlt. Die erste Rate ist meist nach einem Monat fällig.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Tipps für bessere Kreditkonditionen</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">Bonität verbessern</h3>
                <ul className="text-sm space-y-2">
                  <li>• Schufa-Auskunft regelmäßig prüfen</li>
                  <li>• Fehlerhafte Einträge korrigieren lassen</li>
                  <li>• Kredite pünktlich zurückzahlen</li>
                  <li>• Kreditkarten sinnvoll nutzen</li>
                  <li>• Keine zu vielen Kreditanfragen</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Verhandlungsstrategien</h3>
                <ul className="text-sm space-y-2">
                  <li>• Mehrere Angebote einholen</li>
                  <li>• Bestehende Angebote als Druckmittel nutzen</li>
                  <li>• Nach Rabatten bei Bearbeitungsgebühren fragen</li>
                  <li>• Längere Zinsbindung für niedrigere Zinsen</li>
                  <li>• Sondertilgungsrecht vereinbaren</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">Sicherheiten anbieten</h3>
                <ul className="text-sm space-y-2">
                  <li>• Bürgschaft durch Familienmitglieder</li>
                  <li>• Lebensversicherung als Sicherheit</li>
                  <li>• Wertpapiere oder Sparguthaben</li>
                  <li>• Immobilien (bei Baufinanzierung)</li>
                  <li>• Fahrzeug (bei Autokredit)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fehler vermeiden</h2>
            
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
              <h3 className="text-xl font-bold text-red-700 mb-3">Diese Fehler sollten Sie vermeiden</h3>
              <ul className="text-sm space-y-2">
                <li>• Kredit ohne Rückzahlungsplan aufnehmen</li>
                <li>• Mehrere Kredite gleichzeitig beantragen</li>
                <li>• Falsche Angaben im Antrag machen</li>
                <li>• Kreditvertrag nicht durchlesen</li>
                <li>• Zu hohe Kreditsumme wählen</li>
                <li>• Kredit für Konsumausgaben aufnehmen</li>
                <li>• Keine Rücklagen für Notfälle bilden</li>
                <li>• Kredit ohne Vergleich abschließen</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            
            <p className="mb-6">
              Ein Kredit kann eine sinnvolle finanzielle Entscheidung sein, wenn er gut geplant und verantwortungsvoll genutzt wird. Wichtig ist ein sorgfältiger Vergleich der Angebote, die vollständige Vorbereitung aller Dokumente und ein realistischer Rückzahlungsplan. Nutzen Sie unseren Kreditrechner, um verschiedene Szenarien durchzuspielen und die optimale Kreditstruktur zu finden.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Kreditrechner nutzen
              </h3>
              <p className="text-muted-foreground mb-4">
                Berechnen Sie mit unserem professionellen Kreditrechner Ihre monatlichen Raten und die Gesamtkosten verschiedener Kreditangebote.
              </p>
              <Link href="/#loan">
                <Button className="w-full">
                  <Calculator className="h-4 w-4 mr-2" />
                  Jetzt Kredit berechnen
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
