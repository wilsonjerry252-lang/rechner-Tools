import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, ArrowRight, TrendingUp, Calculator, Activity, Globe, Download, Apple, RefreshCw, Building2, Percent, CalendarDays, TrendingDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Blog - Rechner Tools | Steuern, Prozentrechnung & mehr",
  description:
    "Entdecken Sie 20 hilfreiche Artikel zu Mehrwertsteuer, Prozentrechnung, Arbeitstagen und Inflation. Praktische Tipps und Ratgeber für den deutschsprachigen Raum.",
  keywords: "blog, ratgeber, mehrwertsteuer, prozentrechnung, arbeitstage, inflation, finanzen, tipps, steuern, deutschland",
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog",
      "x-default": "https://www.rechnerjetzt.de/blog",
    },
  },
}

export default function BlogPage() {
  const blogPosts = [
    // Mehrwertsteuer (VAT) - 5 posts
    {
      id: 1,
      title: "Mehrwertsteuer 2025 Deutschland: Alle Änderungen",
      excerpt: "Erfahren Sie alles über die neuen Mehrwertsteuer-Regelungen 2025. Alle wichtigen Änderungen, Auswirkungen und praktische Tipps für Unternehmen und Verbraucher.",
      category: "Mehrwertsteuer",
      date: "2024-12-15",
      readTime: "12 Min.",
      icon: Calculator,
      color: "primary",
      slug: "mehrwertsteuer-2025-alle-aenderungen"
    },
    {
      id: 2,
      title: "Mehrwertsteuer richtig berechnen: Mit Beispielen",
      excerpt: "Lernen Sie Schritt für Schritt, wie Sie die Mehrwertsteuer korrekt berechnen. Mit praktischen Beispielen und Formeln für den Alltag.",
      category: "Mehrwertsteuer",
      date: "2024-12-15",
      readTime: "10 Min.",
      icon: Calculator,
      color: "primary",
      slug: "mehrwertsteuer-berechnung-richtig"
    },
    {
      id: 3,
      title: "Mehrwertsteuer DACH-Vergleich: Deutschland, Österreich, Schweiz",
      excerpt: "Vergleichen Sie die Mehrwertsteuer-Systeme der DACH-Region. Unterschiede, Gemeinsamkeiten und praktische Tipps für grenzüberschreitende Geschäfte.",
      category: "Mehrwertsteuer",
      date: "2024-12-15",
      readTime: "10 Min.",
      icon: Building2,
      color: "primary",
      slug: "mehrwertsteuer-dach-vergleich"
    },
    {
      id: 4,
      title: "Mehrwertsteuer Geschichte Deutschland: Entwicklung seit 1968",
      excerpt: "Entdecken Sie die spannende Entwicklung der Mehrwertsteuer in Deutschland. Von der Einführung bis zu den aktuellen Regelungen.",
      category: "Mehrwertsteuer",
      date: "2024-12-15",
      readTime: "8 Min.",
      icon: Calculator,
      color: "primary",
      slug: "mehrwertsteuer-geschichte-deutschland"
    },
    {
      id: 5,
      title: "Mehrwertsteuer im Online-Handel: Shop-Betreiber Guide",
      excerpt: "Alles über Mehrwertsteuer im E-Commerce. Rechtliche Grundlagen, praktische Umsetzung und häufige Fehler vermeiden.",
      category: "Mehrwertsteuer",
      date: "2024-12-15",
      readTime: "9 Min.",
      icon: Globe,
      color: "primary",
      slug: "mehrwertsteuer-online-handel"
    },
    // Prozentrechner - 5 posts
    {
      id: 6,
      title: "Prozentrechnung einfach erklärt: Formeln & Beispiele",
      excerpt: "Verstehen Sie Prozentrechnung im Alltag. Von Rabatten über Mehrwertsteuer bis hin zu Zinsen - alles einfach erklärt mit Beispielen.",
      category: "Prozentrechnung",
      date: "2024-12-15",
      readTime: "11 Min.",
      icon: Percent,
      color: "secondary",
      slug: "prozentrechnung-einfach-erklaert"
    },
    {
      id: 7,
      title: "Rabatte richtig berechnen: So sparen Sie im Supermarkt",
      excerpt: "Lernen Sie, wie Sie echte Rabatte erkennen und berechnen. Tipps für intelligentes Einkaufen und Geld sparen im Alltag.",
      category: "Prozentrechnung",
      date: "2024-12-15",
      readTime: "8 Min.",
      icon: Percent,
      color: "secondary",
      slug: "rabatte-richtig-berechnen"
    },
    {
      id: 8,
      title: "Prozentuale Preissteigerung: Leitfaden für Verbraucher",
      excerpt: "Verstehen Sie Preissteigerungen und deren Auswirkungen auf Ihr Budget. Wie Sie Preiserhöhungen berechnen und damit umgehen.",
      category: "Prozentrechnung",
      date: "2024-12-15",
      readTime: "9 Min.",
      icon: TrendingUp,
      color: "secondary",
      slug: "prozentuale-preissteigerung"
    },
    {
      id: 9,
      title: "Aufschläge & Skonto: So berechnen Unternehmen Preise",
      excerpt: "Erfahren Sie, wie Unternehmen ihre Preise kalkulieren. Von Aufschlägen über Skonto bis hin zu Gewinnmargen.",
      category: "Prozentrechnung",
      date: "2024-12-15",
      readTime: "10 Min.",
      icon: Percent,
      color: "secondary",
      slug: "aufschlaege-skonto-unternehmen"
    },
    {
      id: 10,
      title: "Prozentrechnung für Schüler: Einfache Beispiele zum Lernen",
      excerpt: "Prozentrechnung leicht gemacht für Schüler. Mit einfachen Beispielen und Übungen zum besseren Verständnis der Mathematik.",
      category: "Prozentrechnung",
      date: "2024-12-15",
      readTime: "7 Min.",
      icon: Percent,
      color: "secondary",
      slug: "prozentrechnung-schueler"
    },
    // Arbeitstage - 5 posts
    {
      id: 11,
      title: "Arbeitstage 2025 Deutschland: Bundesländer im Vergleich",
      excerpt: "Vollständige Übersicht aller Arbeitstage 2025 für alle deutschen Bundesländer. Inklusive Feiertage und Planungstipps.",
      category: "Arbeitstage",
      date: "2024-12-15",
      readTime: "12 Min.",
      icon: CalendarDays,
      color: "accent",
      slug: "arbeitstage-2025-deutschland"
    },
    {
      id: 12,
      title: "Arbeitstage 2026 DACH-Region: Download-Kalender",
      excerpt: "Planen Sie Ihr Jahr 2026 optimal mit unserem Arbeitstage-Kalender. Alle Feiertage für Deutschland, Österreich und Schweiz.",
      category: "Arbeitstage",
      date: "2024-12-15",
      readTime: "10 Min.",
      icon: CalendarDays,
      color: "accent",
      slug: "arbeitstage-2026-dach-region"
    },
    {
      id: 13,
      title: "Wie viele Arbeitstage hat ein Jahr? Einfache Berechnung",
      excerpt: "Lernen Sie, wie Sie die Anzahl der Arbeitstage in einem Jahr berechnen. Mit Formeln und praktischen Beispielen.",
      category: "Arbeitstage",
      date: "2024-12-15",
      readTime: "8 Min.",
      icon: CalendarDays,
      color: "accent",
      slug: "arbeitstage-berechnung"
    },
    {
      id: 14,
      title: "Feiertage & Brückentage 2025: Clevere Urlaubsplanung",
      excerpt: "Optimieren Sie Ihren Urlaub 2025 mit Brückentagen. Alle Feiertage und clevere Urlaubsplanung für maximalen Erholungswert.",
      category: "Arbeitstage",
      date: "2024-12-15",
      readTime: "9 Min.",
      icon: CalendarDays,
      color: "accent",
      slug: "feiertage-brueckentage-2025"
    },
    {
      id: 15,
      title: "Arbeitstage vs. Werktage vs. Kalendertage: Unterschiede erklärt",
      excerpt: "Verstehen Sie die Unterschiede zwischen Arbeitstagen, Werktagen und Kalendertagen. Wichtige Begriffe für die Arbeitsplanung.",
      category: "Arbeitstage",
      date: "2024-12-15",
      readTime: "7 Min.",
      icon: CalendarDays,
      color: "accent",
      slug: "arbeitstage-werktage-kalendertage"
    },
    // Inflation - 5 posts
    {
      id: 16,
      title: "Inflation einfach erklärt: Ursachen, Folgen & Beispiele",
      excerpt: "Verstehen Sie Inflation und deren Auswirkungen auf Ihr Geld. Von Ursachen über Folgen bis hin zu praktischen Beispielen.",
      category: "Inflation",
      date: "2024-12-15",
      readTime: "11 Min.",
      icon: TrendingDown,
      color: "primary",
      slug: "inflation-einfach-erklaert"
    },
    {
      id: 17,
      title: "Inflation in Deutschland seit 1991: Eine historische Analyse",
      excerpt: "Entdecken Sie die Entwicklung der Inflation in Deutschland über die letzten Jahrzehnte. Historische Daten und Trends.",
      category: "Inflation",
      date: "2024-12-15",
      readTime: "10 Min.",
      icon: TrendingDown,
      color: "primary",
      slug: "inflation-deutschland-seit-1991"
    },
    {
      id: 18,
      title: "Wie schützt man sein Geld vor Inflation? Praktische Tipps",
      excerpt: "Lernen Sie effektive Strategien zum Schutz Ihres Geldes vor Inflation. Von Investitionen bis hin zu Alltagsstrategien.",
      category: "Inflation",
      date: "2024-12-15",
      readTime: "12 Min.",
      icon: TrendingDown,
      color: "primary",
      slug: "geld-schutz-inflation"
    },
    {
      id: 19,
      title: "Kaufkraftentwicklung in Deutschland: So hat sich 1 € verändert",
      excerpt: "Verfolgen Sie die Kaufkraftentwicklung des Euros in Deutschland. Wie viel ist Ihr Geld heute noch wert?",
      category: "Inflation",
      date: "2024-12-15",
      readTime: "9 Min.",
      icon: TrendingDown,
      color: "primary",
      slug: "kaufkraftentwicklung-deutschland"
    },
    {
      id: 20,
      title: "Inflation 2025 Prognose: Was erwarten Experten?",
      excerpt: "Blicken Sie in die Zukunft: Was sagen Experten zur Inflation 2025? Prognosen, Trends und Handlungsempfehlungen.",
      category: "Inflation",
      date: "2024-12-15",
      readTime: "8 Min.",
      icon: TrendingDown,
      color: "primary",
      slug: "inflation-2025-prognose"
    }
  ]

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 logo-container">
              <Image
                src="/logo.png"
                alt="Rechner Tools Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full shadow-md"
              />
              <div className="flex flex-col">
                            <h3 className="text-3xl font-black logo-text logo-gradient logo-glow tracking-tight">
              Rechner Tools
            </h3>
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
          <h1 className="text-4xl font-bold font-serif text-foreground mb-4">Blog & Ratgeber</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie hilfreiche Artikel, Tipps und Ratgeber zu Steuern, Gesundheit und Finanzen. Praktisches Wissen
            für den deutschsprachigen Raum.
          </p>
        </div>

       

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => {
            const IconComponent = post.icon
            return (
              <article
                key={post.id}
                className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${
                    post.color === "primary"
                      ? "from-primary to-primary/80"
                      : post.color === "secondary"
                        ? "from-secondary to-secondary/80"
                        : "from-accent to-accent/80"
                  }`}
                ></div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg ${
                        post.color === "primary"
                          ? "bg-primary/10"
                          : post.color === "secondary"
                            ? "bg-secondary/10"
                            : "bg-accent/10"
                      }`}
                    >
                      <IconComponent
                        className={`h-5 w-5 ${
                          post.color === "primary"
                            ? "text-primary"
                            : post.color === "secondary"
                              ? "text-secondary"
                              : "text-accent"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full ${
                        post.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : post.color === "secondary"
                            ? "bg-secondary/10 text-secondary"
                            : "bg-accent/10 text-accent"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString("de-DE")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="w-full group-hover:bg-primary/5 transition-colors">
                      Artikel lesen
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Bleiben Sie informiert</h3>
            <p className="text-muted-foreground mb-6">
              Verpassen Sie keine neuen Artikel! Wir veröffentlichen regelmäßig hilfreiche Ratgeber und Tipps zu
              Steuern, Gesundheit und Finanzen.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
