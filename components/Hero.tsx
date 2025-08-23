"use client"

import React from "react"
import { TrendingUp, Shield, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 leading-tight">
          Präzise Rechner für Ihre
          <br />
          <span className="text-primary">täglichen Bedürfnisse</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Nutzen Sie unsere professionellen Online-Rechner für Mehrwertsteuer, BMI und Kredite. Optimiert für
          Deutschland, Österreich und die Schweiz mit aktuellen Bestimmungen.
        </p>
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
      </div>
    </section>
  )
}
