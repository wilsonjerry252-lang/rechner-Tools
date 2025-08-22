"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie, Settings, X, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: {
      (command: string, action: string, params?: Record<string, unknown>): void
      (command: string, action: string, params?: Record<string, unknown>, callback?: () => void): void
      q?: unknown[]
    }
  }
}

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
  })

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return
    
    // Check if user has already made a choice
    let consent = null
    try {
      consent = localStorage.getItem("cookie-consent")
    } catch (error) {
      // If localStorage fails, show banner
      setShowBanner(true)
      return
    }
    
    if (!consent) {
      setShowBanner(true)
      // Set default consent to denied for analytics
      if (window.gtag) {
        window.gtag('consent', 'default', {
          'analytics_storage': 'denied'
        })
      }
    } else {
      try {
        const savedPreferences = JSON.parse(consent)
        setPreferences(savedPreferences)
        
        // Apply saved preferences
        if (savedPreferences.analytics) {
          enableGoogleAnalytics()
        } else {
          disableGoogleAnalytics()
        }
        
        // Hide banner if user has already made a choice
        setShowBanner(false)
      } catch (error) {
        // If parsing fails, show banner
        setShowBanner(true)
      }
    }
  }, [])

  const enableGoogleAnalytics = () => {
    // Enable Google Analytics when user consents
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
      // Send a pageview event to track the current page
      window.gtag('event', 'page_view')
    }
  }

  const disableGoogleAnalytics = () => {
    // Disable Google Analytics when user withdraws consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      })
    }
  }

  const acceptAll = () => {
    const newPreferences = { necessary: true, analytics: true }
    setPreferences(newPreferences)
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences))
    setShowBanner(false)
    enableGoogleAnalytics()
  }

  const acceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
    
    if (preferences.analytics) {
      enableGoogleAnalytics()
    } else {
      disableGoogleAnalytics()
    }
  }

  const rejectAll = () => {
    const newPreferences = { necessary: true, analytics: false }
    setPreferences(newPreferences)
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences))
    setShowBanner(false)
    disableGoogleAnalytics()
  }

  const updatePreference = (type: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({ ...prev, [type]: value }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Gray overlay covering the entire page */}
      <div className="fixed inset-0 bg-black/50 z-30" />
      
      {/* Cookie consent banner - full width bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {!showSettings ? (
            // Main banner
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <Cookie className="h-8 w-8 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Cookie-Einstellungen</h3>
                  <p className="text-sm text-muted-foreground">
                    Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
                    Einige Cookies sind technisch notwendig, andere helfen uns dabei, die Website 
                    zu optimieren. Sie können Ihre Einstellungen jederzeit anpassen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 ml-6">
                <Button 
                  variant="outline" 
                  onClick={() => setShowSettings(true)} 
                  size="lg"
                  className="px-6"
                >
                  <Settings className="h-5 w-5 mr-2" />
                  Einstellungen
                </Button>
                <Button 
                  onClick={acceptAll} 
                  size="lg"
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white"
                >
                  Alle akzeptieren
                </Button>
                <Button
                  variant="ghost"
                  onClick={rejectAll}
                  size="lg"
                  className="px-6"
                >
                  Alle ablehnen
                </Button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Cookie-Einstellungen anpassen</h3>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => setShowSettings(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="font-medium">Notwendige Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Technisch erforderlich für die Grundfunktionen der Website
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Immer aktiv</span>
                    <div className="w-12 h-7 bg-green-600 rounded-full flex items-center justify-end px-1">
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                    <div>
                      <h4 className="font-medium">Analytics Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Google Analytics für Website-Optimierung
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => updatePreference("analytics", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t">
                <Button 
                  onClick={acceptSelected} 
                  size="lg"
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white"
                >
                  Auswahl speichern
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(false)}
                  size="lg"
                  className="px-6"
                >
                  Zurück
                </Button>
              </div>

              <div className="text-xs text-muted-foreground pt-2 border-t">
                <p>
                  Detaillierte Informationen finden Sie in unserer{" "}
                  <Link href="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </Link>{" "}
                  und{" "}
                  <Link href="/cookie-richtlinie" className="text-primary hover:underline">
                    Cookie-Richtlinie
                  </Link>
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
