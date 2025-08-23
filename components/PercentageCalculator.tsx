"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Percent, Info, RotateCcw } from "lucide-react"

export default function PercentageCalculator() {
  const [baseValue, setBaseValue] = useState<string>("")
  const [percentage, setPercentage] = useState<string>("")
  const [calculationType, setCalculationType] = useState<string>("percentage-of")
  const [result, setResult] = useState<number | null>(null)
  const [calculation, setCalculation] = useState<string>("")
  const [discountAmount, setDiscountAmount] = useState<number | null>(null)

  const calculateResult = () => {
    const base = parseFloat(baseValue)
    const percent = parseFloat(percentage)
    
    if (isNaN(base) || isNaN(percent)) {
      setResult(null)
      setCalculation("")
      setDiscountAmount(null)
      return
    }

    let calculatedResult: number
    let calculationText: string
    let discountAmt: number | null = null

    switch (calculationType) {
      case "percentage-of":
        // Prozent von einem Wert
        calculatedResult = (base * percent) / 100
        calculationText = `${percent}% von ${base} € = ${calculatedResult.toFixed(2)} €`
        break
      case "discount":
        // Rabatt berechnen
        calculatedResult = base - (base * percent) / 100
        discountAmt = (base * percent) / 100
        calculationText = `${base} € - ${percent}% (${discountAmt.toFixed(2)} €) = ${calculatedResult.toFixed(2)} €`
        break
      case "increase":
        // Aufschlag berechnen
        calculatedResult = base + (base * percent) / 100
        const increaseAmt = (base * percent) / 100
        calculationText = `${base} € + ${percent}% (${increaseAmt.toFixed(2)} €) = ${calculatedResult.toFixed(2)} €`
        break
      case "percentage-change":
        // Prozentuale Änderung
        calculatedResult = ((percent - base) / base) * 100
        calculationText = `Änderung von ${base} € auf ${percent} € = ${calculatedResult.toFixed(2)}%`
        break
      default:
        calculatedResult = 0
        calculationText = ""
    }

    setResult(calculatedResult)
    setCalculation(calculationText)
    setDiscountAmount(discountAmt)
  }

  const resetCalculator = () => {
    setBaseValue("")
    setPercentage("")
    setCalculationType("percentage-of")
    setResult(null)
    setCalculation("")
    setDiscountAmount(null)
  }

  useEffect(() => {
    calculateResult()
  }, [baseValue, percentage, calculationType])

  const getInputLabels = () => {
    switch (calculationType) {
      case "percentage-of":
        return { first: "Grundwert (€)", second: "Prozentsatz (%)" }
      case "discount":
        return { first: "Ursprungspreis (€)", second: "Rabatt (%)" }
      case "increase":
        return { first: "Grundpreis (€)", second: "Aufschlag (%)" }
      case "percentage-change":
        return { first: "Alter Wert (€)", second: "Neuer Wert (€)" }
      default:
        return { first: "Wert 1", second: "Wert 2" }
    }
  }

  const labels = getInputLabels()

  return (
    <section id="percentage" className="py-12 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
            <Percent className="h-8 w-8 text-primary" />
            Prozentrechner & Rabattrechner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berechnen Sie Prozente, Rabatte, Aufschläge und prozentuale Änderungen schnell und einfach.
            Ideal für Shopping, Steuern, Trinkgeld und Geschäftsberechnungen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Input */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Prozent berechnen
              </CardTitle>
              <CardDescription>
                Wählen Sie die Art der Berechnung und geben Sie Ihre Werte ein
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="calculation-type" className="text-sm font-medium">
                  Art der Berechnung
                </Label>
                <Select value={calculationType} onValueChange={setCalculationType}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage-of">Prozent von einem Wert</SelectItem>
                    <SelectItem value="discount">Rabatt berechnen</SelectItem>
                    <SelectItem value="increase">Aufschlag berechnen</SelectItem>
                    <SelectItem value="percentage-change">Prozentuale Änderung</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="base-value" className="text-sm font-medium">
                    {labels.first}
                  </Label>
                  <Input
                    id="base-value"
                    type="number"
                    value={baseValue}
                    onChange={(e) => setBaseValue(e.target.value)}
                    placeholder="0"
                    className="mt-1"
                    step="0.01"
                  />
                </div>

                <div>
                  <Label htmlFor="percentage" className="text-sm font-medium">
                    {labels.second}
                  </Label>
                  <Input
                    id="percentage"
                    type="number"
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                    placeholder="0"
                    className="mt-1"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={calculateResult}
                  className="flex-1"
                  disabled={!baseValue || !percentage}
                >
                  <Calculator className="h-4 w-4 mr-2" />
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
                Schritt-für-Schritt Berechnung
              </CardDescription>
            </CardHeader>
            <CardContent>
              {result !== null ? (
                <div className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Berechnung:</p>
                    <p className="text-lg font-semibold text-foreground">{calculation}</p>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">
                      {calculationType === "percentage-change" ? "Prozentuale Änderung:" : "Endergebnis:"}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {calculationType === "percentage-change" 
                        ? `${result.toFixed(2)}%` 
                        : `${result.toFixed(2)} €`
                      }
                    </p>
                    {discountAmount && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Ersparnis: {discountAmount.toFixed(2)} €
                      </p>
                    )}
                  </div>

                  {/* Examples based on calculation type */}
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Praktische Beispiele:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {calculationType === "discount" && (
                        <>
                          <li>• 20% Rabatt auf 50 € = 40 € (10 € gespart)</li>
                          <li>• 15% Rabatt auf 120 € = 102 € (18 € gespart)</li>
                        </>
                      )}
                      {calculationType === "percentage-of" && (
                        <>
                          <li>• 19% von 100 € = 19 € (Mehrwertsteuer)</li>
                          <li>• 15% von 80 € = 12 € (Trinkgeld)</li>
                        </>
                      )}
                      {calculationType === "increase" && (
                        <>
                          <li>• 10% Aufschlag auf 50 € = 55 €</li>
                          <li>• 5% Preiserhöhung auf 200 € = 210 €</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Calculator className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p>Geben Sie Werte ein, um die Berechnung zu starten</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Häufig gestellte Fragen zum Prozentrechner
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">
                  Wie berechne ich 20% Rabatt?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Wählen Sie "Rabatt berechnen", geben Sie den Ursprungspreis ein und 20 als Rabattbestand. 
                  Der Rechner zeigt Ihnen sowohl den Endpreis als auch die Ersparnis an.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">
                  Was ist der Unterschied zwischen Rabatt und prozentualer Änderung?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Rabatt berechnet den neuen Preis nach Abzug. Prozentuale Änderung zeigt, 
                  um wie viel Prozent sich ein Wert geändert hat (kann positiv oder negativ sein).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
