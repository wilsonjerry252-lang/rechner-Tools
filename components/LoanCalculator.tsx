"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard } from "lucide-react"

export default function LoanCalculator() {
  const [loanType, setLoanType] = useState("personal")
  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [loanResults, setLoanResults] = useState<any>(null)

  // Calculate Loan
  const calculateLoan = () => {
    const principal = Number.parseFloat(loanAmount)
    const rate = Number.parseFloat(interestRate)
    const years = Number.parseFloat(loanTerm)

    if (!principal || !rate || !years || principal <= 0 || rate <= 0 || years <= 0) return

    const monthlyRate = rate / 100 / 12
    const numberOfPayments = years * 12

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const totalPayment = monthlyPayment * numberOfPayments
    const totalInterest = totalPayment - principal

    setLoanResults({
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalPayment: Math.round(totalPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
    })
  }

  return (
    <section id="loan" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
            <CreditCard className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-3xl font-bold font-serif text-foreground mb-4">Kreditrechner</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berechnen Sie Raten für Privatkredite, Autokredite und Hypotheken mit detaillierter Kostenübersicht
          </p>
        </div>

        <Card className="max-w-3xl mx-auto card-shadow hover:card-shadow-hover transition-all-smooth hover-lift">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl font-serif">Kreditberechnung</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="loan-type" className="text-sm font-medium">
                Kreditart
              </Label>
              <Select value={loanType} onValueChange={setLoanType}>
                <SelectTrigger className="mt-2 h-12 border-2 border-border transition-all-smooth hover:border-accent/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal">💳 Ratenkredit</SelectItem>
                  <SelectItem value="car">🚗 Autokredit</SelectItem>
                  <SelectItem value="mortgage">🏠 Hypothek/Baufinanzierung</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="loan-amount" className="text-sm font-medium">
                  Kreditsumme (€)
                </Label>
                <Input
                  id="loan-amount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="10.000"
                  className="mt-2 h-12 text-lg border-2 border-border transition-all-smooth hover:border-accent/50 focus:border-accent"
                />
              </div>
              <div>
                <Label htmlFor="interest-rate" className="text-sm font-medium">
                  Zinssatz (%)
                </Label>
                <Input
                  id="interest-rate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="3.5"
                  className="mt-2 h-12 text-lg border-2 border-border transition-all-smooth hover:border-accent/50 focus:border-accent"
                />
              </div>
              <div>
                <Label htmlFor="loan-term" className="text-sm font-medium">
                  Laufzeit (Jahre)
                </Label>
                <Input
                  id="loan-term"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="5"
                  className="mt-2 h-12 text-lg border-2 border-border transition-all-smooth hover:border-accent/50 focus:border-accent"
                />
              </div>
            </div>
            <Button
              onClick={calculateLoan}
              className="w-full h-12 text-base font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-all-smooth hover-lift"
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Kredit berechnen
            </Button>

            {loanResults && (
              <div className="mt-8 p-6 result-highlight rounded-xl transition-all-smooth">
                <h4 className="font-bold text-lg text-foreground mb-6 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-accent" />
                  Kreditübersicht
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="text-sm text-muted-foreground mb-2">Monatliche Rate</div>
                    <div className="text-2xl font-bold text-accent">
                      {loanResults.monthlyPayment.toFixed(2)} €
                    </div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-2">Gesamtbetrag</div>
                    <div className="text-2xl font-bold text-primary">
                      {loanResults.totalPayment.toFixed(2)} €
                    </div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                    <div className="text-sm text-muted-foreground mb-2">Gesamtzinsen</div>
                    <div className="text-2xl font-bold text-secondary">
                      {loanResults.totalInterest.toFixed(2)} €
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
