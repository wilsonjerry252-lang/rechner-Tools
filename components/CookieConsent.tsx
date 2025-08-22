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
      // Set default consent to denied for all parameters (Consent Mode v2)
      if (window.gtag) {
        window.gtag('consent', 'default', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
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
    // Enable Google Analytics and advertising when user consents (Consent Mode v2)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      })
      // Send a pageview event to track the current page
      window.gtag('event', 'page_view')
    }
  }

  const disableGoogleAnalytics = () => {
    // Disable Google Analytics and advertising when user withdraws consent (Consent Mode v2)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
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
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          {!showSettings ? (
            // Main banner
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-3 md:gap-4 flex-1">
                <Cookie className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Cookie-Einstellungen</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
                    Einige Cookies sind technisch notwendig, andere helfen uns dabei, die Website 
                    zu optimieren. Sie können Ihre Einstellungen jederzeit anpassen.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 md:ml-6">
                <Button 
                  variant="outline" 
                  onClick={() => setShowSettings(true)} 
                  size="sm"
                  className="w-full sm:w-auto px-4 md:px-6 text-sm md:text-base"
                >
                  <Settings className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Einstellungen
                </Button>
                <Button 
                  onClick={acceptAll} 
                  size="sm"
                  className="w-full sm:w-auto px-4 md:px-8 py-2 md:py-3 bg-green-600 hover:bg-green-700 text-white text-sm md:text-base"
                >
                  Alle akzeptieren
                </Button>
                <Button
                  variant="ghost"
                  onClick={rejectAll}
                  size="sm"
                  className="w-full sm:w-auto px-4 md:px-6 text-sm md:text-base"
                >
                  Alle ablehnen
                </Button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-semibold">Cookie-Einstellungen anpassen</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {/* Necessary Cookies */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 md:p-4 bg-gray-50 rounded-lg gap-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm md:text-base">Notwendige Cookies</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Technisch erforderlich für die Grundfunktionen der Website
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:flex-shrink-0">
                    <span className="text-xs md:text-sm text-muted-foreground">Immer aktiv</span>
                    <div className="w-10 h-6 md:w-12 md:h-7 bg-green-600 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 md:p-4 bg-gray-50 rounded-lg gap-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm md:text-base">Analytics Cookies</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Google Analytics für Website-Optimierung
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:flex-shrink-0">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => updatePreference("analytics", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-10 h-6 md:w-12 md:h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-3 md:pt-4 border-t">
                <Button 
                  onClick={acceptSelected} 
                  size="sm"
                  className="w-full sm:w-auto px-4 md:px-8 py-2 md:py-3 bg-green-600 hover:bg-green-700 text-white text-sm md:text-base"
                >
                  Auswahl speichern
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(false)}
                  size="sm"
                  className="w-full sm:w-auto px-4 md:px-6 text-sm md:text-base"
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
