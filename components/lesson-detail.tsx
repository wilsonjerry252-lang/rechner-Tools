"use client"

import { useState } from "react"
import Link from "next/link"

// Sample lesson data - in production, this would come from a database
const lessonData: Record<string, any> = {
  "1": {
    title: "Fractions Basics",
    subject: "Math",
    grade: "Grade 5",
    content: `A fraction is a part of a whole thing. Imagine you have a pizza cut into 8 equal slices. If you eat 3 slices, you've eaten 3/8 of the pizza.

The number on top (3) is called the numerator. It tells you how many parts you have.
The number on the bottom (8) is called the denominator. It tells you how many equal parts the whole thing is divided into.

Here's an easy way to remember: think of a fraction as "some out of all".`,
    quizQuestions: [
      {
        question: "If a pizza is cut into 6 slices and you eat 2, what fraction did you eat?",
        options: ["2/6", "6/2", "2/4", "4/6"],
        correct: 0,
      },
      {
        question: "In the fraction 5/7, what does the 5 represent?",
        options: ["How many parts total", "How many parts you have", "How many pizzas", "Nothing"],
        correct: 1,
      },
      {
        question: "In the fraction 5/7, what does the 7 represent?",
        options: ["How many parts you have", "How many parts total", "Seven pizzas", "The answer"],
        correct: 1,
      },
    ],
  },
}

export default function LessonDetail({ lessonId }: { lessonId: string }) {
  const lesson = lessonData[lessonId]
  const [quizStarted, setQuizStarted] = useState(false)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  if (!lesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-foreground">Lesson not found</h1>
        <Link href="/lessons" className="inline-block mt-4 px-6 py-2 rounded-full bg-primary text-primary-foreground">
          Back to Lessons
        </Link>
      </div>
    )
  }

  const correctCount = answers.filter((answer, idx) => answer === lesson.quizQuestions[idx].correct).length

  const handleQuizSubmit = () => {
    setShowResults(true)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Lesson Header */}
      <div className="mb-8">
        <Link href="/lessons" className="text-primary font-semibold hover:underline">
          ← Back to Lessons
        </Link>
        <h1 className="text-4xl font-bold text-foreground mt-4 mb-2">{lesson.title}</h1>
        <div className="flex gap-4 text-muted-foreground">
          <span>{lesson.subject}</span>
          <span>{lesson.grade}</span>
          <span>5 min read</span>
        </div>
      </div>

      {!quizStarted ? (
        <>
          {/* Lesson Content */}
          <div className="bg-white rounded-2xl p-8 shadow-md mb-8 border-2 border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">What You'll Learn</h2>
            <div className="prose prose-lg max-w-none text-foreground whitespace-pre-line leading-relaxed">
              {lesson.content}
            </div>
          </div>

          {/* Start Quiz Button */}
          <div className="text-center">
            <button
              onClick={() => {
                setQuizStarted(true)
                setAnswers(new Array(lesson.quizQuestions.length).fill(-1))
              }}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover-lift"
            >
              Take the Quiz
            </button>
          </div>
        </>
      ) : !showResults ? (
        <>
          {/* Quiz */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Quick Quiz</h2>
            {lesson.quizQuestions.map((q: any, idx: number) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-border">
                <p className="font-bold text-lg text-foreground mb-4">
                  Question {idx + 1}: {q.question}
                </p>
                <div className="space-y-3">
                  {q.options.map((option: string, optIdx: number) => (
                    <button
                      key={optIdx}
                      onClick={() => {
                        const newAnswers = [...answers]
                        newAnswers[idx] = optIdx
                        setAnswers(newAnswers)
                      }}
                      className={`w-full text-left p-4 rounded-lg border-2 font-semibold transition-all ${
                        answers[idx] === optIdx
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-muted border-border hover:bg-muted/80"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Submit Quiz */}
            <button
              onClick={handleQuizSubmit}
              disabled={answers.includes(-1)}
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover-lift disabled:opacity-50"
            >
              Submit Quiz
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Quiz Results */}
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-secondary text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Great Job!</h2>
            <p className="text-4xl font-bold text-primary mb-4">
              {correctCount}/{lesson.quizQuestions.length}
            </p>
            <p className="text-lg text-muted-foreground">
              You got {correctCount === lesson.quizQuestions.length ? "all" : correctCount} question
              {correctCount !== 1 ? "s" : ""} correct!
            </p>
          </div>

          {/* Review Answers */}
          <div className="space-y-6 mb-8">
            <h3 className="text-2xl font-bold text-foreground">Review Your Answers</h3>
            {lesson.quizQuestions.map((q: any, idx: number) => {
              const isCorrect = answers[idx] === q.correct
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border-2 ${
                    isCorrect ? "bg-green-50 border-secondary" : "bg-red-50 border-red-200"
                  }`}
                >
                  <p className="font-bold text-foreground mb-3">{q.question}</p>
                  <p className="text-foreground mb-3">
                    Your answer: <span className="font-semibold">{q.options[answers[idx]]}</span>
                  </p>
                  {!isCorrect && (
                    <p className="text-foreground">
                      Correct answer: <span className="font-semibold text-secondary">{q.options[q.correct]}</span>
                    </p>
                  )}
                </div>
              )
            })}
          </div>

          {/* Next Steps */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                setQuizStarted(false)
                setShowResults(false)
              }}
              className="flex-1 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover-lift"
            >
              Retake Quiz
            </button>
            <Link
              href="/practice"
              className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover-lift text-center"
            >
              More Practice
            </Link>
            <Link
              href="/lessons"
              className="flex-1 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover-lift text-center"
            >
              Next Lesson
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
