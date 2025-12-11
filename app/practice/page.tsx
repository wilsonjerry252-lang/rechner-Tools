import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PracticeClient from "@/components/practice-client"

export const metadata: Metadata = {
  title: "Practice Quizzes - Test Your Knowledge",
  description:
    "Generate unlimited practice quizzes for any subject. Get instant feedback and explanations for every answer.",
  robots: "index, follow",
}

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50">
      <Header />
      <main className="flex-1">
        <PracticeClient />
      </main>
      <Footer />
    </div>
  )
}
