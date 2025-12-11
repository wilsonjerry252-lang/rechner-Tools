import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LessonDetail from "@/components/lesson-detail"

export const metadata: Metadata = {
  title: "Lesson Detail - Homework Buddy",
  description: "Read the full lesson and take the quick quiz to test your knowledge.",
}

export default function LessonPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50">
      <Header />
      <main className="flex-1">
        <LessonDetail lessonId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
