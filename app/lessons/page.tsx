import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LessonsGrid from "@/components/lessons-grid"

export const metadata: Metadata = {
  title: "Micro Lessons - Learn Something Quick",
  description: "Short, simple lessons for every subject. Each lesson takes just 5 minutes. Perfect for homework help.",
  robots: "index, follow",
}

const lessonsBySubject = {
  math: [
    {
      id: 1,
      title: "Fractions Basics",
      grade: "Grade 5",
      duration: "5 min",
      topics: ["Introduction to fractions", "Numerator and denominator", "Simple fractions"],
    },
    {
      id: 2,
      title: "Decimals",
      grade: "Grade 5",
      duration: "5 min",
      topics: ["What are decimals", "Converting fractions to decimals", "Decimal places"],
    },
    {
      id: 3,
      title: "Geometry Shapes",
      grade: "Grade 6",
      duration: "5 min",
      topics: ["Triangles", "Squares and rectangles", "Circles"],
    },
  ],
  science: [
    {
      id: 4,
      title: "Photosynthesis",
      grade: "Grade 7",
      duration: "5 min",
      topics: ["How plants make food", "Chlorophyll", "Light and energy"],
    },
    {
      id: 5,
      title: "Atoms",
      grade: "Grade 8",
      duration: "4 min",
      topics: ["What atoms are", "Electrons and protons", "Elements"],
    },
    {
      id: 6,
      title: "Forces & Motion",
      grade: "Grade 6",
      duration: "5 min",
      topics: ["What is force", "Newton's laws", "Speed and velocity"],
    },
  ],
  english: [
    { id: 7, title: "Grammar Basics", grade: "Grade 6", duration: "5 min", topics: ["Nouns", "Verbs", "Adjectives"] },
    {
      id: 8,
      title: "Reading Comprehension",
      grade: "Grade 7",
      duration: "6 min",
      topics: ["Understanding main ideas", "Finding details", "Asking questions"],
    },
    {
      id: 9,
      title: "Writing Paragraphs",
      grade: "Grade 8",
      duration: "6 min",
      topics: ["Topic sentences", "Supporting details", "Conclusions"],
    },
  ],
  geography: [
    {
      id: 10,
      title: "World Maps",
      grade: "Grade 6",
      duration: "5 min",
      topics: ["Continents", "Oceans", "Map reading"],
    },
    {
      id: 11,
      title: "Weather Patterns",
      grade: "Grade 7",
      duration: "5 min",
      topics: ["Climate zones", "Weather systems", "Seasons"],
    },
    {
      id: 12,
      title: "Continents",
      grade: "Grade 5",
      duration: "4 min",
      topics: ["Seven continents", "Countries", "Natural features"],
    },
  ],
}

export default function LessonsPage({ searchParams }: { searchParams: { subject?: string } }) {
  const subject = (searchParams.subject || "math").toLowerCase()
  const lessons = lessonsBySubject[subject as keyof typeof lessonsBySubject] || lessonsBySubject.math

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50">
      <Header />
      <main className="flex-1">
        <LessonsGrid subject={subject} lessons={lessons} />
      </main>
      <Footer />
    </div>
  )
}
