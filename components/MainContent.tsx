"use client"

import React from "react"
import Hero from "./Hero"
import VATCalculator from "./VATCalculator"
import PercentageCalculator from "./PercentageCalculator"
import WorkdaysCalculator from "./WorkdaysCalculator"
import InflationCalculator from "./InflationCalculator"

export default function MainContent() {
  return (
    <main className="flex-1 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Tool Components */}
      <VATCalculator />
      <PercentageCalculator />
      <WorkdaysCalculator />
      <InflationCalculator />
    </main>
  )
}
