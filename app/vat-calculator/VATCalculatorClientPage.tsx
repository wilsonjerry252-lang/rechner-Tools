"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calculator, Info } from "lucide-react"

const VAT_RATES = {
  germany: { rate: 19, country: "Deutschland", reduced: 7 },
  austria: { rate: 20, country: "Österreich", reduced: 10 },
  switzerland: { rate: 7.7, country: "Schweiz", reduced: 2.5 },
}

export default function VATCalculatorClientPage() {
  const [selectedCountry, setSelectedCountry] = useState<keyof typeof VAT_RATES>("germany")
  const [vatType, setVatType] = useState<"standard" | "reduced">("standard")
  const [netAmount, setNetAmount] = useState("")
  const [grossAmount, setGrossAmount] = useState("")
  const [results, setResults] = useState({
    net: 0,
    vat: 0,
    gross: 0,
    vatRate: 0,
  })

  const getCurrentVatRate = () => {
    const countryData = VAT_RATES[selectedCountry]
    return vatType === "standard" ? countryData.rate : countryData.reduced
  }

  const calculateFromNet = (net: number) => {
    const vatRate = getCurrentVatRate()
    const vatAmount = (net * vatRate) / 100
    const gross = net + vatAmount
    return { net, vat: vatAmount, gross, vatRate }
  }

  const calculateFromGross = (gross: number) => {
    const vatRate = getCurrentVatRate()
    const net = gross / (1 + vatRate / 100)
    const vatAmount = gross - net
    return { net, vat: vatAmount, gross, vatRate }
  }

  useEffect(() => {
    if (netAmount && !grossAmount) {
      const net = Number.parseFloat(netAmount) || 0
      setResults(calculateFromNet(net))
    } else if (grossAmount && !netAmount) {
      const gross = Number.parseFloat(grossAmount) || 0
      setResults(calculateFromGross(gross))
    } else if (!netAmount && !grossAmount) {
      setResults({ net: 0, vat: 0, gross: 0, vatRate: getCurrentVatRate() })
    }
  }, [netAmount, grossAmount, selectedCountry, vatType])

  const handleNetChange = (value: string) => {
    setNetAmount(value)
    setGrossAmount("")
  }

  const handleGrossChange = (value: string) => {
    setGrossAmount(value)
    setNetAmount("")
  }

  const clearAll = () => {
    setNetAmount("")
    setGrossAmount("")
    setResults({ net: 0, vat: 0, gross: 0, vatRate: getCurrentVatRate() })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: selectedCountry === "switzerland" ? "CHF" : "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-serif font-bold">Mehrwertsteuerrechner</h1>
              <p className="text-sm opacity-90">Brutto- und Nettopreise berechnen</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Country and VAT Type Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Einstellungen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="country">Land auswählen</Label>
                <Select
                  value={selectedCountry}
                  onValueChange={(value: keyof typeof VAT_RATES) => setSelectedCountry(value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="germany">Deutschland ({VAT_RATES.germany.rate}%)</SelectItem>
                    <SelectItem value="austria">Österreich ({VAT_RATES.austria.rate}%)</SelectItem>
                    <SelectItem value="switzerland">Schweiz ({VAT_RATES.switzerland.rate}%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="vatType">Mehrwertsteuersatz</Label>
                <Select value={vatType} onValueChange={(value: "standard" | "reduced") => setVatType(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Normalsatz ({getCurrentVatRate()}%)</SelectItem>
                    <SelectItem value="reduced">
                      Ermäßigter Satz (
                      {vatType === "reduced" ? getCurrentVatRate() : VAT_RATES[selectedCountry].reduced}%)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Calculator Input */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Berechnung</CardTitle>
              <CardDescription>Geben Sie entweder den Netto- oder Bruttobetrag ein</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="net-to-gross" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="net-to-gross">Netto → Brutto</TabsTrigger>
                  <TabsTrigger value="gross-to-net">Brutto → Netto</TabsTrigger>
                </TabsList>

                <TabsContent value="net-to-gross" className="space-y-4">
                  <div>
                    <Label htmlFor="net-input">Nettobetrag (ohne MwSt.)</Label>
                    <Input
                      id="net-input"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={netAmount}
                      onChange={(e) => handleNetChange(e.target.value)}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="gross-to-net" className="space-y-4">
                  <div>
                    <Label htmlFor="gross-input">Bruttobetrag (mit MwSt.)</Label>
                    <Input
                      id="gross-input"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={grossAmount}
                      onChange={(e) => handleGrossChange(e.target.value)}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <Button onClick={clearAll} variant="outline" className="w-full bg-transparent">
                Eingaben löschen
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Ergebnis</CardTitle>
              <CardDescription>
                {VAT_RATES[selectedCountry].country} - {getCurrentVatRate()}% MwSt.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="font-medium">Nettobetrag:</span>
                  <span className="font-mono text-lg">{formatCurrency(results.net)}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
                  <span className="font-medium">Mehrwertsteuer ({results.vatRate}%):</span>
                  <span className="font-mono text-lg text-secondary">{formatCurrency(results.vat)}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                  <span className="font-medium">Bruttobetrag:</span>
                  <span className="font-mono text-xl font-bold text-primary">{formatCurrency(results.gross)}</span>
                </div>
              </div>

              {/* Quick calculation examples */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Schnellbeispiele
                </h4>
                <div className="text-sm space-y-1 text-muted-foreground">
                  <div>100 € netto = {formatCurrency(100 * (1 + getCurrentVatRate() / 100))} brutto</div>
                  <div>119 € brutto = {formatCurrency(119 / (1 + getCurrentVatRate() / 100))} netto</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Information Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-serif">Informationen zur Mehrwertsteuer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Deutschland</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Normalsatz: 19%</li>
                  <li>Ermäßigter Satz: 7%</li>
                  <li>Gültig seit: 01.01.2007</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Österreich</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Normalsatz: 20%</li>
                  <li>Ermäßigter Satz: 10%</li>
                  <li>Gültig seit: 01.01.1984</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Schweiz</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Normalsatz: 7,7%</li>
                  <li>Ermäßigter Satz: 2,5%</li>
                  <li>Gültig seit: 01.01.2018</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
