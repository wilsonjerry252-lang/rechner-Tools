"use client"

import type React from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare, Send, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("") // <-- added state
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

       if (!res.ok) {
        setErrorMessage("E-Mail konnte nicht gesendet werden")
      } else {
        setSuccessMessage("Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      }
    } catch (error) {
      alert("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Rechner Tools Logo" className="h-12 w-12 rounded-full shadow-md" />
              <div>
                <h1 className="text-2xl font-bold font-serif">Rechner Tools</h1>
                <p className="text-sm opacity-90 font-medium">Professionelle Online-Rechner</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-foreground mb-4">Kontakt</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen, Anregungen oder Feedback? Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold font-serif text-foreground">Nachricht senden</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr vollständiger Name"
                    className="border-2 border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-Mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ihre.email@beispiel.de"
                    className="border-2 border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Betreff *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Worum geht es in Ihrer Nachricht?"
                  className="border-2 border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Nachricht *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Teilen Sie uns Ihre Fragen, Anregungen oder Ihr Feedback mit..."
                  rows={6}
                  className="border-2 border-border resize-none"
                />
              </div>
               {successMessage && (
                <div className="p-4 text-green-800 bg-green-100 rounded-lg text-center">
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div className="p-4 text-red-800 bg-red-100 rounded-lg text-center">
                  {errorMessage}
                </div>
              )}


              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={loading}
              >
                {loading ? "Wird gesendet..." : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Nachricht senden
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold font-serif text-foreground">Kontaktinformationen</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                    <p className="text-muted-foreground">kontakt@rechner-tools.de</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Wir antworten in der Regel innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Antwortzeiten</h3>
                    <p className="text-muted-foreground">Montag - Freitag: 9:00 - 18:00 Uhr</p>
                    <p className="text-sm text-muted-foreground mt-1">Wochenende: Verlängerte Antwortzeiten möglich</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Service-Bereich</h3>
                    <p className="text-muted-foreground">Deutschland, Österreich, Schweiz</p>
                    <p className="text-sm text-muted-foreground mt-1">Optimiert für den deutschsprachigen Raum</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Häufige Anfragen</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Fragen zu Berechnungen und Formeln</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Vorschläge für neue Rechner</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Technische Probleme oder Bugs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Partnerschaften und Kooperationen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
