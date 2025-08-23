"use client"

import React from "react"
import Hero from "./Hero"
import VATCalculator from "./VATCalculator"
import BMICalculator from "./BMICalculator"
import LoanCalculator from "./LoanCalculator"

export default function MainContent() {
  return (
    <main className="flex-1 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Tool Components */}
      <VATCalculator />
      <BMICalculator />
      <LoanCalculator />
    </main>
  )
}
