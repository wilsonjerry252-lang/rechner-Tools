"use client"

import { useState } from "react"
import Link from "next/link"

interface Question {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export default function PracticeClient() {
  const [subject, setSubject] = useState<string>("")
  const [difficulty, setDifficulty] = useState<string>("medium")
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const subjects = ["Math", "Science", "English", "Geography", "History", "Social Studies"]
  const difficulties = [
    { value: "easy", label: "Easy (Grade 4-5)" },
    { value: "medium", label: "Medium (Grade 6-7)" },
    { value: "hard", label: "Hard (Grade 8+)" },
  ]

  const generateQuiz = async () => {
    if (!subject) {
      setError("Please select a subject")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/generate-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          difficulty,
          numQuestions: 5,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to generate quiz")
      }

      const data = await response.json()
      setQuestions(data.questions)
      setQuizStarted(true)
      setCurrentQuestion(0)
      setAnswers(new Array(data.questions.length).fill(-1))
      setShowResults(false)
    } catch (err: any) {
      setError(err.message || "Oops! Something went wrong.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const correctCount = answers.filter((answer, idx) => answer === questions[idx].correct).length

  if (!quizStarted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Practice Quizzes</h1>
          <p className="text-lg text-muted-foreground">Test your knowledge with unlimited quizzes</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-8">
            {/* Subject Selection */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-4">Pick Your Subject</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {subjects.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSubject(s)}
                    className={`p-4 rounded-xl font-semibold transition-all ${
                      subject === s
                        ? "bg-primary text-primary-foreground scale-105"
                        : "bg-muted text-foreground hover:bg-muted/80 hover-lift"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Selection */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-4">Choose Difficulty</label>
              <div className="space-y-3">
                {difficulties.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setDifficulty(d.value)}
                    className={`w-full p-4 rounded-xl font-semibold text-left transition-all ${
                      difficulty === d.value
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {error && <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200 text-red-700">{error}</div>}

            {/* Generate Button */}
            <button
              onClick={generateQuiz}
              disabled={loading || !subject}
              className="w-full py-4 rounded-xl font-bold text-lg bg-primary text-primary-foreground hover-lift disabled:opacity-50 disabled:hover:transform-none"
            >
              {loading ? "Generating Quiz..." : "Start Quiz"}
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-blue-50 p-6 rounded-2xl border-2 border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-2">5 Questions</h3>
            <p className="text-muted-foreground">Each quiz has 5 carefully crafted questions</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-2xl border-2 border-accent/20">
            <h3 className="text-xl font-bold text-foreground mb-2">Instant Feedback</h3>
            <p className="text-muted-foreground">Get explanations for every answer</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl border-2 border-secondary/20">
            <h3 className="text-xl font-bold text-foreground mb-2">Unlimited Quizzes</h3>
            <p className="text-muted-foreground">Generate as many quizzes as you want</p>
          </div>
        </div>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Results Header */}
        <div className="bg-green-50 rounded-2xl p-8 border-2 border-secondary text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Quiz Complete!</h1>
          <p className="text-5xl font-bold text-primary mb-4">
            {correctCount}/{questions.length}
          </p>
          <p className="text-xl text-muted-foreground">
            {correctCount === questions.length
              ? "Perfect score! You're a star!"
              : correctCount >= 3
                ? "Great job! You did really well!"
                : "Good effort! Keep practicing!"}
          </p>
        </div>

        {/* Review Section */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-foreground">Review Your Answers</h2>
          {questions.map((q, idx) => {
            const isCorrect = answers[idx] === q.correct
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border-2 ${
                  isCorrect ? "bg-green-50 border-secondary" : "bg-red-50 border-red-200"
                }`}
              >
                <p className="font-bold text-lg text-foreground mb-4">
                  Question {idx + 1}: {q.question}
                </p>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Your answer:</p>
                  <p className={`font-semibold ${isCorrect ? "text-secondary" : "text-red-600"}`}>
                    {q.options[answers[idx]]}
                  </p>
                </div>
                {!isCorrect && (
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Correct answer:</p>
                    <p className="font-semibold text-secondary">{q.options[q.correct]}</p>
                  </div>
                )}
                <div className="p-4 bg-white rounded-lg border border-border">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Why:</p>
                  <p className="text-foreground">{q.explanation}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => {
              setQuizStarted(false)
              setSubject("")
              setCurrentQuestion(0)
              setAnswers([])
            }}
            className="flex-1 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover-lift"
          >
            Try Another Quiz
          </button>
          <Link
            href="/lessons"
            className="flex-1 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover-lift text-center"
          >
            Learn More
          </Link>
          <Link
            href="/"
            className="flex-1 py-3 rounded-xl border-2 border-foreground text-foreground font-semibold hover-lift text-center"
          >
            Home
          </Link>
        </div>
      </div>
    )
  }

  const q = questions[currentQuestion]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <span className="text-sm text-muted-foreground">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-8">{q.question}</h3>

        {/* Options */}
        <div className="space-y-3">
          {q.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className={`w-full text-left p-4 rounded-xl border-2 font-semibold transition-all ${
                answers[currentQuestion] === idx
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted border-border hover:bg-muted/80"
              }`}
            >
              <span className="inline-block w-6 h-6 rounded-full border-2 mr-3 text-center font-bold">
                {String.fromCharCode(65 + idx)}
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="flex-1 py-3 rounded-xl border-2 border-foreground text-foreground font-semibold hover-lift disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={answers[currentQuestion] === -1}
          className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover-lift disabled:opacity-50"
        >
          {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
        </button>
      </div>
    </div>
  )
}
