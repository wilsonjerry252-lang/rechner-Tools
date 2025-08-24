import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, ArrowRight, TrendingUp, Calculator, Activity, Globe, Download, Apple, RefreshCw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Blog - Rechner Tools | Steuern & Finanzen",
  description:
    "Entdecken Sie hilfreiche Artikel zu Steuern, Prozentrechnung, Arbeitstagen und Inflation. Praktische Tipps und Ratgeber für den deutschsprachigen Raum.",
  keywords: "blog, ratgeber, steuern, mehrwertsteuer, prozentrechnung, arbeitstage, inflation, finanzen, tipps",
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
    {
      id: 1,
      title: "Mehrwertsteuer in Deutschland, Österreich und der Schweiz: Ein Vergleich",
      excerpt:
        "Erfahren Sie alles über die unterschiedlichen MwSt-Sätze in den DACH-Ländern und wie Sie diese korrekt berechnen.",
      category: "Steuern",
      date: "2024-12-15",
      readTime: "5 Min.",
      icon: Calculator,
      color: "primary",
      slug: "mehrwertsteuer-deutschland-oesterreich-schweiz"
    },
    {
      id: 2,
      title: "Mehrwertsteuer berechnen: Methoden und Beispiele",
      excerpt: "Lernen Sie verschiedene Methoden zur MwSt.-Berechnung kennen und sehen Sie praktische Beispiele.",
      category: "Steuern",
      date: "2024-12-15",
      readTime: "6 Min.",
      icon: Calculator,
      color: "primary",
      slug: "mehrwertsteuer-berechnung"
    },
    {
      id: 3,
      title: "Mehrwertsteuer für Unternehmer: Ein umfassender Leitfaden",
      excerpt: "Alles was Unternehmer über MwSt., Vorsteuerabzug und korrekte Abrechnung wissen müssen.",
      category: "Steuern",
      date: "2024-12-15",
      readTime: "10 Min.",
      icon: Calculator,
      color: "primary",
      slug: "mehrwertsteuer-unternehmer"
    },
    {
      id: 4,
      title: "Mehrwertsteuer bei Exporten: Steuerfreie Ausfuhren",
      excerpt: "Erfahren Sie alles über MwSt.-freie Exporte, Ausfuhrlieferungen und grenzüberschreitende Geschäfte.",
      category: "Steuern",
      date: "2024-12-15",
      readTime: "8 Min.",
      icon: Globe,
      color: "primary",
      slug: "mehrwertsteuer-export"
    },
    {
      id: 5,
      title: "Mehrwertsteuer bei Importen: Was Sie beachten müssen",
      excerpt: "Alles über MwSt. bei Importen, Einfuhrumsatzsteuer und grenzüberschreitenden Geschäften.",
      category: "Steuern",
      date: "2024-12-15",
      readTime: "7 Min.",
      icon: Globe,
      color: "primary",
      slug: "mehrwertsteuer-import"
    },
          {
        id: 6,
        title: "Mehrwertsteuer-Ausnahmen: Wann gilt welcher Satz?",
        excerpt: "Erfahren Sie alles über MwSt.-Ausnahmen, ermäßigte Sätze und steuerfreie Leistungen.",
        category: "Steuern",
        date: "2024-12-15",
        readTime: "8 Min.",
        icon: Calculator,
        color: "primary",
        slug: "mehrwertsteuer-ausnahmen"
      },
      {
        id: 7,
        title: "Wie berechnet man Prozente richtig? Praktische Beispiele mit Prozentrechner",
        excerpt: "Lernen Sie Prozentrechnung mit praktischen Beispielen. Formeln für Rabatt, Mehrwertsteuer, Trinkgeld und mehr.",
        category: "Finanzen",
        date: "2024-12-15",
        readTime: "8 Min.",
        icon: Calculator,
        color: "secondary",
        slug: "prozentrechner-anleitung"
      },
      {
        id: 8,
        title: "Arbeitstage 2025 in Deutschland, Österreich und der Schweiz - vollständiger Überblick",
        excerpt: "Komplette Übersicht aller Arbeitstage 2025 für Deutschland, Österreich und Schweiz. Inklusive Feiertage und Planungstipps.",
        category: "Planung",
        date: "2024-12-15",
        readTime: "12 Min.",
        icon: Calendar,
        color: "accent",
        slug: "arbeitstage-2025-uebersicht"
      },
      {
        id: 9,
        title: "Inflation einfach erklärt: So verändert sich Ihre Kaufkraft",
        excerpt: "Verstehen Sie Inflation: Ursachen, Auswirkungen und wie Sie Ihr Geld schützen. Mit historischen Daten und Beispielen.",
        category: "Finanzen",
        date: "2024-12-15",
        readTime: "15 Min.",
        icon: TrendingUp,
        color: "primary",
        slug: "inflation-einfach-erklaert"
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
