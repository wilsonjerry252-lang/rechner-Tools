import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ChevronRight, Home, BookOpen, TrendingUp, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Inflation einfach erklärt: So verändert sich Ihre Kaufkraft - mit Inflationsrechner",
  description: "Verstehen Sie Inflation: Ursachen, Auswirkungen und wie Sie Ihr Geld schützen. Mit historischen Daten, Beispielen und kostenlosem Inflationsrechner.",
  keywords: "Inflation erklärt, Kaufkraft berechnen, Inflationsrate Deutschland, Geldwert Entwicklung, Preissteigerung verstehen, Inflationsschutz",
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/inflation-einfach-erklaert",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/inflation-einfach-erklaert",
      "x-default": "https://www.rechnerjetzt.de/blog/inflation-einfach-erklaert",
    },
  },
}

export default function InflationEinfachErklaertPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="bg-muted/30 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <Home className="h-4 w-4 mr-1" />
              Startseite
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link href="/blog" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <BookOpen className="h-4 w-4 mr-1" />
              Blog
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">Inflation einfach erklärt</span>
          </nav>
        </div>
      </div>

      <main>
        <article className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Inflation einfach erklärt
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Verstehen Sie, wie Inflation entsteht, warum sie Ihre Kaufkraft mindert und 
                welche Strategien Sie zum Schutz Ihres Geldes anwenden können.
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>📅 15. Dezember 2024</span>
                <span>•</span>
                <span>⏱️ 15 Min. Lesezeit</span>
                <span>•</span>
                <span>👤 Rechner Tools</span>
              </div>
            </header>

            {/* Quick Access to Calculator */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-12 text-center">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                📊 Kaufkraft berechnen
              </h2>
              <p className="text-muted-foreground mb-4">
                Sehen Sie, wie sich Ihr Geld durch Inflation entwickelt hat
              </p>
              <Link 
                href="/inflationsrechner" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <TrendingUp className="h-5 w-5" />
                Zum Inflationsrechner
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Die Grundlagen der Inflation
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Inflation ist ein natürlicher Teil der Wirtschaft, den Sie nicht aufhalten können. 
                Aber Sie können verstehen, wie sie funktioniert, und entsprechend handeln. 
                Nutzen Sie unseren kostenlosen Inflationsrechner, um zu sehen, 
                wie sich Ihr Geld über die Jahre entwickelt hat und entwickeln wird.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  📊 Jetzt berechnen!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Sehen Sie, wie Inflation Ihre Kaufkraft beeinflusst hat
                </p>
                <Link 
                  href="/inflationsrechner" 
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <TrendingUp className="h-5 w-5" />
                  Inflationsrechner öffnen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Weitere hilfreiche Artikel
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/prozentrechner-anleitung" className="group">
                <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                    Prozentrechnung lernen
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Meistern Sie die Prozentrechnung mit praktischen Beispielen
                  </p>
                </div>
              </Link>
              
              <Link href="/blog/arbeitstage-2025-uebersicht" className="group">
                <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                    Arbeitstage 2025 Übersicht
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Vollständiger Überblick über Arbeitstage und Feiertage
                  </p>
                </div>
              </Link>
              
              <Link href="/prozentrechner" className="group">
                <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary">
                    Prozentrechner
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Berechnen Sie Prozente, Rabatte und Aufschläge online
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
