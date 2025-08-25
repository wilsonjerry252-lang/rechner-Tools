import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, Shield, Zap, History } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Inflation in Deutschland seit 1991: Eine historische Analyse",
  description: "Entdecken Sie die Entwicklung der Inflation in Deutschland seit 1991. Historische Daten, wichtige Ereignisse und deren Auswirkungen auf die Wirtschaft.",
  keywords: "inflation deutschland 1991, historische inflation deutschland, inflation entwicklung deutschland, deutsche inflation, wirtschaftsgeschichte deutschland",
  openGraph: {
    title: "Inflation in Deutschland seit 1991: Eine historische Analyse",
    description: "Entdecken Sie die Entwicklung der Inflation in Deutschland seit 1991. Historische Daten, wichtige Ereignisse und deren Auswirkungen auf die Wirtschaft.",
    type: "article",
    publishedTime: "2024-12-15T10:00:00Z",
    authors: ["Rechner Tools"],
  },
  alternates: {
    canonical: "https://www.rechnerjetzt.de/blog/inflation-deutschland-seit-1991",
    languages: {
      "de-DE": "https://www.rechnerjetzt.de/blog/inflation-deutschland-seit-1991",
      "x-default": "https://www.rechnerjetzt.de/blog/inflation-deutschland-seit-1991",
    },
  },
}

export default function InflationDeutschlandSeit1991Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-10 w-10 rounded-full shadow-md" />
              <div>
                <h3 className="text-xl font-bold font-serif">Rechner Tools</h3>
                <p className="text-xs opacity-90 font-medium">Professionelle Online-Rechner</p>
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
                <History className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Wirtschaft
              </span>
            </div>
            
            <h1 className="text-4xl font-bold font-serif text-foreground mb-4">
              Inflation in Deutschland seit 1991: Eine historische Analyse
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Dezember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 Min. Lesezeit</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Die Entwicklung der Inflation in Deutschland seit 1991 ist eine faszinierende Reise durch die Wirtschaftsgeschichte, die von der Wiedervereinigung über die Euro-Einführung bis zur aktuellen Zeit reicht. Viele Menschen sind unsicher, wie sich die Inflation in den verschiedenen Phasen entwickelt hat und welche Ereignisse die Preisentwicklung beeinflusst haben. In diesem Artikel analysieren wir Schritt für Schritt die historische Entwicklung der Inflation in Deutschland, erklären wichtige Ereignisse und zeigen deren Auswirkungen auf die Wirtschaft und die Verbraucher.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Warum 1991 als Startpunkt?</h2>
            <p className="mb-6">
              Das Jahr 1991 markiert einen wichtigen Wendepunkt in der deutschen Wirtschaftsgeschichte. Nach der Wiedervereinigung 1990 stand Deutschland vor enormen Herausforderungen: Die Integration der ehemaligen DDR in die westdeutsche Wirtschaft, die Umstellung von der Plan- auf die Marktwirtschaft und die Einführung der D-Mark in den neuen Bundesländern. Diese Ereignisse hatten tiefgreifende Auswirkungen auf die Inflationsentwicklung.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Wichtige Ereignisse 1990-1991:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>3. Oktober 1990: Deutsche Wiedervereinigung</li>
                <li>1. Juli 1990: Währungsunion zwischen BRD und DDR</li>
                <li>1991: Integration der ostdeutschen Wirtschaft</li>
                <li>Umstellung von der Plan- auf die Marktwirtschaft</li>
                <li>Einführung der sozialen Marktwirtschaft im Osten</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Die 1990er Jahre: Nach der Wiedervereinigung</h2>
            <p className="mb-6">
              Die 1990er Jahre waren geprägt von der wirtschaftlichen Integration der neuen Bundesländer und den damit verbundenen Herausforderungen:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">1991-1995: Hohe Inflationsraten</h3>
            <p className="mb-4">
              In den ersten Jahren nach der Wiedervereinigung stiegen die Inflationsraten deutlich an. Die Integration der ostdeutschen Wirtschaft führte zu steigenden Preisen, da die Nachfrage nach Waren und Dienstleistungen das verfügbare Angebot überstieg.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Inflation in Deutschland 1991-1995:</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">1991</h4>
                  <p className="text-lg font-bold text-primary">3,5%</p>
                  <p className="text-xs text-muted-foreground">Wiedervereinigung</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">1992</h4>
                  <p className="text-lg font-bold text-primary">5,1%</p>
                  <p className="text-xs text-muted-foreground">Integration</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">1993</h4>
                  <p className="text-lg font-bold text-primary">4,5%</p>
                  <p className="text-xs text-muted-foreground">Wirtschaftsboom</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">1994</h4>
                  <p className="text-lg font-bold text-primary">2,7%</p>
                  <p className="text-xs text-muted-foreground">Stabilisierung</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">1995</h4>
                  <p className="text-lg font-bold text-primary">1,7%</p>
                  <p className="text-xs text-muted-foreground">Normalisierung</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">1996-1999: Stabilisierung und Euro-Vorbereitung</h3>
            <p className="mb-4">
              In der zweiten Hälfte der 1990er Jahre stabilisierte sich die Inflation auf niedrigem Niveau. Die Bundesbank verfolgte eine restriktive Geldpolitik, um die Inflation niedrig zu halten und die Voraussetzungen für die Euro-Einführung zu schaffen.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Inflation in Deutschland 1996-1999:</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">1996</h4>
                  <p className="text-lg font-bold text-primary">1,4%</p>
                  <p className="text-xs text-muted-foreground">Stabile Preise</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">1997</h4>
                  <p className="text-lg font-bold text-primary">1,8%</p>
                  <p className="text-xs text-muted-foreground">Leichter Anstieg</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">1998</h4>
                  <p className="text-lg font-bold text-primary">0,9%</p>
                  <p className="text-xs text-muted-foreground">Euro-Vorbereitung</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">1999</h4>
                  <p className="text-lg font-bold text-primary">0,6%</p>
                  <p className="text-xs text-muted-foreground">Euro-Einführung</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Die 2000er Jahre: Euro-Ära und Finanzkrise</h2>
            <p className="mb-6">
              Die Einführung des Euro 1999 und die damit verbundene Übertragung der Geldpolitik an die Europäische Zentralbank (EZB) markierten einen neuen Abschnitt in der deutschen Inflationsgeschichte:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">2000-2007: Niedrige Inflation und Wirtschaftswachstum</h3>
            <p className="mb-4">
              Die ersten Jahre der Euro-Ära waren geprägt von niedriger Inflation und stabilem Wirtschaftswachstum. Die EZB verfolgte eine restriktive Geldpolitik, die die Inflation unter Kontrolle hielt.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Inflation in Deutschland 2000-2007:</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2000-2003</h4>
                  <p className="text-lg font-bold text-primary">1,0-2,0%</p>
                  <p className="text-xs text-muted-foreground">Stabile Euro-Ära</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2004-2006</h4>
                  <p className="text-lg font-bold text-primary">1,5-2,5%</p>
                  <p className="text-xs text-muted-foreground">Wirtschaftswachstum</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2007</h4>
                  <p className="text-lg font-bold text-primary">2,3%</p>
                  <p className="text-xs text-muted-foreground">Vor der Krise</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">2008-2009: Finanzkrise und Deflation</h3>
            <p className="mb-4">
              Die globale Finanzkrise 2008/2009 führte zu einem dramatischen Einbruch der Wirtschaft und einer kurzen Phase der Deflation. Die Preise fielen, da die Nachfrage einbrach und die Wirtschaft schrumpfte.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Finanzkrise 2008-2009:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2008</h4>
                  <p className="text-lg font-bold text-primary">2,8%</p>
                  <p className="text-sm text-muted-foreground">Krisenbeginn</p>
                  <p className="text-xs text-muted-foreground">Lehman-Pleite</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2009</h4>
                  <p className="text-lg font-bold text-primary">0,2%</p>
                  <p className="text-sm text-muted-foreground">Deflation</p>
                  <p className="text-xs text-muted-foreground">Wirtschaftseinbruch</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Die 2010er Jahre: Erholung und Niedrigzinsphase</h2>
            <p className="mb-6">
              Nach der Finanzkrise erholte sich die deutsche Wirtschaft, aber die Inflation blieb auf niedrigem Niveau:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">2010-2015: Erholung und niedrige Inflation</h3>
            <p className="mb-4">
              Die deutsche Wirtschaft erholte sich schnell von der Finanzkrise, aber die Inflation blieb niedrig. Die EZB senkte die Zinsen auf historische Tiefstände, um die Wirtschaft zu stimulieren.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Inflation in Deutschland 2010-2015:</h3>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2010</h4>
                  <p className="text-lg font-bold text-primary">1,1%</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2011</h4>
                  <p className="text-lg font-bold text-primary">2,1%</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2012</h4>
                  <p className="text-lg font-bold text-primary">2,0%</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2013</h4>
                  <p className="text-lg font-bold text-primary">1,5%</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2014</h4>
                  <p className="text-lg font-bold text-primary">0,9%</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2015</h4>
                  <p className="text-lg font-bold text-primary">0,5%</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">2016-2019: Niedrigzinsphase und leichte Erholung</h3>
            <p className="mb-4">
              In der zweiten Hälfte der 2010er Jahre blieb die Inflation niedrig, obwohl die Wirtschaft wuchs. Die EZB hielt die Zinsen auf historischen Tiefständen, um die Inflation zu stimulieren.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Niedrigzinsphase 2016-2019:</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2016</h4>
                  <p className="text-lg font-bold text-primary">0,5%</p>
                  <p className="text-xs text-muted-foreground">Niedrigzins</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2017</h4>
                  <p className="text-lg font-bold text-primary">1,8%</p>
                  <p className="text-xs text-muted-foreground">Erholung</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2018</h4>
                  <p className="text-lg font-bold text-primary">1,9%</p>
                  <p className="text-xs text-muted-foreground">Stabil</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2019</h4>
                  <p className="text-lg font-bold text-primary">1,4%</p>
                  <p className="text-xs text-muted-foreground">Vor Corona</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Die 2020er Jahre: Corona-Krise und Energiekrise</h2>
            <p className="mb-6">
              Die 2020er Jahre begannen mit der Corona-Pandemie und führten zu dramatischen Veränderungen in der Wirtschaft und der Inflationsentwicklung:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">2020-2021: Corona-Krise und niedrige Inflation</h3>
            <p className="mb-4">
              Die Corona-Pandemie führte zu einem dramatischen Einbruch der Wirtschaft und einer kurzen Phase der Deflation. Die Preise fielen, da die Nachfrage einbrach und die Wirtschaft schrumpfte.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Corona-Krise 2020-2021:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2020</h4>
                  <p className="text-lg font-bold text-primary">0,5%</p>
                  <p className="text-sm text-muted-foreground">Corona-Beginn</p>
                  <p className="text-xs text-muted-foreground">Lockdowns</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2021</h4>
                  <p className="text-lg font-bold text-primary">3,1%</p>
                  <p className="text-sm text-muted-foreground">Erholung</p>
                  <p className="text-xs text-muted-foreground">Nachfrageanstieg</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">2022-2024: Energiekrise und hohe Inflation</h3>
            <p className="mb-4">
              Die Energiekrise 2022 führte zu einem dramatischen Anstieg der Inflation. Steigende Energiepreise, Lieferkettenprobleme und die expansive Geldpolitik der EZB trieben die Preise in die Höhe.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-6 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Energiekrise 2022-2024:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2022</h4>
                  <p className="text-lg font-bold text-primary">6,9%</p>
                  <p className="text-sm text-muted-foreground">Energiekrise</p>
                  <p className="text-xs text-muted-foreground">Ukraine-Krieg</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2023</h4>
                  <p className="text-lg font-bold text-primary">5,9%</p>
                  <p className="text-sm text-muted-foreground">Rückgang</p>
                  <p className="text-xs text-muted-foreground">EZB-Maßnahmen</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">2024</h4>
                  <p className="text-lg font-bold text-primary">2,4%</p>
                  <p className="text-sm text-muted-foreground">Normalisierung</p>
                  <p className="text-xs text-muted-foreground">Ziel erreicht</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Wichtige Ereignisse und deren Auswirkungen</h2>
            <p className="mb-6">
              Verschiedene Ereignisse haben die Inflationsentwicklung in Deutschland seit 1991 geprägt:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Wiedervereinigung 1990:</strong> Hohe Inflationsraten durch wirtschaftliche Integration</li>
              <li><strong>Euro-Einführung 1999:</strong> Übertragung der Geldpolitik an die EZB</li>
              <li><strong>Finanzkrise 2008/2009:</strong> Deflation und Wirtschaftseinbruch</li>
              <li><strong>Euro-Krise 2010-2015:</strong> Niedrige Inflation und Niedrigzinsphase</li>
              <li><strong>Corona-Pandemie 2020:</strong> Wirtschaftseinbruch und Deflation</li>
              <li><strong>Energiekrise 2022:</strong> Dramatischer Anstieg der Inflation</li>
              <li><strong>EZB-Zinserhöhungen 2022-2024:</strong> Rückgang der Inflation</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Lektionen aus der Geschichte</h2>
            <p className="mb-6">
              Die historische Entwicklung der Inflation in Deutschland bietet wichtige Lektionen:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Geldpolitik ist entscheidend</h3>
            <p className="mb-4">
              Die Geldpolitik der Zentralbank hat einen entscheidenden Einfluss auf die Inflationsentwicklung. Restriktive Geldpolitik kann Inflation bekämpfen, expansive Geldpolitik kann sie fördern.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Externe Schocks haben große Auswirkungen</h3>
            <p className="mb-4">
              Externe Schocks wie Kriege, Pandemien oder Energiekrisen können die Inflation dramatisch beeinflussen. Diese Ereignisse sind schwer vorhersehbar und können die beste Geldpolitik überlagern.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Inflation ist zyklisch</h3>
            <p className="mb-4">
              Inflation folgt oft einem zyklischen Muster: Phasen hoher Inflation werden von Phasen niedriger Inflation abgelöst. Das Verständnis dieser Zyklen ist wichtig für die langfristige Planung.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Häufige Fragen (FAQ)</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Welches Jahr hatte die höchste Inflation seit 1991?</h3>
            <p className="mb-6">
              2022 hatte mit 6,9% die höchste Inflationsrate seit 1991. Diese hohe Inflation war hauptsächlich auf die Energiekrise und den Ukraine-Krieg zurückzuführen.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Welches Jahr hatte die niedrigste Inflation seit 1991?</h3>
            <p className="mb-6">
              2015 hatte mit 0,5% die niedrigste Inflationsrate seit 1991. Diese niedrige Inflation war Folge der Niedrigzinsphase und der expansiven Geldpolitik der EZB.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Wie hat sich die Inflation seit der Euro-Einführung entwickelt?</h3>
            <p className="mb-6">
              Seit der Euro-Einführung 1999 hat sich die Inflation in Deutschland stabilisiert. Die durchschnittliche Inflationsrate lag bei etwa 1,5%, was dem Ziel der EZB von unter, aber nahe 2% entspricht.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Welche Rolle spielt die EZB bei der deutschen Inflation?</h3>
            <p className="mb-6">
              Die EZB ist seit 1999 für die Geldpolitik in der Eurozone zuständig und hat damit einen entscheidenden Einfluss auf die deutsche Inflation. Die Bundesbank hat diese Rolle an die EZB abgegeben.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">Kann sich die Geschichte der hohen Inflation wiederholen?</h3>
            <p className="mb-6">
              Ja, die Geschichte kann sich wiederholen. Externe Schocks wie Kriege, Pandemien oder Energiekrisen können jederzeit zu hoher Inflation führen. Wichtig ist, dass die Zentralbanken darauf vorbereitet sind.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-6 border border-secondary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">💡 Praxistipp:</h3>
              <p className="mb-4">
                Nutzen Sie unseren <Link href="/inflationsrechner" className="text-primary hover:underline font-medium">Inflationsrechner</Link> für eine schnelle und präzise Berechnung der historischen Kaufkraftentwicklung Ihres Geldes. Er zeigt Ihnen, wie sich die Inflation seit 1991 auf Ihre Ersparnisse ausgewirkt hat.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Fazit</h2>
            <p className="mb-6">
              Die Entwicklung der Inflation in Deutschland seit 1991 zeigt eine faszinierende Reise durch die Wirtschaftsgeschichte. Von der Wiedervereinigung über die Euro-Einführung bis zur aktuellen Zeit hat sich die Inflation in verschiedenen Phasen entwickelt. Wichtig ist, dass externe Schocks wie Kriege oder Pandemien die Inflation dramatisch beeinflussen können, aber die Geldpolitik der Zentralbanken einen entscheidenden Einfluss auf die langfristige Entwicklung hat. Mit dem Verständnis der historischen Entwicklung können Sie besser einschätzen, wie sich die Inflation in Zukunft entwickeln könnte und entsprechende Maßnahmen zum Schutz Ihres Geldes ergreifen.
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Weitere Informationen</h3>
              <p className="mb-4">
                Entdecken Sie weitere nützliche Artikel zu Wirtschaft und Finanzen in unserem <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link> oder nutzen Sie direkt unseren <Link href="/inflationsrechner" className="text-primary hover:underline font-medium">Inflationsrechner</Link> für Ihre historischen Berechnungen.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
