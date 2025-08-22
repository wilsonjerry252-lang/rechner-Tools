import type { Metadata } from "next"
import VATCalculatorClientPage from "./VATCalculatorClientPage"

export const metadata: Metadata = {
  title: "Mehrwertsteuerrechner - MwSt berechnen für DE, AT, CH | Rechner Tools",
  description:
    "Kostenloser Mehrwertsteuerrechner für Deutschland (19%), Österreich (20%) und Schweiz (7.7%). Brutto-Netto Rechner mit aktuellen MwSt-Sätzen. Schnell und präzise.",
  keywords:
    "Mehrwertsteuerrechner, MwSt Rechner, Brutto Netto Rechner, VAT Calculator, Deutschland, Österreich, Schweiz, Umsatzsteuer",
  openGraph: {
    title: "Mehrwertsteuerrechner - MwSt berechnen für DE, AT, CH",
    description:
      "Kostenloser Mehrwertsteuerrechner mit aktuellen Steuersätzen für Deutschland, Österreich und die Schweiz.",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "/vat-calculator",
  },
}

export default function VATCalculatorPage() {
  return <VATCalculatorClientPage />
}
