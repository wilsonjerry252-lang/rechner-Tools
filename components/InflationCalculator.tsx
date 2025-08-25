"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, DollarSign, Info, RotateCcw, ChartLine } from "lucide-react"

// Inflationsraten für Deutschland (historische Daten basierend auf Statistisches Bundesamt)
const inflationRates = {
  1991: 3.5, 1992: 5.1, 1993: 4.5, 1994: 2.7, 1995: 1.7,
  1996: 1.4, 1997: 1.9, 1998: 1.0, 1999: 0.6, 2000: 1.4,
  2001: 2.0, 2002: 1.4, 2003: 1.1, 2004: 1.7, 2005: 2.0,
  2006: 1.6, 2007: 2.3, 2008: 2.6, 2009: 0.4, 2010: 1.1,
  2011: 2.1, 2012: 2.0, 2013: 1.5, 2014: 0.9, 2015: 0.3,
  2016: 0.5, 2017: 1.5, 2018: 1.8, 2019: 1.4, 2020: 0.5,
  2021: 3.1, 2022: 6.9, 2023: 5.9, 2024: 2.3
}

export default function InflationCalculator() {
  const [amount, setAmount] = useState<string>("")
  const [startYear, setStartYear] = useState<string>("2000")
  const [endYear, setEndYear] = useState<string>("2024")
  const [result, setResult] = useState<{
    adjustedAmount: number
    totalInflation: number
    annualizedRate: number
    yearlyBreakdown: { year: number; rate: number; value: number }[]
  } | null>(null)

  const calculateInflation = () => {
    const baseAmount = parseFloat(amount)
    const start = parseInt(startYear)
    const end = parseInt(endYear)
    
    if (isNaN(baseAmount) || start >= end || start < 1991 || end > 2024) {
      setResult(null)
      return
    }

    let adjustedAmount = baseAmount
    const yearlyBreakdown: { year: number; rate: number; value: number }[] = []
    
    // Berechne Jahr für Jahr
    for (let year = start; year < end; year++) {
      const rate = inflationRates[year as keyof typeof inflationRates] || 0
      adjustedAmount *= (1 + rate / 100)
      yearlyBreakdown.push({
        year: year + 1,
        rate,
        value: adjustedAmount
      })
    }

    const totalInflation = ((adjustedAmount - baseAmount) / baseAmount) * 100
    const years = end - start
    const annualizedRate = Math.pow(adjustedAmount / baseAmount, 1 / years) - 1

    setResult({
      adjustedAmount,
      totalInflation,
      annualizedRate: annualizedRate * 100,
      yearlyBreakdown
    })
  }

  const resetCalculator = () => {
    setAmount("")
    setStartYear("2000")
    setEndYear("2024")
    setResult(null)
  }

  useEffect(() => {
    calculateInflation()
  }, [amount, startYear, endYear])

  const getYearOptions = () => {
    const years = []
    for (let year = 1991; year <= 2024; year++) {
      years.push(year)
    }
    return years
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value)
  }

  return (
    <section id="inflation" className="py-12 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            Inflationsrechner Deutschland
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berechnen Sie die Kaufkraftveränderung Ihres Geldes durch Inflation. 
            Basierend auf historischen Inflationsraten des Statistischen Bundesamts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Input */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Kaufkraft berechnen
              </CardTitle>
              <CardDescription>
                Geben Sie Betrag und Zeitraum ein
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="amount" className="text-sm font-medium">
                  Betrag (€)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="1000"
                  className="mt-1"
                  step="0.01"
                  min="0"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="start-year" className="text-sm font-medium">
                    Ausgangsjahr
                  </Label>
                  <Select value={startYear} onValueChange={setStartYear}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {getYearOptions().slice(0, -1).map(year => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="end-year" className="text-sm font-medium">
                    Zieljahr
                  </Label>
                  <Select value={endYear} onValueChange={setEndYear}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {getYearOptions().filter(year => year > parseInt(startYear)).map(year => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={calculateInflation}
                  className="flex-1"
                  disabled={!amount || !startYear || !endYear}
                >
                  <ChartLine className="h-4 w-4 mr-2" />
                  Berechnen
                </Button>
                <Button 
                  onClick={resetCalculator}
                  variant="outline"
                  size="icon"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>

              {/* Quick preset buttons */}
              <div className="border-t pt-4">
                <p className="text-sm font-medium text-foreground mb-3">Schnellauswahl:</p>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setStartYear("2000")
                      setEndYear("2024")
                    }}
                  >
                    2000 → 2024
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setStartYear("2010")
                      setEndYear("2024")
                    }}
                  >
                    2010 → 2024
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Result Display */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-secondary" />
                Ergebnis
              </CardTitle>
              <CardDescription>
                Kaufkraftveränderung durch Inflation
              </CardDescription>
            </CardHeader>
            <CardContent>
              {result && parseFloat(amount) > 0 ? (
                <div className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">
                      {formatCurrency(parseFloat(amount))} im Jahr {startYear} entsprechen:
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {formatCurrency(result.adjustedAmount)}
                    </p>
                    <p className="text-sm text-muted-foreground">im Jahr {endYear}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Gesamtinflation</p>
                      <p className="text-lg font-bold text-foreground">
                        +{result.totalInflation.toFixed(1)}%
                      </p>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Ø pro Jahr</p>
                      <p className="text-lg font-bold text-foreground">
                        {result.annualizedRate.toFixed(1)}%
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Kaufkraftverlust:</h4>
                    <p className="text-sm text-muted-foreground">
                      Sie benötigen <span className="font-semibold text-primary">
                      {formatCurrency(result.adjustedAmount - parseFloat(amount))} mehr
                      </span> um die gleiche Kaufkraft wie im Jahr {startYear} zu haben.
                    </p>
                  </div>

                  {/* Yearly breakdown for shorter periods */}
                  {result.yearlyBreakdown.length <= 10 && (
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-2">Jährliche Entwicklung:</h4>
                      <div className="max-h-40 overflow-y-auto">
                        <div className="space-y-1">
                          {result.yearlyBreakdown.map((year, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                {year.year}: +{year.rate}%
                              </span>
                              <span className="font-medium">
                                {formatCurrency(year.value)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 mb-2">💡 Bedeutung:</h4>
                    <p className="text-sm text-yellow-800">
                      Was {formatCurrency(parseFloat(amount))} im Jahr {startYear} wert waren, 
                      kostet heute {formatCurrency(result.adjustedAmount)}. 
                      Die Inflation hat die Kaufkraft um {result.totalInflation.toFixed(1)}% reduziert.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <TrendingUp className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p>Geben Sie einen Betrag und Zeitraum ein, um die Inflation zu berechnen</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Inflation Rate Table */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Historische Inflationsraten Deutschland</CardTitle>
              <CardDescription>
                Jährliche Preissteigerungsraten basierend auf dem Verbraucherpreisindex
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm">
                {Object.entries(inflationRates).reverse().map(([year, rate]) => (
                  <div key={year} className="flex justify-between p-2 bg-muted/30 rounded">
                    <span className="font-medium">{year}:</span>
                    <span className={rate > 3 ? "text-red-600 font-semibold" : "text-foreground"}>
                      {rate}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Häufig gestellte Fragen zum Inflationsrechner
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">
                  Wie wird die Inflation berechnet?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Die Berechnung basiert auf dem Verbraucherpreisindex (VPI) des Statistischen Bundesamts. 
                  Jedes Jahr wird der Betrag mit der jeweiligen Inflationsrate multipliziert.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">
                  Warum war die Inflation 2022 so hoch?
                </h4>
                <p className="text-sm text-muted-foreground">
                  2022 erreichte die Inflation 6,9% - hauptsächlich durch Energiepreise, 
                  Lieferkettenprobleme und die Auswirkungen des Ukraine-Kriegs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
