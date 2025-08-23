"use client"

import React from "react"
import { TrendingUp, Shield, Zap, Calculator, Heart, CreditCard } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main H1 Tag for SEO */}
        <h1 className="text-5xl md:text-6xl font-bold font-serif text-foreground mb-6 leading-tight">
          Professionelle Online-Rechner für
          <br />
          <span className="text-primary">Mehrwertsteuer, BMI & Kredite</span>
        </h1>
        
        {/* Secondary H2 Tag */}
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 leading-tight">
          Präzise Rechner für Ihre
          <br />
          <span className="text-primary">täglichen Bedürfnisse</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Nutzen Sie unsere professionellen Online-Rechner für Mehrwertsteuer, BMI und Kredite. Optimiert für
          Deutschland, Österreich und die Schweiz mit aktuellen Bestimmungen.
        </p>
        
        {/* Enhanced Feature Description */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
          <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Mehrwertsteuer-Rechner</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Berechnen Sie MwSt. für Deutschland (19%), Österreich (20%) und die Schweiz (7,7%). 
              Unterstützt Brutto-zu-Netto und Netto-zu-Brutto Berechnungen mit aktuellen Steuersätzen.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">BMI-Rechner</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bestimmen Sie Ihren Body-Mass-Index mit metrischen oder imperialen Einheiten. 
              Inklusive WHO-Kategorisierung und Gesundheitsempfehlungen für optimale Ergebnisse.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <CreditCard className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Kreditrechner</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Planen Sie Ihre Kredite mit detaillierten Tilgungsplänen. Berechnen Sie monatliche Raten, 
              Gesamtkosten und optimale Laufzeiten für Ihre Finanzierung.
            </p>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
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
        
        {/* Additional Information Section */}
        <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border/50">
          <h3 className="text-lg font-semibold text-foreground mb-4">Warum Rechner Tools?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <p className="mb-3">
                Unsere Online-Rechner sind speziell für den deutschsprachigen Raum entwickelt und berücksichtigen 
                alle aktuellen gesetzlichen Bestimmungen. Egal ob Sie Unternehmer, Privatperson oder Fachkraft sind - 
                unsere Tools helfen Ihnen bei präzisen Berechnungen.
              </p>
              <p>
                Alle Rechner sind kostenlos nutzbar und funktionieren ohne Registrierung. 
                Ihre Daten werden niemals gespeichert oder an Dritte weitergegeben.
              </p>
            </div>
            <div>
              <p className="mb-3">
                Die Berechnungen basieren auf anerkannten Formeln und werden regelmäßig aktualisiert. 
                Nutzen Sie unsere Rechner für Steuererklärungen, Gesundheitschecks oder Finanzplanung.
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
