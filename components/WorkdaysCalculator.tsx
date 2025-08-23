"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Info, RotateCcw } from "lucide-react"

// Feiertage Konfiguration
const holidays = {
  DE: {
    name: "Deutschland",
    holidays: [
      { date: "2025-01-01", name: "Neujahr" },
      { date: "2025-04-18", name: "Karfreitag" },
      { date: "2025-04-21", name: "Ostermontag" },
      { date: "2025-05-01", name: "Tag der Arbeit" },
      { date: "2025-05-29", name: "Christi Himmelfahrt" },
      { date: "2025-06-09", name: "Pfingstmontag" },
      { date: "2025-10-03", name: "Tag der Deutschen Einheit" },
      { date: "2025-12-25", name: "1. Weihnachtsfeiertag" },
      { date: "2025-12-26", name: "2. Weihnachtsfeiertag" },
      { date: "2026-01-01", name: "Neujahr" },
      { date: "2026-04-03", name: "Karfreitag" },
      { date: "2026-04-06", name: "Ostermontag" },
      { date: "2026-05-01", name: "Tag der Arbeit" },
      { date: "2026-05-14", name: "Christi Himmelfahrt" },
      { date: "2026-05-25", name: "Pfingstmontag" },
      { date: "2026-10-03", name: "Tag der Deutschen Einheit" },
      { date: "2026-12-25", name: "1. Weihnachtsfeiertag" },
      { date: "2026-12-26", name: "2. Weihnachtsfeiertag" },
    ]
  },
  AT: {
    name: "Österreich",
    holidays: [
      { date: "2025-01-01", name: "Neujahr" },
      { date: "2025-01-06", name: "Heilige Drei Könige" },
      { date: "2025-04-21", name: "Ostermontag" },
      { date: "2025-05-01", name: "Staatsfeiertag" },
      { date: "2025-05-29", name: "Christi Himmelfahrt" },
      { date: "2025-06-09", name: "Pfingstmontag" },
      { date: "2025-06-19", name: "Fronleichnam" },
      { date: "2025-08-15", name: "Mariä Himmelfahrt" },
      { date: "2025-10-26", name: "Nationalfeiertag" },
      { date: "2025-11-01", name: "Allerheiligen" },
      { date: "2025-12-08", name: "Mariä Empfängnis" },
      { date: "2025-12-25", name: "Christtag" },
      { date: "2025-12-26", name: "Stefanitag" },
      { date: "2026-01-01", name: "Neujahr" },
      { date: "2026-01-06", name: "Heilige Drei Könige" },
      { date: "2026-04-06", name: "Ostermontag" },
      { date: "2026-05-01", name: "Staatsfeiertag" },
      { date: "2026-05-14", name: "Christi Himmelfahrt" },
      { date: "2026-05-25", name: "Pfingstmontag" },
      { date: "2026-06-04", name: "Fronleichnam" },
      { date: "2026-08-15", name: "Mariä Himmelfahrt" },
      { date: "2026-10-26", name: "Nationalfeiertag" },
      { date: "2026-11-01", name: "Allerheiligen" },
      { date: "2026-12-08", name: "Mariä Empfängnis" },
      { date: "2026-12-25", name: "Christtag" },
      { date: "2026-12-26", name: "Stefanitag" },
    ]
  },
  CH: {
    name: "Schweiz",
    holidays: [
      { date: "2025-01-01", name: "Neujahr" },
      { date: "2025-01-02", name: "Berchtoldstag" },
      { date: "2025-04-18", name: "Karfreitag" },
      { date: "2025-04-21", name: "Ostermontag" },
      { date: "2025-05-01", name: "Tag der Arbeit" },
      { date: "2025-05-29", name: "Auffahrt" },
      { date: "2025-06-09", name: "Pfingstmontag" },
      { date: "2025-08-01", name: "Bundesfeiertag" },
      { date: "2025-12-25", name: "Weihnachtstag" },
      { date: "2025-12-26", name: "Stephanstag" },
      { date: "2026-01-01", name: "Neujahr" },
      { date: "2026-01-02", name: "Berchtoldstag" },
      { date: "2026-04-03", name: "Karfreitag" },
      { date: "2026-04-06", name: "Ostermontag" },
      { date: "2026-05-01", name: "Tag der Arbeit" },
      { date: "2026-05-14", name: "Auffahrt" },
      { date: "2026-05-25", name: "Pfingstmontag" },
      { date: "2026-08-01", name: "Bundesfeiertag" },
      { date: "2026-12-25", name: "Weihnachtstag" },
      { date: "2026-12-26", name: "Stephanstag" },
    ]
  }
}

export default function WorkdaysCalculator() {
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")
  const [country, setCountry] = useState<string>("DE")
  const [result, setResult] = useState<{
    workdays: number
    weekends: number
    holidays: number
    totalDays: number
    holidayList: { date: string; name: string }[]
  } | null>(null)

  const calculateWorkdays = () => {
    if (!startDate || !endDate) return

    const start = new Date(startDate)
    const end = new Date(endDate)
    
    if (start > end) return

    const countryHolidays = holidays[country as keyof typeof holidays].holidays
    const holidayDates = new Set(countryHolidays.map(h => h.date))
    
    let workdays = 0
    let weekends = 0
    let holidaysCount = 0
    const holidayList: { date: string; name: string }[] = []
    
    const current = new Date(start)
    
    while (current <= end) {
      const dateStr = current.toISOString().split('T')[0]
      const dayOfWeek = current.getDay()
      
      // Check if it's a holiday
      const holiday = countryHolidays.find(h => h.date === dateStr)
      if (holiday) {
        holidaysCount++
        holidayList.push(holiday)
      }
      // Check if it's a weekend (Saturday = 6, Sunday = 0)
      else if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekends++
      }
      // It's a workday
      else {
        workdays++
      }
      
      current.setDate(current.getDate() + 1)
    }
    
    const totalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
    
    setResult({
      workdays,
      weekends,
      holidays: holidaysCount,
      totalDays,
      holidayList
    })
  }

  const resetCalculator = () => {
    setStartDate("")
    setEndDate("")
    setCountry("DE")
    setResult(null)
  }

  useEffect(() => {
    calculateWorkdays()
  }, [startDate, endDate, country])

  // Get current year for default dates
  const currentYear = new Date().getFullYear()
  const nextYear = currentYear + 1

  return (
    <section id="workdays" className="py-12 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
            <Calendar className="h-8 w-8 text-primary" />
            Arbeitstage-Rechner 2025/2026
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berechnen Sie Arbeitstage zwischen zwei Daten unter Berücksichtigung von Wochenenden und Feiertagen 
            für Deutschland, Österreich und die Schweiz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Input */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Zeitraum berechnen
              </CardTitle>
              <CardDescription>
                Wählen Sie Startdatum, Enddatum und Land
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="country" className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Land
                </Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="DE">🇩🇪 Deutschland</SelectItem>
                    <SelectItem value="AT">🇦🇹 Österreich</SelectItem>
                    <SelectItem value="CH">🇨🇭 Schweiz</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="start-date" className="text-sm font-medium">
                    Startdatum
                  </Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="mt-1"
                    min={`${currentYear}-01-01`}
                    max={`${nextYear}-12-31`}
                  />
                </div>

                <div>
                  <Label htmlFor="end-date" className="text-sm font-medium">
                    Enddatum
                  </Label>
                  <Input
                    id="end-date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="mt-1"
                    min={startDate || `${currentYear}-01-01`}
                    max={`${nextYear}-12-31`}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={calculateWorkdays}
                  className="flex-1"
                  disabled={!startDate || !endDate}
                >
                  <Calendar className="h-4 w-4 mr-2" />
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
                      setStartDate(`${currentYear}-01-01`)
                      setEndDate(`${currentYear}-12-31`)
                    }}
                  >
                    Jahr {currentYear}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setStartDate(`${nextYear}-01-01`)
                      setEndDate(`${nextYear}-12-31`)
                    }}
                  >
                    Jahr {nextYear}
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
                Aufschlüsselung der Tage
              </CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Arbeitstage</p>
                      <p className="text-2xl font-bold text-primary">{result.workdays}</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Gesamt</p>
                      <p className="text-2xl font-bold text-foreground">{result.totalDays}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Wochenenden</p>
                      <p className="text-lg font-semibold text-foreground">{result.weekends}</p>
                    </div>
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Feiertage</p>
                      <p className="text-lg font-semibold text-foreground">{result.holidays}</p>
                    </div>
                  </div>

                  {result.holidayList.length > 0 && (
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-2">
                        Feiertage im Zeitraum ({holidays[country as keyof typeof holidays].name}):
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 max-h-32 overflow-y-auto">
                        {result.holidayList.map((holiday, index) => (
                          <li key={index} className="flex justify-between">
                            <span>{holiday.name}</span>
                            <span>{new Date(holiday.date).toLocaleDateString('de-DE')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Zusammenfassung:</h4>
                    <p className="text-sm text-muted-foreground">
                      Von {startDate ? new Date(startDate).toLocaleDateString('de-DE') : ''} bis{' '}
                      {endDate ? new Date(endDate).toLocaleDateString('de-DE') : ''} gibt es{' '}
                      <span className="font-semibold text-primary">{result.workdays} Arbeitstage</span> in{' '}
                      {holidays[country as keyof typeof holidays].name}.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p>Wählen Sie einen Zeitraum, um die Arbeitstage zu berechnen</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Häufig gestellte Fragen zum Arbeitstage-Rechner
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">
                  Wie viele Arbeitstage hat das Jahr 2025?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Das Jahr 2025 hat in Deutschland etwa 251 Arbeitstage, abhängig von den Feiertagen 
                  und ob Heiligabend und Silvester als Arbeitstage gelten.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">
                  Werden regionale Feiertage berücksichtigt?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Der Rechner berücksichtigt bundesweite Feiertage. Regionale Feiertage 
                  (wie Fronleichnam in manchen Bundesländern) müssen separat beachtet werden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
