import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import SubjectCards from "@/components/subject-cards"
import MicroLessonsPreview from "@/components/micro-lessons-preview"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Homework Buddy - Simple Homework Explanations for Kids",
  description:
    "Get simple explanations for any homework question. AI-powered homework helper for ages 10-15 with step-by-step solutions and mini lessons.",
  keywords: "homework help, homework solver, math help, science explained, learning platform, homework for kids",
  openGraph: {
    title: "Homework Buddy",
    description: "Simple answers for homework questions",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-blue-50 to-background">
      <Header />
      <Hero />
      <SubjectCards />
      <MicroLessonsPreview />
      <Footer />
    </div>
  )
}
