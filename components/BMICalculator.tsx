"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart } from "lucide-react"

const getBMICategory = (bmi: number): string => {
  if (bmi < 18.5) {
    return "Untergewicht"
  } else if (bmi < 25) {
    return "Normalgewicht"
  } else if (bmi < 30) {
    return "Übergewicht"
  } else {
    return "Adipositas"
  }
}

const getBMIColor = (bmi: number): string => {
  if (bmi < 18.5) {
    return "text-blue-600"
  } else if (bmi < 25) {
    return "text-secondary"
  } else if (bmi < 30) {
    return "text-accent"
  } else {
    return "text-destructive"
  }
}

export default function BMICalculator() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [feet, setFeet] = useState("")
  const [inches, setInches] = useState("")
  const [isImperialUnits, setIsImperialUnits] = useState(false)
  const [bmiResult, setBmiResult] = useState<any>(null)

  // Calculate BMI
  const calculateBMI = () => {
    if (isImperialUnits) {
      const weightNum = Number.parseFloat(weight)
      const feetNum = Number.parseInt(feet) || 0
      const inchesNum = Number.parseFloat(inches) || 0
      const totalInches = feetNum * 12 + inchesNum

      if (weightNum > 0 && totalInches > 0) {
        const bmi = (weightNum / (totalInches * totalInches)) * 703
        const result = {
          bmi: Math.round(bmi * 10) / 10,
          category: getBMICategory(bmi),
          color: getBMIColor(bmi),
        }
        setBmiResult(result)
      }
    } else {
      const weightNum = Number.parseFloat(weight)
      const heightNum = Number.parseFloat(height)

      if (weightNum > 0 && heightNum > 0) {
        const heightInMeters = heightNum / 100
        const bmi = weightNum / (heightInMeters * heightInMeters)
        const result = {
          bmi: Math.round(bmi * 10) / 10,
          category: getBMICategory(bmi),
          color: getBMIColor(bmi),
        }
        setBmiResult(result)
      }
    }
  }

  return (
    <section id="bmi" className="py-16 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6">
            <Heart className="h-8 w-8 text-secondary" />
          </div>
          <h3 className="text-3xl font-bold font-serif text-foreground mb-4">BMI-Rechner</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ermitteln Sie Ihren Body-Mass-Index und erhalten Sie eine professionelle Einschätzung nach
            WHO-Standards
          </p>
        </div>

        <Card className="max-w-3xl mx-auto card-shadow hover:card-shadow-hover transition-all-smooth hover-lift">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl font-serif">BMI-Berechnung</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <label className="block text-sm font-medium text-foreground">Einheiten</label>
              <div className="flex items-center gap-3">
                <span
                  className={`text-sm font-medium ${!isImperialUnits ? "text-secondary" : "text-muted-foreground"}`}
                >
                  Metrisch
                </span>
                <label htmlFor="unitToggle" className="relative cursor-pointer">
                  <input
                    id="unitToggle"
                    type="checkbox"
                    className="sr-only peer"
                    checked={isImperialUnits}
                    onChange={(e) => {
                      setIsImperialUnits(e.target.checked)
                      // Clear inputs when switching units
                      setWeight("")
                      setHeight("")
                      setFeet("")
                      setInches("")
                      setBmiResult(null)
                    }}
                  />
                  <div className="w-12 h-6 bg-muted rounded-full peer peer-checked:bg-secondary transition-colors"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"></div>
                </label>
                <span
                  className={`text-sm font-medium ${isImperialUnits ? "text-secondary" : "text-muted-foreground"}`}
                >
                  Imperial
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="weight" className="text-sm font-medium">
                  Gewicht ({isImperialUnits ? "lbs" : "kg"})
                </Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={isImperialUnits ? "154" : "70"}
                  className="mt-2 h-12 text-lg border-2 border-border transition-all-smooth hover:border-secondary/50 focus:border-secondary"
                />
              </div>

              {isImperialUnits ? (
                <div className="space-y-4">
                  <Label className="text-sm font-medium">Größe</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="feet" className="text-xs text-muted-foreground">
                        Fuß
                      </Label>
                      <Input
                        id="feet"
                        type="number"
                        value={feet}
                        onChange={(e) => setFeet(e.target.value)}
                        placeholder="5"
                        className="mt-1 h-12 text-lg border-2 border-border transition-all-smooth hover:border-secondary/50 focus:border-secondary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inches" className="text-xs text-muted-foreground">
                        Zoll
                      </Label>
                      <Input
                        id="inches"
                        type="number"
                        value={inches}
                        onChange={(e) => setInches(e.target.value)}
                        placeholder="9"
                        className="mt-1 h-12 text-lg border-2 border-border transition-all-smooth hover:border-secondary/50 focus:border-secondary"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <Label htmlFor="height" className="text-sm font-medium">
                    Größe (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="175"
                    className="mt-2 h-12 text-lg border-2 border-border transition-all-smooth hover:border-secondary/50 focus:border-secondary"
                  />
                </div>
              )}
            </div>
            <Button
              onClick={calculateBMI}
              className="w-full h-12 text-base font-medium bg-secondary hover:bg-secondary/90 transition-all-smooth hover-lift"
            >
              <Heart className="mr-2 h-5 w-5" />
              BMI berechnen
            </Button>

            {bmiResult && (
              <div className="mt-8 p-6 result-highlight rounded-xl transition-all-smooth">
                <h4 className="font-bold text-lg text-foreground mb-6 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-secondary" />
                  Ihr BMI-Ergebnis
                </h4>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold mb-3 text-foreground">{bmiResult.bmi}</div>
                  <div
                    className={`text-xl font-bold px-4 py-2 rounded-lg inline-block ${bmiResult.color} bg-current/10`}
                  >
                    {bmiResult.category}
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium text-blue-700">Untergewicht</div>
                    <div className="text-blue-600">&lt; 18.5</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-700">Normal</div>
                    <div className="text-green-600">18.5 - 24.9</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="font-medium text-orange-700">Übergewicht</div>
                    <div className="text-orange-600">25 - 29.9</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="font-medium text-red-700">Adipositas</div>
                    <div className="text-red-600">≥ 30</div>
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
