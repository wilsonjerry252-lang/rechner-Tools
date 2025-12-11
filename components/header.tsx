"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover-lift">
          <Image src="/homework-buddy-logo.svg" alt="Homework Buddy" width={48} height={48} className="w-12 h-12" />
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold text-primary">Homework Buddy</h1>
            <p className="text-xs text-muted-foreground">Simple Answers, Smart Learning</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#lessons" className="text-foreground hover:text-primary transition-colors font-medium">
            Lessons
          </Link>
          <Link href="/solve" className="text-foreground hover:text-primary transition-colors font-medium">
            Homework Solver
          </Link>
          <Link href="/practice" className="text-foreground hover:text-primary transition-colors font-medium">
            Practice
          </Link>
          <Link
            href="/parents"
            className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-semibold hover-lift"
          >
            Parent Mode
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-muted border-t">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3 flex flex-col">
            <Link href="/#lessons" className="text-foreground font-medium py-2">
              Lessons
            </Link>
            <Link href="/solve" className="text-foreground font-medium py-2">
              Homework Solver
            </Link>
            <Link href="/practice" className="text-foreground font-medium py-2">
              Practice
            </Link>
            <Link
              href="/parents"
              className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-semibold text-center"
            >
              Parent Mode
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
