import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ArrowRight, TrendingUp, Calculator, Heart, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Blog - Rechner Tools | Tipps und Ratgeber zu Finanzen und Gesundheit",
  description:
    "Entdecken Sie hilfreiche Artikel zu Steuern, BMI, Krediten und mehr. Praktische Tipps und Ratgeber für den deutschsprachigen Raum.",
  keywords: "blog, ratgeber, steuern, bmi, kredite, finanzen, gesundheit, tipps",
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Mehrwertsteuer in Deutschland, Österreich und der Schweiz: Ein Vergleich",
      excerpt:
        "Erfahren Sie alles über die unterschiedlichen MwSt-Sätze in den DACH-Ländern und wie Sie diese korrekt berechnen.",
      category: "Steuern",
      date: "2025-01-15",
      readTime: "5 Min.",
      icon: Calculator,
      color: "primary",
    },
    {
      id: 2,
      title: "BMI richtig interpretieren: Was die Zahlen wirklich bedeuten",
      excerpt:
        "Der BMI ist nur ein Richtwert. Lernen Sie, wie Sie Ihren BMI-Wert richtig einordnen und was er über Ihre Gesundheit aussagt.",
      category: "Gesundheit",
      date: "2025-01-12",
      readTime: "7 Min.",
      icon: Heart,
      color: "secondary",
    },
    {
      id: 3,
      title: "Kreditvergleich: So finden Sie den besten Zinssatz",
      excerpt:
        "Tipps und Tricks für den Kreditvergleich. Worauf Sie achten sollten und wie Sie Tausende von Euro sparen können.",
      category: "Finanzen",
      date: "2025-01-10",
      readTime: "6 Min.",
      icon: CreditCard,
      color: "accent",
    },
    {
      id: 4,
      title: "Steuerliche Absetzbarkeit von Kreditzinsen",
      excerpt:
        "Wann können Sie Kreditzinsen von der Steuer absetzen? Ein Leitfaden für Privatpersonen und Unternehmer.",
      category: "Steuern",
      date: "2025-01-08",
      readTime: "8 Min.",
      icon: Calculator,
      color: "primary",
    },
    {
      id: 5,
      title: "Gesunde Gewichtsabnahme: Mehr als nur der BMI",
      excerpt:
        "Warum der BMI allein nicht ausreicht und welche anderen Faktoren für eine gesunde Gewichtsabnahme wichtig sind.",
      category: "Gesundheit",
      date: "2025-01-05",
      readTime: "9 Min.",
      icon: Heart,
      color: "secondary",
    },
    {
      id: 6,
      title: "Sondertilgung bei Krediten: Wann lohnt es sich?",
      excerpt: "Erfahren Sie, wann eine Sondertilgung sinnvoll ist und wie Sie dabei vorgehen sollten.",
      category: "Finanzen",
      date: "2025-01-03",
      readTime: "5 Min.",
      icon: CreditCard,
      color: "accent",
    },
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
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h1 className="text-2xl font-bold font-serif">Rechner Tools</h1>
                <p className="text-sm opacity-90 font-medium">Professionelle Online-Rechner</p>
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

                  <Button variant="ghost" className="w-full group-hover:bg-primary/5 transition-colors">
                    Artikel lesen
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Newsletter abonnieren</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
