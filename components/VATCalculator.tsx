"use client"

import React, { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator } from "lucide-react"

enum CalculationDirection {
  NET_TO_GROSS = "netToGross",
  GROSS_TO_NET = "grossToNet",
}

interface Country {
  name: string
  rate: number
}

interface Countries {
  [key: string]: Country
}

interface CalculationResult {
  net: string
  vat: string
  gross: string
}

const COUNTRIES: Countries = {
  DE: { name: "Deutschland", rate: 19 },
  AT: { name: "Österreich", rate: 20 },
  CH: { name: "Schweiz", rate: 8.1 },
}

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

const CustomInput: React.FC<CustomInputProps> = ({ label, id, className, ...props }) => {
  const labelElement = label ? (
    <label htmlFor={id} className="block text-sm font-medium text-foreground mb-2">
      {label}
    </label>
  ) : null

  return (
    <div className={`w-full ${className}`}>
      {labelElement}
      <input
        id={id}
        className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 ease-in-out disabled:bg-muted disabled:cursor-not-allowed text-lg"
        {...props}
      />
    </div>
  )
}

interface CustomSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  id: string
  children: React.ReactNode
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, id, children, ...props }) => {
  const labelElement = label ? (
    <label htmlFor={id} className="block text-sm font-medium text-foreground mb-2">
      {label}
    </label>
  ) : null

  return (
    <div className="w-full">
      {labelElement}
      <div className="relative">
        <select
          id={id}
          className="w-full appearance-none px-4 py-3 bg-background border-2 border-border rounded-xl focus:bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 ease-in-out disabled:bg-muted disabled:cursor-not-allowed text-lg"
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

interface RadioOption {
  value: string
  label: string
}

interface RadioGroupProps {
  legend: string
  name: string
  options: RadioOption[]
  selectedValue: string
  onChange: (value: string) => void
}

const RadioGroup: React.FC<RadioGroupProps> = ({ legend, name, options, selectedValue, onChange }) => {
  return (
    <fieldset>
      <legend className="block text-sm font-medium text-foreground mb-3">{legend}</legend>
      <div className="grid grid-cols-2 gap-2 bg-muted/50 p-1 rounded-xl border border-secondary/20">
        {options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <label
              htmlFor={option.value}
              className={`w-full block text-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm ${
                selectedValue === option.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-background hover:text-foreground"
              }`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}

interface ResultDisplayProps {
  result: CalculationResult | null
  calculationDirection: CalculationDirection
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, calculationDirection }) => {
  if (!result) {
    return (
      <div className="bg-muted/30 p-6 rounded-xl text-center text-muted-foreground">
        Ihre Berechnung wird hier angezeigt.
      </div>
    )
  }

  const isNetToGross = calculationDirection === CalculationDirection.NET_TO_GROSS
  const finalAmountLabel = isNetToGross ? "Bruttobetrag" : "Nettobetrag"
  const finalAmountValue = isNetToGross ? result.gross : result.net

  const subAmountLabel1 = isNetToGross ? "Nettobetrag" : "Bruttobetrag"
  const subAmountValue1 = isNetToGross ? result.net : result.gross

  return (
    <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-6 rounded-xl space-y-4 shadow-lg">
      <div>
        <p className="text-primary-foreground/70 text-sm">{finalAmountLabel}</p>
        <p className="text-4xl font-bold tracking-tight">{finalAmountValue} €</p>
      </div>
      <div className="flex justify-between items-center pt-2 border-t border-primary-foreground/20">
        <div className="text-primary-foreground/70 text-sm">
          <p>{subAmountLabel1}</p>
          <p className="font-semibold text-primary-foreground text-base">{subAmountValue1} €</p>
        </div>
        <div className="text-primary-foreground/70 text-sm text-right">
          <p>MwSt.-Betrag</p>
          <p className="font-semibold text-primary-foreground text-base">{result.vat} €</p>
        </div>
      </div>
    </div>
  )
}

export default function VATCalculator() {
  const [calculationDirection, setCalculationDirection] = useState<CalculationDirection>(CalculationDirection.NET_TO_GROSS)
  const [vatAmount, setVatAmount] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("DE")
  const [isCustomVat, setIsCustomVat] = useState(false)
  const [vatRate, setVatRate] = useState("")
  const [vatResult, setVatResult] = useState<CalculationResult | null>(null)

  // Initialize VAT rate when component mounts
  useEffect(() => {
    if (!isCustomVat) {
      setVatRate(COUNTRIES[selectedCountry].rate.toString())
    }
  }, [selectedCountry, isCustomVat])

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = e.target.value
    setSelectedCountry(countryCode)
    if (!isCustomVat) {
      setVatRate(COUNTRIES[countryCode].rate.toString())
    }
  }

  const toggleCustomVat = () => {
    const newIsCustomVat = !isCustomVat
    setIsCustomVat(newIsCustomVat)
    if (!newIsCustomVat) {
      setVatRate(COUNTRIES[selectedCountry].rate.toString())
    }
  }

  const calculateVat = useCallback(() => {
    const numericAmount = Number.parseFloat(vatAmount)
    const numericVatRate = Number.parseFloat(vatRate)

    if (isNaN(numericAmount) || isNaN(numericVatRate) || numericAmount < 0 || numericVatRate < 0) {
      setVatResult(null)
      return
    }

    let net = 0,
      vat = 0,
      gross = 0

    if (calculationDirection === CalculationDirection.NET_TO_GROSS) {
      net = numericAmount
      vat = net * (numericVatRate / 100)
      gross = net + vat
    } else {
      gross = numericAmount
      net = gross / (1 + numericVatRate / 100)
      vat = gross - net
    }

    setVatResult({
      net: net.toFixed(2),
      vat: vat.toFixed(2),
      gross: gross.toFixed(2),
    })
  }, [vatAmount, vatRate, calculationDirection])

  useEffect(() => {
    calculateVat()
  }, [calculateVat])

  return (
    <section id="vat" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Calculator className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-3xl font-bold font-serif text-foreground mb-4">Mehrwertsteuerrechner</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berechnen Sie Brutto- und Nettopreise mit den aktuellen MwSt-Sätzen für Deutschland, Österreich und
            die Schweiz
          </p>
        </div>

        <Card className="max-w-2xl mx-auto card-shadow hover:card-shadow-hover transition-all-smooth hover-lift">
          <CardContent className="space-y-6">
            <RadioGroup
              legend="Berechnungsart"
              name="calculationDirection"
              options={[
                { value: CalculationDirection.NET_TO_GROSS, label: "Netto zu Brutto" },
                { value: CalculationDirection.GROSS_TO_NET, label: "Brutto zu Netto" },
              ]}
              selectedValue={calculationDirection}
              onChange={(value) => setCalculationDirection(value as CalculationDirection)}
            />

            <CustomInput
              id="amount"
              label={
                calculationDirection === CalculationDirection.NET_TO_GROSS
                  ? "Nettobetrag (€)"
                  : "Bruttobetrag (€)"
              }
              type="number"
              value={vatAmount}
              onChange={(e) => setVatAmount(e.target.value)}
              placeholder="z.B. 100"
            />

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-700">Land & MwSt.-Satz</label>
                <div className="flex items-center">
                  <label
                    htmlFor="customVatToggle"
                    className="text-sm font-medium text-slate-600 mr-2 cursor-pointer"
                  >
                    Manuell
                  </label>
                  <label htmlFor="customVatToggle" className="relative cursor-pointer">
                    <input
                      id="customVatToggle"
                      type="checkbox"
                      className="sr-only peer"
                      checked={isCustomVat}
                      onChange={toggleCustomVat}
                    />
                    <div className="w-10 h-6 bg-slate-200 rounded-full peer peer-checked:bg-indigo-500 transition-colors"></div>
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></div>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <CustomSelect
                  id="country"
                  label=""
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  disabled={isCustomVat}
                >
                  {Object.entries(COUNTRIES).map(([code, { name, rate }]) => (
                    <option key={code} value={code}>
                      {name} ({rate}%)
                    </option>
                  ))}
                </CustomSelect>

                {isCustomVat && (
                  <CustomInput
                    id="vatRate"
                    label="MwSt.-Satz (%)"
                    type="number"
                    value={vatRate}
                    onChange={(e) => setVatRate(e.target.value)}
                    placeholder="z.B. 19"
                  />
                )}
              </div>
            </div>

            <ResultDisplay result={vatResult} calculationDirection={calculationDirection} />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
