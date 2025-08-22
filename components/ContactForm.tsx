"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage("Nachricht erfolgreich gesendet! Wir melden uns innerhalb von 24 Stunden bei Ihnen.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
        setSubmitMessage(result.error || "Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.subject.trim() && formData.message.trim()

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold">Kontaktieren Sie uns</CardTitle>
        <p className="text-muted-foreground">
          Haben Sie Fragen zu unseren Rechnern oder benötigen Sie Unterstützung? 
          Schreiben Sie uns eine Nachricht!
        </p>
      </CardHeader>

      <CardContent>
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <p className="text-green-800 font-medium">{submitMessage}</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <p className="text-red-800 font-medium">{submitMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ihr vollständiger Name"
                required
                disabled={isSubmitting}
                className="transition-colors focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                E-Mail *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ihre.email@beispiel.de"
                required
                disabled={isSubmitting}
                className="transition-colors focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Betreff *
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Worum geht es?"
              required
              disabled={isSubmitting}
              className="transition-colors focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Nachricht *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Beschreiben Sie Ihr Anliegen..."
              rows={6}
              required
              disabled={isSubmitting}
              className="transition-colors focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Nachricht senden
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">📧 Alternative Kontaktmöglichkeiten:</h4>
          <p className="text-sm text-muted-foreground">
            Sie können uns auch direkt per E-Mail erreichen:{" "}
            <a 
              href="mailto:muk.kt199@gmail.com" 
              className="text-primary hover:underline font-medium"
            >
              muk.kt199@gmail.com
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
