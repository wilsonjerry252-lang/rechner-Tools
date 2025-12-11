"use client"

import Link from "next/link"

const subjects = [
  {
    name: "Math",
    icon: "🧮",
    color: "bg-blue-100",
    topics: ["Fractions", "Algebra", "Geometry"],
  },
  {
    name: "English",
    icon: "📖",
    color: "bg-yellow-100",
    topics: ["Grammar", "Reading", "Writing"],
  },
  {
    name: "Science",
    icon: "🔬",
    color: "bg-green-100",
    topics: ["Biology", "Physics", "Chemistry"],
  },
  {
    name: "Geography",
    icon: "🌍",
    color: "bg-teal-100",
    topics: ["Maps", "Continents", "Weather"],
  },
  {
    name: "History",
    icon: "🏛️",
    color: "bg-orange-100",
    topics: ["Ancient", "Medieval", "Modern"],
  },
  {
    name: "Social Studies",
    icon: "👥",
    color: "bg-purple-100",
    topics: ["Government", "Culture", "Economy"],
  },
]

export default function SubjectCards() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-foreground text-center mb-4">Popular Subjects</h3>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Pick your subject to find lessons and practice questions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Link key={subject.name} href={`/lessons?subject=${subject.name.toLowerCase()}`} className="group">
              <div className={`${subject.color} p-8 rounded-2xl hover-lift cursor-pointer transition-all`}>
                <div className="text-5xl mb-4">{subject.icon}</div>
                <h4 className="text-2xl font-bold text-foreground mb-3">{subject.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {subject.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-3 py-1 rounded-full bg-white/60 text-foreground font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
