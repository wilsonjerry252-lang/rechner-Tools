"use client"

import Link from "next/link"

const subjects = ["math", "science", "english", "geography", "history", "social studies"]
const subjectColors: Record<string, string> = {
  math: "bg-blue-100",
  science: "bg-green-100",
  english: "bg-yellow-100",
  geography: "bg-teal-100",
  history: "bg-orange-100",
  "social studies": "bg-purple-100",
}

interface Lesson {
  id: number
  title: string
  grade: string
  duration: string
  topics: string[]
}

export default function LessonsGrid({ subject, lessons }: { subject: string; lessons: Lesson[] }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4 capitalize">{subject} Lessons</h1>
        <p className="text-lg text-muted-foreground">
          Short lessons that make learning easy. Each takes just 5 minutes!
        </p>
      </div>

      {/* Subject Filter */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-muted-foreground mb-4">Filter by subject:</p>
        <div className="flex flex-wrap gap-3">
          {subjects.map((s) => (
            <Link
              key={s}
              href={`/lessons?subject=${s}`}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                subject === s
                  ? "bg-primary text-primary-foreground scale-110"
                  : "bg-muted text-foreground hover:bg-muted/80 hover-lift"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/lessons/${lesson.id}`}>
            <div className={`${subjectColors[subject]} p-6 rounded-2xl hover-lift cursor-pointer h-full flex flex-col`}>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">{lesson.title}</h3>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full bg-white/60 text-foreground text-xs font-medium">
                    {lesson.grade}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-white/60 text-foreground text-xs font-medium">
                    {lesson.duration}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                {lesson.topics.map((topic, idx) => (
                  <p key={idx} className="text-sm text-foreground">
                    • {topic}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Back Button */}
      <div className="text-center mt-12">
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover-lift"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
