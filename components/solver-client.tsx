"use client"

import type React from "react"

import { useState, useRef } from "react"

interface Solution {
  explanation: string
  steps: string[]
  notes: string[]
  similarQuestions: string[]
}

export default function SolverClient() {
  const [question, setQuestion] = useState("")
  const [loading, setLoading] = useState(false)
  const [solution, setSolution] = useState<Solution | null>(null)
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const solveProblem = async (q: string) => {
    if (!q.trim()) {
      setError("Please enter a question")
      return
    }

    setLoading(true)
    setError("")
    setSolution(null)

    try {
      const response = await fetch("/api/solve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: q }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to fetch solution")
      }

      const parsed: Solution = await response.json()
      setSolution(parsed)
    } catch (err: any) {
      setError(err.message || "Oops! Something went wrong. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    solveProblem(question)
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // For now, show a placeholder for file upload
    // In production, this would use OCR to extract text from images
    alert("Photo upload feature coming soon! For now, please type your question.")
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Solver Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Homework Solver</h1>
        <p className="text-lg text-muted-foreground">
          Type your question or upload a photo to get a simple explanation
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Text Input */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Your Question</label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your homework question here... Example: What is 3/4 of 20?"
              className="w-full p-4 rounded-xl border-2 border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
              rows={4}
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Or Upload a Photo (Coming Soon)</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              disabled
              className="w-full p-4 rounded-xl border-2 border-dashed border-border bg-muted/50 text-muted-foreground opacity-50"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Take a photo of your homework and we'll read it for you!
            </p>
          </div>

          {/* Error Message */}
          {error && <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200 text-red-700">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl font-bold text-lg bg-primary text-primary-foreground hover-lift disabled:opacity-50 disabled:hover:transform-none transition-all"
          >
            {loading ? "Thinking..." : "Get Answer"}
          </button>
        </form>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
          <p className="mt-4 text-muted-foreground">Your Homework Buddy is thinking...</p>
        </div>
      )}

      {/* Solution Display */}
      {solution && (
        <div className="space-y-6">
          {/* Simple Explanation */}
          <div className="bg-blue-50 rounded-2xl p-6 border-2 border-primary/20">
            <h2 className="text-xl font-bold text-primary mb-3">Simple Explanation</h2>
            <p className="text-foreground text-lg leading-relaxed">{solution.explanation}</p>
          </div>

          {/* Step-by-Step */}
          <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-accent/20">
            <h2 className="text-xl font-bold text-foreground mb-4">Step-by-Step Solution</h2>
            <div className="space-y-3">
              {solution.steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-green-50 rounded-2xl p-6 border-2 border-secondary/20">
            <h2 className="text-xl font-bold text-foreground mb-4">Important Notes</h2>
            <ul className="space-y-2">
              {solution.notes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  <span className="text-foreground">{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Similar Questions */}
          <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
            <h2 className="text-xl font-bold text-foreground mb-4">Try Similar Questions</h2>
            <div className="space-y-2">
              {solution.similarQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuestion(q)
                    solveProblem(q)
                  }}
                  className="w-full text-left p-3 rounded-lg bg-white border border-border hover:bg-muted transition-colors text-foreground"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                setQuestion("")
                setSolution(null)
              }}
              className="flex-1 py-3 rounded-xl font-semibold border-2 border-primary text-primary hover-lift"
            >
              Ask Another Question
            </button>
            <a
              href="/practice"
              className="flex-1 py-3 rounded-xl font-semibold bg-secondary text-secondary-foreground hover-lift text-center"
            >
              Practice More
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
