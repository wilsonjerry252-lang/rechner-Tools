import { ArrowLeft, Mail, MapPin, Phone, Clock, MessageSquare, Calculator, Heart, CreditCard } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/ContactForm"
import Image from "next/image"

export const metadata = {
  title: "Kontakt - Rechner Tools | Professionelle Online-Rechner",
  description:
    "Kontaktieren Sie uns für Fragen zu unseren Rechnern, Support oder Feedback. Wir sind für Sie da und helfen Ihnen gerne weiter.",
  keywords: "kontakt, support, hilfe, feedback, rechner tools, online rechner",
  openGraph: {
    title: "Kontakt - Rechner Tools",
    description: "Kontaktieren Sie uns für Fragen zu unseren Rechnern, Support oder Feedback.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/kontakt",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/kontakt",
    },
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      {/* Header Component */}
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 logo-container">
              <Image src="/logo.png" alt="Rechner Tools Logo" width={48} height={48} className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h1 className="text-3xl font-black logo-text logo-gradient logo-glow tracking-tight">
                  Rechner Tools
                </h1>
                <p className="text-sm logo-subtitle text-blue-100 tracking-wide">
                  Professionelle Online-Rechner
                </p>
              </div>
            </div>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-foreground mb-4">Kontaktieren Sie uns</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Haben Sie Fragen zu unseren Rechnern oder benötigen Sie Unterstützung? 
            Wir sind für Sie da und helfen Ihnen gerne weiter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Kontaktinformationen</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                    <a 
                      href="mailto:muk.kt199@gmail.com" 
                      className="text-primary hover:underline font-medium"
                    >
                      muk.kt199@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Antwort innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Standort</h3>
                    <p className="text-foreground">Deutschland</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Online-Service weltweit verfügbar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Antwortzeit</h3>
                    <p className="text-foreground">24 Stunden</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Montag - Freitag
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Support */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">Schnelle Hilfe</h3>
              <div className="space-y-3">
                <Link 
                  href="/" 
                  className="flex items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors"
                >
                  <Calculator className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Rechner nutzen</span>
                </Link>
                <Link 
                  href="/blog" 
                  className="flex items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors"
                >
                  <MessageSquare className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">Blog durchsuchen</span>
                </Link>
                <Link 
                  href="/ueber-uns" 
                  className="flex items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-colors"
                >
                  <Heart className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Über uns</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-card rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Häufig gestellte Fragen</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground mb-2">Wie funktionieren die Rechner?</h3>
                <p className="text-muted-foreground text-sm">
                  Alle unsere Rechner sind kostenlos und funktionieren direkt im Browser. 
                  Geben Sie einfach Ihre Daten ein und erhalten Sie sofort das Ergebnis.
                </p>
              </div>
              
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold text-foreground mb-2">Sind die Berechnungen genau?</h3>
                <p className="text-muted-foreground text-sm">
                  Ja, alle Berechnungen basieren auf offiziellen Formeln und werden 
                  mit hoher Präzision durchgeführt. Die Ergebnisse sind zuverlässig.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-semibold text-foreground mb-2">Kann ich die Rechner auf dem Handy nutzen?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolut! Alle Rechner sind vollständig mobil-optimiert und 
                  funktionieren perfekt auf Smartphones und Tablets.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground mb-2">Gibt es weitere Rechner geplant?</h3>
                <p className="text-muted-foreground text-sm">
                  Ja, wir arbeiten kontinuierlich an neuen Rechnern. 
                  Haben Sie Vorschläge? Schreiben Sie uns gerne!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
