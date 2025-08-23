"use client"

import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-10 w-10 rounded-full" />
              <h3 className="text-xl logo-text logo-gradient">
                Rechner Tools
              </h3>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Professionelle Online-Rechner für den deutschsprachigen Raum. Kostenlos, sicher und immer aktuell.
            </p>
          </div>
          <div>
            <h6 className="font-semibold mb-4">Rechner</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#vat"
                  className="opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Mehrwertsteuerrechner
                </a>
              </li>
              <li>
                <a
                  href="#bmi"
                  className="opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  BMI-Rechner
                </a>
              </li>
              <li>
                <a
                  href="#loan"
                  className="opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Kreditrechner
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-4">Länder</h6>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <span>🇩🇪</span> Deutschland
              </li>
              <li className="flex items-center gap-2">
                <span>🇦🇹</span> Österreich
              </li>
              <li className="flex items-center gap-2">
                <span>🇨🇭</span> Schweiz
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-4">Rechtliches</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/impressum" className="opacity-90 hover:opacity-100 transition-opacity">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="opacity-90 hover:opacity-100 transition-opacity">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/cookie-richtlinie" className="opacity-90 hover:opacity-100 transition-opacity">
                  Cookie-Richtlinie
                </Link>
              </li>
              <li>
                <Link href="/nutzungsbedingungen" className="opacity-90 hover:opacity-100 transition-opacity">
                  Nutzungsbedingungen
                </Link>
              </li>
              <li>
                <Link href="/haftungsausschluss" className="opacity-90 hover:opacity-100 transition-opacity">
                  Haftungsausschluss
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-10 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Rechner Tools. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
