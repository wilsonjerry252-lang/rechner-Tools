import type { Metadata } from "next"
import LoanCalculatorClientPage from "./LoanCalculatorClientPage"

export const metadata: Metadata = {
  title: "Kreditrechner - Raten berechnen für Kredit & Darlehen | Rechner Tools",
  description:
    "Kostenloser Kreditrechner für Ratenkredit, Autokredit und Baufinanzierung. Monatliche Rate, Zinsen und Tilgungsplan berechnen. Für Deutschland, Österreich, Schweiz.",
  keywords:
    "Kreditrechner, Ratenkredit Rechner, Darlehensrechner, Autokredit, Baufinanzierung, Tilgungsplan, Zinsen berechnen",
  openGraph: {
    title: "Kreditrechner - Raten berechnen für Kredit & Darlehen",
    description:
      "Kostenloser Kreditrechner mit Tilgungsplan für alle Kreditarten. Monatliche Raten und Gesamtkosten berechnen.",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "/loan-calculator",
  },
}

export default function LoanCalculatorPage() {
  return <LoanCalculatorClientPage />
}
