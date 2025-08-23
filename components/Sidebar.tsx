"use client"

import React from "react"
import Link from "next/link"
import { Calculator, FileText, User, Mail, Home, Percent, Calendar, TrendingUp } from "lucide-react"

interface SidebarProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Sidebar({ activeSection, scrollToSection }: SidebarProps) {
  const navigationItems = [
    {
      id: "home",
      label: "Startseite",
      icon: Home,
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      type: "scroll"
    },
    {
      id: "vat",
      label: "Mehrwertsteuerrechner",
      icon: Calculator,
      action: () => scrollToSection("vat"),
      type: "scroll"
    },
    {
      id: "percentage",
      label: "Prozentrechner",
      icon: Percent,
      action: () => scrollToSection("percentage"),
      type: "scroll"
    },
    {
      id: "workdays",
      label: "Arbeitstage-Rechner",
      icon: Calendar,
      action: () => scrollToSection("workdays"),
      type: "scroll"
    },
    {
      id: "inflation",
      label: "Inflationsrechner",
      icon: TrendingUp,
      action: () => scrollToSection("inflation"),
      type: "scroll"
    }
  ]

  const externalLinks = [
    {
      id: "blog",
      label: "Blog",
      icon: FileText,
      href: "/blog",
      type: "link"
    },
    {
      id: "about",
      label: "Über uns",
      icon: User,
      href: "/ueber-uns",
      type: "link"
    },
    {
      id: "contact",
      label: "Kontakt",
      icon: Mail,
      href: "/kontakt",
      type: "link"
    }
  ]

  return (
    <aside className="w-64 bg-background border-r border-border min-h-screen sticky top-16">
      <div className="p-6">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="Rechner Tools Logo"
              className="h-8 w-8 rounded-full shadow-md"
            />
            <h3 className="text-lg font-bold logo-text logo-gradient">
              Rechner Tools
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Professionelle Online-Rechner für den deutschsprachigen Raum
          </p>
        </div>

        {/* Navigation Section */}
        <div className="space-y-6">
          {/* Main Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Rechner
            </h3>
            <nav className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all-smooth ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Weitere Seiten
            </h3>
            <nav className="space-y-1">
              {externalLinks.map((item) => {
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted hover:text-foreground transition-all-smooth"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Quick Info */}
          <div className="pt-6 border-t border-border">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Länder
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>🇩🇪</span> Deutschland
              </div>
              <div className="flex items-center gap-2">
                <span>🇦🇹</span> Österreich
              </div>
              <div className="flex items-center gap-2">
                <span>🇨🇭</span> Schweiz
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
