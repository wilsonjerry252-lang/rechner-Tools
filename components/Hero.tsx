"use client"

import React from "react"
import { TrendingUp, Shield, Zap, Calculator, Globe, Calendar, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main H1 Tag for SEO */}
        <h1 className="text-5xl md:text-6xl font-bold font-serif text-foreground mb-6 leading-tight">
          Professionelle Online-Rechner für
          <br />
          <span className="text-primary">Alltag & Business</span>
        </h1>
        
        {/* Secondary H2 Tag */}
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 leading-tight">
          Präzise Rechner für Ihre
          <br />
          <span className="text-primary">täglichen Bedürfnisse</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Nutzen Sie unsere professionellen Online-Rechner für Mehrwertsteuer, Prozente, Arbeitstage und Inflation. 
          Optimiert für Deutschland, Österreich und die Schweiz mit aktuellen Bestimmungen.
        </p>
        
        {/* Enhanced Feature Description */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
          <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Mehrwertsteuer</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              MwSt. für Deutschland (19%), Österreich (20%) und Schweiz (7,7%) berechnen.
            </p>
            <a 
              href="#vat" 
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline"
            >
              Zum Rechner
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Prozentrechner</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Rabatte, Aufschläge und prozentuale Änderungen einfach berechnen.
            </p>
            <a 
              href="#percentage" 
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-secondary hover:underline"
            >
              Zum Rechner
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Arbeitstage</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Arbeitstage 2025/2026 mit allen Feiertagen für DACH-Region.
            </p>
            <a 
              href="#workdays" 
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-accent hover:underline"
            >
              Zum Rechner
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Inflation</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Kaufkraftentwicklung seit 1991 mit historischen Inflationsraten.
            </p>
            <a 
              href="#inflation" 
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline"
            >
              Zum Rechner
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-secondary" />
            <span>Datenschutzkonform</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-accent" />
            <span>Keine Registrierung</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>Immer aktuell</span>
          </div>
        </div>

        {/* Quick Access Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a 
            href="#percentage" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors shadow-lg"
          >
            <Globe className="h-5 w-5" />
            Prozentrechner
          </a>
          <a 
            href="#workdays" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-lg"
          >
            <Calendar className="h-5 w-5" />
            Arbeitstage
          </a>
          <a 
            href="#inflation" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg"
          >
            <TrendingUp className="h-5 w-5" />
            Inflation
          </a>
        </div>
        
        {/* Additional Information Section */}
        <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border/50">
          <h3 className="text-lg font-semibold text-foreground mb-4">Warum Rechner Tools?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <p className="mb-3">
                Unser Online-Rechner ist speziell für den deutschsprachigen Raum entwickelt und berücksichtigt 
                alle aktuellen gesetzlichen Bestimmungen. Egal ob Sie Unternehmer, Privatperson oder Fachkraft sind - 
                unser Tool hilft Ihnen bei präzisen Berechnungen.
              </p>
              <p>
                Der Rechner ist kostenlos nutzbar und funktioniert ohne Registrierung. 
                Ihre Daten werden niemals gespeichert oder an Dritte weitergegeben.
              </p>
            </div>
            <div>
              <p className="mb-3">
                Die Berechnungen basieren auf anerkannten Formeln und werden regelmäßig aktualisiert. 
                Nutzen Sie unseren Rechner für Steuererklärungen und Abrechnungen.
              </p>
              <p>
                Bei Fragen stehen Ihnen unsere umfangreichen Blog-Artikel und Ratgeber zur Verfügung, 
                die Ihnen helfen, die Berechnungen richtig zu interpretieren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
