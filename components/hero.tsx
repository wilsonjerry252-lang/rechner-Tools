"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export default function Hero() {
  const [question, setQuestion] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (question.trim()) {
      // Navigate to solve page with query
      window.location.href = `/solve?q=${encodeURIComponent(question)}`
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Homework Buddy: Simple Answers for Smart Kids
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Type your homework question and get a friendly explanation in minutes, not hours.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="bg-white rounded-full shadow-lg p-2 flex items-center gap-2 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Enter your homework question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full outline-none text-foreground placeholder-muted-foreground"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover-lift whitespace-nowrap"
            >
              Get Answer
            </button>
          </div>
        </form>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <Link
            href="/solve?upload=true"
            className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover-lift flex items-center gap-2"
          >
            📸 Upload Photo
          </Link>
          <Link
            href="/#lessons"
            className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover-lift"
          >
            📚 Browse Lessons
          </Link>
        </div>
      </div>
    </section>
  )
}
