"use client"

import Link from "next/link"

const lessons = [
  {
    title: "Fractions Basics",
    grade: "Grade 5",
    subject: "Math",
    duration: "5 min",
    color: "bg-blue-50",
  },
  {
    title: "Photosynthesis",
    grade: "Grade 7",
    subject: "Science",
    duration: "4 min",
    color: "bg-green-50",
  },
  {
    title: "World Maps",
    grade: "Grade 6",
    subject: "Geography",
    duration: "5 min",
    color: "bg-teal-50",
  },
  {
    title: "Grammar Basics",
    grade: "Grade 8",
    subject: "English",
    duration: "6 min",
    color: "bg-yellow-50",
  },
  {
    title: "Ancient Egypt",
    grade: "Grade 7",
    subject: "History",
    duration: "5 min",
    color: "bg-orange-50",
  },
  {
    title: "Forces & Motion",
    grade: "Grade 6",
    subject: "Science",
    duration: "5 min",
    color: "bg-purple-50",
  },
]

export default function MicroLessonsPreview() {
  return (
    <section id="lessons" className="py-16 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-foreground text-center mb-4">Learn Something Quick</h3>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Short lessons that make learning easy. Each lesson takes just a few minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {lessons.map((lesson) => (
            <Link key={lesson.title} href={`/lessons/${lesson.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className={`${lesson.color} p-6 rounded-2xl hover-lift cursor-pointer h-full`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{lesson.title}</h4>
                    <p className="text-sm text-muted-foreground">{lesson.subject}</p>
                  </div>
                  <span className="text-2xl">📖</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-1 rounded-full bg-white/60 text-foreground font-medium">{lesson.grade}</span>
                  <span className="text-muted-foreground font-medium">{lesson.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/lessons"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover-lift"
          >
            Browse All Lessons
          </Link>
        </div>
      </div>
    </section>
  )
}
