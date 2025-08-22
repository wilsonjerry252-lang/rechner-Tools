"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CreditCard, TrendingUp, Car, Home, User } from "lucide-react"

const LOAN_TYPES = {
  personal: {
    name: "Ratenkredit",
    icon: User,
    description: "Für persönliche Anschaffungen",
    typicalRate: { min: 2.5, max: 12.0 },
    maxTerm: 10,
  },
  car: {
    name: "Autokredit",
    icon: Car,
    description: "Für Fahrzeugfinanzierung",
    typicalRate: { min: 1.5, max: 8.0 },
    maxTerm: 8,
  },
  mortgage: {
    name: "Baufinanzierung",
    icon: Home,
    description: "Für Immobilienkauf/-bau",
    typicalRate: { min: 1.0, max: 4.5 },
    maxTerm: 30,
  },
}

interface LoanCalculation {
  monthlyPayment: number
  totalPayment: number
  totalInterest: number
  amortizationSchedule: Array<{
    month: number
    payment: number
    principal: number
    interest: number
    balance: number
  }>
}

export default function LoanCalculatorClientPage() {
  const [loanType, setLoanType] = useState<keyof typeof LOAN_TYPES>("personal")
  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [calculation, setCalculation] = useState<LoanCalculation | null>(null)

  const calculateLoan = () => {
    const principal = Number.parseFloat(loanAmount)
    const annualRate = Number.parseFloat(interestRate) / 100
    const years = Number.parseFloat(loanTerm)

    if (principal > 0 && annualRate >= 0 && years > 0) {
      const monthlyRate = annualRate / 12
      const numberOfPayments = years * 12

      let monthlyPayment: number
      if (monthlyRate === 0) {
        // No interest case
        monthlyPayment = principal / numberOfPayments
      } else {
        // Standard loan payment formula
        monthlyPayment =
          (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      }

      const totalPayment = monthlyPayment * numberOfPayments
      const totalInterest = totalPayment - principal

      // Generate amortization schedule
      const amortizationSchedule = []
      let remainingBalance = principal

      for (let month = 1; month <= numberOfPayments; month++) {
        const interestPayment = remainingBalance * monthlyRate
        const principalPayment = monthlyPayment - interestPayment
        remainingBalance -= principalPayment

        amortizationSchedule.push({
          month,
          payment: monthlyPayment,
          principal: principalPayment,
          interest: interestPayment,
          balance: Math.max(0, remainingBalance),
        })
      }

      setCalculation({
        monthlyPayment,
        totalPayment,
        totalInterest,
        amortizationSchedule,
      })
    } else {
      setCalculation(null)
    }
  }

  useEffect(() => {
    calculateLoan()
  }, [loanAmount, interestRate, loanTerm])

  const clearInputs = () => {
    setLoanAmount("")
    setInterestRate("")
    setLoanTerm("")
    setCalculation(null)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const currentLoanType = LOAN_TYPES[loanType]
  const IconComponent = currentLoanType.icon

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-accent text-accent-foreground shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild className="text-accent-foreground hover:bg-accent-foreground/10">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-serif font-bold">Kreditrechner</h1>
              <p className="text-sm opacity-90">Raten und Kosten berechnen</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Loan Type Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Kreditart auswählen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(LOAN_TYPES).map(([key, type]) => {
                const TypeIcon = type.icon
                return (
                  <button
                    key={key}
                    onClick={() => setLoanType(key as keyof typeof LOAN_TYPES)}
                    className={`p-4 rounded-lg border text-left transition-all ${
                      loanType === key
                        ? "border-accent bg-accent/10 ring-2 ring-accent/20"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <TypeIcon className="h-5 w-5 text-accent" />
                      <span className="font-semibold">{type.name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Zinssatz: {type.typicalRate.min}% - {type.typicalRate.max}%
                    </p>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Calculator Input */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <IconComponent className="h-5 w-5" />
                {currentLoanType.name} berechnen
              </CardTitle>
              <CardDescription>{currentLoanType.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="loan-amount">Kreditsumme (€)</Label>
                <Input
                  id="loan-amount"
                  type="number"
                  step="100"
                  placeholder="z.B. 25000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="interest-rate">Zinssatz (% p.a.)</Label>
                <Input
                  id="interest-rate"
                  type="number"
                  step="0.1"
                  placeholder={`z.B. ${currentLoanType.typicalRate.min}`}
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Typisch für {currentLoanType.name}: {currentLoanType.typicalRate.min}% -{" "}
                  {currentLoanType.typicalRate.max}%
                </p>
              </div>

              <div>
                <Label htmlFor="loan-term">Laufzeit (Jahre)</Label>
                <Input
                  id="loan-term"
                  type="number"
                  step="1"
                  placeholder="z.B. 5"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">Maximal empfohlen: {currentLoanType.maxTerm} Jahre</p>
              </div>

              <Button onClick={clearInputs} variant="outline" className="w-full bg-transparent">
                Eingaben löschen
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Kreditkosten
              </CardTitle>
            </CardHeader>
            <CardContent>
              {calculation ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <div className="text-sm text-muted-foreground">Monatliche Rate</div>
                      <div className="text-2xl font-bold font-mono text-primary">
                        {formatCurrency(calculation.monthlyPayment)}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-sm text-muted-foreground">Gesamtkosten</div>
                        <div className="font-mono font-semibold">{formatCurrency(calculation.totalPayment)}</div>
                      </div>
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <div className="text-sm text-muted-foreground">Zinsen gesamt</div>
                        <div className="font-mono font-semibold text-secondary">
                          {formatCurrency(calculation.totalInterest)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cost Breakdown */}
                  <div className="space-y-2">
                    <h4 className="font-semibold">Kostenaufschlüsselung</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Kreditsumme:</span>
                        <span className="font-mono">{formatCurrency(Number.parseFloat(loanAmount))}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Zinsen:</span>
                        <span className="font-mono text-secondary">{formatCurrency(calculation.totalInterest)}</span>
                      </div>
                      <div className="flex justify-between border-t pt-1 font-semibold">
                        <span>Gesamt:</span>
                        <span className="font-mono">{formatCurrency(calculation.totalPayment)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Geben Sie die Kreditdaten ein, um die monatliche Rate zu berechnen.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Amortization Schedule */}
        {calculation && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="font-serif">Tilgungsplan</CardTitle>
              <CardDescription>Detaillierte Aufschlüsselung der Ratenzahlungen</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="summary" className="w-full">
                <TabsList>
                  <TabsTrigger value="summary">Zusammenfassung</TabsTrigger>
                  <TabsTrigger value="schedule">Vollständiger Plan</TabsTrigger>
                </TabsList>

                <TabsContent value="summary" className="space-y-4">
                  <div className="grid md:grid-cols-4 gap-4">
                    {[1, 12, 24, calculation.amortizationSchedule.length].map((month) => {
                      const entry = calculation.amortizationSchedule[month - 1]
                      if (!entry) return null
                      return (
                        <div key={month} className="p-3 bg-muted rounded-lg">
                          <div className="text-sm font-semibold">
                            {month === calculation.amortizationSchedule.length ? "Letzter" : `${month}.`} Monat
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Tilgung: {formatCurrency(entry.principal)}
                          </div>
                          <div className="text-xs text-muted-foreground">Zinsen: {formatCurrency(entry.interest)}</div>
                          <div className="text-xs text-muted-foreground">
                            Restschuld: {formatCurrency(entry.balance)}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="schedule">
                  <div className="max-h-96 overflow-y-auto">
                    <table className="w-full text-sm">
                      <thead className="sticky top-0 bg-background border-b">
                        <tr>
                          <th className="text-left p-2">Monat</th>
                          <th className="text-right p-2">Rate</th>
                          <th className="text-right p-2">Tilgung</th>
                          <th className="text-right p-2">Zinsen</th>
                          <th className="text-right p-2">Restschuld</th>
                        </tr>
                      </thead>
                      <tbody>
                        {calculation.amortizationSchedule.map((entry) => (
                          <tr key={entry.month} className="border-b">
                            <td className="p-2">{entry.month}</td>
                            <td className="p-2 text-right font-mono">{formatCurrency(entry.payment)}</td>
                            <td className="p-2 text-right font-mono">{formatCurrency(entry.principal)}</td>
                            <td className="p-2 text-right font-mono">{formatCurrency(entry.interest)}</td>
                            <td className="p-2 text-right font-mono">{formatCurrency(entry.balance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}

        {/* Information Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-serif">Wichtige Informationen zu Krediten</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Effektiver Jahreszins</h4>
                <p className="text-sm text-muted-foreground">
                  Achten Sie auf den effektiven Jahreszins (APR), der alle Kreditkosten einschließlich Gebühren
                  beinhaltet.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Sondertilgungen</h4>
                <p className="text-sm text-muted-foreground">
                  Viele Kredite erlauben kostenlose Sondertilgungen, die die Gesamtkosten erheblich reduzieren können.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Kreditvergleich</h4>
                <p className="text-sm text-muted-foreground">
                  Vergleichen Sie Angebote verschiedener Banken. Bereits 0,5% Zinsunterschied können viel Geld sparen.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Bonität prüfen</h4>
                <p className="text-sm text-muted-foreground">
                  Eine gute Bonität führt zu besseren Konditionen. Prüfen Sie Ihre SCHUFA-Auskunft vor der Beantragung.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Restschuldversicherung</h4>
                <p className="text-sm text-muted-foreground">
                  Eine Restschuldversicherung ist meist teuer und oft nicht notwendig. Prüfen Sie Alternativen.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Rechtlicher Hinweis</h4>
                <p className="text-sm text-muted-foreground">
                  Diese Berechnung dient nur zur Orientierung. Verbindliche Konditionen erhalten Sie von Ihrer Bank.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
