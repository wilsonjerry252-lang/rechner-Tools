"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Heart, Info, Scale } from "lucide-react"

const BMI_CATEGORIES = [
  {
    min: 0,
    max: 18.5,
    label: "Untergewicht",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Zu niedriges Körpergewicht",
  },
  {
    min: 18.5,
    max: 25,
    label: "Normalgewicht",
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Gesundes Körpergewicht",
  },
  {
    min: 25,
    max: 30,
    label: "Übergewicht",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    description: "Leichtes Übergewicht",
  },
  {
    min: 30,
    max: 35,
    label: "Adipositas Grad I",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    description: "Mäßige Fettleibigkeit",
  },
  {
    min: 35,
    max: 40,
    label: "Adipositas Grad II",
    color: "text-red-600",
    bgColor: "bg-red-50",
    description: "Schwere Fettleibigkeit",
  },
  {
    min: 40,
    max: 100,
    label: "Adipositas Grad III",
    color: "text-red-800",
    bgColor: "bg-red-100",
    description: "Extreme Fettleibigkeit",
  },
]

export default function BMICalculatorClient() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState<(typeof BMI_CATEGORIES)[0] | null>(null)

  const calculateBMI = () => {
    const weightNum = Number.parseFloat(weight)
    const heightNum = Number.parseFloat(height)

    if (weightNum > 0 && heightNum > 0) {
      const heightInMeters = heightNum / 100
      const calculatedBMI = weightNum / (heightInMeters * heightInMeters)
      setBmi(calculatedBMI)

      const bmiCategory = BMI_CATEGORIES.find((cat) => calculatedBMI >= cat.min && calculatedBMI < cat.max)
      setCategory(bmiCategory || null)
    } else {
      setBmi(null)
      setCategory(null)
    }
  }

  useEffect(() => {
    calculateBMI()
  }, [weight, height])

  const clearInputs = () => {
    setWeight("")
    setHeight("")
    setBmi(null)
    setCategory(null)
  }

  const getHealthRecommendations = () => {
    if (!category) return []

    switch (category.label) {
      case "Untergewicht":
        return [
          "Konsultieren Sie einen Arzt oder Ernährungsberater",
          "Erhöhen Sie die Kalorienzufuhr mit gesunden Lebensmitteln",
          "Krafttraining kann beim Muskelaufbau helfen",
          "Regelmäßige Gesundheitschecks sind empfehlenswert",
        ]
      case "Normalgewicht":
        return [
          "Herzlichen Glückwunsch! Ihr Gewicht liegt im gesunden Bereich",
          "Halten Sie eine ausgewogene Ernährung bei",
          "Regelmäßige körperliche Aktivität ist wichtig",
          "Führen Sie einen gesunden Lebensstil fort",
        ]
      case "Übergewicht":
        return [
          "Eine moderate Gewichtsreduktion wäre vorteilhaft",
          "Erhöhen Sie körperliche Aktivität (150 Min/Woche)",
          "Reduzieren Sie Kalorien durch gesunde Ernährung",
          "Konsultieren Sie bei Bedarf einen Ernährungsberater",
        ]
      default:
        return [
          "Konsultieren Sie unbedingt einen Arzt",
          "Professionelle Unterstützung bei der Gewichtsreduktion",
          "Strukturiertes Abnehmprogramm empfehlenswert",
          "Regelmäßige medizinische Überwachung wichtig",
        ]
    }
  }

  const getBMIProgress = () => {
    if (!bmi) return 0
    // Map BMI to progress bar (0-100)
    if (bmi < 18.5) return (bmi / 18.5) * 20
    if (bmi < 25) return 20 + ((bmi - 18.5) / 6.5) * 30
    if (bmi < 30) return 50 + ((bmi - 25) / 5) * 25
    if (bmi < 35) return 75 + ((bmi - 30) / 5) * 15
    if (bmi < 40) return 90 + ((bmi - 35) / 5) * 8
    return 98
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary text-secondary-foreground shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-serif font-bold">BMI-Rechner</h1>
              <p className="text-sm opacity-90">Body-Mass-Index berechnen</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Calculator Input */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <Scale className="h-5 w-5" />
                BMI berechnen
              </CardTitle>
              <CardDescription>Geben Sie Ihr Gewicht und Ihre Größe ein</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="weight">Gewicht (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  placeholder="z.B. 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="height">Größe (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  step="0.1"
                  placeholder="z.B. 175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>

              <Button onClick={clearInputs} variant="outline" className="w-full bg-transparent">
                Eingaben löschen
              </Button>

              {/* BMI Scale Visualization */}
              {bmi && (
                <div className="mt-6">
                  <Label className="text-sm font-medium">BMI-Skala</Label>
                  <div className="mt-2">
                    <Progress value={getBMIProgress()} className="h-3" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>15</span>
                      <span>20</span>
                      <span>25</span>
                      <span>30</span>
                      <span>35</span>
                      <span>40+</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Ihr Ergebnis
              </CardTitle>
            </CardHeader>
            <CardContent>
              {bmi && category ? (
                <div className="space-y-4">
                  {/* BMI Value */}
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <div className="text-3xl font-bold font-mono">{bmi.toFixed(1)}</div>
                    <div className="text-sm text-muted-foreground">Ihr BMI-Wert</div>
                  </div>

                  {/* Category */}
                  <div className={`p-4 rounded-lg ${category.bgColor}`}>
                    <div className={`font-semibold ${category.color}`}>{category.label}</div>
                    <div className="text-sm text-muted-foreground mt-1">{category.description}</div>
                  </div>

                  {/* Health Recommendations */}
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      Empfehlungen
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {getHealthRecommendations().map((recommendation, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>{recommendation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Scale className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Geben Sie Ihr Gewicht und Ihre Größe ein, um Ihren BMI zu berechnen.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* BMI Categories Reference */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-serif">BMI-Kategorien (WHO-Standard)</CardTitle>
            <CardDescription>Klassifikation des Body-Mass-Index nach der Weltgesundheitsorganisation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {BMI_CATEGORIES.map((cat, index) => (
                <div key={index} className={`p-4 rounded-lg border ${cat.bgColor}`}>
                  <div className={`font-semibold ${cat.color}`}>{cat.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {cat.min === 0 ? `< ${cat.max}` : cat.max === 100 ? `≥ ${cat.min}` : `${cat.min} - ${cat.max}`}
                  </div>
                  <div className="text-xs mt-1">{cat.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Information Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-serif">Wichtige Hinweise zum BMI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Was ist der BMI?</h4>
                <p className="text-sm text-muted-foreground">
                  Der Body-Mass-Index (BMI) ist eine Maßzahl zur Bewertung des Körpergewichts in Relation zur
                  Körpergröße. Er wird berechnet durch: Gewicht (kg) ÷ Größe² (m²)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Grenzen des BMI</h4>
                <p className="text-sm text-muted-foreground">
                  Der BMI berücksichtigt nicht die Körperzusammensetzung (Muskel- vs. Fettmasse), das Alter oder das
                  Geschlecht. Sportler können trotz hohem BMI gesund sein.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Medizinischer Hinweis</h4>
                <p className="text-sm text-muted-foreground">
                  Dieser Rechner dient nur zur Orientierung und ersetzt keine medizinische Beratung. Konsultieren Sie
                  bei Fragen zu Ihrem Gewicht einen Arzt.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Gesunder Lebensstil</h4>
                <p className="text-sm text-muted-foreground">
                  Unabhängig vom BMI sind eine ausgewogene Ernährung und regelmäßige körperliche Aktivität die
                  Grundlagen für ein gesundes Leben.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
