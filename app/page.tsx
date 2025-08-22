"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Heart, CreditCard, Menu, X, TrendingUp, Shield, Zap, User, Mail, FileText } from "lucide-react"

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

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("vat")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [vatAmount, setVatAmount] = useState<string>("100")
  const [vatRate, setVatRate] = useState<string>(COUNTRIES.DE.rate.toString())
  const [selectedCountry, setSelectedCountry] = useState<string>("DE")
  const [isCustomVat, setIsCustomVat] = useState<boolean>(false)
  const [calculationDirection, setCalculationDirection] = useState<CalculationDirection>(
    CalculationDirection.NET_TO_GROSS,
  )
  const [vatResult, setVatResult] = useState<CalculationResult | null>(null)

  // BMI Calculator State
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [isImperialUnits, setIsImperialUnits] = useState(false)
  const [feet, setFeet] = useState("")
  const [inches, setInches] = useState("")
  const [bmiResult, setBmiResult] = useState<{
    bmi: number
    category: string
    color: string
  } | null>(null)

  // Loan Calculator State
  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [loanType, setLoanType] = useState("personal")
  const [loanResults, setLoanResults] = useState<{
    monthlyPayment: number
    totalPayment: number
    totalInterest: number
  } | null>(null)

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

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["vat", "bmi", "loan"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setSidebarOpen(false)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Rechner Tools",
            description: "Professionelle Online-Rechner für Mehrwertsteuer, BMI und Kredite",
            url: "https://rechner-tools.com",
            logo: "https://rechner-tools.com/logo.png",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
            featureList: [
              "Mehrwertsteuerrechner für Deutschland, Österreich, Schweiz",
              "BMI-Rechner mit metrischen und imperialen Einheiten",
              "Kreditrechner mit Tilgungsplan",
            ],
            author: {
              "@type": "Organization",
              name: "Rechner Tools",
              url: "https://rechner-tools.com"
            },
            publisher: {
              "@type": "Organization",
              name: "Rechner Tools",
              url: "https://rechner-tools.com"
            },
            inLanguage: ["de-DE", "de-AT", "de-CH"],
            audience: {
              "@type": "Audience",
              audienceType: "Business professionals, individuals, entrepreneurs"
            }
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Wie berechne ich die Mehrwertsteuer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Geben Sie den Betrag ein, wählen Sie das Land (Deutschland 19%, Österreich 20%, Schweiz 7.7%) und ob Sie von Netto zu Brutto oder umgekehrt rechnen möchten."
                }
              },
              {
                "@type": "Question",
                name: "Wie berechne ich meinen BMI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Geben Sie Ihr Gewicht in kg und Ihre Größe in cm ein. Der BMI wird automatisch berechnet und kategorisiert."
                }
              },
              {
                "@type": "Question",
                name: "Wie funktioniert der Kreditrechner?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Geben Sie Kreditsumme, Zinssatz und Laufzeit ein. Sie erhalten sofort die monatliche Rate und den Tilgungsplan."
                }
              }
            ]
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Startseite",
                item: "https://rechner-tools.com"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Rechner",
                item: "https://rechner-tools.com#rechner"
              }
            ]
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg sticky top-0 z-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 logo-container">
                <img
                  src="/logo.png"
                  alt="Rechner Tools Logo"
                  className="h-12 w-12 rounded-full shadow-md hover:shadow-lg transition-shadow"
                />
                <div>
                  <h1 className="text-3xl font-black logo-text logo-gradient logo-glow tracking-tight">
                    Rechner Tools
                  </h1>
                  <p className="text-sm logo-subtitle text-blue-100 tracking-wide">
                    Professionelle Online-Rechner
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-primary-foreground hover:bg-primary-foreground/10 transition-all-smooth"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Mobile overlay for sidebar */}
          {sidebarOpen && (
            <div 
              className="fixed top-24 md:top-20 left-0 right-0 bottom-0 bg-black/50 z-30 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          
          <nav
            className={`fixed md:sticky top-24 md:top-20 left-0 h-[calc(100vh-7rem)] md:h-[calc(100vh-5rem)] w-[90vw] md:w-72 bg-sidebar/95 backdrop-blur-sm border-r border-sidebar-border z-40 transform transition-all duration-300 ease-in-out ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            }`}
          >
            <div className="p-4 md:p-6 overflow-y-auto h-full pb-8 pt-10">
              {/* Mobile close button */}
              <div className="flex justify-between items-center mb-4 md:hidden">
                <h2 className="font-bold text-lg font-serif text-sidebar-foreground">Navigation</h2>
              </div>
              
              {/* Desktop title */}
              <h2 className="font-bold text-lg font-serif text-sidebar-foreground mb-4 hidden md:block">Navigation</h2>
              <ul className="space-y-3 mb-8">
                <li>
                  <Link
                    href="/ueber-uns"
                    className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all-smooth hover-lift text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent-foreground"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <User className="h-5 w-5 mr-3" />
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all-smooth hover-lift text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent-foreground"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all-smooth hover-lift text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent-foreground"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <FileText className="h-5 w-5 mr-3" />
                    Blog
                  </Link>
                </li>
              </ul>

              <h2 className="font-bold text-lg font-serif text-sidebar-foreground mb-6">Rechner</h2>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("vat")}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all-smooth hover-lift ${
                      activeSection === "vat"
                        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <Calculator className="inline h-5 w-5 mr-3" />
                    Mehrwertsteuer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("bmi")}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all-smooth hover-lift ${
                      activeSection === "bmi"
                        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <Heart className="inline h-5 w-5 mr-3" />
                    BMI-Rechner
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("loan")}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all-smooth hover-lift ${
                      activeSection === "loan"
                        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <CreditCard className="inline h-5 w-5 mr-3" />
                    Kreditrechner
                  </button>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl border border-secondary/20">
                <h3 className="font-semibold text-sm text-sidebar-foreground mb-3">Warum unsere Rechner?</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Shield className="h-3 w-3 text-secondary" />
                    <span>100% kostenlos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-3 w-3 text-accent" />
                    <span>Sofortige Ergebnisse</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-3 w-3 text-primary" />
                    <span>Aktuelle Steuersätze</span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 md:ml-0">
            <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 leading-tight">
                  Präzise Rechner für Ihre
                  <br />
                  <span className="text-primary">täglichen Bedürfnisse</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                  Nutzen Sie unsere professionellen Online-Rechner für Mehrwertsteuer, BMI und Kredite. Optimiert für
                  Deutschland, Österreich und die Schweiz mit aktuellen Bestimmungen.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-secondary" />
                    <span>Datenschutzkonform</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span>Keine Registrierung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span>Immer aktuell</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Vat Section  */}
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

            {/* BMI SECTION  */}
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

            {/* LOAN SECTION  */}
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

            <footer className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-12 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/logo.png" alt="Rechner Tools Logo" className="h-10 w-10 rounded-full" />
                      <h5 className="text-xl logo-text logo-gradient">
                        Rechner Tools
                      </h5>
                    </div>
                    <p className="text-sm opacity-90 leading-relaxed">
                      Professionelle Online-Rechner für den deutschsprachigen Raum. Kostenlos, sicher und immer aktuell.
                    </p>
                  </div>
                  <div>
                    <h6 className="font-semibold mb-4">Rechner</h6>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <button
                          onClick={() => scrollToSection("vat")}
                          className="opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2"
                        >
                          <Calculator className="h-4 w-4" />
                          Mehrwertsteuerrechner
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("bmi")}
                          className="opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2"
                        >
                          <Heart className="h-4 w-4" />
                          BMI-Rechner
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollToSection("loan")}
                          className="opacity-90 hover:opacity-100 transition-opacity flex items-center gap-2"
                        >
                          <CreditCard className="h-4 w-4" />
                          Kreditrechner
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold mb-4">Länder</h6>
                    <ul className="space-y-3 text-sm opacity-90">
                      <li className="flex items-center gap-2">
                        <span>🇩🇪</span> Deutschland
                      </li>
                      <li className="flex items-center gap-2">
                        <span>🇦🇹</span> Österreich
                      </li>
                      <li className="flex items-center gap-2">
                        <span>🇨🇭</span> Schweiz
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold mb-4">Rechtliches</h6>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link href="/impressum" className="opacity-90 hover:opacity-100 transition-opacity">
                          Impressum
                        </Link>
                      </li>
                      <li>
                        <Link href="/datenschutz" className="opacity-90 hover:opacity-100 transition-opacity">
                          Datenschutz
                        </Link>
                      </li>
                      <li>
                        <Link href="/cookie-richtlinie" className="opacity-90 hover:opacity-100 transition-opacity">
                          Cookie-Richtlinie
                        </Link>
                      </li>
                      <li>
                        <Link href="/nutzungsbedingungen" className="opacity-90 hover:opacity-100 transition-opacity">
                          Nutzungsbedingungen
                        </Link>
                      </li>
                      <li>
                        <Link href="/haftungsausschluss" className="opacity-90 hover:opacity-100 transition-opacity">
                          Haftungsausschluss
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-primary-foreground/20 mt-10 pt-8 text-center text-sm opacity-90">
                  <p>&copy; 2025 Rechner Tools. Alle Rechte vorbehalten.</p>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </>
  )
}
