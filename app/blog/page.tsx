import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, ArrowRight, TrendingUp, Calculator, Heart, CreditCard, Activity, Globe, Download, Apple, RefreshCw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Blog - Rechner Tools | Finanzen & Gesundheit",
  description:
    "Entdecken Sie hilfreiche Artikel zu Steuern, BMI, Krediten und mehr. Praktische Tipps und Ratgeber für den deutschsprachigen Raum.",
  keywords: "blog, ratgeber, steuern, bmi, kredite, finanzen, gesundheit, tipps",
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
      title: "BMI richtig interpretieren: Was die Zahlen wirklich bedeuten",
      excerpt:
        "Der BMI ist nur ein Richtwert. Lernen Sie, wie Sie Ihren BMI-Wert richtig einordnen und was er über Ihre Gesundheit aussagt.",
      category: "Gesundheit",
      date: "2024-12-15",
      readTime: "7 Min.",
      icon: Heart,
      color: "secondary",
      slug: "bmi-richtig-interpretieren"
    },
    {
      id: 3,
      title: "Kreditvergleich: So finden Sie den besten Zinssatz",
      excerpt:
        "Tipps und Tricks für den Kreditvergleich. Worauf Sie achten sollten und wie Sie Tausende von Euro sparen können.",
      category: "Finanzen",
      date: "2024-12-15",
      readTime: "6 Min.",
      icon: CreditCard,
      color: "accent",
      slug: "kreditvergleich-bester-zinssatz"
    },
    {
      id: 4,
      title: "Steuerliche Absetzbarkeit von Kreditzinsen",
      excerpt:
        "Wann können Sie Kreditzinsen von der Steuer absetzen? Ein Leitfaden für Privatpersonen und Unternehmer.",
      category: "Steuern",
      date: "2024-12-15",
      readTime: "8 Min.",
      icon: Calculator,
      color: "primary",
      slug: "steuerliche-absetzbarkeit-kreditzinsen"
    },
    {
      id: 5,
      title: "Gesunde Gewichtsabnahme: Mehr als nur der BMI",
      excerpt:
        "Warum der BMI allein nicht ausreicht und welche anderen Faktoren für eine gesunde Gewichtsabnahme wichtig sind.",
      category: "Gesundheit",
      date: "2024-12-15",
      readTime: "9 Min.",
      icon: Heart,
      color: "secondary",
      slug: "gesunde-gewichtsabnahme-bmi"
    },
    {
      id: 6,
      title: "Sondertilgung bei Krediten: Wann lohnt es sich?",
      excerpt: "Erfahren Sie, wann eine Sondertilgung sinnvoll ist und wie Sie dabei vorgehen sollten.",
      category: "Finanzen",
      date: "2024-12-15",
      readTime: "5 Min.",
      icon: CreditCard,
      color: "accent",
      slug: "sondertilgung-kredite"
    },
    {
      id: 7,
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
      id: 8,
      title: "BMI und Gesundheitsrisiken: Was Sie wissen sollten",
      excerpt: "Verstehen Sie die gesundheitlichen Risiken verschiedener BMI-Werte und wie Sie diese minimieren können.",
      category: "Gesundheit",
      date: "2024-12-15",
      readTime: "8 Min.",
      icon: Heart,
      color: "secondary",
      slug: "bmi-gesundheitsrisiken"
    },
    {
      id: 9,
      title: "Kreditarten im Vergleich: Welcher Kredit passt zu Ihnen?",
      excerpt: "Ein umfassender Überblick über verschiedene Kreditarten und deren Vor- und Nachteile.",
      category: "Finanzen",
      date: "2024-12-15",
      readTime: "7 Min.",
      icon: CreditCard,
      color: "accent",
      slug: "kreditarten-vergleich"
    },
    {
      id: 10,
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
      id: 11,
      title: "BMI, Ernährung und Training: Der perfekte Plan",
      excerpt: "Kombinieren Sie BMI, Ernährung und Training für optimale Gesundheit und Ihr Wunschgewicht.",
      category: "Gesundheit",
      date: "2024-12-15",
      readTime: "9 Min.",
      icon: Heart,
      color: "secondary",
      slug: "bmi-ernaehrung-training"
    },
    {
      id: 12,
      title: "Kreditzinsen berechnen: Von einfachen Formeln bis zur Tilgungstabelle",
      excerpt: "Lernen Sie, wie Sie Kreditzinsen korrekt berechnen und verstehen Sie Tilgungspläne.",
      category: "Finanzen",
      date: "2024-12-15",
      readTime: "8 Min.",
      icon: CreditCard,
      color: "accent",
      slug: "kredit-zinsen-berechnen"
    },
    {
      id: 13,
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
      id: 14,
      title: "Idealgewicht berechnen: BMI und gesunde Gewichtsziele",
      excerpt: "Erfahren Sie, wie Sie Ihr Idealgewicht berechnen und gesunde Gewichtsziele setzen.",
      category: "Gesundheit",
      date: "2024-12-15",
      readTime: "7 Min.",
      icon: Heart,
      color: "secondary",
      slug: "bmi-idealgewicht"
    },
    {
      id: 15,
      title: "Kredit aufnehmen: Der komplette Leitfaden",
      excerpt: "Erfahren Sie alles über Kreditaufnahme: Voraussetzungen, Dokumente, Zinsen und Tipps.",
      category: "Finanzen",
      date: "2024-12-15",
      readTime: "9 Min.",
      icon: CreditCard,
      color: "accent",
      slug: "kredit-aufnehmen"
    },
    {
      id: 16,
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
      id: 17,
      title: "BMI für Sportler: Warum der BMI bei Athleten irreführend ist",
      excerpt: "Erfahren Sie, warum der BMI bei Sportlern oft irreführend ist und welche Alternativen es gibt.",
      category: "Gesundheit",
      date: "2024-12-15",
      readTime: "7 Min.",
      icon: Activity,
      color: "secondary",
      slug: "bmi-sportler"
    },
    {
      id: 18,
      title: "Kredit umschulden: Wann lohnt sich eine Umschuldung?",
      excerpt: "Erfahren Sie alles über Kreditumschuldung: Wann sie sinnvoll ist und wie Sie sparen können.",
      category: "Finanzen",
      date: "2024-12-15",
      readTime: "8 Min.",
      icon: RefreshCw,
      color: "accent",
      slug: "kredit-umschuldung"
    },
    {
      id: 19,
      title: "Mehrwertsteuer bei Importen: Einfuhrumsatzsteuer verstehen",
      excerpt: "Erfahren Sie alles über Einfuhrumsatzsteuer, Zollabfertigung und Importgeschäfte.",
      category: "Steuern",
      date: "2024-12-15",
      readTime: "9 Min.",
      icon: Download,
      color: "primary",
      slug: "mehrwertsteuer-import"
    },
    {
      id: 20,
      title: "BMI und Ernährung: Der perfekte Ernährungsplan für Ihr Gewicht",
      excerpt: "Erfahren Sie, wie Sie Ihre Ernährung optimal an Ihren BMI anpassen und gesundes Gewicht erreichen.",
      category: "Gesundheit",
      date: "2024-12-15",
      readTime: "8 Min.",
      icon: Apple,
      color: "secondary",
      slug: "bmi-ernaehrung"
    }
  ]

  const categories = [
    { name: "Alle", count: blogPosts.length },
    { name: "Steuern", count: blogPosts.filter((post) => post.category === "Steuern").length },
    { name: "Gesundheit", count: blogPosts.filter((post) => post.category === "Gesundheit").length },
    { name: "Finanzen", count: blogPosts.filter((post) => post.category === "Finanzen").length },
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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.name === "Alle" ? "default" : "outline"}
              className="rounded-full"
            >
              {category.name} ({category.count})
            </Button>
          ))}
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
