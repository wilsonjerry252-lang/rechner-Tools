"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, FileText, User, Mail, Home, Calculator } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  const navigationItems = [
   
    {
      id: "blog",
      label: "Blog",
      href: "/blog",
      icon: FileText
    },
    {
      id: "about",
      label: "Über uns",
      href: "/ueber-uns",
      icon: User
    },
    {
      id: "contact",
      label: "Kontakt",
      href: "/kontakt",
      icon: Mail
    }
  ]

  return (
    <nav 
      className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg sticky top-0 z-50"
      style={{
        position: 'sticky',
        width: '-webkit-fill-available',
        height: '100px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4 logo-container">
              <Image
                src="/logo.png"
                alt="Rechner Tools Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full shadow-md"
                style={{ width: '48px', height: '48px' }}
              />
              <div className="flex flex-col">
                <h3 className="text-3xl font-black logo-text logo-gradient logo-glow tracking-tight">
                  Rechner Tools
                </h3>
                <p className="text-sm logo-subtitle text-blue-100 tracking-wide">
                  Professionelle Online-Rechner
                </p>
              </div>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-all-smooth"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary-foreground/10 transition-all-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu - Full width overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-primary to-primary/95 text-primary-foreground shadow-xl border-t border-primary-foreground/20">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-all-smooth"
                      onClick={handleMobileMenuClose}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  )
                })}
              </div>

              {/* Mobile Quick Actions */}
              <div className="pt-4 border-t border-primary-foreground/20">
                <div className="grid grid-cols-2 gap-3 px-4">
                  <Link
                    href="#vat"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-foreground/10 rounded-lg text-sm font-medium hover:bg-primary-foreground/20 transition-all-smooth"
                    onClick={handleMobileMenuClose}
                  >
                    <Calculator className="h-4 w-4" />
                    MwSt-Rechner
                  </Link>
                  <Link
                    href="#bmi"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-foreground/10 rounded-lg text-sm font-medium hover:bg-primary-foreground/20 transition-all-smooth"
                    onClick={handleMobileMenuClose}
                  >
                    <FileText className="h-4 w-4" />
                    BMI-Rechner
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
