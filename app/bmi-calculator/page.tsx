import type { Metadata } from "next"
import BMICalculatorClient from "./BMICalculatorClient"

export const metadata: Metadata = {
  title: "BMI Rechner - Body Mass Index berechnen | Rechner Tools",
  description:
    "Kostenloser BMI-Rechner mit WHO-Kategorien und Gesundheitsempfehlungen. Body-Mass-Index schnell und einfach berechnen. Idealgewicht ermitteln.",
  keywords: "BMI Rechner, BMI berechnen, Body Mass Index, Idealgewicht, Übergewicht, Untergewicht, WHO Kategorien",
  openGraph: {
    title: "BMI Rechner - Body Mass Index berechnen",
    description: "Kostenloser BMI-Rechner mit WHO-Kategorien und personalisierten Gesundheitsempfehlungen.",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "/bmi-calculator",
  },
}

export default function BMICalculatorPage() {
  return <BMICalculatorClient />
}
